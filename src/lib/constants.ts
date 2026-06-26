export const DOCTOR = {
  name: "Dr. Akhilesh Yadav",
  nameShort: "Dr. Akhilesh",
  qualification: "MBBS, MD, DM (Gastroenterology)",
  specialty: "Gastroenterologist & Hepatologist",
  hospital: "Orchid Medical Centre",
  address: "HB Road, Ranchi, Jharkhand — 834001",
  phone: "+91-XXXXXXXXXX",
  whatsappNumber: "91XXXXXXXXXX",
  whatsappPrefilledMessage: "Namaskar, mujhe Dr. Akhilesh Yadav se appointment chahiye",
  experience: "10+",
  patientsServed: "4,000+",
  timings: "Mon – Sat: 10:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=Orchid+Medical+Centre+HB+Road+Ranchi",
  googleReviewUrl: "https://g.page/r/orchid-medical-centre-ranchi/review",
} as const;

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

export const SERVICES = [
  {
    title: "Fatty Liver",
    hindiTitle: "फैटी लिवर",
    description: "Expert diagnosis and reversal plan for NAFLD/NASH through diet and medication.",
    icon: "🫀",
    slug: "fatty-liver",
    color: "bg-teal-50",
  },
  {
    title: "Jaundice (Pilia)",
    hindiTitle: "पीलिया",
    description: "Fast diagnosis and treatment of jaundice caused by liver, bile duct, or blood disorders.",
    icon: "🩺",
    slug: "jaundice",
    color: "bg-gold-light",
  },
  {
    title: "Endoscopy",
    hindiTitle: "एंडोस्कोपी",
    description: "Painless upper GI endoscopy for stomach ulcers, bleeding, and esophagus problems.",
    icon: "🔬",
    slug: "endoscopy",
    color: "bg-teal-50",
  },
  {
    title: "Liver Disease",
    hindiTitle: "लिवर रोग",
    description: "Comprehensive care for hepatitis, cirrhosis, liver failure and all liver conditions.",
    icon: "🏥",
    slug: "liver-cirrhosis",
    color: "bg-offwhite",
  },
  {
    title: "IBS & Gut Health",
    hindiTitle: "आंत की समस्याएं",
    description: "Treatment for irritable bowel, bloating, constipation, and chronic gut issues.",
    icon: "💊",
    slug: "ibs",
    color: "bg-teal-50",
  },
  {
    title: "Gallstone",
    hindiTitle: "पित्ताशय की पथरी",
    description: "Expert management of gallstones — medical and surgical options explained clearly.",
    icon: "⚕️",
    slug: "gallstone",
    color: "bg-gold-light",
  },
] as const;

export const TRUST_STATS = [
  { value: "4,000+", label: "Patients Treated", labelHindi: "मरीज़ ठीक हुए" },
  { value: "10+", label: "Years Experience", labelHindi: "वर्षों का अनुभव" },
  { value: "15+", label: "Conditions Treated", labelHindi: "बीमारियों का उपचार" },
  { value: "Mon–Sat", label: "Available Daily", labelHindi: "उपलब्धता" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
