# Writing blog posts

Each post is one markdown file in this folder: `content/blog/`. The file name
becomes the URL — `my-post.md` is served at `/blog/my-post`. Add a file, commit
it, and it appears on `/blog` automatically, newest first.

> This README is ignored by the blog (only `.md` files that aren't `README` show
> up). It's just documentation.

## Frontmatter

Every post starts with a block between `---` lines:

```markdown
---
title: Turning followers into members
date: 2026-07-10
excerpt: A one- or two-sentence summary shown on the blog listing.
author: TheSpotMind
cover: /blog/turning-followers-into-members/cover.jpg
---
```

| Field     | Required | Notes                                                        |
| --------- | -------- | ------------------------------------------------------------ |
| `title`   | yes      | Post title.                                                  |
| `date`    | yes      | `YYYY-MM-DD`. Controls ordering (newest first).              |
| `excerpt` | yes      | Shown on the listing card and used as the meta description.  |
| `author`  | no       | Defaults to `TheSpotMind`.                                   |
| `cover`   | no       | Image shown as a thumbnail on the listing and a hero on top. |

## Images

Put image files under `public/blog/<post-slug>/` and reference them with a path
that starts at `/blog/...`:

```markdown
![Alt text describing the image](/blog/my-post/diagram.png)
```

Add a caption by putting text in quotes after the path — it renders under the
image:

```markdown
![Alt text](/blog/my-post/diagram.png "This caption appears under the image.")
```

Images are automatically responsive and lazy-loaded. Remote image URLs
(`https://...`) work too, if you'd rather not commit the file.

## YouTube videos

Paste the video's URL **on its own line**, with a blank line above and below:

```markdown
Here's the walkthrough:

https://www.youtube.com/watch?v=VIDEO_ID

And back to the text.
```

It becomes a responsive, privacy-friendly player. `youtu.be/…` and
`youtube.com/shorts/…` links work as well. A YouTube link placed *inside* a
sentence stays an ordinary link — only a line that is nothing but the URL turns
into a video.
