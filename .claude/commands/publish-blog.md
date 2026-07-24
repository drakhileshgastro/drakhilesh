---
name: publish-blog
description: End-to-end blog publisher for drakhileshgastro.com. Give one keyword → the pipeline researches, writes, reviews, publishes to blog-data.ts, commits, and submits to Google Search Console. Usage: /publish-blog <keyword>
---

# Blog Publisher — Dr. Akhilesh Gastro

You are the **orchestrator** for an end-to-end medical blog pipeline. The user has given you a **single keyword** (or phrase). Your job is to run 6 stages in sequence and deliver a fully published, indexed blog post.

## Input
The keyword is provided after the `/publish-blog` command. Example:
- `/publish-blog fatty liver symptoms in hindi`
- `/publish-blog gallstone diet chart ranchi`
- `/publish-blog endoscopy cost ranchi`

If no keyword is given, ask: "Please provide the target keyword for the blog post."

---

## Pipeline Overview

Run these 6 stages IN SEQUENCE. Each stage's output feeds the next. Do NOT skip stages.

```
KEYWORD
  │
  ▼
[STAGE 1] RESEARCH ──→ research-report.json
  │
  ▼
[STAGE 2] ARCHITECTURE ──→ content-brief.md
  │
  ▼
[STAGE 3] WRITING ──→ blog-draft.ts
  │
  ▼
[STAGE 4] REVIEW ──→ review-report.md + final-blog.ts
  │
  ▼
[STAGE 5] PUBLISH ──→ blog-data.ts updated + git commit
  │
  ▼
[STAGE 6] INDEX ──→ GSC submitted + internal links added
```

---

## STAGE 1: RESEARCH

Spawn the **blog-researcher** sub-agent with:
```
keyword: [the user's keyword]
location: Ranchi, Jharkhand + 200km radius (Bokaro, Hazaribagh, Jamshedpur, Dhanbad, Deoghar, Palamu, Giridih, Gaya Bihar, Chaibasa)
language: Hindi + English (Hinglish medical content)
doctor: Dr. Akhilesh Yadav — Gastroenterologist & Hepatologist — Orchid Medical Centre, Ranchi
```

Wait for the research report before proceeding. Show the user a summary: "Research complete — found [N] PAA questions, [N] competitor pages, [N] Quora threads."

---

## STAGE 2: ARCHITECTURE

Spawn the **blog-architect** sub-agent with the research report.

Wait for the content brief before proceeding. Show the user: "Architecture ready — [N]-section outline, target word count [N], [N] FAQs planned."

---

## STAGE 3: WRITING

Spawn the **blog-writer** sub-agent with the content brief.

Wait for the draft. Show the user: "Draft complete — [N] words, [N] sections, [N] FAQs written."

---

## STAGE 4: REVIEW

Spawn the **blog-reviewer** sub-agent with the draft.

If score ≥ 10/15: proceed to publish.
If score < 10/15: show the user what needs fixing, re-run the writer agent with reviewer feedback, then review again.

Show the user: "Review score: [N]/15 — [APPROVED / NEEDS REVISION]"

---

## STAGE 5: PUBLISH

Spawn the **blog-publisher-writer** sub-agent with the approved final draft.

This agent will:
1. Append the blog entry to `src/data/blog-data.ts`
2. Stage and commit to git
3. Confirm the commit hash

Show the user: "Published to blog-data.ts — commit [hash]. Now push to GitHub to deploy: `git push origin main`"

---

## STAGE 6: INDEX

Spawn the **blog-indexer** sub-agent with:
- The blog slug
- The published URL: `https://drakhileshgastro.com/blog/[slug]`

This agent will:
1. Add internal links from 3 related existing blog posts
2. Ping Google Search Console URL Inspection API
3. Output the indexing status

Show the user: "Indexing submitted. Check GSC in 24–48 hours at: https://search.google.com/search-console"

---

## Final Output to User

```
✅ BLOG PIPELINE COMPLETE
══════════════════════════
Keyword:     [keyword]
Slug:        /blog/[slug]
Word Count:  [N] words
FAQs:        [N] questions
Score:       [N]/15
Commit:      [hash]
Live URL:    https://drakhileshgastro.com/blog/[slug]

Next steps:
1. git push origin main  (deploys to Vercel in ~2 min)
2. Check GSC in 24–48 hrs
3. Add to social media schedule
```

---

## Error Handling

- If WebSearch is unavailable: skip SERP research, use Quora + Reddit only
- If git push fails: remind user to run `git push origin main` manually
- If review score never reaches 10: show the draft anyway with a warning, ask user if they want to publish anyway
- If the keyword is already in blog-data.ts: warn the user "A post for this keyword already exists at [slug]. Do you want to create a variation or update the existing post?"
