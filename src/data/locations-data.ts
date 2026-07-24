export interface LocationFAQ {
  q: string;
  a: string;
}

export interface LocationData {
  slug: string;
  name: string;
  hindiName: string;
  travelDistance: string;
  travelDuration: string;
  travelRoute: string;
  roadInstructions: string;
  trainInstructions: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  whyChoose: string[];
  faqs: LocationFAQ[];
}

export const LOCATIONS_DATA: Record<string, LocationData> = {
  dhanbad: {
    slug: "dhanbad",
    name: "Dhanbad",
    hindiName: "धनबाद",
    travelDistance: "160 km",
    travelDuration: "2.5 Hours",
    travelRoute: "NH-2 / NH-33 Route",
    roadInstructions: "Drive via NH-2 towards Bokaro, then NH-23 to Ranchi (approx 160 km, 2.5 hours driving time).",
    trainInstructions: "Ranchi Shatabdi Express departs Dhanbad Junction at 17:50 and reaches Ranchi in 3 hours.",
    metaTitle: "Best Gastroenterologist in Dhanbad | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Consult Dr. Akhilesh Yadav, the best gastroenterologist in Dhanbad, for expert stomach, liver & digestive care at Orchid Medical Centre, Ranchi.",
    h1: "धनबाद के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "2.5 Hours travel via NH-2 with priority clinic appointments",
      "Same-day diagnostic endoscopy and report release",
      "Custom Hindi/Bhojpuri diet and wellness guidance",
      "Comprehensive liver and gallbladder clinical therapies"
    ],
    faqs: [
      {
        q: "How far is Orchid Medical Centre from Dhanbad?",
        a: "Orchid Medical Centre (Ranchi) is approximately 160 km from Dhanbad. It takes about 2.5 hours by car via NH-2 / NH-33, or about 3 hours via direct trains like Ranchi Shatabdi Express.",
      },
      {
        q: "Can I get Endoscopy/Colonoscopy tests done and return to Dhanbad on the same day?",
        a: "Yes! Diagnostic procedures are performed under light conscious sedation and take only 10–15 minutes. Patients can rest for an hour, collect their reports, and travel back to Dhanbad on the same day.",
      }
    ]
  },
  hazaribagh: {
    slug: "hazaribagh",
    name: "Hazaribagh",
    hindiName: "हज़ारीबाग़",
    travelDistance: "95 km",
    travelDuration: "1.75 Hours",
    travelRoute: "NH-33 Highway",
    roadInstructions: "Take the direct NH-33 Expressway South via Ormanjhi straight to Plaza Chowk, Ranchi.",
    trainInstructions: "Direct daily train services available from Hazaribagh Town Railway Station to Ranchi Junction.",
    metaTitle: "Best Gastroenterologist in Hazaribagh | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Consult Dr. Akhilesh Yadav, the best gastroenterologist in Hazaribagh, for expert stomach, liver & digestive care at Orchid Medical Centre, Ranchi.",
    h1: "हज़ारीबाग़ के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Quick 1.75 Hours travel via the NH-33 direct corridor",
      "Direct consultation with DM Gastroenterology specialist",
      "Priority diagnostics (FibroScan, Endoscopy) for same-day visitors",
      "Affordable treatment packages at Orchid Medical Centre"
    ],
    faqs: [
      {
        q: "How to travel from Hazaribagh to Dr. Akhilesh's clinic?",
        a: "You can drive down via the NH-33 Expressway in under 2 hours, or board one of the frequent local AC buses heading to Ranchi from Hazaribagh Bus Stand.",
      },
      {
        q: "Do you offer online follow-up reviews?",
        a: "Yes. After your first clinical visit to Ranchi, subsequent checkups and report reviews can be done online via WhatsApp video calls.",
      }
    ]
  },
  giridih: {
    slug: "giridih",
    name: "Giridih",
    hindiName: "गिरिडीह",
    travelDistance: "180 km",
    travelDuration: "3.5 Hours",
    travelRoute: "NH-100 / NH-33 Route",
    roadInstructions: "Drive via NH-100 to Hazaribagh, then connect to the NH-33 Expressway heading South to Ranchi.",
    trainInstructions: "Giridih to Ranchi Junction trains or direct luxury sleeper buses departing daily.",
    metaTitle: "Best Gastroenterologist in Giridih | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Consult Dr. Akhilesh Yadav, the best gastroenterologist in Giridih, for expert stomach, liver & digestive care at Orchid Medical Centre, Ranchi.",
    h1: "गिरिडीह के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Trusted clinical diagnostics for complex hepatobiliary issues",
      "Same-day FibroScan for fatty liver assessment",
      "Easy highway route via Hazaribagh corridor",
      "Desi diet plans and comprehensive clinical support"
    ],
    faqs: [
      {
        q: "Is Giridih connected directly to Ranchi for medical visits?",
        a: "Yes. Many patients travel via Hazaribagh by car, taking around 3.5 hours. Alternatively, direct daily trains connect Jasidih/Madhupur nearby to Ranchi.",
      }
    ]
  },
  palamu: {
    slug: "palamu",
    name: "Palamu",
    hindiName: "पलामू",
    travelDistance: "190 km",
    travelDuration: "4 Hours",
    travelRoute: "NH-39 Route via Latehar",
    roadInstructions: "Drive East from Daltonganj on NH-39 through Latehar directly to Ranchi. The highway is well-connected and the journey takes approximately 3.5–4 hours.",
    trainInstructions: "Multiple express trains pass through Daltonganj Railway Station connecting to Ranchi Junction. Shared taxis and long-distance buses from Daltonganj to Ranchi run frequently throughout the day.",
    metaTitle: "Gastroenterologist in Palamu (Daltonganj) | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Looking for a gastroenterologist in Palamu or Daltonganj? Consult Dr. Akhilesh Yadav (DM Gastroenterology) at Orchid Medical Centre, Ranchi — expert liver, stomach & digestive care. Same-day procedures. Book today.",
    h1: "पलामू (डाल्टनगंज) के मरीजों के लिए गैस्ट्रोएंटेरोलॉजिस्ट — डॉ. अखिलेश यादव",
    whyChoose: [
      "Expert DM Gastroenterology care unavailable locally in Palamu or Daltonganj",
      "Advanced procedures: Endoscopy, Colonoscopy, ERCP, FibroScan — all at one centre",
      "Priority morning slots for outstation Palamu patients — complete everything in one day",
      "Same-day diagnostic reports — travel, test, and return on the same day",
      "Liver disease specialist (Hepatology) for cirrhosis, hepatitis B & C, and ascites",
      "Hindi-friendly consultation with written instructions in local language"
    ],
    faqs: [
      {
        q: "Is there a gastroenterologist in Palamu or Daltonganj?",
        a: "Palamu and Daltonganj currently do not have a specialist DM Gastroenterologist. Patients from Palamu district travel to Ranchi — approximately 190 km via NH-39 — to consult Dr. Akhilesh Yadav at Orchid Medical Centre. Dr. Yadav holds DM Gastroenterology and has treated 4,000+ patients across Jharkhand.",
      },
      {
        q: "How far is Palamu (Daltonganj) from Dr. Akhilesh Yadav's clinic?",
        a: "Palamu (Daltonganj) is approximately 190 km from Orchid Medical Centre, Ranchi. By road via NH-39 through Latehar, it takes about 3.5–4 hours. Express trains and shared taxis from Daltonganj to Ranchi Junction are also available daily.",
      },
      {
        q: "Can Palamu patients get endoscopy done and return the same day?",
        a: "Yes. Diagnostic endoscopy and colonoscopy take 15–20 minutes under light sedation at Orchid Medical Centre. After 1 hour of recovery and collecting the report, Palamu patients can comfortably travel back the same evening. Book a 10:00 AM priority slot for same-day return.",
      },
      {
        q: "What diseases does Dr. Akhilesh Yadav treat for Palamu patients?",
        a: "Dr. Akhilesh Yadav treats conditions common in Jharkhand — liver diseases (fatty liver, jaundice, hepatitis B & C, liver cirrhosis, ascites), stomach problems (IBS, acidity, peptic ulcer, gallstone, abdominal pain), and performs advanced procedures like ERCP for bile duct stones.",
      },
      {
        q: "How do I book a priority appointment from Palamu?",
        a: "Call or WhatsApp +91-7764028474. Mention that you are travelling from Palamu so we can schedule a priority 10:00 AM slot — allowing you to complete consultation, diagnostics, and collect your report all within the same visit.",
      },
    ]
  },
  bokaro: {
    slug: "bokaro",
    name: "Bokaro",
    hindiName: "बोकारो",
    travelDistance: "120 km",
    travelDuration: "2 Hours",
    travelRoute: "NH-23 Highway",
    roadInstructions: "Drive via Bokaro-Ranchi Highway / NH-23 through Ramgarh to Ranchi.",
    trainInstructions: "Direct express trains like Shatabdi and Maurya Express run daily from Bokaro Steel City to Ranchi.",
    metaTitle: "Best Gastroenterologist in Bokaro | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Consult Dr. Akhilesh Yadav, the best gastroenterologist in Bokaro, for expert stomach, liver & digestive care at Orchid Medical Centre, Ranchi.",
    h1: "बोकारो के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Quick 2 Hours travel via the Ramgarh route",
      "Gold-standard painless endoscopy and colonoscopy",
      "Dedicated management for Ulcerative Colitis & IBS",
      "Experienced physician with clinical training at premium institutes"
    ],
    faqs: [
      {
        q: "What is the best way to travel from Bokaro for a medical consult?",
        a: "Driving down via NH-23 is very convenient and takes just 2 hours. Multiple daily express trains also run between Bokaro Steel City and Ranchi.",
      }
    ]
  },
  jamshedpur: {
    slug: "jamshedpur",
    name: "Jamshedpur",
    hindiName: "जमशेदपुर",
    travelDistance: "130 km",
    travelDuration: "2.2 Hours",
    travelRoute: "NH-43 Highway",
    roadInstructions: "Drive North-West via NH-43 Tata-Ranchi Highway through Chandil and Bundu straight to Ranchi.",
    trainInstructions: "Multiple daily trains connect Tatanagar Junction to Ranchi Junction in approximately 3 hours.",
    metaTitle: "Best Gastroenterologist in Jamshedpur (Tatanagar) | Dr. Akhilesh Yadav",
    metaDescription: "Consult Dr. Akhilesh Yadav, the best gastroenterologist in Jamshedpur, for expert stomach, liver & digestive care at Orchid Medical Centre, Ranchi.",
    h1: "जमशेदपुर के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Double-lane highway connectivity via Chandil corridor",
      "Advanced therapeutic ERCP and EUS-guided diagnostics",
      "High patient success rates with personalized gastro care",
      "Comprehensive clinical setup at Orchid Medical Centre"
    ],
    faqs: [
      {
        q: "Why should Jamshedpur patients travel to Ranchi for gastro care?",
        a: "Ranchi offers advanced infrastructure like state-of-the-art EUS (Endoscopic Ultrasound) and specialized DM care at Orchid Medical Centre.",
      }
    ]
  },
  deoghar: {
    slug: "deoghar",
    name: "Deoghar",
    hindiName: "देवघर",
    travelDistance: "250 km",
    travelDuration: "5 Hours",
    travelRoute: "NH-114A / NH-33 Route",
    roadInstructions: "Drive via NH-114A to Dumka/Giridih, and follow the highway route via Madhupur/Jamtara to Ranchi.",
    trainInstructions: "Regular express trains run daily from Deoghar Jasidih Junction directly to Ranchi Junction.",
    metaTitle: "Best Gastroenterologist in Deoghar | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Consult Dr. Akhilesh Yadav, the best gastroenterologist in Deoghar, for expert stomach, liver & digestive care at Orchid Medical Centre, Ranchi.",
    h1: "देवघर के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Clinical treatments for hepatitis, liver cirrhosis & jaundice",
      "Specialized pediatric & adult endoscopy facilities",
      "Comprehensive daycare observation beds",
      "Detailed prescription planning in Hindi"
    ],
    faqs: [
      {
        q: "What is the train option from Deoghar to Ranchi?",
        a: "Jasidih Junction has multiple direct express trains to Ranchi daily, which is the most comfortable transit option for elder patients.",
      }
    ]
  },
  chaibasa: {
    slug: "chaibasa",
    name: "Chaibasa",
    hindiName: "चाईबासा",
    travelDistance: "140 km",
    travelDuration: "2.75 Hours",
    travelRoute: "NH-20 Highway",
    roadInstructions: "Drive North via NH-20 through Chakradharpur and Khunti straight to Ranchi. The road is well-maintained and typically takes 2.5–3 hours depending on traffic at Khunti.",
    trainInstructions: "Chakradharpur Railway Station connects to Ranchi via express trains. Alternatively, take a shared taxi or bus from Chaibasa bus stand directly to Ranchi — regular services run every 30–45 minutes.",
    metaTitle: "Gastroenterologist in Chaibasa | Dr. Akhilesh Yadav – Ranchi Specialist",
    metaDescription: "Looking for a gastroenterologist in Chaibasa? Consult Dr. Akhilesh Yadav (DM Gastroenterology) at Orchid Medical Centre, Ranchi — 140 km via NH-20. Expert care for stomach, liver & digestive diseases. Book today.",
    h1: "चाईबासा के मरीजों के लिए गैस्ट्रोएंटेरोलॉजिस्ट डॉक्टर — डॉ. अखिलेश यादव",
    whyChoose: [
      "Direct NH-20 connectivity — reach Ranchi in under 3 hours from Chaibasa",
      "Specialist DM Gastroenterology care not available locally in West Singhbhum",
      "Same-day endoscopy, colonoscopy, and diagnostic procedures with same-day discharge",
      "Hindi and local language support — no language barrier for Jharkhand patients",
      "Priority appointment slots reserved for patients travelling from Chaibasa and nearby districts",
      "Comprehensive liver, gallbladder, and digestive disease management under one roof"
    ],
    faqs: [
      {
        q: "Is there a gastroenterologist in Chaibasa?",
        a: "Chaibasa (West Singhbhum district) currently does not have a dedicated DM Gastroenterologist. Patients from Chaibasa travel 140 km to Orchid Medical Centre, Ranchi, to consult Dr. Akhilesh Yadav — a specialist with DM Gastroenterology degree, 10+ years of experience, and 4,000+ patients treated.",
      },
      {
        q: "How far is Chaibasa from Dr. Akhilesh Yadav's clinic in Ranchi?",
        a: "Chaibasa is approximately 140 km from Orchid Medical Centre, Ranchi. By road via NH-20 through Chakradharpur and Khunti, it takes about 2.5–3 hours. Shared taxis and buses from Chaibasa Bus Stand to Ranchi also operate regularly.",
      },
      {
        q: "Can Chaibasa patients get endoscopy done and return the same day?",
        a: "Yes. Diagnostic endoscopy and colonoscopy at Orchid Medical Centre are performed under light sedation and take 15–20 minutes. After a 1-hour recovery period and report collection, patients from Chaibasa can safely travel back the same day.",
      },
      {
        q: "What stomach and liver problems can Dr. Akhilesh Yadav treat for Chaibasa patients?",
        a: "Dr. Akhilesh Yadav treats a wide range of conditions common in tribal and rural Jharkhand — fatty liver disease, jaundice, liver cirrhosis, hepatitis B and C, IBS, acid reflux, gallstones, abdominal pain, and more. He also performs advanced procedures like ERCP and EUS.",
      },
      {
        q: "How do I book an appointment from Chaibasa?",
        a: "Call or WhatsApp +91-7764028474 to book a slot. Mention that you are travelling from Chaibasa so we can schedule a priority morning appointment (10:00 AM–12:00 PM) to allow same-day return travel.",
      }
    ]
  },
  khunti: {
    slug: "khunti",
    name: "Khunti",
    hindiName: "खूंटी",
    travelDistance: "35 km",
    travelDuration: "45 Mins",
    travelRoute: "NH-20 Corridor",
    roadInstructions: "Drive North directly via the Khunti-Ranchi Road (NH-20) straight to Ranchi.",
    trainInstructions: "Khunti has direct local bus routes running every 15 minutes to Ranchi.",
    metaTitle: "Best Gastroenterologist in Khunti | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Consult Dr. Akhilesh Yadav, the best gastroenterologist in Khunti, for expert stomach, liver & digestive care at Orchid Medical Centre, Ranchi.",
    h1: "खूंटी के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Ultra-convenient 45-minute drive via NH-20",
      "Affordable out-patient checkups and consultation fees",
      "Same-day diagnostic procedures with direct results",
      "Empathetic clinical staff speaking local languages"
    ],
    faqs: [
      {
        q: "Is it easy to visit from Khunti for minor stomach issues?",
        a: "Yes. Khunti is practically a suburb of Ranchi. You can easily visit for a morning checkup and return home by noon.",
      }
    ]
  },
  lohardaga: {
    slug: "lohardaga",
    name: "Lohardaga",
    hindiName: "लोहरदगा",
    travelDistance: "75 km",
    travelDuration: "1.5 Hours",
    travelRoute: "Lohardaga-Ranchi Road",
    roadInstructions: "Drive East via the Lohardaga-Ranchi Road / Kanke Road directly into Ranchi.",
    trainInstructions: "Daily local passenger trains run between Lohardaga Railway Station and Ranchi Junction.",
    metaTitle: "Best Gastroenterologist in Lohardaga | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Consult Dr. Akhilesh Yadav, the best gastroenterologist in Lohardaga, for expert stomach, liver & digestive care at Orchid Medical Centre, Ranchi.",
    h1: "लोहरदगा के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Short 1.5 hours travel via Lohardaga road link",
      "Super-specialist diagnosis for fatty liver and acidity",
      "State-of-the-art diagnostic imaging and lab tests",
      "Friendly clinical guide and Hindi diet charts"
    ],
    faqs: [
      {
        q: "What travel options exist from Lohardaga?",
        a: "Direct passenger trains run daily to Ranchi Junction. Frequent local buses and taxis are also available.",
      }
    ]
  },
  simdega: {
    slug: "simdega",
    name: "Simdega",
    hindiName: "सिमडेगा",
    travelDistance: "145 km",
    travelDuration: "3 Hours",
    travelRoute: "NH-143 / NH-23 Corridor",
    roadInstructions: "Drive North via NH-143 through Gumla, and follow NH-23 straight to Ranchi.",
    trainInstructions: "Direct luxury local bus lines operate from Simdega bus stand to Ranchi daily.",
    metaTitle: "Best Gastroenterologist in Simdega | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Consult Dr. Akhilesh Yadav, the best gastroenterologist in Simdega, for expert stomach, liver & digestive care at Orchid Medical Centre, Ranchi.",
    h1: "सिमडेगा के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Complete clinical treatment for jaundice, liver cirrhosis & bleeding",
      "Painless daycare endoscopy and biopsy options",
      "Desi diet counseling templates provided in Hindi",
      "Direct follow-up updates via WhatsApp"
    ],
    faqs: [
      {
        q: "How to travel from Simdega for a clinical appointment?",
        a: "Most patients travel via the NH-143 highway through Gumla by car or direct express bus service, which takes about 3 hours.",
      }
    ]
  },
  ramgarh: {
    slug: "ramgarh",
    name: "Ramgarh",
    hindiName: "रामगढ़",
    travelDistance: "45 km",
    travelDuration: "50 Mins",
    travelRoute: "NH-33 Expressway",
    roadInstructions: "Drive South via NH-33 Expressway through the scenic Ramgarh valley straight into Ranchi.",
    trainInstructions: "Daily local buses and trains connect Ramgarh Cantt to Ranchi Junction.",
    metaTitle: "Best Gastroenterologist in Ramgarh | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Consult Dr. Akhilesh Yadav, the best gastroenterologist in Ramgarh, for expert stomach, liver & digestive care at Orchid Medical Centre, Ranchi.",
    h1: "रामगढ़ के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Extremely close location — only 50 minutes away",
      "Direct access to Ranchi's leading DM Gastroenterology specialist",
      "Same-day endoscopy procedures and instant reporting",
      "Continuous clinical monitoring and follow-ups"
    ],
    faqs: [
      {
        q: "Is it necessary to book an appointment beforehand from Ramgarh?",
        a: "Yes. Booking in advance ensures you get a preferred slot and avoid waiting times, especially since travel is under an hour.",
      }
    ]
  }
};
