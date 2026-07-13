export const DOCTOR = {
  name: "Dr. Akhilesh Yadav",
  nameShort: "Dr. Akhilesh",
  qualification: "MBBS, MD, DM (Gastroenterology)",
  specialty: "Gastroenterologist & Hepatologist",
  hospital: "Orchid Medical Centre",
  address: "HB Road, Ranchi, Jharkhand — 834001",
  phone: "+91 7491925047",
  whatsappNumber: "917491925047",
  whatsappPrefilledMessage: "Namaskar, mujhe Dr. Akhilesh Yadav se appointment chahiye",
  experience: "10+",
  patientsServed: "4,000+",
  timings: "Mon–Sat: 10:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
  timingsMorning: "10:00 AM – 2:00 PM",
  timingsEvening: "5:00 PM – 8:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=Orchid+Medical+Centre+HB+Road+Ranchi",
  googleReviewUrl: "https://g.page/r/orchid-medical-centre-ranchi/review",
  googleRating: "4.9",
  totalReviews: "200+",
  youtubeChannel: "https://youtube.com/@drakhileshgastro",
} as const;

export const TRUST_STATS = [
  { value: "4,000+", label: "Patients Treated", labelHindi: "मरीज़ ठीक हुए" },
  { value: "10+", label: "Years Experience", labelHindi: "वर्षों का अनुभव" },
  { value: "4.9 ⭐", label: "Google Rating", labelHindi: "Google रेटिंग" },
  { value: "Mon–Sat", label: "Available Daily", labelHindi: "उपलब्धता" },
] as const;

export const SYMPTOMS_LIST = [
  { label: "Stomach Pain", hindiLabel: "पेट दर्द", slug: "stomach-pain", icon: "🫃" },
  { label: "Gas & Bloating", hindiLabel: "गैस व पेट फूलना", slug: "gas-bloating", icon: "💨" },
  { label: "Acidity", hindiLabel: "एसिडिटी / जलन", slug: "acidity", icon: "🔥" },
  { label: "Constipation", hindiLabel: "कब्ज", slug: "constipation", icon: "😣" },
  { label: "Diarrhoea", hindiLabel: "दस्त / लूज़ मोशन", slug: "diarrhoea", icon: "🚽" },
  { label: "Blood in Stool", hindiLabel: "मल में खून", slug: "blood-in-stool", icon: "🩸" },
  { label: "Vomiting", hindiLabel: "उल्टी / मतली", slug: "vomiting", icon: "🤢" },
  { label: "Difficulty Swallowing", hindiLabel: "निगलने में तकलीफ", slug: "difficulty-swallowing", icon: "😔" },
  { label: "Weight Loss", hindiLabel: "वजन कम होना", slug: "weight-loss", icon: "⚖️" },
  { label: "Jaundice", hindiLabel: "पीलिया", slug: "jaundice", icon: "🌕" },
] as const;

export const CONDITIONS_LIST = [
  { title: "Fatty Liver", hindiTitle: "फैटी लिवर", slug: "fatty-liver", description: "NAFLD/NASH का विशेषज्ञ उपचार", icon: "🫀" },
  { title: "Jaundice", hindiTitle: "पीलिया", slug: "jaundice", description: "त्वरित निदान और उपचार", icon: "🌕" },
  { title: "Liver Cirrhosis", hindiTitle: "लीवर सिरोसिस", slug: "liver-cirrhosis", description: "उन्नत लीवर रोग प्रबंधन", icon: "🏥" },
  { title: "Hepatitis B & C", hindiTitle: "हेपेटाइटिस B & C", slug: "hepatitis", description: "एंटीवायरल थेरेपी और देखभाल", icon: "🧬" },
  { title: "IBS", hindiTitle: "IBS / आंत की समस्या", slug: "ibs", description: "आंत स्वास्थ्य का समग्र उपचार", icon: "💊" },
  { title: "Acid Reflux (GERD)", hindiTitle: "एसिडिटी / GERD", slug: "gerd", description: "जलन और रिफ्लक्स का उपचार", icon: "🔥" },
  { title: "Peptic Ulcer", hindiTitle: "पेप्टिक अल्सर", slug: "peptic-ulcer", description: "पेट के अल्सर का उपचार", icon: "🩺" },
  { title: "Gallstone", hindiTitle: "पित्त की पथरी", slug: "gallstone", description: "दवा और सर्जिकल विकल्प", icon: "⚕️" },
  { title: "Upper GI Bleeding", hindiTitle: "GI ब्लीडिंग", slug: "gi-bleeding", description: "आपातकालीन एंडोस्कोपिक उपचार", icon: "🩸" },
  { title: "Pancreatitis", hindiTitle: "अग्नाशय की सूजन", slug: "pancreatitis", description: "अग्न्याशय रोग प्रबंधन", icon: "🫁" },
  { title: "Ulcerative Colitis", hindiTitle: "अल्सरेटिव कोलाइटिस", slug: "ulcerative-colitis", description: "IBD का दीर्घकालिक प्रबंधन", icon: "🌿" },
  { title: "Abdominal Pain", hindiTitle: "पेट दर्द", slug: "abdominal-pain", description: "सटीक निदान और उपचार", icon: "🫃" },
  { title: "Unexplained Weight Loss", hindiTitle: "वजन कम होना", slug: "weight-loss", description: "गहन जांच और देखभाल", icon: "⚖️" },
  { title: "Liver Cancer", hindiTitle: "लीवर कैंसर", slug: "liver-cancer", description: "ऑन्कोलॉजी सह-प्रबंधन", icon: "🔬" },
  { title: "Liver Transplant Consultation", hindiTitle: "लीवर ट्रांसप्लांट परामर्श", slug: "liver-transplant", description: "प्रत्यारोपण पूर्व मार्गदर्शन", icon: "💙" },
] as const;

export const PROCEDURES_LIST = [
  {
    title: "Upper GI Endoscopy",
    hindiTitle: "एंडोस्कोपी",
    slug: "endoscopy",
    description: "पेट और आहार नली की जांच — दर्दरहित, 15 मिनट में",
    benefit: "Diagnose ulcers, bleeding & cancer early",
    icon: "🔭",
  },
  {
    title: "Colonoscopy",
    hindiTitle: "कोलोनोस्कोपी",
    slug: "colonoscopy",
    description: "बड़ी आंत की पूरी जांच — पॉलिप और कैंसर की पहचान",
    benefit: "Detect colon cancer before symptoms appear",
    icon: "🔬",
  },
  {
    title: "ERCP",
    hindiTitle: "ERCP",
    slug: "ercp",
    description: "पित्त नली और अग्नाशय की उन्नत जांच और उपचार",
    benefit: "Remove stones & treat bile duct blockages",
    icon: "⚕️",
  },
  {
    title: "EUS",
    hindiTitle: "EUS (एंडोस्कोपिक अल्ट्रासाउंड)",
    slug: "eus",
    description: "पाचन तंत्र की गहरी अल्ट्रासाउंड जांच",
    benefit: "Detect tumours & guide precise biopsies",
    icon: "📡",
  },
  {
    title: "Enteroscopy",
    hindiTitle: "एंटेरोस्कोपी",
    slug: "enteroscopy",
    description: "छोटी आंत की विस्तृत जांच",
    benefit: "Examine the small intestine completely",
    icon: "🌊",
  },
  {
    title: "GI Bleeding Treatment",
    hindiTitle: "GI ब्लीडिंग उपचार",
    slug: "gi-bleeding-treatment",
    description: "आंतरिक रक्तस्राव का तत्काल एंडोस्कोपिक उपचार",
    benefit: "Stop internal bleeding without surgery",
    icon: "🩸",
  },
] as const;

export const HEALTH_LIBRARY_LINKS = [
  { label: "Health Blog", href: "/blog" },
  { label: "Educational Videos", href: "/videos" },
  { label: "Diet Guides", href: "/diet-guide" },
  { label: "Patient Education", href: "/patient-education" },
  { label: "FAQs", href: "/faqs" },
  { label: "Medical Glossary", href: "/glossary" },
] as const;

export const PATIENT_RESOURCE_LINKS = [
  { label: "Book Appointment", href: "/book" },
  { label: "Clinic Timings", href: "/contact#timings" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "Google Reviews", href: DOCTOR.googleReviewUrl, external: true },
  { label: "Directions", href: DOCTOR.googleMapsUrl, external: true },
  { label: "Contact Us", href: "/contact" },
  { label: "Emergency Info", href: "/contact#emergency" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Doctor", href: "/about" },
  { label: "Symptoms", href: "/symptoms", dropdown: "symptoms" as const },
  { label: "Conditions", href: "/conditions", dropdown: "conditions" as const },
  { label: "Procedures", href: "/procedures", dropdown: "procedures" as const },
  { label: "Health Library", href: "/blog", dropdown: "library" as const },
  { label: "Patient Resources", href: "/patient-resources", dropdown: "resources" as const },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_COLUMNS = {
  symptoms: [
    { label: "Stomach Pain", href: "/symptoms/stomach-pain" },
    { label: "Gas & Bloating", href: "/symptoms/gas-bloating" },
    { label: "Acidity", href: "/symptoms/acidity" },
    { label: "Vomiting", href: "/symptoms/vomiting" },
    { label: "Blood in Stool", href: "/symptoms/blood-in-stool" },
    { label: "Jaundice", href: "/symptoms/jaundice" },
    { label: "Weight Loss", href: "/symptoms/weight-loss" },
    { label: "All Symptoms →", href: "/symptoms" },
  ],
  conditions: [
    { label: "Fatty Liver", href: "/conditions/fatty-liver" },
    { label: "IBS", href: "/conditions/ibs" },
    { label: "GERD / Acidity", href: "/conditions/gerd" },
    { label: "Peptic Ulcer", href: "/conditions/peptic-ulcer" },
    { label: "Gallstone", href: "/conditions/gallstone" },
    { label: "Pancreatitis", href: "/conditions/pancreatitis" },
    { label: "Hepatitis", href: "/conditions/hepatitis" },
    { label: "All Conditions →", href: "/conditions" },
  ],
  procedures: [
    { label: "Endoscopy", href: "/procedures/endoscopy" },
    { label: "Colonoscopy", href: "/procedures/colonoscopy" },
    { label: "ERCP", href: "/procedures/ercp" },
    { label: "EUS", href: "/procedures/eus" },
    { label: "Enteroscopy", href: "/procedures/enteroscopy" },
    { label: "GI Bleeding", href: "/procedures/gi-bleeding-treatment" },
    { label: "All Procedures →", href: "/procedures" },
  ],
  resources: [
    { label: "About Doctor", href: "/about" },
    { label: "Health Library", href: "/blog" },
    { label: "Videos", href: "/videos" },
    { label: "FAQs", href: "/faqs" },
    { label: "Patient Stories", href: "/patient-stories" },
    { label: "Book Appointment", href: "/book" },
    { label: "Contact", href: "/contact" },
    { label: "Directions", href: DOCTOR.googleMapsUrl, external: true },
  ],
} as const;

/* Legacy — kept for CRM / admin forms */
export const CONDITIONS = [
  "Fatty Liver (NAFLD/NASH)",
  "Jaundice / Pilia",
  "Liver Cirrhosis",
  "Hepatitis B & C",
  "IBS (Irritable Bowel Syndrome)",
  "Acid Reflux / GERD",
  "Gallstone / Pittashay Ki Pathri",
  "Endoscopy / Upper GI",
  "Colonoscopy",
  "ERCP",
  "Pancreatitis",
  "Liver Cancer",
  "Ulcerative Colitis",
  "Abdominal Pain / Pet Dard",
  "Liver Transplant Consultation",
  "Other / Not Sure",
] as const;

export const SERVICES = CONDITIONS_LIST;
