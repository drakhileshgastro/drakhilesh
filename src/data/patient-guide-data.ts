/**
 * Patient Guide data for /patient-guide/[slug] pages.
 * Practical how-to content for patients visiting Dr. Akhilesh Yadav at Orchid Medical Centre.
 * Schema: HowTo JSON-LD for rich results + E-E-A-T signals.
 */

export interface PatientGuideStep {
  titleHi: string;
  bodyHi:  string;
  icon:    string;
}

export interface PatientGuideData {
  slug:            string;
  titleHi:         string;
  titleEn:         string;
  metaTitle:       string;
  metaDescription: string;
  emoji:           string;
  readTimeMins:    number;
  publishedAt:     string;
  introHi:         string;
  steps:           PatientGuideStep[];
  warningHi:       string;
  ctaHi:           string;
  relatedBlogSlugs: string[];
  relatedConditionSlug?: string;
}

export const PATIENT_GUIDES: PatientGuideData[] = [
  {
    slug:            "pre-endoscopy-prep",
    titleHi:         "Endoscopy से पहले क्या करें — Complete Preparation Guide",
    titleEn:         "Pre-Endoscopy Preparation Guide — Dr. Akhilesh Yadav Ranchi",
    metaTitle:       "Endoscopy से पहले क्या करें | Pre-Endoscopy Guide | Dr. Akhilesh Yadav",
    metaDescription: "Endoscopy (OGD Scopy) से पहले क्या खाएं, क्या न खाएं, कौन सी दवाइयां बंद करें — complete preparation guide by Dr. Akhilesh Yadav, Ranchi.",
    emoji:           "🔭",
    readTimeMins:    5,
    publishedAt:     "August 2026",
    introHi:         "Endoscopy (OGD Scopy) एक safe procedure है — लेकिन सही तैयारी से procedure smooth होती है और result accurate आता है। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, Ranchi में हर patient को यह guide follow करने को कहते हैं।",
    steps: [
      {
        titleHi: "8 घंटे पहले: कुछ न खाएं, न पीएं (NBM)",
        bodyHi:  "Endoscopy से कम से कम 6-8 घंटे पहले कुछ भी न खाएं — पानी भी नहीं। खाली stomach में ही endoscopy होती है — इससे stomach clearly दिखता है और aspiration का risk नहीं होता। सुबह की endoscopy है? रात 10 बजे के बाद कुछ नहीं। Afternoon की है? सुबह का नाश्ता न करें।",
        icon:    "🍽️",
      },
      {
        titleHi: "दवाइयां: डॉक्टर को ज़रूर बताएं",
        bodyHi:  "Blood thinners (aspirin, clopidogrel, warfarin): endoscopy से 5-7 दिन पहले बंद कर सकते हैं — लेकिन सिर्फ Dr. Akhilesh Yadav के कहने पर। Diabetes medicines: endoscopy वाले दिन insulin या oral tablets न लें (खाली पेट हैं)। Blood pressure, thyroid medicines: सुबह थोड़े पानी के साथ ले सकते हैं — डॉक्टर से confirm करें।",
        icon:    "💊",
      },
      {
        titleHi: "साथ में कोई आएं — ड्राइव न करें",
        bodyHi:  "Sedation (injection से neend/relaxation) दी जाती है endoscopy में। Sedation के बाद 4-6 घंटे: गाड़ी नहीं चला सकते, important decisions नहीं ले सकते। कोई family member या friend ज़रूर साथ लाएं। अकेले आकर auto/cab से जाना safe नहीं।",
        icon:    "👨‍👩‍👦",
      },
      {
        titleHi: "क्या पहनें, क्या न लाएं",
        bodyHi:  "Comfortable, loose कपड़े पहनें — salwar kameez, loose shirt। Jewelry, bangles, chains: न पहनें (उतरवानी पड़ेगी)। Contact lenses निकाल कर आएं। Dentures (नकली दांत): होने पर निकाल कर रखें। Glasses case साथ लाएं।",
        icon:    "👕",
      },
      {
        titleHi: "Documents: क्या लाएं",
        bodyHi:  "Referral letter या OPD slip (Dr. Akhilesh Yadav की)। पुरानी reports — ultrasound, blood reports, पुरानी endoscopy reports (अगर हो)। Aadhaar card (identity proof)। Insurance card (अगर cashless claim करना हो)। सभी medicines की list या photos।",
        icon:    "📋",
      },
    ],
    warningHi: "Endoscopy से पहले अगर fever, chest pain, या severe breathing problem हो — immediately Dr. Akhilesh Yadav को call करें (+91 74919 25047)। Procedure postpone हो सकती है।",
    ctaHi:     "Endoscopy के लिए appointment लेने या preparation के बारे में कोई सवाल के लिए — Dr. Akhilesh Yadav से मिलें।",
    relatedBlogSlugs: [
      "endoscopy-cost-ranchi",
      "endoscopy-clinic-ranchi",
      "endoscopy-kya-hota-hai",
      "endoscopy-vs-colonoscopy-differences-indications",
    ],
    relatedConditionSlug: "acid-reflux",
  },

  {
    slug:            "post-procedure-care",
    titleHi:         "Endoscopy/Colonoscopy के बाद Recovery — Complete Care Guide",
    titleEn:         "Post-Endoscopy Recovery Guide — Dr. Akhilesh Yadav Ranchi",
    metaTitle:       "Endoscopy के बाद क्या करें | Post-Procedure Care | Dr. Akhilesh Yadav",
    metaDescription: "Endoscopy या colonoscopy के बाद क्या खाएं, कब normal activities शुरू करें, और कब डॉक्टर को call करें — complete recovery guide by Dr. Akhilesh Yadav.",
    emoji:           "🏥",
    readTimeMins:    5,
    publishedAt:     "August 2026",
    introHi:         "Endoscopy एक OPD procedure है — आप उसी दिन घर जा सकते हैं। लेकिन sedation के बाद कुछ घंटे rest ज़रूरी है। Dr. Akhilesh Yadav — Orchid Medical Centre, Ranchi — यह guide हर patient को discharge के समय देते हैं।",
    steps: [
      {
        titleHi: "पहले 1-2 घंटे: Recovery Room में आराम करें",
        bodyHi:  "Procedure के बाद आपको recovery room में रखा जाएगा जब तक sedation का असर कम न हो। Throat में थोड़ी खराश हो सकती है (OGD Scopy में) — normal है। Bloating/gas feel हो सकती है (colonoscopy में air pump होती है) — normal। Nurse आपकी BP, pulse monitor करेगी।",
        icon:    "🛏️",
      },
      {
        titleHi: "खाना-पीना: कब और क्या",
        bodyHi:  "OGD Scopy (upper endoscopy): 1-2 घंटे बाद — पहले पानी पिएं। Swallowing normal लगे तो light khana — दही, खिचड़ी, soup। आज तला-भुना, spicy खाना avoid। Colonoscopy: procedure के बाद light khana जल्दी शुरू कर सकते हैं। Biopsy हुई है? Dr. Akhilesh Yadav की specific instructions follow करें।",
        icon:    "🥣",
      },
      {
        titleHi: "Sedation के बाद — गाड़ी नहीं चलाएं",
        bodyHi:  "पूरे दिन: गाड़ी drive न करें, machinery operate न करें, alcohol न लें। कोई important legal document sign न करें आज। कोई family member या friend के साथ ही घर जाएं। अगले दिन से normal activities शुरू कर सकते हैं।",
        icon:    "🚫",
      },
      {
        titleHi: "Report मिलने पर — Follow-up ज़रूर करें",
        bodyHi:  "Routine endoscopy report: 24-48 घंटे में मिलती है। Biopsy report: 5-7 दिन लग सकते हैं। Report मिलते ही Dr. Akhilesh Yadav से follow-up appointment लें — report खुद interpret करने की कोशिश न करें। WhatsApp पर report भेज सकते हैं: +91 74919 25047।",
        icon:    "📄",
      },
      {
        titleHi: "कब तुरंत Call करें या Hospital जाएं",
        bodyHi:  "ये symptoms होने पर immediately +91 74919 25047 call करें: Chest pain या severe abdominal pain। Vomiting blood (hematemesis)। Rectal bleeding जो बंद न हो (colonoscopy के बाद)। Fever >38°C — 24 घंटे के अंदर। Difficulty breathing। Severe dizziness या loss of consciousness।",
        icon:    "⚠️",
      },
    ],
    warningHi: "Endoscopy के बाद mild throat discomfort और bloating normal है। लेकिन severe pain, bleeding, या breathing difficulty होने पर बिना देर किए Orchid Medical Centre emergency या nearest hospital जाएं।",
    ctaHi:     "Follow-up appointment या report discussion के लिए Dr. Akhilesh Yadav से मिलें।",
    relatedBlogSlugs: [
      "endoscopy-cost-ranchi",
      "ranchi-mein-colonoscopy-preparation",
      "colonoscopy-cost-ranchi",
      "endoscopy-kya-hota-hai",
    ],
    relatedConditionSlug: "gi-bleeding",
  },

  {
    slug:            "first-appointment",
    titleHi:         "पहली बार Dr. Akhilesh Yadav से मिलना — क्या लाएं, क्या पूछें",
    titleEn:         "First Appointment Guide — Dr. Akhilesh Yadav Orchid Medical Centre Ranchi",
    metaTitle:       "पहली Appointment Guide | Dr. Akhilesh Yadav Ranchi | Orchid Medical Centre",
    metaDescription: "Dr. Akhilesh Yadav से पहली बार मिलने से पहले क्या तैयारी करें — documents, symptoms list, questions — complete first appointment guide.",
    emoji:           "👨‍⚕️",
    readTimeMins:    4,
    publishedAt:     "August 2026",
    introHi:         "Orchid Medical Centre, HB Road, Ranchi में Dr. Akhilesh Yadav से पहली बार मिलने जा रहे हैं? थोड़ी तैयारी से आपकी consultation ज़्यादा productive होगी और diagnosis faster होगा। यह guide उन्हीं के लिए है।",
    steps: [
      {
        titleHi: "Documents: क्या लाएं",
        bodyHi:  "पुराने reports: blood tests (CBC, LFT, RFT, blood sugar), ultrasound reports, CT/MRI scans — last 2 साल के। पुरानी endoscopy/colonoscopy reports। कोई hospital discharge summary। Aadhaar card (ID proof)। Insurance card (TPA/cashless के लिए)। Referral letter (अगर किसी doctor ने refer किया है)।",
        icon:    "📁",
      },
      {
        titleHi: "Symptoms List: लिख कर लाएं",
        bodyHi:  "कब से problem है (days/weeks/months)? कितने समय से exactly? कहाँ दर्द/discomfort है — localize करें (upper right, lower left, middle)? क्या better करता है (खाने के बाद, antacid से, position change से)? क्या worse करता है (specific foods, stress, morning/night)? Associated symptoms: fever, weight loss, vomiting, blood in stool, yellowing?",
        icon:    "📝",
      },
      {
        titleHi: "Medicine List: सभी दवाइयां",
        bodyHi:  "All current medicines — name + dose + कितने समय से। OTC (बिना prescription) medicines — antacids, pain killers, supplements। Traditional/Ayurvedic/Herbal medicines भी बताएं — इनसे liver affected होती है। Allergy to any medicine। Photos लेना भी ठीक है — सभी strips/bottles के।",
        icon:    "💊",
      },
      {
        titleHi: "Family History: ज़रूर बताएं",
        bodyHi:  "Parents/siblings में: liver disease, jaundice, hepatitis B, cirrhosis? Colon cancer, stomach cancer, esophageal cancer? IBD (Crohn's, Ulcerative Colitis)? Gallstones? Pancreatitis? यह information Dr. Akhilesh Yadav को genetic risk assess करने में help करती है।",
        icon:    "👨‍👩‍👧",
      },
      {
        titleHi: "3-5 Questions List: पहले लिख लें",
        bodyHi:  "Consultation में nervousness से questions भूल जाते हैं। पहले से लिख लें: मेरी problem क्या है? Cause क्या है? Treatment कितने समय का है? Diet में क्या change करूं? Kab follow-up आना है? Koi test aur karwana hai? यह questions clearly पूछने से आप better informed रहेंगे।",
        icon:    "❓",
      },
    ],
    warningHi: "Appointment से पहले कोई नई medicine खुद शुरू न करें — especially blood thinners, steroids, या herbal supplements। यह consultation को affect कर सकते हैं।",
    ctaHi:     "Appointment: +91 74919 25047 या WhatsApp। Timings: Mon–Sat, 10 AM–2 PM और 5 PM–8 PM। Orchid Medical Centre, HB Road, Ranchi।",
    relatedBlogSlugs: [
      "best-gastroenterologist-ranchi",
      "gastroenterologist-in-ranchi",
      "orchid-medical-centre-gastro-ranchi",
      "liver-specialist-vs-gastroenterologist-ranchi",
    ],
    relatedConditionSlug: "abdominal-pain",
  },

  {
    slug:            "understand-your-report",
    titleHi:         "अपनी Lab Report कैसे पढ़ें — LFT, CBC, Ultrasound Explained",
    titleEn:         "How to Read Your Lab Reports — LFT, CBC, Liver Ultrasound Guide Ranchi",
    metaTitle:       "Lab Report कैसे पढ़ें | LFT CBC Ultrasound Explained | Dr. Akhilesh Yadav",
    metaDescription: "SGPT, SGOT, bilirubin, ultrasound liver findings — अपनी lab report खुद कैसे समझें। Dr. Akhilesh Yadav, Ranchi का easy guide।",
    emoji:           "🔬",
    readTimeMins:    7,
    publishedAt:     "August 2026",
    introHi:         "Report देखकर घबराहट होती है — numbers, abbreviations, 'abnormal' flags। Dr. Akhilesh Yadav — Orchid Medical Centre, Ranchi — इस guide में explain करते हैं कि common GI/liver reports कैसे पढ़ें — और कब worry करनी है, कब नहीं।",
    steps: [
      {
        titleHi: "LFT (Liver Function Test) — क्या देखें",
        bodyHi:  "SGPT (ALT) — Liver cell damage indicator। Normal: <40 U/L। 40-200: mild elevation — fatty liver, medicines, alcohol। >200: significant damage — hepatitis, acute liver injury। SGOT (AST) — Similar to SGPT। High SGOT + SGOT:SGPT >2:1 ratio — alcohol-related liver disease suspect। Bilirubin (total) — Jaundice marker। Normal: <1 mg/dL। >2.5 = clinical jaundice। Albumin — Liver synthetic function। Normal: 3.5-5 g/dL। <3 = poor liver function (cirrhosis)। ALP/GGT — bile duct blockage markers। High ALP + GGT — obstructive cause (gallstone, cholestasis)।",
        icon:    "🩸",
      },
      {
        titleHi: "CBC (Complete Blood Count) — Key Numbers",
        bodyHi:  "Hemoglobin — Normal: men 13-17, women 12-15 g/dL। Low = anemia — causes: blood loss (GI bleeding), nutritional deficiency, chronic disease। Platelets — Normal: 1.5-4.5 lakh/µL। Low platelets (<1 lakh) + liver disease = portal hypertension, cirrhosis। WBC (White Blood Cells) — High = infection। Low = severe liver disease, bone marrow issue। MCV (Mean Corpuscular Volume) — High MCV = B12/folate deficiency या alcohol use।",
        icon:    "🔴",
      },
      {
        titleHi: "Ultrasound Abdomen — Common Findings",
        bodyHi:  "Liver size: normal 12-15 cm। Enlarged (hepatomegaly): fatty liver, hepatitis, tumor। Liver echogenicity: Bright/echogenic = fatty liver। Coarse echotexture = cirrhosis। Nodular surface = cirrhosis। Gallbladder: Stones (acoustic shadow), polyps (no shadow), wall thickening। Bile duct: Dilated CBD (>6mm) = obstruction — stone, tumor? Spleen: Enlarged (>12cm) = portal hypertension। Ascites: Free fluid = cirrhosis, infection, cancer। Kidneys: Incidental findings common।",
        icon:    "📡",
      },
      {
        titleHi: "Endoscopy Report — Terminology",
        bodyHi:  "Gastritis: Stomach lining inflammation — H. Pylori करता है mostly। Esophagitis: Esophagus inflammation — GERD से। Hiatus Hernia: Stomach का chest में herniation — common finding, mostly innocent। Erosions: Superficial mucosal damage — NSAIDs, H. Pylori। Peptic Ulcer: Deep mucosal break — H. Pylori (80%)। Barrett's Esophagus: Precancerous change — GERD से। Biopsy taken: Lab में tissue examine — H. Pylori test, cancer rule out।",
        icon:    "🔭",
      },
      {
        titleHi: "कब Report को Urgent मानें",
        bodyHi:  "Immediate concern — इन findings पर Dr. Akhilesh Yadav से same day/next day मिलें: Bilirubin >5 mg/dL + fever। SGPT >500 (acute liver injury)। Platelet <50,000 (bleeding risk)। Ultrasound: liver mass/nodule। Endoscopy: varices (नसें) — bleeding risk। Colonoscopy: polyp या mass। Moderate concern — 1 हफ्ते में follow-up: SGPT 50-200 (persistent)। Low hemoglobin (<10 g/dL)। Mildly dilated bile duct।",
        icon:    "⚠️",
      },
    ],
    warningHi: "Report के numbers खुद interpret करके treatment न लें — especially antibiotics, steroids, या liver supplements। एक test abnormal होना हमेशा disease नहीं होता — context ज़रूरी है। Dr. Akhilesh Yadav से ज़रूर मिलें।",
    ctaHi:     "अपनी report समझनी है? WhatsApp करें: +91 74919 25047 या OPD आएं — Orchid Medical Centre, HB Road, Ranchi।",
    relatedBlogSlugs: [
      "ranchi-mein-liver-test",
      "bilirubin-test-meaning-ranchi",
      "high-sgpt-sgot-causes-diet-remedies",
      "understand-abdomen-ultrasound-report-findings",
      "fibroscan-liver-test-ranchi-cost-procedure",
    ],
    relatedConditionSlug: "fatty-liver",
  },

  {
    slug:            "diet-after-liver-disease",
    titleHi:         "Liver Disease के बाद Diet — Recovery Guide | Dr. Akhilesh Yadav",
    titleEn:         "Diet After Liver Disease — Recovery Nutrition Guide Ranchi",
    metaTitle:       "Liver Disease के बाद Diet | Recovery Guide | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Fatty liver, cirrhosis, या hepatitis के बाद क्या खाएं — Dr. Akhilesh Yadav का practical diet recovery guide। Protein, salt, alcohol — सब explain किया।",
    emoji:           "🥗",
    readTimeMins:    6,
    publishedAt:     "August 2026",
    introHi:         "Liver disease के बाद diet सबसे important factor है — सही diet से liver recover करती है, गलत diet से damage बढ़ता है। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, Ranchi — यह practical guide देते हैं।",
    steps: [
      {
        titleHi: "Alcohol: Zero Tolerance — कोई exception नहीं",
        bodyHi:  "किसी भी liver disease में — fatty liver, hepatitis, cirrhosis — alcohol completely बंद। 'थोड़ी सी चलेगी' — नहीं। Beer, wine, country liquor, mahua — सब बंद। Alcohol liver की recovery को reverse करता है। यह single most important diet rule है। इसके बिना कोई medicine काम नहीं करेगी।",
        icon:    "🚫",
      },
      {
        titleHi: "Protein: पर्याप्त — कम न करें",
        bodyHi:  "Myth: liver disease में protein नहीं खाना चाहिए। Fact: प्रति किलो body weight 1-1.2 gram protein ज़रूरी है (cirrhosis में ज़्यादा — 1.5g/kg)। Sources: dal, eggs, fish (rohu, katla), low-fat paneer, chicken। Red meat (mutton) — limit करें। Soy protein: okay। Cirrhosis में late-night protein snack (curd/peanuts) — muscle wasting रोकती है।",
        icon:    "🥚",
      },
      {
        titleHi: "Salt (Sodium): Ascites में Low Sodium ज़रूरी",
        bodyHi:  "Ascites (पेट में पानी) है तो: Salt <1500mg/day (normal है 2300mg)। नमक कम: achar, papad, namkeen, chips बंद। Packaged food में sodium check करें। Cooking में salt very little। अगर ascites नहीं है: normal salt intake ठीक है — specially restrict न करें।",
        icon:    "🧂",
      },
      {
        titleHi: "क्या खाएं — Daily Indian Diet",
        bodyHi:  "Dals: moong, masoor, chana (protein + easy digestion)। Sabzi: palak, lauki, tinda, torai — हल्की। Fruits: papaya, guava, amla, banana। Grains: oats, brown rice, multigrain roti (refined carbs kam करें)। Dairy: दही (curd) — probiotics। Fish: 2-3 times/week। Ghee: थोड़ा (1 tsp) — pure ghee better than vanaspati। Green tea: 1-2 cups/day — antioxidants। Haldi (turmeric): liver protective — khane mein।",
        icon:    "🥦",
      },
      {
        titleHi: "क्या Avoid करें",
        bodyHi:  "Alcohol — completely (already said)। Fried food (samosa, poori, pakora) — liver fat बढ़ाती है। Maida (refined flour) — white bread, biscuits। Sugary drinks — cola, packaged juices। Raw/undercooked meat/fish (hepatitis risk)। Over-the-counter supplements (vitamin E, iron, etc.) — liver toxic हो सकते हैं — डॉक्टर से पूछ कर। Herbal supplements — जो कहें 'liver ke liye achha hai' — बिना doctor se puche mat lo (कई hepatotoxic होते हैं)।",
        icon:    "🚫",
      },
    ],
    warningHi: "Liver disease में हर patient की situation अलग होती है। यह guide general है — आपकी specific diet plan Dr. Akhilesh Yadav ही बताएंगे। Cirrhosis में protein और salt की calculation personally discuss ज़रूरी है।",
    ctaHi:     "Diet counselling और liver follow-up के लिए — Dr. Akhilesh Yadav, Orchid Medical Centre, HB Road, Ranchi।",
    relatedBlogSlugs: [
      "ranchi-mein-fatty-liver-diet",
      "ranchi-mein-liver-test",
      "ranchi-mein-ascites-treatment",
      "fatty-liver-diet-hindi",
      "liver-cirrhosis-ascites-water-retention-management",
    ],
    relatedConditionSlug: "fatty-liver",
  },
];

export function getPatientGuideBySlug(slug: string): PatientGuideData | undefined {
  return PATIENT_GUIDES.find((g) => g.slug === slug);
}

export function getAllPatientGuideSlugs(): string[] {
  return PATIENT_GUIDES.map((g) => g.slug);
}
