# Quality Gate — Medical Blog (15-Point E-E-A-T Rubric)

## Publish Threshold: 10/15 minimum

Below 10: Do not publish. Return to writer with specific feedback.
10-12: Publish with revisions noted for the next update.
12-15: Publish immediately. Strong content.

---

## PART A: EXPERIENCE SIGNALS (0-5 points)

### A1. Patient Opening Scenario (+2 points)
The blog opens with a SPECIFIC patient scenario — not a generic statement.

✅ **PASS (2 pts)**: "Ranchi ke ek 45-saal ke teacher, Ramesh ji, pichhle 3 mahine se pet ke daayi taraf dard mehsoos kar rahe the. Ultrasound mein 'Grade 2 Fatty Liver' aaya — woh ghabra gaye..."

❌ **FAIL (0 pts)**: "Fatty liver aaj kal ek common problem ban gayi hai."
❌ **FAIL (0 pts)**: "Pet ki takleef se pareshan hain? Is article mein..."

The scenario must:
- Have a character (real or composite)
- Have a specific symptom or test result
- Reference Ranchi/Jharkhand if possible
- Lead naturally into the topic

### A2. Specific Result or Recovery Mention (+1 point)
Blog includes at least one specific outcome — even anonymized.

✅ **PASS**: "Dr. Akhilesh ke marizo mein se ek Bokaro ke patient ne 3 mahine ki lifestyle changes se Grade 2 fatty liver ko normal kar liya."
✅ **PASS**: "Hamare zyada tar patients 6-8 hafte mein symptoms mein improvement mehsoos karte hain."
❌ **FAIL**: Generic "most patients recover"

### A3. Expert Attribution (+1 point)
Uses attribution language that signals lived experience:

✅ "10+ saalon ke experience mein, Dr. Akhilesh Yadav ne dekha hai ki..."
✅ "Ranchi aur Jharkhand ke patients mein yeh pattern common hai..."
❌ No attribution at all = FAIL

### A4. India/Jharkhand Context (+1 point)
Blog includes specific India/regional context — not just generic medical info.

✅ Mentions Ranchi, Jharkhand, Bihar, local food, local climate, local lifestyle factors
✅ Mentions regional patient patterns
❌ Could have been written for patients anywhere in the world = FAIL

---

## PART B: EXPERTISE SIGNALS (0-3 points)

### B1. Gastroenterology-Specific Advice (+1 point)
Every key piece of advice must be SPECIFIC to gastroenterology — not general health advice.

✅ "Fatty liver mein sabse pehle refined carbohydrates band karein — maida, sugar, white rice"
❌ "Exercise karein aur healthy khaye" (too generic)

### B2. Medical Terms Explained in Hindi (+1 point)
Every English medical term used in the blog is explained in Hindi on first use.

✅ "Bilirubin — yeh ek pigment hai jo liver mein red blood cells ke toote waqt banta hai"
✅ "ERCP (endoscopic retrograde cholangiopancreatography) — pittashay ki nali se pathri nikalane ki procedure"
❌ Using "bilirubin" without explaining what it is = FAIL

### B3. Verified Fact/Statistic (+1 point)
Blog includes at least ONE verified medical fact or statistic with implicit or explicit source.

✅ "India mein lagbhag 9-32% adults mein fatty liver hota hai — AIIMS research ke anusaar"
✅ "Liver mein 500 se zyada biochemical reactions hote hain ek din mein"
❌ No statistics at all = FAIL

---

## PART C: AUTHORITY SIGNALS (0-4 points)

### C1. Doctor Credential Mention (+1 point)
Dr. Akhilesh Yadav's full credentials mentioned at least ONCE, and name appears ≥ 3 times total.

✅ "Dr. Akhilesh Yadav — DM Gastroenterology specialist aur Orchid Medical Centre, Ranchi ke hepatologist..."
❌ Just "the doctor says" without naming = FAIL

### C2. Location/Clinic Mention (+1 point)
"Orchid Medical Centre" AND "Ranchi" both appear ≥ 2 times in the content.

✅ Mentioned in intro + expert section + CTA = PASS
❌ Only in the footer CTA = FAIL

### C3. Internal Links (+1 point)
At least 5 internal links using descriptive Hindi/Hinglish anchor text.

✅ 5+ links to /conditions/, /procedures/, /blog/, /book = PASS
❌ Fewer than 5 = FAIL
❌ "Click here" or "yahan click karein" anchors = FAIL

### C4. Appointment CTA (+1 point)
At least ONE clear appointment CTA with phone number OR WhatsApp link in the content body.

✅ "Call karein: +91 74919 25047" or WhatsApp link in body = PASS
❌ CTA only in header/footer components (not in blog content) = FAIL

---

## PART D: TRUST SIGNALS (0-3 points)

### D1. FAQ Section (+1 point)
Blog has:
- A readable FAQ section in `content` (H2 "Aksar Puche Jane Wale Sawaal") AND
- A populated `faqs` array with ≥ 5 Q&A objects for JSON-LD schema

❌ Only one of the two = FAIL
❌ Fewer than 5 FAQs = FAIL

### D2. Medical Disclaimer (+1 point)
Blog includes at least ONE line telling readers to consult a doctor.

✅ "Yeh information educational purpose ke liye hai. Apni situation ke liye Dr. Akhilesh Yadav ya apne doctor se zaroor milein."
✅ "Har patient ki condition alag hoti hai — apne doctor ki salah zaroor lein."
❌ No disclaimer anywhere = FAIL

### D3. YMYL Safety (+1 point)
NO unsafe medical content. All of these must be absent:
- Specific dosage recommendations ("500mg daily")
- Diagnostic claims ("aapko fatty liver hai")
- Treatment guarantees ("yeh zaroor thik kar dega")
- Content discouraging hospital visits
- Unverified statistics or false claims

✅ None of the above present = PASS (1 pt)
❌ ANY of the above present = FAIL (0 pts) + YMYL violation flag

---

## SCORING SUMMARY

| Section | Max | Your Score |
|---------|-----|------------|
| A1 Patient opening scenario | 2 | |
| A2 Specific result/recovery | 1 | |
| A3 Expert attribution | 1 | |
| A4 India/Jharkhand context | 1 | |
| B1 Gastro-specific advice | 1 | |
| B2 Medical terms explained | 1 | |
| B3 Verified fact/stat | 1 | |
| C1 Doctor credential | 1 | |
| C2 Location/clinic | 1 | |
| C3 Internal links (≥5) | 1 | |
| C4 Appointment CTA | 1 | |
| D1 FAQ section + array | 1 | |
| D2 Medical disclaimer | 1 | |
| D3 YMYL safety | 1 | |
| **TOTAL** | **15** | |

---

## Publish Decision Matrix

| Score | YMYL | Decision |
|-------|------|----------|
| 12-15 | PASS | ✅ Publish immediately |
| 10-11 | PASS | ✅ Publish with revision notes for next update |
| 8-9   | PASS | ⚠️ Revise and resubmit — list specific fixes |
| <8    | PASS | ❌ Reject — significant rewrite needed |
| Any   | FAIL | ❌ REJECT — fix YMYL issues first, regardless of score |
