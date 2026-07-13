import { ProcedureData } from "@/lib/types-procedures";

export const PROCEDURES_DATA: Record<string, ProcedureData> = {
  endoscopy: {
    slug: "endoscopy",
    title: "Upper GI Endoscopy",
    hindiTitle: "अपर जीआई एंडोस्कोपी",
    metaTitle: "Painless Upper GI Endoscopy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Get expert, painless Upper GI Endoscopy in Ranchi by Dr. Akhilesh Yadav at Orchid Medical Centre. Fast, 15-minute diagnostic test for ulcers, acidity & stomach pain.",
    duration: "10 - 15 Mins",
    sedation: "Light Sedation",
    recoveryTime: "Same Day (2 Hours)",
    overview: "An Upper Gastrointestinal (GI) Endoscopy is a diagnostic procedure that allows the doctor to inspect the lining of your esophagus, stomach, and the first part of your small intestine (duodenum). A thin, flexible tube called an endoscope, equipped with a high-definition camera and light source, is gently passed through the mouth. It helps diagnose conditions like ulcers, acid reflux, chronic inflammation, celiac disease, and early-stage digestive tract cancers.",
    whenRequired: [
      "Persistent pain in the upper abdomen (पेट के ऊपरी हिस्से में दर्द)",
      "Chronic acidity, heartburn, or GERD symptoms that do not respond to medication",
      "Unexplained nausea, vomiting, or difficulty swallowing (निगलने में कठिनाई)",
      "Unexplained weight loss or loss of appetite",
      "Anemia or suspected internal bleeding",
    ],
    preparation: [
      { step: "6 to 8 Hours Fasting", detail: "Do not eat or drink anything (including water) for 6 to 8 hours before the procedure to ensure a clear view of your stomach." },
      { step: "Inform Medications", detail: "Tell the doctor about any regular medications you take, especially blood thinners or diabetes medicines." },
      { step: "Arrange a Companion", detail: "Since light sedation is administered, you must arrange for someone to drive you home after the procedure." }
    ],
    steps: [
      { phase: "Preparation & Sedation", desc: "A local anesthetic spray is applied to numb your throat, and light sedation is given intravenously to ensure you feel relaxed and pain-free." },
      { phase: "Scope Insertion", desc: "The doctor gently inserts the thin endoscope through your mouth into the esophagus. The scope does not interfere with your breathing." },
      { phase: "Detailed Examination", desc: "High-definition video is displayed on a monitor, allowing the doctor to inspect the lining. Air is gently pumped to inflate the tract for a clear view." },
      { phase: "Biopsy (If needed)", desc: "If any abnormal tissue is found, a small sample (biopsy) is painlessly collected for lab testing." }
    ],
    safetySedation: "Upper GI endoscopy is extremely safe. The procedure is performed under light intravenous sedation, meaning you will feel sleepy but remain responsive. Complications like tear in the tract or bleeding are extremely rare (less than 1 in 10,000 cases).",
    benefits: [
      "Highly accurate and direct visualization of the digestive lining.",
      "Completely painless when done under professional sedation.",
      "Enables immediate biopsy collection of suspicious areas.",
      "Quick diagnostic turnaround — completed in under 15 minutes."
    ],
    recoveryGuidelines: "After the procedure, you will rest in the recovery area for about 1 to 2 hours until the sedation wears off. Your throat may feel slightly numb or scratchy. You can resume eating normal foods once your swallowing reflex returns to normal.",
    doctorAdvice: "Please do not ignore persistent stomach pain or difficulty swallowing. Endoscopy is a simple, safe, and highly effective preventive tool that provides peace of mind and accurate diagnosis.",
    faqs: [
      { q: "क्या एंडोस्कोपी के दौरान दर्द होता है?", a: "नहीं। गले को स्प्रे से सुन्न कर दिया जाता है और हल्की बेहोशी दी जाती है, जिससे प्रक्रिया के दौरान कोई दर्द या बेचैनी महसूस नहीं होती।" },
      { q: "एंडोस्कोपी की रिपोर्ट कब मिलती है?", a: "प्रक्रिया समाप्त होने के तुरंत बाद तस्वीरें और प्राथमिक रिपोर्ट मिल जाती है। यदि बायोप्सी (biopsy) ली गई है, तो लैब रिपोर्ट में 3 से 5 दिन लगते हैं।" }
    ],
    relatedConditions: ["gerd", "peptic-ulcer", "abdominal-pain"],
    relatedBlogs: ["endoscopy-kya-hota-hai"]
  },
  colonoscopy: {
    slug: "colonoscopy",
    title: "Colonoscopy",
    hindiTitle: "कोलोनोस्कोपी",
    metaTitle: "Painless Colonoscopy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Expert diagnostic and therapeutic Colonoscopy in Ranchi by Dr. Akhilesh Yadav. Painless procedure under sedation. Early screening for polyps, colitis, and colon cancer.",
    duration: "20 - 30 Mins",
    sedation: "Light Sedation",
    recoveryTime: "Same Day (2-3 Hours)",
    overview: "A colonoscopy is an advanced diagnostic procedure used to inspect the inside of the entire large intestine (colon) and the rectum. A thin, flexible tube called a colonoscope is gently passed through the rectum. Equipped with a camera and light, it helps detect inflamed tissue, ulcers, bleeding, abnormal growths (polyps), and colon cancer at its earliest stages.",
    whenRequired: [
      "Blood in stool or black stools (मल में खून आना)",
      "Chronic diarrhea or persistent change in bowel habits",
      "Unexplained abdominal pain or cramping",
      "Screening for colon cancer (recommended for individuals over 45)",
      "Unexplained anemia or weight loss",
    ],
    preparation: [
      { step: "Bowel Cleansing (Purging)", detail: "You must take a prescribed laxative solution the day before the test to completely clean your colon for clear visibility." },
      { step: "Liquid Diet", detail: "Only consume clear liquids (water, clear broth, coconut water) the day before the procedure. Avoid solid foods." },
      { step: "Medication Review", detail: "Tell the doctor about any medications, especially blood thinners, insulin, or iron supplements." }
    ],
    steps: [
      { phase: "Anesthesia / Sedation", desc: "You are given intravenous sedation to ensure you are comfortable, relaxed, and sleep through the procedure." },
      { phase: "Scope Insertion", desc: "The colonoscope is gently inserted through the rectum and guided slowly to the end of the colon." },
      { phase: "Inflation & Inspection", desc: "Carbon dioxide or air is gently pumped into the colon to inflate it, giving the doctor a detailed view of the lining." },
      { phase: "Polyp Removal (If found)", desc: "If polyps are found, the doctor can safely and painlessly remove them during the procedure using specialized tools." }
    ],
    safetySedation: "Colonoscopy is a standard, highly safe outpatient procedure. It is performed under conscious sedation, ensuring a pain-free experience. Serious complications like bowel perforation are exceptionally rare.",
    benefits: [
      "Gold standard for colon cancer screening and prevention.",
      "Enables immediate removal of precancerous polyps during the test.",
      "Accurately diagnoses colitis, Crohn's, and source of rectal bleeding.",
      "Painless and quick outpatient procedure."
    ],
    recoveryGuidelines: "You will remain in the recovery suite for 1 to 2 hours. You might experience mild bloating or gas as the pumped air leaves your system. You can resume your normal diet immediately after recovery.",
    doctorAdvice: "A colonoscopy can prevent colon cancer by removing polyps before they turn into cancer. Do not let fear or embarrassment keep you from scheduling this essential test.",
    faqs: [
      { q: "कोलोनोस्कोपी से एक दिन पहले क्या तैयारी करनी होती है?", a: "आपको पेट साफ़ करने की दवाई (laxative) पीनी होती है ताकि कोलोन पूरी तरह साफ़ हो सके। आपको केवल तरल पदार्थ ही लेने होते हैं।" },
      { q: "क्या कोलोनोस्कोपी में दर्द होता है?", a: "नहीं, यह प्रक्रिया बेहोशी (sedation) देकर की जाती है, इसलिए आपको दर्द का बिल्कुल भी अनुभव नहीं होगा।" }
    ],
    relatedConditions: ["ulcerative-colitis", "ibs", "weight-loss"],
    relatedBlogs: ["jaundice-symptoms-causes"]
  },
  ercp: {
    slug: "ercp",
    title: "ERCP",
    hindiTitle: "ईआरसीपी",
    metaTitle: "ERCP Procedure in Ranchi | Bile Duct Specialist — Dr. Akhilesh Yadav",
    metaDescription: "Expert ERCP (Endoscopic Retrograde Cholangiopancreatography) in Ranchi by Dr. Akhilesh Yadav. Treatment for bile duct stones, jaundice, and biliary blockage.",
    duration: "30 - 45 Mins",
    sedation: "Deep Sedation",
    recoveryTime: "24 Hours (Hospital Stay)",
    overview: "Endoscopic Retrograde Cholangiopancreatography (ERCP) is a specialized procedure that combines endoscopy and X-ray imaging to diagnose and treat conditions of the bile ducts and pancreatic ducts. It is commonly used to remove stones from the bile duct, bypass blockages, and place stents.",
    whenRequired: [
      "Jaundice caused by bile duct blockage (stones or strictures)",
      "Gallstones that have slipped into the common bile duct",
      "Unexplained pain in the upper right abdomen",
      "Suspected biliary or pancreatic duct tumors",
    ],
    preparation: [
      { step: "Fasting", detail: "Fasting for at least 8 hours is required." },
      { step: "Blood Tests", detail: "Complete blood count and coagulation profile must be done beforehand." }
    ],
    steps: [
      { phase: "Anesthesia", desc: "Deep sedation or general anesthesia is administered to ensure comfort." },
      { phase: "Duodenoscope Insertion", desc: "A specialized side-viewing endoscope is passed to the duodenum." },
      { phase: "Contrast Injection", desc: "A catheter is guided into the bile duct, dye is injected, and X-ray images are taken." },
      { phase: "Therapeutic Action", desc: "Stones are removed using balloons/baskets, or a stent is placed to bypass strictures." }
    ],
    safetySedation: "Performed under deep sedation. Pancreatitis is a known minor risk in 3-5% of cases, which is carefully managed with preventive medications during the procedure.",
    benefits: [
      "Avoids major open surgery for bile duct stone removal.",
      "Provides instant relief from obstructive jaundice.",
      "Allows tissue sampling and stent placement."
    ],
    recoveryGuidelines: "You will be monitored for a few hours. A short hospital stay (24 hours) is typically recommended for safety and observation.",
    doctorAdvice: "ERCP is a highly specialized therapy. If you have bile duct stones, this is the safest non-surgical method to clear the blockage.",
    faqs: [
      { q: "क्या ईआरसीपी के बाद अस्पताल में रुकना पड़ता है?", a: "हाँ, सामान्यतः 24 घंटे निगरानी के लिए अस्पताल में एडमिट होना पड़ता है।" }
    ],
    relatedConditions: ["jaundice", "gallstone", "pancreatitis"],
    relatedBlogs: []
  },
  eus: {
    slug: "eus",
    title: "EUS (Endoscopic Ultrasound)",
    hindiTitle: "ईयूएस (एंडोस्कोपिक अल्ट्रासाउंड)",
    metaTitle: "Advanced EUS in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Expert Endoscopic Ultrasound (EUS) in Ranchi by Dr. Akhilesh Yadav at Orchid Medical Centre. Advanced imaging and biopsy for pancreatic and biliary conditions.",
    duration: "30 - 40 Mins",
    sedation: "Light Sedation",
    recoveryTime: "Same Day",
    overview: "Endoscopic Ultrasound (EUS) is an advanced procedure that combines endoscopy and high-frequency ultrasound. A specialized endoscope with an ultrasound probe at its tip is used to capture detailed images of the digestive tract wall and surrounding organs like the pancreas, gallbladder, and lymph nodes.",
    whenRequired: [
      "Staging of digestive tract cancers",
      "Evaluation of pancreatic cysts or masses",
      "Checking for deep stones in the bile duct",
      "Fine Needle Aspiration (FNA) biopsy of deep tissues"
    ],
    preparation: [
      { step: "6 Hours Fasting", detail: "Fasting is required to keep the stomach empty." }
    ],
    steps: [
      { phase: "Sedation", desc: "Light sedation is administered." },
      { phase: "Insertion", desc: "The EUS scope is introduced into the stomach/duodenum." },
      { phase: "Imaging", desc: "High-resolution ultrasound scans of neighboring organs are captured." }
    ],
    safetySedation: "Very safe procedure, comparable to standard endoscopy. Minimally invasive.",
    benefits: [
      "Provides unmatched detailed imaging of the pancreas and bile duct.",
      "Allows safe, needle-guided biopsies without surgery.",
      "Enables accurate cancer staging."
    ],
    recoveryGuidelines: "Same day discharge. Mild sore throat is normal and resolves quickly.",
    doctorAdvice: "EUS is a powerful diagnostic tool that reaches deep areas. It helps us find issues that regular CT scans or MRIs might miss.",
    faqs: [
      { q: "ईयूएस बायोप्सी क्या है?", a: "यह बिना चीरे के, पेट के अंदर से सुई डालकर लिवर या पैंक्रियाज के गांठ की जाँच करने का आधुनिक तरीका है।" }
    ],
    relatedConditions: ["pancreatitis", "jaundice"],
    relatedBlogs: []
  },
  enteroscopy: {
    slug: "enteroscopy",
    title: "Enteroscopy",
    hindiTitle: "एंटेरोस्कोपी",
    metaTitle: "Enteroscopy in Ranchi | Small Bowel Specialist — Dr. Akhilesh Yadav",
    metaDescription: "Diagnostic and therapeutic Enteroscopy in Ranchi by Dr. Akhilesh Yadav. Advanced inspection and treatment of small intestine disorders.",
    duration: "45 - 60 Mins",
    sedation: "Deep Sedation",
    recoveryTime: "Same Day",
    overview: "Enteroscopy is an advanced endoscopic procedure used to examine the small intestine (small bowel) in detail. Because the small intestine is very long, specialized double-balloon or single-balloon scopes are utilized to visualize and treat bleeding or blockages in these deep areas.",
    whenRequired: [
      "Unexplained bleeding from the small intestine",
      "Suspected Crohn's disease of the small bowel",
      "Abnormal findings in capsule endoscopy"
    ],
    preparation: [
      { step: "12 Hours Fasting", detail: "Longer fasting period is required due to the depth of inspection." }
    ],
    steps: [
      { phase: "Anesthesia", desc: "Conducted under deep sedation to maintain patient comfort." },
      { phase: "Scope Navigation", desc: "Special balloon scopes are advanced slowly through the small intestine." }
    ],
    safetySedation: "Performed by highly trained specialists. Safe, but requires expert handling.",
    benefits: [
      "Diagnoses deep small bowel diseases directly.",
      "Allows balloon dilation of strictures.",
      "Enables tissue biopsy."
    ],
    recoveryGuidelines: "You will spend 2 hours in recovery. Expect to rest for the day.",
    doctorAdvice: "If you have unexplained anemia or bleeding, enteroscopy helps us find and treat the exact spot of leakage.",
    faqs: [
      { q: "क्या एंटेरोस्कोपी सुरक्षित है?", a: "हाँ, यह पूरी तरह सुरक्षित है और बेहोशी के कारण मरीज को कोई कष्ट नहीं होता।" }
    ],
    relatedConditions: ["abdominal-pain", "weight-loss"],
    relatedBlogs: []
  },
  cholangioscopy: {
    slug: "cholangioscopy",
    title: "Cholangioscopy (SpyGlass)",
    hindiTitle: "कोलेंगियोस्कोपी (स्पाइग्लास)",
    metaTitle: "SpyGlass Cholangioscopy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Advanced SpyGlass Cholangioscopy in Ranchi by Dr. Akhilesh Yadav. Direct visualization of bile ducts, laser lithotripsy for large stones.",
    duration: "45 - 60 Mins",
    sedation: "Deep Sedation",
    recoveryTime: "Same Day / 24 Hours",
    overview: "Cholangioscopy (commonly using the SpyGlass system) is a cutting-edge technique where an ultra-thin scope is inserted directly into the bile duct during an ERCP. It provides direct visual diagnosis of bile duct tumors and allows laser fragmentation of large gallstones.",
    whenRequired: [
      "Very large bile duct stones that cannot be removed by standard ERCP",
      "Bile duct tumors requiring direct biopsy",
      "Unclear strictures in the bile duct"
    ],
    preparation: [
      { step: "Fasting & Cleansing", detail: "Full fasting from midnight. Antibiotics may be prescribed beforehand." }
    ],
    steps: [
      { phase: "Anesthesia", desc: "Deep sedation or general anesthesia is given." },
      { phase: "SpyGlass Insertion", desc: "The ultra-thin scope is threaded into the bile duct for direct color visualization." },
      { phase: "Laser Lithotripsy", desc: "Stones are broken into tiny pieces using a laser probe and removed." }
    ],
    safetySedation: "Highly advanced procedure. Performed with high-end safety monitors under deep sedation.",
    benefits: [
      "Direct visualization of the bile duct lining.",
      "Enables laser stone-breaking, saving patients from open surgery.",
      "Extremely precise biopsy collection."
    ],
    recoveryGuidelines: "Requires careful monitoring post-procedure. Normal activities can be resumed in 24-48 hours.",
    doctorAdvice: "SpyGlass is a breakthrough technology. It allows us to treat large stones and diagnose strictures with 99% accuracy.",
    faqs: [
      { q: "स्पाइग्लास तकनीकी का क्या फायदा है?", a: "यह सीधे पित्त की नली के अंदर जाकर लेज़र से बड़ी पथरी को तोड़ने में मदद करती है।" }
    ],
    relatedConditions: ["jaundice", "gallstone"],
    relatedBlogs: []
  },
  "tumour-removal": {
    slug: "tumour-removal",
    title: "Endoscopic Tumour Removal (EMR/ESD)",
    hindiTitle: "एंडोस्कोपिक ट्यूमर रिमूवल",
    metaTitle: "Endoscopic Tumour & Polyp Removal in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Advanced non-surgical Endoscopic Mucosal Resection (EMR) & ESD in Ranchi by Dr. Akhilesh Yadav. Safe removal of early GI tract cancers & polyps.",
    duration: "45 - 90 Mins",
    sedation: "General Anesthesia / Deep Sedation",
    recoveryTime: "24 - 48 Hours",
    overview: "Endoscopic Mucosal Resection (EMR) and Endoscopic Submucosal Dissection (ESD) are advanced minimally invasive procedures to remove early-stage tumors, large polyps, and precancerous lesions from the gastrointestinal tract without open surgery.",
    whenRequired: [
      "Large polyps in the colon or stomach",
      "Early-stage esophageal or gastric cancer",
      "Precancerous changes in Barrett's esophagus"
    ],
    preparation: [
      { step: "Full Bowel Prep", detail: "Complete bowel clearance using laxative solutions is necessary if targeting the colon." }
    ],
    steps: [
      { phase: "Sedation", desc: "Conducted under deep sedation or general anesthesia." },
      { phase: "Injection & Lift", desc: "A solution is injected under the lesion to lift it away from the muscle layer." },
      { phase: "Resection", desc: "Special micro-knives are used to safely peel or cut out the lesion in one piece." }
    ],
    safetySedation: "Advanced procedure requiring expert skill. Performed under general anesthesia. Minimizes the need for surgical organ resection.",
    benefits: [
      "Removes early cancers completely without skin incisions.",
      "Preserves the stomach and colon organs.",
      "Faster recovery compared to traditional cancer surgery."
    ],
    recoveryGuidelines: "Requires 24-48 hours observation in the clinic. Soft liquid diet is recommended for the first week.",
    doctorAdvice: "EMR and ESD represent the peak of modern endoscopy. They allow us to cure early-stage cancers before they spread, with no cuts on the body.",
    faqs: [
      { q: "क्या इसके बाद कैंसर का ऑपरेशन टल सकता है?", a: "हाँ, यदि शुरुआती स्टेज का ट्यूमर है, तो इसे एंडोस्कोपी से पूरी तरह निकाला जा सकता है और बड़े ऑपरेशन की ज़रूरत नहीं पड़ती।" }
    ],
    relatedConditions: ["peptic-ulcer", "weight-loss"],
    relatedBlogs: []
  },
  "gi-bleeding": {
    slug: "gi-bleeding",
    title: "GI Bleeding Treatment",
    hindiTitle: "जीआई ब्लीडिंग का इलाज",
    metaTitle: "Emergency GI Bleeding Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Immediate emergency endoscopic treatment for blood in vomit or stools in Ranchi. Dr. Akhilesh Yadav, expert DM Gastroenterologist.",
    duration: "20 - 45 Mins",
    sedation: "Sedation / General Anesthesia",
    recoveryTime: "24 - 72 Hours (ICU/Ward)",
    overview: "Gastrointestinal (GI) Bleeding is a medical emergency that requires immediate intervention. Endoscopic therapy is the primary method to find and stop bleeding in the esophagus, stomach, or colon, commonly caused by varices, ulcers, or vascular lesions.",
    whenRequired: [
      "Vomiting of blood (खून की उल्टी)",
      "Black, tarry stools (काले रंग का मल)",
      "Sudden drop in blood pressure with dizziness",
      "Active rectal bleeding"
    ],
    preparation: [
      { step: "Emergency Access", detail: "Performed immediately. Patient is stabilized with IV fluids or blood transfusions first." }
    ],
    steps: [
      { phase: "Stabilization", desc: "Airway and vitals are secured in the emergency ward." },
      { phase: "Emergency Endoscopy", desc: "The scope is inserted to locate the bleeding point." },
      { phase: "Bleeding Control", desc: "Clips, bands, injections, or heater probes are used to stop the bleeding instantly." }
    ],
    safetySedation: "High-risk emergency procedure. Done under general anesthesia/deep sedation with full life support monitoring.",
    benefits: [
      "Stops active internal bleeding instantly.",
      "Highly accurate in finding the exact source of hemorrhage.",
      "Reduces mortality and the need for emergency open surgery."
    ],
    recoveryGuidelines: "Requires critical monitoring in the ICU/Ward for 24 to 72 hours. Vitals are checked regularly.",
    doctorAdvice: "Blood in vomit or stool is an emergency. Do not wait — seek immediate medical attention. Early endoscopy saves lives.",
    faqs: [
      { q: "जीआई ब्लीडिंग के क्या लक्षण हैं?", a: "उल्टी में चमकीला लाल खून आना, कॉफी के रंग की उल्टी होना, या काले रंग का मल आना इसके मुख्य लक्षण हैं।" }
    ],
    relatedConditions: ["peptic-ulcer", "jaundice"],
    relatedBlogs: []
  }
};

export function getProcedureBySlug(slug: string): ProcedureData | null {
  return PROCEDURES_DATA[slug] || null;
}

export function getAllProcedureSlugs(): string[] {
  return Object.keys(PROCEDURES_DATA);
}
