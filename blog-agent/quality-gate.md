# Blog Quality Gate — drakhileshgastro.com
## 15-Point E-E-A-T Checklist + TypeScript Format Validation

Every blog MUST score **12/15 minimum** before being published.
Score below 12 → revise before commit.
Any YMYL violation → automatic reject regardless of score.

---

## PART A — YMYL Safety Check (Auto-Fail if Any Violated)

These are hard stops. ONE violation = reject the entire draft.

| # | Rule | Check |
|---|---|---|
| A1 | No dosage advice ("1 tablet twice daily", "500mg") | [ ] |
| A2 | No diagnostic claims ("This means you have X disease") | [ ] |
| A3 | No treatment promises ("This will cure your condition") | [ ] |
| A4 | No claims discouraging hospital/doctor visits | [ ] |
| A5 | No unverified statistics (% without source) | [ ] |
| A6 | No specific drug brand names without prescription context | [ ] |
| A7 | No emergency minimization (downplaying serious symptoms) | [ ] |
| A8 | No absolute outcome claims ("painless", "100% safe", "permanent cure") | [ ] |

**If ALL A1–A8 pass → proceed to Part B scoring.**

---

## PART B — E-E-A-T Score (15 points)

### Experience Signals (0–5 points)

| # | Criteria | Points | Check |
|---|---|---|---|
| E1 | Opens with a specific patient scenario (name, city, condition, result) — not a generic statement | +2 | [ ] |
| E2 | Mentions a specific patient outcome or recovery (anonymized is fine) | +1 | [ ] |
| E3 | Includes Ranchi/Jharkhand-specific context (local food, geography, disease burden) | +1 | [ ] |
| E4 | Uses "Dr. Akhilesh Yadav ne note kiya / dekha / kehte hain" style attribution | +1 | [ ] |

**Experience subtotal: ___ / 5**

### Expertise Signals (0–4 points)

| # | Criteria | Points | Check |
|---|---|---|---|
| X1 | Advice is gastroenterology-specific — not generic "drink water and eat vegetables" | +1 | [ ] |
| X2 | Medical terms explained in Hindi immediately after use | +1 | [ ] |
| X3 | At least one verified medical fact or clinical guideline mentioned | +1 | [ ] |
| X4 | Condition covered with appropriate diagnostic nuance (not oversimplified) | +1 | [ ] |

**Expertise subtotal: ___ / 4**

### Authority Signals (0–3 points)

| # | Criteria | Points | Check |
|---|---|---|---|
| AU1 | "Dr. Akhilesh Yadav" mentioned ≥ 3 times with credentials | +1 | [ ] |
| AU2 | "Orchid Medical Centre, Ranchi" mentioned ≥ 2 times | +1 | [ ] |
| AU3 | Minimum 3 internal links (to conditions, procedures, or /book) | +1 | [ ] |

**Authority subtotal: ___ / 3**

### Trust Signals (0–3 points)

| # | Criteria | Points | Check |
|---|---|---|---|
| T1 | FAQs array has ≥ 4 items, each with specific accurate answers | +1 | [ ] |
| T2 | Disclaimer present: "Yeh article sirf educational purpose ke liye hai" | +1 | [ ] |
| T3 | Appointment CTA present with phone number and WhatsApp link | +1 | [ ] |

**Trust subtotal: ___ / 3**

### TOTAL E-E-A-T SCORE: ___ / 15

**12–15**: APPROVE ✅
**10–11**: APPROVE WITH MINOR REVISIONS ⚠️
**Below 10**: REJECT — revise and recheck ❌

---

## PART C — SEO Quality Check

| Field | Rule | Pass/Fail |
|---|---|---|
| `metaTitle` | ≤ 60 characters, contains primary keyword | |
| `metaDescription` | ≤ 155 characters, contains keyword + CTA hint | |
| `slug` | lowercase, hyphens only, no Hindi characters, no spaces | |
| Primary keyword | Appears in: titleHi/titleEn, metaTitle, first section heading | |
| Secondary keywords | At least 3 secondary keywords spread across sections | |
| Tags | 4–6 tags, all relevant to the topic | |

---

## PART D — TypeScript Format Validation

The BlogPost object MUST match this exact interface:

```typescript
interface BlogPost {
  slug: string;               // URL-safe, hyphens only
  titleHi: string;            // Hindi/Hinglish title for page H1
  titleEn: string;            // English title (for meta/OG fallback)
  excerptHi: string;          // 1-2 sentence Hindi summary (for blog card)
  excerptEn: string;          // 1-2 sentence English summary
  category: string;           // See valid categories below
  readTimeMins: number;       // integer, typically 6–9
  publishedAt: string;        // "Month Year" format e.g. "August 2026"
  emoji: string;              // single emoji (for visual accent)
  image?: string;             // optional image path
  tags: string[];             // 4–6 tags as string array
  metaTitle: string;          // SEO title ≤ 60 chars
  metaDescription: string;    // SEO description ≤ 155 chars
  sections: BlogSection[];    // 4–6 sections (see below)
  faqs?: { q: string; a: string }[];  // 3–6 FAQs
}

interface BlogSection {
  heading?: string;           // H2/H3 heading text
  content: string;            // paragraph text
  list?: string[];            // bullet points (if type="list")
  type?: "text" | "list" | "tip" | "warning";
}
```

### Valid Categories
```
"conditions" | "procedures" | "symptoms" | "diet" | "locations" | "tests"
```

### Section Type Guide
| type | When to use |
|---|---|
| "text" | Narrative paragraphs — most common |
| "list" | When content is naturally a list (symptoms, foods, steps) |
| "tip" | Expert advice section — always the LAST section with CTA |
| "warning" | Red flags / emergency symptoms — use sparingly |

### Standard Last Section (tip type — MANDATORY in every blog)
```typescript
{
  heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — [topic]",
  type: "tip",
  content: "[2-3 sentences of Dr. Akhilesh's advice]\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
}
```

### Format Checklist
| Field | Check |
|---|---|
| `sections` array exists (not `content` string) | [ ] |
| Last section has `type: "tip"` with CTA | [ ] |
| At least one section has `type: "list"` with `list: []` array | [ ] |
| `faqs` array present with ≥ 4 items | [ ] |
| Every FAQ has both `q` and `a` keys | [ ] |
| `readTimeMins` is a number (not a string like "7 min") | [ ] |
| `emoji` is a single emoji character | [ ] |
| `publishedAt` matches "Month Year" format | [ ] |
| No TypeScript syntax errors visible | [ ] |

---

## PART E — Brand Voice Check

| Rule | Check |
|---|---|
| Opens with a patient scenario (not generic) | [ ] |
| 70% Hindi / 30% English medical terms maintained | [ ] |
| No "pilia" — only "jaundice" used | [ ] |
| No AI-sounding opener ("In today's digital age...") | [ ] |
| No "Namaskar doston..." opener | [ ] |
| Local food/context references included (sattu, chhachh, Jharkhand) | [ ] |
| Appointment phone + WhatsApp present | [ ] |

---

## Scoring Summary

```
YMYL Safety:        PASS / FAIL (auto-fail if any violation)
E-E-A-T Score:      ___ / 15
SEO Check:          PASS / NEEDS REVISION
TypeScript Format:  PASS / NEEDS REVISION
Brand Voice:        PASS / NEEDS REVISION

FINAL DECISION:     APPROVE ✅ / REVISE ⚠️ / REJECT ❌
```
