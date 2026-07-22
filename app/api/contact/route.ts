// Contact form delivery via Resend's HTTP API (no SDK — plain fetch), mirroring
// the dashboard's src/email.js so both products send from the same verified
// domain and look alike in the inbox.
//
// The recipient lives here and in the environment, never in the client: the
// browser posts a name/email/message and nothing else, so no one can retarget
// where our mail lands by tampering with the request.
const RESEND_ENDPOINT = "https://api.resend.com/emails";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "team@thespotmind.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "TheSpotMind <no-reply@send.thespotmind.com>";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;
  const cleanName = String(name ?? "").trim();
  const cleanEmail = String(email ?? "").trim();
  const cleanMessage = String(message ?? "").trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(cleanEmail)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }
  // Generous, but stops someone pasting a novel into our inbox.
  if (cleanMessage.length > 5000) {
    return Response.json({ error: "message_too_long" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    // Loud on the server, quiet to the visitor: they get a real error rather
    // than a "thanks!" for a message nobody will ever read.
    console.error("[contact] RESEND_API_KEY not set — enquiry not delivered");
    return Response.json({ error: "email_not_configured" }, { status: 500 });
  }

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      // Hitting reply in the inbox answers the person who wrote in, rather than
      // a no-reply address.
      reply_to: cleanEmail,
      subject: `New enquiry from ${cleanName}`,
      html: enquiryHtml({
        name: cleanName,
        email: cleanEmail,
        message: cleanMessage,
      }),
      text:
        `New enquiry from the website\n\n` +
        `Name:    ${cleanName}\n` +
        `Email:   ${cleanEmail}\n\n` +
        `${cleanMessage}\n`,
    }),
  });

  if (!res.ok) {
    // Never surface provider details to the browser; log for the operator.
    let detail = "";
    try {
      detail = JSON.stringify(await res.json());
    } catch {
      /* ignore */
    }
    console.error("[contact] Resend send failed:", res.status, detail);
    return Response.json({ error: "email_send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

function enquiryHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#0a0a0a;">
  <div style="max-width:520px;margin:0 auto;padding:32px 24px;font-family:Inter,Helvetica,Arial,sans-serif;color:#ffffff;">
    <div style="font-family:Outfit,Helvetica,Arial,sans-serif;font-size:22px;font-weight:800;letter-spacing:-0.02em;margin-bottom:24px;">
      TheSpot<span style="color:#f472b6;">Mind</span>
    </div>
    <div style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:14px;padding:28px;">
      <p style="margin:0 0 22px;font-size:16px;">New enquiry from the website</p>
      <table cellpadding="0" cellspacing="0" style="width:100%;margin:0 0 22px;">
        ${detailRow("Name", name)}
        ${detailRow("Email", email)}
      </table>
      <div style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:18px;
                  font-size:14px;line-height:1.65;color:#aaaaaa;white-space:pre-wrap;">${escapeHtml(message)}</div>
      <p style="margin:22px 0 0;font-size:12px;line-height:1.6;color:#8a8a8a;">
        Reply to this email to answer ${escapeHtml(name)} directly.
      </p>
    </div>
    <p style="margin:20px 0 0;font-size:11px;color:#8a8a8a;text-align:center;">
      TheSpotMind &middot; thespotmind.com
    </p>
  </div></body></html>`;
}

function detailRow(label: string, value: string) {
  return `<tr>
    <td style="padding:7px 0;font-size:13px;color:#8a8a8a;">${escapeHtml(label)}</td>
    <td style="padding:7px 0;font-size:13px;color:#ffffff;text-align:right;">${escapeHtml(value)}</td>
  </tr>`;
}

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
