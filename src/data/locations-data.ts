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
    metaDescription: "Specialist stomach, liver & digestive care for Dhanbad patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology. 2.5 hrs travel via NH-2 to Ranchi. Book priority OPD slot.",
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
    metaDescription: "Expert stomach, liver & digestive care for Hazaribagh patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology. 1.75 hrs travel via NH-33. Book OPD slot.",
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
    metaDescription: "Specialist stomach, liver & digestive care for Giridih patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology. Travel via Hazaribagh to Ranchi.",
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
    travelRoute: "NH-39 Route",
    roadInstructions: "Drive East via Daltonganj on NH-39 through Latehar directly to Ranchi.",
    trainInstructions: "Multiple express trains pass through Daltonganj Railway Station connecting directly to Ranchi.",
    metaTitle: "Best Gastroenterologist in Palamu (Daltonganj) | Dr. Akhilesh Yadav",
    metaDescription: "Expert digestive, liver & stomach specialist care for Palamu patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology at Ranchi.",
    h1: "पलामू के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Direct NH-39 highway connectivity to Ranchi",
      "Advanced therapeutic endoscopy for gallbladder & pancreatic stones",
      "DM super-specialist care not easily available locally",
      "Full digital telemetry and online report analysis"
    ],
    faqs: [
      {
        q: "Can patients from Palamu schedule priority consultations?",
        a: "Yes. Because Palamu is 190 km away, we prioritize scheduling slots for outstation patients so they can finish consults and tests on the same day.",
      }
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
    metaDescription: "Specialist stomach, liver & digestive care for Bokaro patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology. 2 hrs drive via NH-23.",
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
    metaDescription: "Expert liver, stomach & clinical endoscopy care for Jamshedpur patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology at Ranchi.",
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
    metaDescription: "Specialist stomach, liver & digestive care for Deoghar patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology at Ranchi.",
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
    roadInstructions: "Drive North via NH-20 through Chakradharpur and Khunti straight to Ranchi.",
    trainInstructions: "Regular train connectivity via Chakradharpur Railway Station to Ranchi.",
    metaTitle: "Best Gastroenterologist in Chaibasa | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Expert stomach, liver & digestive care for Chaibasa patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology at Ranchi.",
    h1: "चाईबासा के मरीजों के लिए पेट, लिवर एवं पाचन रोगों का विशेषज्ञ इलाज",
    whyChoose: [
      "Direct NH-20 road connection through Khunti district",
      "Highly trusted gastrointestinal clinical counseling",
      "Emergency bleed control and endoscopy diagnostics",
      "Same-day discharge to save hotel costs"
    ],
    faqs: [
      {
        q: "How to reach the Ranchi clinic from Chaibasa?",
        a: "You can drive North along NH-20 via Chakradharpur and Khunti, reaching Ranchi in under 3 hours.",
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
    metaDescription: "Specialist stomach, liver & digestive care for Khunti patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology in Ranchi (45 mins away).",
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
    metaDescription: "Expert stomach, liver & digestive care for Lohardaga patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology. 1.5 hrs away.",
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
    metaDescription: "Specialist stomach, liver & digestive care for Simdega patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology in Ranchi.",
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
    metaDescription: "Expert stomach, liver & digestive care for Ramgarh patients. Consult Dr. Akhilesh Yadav, DM Gastroenterology. 50 mins away via NH-33.",
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
