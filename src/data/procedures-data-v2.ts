import { ProcedureDataV2 } from "@/lib/types-procedures-v2";

export const PROCEDURES_DATA_V2: Record<string, ProcedureDataV2> = {
  endoscopy: {
    slug: "endoscopy",
    title: "Upper GI Endoscopy",
    hindiTitle: "अपर जीआई एंडोस्कोपी (दूरबीन जांच)",
    metaTitle: "Painless Upper GI Endoscopy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Get expert, painless Upper GI Endoscopy in Ranchi at Orchid Medical Centre by senior gastroenterologist Dr. Akhilesh Yadav. Diagnostic & therapeutic care under sedation.",
    simpleExplanation: "अपर जीआई एंडोस्कोपी (Upper GI Endoscopy) एक ऐसी जांच है जिसमें एक पतली, लचीली ट्यूब (एंडोस्कोप) के जरिए आपके भोजन की नली (food pipe), पेट (stomach) और छोटी आंत के शुरुआती हिस्से (duodenum) के अंदरूनी हिस्से को सीधे कैमरे पर देखा जाता है। यह जांच पेट दर्द, उल्टी, एसिडिटी, निगलने में कठिनाई और छाती में जलन के सही कारणों का पता लगाने के लिए की जाती है।",
    summaryPurpose: "भोजन की नली, पेट और छोटी आंत के शुरुआती हिस्से की अंदरूनी जांच करना, सूजन, अल्सर या ब्लीडिंग का पता लगाना और बायोप्सी लेना।",
    summaryDuration: "10 - 15 Minutes",
    summaryAnaesthesia: "Local Throat Spray & Conscious Sedation (हल्की नींद)",
    summaryHospitalStay: "Daycare (Same-day discharge within 2 hours)",
    summaryRecovery: "Immediate recovery from sedation; resume regular diet and activities from next day",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Persistent nausea, vomiting, or difficulty swallowing (निगलने में परेशानी)",
      "Unexplained upper abdominal pain or burning sensation (सीने में जलन)",
      "Unexplained weight loss or loss of appetite",
      "Vomiting blood or passing black stools (खून आना या काला मल)"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends Upper GI Endoscopy to visualize tissue lining directly. Unlike CT scans, it allows taking painless tissue samples (biopsy) to test for H. pylori infection, celiac disease, or early cancer.",
    preparationFasting: "Fasting required for at least 6 to 8 hours prior. Do not drink water for 4 hours before the test to prevent aspiration during sedation.",
    preparationDiet: "Consume light, easily digestible food the night before. Avoid heavy or high-fat meals.",
    preparationMedicines: "Inform Dr. Akhilesh about any blood thinners (Aspirin, Clopidogrel) or diabetes medicines. Blood thinners may need to be stopped 3-5 days in advance.",
    preparationDocuments: "Bring all past ultrasound reports, blood tests, prescriptions, and a government ID.",
    preparationCompanion: "As you will be given mild sedation, you must be accompanied by an adult companion to assist you in returning home.",
    steps: [
      { phase: "Pre-op Preparation", desc: "Your vitals are monitored. A local anesthetic spray is applied to the back of your throat to prevent gagging, and an IV line is placed." },
      { phase: "Sedation Administration", desc: "A short-acting sedative is given through the IV line. You will fall into a light, comfortable sleep within seconds." },
      { phase: "Scope Insertion", desc: "Dr. Yadav gently guides the flexible endoscope down your food pipe into the stomach. Air is inflated to expand the organs for a clear view." },
      { phase: "Inspection & Biopsy", desc: "High-definition cameras display the mucosal lining on a monitor. Biopsies or therapeutic interventions (like closing bleeding points) are completed." }
    ],
    recoveryExpectations: "You will rest in the daycare ward until the sedative wears off (typically 30-45 minutes). A mild throat numbness or gas bloating is normal and resolves quickly.",
    recoveryReturnHome: "You are allowed to go home 1.5 to 2 hours after the procedure, once you are fully awake.",
    recoveryDiet: "You can start drinking sips of water after the throat spray effect fades (about 45 minutes). Resume a soft diet today, and a normal diet tomorrow.",
    recoveryActivity: "Do not drive, operate machinery, or sign legal documents for 24 hours post-sedation.",
    recoveryWarningSigns: [
      "Vomiting blood or dark black fluid",
      "Severe chest pain or difficulty breathing",
      "High-grade fever with chills",
      "Severe abdominal pain that does not go away"
    ],
    safetyRisks: "Upper Endoscopy is exceptionally safe. Major risks like perforation or heavy bleeding are extremely rare (less than 1 in 10,000 diagnostic procedures).",
    safetyBenefits: [
      "Accurate direct visual diagnosis of ulcers, inflammation, and tumors.",
      "Well-tolerated under light sedation; most patients experience minimal or no discomfort.",
      "Concurrent biopsy and treatment capability (like bleeding control or dilatation)."
    ],
    safetySuccessRate: "Over 99% diagnostic accuracy.",
    safetyMonitoring: "Pulse oximeter, blood pressure, and ECG monitoring throughout the procedure.",
    faqs: [
      { q: "क्या एंडोस्कोपी दर्दनाक होती है?", a: "नहीं। गले में सुन्न करने वाला स्प्रे और हाथ में हल्की नींद का इंजेक्शन (sedation) देने के कारण मरीज को पूरी प्रक्रिया के दौरान कोई दर्द या बेचैनी महसूस नहीं होती।" },
      { q: "क्या एंडोस्कोपी के बाद अस्पताल में भर्ती होना पड़ता है?", a: "नहीं, यह एक ओपीडी आधार पर की जाने वाली डेकेयर प्रक्रिया है। जांच के 2 घंटे के भीतर मरीज घर जा सकते हैं।" },
      { q: "एंडोस्कोपी की रिपोर्ट कब मिलती है?", a: "दूरबीन जांच की विजुअल रिपोर्ट तुरंत दे दी जाती. है। यदि कोई बायोप्सी (टुकड़ा) ली गई है, तो उसकी हिस्टोपैथोलॉजी रिपोर्ट आने में 3 से 4 दिन का समय लगता है।" }
    ],
    doctorAdvice: "Stomach issues should not be ignored or self-treated with antacids forever. A quick, 10-minute endoscopy — performed under sedation so patients feel minimal discomfort — can help us find the exact cause and start targeted treatment early.",
    relatedConditions: ["fatty-liver", "jaundice"],
    relatedBlogs: ["endoscopy-kya-hota-hai", "jaundice-symptoms-causes"]
  },
  colonoscopy: {
    slug: "colonoscopy",
    title: "Colonoscopy",
    hindiTitle: "कोलोनोस्कोपी (बड़ी आंत की जांच)",
    metaTitle: "Safe, Painless Colonoscopy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Get diagnostic and screening Colonoscopy in Ranchi at Orchid Medical Centre by senior gastroenterologist Dr. Akhilesh Yadav. High-definition colon cancer screening.",
    simpleExplanation: "कोलोनोस्कोपी (Colonoscopy) बड़ी आंत (colon) और मलाशय (rectum) के अंदरूनी हिस्से की दूरबीन जांच है। इसके लिए एक लंबी, लचीली ट्यूब (कोलोनोस्कोप) को मलद्वार के जरिए आंत में डाला जाता है। यह जांच लंबे समय से चल रही कब्ज, दस्त, मल में खून आना, वजन कम होना और बड़ी आंत के कैंसर या पॉलिप्स (मस्सों) का पता लगाने के लिए की जाती है।",
    summaryPurpose: "बड़ी आंत और मलाशय की अंदरूनी परत की जांच करना, पॉलिप्स को ढूंढकर निकालना, ब्लीडिंग नियंत्रित करना और बायोप्सी लेना।",
    summaryDuration: "20 - 30 Minutes",
    summaryAnaesthesia: "Intravenous Sedation (हल्की नींद का इंजेक्शन)",
    summaryHospitalStay: "Daycare (Discharge in 2 to 3 hours)",
    summaryRecovery: "Mild bloating or gas for a few hours; regular activity resumes next day.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Bleeding from the rectum or blood in stool (मल में खून)",
      "Unexplained chronic diarrhea or severe chronic constipation",
      "Unexplained weight loss or chronic abdominal cramps",
      "Routine screening for colon cancer (especially above age 45-50)"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav strongly recommends colonoscopy for colon cancer screening. Finding and removing polyps during a colonoscopy is the single most effective way to prevent colon cancer.",
    preparationFasting: "Fasting required on the day of the test. You must consume only clear liquids starting 24 hours prior to the procedure.",
    preparationDiet: "You must follow a strict clear-liquid diet (coconut water, clear apple juice, water) the day before. Avoid solid foods, milk, and red-colored drinks.",
    preparationMedicines: "A special bowel cleansing solution (like PEG solution or Peglec) must be taken the evening before/morning of the test to completely clean the bowel.",
    preparationDocuments: "Bring past scan reports, blood tests, current prescriptions, and an ID proof.",
    preparationCompanion: "Sedation makes you drowsy. A family member must accompany you to take you home.",
    steps: [
      { phase: "Bowel Cleanliness Check", desc: "The clinical team verifies that your bowel is completely clear (stool should be yellow, clear liquid)." },
      { phase: "Sedation Delivery", desc: "An IV sedative is administered. You will fall into a light sleep, making the procedure pain-free." },
      { phase: "Scope Insertion", desc: "The colonoscope is gently inserted through the rectum and advanced to the end of the colon (cecum). Carbon dioxide or water is used to open up the folds." },
      { phase: "Careful Withdrawal & Therapy", desc: "The doctor slowly withdraws the scope, inspecting the lining. Any detected polyps are removed instantly (polypectomy) and sent for testing." }
    ],
    recoveryExpectations: "You will wake up under observation. You will pass gas to relieve the air used during the procedure, which is normal and healthy.",
    recoveryReturnHome: "You can be discharged 2-3 hours after the test once you are stable and alert.",
    recoveryDiet: "Once awake, you can start with light food like khichdi or oats, and gradually return to a normal diet by evening.",
    recoveryActivity: "Do not drive, operate vehicles, or drink alcohol for 24 hours.",
    recoveryWarningSigns: [
      "Severe bleeding from the rectum (more than a spoonful)",
      "Severe, worsening abdominal pain and rigidity",
      "High fever with chills",
      "Dizziness or passing out"
    ],
    safetyRisks: "Colonoscopy is a standard, safe test. The risk of perforation is extremely low (less than 1 in 1,000 cases), slightly higher during therapeutic polyp removals.",
    safetyBenefits: [
      "Direct visualization of the entire large intestine.",
      "Prevents cancer by removing pre-cancerous polyps painlessly.",
      "Allows accurate diagnosis of inflammatory bowel diseases (IBD) like Ulcerative Colitis."
    ],
    safetySuccessRate: "98% cecal intubation rate (successful complete exam).",
    safetyMonitoring: "Vitals, blood pressure, and oxygen levels are monitored throughout.",
    faqs: [
      { q: "क्या कोलोनोस्कोपी के पहले पेट साफ करना जरूरी है?", a: "हाँ, आंतों को साफ करना (bowel prep) सबसे महत्वपूर्ण हिस्सा है। यदि आंतें साफ नहीं होंगी, तो डॉक्टर अंदरूनी हिस्से को ठीक से नहीं देख पाएंगे और छोटे पॉलिप्स छूट सकते हैं।" },
      { q: "क्या जांच के दौरान दर्द होता है?", a: "नहीं, हल्की नींद (sedation) दिए जाने के कारण मरीज को किसी भी तरह का दर्द या तकलीफ महसूस नहीं होती।" },
      { q: "पॉलिप्स हटाने में कितना दर्द होता है?", a: "आंत की अंदरूनी परत में दर्द के रिसेप्टर्स नहीं होते हैं, इसलिए आंत के अंदर पॉलिप्स हटाने या बायोप्सी लेने में कोई दर्द नहीं होता।" }
    ],
    doctorAdvice: "Colonoscopy is not just a diagnostic tool; it is a life-saving preventive procedure. If you have bleeding in your stool or chronic digestive changes, do not brush them off as 'piles.' Get evaluated properly.",
    relatedConditions: ["ibs"],
    relatedBlogs: ["endoscopy-kya-hota-hai"]
  },
  ercp: {
    slug: "ercp",
    title: "ERCP",
    hindiTitle: "ईआरसीपी (पित्त नली का इलाज)",
    metaTitle: "Advanced ERCP Procedure in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Get expert, non-surgical ERCP for bile duct stones and blockages in Ranchi at Orchid Medical Centre by Dr. Akhilesh Yadav, DM Gastroenterology.",
    simpleExplanation: "ईआरसीपी (Endoscopic Retrograde Cholangiopancreatography) एक विशेष दूरबीन प्रक्रिया है जिसका उपयोग पित्त नली (bile duct) और अग्न्याशय नली (pancreatic duct) की समस्याओं के निदान और उपचार के लिए किया जाता है। इसके तहत मुंह के रास्ते एक विशेष एंडोस्कोप (साइड-व्यूइंग स्कोप) डाला जाता है और एक्स-रे (C-arm) की मदद से पित्त नली की पथरी निकाली जाती है या कैंसर के कारण होने वाले ब्लॉकेज को खोलने के लिए स्टेंट लगाया जाता है।",
    summaryPurpose: "पित्त नली से पथरी निकालना, पीलिया कम करने के लिए स्टेंट डालना और पित्त या अग्न्याशय नली के कैंसर जनित ब्लॉकेज का इलाज करना।",
    summaryDuration: "30 - 45 Minutes",
    summaryAnaesthesia: "Deep Sedation or General Anaesthesia",
    summaryHospitalStay: "1 Day (Overnight observation or daycare depending on complexity)",
    summaryRecovery: "Mild throat soreness or bloating; normal activities resume in 2 to 3 days.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Severe obstructive jaundice (आंखों और पेशाब में गहरा पीलापन, खुजली)",
      "Bile duct stones (पित्त नली में पथरी) confirmed by Ultrasound or MRCP",
      "Bile duct narrowings or suspected tumors (पित्त नली का कैंसर)",
      "Biliary leaks or pancreatic duct stones"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends ERCP as a highly effective, non-surgical option for clearing bile duct blockages. It avoids major open surgery and provides immediate relief from severe jaundice and infection (cholangitis).",
    preparationFasting: "Fasting required for at least 8 to 12 hours. The stomach must be completely empty to ensure visualization and safety.",
    preparationDiet: "Consume soft or liquid meals for 24 hours prior. Avoid any solid meals on the day of the test.",
    preparationMedicines: "Aspirin, Warfarin, or other blood thinners MUST be stopped 5 days in advance under medical guidance.",
    preparationDocuments: "Bring previous MRCP reports, Ultrasound scans, Liver Function Tests (LFT), and clotting profile (PT/INR).",
    preparationCompanion: "ERCP requires anesthesia. A family member must accompany you and stay at the hospital.",
    steps: [
      { phase: "Anesthesia Delivery", desc: "An anesthesiologist administers deep sedation or general anesthesia to ensure you remain completely still and pain-free." },
      { phase: "Scope Placement", desc: "A specialized side-viewing duodenoscope is passed through the mouth to the duodenum where the bile duct opens (Ampulla of Vater)." },
      { phase: "Contrast Injection", desc: "A tiny catheter is inserted into the duct opening, contrast dye is injected, and X-ray images are taken to map the stones or narrowing." },
      { phase: "Therapeutic Clearing", desc: "Using advanced tools, the duct opening is cut slightly (sphincterotomy), stones are swept out using a balloon or basket, or a plastic/metal stent is placed." }
    ],
    recoveryExpectations: "You will wake up in the recovery ward under close observation. Your amylase levels may be checked to monitor for pancreas inflammation.",
    recoveryReturnHome: "Usually discharged the next morning, or the same evening if it is a straightforward procedure and you are stable.",
    recoveryDiet: "Keep fasting for 2 to 4 hours post-procedure. Start with clear liquids, moving to a soft, low-fat diet the next day.",
    recoveryActivity: "Avoid strenuous physical activity or lifting weights for 3-5 days.",
    recoveryWarningSigns: [
      "Severe, constant abdominal pain radiating to the back (indicates pancreatitis)",
      "High fever with chills and vomiting",
      "Black tarry stools or vomiting blood"
    ],
    safetyRisks: "ERCP is a complex therapeutic procedure. Post-ERCP pancreatitis is the most common risk (occurs in 3-5% of cases), which is usually mild and managed with IV fluids. Other rare risks include bleeding or infection.",
    safetyBenefits: [
      "Avoids open surgical exploration of the bile duct.",
      "Immediate relief from dangerous bile infections (cholangitis).",
      "Painless stone clearance and tumor stenting."
    ],
    safetySuccessRate: "95% success rate in clearing bile duct stones.",
    safetyMonitoring: "Anesthesiologist-led vitals and post-op ward monitoring.",
    faqs: [
      { q: "क्या ईआरसीपी और एमआरसीपी एक ही हैं?", a: "नहीं। एमआरसीपी (MRCP) केवल एक एमआरआई स्कैन है जो बाहर से फोटो लेता है और इसमें कोई इलाज नहीं होता। ईआरसीपी (ERCP) एक एंडोस्कोपिक इलाज है जिसमें शरीर के अंदर जाकर पथरी निकाली जाती है।" },
      { q: "क्या ईआरसीपी के बाद दोबारा पथरी बन सकती है?", a: "अत्यंत दुर्लभ मामलों में हाँ। लेकिन दोबारा पथरी होने पर इसे दोबारा एंडोस्कोपी के जरिए आसानी से निकाला जा सकता है।" },
      { q: "स्टेंट कब तक निकालना पड़ता है?", a: "आमतौर पर प्लास्टिक स्टेंट को 3 महीने के भीतर निकालना या बदलना पड़ता है। मेटल स्टेंट लंबे समय या स्थायी रूप से छोड़े जा सकते हैं।" }
    ],
    doctorAdvice: "Bile duct stones can lead to life-threatening infections (cholangitis) or acute pancreatitis. If you have jaundice with high fever, treat it as an emergency and consult immediately.",
    relatedConditions: ["jaundice", "liver-cirrhosis"],
    relatedBlogs: ["jaundice-symptoms-causes", "endoscopy-kya-hota-hai"]
  },
  eus: {
    slug: "eus",
    title: "EUS (Endoscopic Ultrasound)",
    hindiTitle: "ईयूएस (एंडोस्कोपिक अल्ट्रासाउंड)",
    metaTitle: "Advanced Endoscopic Ultrasound (EUS) in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Get expert Endoscopic Ultrasound (EUS) diagnostic & biopsy services in Ranchi at Orchid Medical Centre by Dr. Akhilesh Yadav, senior gastroenterologist.",
    simpleExplanation: "एंडोस्कोपिक अल्ट्रासाउंड (EUS) एक अत्याधुनिक तकनीक है जो एंडोस्कोपी और अल्ट्रासाउंड को एक साथ जोड़ती है। इसके तहत एंडोस्कोप की नोक पर एक छोटा अल्ट्रासाउंड प्रोब लगा होता है। इसे मुंह या मलाशय के रास्ते डालकर छाती, पेट, पित्त नली, अग्न्याशय (pancreas) और आस-पास के अंगों की बहुत बारीक तस्वीरें ली जाती हैं। यह पेट के अंदर की गांठों या कैंसर की सटीक जांच और बायोप्सी के लिए अत्यंत उपयोगी है।",
    summaryPurpose: "पेट के अंदर के अंगों, कैंसर की स्टेजिंग, अग्न्याशय (pancreas) के सिस्ट/गांठ और पित्त नली की सूक्ष्म पथरियों की उच्च-रिज़ॉल्यूशन जांच करना।",
    summaryDuration: "25 - 40 Minutes",
    summaryAnaesthesia: "Conscious Sedation or Deep Sedation (हल्की नींद)",
    summaryHospitalStay: "Daycare (Same-day discharge within 3 hours)",
    summaryRecovery: "Mild throat scratchiness; return to normal routine within 24 hours.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Pancreatic cysts, nodules, or suspected tumors (अग्न्याशय की गांठ)",
      "Unexplained chronic abdominal pain radiating to the back",
      "Staging of esophagus, stomach, or rectal cancers",
      "Enlarged lymph nodes in the chest or abdomen"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends EUS for superior visualization of deep organs like the pancreas. It provides much clearer images than normal MRI/CT scans and allows safe needle biopsy of deep abdominal lesions.",
    preparationFasting: "Fasting required for 6 to 8 hours. The stomach must be completely empty of food and liquids.",
    preparationDiet: "Follow a light diet the day before. Avoid solid food on the morning of the procedure.",
    preparationMedicines: "Stop blood thinners 3 to 5 days prior to the test to prevent bleeding during biopsy.",
    preparationDocuments: "Bring all CT scans, MRI files, previous endoscopy reports, and blood test summaries.",
    preparationCompanion: "Due to sedation, an adult companion is required to assist you home.",
    steps: [
      { phase: "Patient Sedated", desc: "You are given IV sedation to ensure you sleep comfortably and painlessly during the test." },
      { phase: "EUS Scope Insertion", desc: "The specialized EUS scope is inserted through the mouth. The ultrasound transducer at the tip transmits high-definition live images of neighboring organs." },
      { phase: "Fine-Needle Sampling", desc: "If a tumor or lymph node is found, a microscopic needle is passed under real-time ultrasound guidance to collect cells (FNA/FNB)." },
      { phase: "Completion", desc: "The scope is withdrawn. The gathered tissue is sent to the pathology laboratory for cell analysis." }
    ],
    recoveryExpectations: "You will wake up smoothly in the recovery bay. A slight sore throat or bloating due to air inflation is normal and temporary.",
    recoveryReturnHome: "Discharged on the same day after 2 hours of observation.",
    recoveryDiet: "You can drink clear liquids once your swallowing reflex is fully back (around 1 hour). Eat a soft diet for the rest of the day.",
    recoveryActivity: "Rest at home. Do not perform strenuous activities or drive on the day of the procedure.",
    recoveryWarningSigns: [
      "Severe abdominal pain or chest pain",
      "Fever or vomiting blood",
      "Difficulty swallowing or severe neck pain"
    ],
    safetyRisks: "EUS is a very safe diagnostic procedure. The risk of complications like bleeding or infection is less than 1%. If a biopsy (FNA) is performed on a pancreatic cyst, there is a minor risk of temporary pancreatitis.",
    safetyBenefits: [
      "Enables precise biopsy of deep abdominal organs without open surgery.",
      "Determines the exact stage of cancer to plan chemotherapy or surgery.",
      "Detects tiny gallstones missed by routine ultrasound and CT scans."
    ],
    safetySuccessRate: "97% diagnostic success in localized tissue extraction.",
    safetyMonitoring: "Continuous pulse, BP, and respiration tracking.",
    faqs: [
      { q: "क्या ईयूएस एक सामान्य अल्ट्रासाउंड है?", a: "नहीं। सामान्य अल्ट्रासाउंड पेट के बाहर से किया जाता है। ईयूएस में दूरबीन को पेट के अंदर ले जाकर सीधे अंगों के पास से अल्ट्रासाउंड किया जाता है, जिससे अत्यंत स्पष्ट तस्वीरें मिलती हैं।" },
      { q: "क्या सुई बायोप्सी (FNA) सुरक्षित है?", a: "हाँ, यह पूरी तरह सुरक्षित है। सुई को सीधे अल्ट्रासाउंड स्क्रीन पर देखते हुए डाला जाता है, जिससे किसी अन्य नस या अंग को नुकसान होने का खतरा नहीं होता।" },
      { q: "ईयूएस बायोप्सी की रिपोर्ट कब आती है?", a: "बायोप्सी (FNAC/Biopsy) की रिपोर्ट पैथोलॉजी लैब से आने में 3 से 5 दिन का समय लगता है।" }
    ],
    doctorAdvice: "For pancreatic diseases or deep abdominal masses, EUS is the gold standard diagnostic tool. Early diagnosis of pancreatic cysts can prevent them from turning into cancer.",
    relatedConditions: ["jaundice"],
    relatedBlogs: ["endoscopy-kya-hota-hai", "jaundice-symptoms-causes"]
  },
  enteroscopy: {
    slug: "enteroscopy",
    title: "Enteroscopy",
    hindiTitle: "एंटेरोस्कोपी (छोटी आंत की जांच)",
    metaTitle: "Specialized Small Bowel Enteroscopy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Get expert, painless small intestine Enteroscopy in Ranchi at Orchid Medical Centre by Dr. Akhilesh Yadav, senior gastroenterologist.",
    simpleExplanation: "एंटेरोस्कोपी (Enteroscopy) एक विशेष दूरबीन जांच है जिसका उपयोग छोटी आंत (small intestine) के अंदरूनी हिस्से को देखने और वहां की बीमारियों का इलाज करने के लिए किया जाता है। सामान्य एंडोस्कोपी और कोलोनोस्कोपी से छोटी आंत के पूरे हिस्से को नहीं देखा जा सकता। एंटेरोस्कोपी में बैलून-असिस्टेड या स्पाइरल तकनीक का उपयोग करके छोटी आंत के गहरे हिस्सों में छिपी ब्लीडिंग, अल्सर या गांठों का पता लगाया जाता है।",
    summaryPurpose: "छोटी आंत की जांच करना, अज्ञात आंतरिक ब्लीडिंग को ढूंढकर बंद करना, बायोप्सी लेना और पॉलिप्स निकालना।",
    summaryDuration: "45 - 60 Minutes",
    summaryAnaesthesia: "Deep Sedation or General Anaesthesia",
    summaryHospitalStay: "Daycare or 1 Day admission (depending on complexity)",
    summaryRecovery: "Mild bloating or sore throat; normal activities resume in 1 to 2 days.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Unexplained GI bleeding with normal endoscopy and colonoscopy",
      "Chronic diarrhea or malabsorption (जैसे celiac disease)",
      "Unexplained iron deficiency anemia (खून की कमी) due to hidden blood loss",
      "Suspected tumors or polyps in the small intestine"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends enteroscopy as the primary therapeutic step for small bowel bleeding. It allows us to directly apply heat, clips, or argon plasma to stop bleeding that capsule endoscopy can only photograph.",
    preparationFasting: "Fasting required for 12 hours. If done through the rectal route, a bowel preparation similar to colonoscopy is required.",
    preparationDiet: "Liquid diet for 24 hours prior. Avoid any solid food on the day of the procedure.",
    preparationMedicines: "Stop all blood thinners 5 days in advance under medical guidance.",
    preparationDocuments: "Bring previous capsule endoscopy reports, CT scans, and hemoglobin charts.",
    preparationCompanion: "An adult family member must accompany you as deep sedation is used.",
    steps: [
      { phase: "Sedation & Setup", desc: "You are given deep IV sedation or general anesthesia. Vitals are stabilized." },
      { phase: "Balloons Inflated", desc: "The enteroscope (with overtube) is inserted. The balloons are inflated and deflated sequentially to pleat the small intestine onto the scope, allowing deep advancement." },
      { phase: "Inspection & Therapy", desc: "The small bowel lining is carefully examined. Ulcers are biopsied, and bleeding points are cauterized or clipped." },
      { phase: "Withdrawal", desc: "The scope is gently withdrawn, checking the pleated sections again." }
    ],
    recoveryExpectations: "You will wake up under observation. Passing gas helps relieve the air used to open up the long loops of the small bowel.",
    recoveryReturnHome: "Discharged on the same day for diagnostic tests, or next day if major bleeding control was performed.",
    recoveryDiet: "Start with clear liquids after 2 hours. Eat a soft diet for the next 24 hours.",
    recoveryActivity: "Rest for 24 hours. Do not lift weights or exercise for 3 days.",
    recoveryWarningSigns: [
      "Severe abdominal pain and swelling",
      "Passing dark black stools or vomiting fresh blood",
      "High fever or persistent nausea"
    ],
    safetyRisks: "Enteroscopy is generally safe. Because the small bowel wall is thin, the risk of perforation is slightly higher than standard endoscopy (around 1 in 500 cases, particularly if dilatation is done).",
    safetyBenefits: [
      "Visualizes the small intestine which is otherwise unreachable.",
      "Allows direct treatment of bleeding points, avoiding open surgery.",
      "Accurate tissue biopsy for rare intestinal infections and cancers."
    ],
    safetySuccessRate: "90% diagnostic success in localized small bowel bleeding.",
    safetyMonitoring: "Continuous pulse, BP, and respiration tracking.",
    faqs: [
      { q: "कैप्सूल एंडोस्कोपी और एंटेरोस्कोपी में क्या अंतर है?", a: "कैप्सूल एंडोस्कोपी में मरीज को एक कैमरा पिल निगलनी होती है जो केवल फोटो खींचती है, उसमें इलाज या बायोप्सी नहीं की जा सकती। एंटेरोस्कोपी में डॉक्टर खुद दूरबीन डालकर सीधे इलाज और बायोप्सी कर सकते हैं।" },
      { q: "क्या एंटेरोस्कोपी के लिए भर्ती होना पड़ता है?", a: "अधिकतर मामलों में यह डेकेयर प्रक्रिया है, लेकिन अगर ब्लीडिंग रोकने का बड़ा इलाज किया गया हो, तो 1 दिन की निगरानी के लिए भर्ती किया जा सकता है।" },
      { q: "क्या प्रक्रिया के बाद पेट में गैस महसूस होती है?", a: "हाँ, छोटी आंत को फुलाने के लिए उपयोग की गई हवा के कारण कुछ घंटों के लिए पेट फूला हुआ लग सकता है। चलना-फिरना शुरू करने पर गैस पास होकर राहत मिल जाती है।" }
    ],
    doctorAdvice: "Unexplained anemia or hidden blood loss is often due to small bowel ulcers or vascular malformations. Do not wait until your hemoglobin drops dangerously low; seek specialized small bowel evaluation.",
    relatedConditions: ["ibs"],
    relatedBlogs: ["endoscopy-kya-hota-hai"]
  },
  cholangioscopy: {
    slug: "cholangioscopy",
    title: "Cholangioscopy (SpyGlass)",
    hindiTitle: "कोलांगियोस्कोपी (स्पाइग्लास पित्त नली जांच)",
    metaTitle: "SpyGlass Cholangioscopy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Get advanced SpyGlass Cholangioscopy in Ranchi at Orchid Medical Centre by senior gastroenterologist Dr. Akhilesh Yadav. Direct bile duct visualization.",
    simpleExplanation: "स्पाइग्लास कोलांगियोस्कोपी (SpyGlass Cholangioscopy) एक अत्याधुनिक चिकित्सा तकनीक है जिसमें पित्त नली (bile duct) के अंदर एक सूक्ष्म कैमरा डालकर सीधे आंखों से देखा जाता है। सामान्य एंडोस्कोपी या ईआरसीपी में हम केवल एक्स-रे पर परछाई (shadow) देखते हैं, लेकिन स्पाइग्लास तकनीक के जरिए डॉक्टर पित्त नली के अंदर की पथरी, रुकावट या कैंसर को रंगीन वीडियो स्क्रीन पर लाइव देख सकते हैं और लेजर द्वारा बड़ी पथरियों को तोड़ सकते हैं।",
    summaryPurpose: "पित्त नली के अंदर का सीधा रंगीन वीडियो देखना, कैंसर का पता लगाने के लिए लाइव टारगेटेड बायोप्सी लेना और बड़ी पथरियों को लेजर से तोड़ना।",
    summaryDuration: "40 - 65 Minutes",
    summaryAnaesthesia: "General Anaesthesia or Deep Sedation",
    summaryHospitalStay: "1 Day (Overnight hospital stay recommended)",
    summaryRecovery: "Normal bloating for a day; return to routine work in 3 days.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Large, hard bile duct stones (पित्त नली की बड़ी पथरी) that ERCP cannot remove",
      "Suspected bile duct cancer (cholangiocarcinoma) with unclear biopsy",
      "Unexplained narrowing of the bile duct (strictures)",
      "Evaluation of liver transplant biliary complications"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends SpyGlass Cholangioscopy for patients with giant, impacted bile duct stones. By utilizing laser lithotripsy (EHL/ISL) directly through the scope, we can break large stones into tiny sand-like particles without surgery.",
    preparationFasting: "Fasting required for at least 8 to 12 hours. Stomach and duodenum must be completely clean.",
    preparationDiet: "Strict clear liquid diet 24 hours prior. Avoid any solid meals.",
    preparationMedicines: "Stop blood thinners 5-7 days before. Heart/BP medications can be taken with small sips of water in the morning.",
    preparationDocuments: "Bring previous ERCP reports, MRCP films, and liver function test (LFT) reports.",
    preparationCompanion: "Since this is done under deep sedation/anesthesia, a close relative must stay at the hospital.",
    steps: [
      { phase: "Anesthesia Delivery", desc: "You are given deep IV sedation or general anesthesia for safety and absolute comfort." },
      { phase: "ERCP Scope Setup", desc: "First, a standard ERCP scope is passed to the opening of the bile duct in the duodenum." },
      { phase: "SpyGlass Probe Insertion", desc: "The ultra-thin SpyGlass cholangioscope (only 3.5mm thick) is passed through the ERCP scope directly into the bile duct." },
      { phase: "Direct Visual Therapy", desc: "The doctor visualizes the duct lining. A laser fiber or EHL probe is inserted through the SpyGlass channel, and the giant stones are shattered under direct vision." }
    ],
    recoveryExpectations: "You will wake up comfortably in the recovery room. A slight feeling of pressure in the upper abdomen is common.",
    recoveryReturnHome: "Usually discharged the next day after observing for any fever or pancreatitis signs.",
    recoveryDiet: "NPO (fasting) for 4 hours. Start with light liquids, transitioning to normal food the next morning.",
    recoveryActivity: "Avoid strenuous activities or heavy lifting for 4 to 5 days.",
    recoveryWarningSigns: [
      "High fever with chills and yellowing of eyes (indicates cholangitis)",
      "Severe abdominal pain radiating to the back",
      "Vomiting or clay-colored stools"
    ],
    safetyRisks: "The safety profile is similar to ERCP. Risks include mild pancreatitis (3-5%) or bile duct infection (prevented with IV antibiotics). Perforation is extremely rare.",
    safetyBenefits: [
      "100% direct visualization of the biliary system, avoiding diagnostic errors.",
      "Clears giant stones without requiring painful open biliary surgery.",
      "Allows taking direct visual-guided biopsies of bile duct tumors."
    ],
    safetySuccessRate: "90% stone clearance and biopsy accuracy.",
    safetyMonitoring: "Vitals and temperature checked hourly post-op.",
    faqs: [
      { q: "स्पाइग्लास (SpyGlass) सामान्य ईआरसीपी से बेहतर क्यों है?", a: "ईआरसीपी में डॉक्टर केवल एक्स-रे शैडो देखते हैं जिससे कभी-कभी पथरी या छोटा कैंसर छूट सकता है। स्पाइग्लास में डॉक्टर पित्त नली के अंदर कैमरा डालकर सब कुछ लाइव देख सकते हैं।" },
      { q: "क्या लेजर से पथरी तोड़ने में दर्द होता है?", a: "नहीं, पूरी प्रक्रिया बेहोशी/गहरी नींद में होती है, इसलिए मरीज को कुछ महसूस नहीं होता।" },
      { q: "क्या इस प्रक्रिया के बाद एंटीबायोटिक लेनी पड़ती है?", a: "हाँ, पित्त नली के संक्रमण से बचने के लिए प्रक्रिया से पहले और बाद में 3 से 5 दिनों तक एंटीबायोटिक दवाएं दी जाती हैं।" }
    ],
    doctorAdvice: "If you have been told you need surgery for a large bile duct stone, SpyGlass Cholangioscopy with laser lithotripsy is a highly effective, non-surgical alternative you should consider.",
    relatedConditions: ["jaundice"],
    relatedBlogs: ["jaundice-symptoms-causes"]
  },
  "esd-emr": {
    slug: "esd-emr",
    title: "Endoscopic Tumour Removal (EMR/ESD)",
    hindiTitle: "एंडोस्कोपिक ट्यूमर रिमूवल (ESD/EMR)",
    metaTitle: "Endoscopic EMR & ESD Tumour Removal in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Get advanced EMR & ESD non-surgical tumor removal in Ranchi at Orchid Medical Centre by senior gastroenterologist Dr. Akhilesh Yadav, DM Gastroenterology.",
    simpleExplanation: "ईएमआर (Endoscopic Mucosal Resection) और ईएसडी (Endoscopic Submucosal Dissection) दो उन्नत दूरबीन तकनीकें हैं जिनके द्वारा पेट, भोजन की नली या बड़ी आंत के अंदरूनी हिस्से में मौजूद शुरुआती कैंसर (early cancer), बड़े पॉलिप्स या बिना कैंसर वाली गांठों (tumors) को बिना किसी चीरा-फाड़ी या ओपन सर्जरी के सीधे दूरबीन से निकाल दिया जाता है। यह सर्जरी के बिना कैंसर को जड़ से खत्म करने का एक आधुनिक तरीका है।",
    summaryPurpose: "पाचन तंत्र के शुरुआती कैंसर, बड़े पॉलिप्स और प्री-कैंसरस ट्यूमर को दूरबीन की मदद से सुरक्षित रूप से काटना और निकालना।",
    summaryDuration: "45 - 90 Minutes",
    summaryAnaesthesia: "Deep Sedation or General Anaesthesia",
    summaryHospitalStay: "1 to 2 Days (For post-procedure observation)",
    summaryRecovery: "Minimal pain; liquid diet for 2 days; full recovery in 1 week.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Large gastrointestinal polyps (बड़े पॉलिप्स) that cannot be removed by simple snaring",
      "Early-stage stomach, esophageal, or colon cancer (शुरुआती कैंसर)",
      "Flat lesions or nodules in Barrett’s esophagus",
      "Submucosal lesions of the GI tract"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends ESD/EMR for early gastrointestinal tumors. By removing only the inner diseased layer of the organ while preserving the rest of the stomach or colon, we provide cancer cure with a very high quality of life.",
    preparationFasting: "Fasting required for 8 hours for upper GI. Complete bowel prep is mandatory for lower GI (colon) ESD.",
    preparationDiet: "Clear liquids for 24-48 hours. Absolutely no solid foods prior.",
    preparationMedicines: "Blood thinners (Aspirin, Clopidogrel, Warfarin) MUST be stopped 7 days prior under cardiologist coordination.",
    preparationDocuments: "Bring previous endoscopy reports, biopsy tissue slides/blocks, CT scan plates, and blood profiles.",
    preparationCompanion: "Hospital admission is required. A family member must accompany and assist the patient.",
    steps: [
      { phase: "Anesthesia Delivery", desc: "You are given deep IV sedation or general anesthesia. Vital signs are continuously monitored." },
      { phase: "Lesion Mapping", desc: "The tumor boundaries are marked using specialized dye sprays (chromoendoscopy) or high-definition filters." },
      { phase: "Submucosal Injection", desc: "A special solution is injected under the tumor to lift it away from the deeper muscle wall, creating a safe cushion." },
      { phase: "Endoscopic Dissection", desc: "Using micro-knives passed through the scope, the tumor is dissected out in one single piece (en-bloc resection) to ensure no cancer cells are left." }
    ],
    recoveryExpectations: "You will be moved to the ward. Some mild abdominal soreness or chest discomfort is expected and managed with IV medications.",
    recoveryReturnHome: "Discharged in 1 to 2 days once you can tolerate oral liquids and show no signs of bleeding.",
    recoveryDiet: "Strict clear liquid diet for the first 24-48 hours. Gradually move to a soft diet (khichdi, curd) for a week.",
    recoveryActivity: "Avoid heavy lifting, exercising, or traveling for 10-14 days.",
    recoveryWarningSigns: [
      "Vomiting fresh blood or passing black tarry stools",
      "Severe, sudden chest or abdominal pain",
      "High fever or dizziness"
    ],
    safetyRisks: "EMR/ESD are highly skilled procedures. The primary risks are bleeding (2-5%) and perforation (1-3%), which are usually managed endoscopically during the procedure itself using clips.",
    safetyBenefits: [
      "Preserves the entire organ (stomach/colon) unlike traditional surgery.",
      "Zero external cuts, scars, or severe post-surgical pain.",
      "Provides complete curative treatment for early-stage cancers."
    ],
    safetySuccessRate: "90% complete en-bloc resection rate.",
    safetyMonitoring: "Vitals and hemoglobin levels checked post-op.",
    faqs: [
      { q: "क्या ESD/EMR के बाद कीमोथेरेपी की आवश्यकता होती है?", a: "यदि पैथोलॉजी जांच में ट्यूमर पूरी तरह से निकल चुका है (clear margins) और यह केवल ऊपरी सतह पर था, तो किसी कीमोथेरेपी या रेडियोथेरेपी की आवश्यकता नहीं होती।" },
      { q: "क्या इस प्रक्रिया में दर्द होता है?", a: "चूंकि यह बेहोशी में होती है, प्रक्रिया के दौरान कोई दर्द नहीं होता। बाद में पेट में मामूली दर्द या भारीपन हो सकता है जो दवाइयों से ठीक हो जाता है।" },
      { q: "क्या ट्यूमर दोबारा बढ़ सकता है?", a: "यदि पूरी गांठ एक बार में निकाल ली गई है, तो दोबारा होने की संभावना बहुत कम (2% से कम) होती है। पुष्टि के लिए 3-6 महीने में एक फॉलो-अप एंडोस्कोपी की जाती है।" }
    ],
    doctorAdvice: "Early cancers of the food pipe and stomach no longer require losing your entire stomach or esophagus. Advanced ESD can cure the cancer endoscopically if caught in time.",
    relatedConditions: ["fatty-liver", "ibs"],
    relatedBlogs: ["endoscopy-kya-hota-hai"]
  },
  "gi-bleeding": {
    slug: "gi-bleeding",
    title: "GI Bleeding Treatment",
    hindiTitle: "जीआई ब्लीडिंग (आंतरिक रक्तस्राव का इलाज)",
    metaTitle: "Emergency GI Bleeding Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Emergency endoscopic treatment for GI Bleeding in Ranchi at Orchid Medical Centre by senior gastroenterologist Dr. Akhilesh Yadav. 24/7 critical care.",
    simpleExplanation: "जीआई ब्लीडिंग (GI Bleeding Treatment) पेट या आंतों के अंदर होने वाले रक्तस्राव (bleeding) को रोकने का एक आपातकालीन इलाज है। खून की उल्टी आना (hematemesis) या मल के रास्ते काला या लाल खून आना (melena) एक गंभीर स्थिति है। इसके इलाज के लिए डॉक्टर तुरंत एंडोस्कोपी करते हैं और ब्लीडिंग वाली जगह पर क्लिप लगाकर, दवा का इंजेक्शन देकर या थर्मल प्रोब से सेक कर ब्लीडिंग को तुरंत बंद करते हैं।",
    summaryPurpose: "पेट या आंतों के अंदर हो रहे रक्तस्राव के कारण का पता लगाना और एंडोस्कोपिक विधियों से खून बहना तुरंत बंद करना।",
    summaryDuration: "15 - 30 Minutes",
    summaryAnaesthesia: "Conscious Sedation or General Anaesthesia (depending on patient stability)",
    summaryHospitalStay: "2 to 3 Days (For monitoring in ICU/Ward)",
    summaryRecovery: "Gradual recovery; patient is monitored in the hospital until stable.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Vomiting bright red blood or dark coffee-colored fluid (खून की उल्टी)",
      "Passing black, tarry, foul-smelling stools (काला मल)",
      "Sudden weakness, dizziness, or fainting with bloody stools",
      "Severe drop in hemoglobin levels without obvious cause"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav emphasizes that active GI bleeding is a medical emergency. Immediate endoscopic intervention within the first 12-24 hours is vital to stabilize the patient, prevent shock, and save lives.",
    preparationFasting: "In emergencies, fasting is bypassed or the stomach is cleared using special tubes. For semi-emergent cases, fasting of 4-6 hours is preferred.",
    preparationDiet: "Strictly NPO (fasting). No food or liquids are allowed.",
    preparationMedicines: "Blood thinners must be stopped immediately. IV medicines (like PPI infusions) are started to reduce stomach acid.",
    preparationDocuments: "Bring blood group records, previous prescriptions, and past medical history documents.",
    preparationCompanion: "Emergency admission is required. Close family members must be present to arrange blood if needed.",
    steps: [
      { phase: "Resuscitation & ICU Setup", desc: "The patient is stabilized with IV fluids, blood transfusions, and oxygen. Anesthesia is readied." },
      { phase: "Endoscopic Inspection", desc: "The endoscope is inserted. Clots are washed away to identify the exact source (like a stomach ulcer or ruptured food pipe vein)." },
      { phase: "Hemostasis Therapy", desc: "The bleeding is stopped using one or more techniques: injecting adrenaline, placing metallic hemoclips, spraying Hemospray, or applying heat (APC/bipolar)." },
      { phase: "Post-op Monitoring", desc: "The patient is transferred to the ICU. Vitals and hemoglobin are monitored closely to ensure no re-bleeding." }
    ],
    recoveryExpectations: "You will recover in the ICU/high-dependency unit. Frequent checks of pulse and blood pressure are done.",
    recoveryReturnHome: "Discharged in 2 to 3 days once hemoglobin levels stabilize and there is no blood in stools for 48 hours.",
    recoveryDiet: "Kept on IV fluids initially, followed by cold clear liquids. Normal soft food is introduced gradually after 24-48 hours.",
    recoveryActivity: "Bed rest is required. Avoid any physical strain or lifting for 7-10 days.",
    recoveryWarningSigns: [
      "Fresh blood in vomit or stools",
      "Sudden dizziness, cold sweat, or fainting",
      "Severe abdominal pain or bloating"
    ],
    safetyRisks: "The procedure is vital to save lives. Rare risks include aspiration of blood into the lungs or a small tear in the food pipe, which are managed immediately by the clinical team.",
    safetyBenefits: [
      "Stops active life-threatening bleeding instantly without open surgery.",
      "Identifies the exact cause (ulcer, varices, tear) to prevent recurrences.",
      "Saves patients from emergency open stomach surgeries."
    ],
    safetySuccessRate: "95% success rate in primary endoscopic bleeding control.",
    safetyMonitoring: "Continuous ICU vital monitoring and hemoglobin tracking.",
    faqs: [
      { q: "खून की उल्टी आने का क्या कारण होता है?", a: "इसके मुख्य कारणों में पेट या भोजन की नली में अल्सर होना, लिवर सिरोसिस के कारण भोजन की नली की नसों का फटना (varices), या पेट की परत में गंभीर सूजन (gastritis) शामिल हैं।" },
      { q: "क्या ब्लीडिंग रोकने के बाद दोबारा खून आ सकता है?", a: "हाँ, लगभग 5-10% मरीजों में अल्सर गहरा होने पर दोबारा ब्लीडिंग हो सकती है। ऐसी स्थिति में दोबारा एंडोस्कोपी करके ब्लीडिंग को सफलतापूर्वक बंद किया जाता है।" },
      { q: "क्या ब्लीडिंग के लिए ब्लड ट्रांसफ्यूजन (खून चढ़ाना) जरूरी है?", a: "यदि मरीज का हीमोग्लोबिन 7 या 8 से कम हो जाता है, या बीपी बहुत कम हो जाता है, तो ब्लीडिंग कंट्रोल करने के साथ-साथ खून चढ़ाना आवश्यक होता है।" }
    ],
    doctorAdvice: "Vomiting blood or passing black stools is a warning sign of a severe internal emergency. Never wait for it to stop on its own. Go to the hospital immediately.",
    relatedConditions: ["liver-cirrhosis", "jaundice"],
    relatedBlogs: ["jaundice-symptoms-causes", "endoscopy-kya-hota-hai"]
  },
  "eus-fna-fnb": {
    slug: "eus-fna-fnb",
    title: "EUS-guided FNA & FNB",
    hindiTitle: "ईयूएस गाइडेड एफएनए और एफएनबी (सुई बायोप्सी)",
    metaTitle: "EUS FNA & FNB Biopsy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Get advanced EUS-guided FNA & FNB biopsy services in Ranchi at Orchid Medical Centre by senior gastroenterologist Dr. Akhilesh Yadav.",
    simpleExplanation: "ईयूएस गाइडेड एफएनए (Fine Needle Aspiration) और एफएनबी (Fine Needle Biopsy) पेट के गहरे अंगों, जैसे अग्न्याशय (pancreas), लिवर, पित्त नली या लिम्फ नोड्स में मौजूद गांठों (tumors) से जांच के लिए सेल या टिश्यू निकालने की एक आधुनिक सुई बायोप्सी विधि है। इसमें एंडोस्कोपिक अल्ट्रासाउंड की मदद से स्क्रीन पर गांठ को देखते हुए एक बेहद पतली सुई डालकर सुरक्षित रूप से सैंपल निकाला जाता है, जिससे कैंसर का सटीक निदान होता है।",
    summaryPurpose: "पेट के अंदरूनी हिस्सों या गांठों से अल्ट्रासाउंड स्क्रीन पर लाइव देखते हुए सुई द्वारा बायोप्सी सैंपल निकालना।",
    summaryDuration: "30 - 45 Minutes",
    summaryAnaesthesia: "Deep Sedation (हल्की नींद)",
    summaryHospitalStay: "Daycare (Discharge in 3 to 4 hours)",
    summaryRecovery: "Mild throat irritation; normal diet and routine can be resumed the next day.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Pancreatic masses or cysts (अग्न्याशय की गांठ)",
      "Unexplained abdominal lymph node enlargement",
      "Stomach wall tumors (such as GIST)",
      "Bile duct or liver masses that cannot be biopsied externally"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends EUS-FNA/FNB as the safest way to obtain a biopsy from deep abdominal tumors. Unlike external CT-guided biopsy, it has almost zero risk of spreading cancer cells into the abdominal cavity (needle tract seeding).",
    preparationFasting: "Fasting of 6 to 8 hours is required. No water for 4 hours before the test.",
    preparationDiet: "Light diet the day before. Avoid any gas-forming foods.",
    preparationMedicines: "Aspirin, Clopidogrel, or blood thinners must be strictly stopped for 5-7 days under medical clearance.",
    preparationDocuments: "Bring CT scan or MRI plates, previous blood coagulation profile reports (PT/INR, platelets).",
    preparationCompanion: "An adult family member must accompany you to manage the discharge process after sedation.",
    steps: [
      { phase: "Patient Sedated", desc: "IV sedation is administered. You will remain asleep and comfortable throughout." },
      { phase: "Localization of Tumor", desc: "The EUS scope is placed in the stomach/duodenum. The ultrasound probe visualizes the target mass and surrounding blood vessels." },
      { phase: "Needle Pass (Biopsy)", desc: "Under real-time ultrasound, a microscopic biopsy needle is guided through the scope channel directly into the mass, avoiding blood vessels." },
      { phase: "Tissue Verification", desc: "Cells (FNA) or core tissue (FNB) are retrieved. A cytotechnologist may verify the sample adequacy immediately under a microscope." }
    ],
    recoveryExpectations: "You will wake up in daycare. A mild throat discomfort or light abdominal pressure is normal.",
    recoveryReturnHome: "You can go home 3 hours after the test once you can walk and drink liquids comfortably.",
    recoveryDiet: "Start with sips of water. Eat a soft, non-spicy diet for 24 hours.",
    recoveryActivity: "Avoid strenuous exercise or driving on the day of the procedure.",
    recoveryWarningSigns: [
      "Severe, worsening abdominal pain",
      "Fever with chills",
      "Vomiting blood or dark black stools"
    ],
    safetyRisks: "EUS-FNA/FNB is highly safe. Complications like mild bleeding or infection occur in less than 1-2% of cases and are treated with antibiotics or supportive care.",
    safetyBenefits: [
      "High accuracy in diagnosing early-stage cancers.",
      "Safely bypasses major blood vessels under real-time ultrasound.",
      "Avoids open surgical biopsy, reducing recovery time to a few hours."
    ],
    safetySuccessRate: "95% diagnostic yield for tumor classification.",
    safetyMonitoring: "Vitals and oxygen saturation are tracked throughout.",
    faqs: [
      { q: "क्या सुई डालने से दर्द होता है?", a: "नहीं। मरीज को हल्की नींद का इंजेक्शन दिया जाता है, जिससे उन्हें सुई चुभने का कोई एहसास नहीं होता।" },
      { q: "एफएनए (FNA) और एफएनबी (FNB) में क्या अंतर है?", a: "एफएनए (FNA) में केवल गांठ के सेल (कोशिकाएं) निकाले जाते हैं, जबकि एफएनबी (FNB) में टिश्यू का पूरा टुकड़ा (core biopsy) निकाला जाता है, जो कैंसर के प्रकार और इम्यूनोहिस्टोकेमिस्ट्री (IHC) की सटीक जांच में मदद करता है।" },
      { q: "बायोप्सी की रिपोर्ट कब मिलती है?", a: "हिस्टोपैथोलॉजी और बायोप्सी की अंतिम रिपोर्ट आने में 3 से 5 वर्किंग डेज का समय लगता है।" }
    ],
    doctorAdvice: "A biopsy is essential to confirm the diagnosis of abdominal tumors before starting chemotherapy or planning surgery. EUS-FNB is the fastest, safest, and most accurate way to get this confirmation.",
    relatedConditions: ["jaundice"],
    relatedBlogs: ["endoscopy-kya-hota-hai", "jaundice-symptoms-causes"]
  },
  "ehl-biopsy": {
    slug: "ehl-biopsy",
    title: "EHL & Biopsy",
    hindiTitle: "कैमरे से पित्त की पथरी तोड़ना और बायोप्सी (EHL)",
    metaTitle: "Bile Duct EHL & Biopsy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Advanced Electrohydraulic Lithotripsy (EHL) and targeted bile duct biopsy in Ranchi at Orchid Medical Centre by Dr. Akhilesh Yadav, DM Gastroenterology.",
    simpleExplanation: "ईएचएल (Electrohydraulic Lithotripsy) पित्त की नली में फंसी बहुत बड़ी और सख्त पथरी को शॉकवेव (shockwaves) की मदद से तोड़ने की एक उन्नत तकनीक है। जब सामान्य दूरबीन (ERCP) से पथरी नहीं निकल पाती, तब स्पाइग्लास कैमरे के जरिए पित्त नली के अंदर जाकर ईएचएल प्रोब से शॉकवेव्स दी जाती हैं, जिससे पथरी टूटकर छोटे टुकड़ों में बिखर जाती है। इसके साथ ही, पित्त नली की दीवारों से सटीक बायोप्सी भी ली जाती है।",
    summaryPurpose: "पित्त की नली में फंसी बड़ी पथरी को पानी के अंदर शॉकवेव देकर तोड़ना और संदिग्ध हिस्सों से बायोप्सी लेना।",
    summaryDuration: "45 - 60 Minutes",
    summaryAnaesthesia: "Deep Sedation or General Anaesthesia",
    summaryHospitalStay: "1 Day (Overnight observation recommended)",
    summaryRecovery: "Mild abdominal pressure or gas bloating; return to light work in 2-3 days.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Giant bile duct stones (पित्त नली की बड़ी पथरी > 1.5 cm) that cannot be pulled out",
      "Impacted stones causing severe pain and yellow jaundice",
      "Suspected bile duct tumor requiring direct-vision biopsy",
      "Failure of conventional mechanical stone crushers during ERCP"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends EHL as a non-surgical alternative to biliary surgery. Using the SpyGlass camera, we can visually target the stone and break it with shockwaves, preserving the integrity of the bile duct.",
    preparationFasting: "Fasting required for 8 to 12 hours. The digestive tract must be completely empty.",
    preparationDiet: "Strict clear liquid diet 24 hours prior. Avoid any solid meals.",
    preparationMedicines: "Blood thinners must be discontinued 5-7 days before. IV antibiotics are started before the procedure.",
    preparationDocuments: "Bring previous ERCP reports, MRCP images, LFT, and coagulation profile.",
    preparationCompanion: "Hospital admission is required. A family member must be present to assist with the hospital stay.",
    steps: [
      { phase: "Anesthesia Administration", desc: "You are given deep IV sedation or general anesthesia for safety and comfort." },
      { phase: "SpyGlass System Setup", desc: "A parent endoscope is advanced, and the ultra-thin SpyGlass cholangioscope is guided into the bile duct." },
      { phase: "Shockwave Delivery (EHL)", desc: "The EHL probe is placed 1-2mm from the stone. Under direct vision, high-energy electrical shockwaves are discharged in water to break the stone." },
      { phase: "Biliary Clearance & Biopsy", desc: "The stone fragments are swept out into the intestine. If needed, a mini-biopsy forceps (SpyBite) takes tissue from the duct walls." }
    ],
    recoveryExpectations: "You will wake up under monitoring. Mild abdominal discomfort or bloating is common as gas and water are used during the shockwave process.",
    recoveryReturnHome: "Usually discharged the next morning once you are pain-free and tolerating food.",
    recoveryDiet: "Maintain fasting for 4 hours. Start with clear liquids, moving to a soft diet the next day.",
    recoveryActivity: "Avoid heavy lifting or strenuous activity for 4-5 days.",
    recoveryWarningSigns: [
      "High fever with chills",
      "Severe abdominal pain radiating to the back",
      "Worsening yellow jaundice or vomiting"
    ],
    safetyRisks: "EHL is highly safe when performed under direct vision. The risk of bile duct injury or perforation is less than 1%. Post-procedure pancreatitis can occur in 3% of cases.",
    safetyBenefits: [
      "Breaks large, complex stones without major surgery.",
      "High success rate in clearing stones that failed other treatments.",
      "Visual guidance prevents damage to the bile duct walls."
    ],
    safetySuccessRate: "90% successful stone fragmentation and clearance.",
    safetyMonitoring: "Vitals and temperature checked hourly post-op.",
    faqs: [
      { q: "क्या ईएचएल (EHL) में लेजर का उपयोग होता है?", a: "ईएचएल शॉकवेव तकनीक है जो बिजली के स्पार्क से शॉक तरंगें पैदा करती है। यह लेजर की तरह ही बड़ी पथरी को छोटे टुकड़ों में तोड़ने में सक्षम है।" },
      { q: "पथरी टूटने के बाद टुकड़े कहाँ जाते हैं?", a: "पथरी टूटने के बाद डॉक्टर गुब्बारे (balloon catheter) की मदद से उन टुकड़ों को घसीटकर आंत में डाल देते हैं, जो बाद में प्राकृतिक रूप से मल के रास्ते बाहर निकल जाते हैं।" },
      { q: "क्या यह प्रक्रिया सुरक्षित है?", a: "हाँ, कैमरे से सीधे पत्थर को देखते हुए तरंगें दी जाती हैं, जिससे आंत या पित्त नली की दीवारों को कोई नुकसान नहीं होता।" }
    ],
    doctorAdvice: "Bile duct stones do not pass on their own and can block bile flow, leading to jaundice and liver infections. EHL enables non-surgical clearance of even the largest stones.",
    relatedConditions: ["jaundice"],
    relatedBlogs: ["jaundice-symptoms-causes"]
  },
  apc: {
    slug: "apc",
    title: "APC (Argon Plasma Coagulation)",
    hindiTitle: "एपीसी (आर्गन प्लाज्मा कोगुलेशन - ब्लीडिंग कंट्रोल)",
    metaTitle: "APC Bleeding Control Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Get expert Argon Plasma Coagulation (APC) treatment in Ranchi at Orchid Medical Centre by senior gastroenterologist Dr. Akhilesh Yadav, DM Gastroenterology.",
    simpleExplanation: "आर्गन प्लाज्मा कोगुलेशन (APC) एक अत्याधुनिक एंडोस्कोपिक तकनीक है जिसका उपयोग पेट या आंतों के अंदरूनी हिस्सों से हो रहे रक्तस्राव (bleeding) को रोकने या वहां की असामान्य रक्त वाहिकाओं (abnormal blood vessels) को जलाने के लिए किया जाता है। इसमें बिना किसी सीधे संपर्क के, आर्गन गैस और बिजली के स्पार्क की मदद से ब्लीडिंग वाली जगह पर गर्मी पहुंचाई जाती है, जिससे वहां तुरंत खून बहना बंद हो जाता है और घाव सूख जाता है।",
    summaryPurpose: "बिना छुए आर्गन गैस के जरिए आंतरिक ब्लीडिंग रोकना, असामान्य नसों को सुखाना और अल्सर के घाव भरना।",
    summaryDuration: "15 - 20 Minutes",
    summaryAnaesthesia: "Conscious Sedation (हल्की नींद)",
    summaryHospitalStay: "Daycare or 1 Day observation (depending on bleeding severity)",
    summaryRecovery: "Mild abdominal bloating or gas; return to normal activities in 24 hours.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Radiation proctitis (कैंसर रेडिएशन के बाद मलाशय से खून आना)",
      "GAVE (Watermelon stomach - पेट के अंदर लाल नसों का गुच्छा जिससे खून बहता है)",
      "Bleeding from ulcers or vascular malformations (अंगूठ जैसी नसों का गुच्छा)",
      "Post-polypectomy bleeding control"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends APC as it provides uniform, shallow coagulation. Because the heat depth is limited to 1-2 mm, it is extremely safe and has a very low risk of causing deep tears or perforation in the stomach or intestinal walls.",
    preparationFasting: "Fasting of 6 to 8 hours is required for stomach procedures. Complete bowel prep is needed for rectal/colon APC.",
    preparationDiet: "Follow a clear liquid diet for 24 hours if bowel APC is scheduled. Avoid solid foods.",
    preparationMedicines: "Aspirin and blood thinners must be stopped 5 days before the procedure under medical advice.",
    preparationDocuments: "Bring all past endoscopy/colonoscopy reports, radiation history files (if applicable), and recent blood counts.",
    preparationCompanion: "An adult companion must accompany you due to the use of mild sedation.",
    steps: [
      { phase: "Sedation Given", desc: "You are given a mild IV sedative to ensure you remain completely relaxed and pain-free." },
      { phase: "Scope Insertion", desc: "The endoscope or colonoscope is inserted and guided to the bleeding site or lesion." },
      { phase: "Argon Jet Application", desc: "A tiny probe is passed through the scope. Argon gas is released, and a high-frequency electrical arc is fired through the gas to burn the abnormal vessels from a distance of 2-3mm." },
      { phase: "Verify Coagulation", desc: "The treated area is inspected to ensure all bleeding has completely stopped. The scope is then withdrawn." }
    ],
    recoveryExpectations: "You will rest in daycare. You may experience some abdominal gas bloating due to the argon gas, which passes quickly.",
    recoveryReturnHome: "Discharged on the same day after 2 hours of observation.",
    recoveryDiet: "You can drink water after 1 hour. Eat a soft, bland, and cool diet for the next 24-48 hours. Avoid hot and spicy food.",
    recoveryActivity: "Avoid heavy physical exertion for 3 days.",
    recoveryWarningSigns: [
      "Severe, sharp abdominal pain",
      "Passing large amounts of red blood or black stools",
      "Fever or vomiting"
    ],
    safetyRisks: "APC is very safe. The risk of perforation is less than 1 in 1,000 cases. Some patients may experience mild temporary soreness at the treatment site.",
    safetyBenefits: [
      "Non-contact coagulation prevents tissue sticking and re-bleeding.",
      "Shallow heat depth protects surrounding healthy organs.",
      "High success rate in stopping chronic blood loss from radiation damage."
    ],
    safetySuccessRate: "95% success in stopping active mucosal bleeding.",
    safetyMonitoring: "Vitals and oxygen levels are tracked during the test.",
    faqs: [
      { q: "क्या एपीसी (APC) के लिए कई सत्रों (sessions) की जरूरत होती है?", a: "रेडिएशन प्रोक्टाइटिस या वॉटरमेलन स्टमक (GAVE) जैसी पुरानी बीमारियों में ब्लीडिंग को पूरी तरह से बंद करने के लिए 1 से 3 हफ्तों के अंतराल पर 2-3 सत्रों की आवश्यकता हो सकती है।" },
      { q: "क्या इस प्रक्रिया में दर्द होता है?", a: "नहीं, हल्की नींद के कारण मरीज को प्रक्रिया के दौरान कोई दर्द महसूस नहीं होता। बाद में पेट में गैस या हल्का भारीपन हो सकता है।" },
      { q: "रेडिएशन के बाद होने वाली ब्लीडिंग में यह कैसे मदद करता है?", a: "कैंसर रेडिएशन के कारण मलाशय की नसें कमजोर होकर फटने लगती हैं। एपीसी उन नसों को सुरक्षित रूप से जलाकर सुखा देता है, जिससे ब्लीडिंग हमेशा के लिए बंद हो जाती है।" }
    ],
    doctorAdvice: "Chronic blood loss from radiation proctitis or GAVE leads to severe anemia and weakness. APC is a highly effective, safe outpatient treatment that can restore your hemoglobin and quality of life.",
    relatedConditions: ["ibs"],
    relatedBlogs: ["endoscopy-kya-hota-hai"]
  },
  polypectomy: {
    slug: "polypectomy",
    title: "Polypectomy",
    hindiTitle: "पॉलिपेक्टोमी (पॉलिप्स निकालने का इलाज)",
    metaTitle: "Expert Endoscopic Polypectomy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Painless removal of stomach and colon polyps in Ranchi at Orchid Medical Centre by senior gastroenterologist Dr. Akhilesh Yadav, DM Gastroenterology.",
    simpleExplanation: "पॉलिपेक्टोमी (Polypectomy) पेट या बड़ी आंत की अंदरूनी परत पर उगने वाले असामान्य मांस के टुकड़ों (मस्सों) जिन्हें पॉलिप्स (polyps) कहा जाता है, को एंडोस्कोपी या कोलोनोस्कोपी के दौरान दूरबीन की मदद से बिना किसी चीरे के काटकर निकालने की प्रक्रिया है। आंत के पॉलिप्स आगे चलकर कैंसर का रूप ले सकते हैं, इसलिए इन्हें समय रहते दूरबीन से हटाना कैंसर से बचाव का सबसे कारगर तरीका है।",
    summaryPurpose: "पेट या आंतों के अंदर के पॉलिप्स को ढूंढकर निकालना और उन्हें कैंसर की जांच (biopsy) के लिए भेजना।",
    summaryDuration: "20 - 30 Minutes",
    summaryAnaesthesia: "Conscious Sedation (हल्की नींद)",
    summaryHospitalStay: "Daycare (Same-day discharge within 3 hours)",
    summaryRecovery: "No pain; avoid heavy exercise for a week; normal diet resumes in 24 hours.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Detection of polyps during a screening colonoscopy or endoscopy",
      "Bleeding from the rectum or blood in stool",
      "Unexplained chronic diarrhea or abdominal pain with polyps on scans",
      "Family history of colon cancer or familial polyposis syndromes"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav advises that all detected colon polyps should be removed. Since polyps are pre-cancerous, a polypectomy is a simple, outpatient procedure that successfully eliminates the risk of future colon cancer.",
    preparationFasting: "Fasting required for 6-8 hours for stomach polyps. Complete bowel cleansing preparation is needed for colon polyps.",
    preparationDiet: "Strict clear liquid diet 24 hours prior to colon polypectomy. No solid foods.",
    preparationMedicines: "Stop blood thinners (Aspirin, Clopidogrel, Prasugrel) 5-7 days before to prevent bleeding at the cut site.",
    preparationDocuments: "Bring previous colonoscopy reports, past surgical records, and blood coagulation profiles.",
    preparationCompanion: "An adult companion is mandatory to take you home safely after the sedation.",
    steps: [
      { phase: "Sedation Given", desc: "An IV sedative is administered to put you in a comfortable, relaxed sleep." },
      { phase: "Locating the Polyp", desc: "The endoscope or colonoscope is advanced. The polyp is identified, and its size and shape are assessed." },
      { phase: "Polyp Resection", desc: "A wire loop (snare) is passed around the polyp. Electrical current (diathermy) is applied to cut the polyp and seal the blood vessels simultaneously." },
      { phase: "Retrieval", desc: "The cut polyp is captured using a net or basket, retrieved through the scope, and sent to the lab for biopsy." }
    ],
    recoveryExpectations: "You will wake up in the daycare room. You will feel no pain, as the inner lining of the gut lacks pain receptors.",
    recoveryReturnHome: "Discharged 2-3 hours after the procedure once the sedation clears.",
    recoveryDiet: "Resume soft foods after 2 hours. Drink plenty of water and eat high-fiber food from the next day to prevent constipation.",
    recoveryActivity: "Do not lift weights, run, or perform strenuous workouts for 7 days to prevent delayed bleeding.",
    recoveryWarningSigns: [
      "Passing blood (red or black) in stool",
      "Severe, sharp abdominal pain",
      "Fever with chills"
    ],
    safetyRisks: "Polypectomy is a standard and safe procedure. Complications like bleeding or perforation occur in less than 1% of cases, and can usually be treated instantly during the procedure using metallic clips.",
    safetyBenefits: [
      "Significantly reduces colon cancer risk by removing pre-cancerous growths before they turn malignant.",
      "Painless removal without requiring cuts or stitches on the abdomen.",
      "Determines if the growth was benign or malignant."
    ],
    safetySuccessRate: "99% complete removal rate for accessible polyps.",
    safetyMonitoring: "BP, pulse, and oxygen tracking during recovery.",
    faqs: [
      { q: "क्या पॉलिप्स निकालने में दर्द होता है?", a: "नहीं, आंतों की अंदरूनी परत में दर्द महसूस करने वाली नसें नहीं होती हैं। इसलिए पॉलिप को काटने या बायोप्सी लेने में कोई दर्द महसूस नहीं होता।" },
      { q: "क्या पॉलिप्स दोबारा हो सकते हैं?", a: "हाँ, जिन मरीजों में पॉलिप्स बनते हैं, उनमें भविष्य में नए पॉलिप्स बनने की संभावना रहती है। इसलिए डॉक्टर हर 3 से 5 साल में एक फॉलो-अप कोलोनोस्कोपी की सलाह देते हैं।" },
      { q: "पॉलिप की बायोप्सी रिपोर्ट क्यों जरूरी है?", a: "बायोप्सी रिपोर्ट यह बताती है कि पॉलिप किस प्रकार का था (benign, pre-cancerous या cancerous)। इसी रिपोर्ट के आधार पर तय होता है कि भविष्य में अगली जांच कब करानी है।" }
    ],
    doctorAdvice: "Colon cancer starts as a silent, symptomless polyp. Do not wait for symptoms like bleeding or pain to appear. If you are over 45, get a screening colonoscopy and remove polyps before they turn dangerous.",
    relatedConditions: ["ibs"],
    relatedBlogs: ["endoscopy-kya-hota-hai"]
  },
  "balloon-dilation": {
    slug: "balloon-dilation",
    title: "Balloon Dilatation",
    hindiTitle: "बलून डाइलेशन (संकुचित नसों/नलियों को चौड़ा करना)",
    metaTitle: "Esophageal & Pyloric Balloon Dilatation in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Expert endoscopic Balloon Dilatation for strictures in Ranchi at Orchid Medical Centre by senior gastroenterologist Dr. Akhilesh Yadav.",
    simpleExplanation: "बलून डाइलेशन (Balloon Dilatation) भोजन की नली (food pipe) या पेट के निकास द्वार में आई रुकावट या संकुचन (stricture) को फुलाकर चौड़ा करने की प्रक्रिया है। कभी-कभी एसिडिटी, अल्सर या पुराने घाव के कारण भोजन की नली सिकुड़ जाती है, जिससे खाना निगलने में बहुत कठिनाई होती है। इस प्रक्रिया में दूरबीन के जरिए एक विशेष गुब्बारा (balloon catheter) अंदर डाला जाता है और दबाव के साथ फुलाकर सिकुड़ी हुई नली को खोला जाता है ताकि मरीज आसानी से खा-पी सकें।",
    summaryPurpose: "भोजन की नली या पेट के सिकुड़े हुए हिस्सों को गुब्बारे की मदद से चौड़ा करना ताकि भोजन का मार्ग सुचारू हो सके।",
    summaryDuration: "20 - 30 Minutes",
    summaryAnaesthesia: "Conscious Sedation or Deep Sedation (हल्की नींद)",
    summaryHospitalStay: "Daycare (Same-day discharge in 2 to 3 hours)",
    summaryRecovery: "Mild chest or throat soreness for 24-48 hours; return to light routine next day.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Difficulty swallowing solids or liquids (Dysphagia - खाना निगलने में परेशानी)",
      "Strictures in the esophagus due to acid reflux, acid ingestion, or post-radiation",
      "Pyloric stenosis (पेट से भोजन बाहर निकलने का रास्ता सिकुड़ना) causing severe vomiting",
      "Achalasia Cardia (भोजन की नली के निचले हिस्से का वाल्व न खुलना)"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends balloon dilatation to restore swallowing function instantly. It is highly successful, minimally invasive, and avoids major esophageal reconstruction surgery in benign strictures.",
    preparationFasting: "Fasting required for at least 8 to 10 hours. The stomach must be completely empty of any food residue to prevent vomiting.",
    preparationDiet: "Liquid diet for 24 hours prior. Avoid any solid meals.",
    preparationMedicines: "Discontinue blood thinners 5 days before the procedure under medical guidance.",
    preparationDocuments: "Bring previous barium swallow films, endoscopy reports, CT scans, and blood coagulation charts.",
    preparationCompanion: "An adult family member must accompany you due to the use of sedation.",
    steps: [
      { phase: "Sedation & Positioning", desc: "You are given IV sedation to sleep comfortably. A bite block is placed in your mouth to protect your teeth." },
      { phase: "Endoscopy & Guide Wire", desc: "The endoscope is passed to locate the narrowing. A guide wire is gently pushed across the stricture under X-ray (fluoroscopy) guidance." },
      { phase: "Balloon inflation", desc: "A balloon catheter of appropriate diameter (e.g. 15mm to 18mm) is passed over the wire. It is filled with water under pressure, held for 1-2 minutes to stretch the stricture, and then deflated." },
      { phase: "Visual Inspection", desc: "The balloon is removed, and the doctor passes the endoscope through the dilated area to verify that the narrowing has been safely opened." }
    ],
    recoveryExpectations: "You will wake up in daycare. A mild feeling of chest pressure, throat soreness, or gas bloating is normal and subsides with medications.",
    recoveryReturnHome: "Discharged 2-3 hours after the test once you are fully awake and alert.",
    recoveryDiet: "NPO (fasting) for 2 hours. Start with cold milk or water, followed by a soft liquid diet (custard, curd) for 24 hours. Avoid hot and solid foods.",
    recoveryActivity: "Rest for the day. Avoid strenuous activity or lifting weights for 3-5 days.",
    recoveryWarningSigns: [
      "Severe, sharp, worsening chest pain or back pain",
      "Difficulty breathing or swallowing",
      "Fever or vomiting blood"
    ],
    safetyRisks: "Balloon dilatation is highly effective. The main risk is a small tear in the wall (perforation) which occurs in 1-2% of cases, slightly higher in acid-burn strictures, which is immediately managed with endoscopic clips or surgery.",
    safetyBenefits: [
      "Immediate relief from severe swallowing difficulties.",
      "Saves patients from major surgical removal of the food pipe.",
      "Outpatient daycare procedure with quick recovery."
    ],
    safetySuccessRate: "90% success in restoring food passage.",
    safetyMonitoring: "Oxygen saturation, pulse, and post-op chest pain monitoring.",
    faqs: [
      { q: "क्या बलून डाइलेशन एक बार में ही सफल हो जाता है?", a: "कुछ मरीजों में एक बार में ही आराम मिल जाता है। लेकिन गंभीर या एसिड से जली हुई नलियों में संकुचन को धीरे-धीरे खोलने के लिए 2 से 3 हफ्तों के अंतराल पर 2-3 सत्रों (sessions) की आवश्यकता हो सकती है।" },
      { q: "क्या गुब्बारा फुलाने के दौरान दर्द होता है?", a: "नहीं, गहरी नींद (sedation) देने के कारण मरीज को प्रक्रिया के दौरान कुछ महसूस नहीं होता। बाद में छाती में हल्का खिंचाव लग सकता है।" },
      { q: "क्या नली दोबारा सिकुड़ सकती है?", a: "हाँ, घाव भरने की प्राकृतिक प्रक्रिया (scars) के कारण कुछ समय बाद नली दोबारा सिकुड़ सकती है। ऐसी स्थिति में दोबारा डाइलेशन या स्टेंट लगाने की आवश्यकता हो सकती है।" }
    ],
    doctorAdvice: "Difficulty in swallowing is a progressive symptom that should never be ignored. Catching and dilating benign strictures early prevents food pipe damage and malnutrition.",
    relatedConditions: ["ibs"],
    relatedBlogs: ["endoscopy-kya-hota-hai"]
  },
  "glue-injection": {
    slug: "glue-injection",
    title: "Variceal Glue Injection",
    hindiTitle: "ग्लू इंजेक्शन (फटी हुई नसों का इलाज)",
    metaTitle: "Endoscopic Variceal Glue Injection in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Expert endoscopic Variceal Glue Injection for bleeding gastric varices in Ranchi at Orchid Medical Centre by senior gastroenterologist Dr. Akhilesh Yadav.",
    simpleExplanation: "ग्लू इंजेक्शन (Variceal Glue Injection) लिवर सिरोसिस के मरीजों के पेट के अंदर सूजी और फटी हुई नसों (gastric varices) से हो रहे गंभीर रक्तस्राव (bleeding) को रोकने का एक जीवन रक्षक इलाज है। लिवर खराब होने पर पेट की नसें बहुत फूल जाती हैं और कभी भी फटकर जानलेवा ब्लीडिंग शुरू हो सकती है। इस प्रक्रिया में दूरबीन के जरिए सीधे उस फूली हुई नस के अंदर एक विशेष मेडिकल ग्लू (cyanoacrylate) इंजेक्ट किया जाता है, जो खून के संपर्क में आते ही पत्थर की तरह जम जाता है और ब्लीडिंग को तुरंत रोक देता है।",
    summaryPurpose: "पेट के अंदर फटी हुई सूजी नसों (gastric varices) में मेडिकल ग्लू डालकर ब्लीडिंग को तुरंत और स्थायी रूप से बंद करना।",
    summaryDuration: "15 - 25 Minutes",
    summaryAnaesthesia: "Deep Sedation or General Anaesthesia",
    summaryHospitalStay: "1 to 2 Days (In ICU/Ward for monitoring)",
    summaryRecovery: "Gradual recovery; patient is monitored in the hospital until stable.",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      "Active bleeding from gastric varices (पेट के अंदर सूजी हुई नसें) due to portal hypertension",
      "Vomiting fresh blood or passing black, tarry stools in liver cirrhosis patients",
      "History of severe gastric variceal bleeding requiring preventive therapy",
      "Portal vein thrombosis with gastric varices"
    ],
    doctorRecommendation: "Dr. Akhilesh Yadav recommends variceal glue injection as the gold standard for gastric variceal bleeding. It provides immediate hemostasis and has a much lower risk of re-bleeding compared to simple banding for stomach varices.",
    preparationFasting: "In emergencies, fasting is bypassed or stomach contents are cleared. In planned cases, 6-8 hours of fasting is required.",
    preparationDiet: "Strictly NPO (fasting). No food or liquids are allowed.",
    preparationMedicines: "Stop blood thinners immediately. IV medications to lower portal vein pressure (like Octreotide/Terlipressin) are started.",
    preparationDocuments: "Bring previous liver function tests (LFT), coagulation studies (PT/INR), and blood group certificates.",
    preparationCompanion: "This is an emergency/inpatient procedure. Family members must accompany the patient.",
    steps: [
      { phase: "Stabilize & Sedate", desc: "The patient is stabilized with IV fluids and blood. Deep sedation or general anesthesia is administered." },
      { phase: "Identify Gastric Varices", desc: "The endoscope is introduced into the stomach. The large, blue, snake-like swollen veins (varices) are identified." },
      { phase: "Glue injection", desc: "A specialized needle is passed. Medical glue mixed with lipiodol is injected directly into the bleeding varix. The needle is flushed and quickly withdrawn to prevent sticking." },
      { phase: "Verify Hardening", desc: "The varix is gently probed to confirm it has hardened (thrombosed) completely like a stone. The scope is withdrawn." }
    ],
    recoveryExpectations: "You will recover in the ICU. BP and pulse are checked constantly. You may receive antibiotics to prevent infection.",
    recoveryReturnHome: "Discharged in 2 days once stable, eating soft food, and showing no signs of further bleeding.",
    recoveryDiet: "Fasting for 12-24 hours. Start with cold liquids, followed by a soft, low-fat diet.",
    recoveryActivity: "Rest completely at home. Do not lift weights, strain, or bend forward for 10 days.",
    recoveryWarningSigns: [
      "Fresh blood in vomit or stools",
      "Severe abdominal pain or difficulty breathing",
      "Fever, dizziness, or confusion"
    ],
    safetyRisks: "This is a life-saving procedure. The main risk is embolization (glue traveling to other blood vessels), which occurs in less than 1% of cases when performed by an experienced endoscopist.",
    safetyBenefits: [
      "Saves lives by instantly stopping active, massive stomach bleeding.",
      "Prevents dangerous re-bleeding episodes in advanced liver disease.",
      "Avoids high-risk emergency open surgeries in cirrhotic patients."
    ],
    safetySuccessRate: "95% success rate in stopping active variceal bleeding.",
    safetyMonitoring: "ICU monitoring, BP, pulse, and hemoglobin checks.",
    faqs: [
      { q: "क्या मेडिकल ग्लू पेट के अंदर ही रहता है?", a: "हाँ, मेडिकल ग्लू नस के अंदर जाकर जम जाता है। कुछ महीनों बाद, आंतों की परत उस जमे हुए ग्लू (cast) को मल के रास्ते प्राकृतिक रूप से बाहर निकाल देती है और नस बंद हो जाती है।" },
      { q: "ग्लू इंजेक्शन और बैंडिंग में क्या अंतर है?", a: "बैंडिंग (variceal banding) आमतौर पर भोजन की नली (esophagus) की नसों के लिए की जाती है। पेट के अंदर की नसें (gastric varices) बड़ी और मोटी होती हैं, जहां बैंड फिसल सकता है, इसलिए वहां ग्लू डालना अधिक सुरक्षित और असरदार होता है।" },
      { q: "क्या इलाज के बाद ब्लीडिंग दोबारा हो सकती है?", a: "हाँ, लिवर सिरोसिस में बीपी बढ़ने के कारण नई नसें बन सकती हैं। इसलिए हर 2 से 3 महीने में एंडोस्कोपी द्वारा निगरानी रखना जरूरी है।" }
    ],
    doctorAdvice: "For patients with liver cirrhosis, a ruptured vein in the stomach can lead to rapid, life-threatening blood loss. Endoscopic glue injection is a vital tool that stops bleeding instantly and keeps patients safe.",
    relatedConditions: ["liver-cirrhosis", "jaundice"],
    relatedBlogs: ["jaundice-symptoms-causes", "endoscopy-kya-hota-hai"]
  }
};

export function getProcedureBySlug(slug: string): ProcedureDataV2 | null {
  return PROCEDURES_DATA_V2[slug] || null;
}

export function getAllProcedureSlugs(): string[] {
  return Object.keys(PROCEDURES_DATA_V2);
}
