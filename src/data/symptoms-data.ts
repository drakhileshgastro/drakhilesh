import { SymptomDataV2 } from "@/lib/types-symptoms";

export const SYMPTOMS_DATA_V2: Record<string, SymptomDataV2> = {
  "stomach-pain": {
    slug: "stomach-pain",
    title: "Stomach Pain",
    hindiTitle: "पेट दर्द की समस्या",
    metaTitle: "Stomach Pain Causes & Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Experiencing chronic or severe stomach pain in Ranchi? Read expert diagnosis and treatment advice from senior gastroenterologist Dr. Akhilesh Yadav.",
    simpleExplanation: "पेट दर्द (Stomach Pain) एक बहुत ही सामान्य लक्षण है जो साधारण गैस या अपच से लेकर अपेंडिसाइटिस, गॉलब्लेडर की पथरी, पेट के अल्सर या पैनक्रियाटाइटिस जैसी गंभीर बीमारियों का संकेत हो सकता है। दर्द पेट के किस हिस्से में हो रहा है (जैसे ऊपरी हिस्सा, निचला हिस्सा, दायां या बायां भाग), दर्द का प्रकार कैसा है और इसके साथ अन्य क्या लक्षण हैं, इससे बीमारी के मूल कारण का पता चलता है।",
    quickSummary: "पेट दर्द सामान्य अपच से लेकर अल्सर, पथरी या आंतों के गंभीर रोगों का संकेत हो सकता है। दर्द के सही स्थान और लक्षणों के आधार पर इसका सही इलाज तय किया जाता है।",
    doctorReassurance: "Most cases of stomach pain are treatable with timely diagnosis. Dr. Akhilesh Yadav provides comprehensive evaluation including blood work, ultrasound, and diagnostic endoscopy to address the root cause and ensure relief.",
    causesLifestyle: [
      "Eating oily, spicy, or unhygienic street food",
      "Irregular meal timings and eating too fast",
      "Overeating or excessive consumption of caffeine and alcohol",
      "Lack of physical activity leading to slow digestion"
    ],
    causesMedical: [
      "Stomach Ulcers or severe Gastritis (अल्सर या सूजन)",
      "Gallstones (पित्त की थैली में पथरी)",
      "Appendicitis or Diverticulitis (अपेंडिक्स या आंत की सूजन)",
      "Irritable Bowel Syndrome (IBS) or food intolerances"
    ],
    warningRedFlags: [
      "Severe, sudden pain that makes it difficult to stand or move",
      "High fever, vomiting blood, or passing black stools",
      "Persistent abdominal swelling or hardness",
      "Jaundice (yellowing of skin or eyes)"
    ],
    possibleConditions: [
      "Peptic Ulcer Disease (PUD)",
      "Gastroesophageal Reflux Disease (GERD)",
      "Cholelithiasis (Gallstone disease)",
      "Inflammatory Bowel Disease (IBD) / Colitis"
    ],
    evaluationSteps: [
      { step: "Clinical History", desc: "Understanding the onset, location, duration, and radiation of pain (e.g. pain radiating to the back suggests pancreas issues)." },
      { step: "Physical Exam", desc: "Gently pressing the abdomen to check for tenderness, rigidity, guarding, or swelling." },
      { step: "Diagnostic Testing", desc: "Requesting blood counts, liver tests, pancreatic enzymes, ultrasound, or an endoscopy." }
    ],
    recommendedTests: [
      { name: "Abdomen Ultrasound (USG)", purpose: "To screen for gallstones, liver enlargement, and appendicitis." },
      { name: "Upper GI Endoscopy", purpose: "To directly inspect the food pipe and stomach for ulcers, gastritis, or early cancer." },
      { name: "Amylase & Lipase blood tests", purpose: "To check for inflammation in the pancreas (pancreatitis)." }
    ],
    lifestyleAdvice: [
      "Eat small, frequent, freshly cooked meals instead of heavy portions.",
      "Stay hydrated by drinking clean water; avoid carbonated beverages.",
      "Do not self-medicate with painkillers like Diclofenac or Ibuprofen as they can trigger stomach bleeding and ulcers.",
      "Walk for 10-15 minutes after dinner to assist digestion."
    ],
    faqs: [
      { q: "पेट दर्द होने पर क्या दर्दनिवारक (painkillers) दवाएं लेना सही है?", a: "नहीं। बिना डॉक्टर की सलाह के पेनकिलर दवाएं (NSAIDs) लेने से पेट की परत में अल्सर हो सकता है और आंतरिक ब्लीडिंग का खतरा बढ़ जाता है।" },
      { q: "पेट के ऊपरी हिस्से में दर्द का क्या कारण हो सकता है?", a: "पेट के ऊपरी मध्य भाग में दर्द का कारण सामान्यतः एसिडिटी, पेट का अल्सर या गॉलब्लेडर की पथरी होता है। दर्द यदि पीठ की ओर जाए तो यह पैनक्रियाज की सूजन का संकेत हो सकता है।" },
      { q: "मुझे पेट दर्द के साथ उल्टी आ रही है, क्या करूँ?", a: "यदि पेट दर्द के साथ बार-बार उल्टी आ रही है या बुखार है, तो यह गॉलब्लेडर की सूजन या आंतों में रुकावट का संकेत हो सकता है। ऐसे में बिना देर किए विशेषज्ञ डॉक्टर से संपर्क करें।" }
    ],
    relatedConditions: ["fatty-liver", "jaundice", "liver-cirrhosis"],
    relatedProcedures: ["endoscopy", "colonoscopy", "ercp"],
    relatedArticles: ["endoscopy-kya-hota-hai", "jaundice-symptoms-causes"]
  },
  "gas-bloating": {
    slug: "gas-bloating",
    title: "Gas & Bloating",
    hindiTitle: "गैस और पेट फूलने की समस्या",
    metaTitle: "Chronic Gas & Bloating Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Suffering from constant gas, bloating, and flatulence in Ranchi? Get expert diagnostic care and permanent relief from Dr. Akhilesh Yadav.",
    simpleExplanation: "पेट फूलना (Bloating) और गैस (Gas) एक आम पाचन संबंधी समस्या है जिसमें पेट भरा हुआ, तना हुआ या फूला हुआ महसूस होता है। यह अक्सर खाना पचाने के दौरान आंतों के बैक्टीरिया द्वारा बनाई गई गैस के कारण होता है। यदि यह समस्या लगातार बनी रहे, तो यह आईबीएस (IBS), लैक्टोज इनटोलरेंस, पेट के कीड़े या आंतों में अच्छे बैक्टीरिया के असंतुलन (SIBO) का संकेत हो सकती है।",
    quickSummary: "गैस और पेट फूलने की समस्या अक्सर गलत खानपान, धीमी पाचन क्रिया, या आंतों के बैक्टीरिया में गड़बड़ी के कारण होती है।",
    doctorReassurance: "While bloating is commonly benign, chronic cases require systematic evaluation. Dr. Akhilesh Yadav offers targeted diagnostic checks for food intolerances, H. pylori, and IBS to restore normal digestion.",
    causesLifestyle: [
      "Eating too fast or talking while eating (swallowing air)",
      "High intake of soft drinks, chewing gum, or artificial sweeteners",
      "Consuming heavy, gas-producing foods like cabbage, beans, and fast food",
      "Sleeping immediately after meals"
    ],
    causesMedical: [
      "Irritable Bowel Syndrome (IBS)",
      "Small Intestinal Bacterial Overgrowth (SIBO)",
      "Lactose Intolerance (दूध न पचना) or Celiac Disease (ग्लूटेन एलर्जी)",
      "H. pylori infection or chronic gastritis"
    ],
    warningRedFlags: [
      "Severe bloating accompanied by persistent vomiting",
      "Unexplained weight loss or chronic diarrhea",
      "Blood in stool or black tarry stools",
      "Difficulty passing gas or stool (intestinal obstruction)"
    ],
    possibleConditions: [
      "Irritable Bowel Syndrome (IBS-C / IBS-D)",
      "Celiac Disease (Gluten Allergy)",
      "Lactose Intolerance",
      "Chronic Gastritis"
    ],
    evaluationSteps: [
      { step: "Dietary Log Analysis", desc: "Reviewing food habits to trace trigger foods (dairy, wheat, lentils)." },
      { step: "Breath Tests", desc: "Conducting lactose breath tests or glucose breath tests for SIBO diagnosis." },
      { step: "Endoscopic Checks", desc: "Performing an upper endoscopy to check for stomach lining inflammation or celiac damage in the duodenum." }
    ],
    recommendedTests: [
      { name: "Upper GI Endoscopy & Duodenal Biopsy", purpose: "To rule out Celiac Disease (Gluten intolerance) and H. pylori infection." },
      { name: "Stool Routine & Culture", purpose: "To check for intestinal parasites, yeast overgrowth, or inflammation." },
      { name: "Celiac Serology (tTG-IgA)", purpose: "A simple blood test to screen for wheat/gluten allergy." }
    ],
    lifestyleAdvice: [
      "Eat slowly and chew your food thoroughly to minimize swallowed air.",
      "Identify and limit dairy products if you suspect lactose intolerance.",
      "Avoid carbonated sodas, packaged juices, and refined sugars.",
      "Incorporate probiotics (fresh buttermilk, curd) into your daily diet."
    ],
    faqs: [
      { q: "क्या हमेशा गैस बनने का कारण केवल गलत खानपान है?", a: "नहीं। कभी-कभी यह आंतों में बैक्टीरिया के असंतुलन (SIBO), लैक्टोज इनटोलरेंस, या आईबीएस (IBS) का शुरुआती लक्षण हो सकता है, जिसे जांच से ही ठीक किया जा सकता है।" },
      { q: "क्या गैस की वजह से सीने में दर्द हो सकता है?", a: "हाँ, पेट में बनने वाली गैस जब ऊपर की ओर दबाव डालती है, तो छाती में भारीपन या दर्द महसूस हो सकता है। हालांकि, हृदय संबंधी दर्द को सुरक्षित रूप से खारिज करना आवश्यक है।" },
      { q: "दही या छाछ पीने से गैस में आराम क्यों मिलता है?", a: "दही और छाछ प्राकृतिक प्रोबायोटिक्स हैं जो पेट में अच्छे बैक्टीरिया को बढ़ाते हैं, जिससे पाचन क्रिया तेज होती है और गैस बनना कम होती है।" }
    ],
    relatedConditions: ["ibs"],
    relatedProcedures: ["endoscopy", "colonoscopy"],
    relatedArticles: ["lactose-intolerance-blog", "celiac-gluten-blog"]
  },
  acidity: {
    slug: "acidity",
    title: "Acidity & Heartburn",
    hindiTitle: "एसिडिटी और छाती में जलन",
    metaTitle: "Acidity & GERD Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Struggling with chronic acidity, acid reflux, or chest heartburn? Get advanced clinical treatment in Ranchi from gastroenterology specialist Dr. Akhilesh Yadav.",
    simpleExplanation: "एसिडिटी (Acidity) तब होती है जब पेट की पाचन ग्रंथियां अत्यधिक मात्रा में एसिड (acid) का निर्माण करती हैं। यह एसिड जब भोजन की नली में ऊपर की ओर आता है, तो इसे एसिड रिफ्लक्स (Acid Reflux) या गर्ड (GERD) कहा जाता है। इसके कारण छाती में तेज जलन (heartburn), मुंह का स्वाद कड़वा होना, और गले में खट्टा पानी आने जैसी समस्याएं होती हैं।",
    quickSummary: "एसिडिटी पेट में जरूरत से ज्यादा एसिड बनने और उसके भोजन नली में वापस आने (GERD) से होती है, जिससे छाती में जलन होती है।",
    doctorReassurance: "Occasional acidity is common, but regular acid reflux can damage the esophagus. Dr. Akhilesh Yadav utilizes high-definition endoscopy to assess the valve strength and rule out ulcers or pre-cancerous changes.",
    causesLifestyle: [
      "Lying down immediately after eating heavy meals",
      "Excessive consumption of spicy, fried, or tomato-based acidic foods",
      "Smoking, alcohol, and excessive tea or coffee intake",
      "Obesity and high stress levels"
    ],
    causesMedical: [
      "Hiatus Hernia (पेट के ऊपरी हिस्से का छाती की तरफ खिसकना)",
      "Weak Lower Esophageal Sphincter (LES - भोजन नली का कमजोर वाल्व)",
      "H. pylori bacterial infection in the stomach",
      "Gastroparesis (धीमी गति से पेट का खाली होना)"
    ],
    warningRedFlags: [
      "Difficulty or pain while swallowing food (निगलने में दर्द)",
      "Vomiting blood or passing dark black stools",
      "Persistent cough, hoarse voice, or asthma-like symptoms",
      "Unexplained weight loss or chest pain that mimics a heart attack"
    ],
    possibleConditions: [
      "Gastroesophageal Reflux Disease (GERD)",
      "Hiatal Hernia",
      "Peptic Esophagitis",
      "Barrett's Esophagus"
    ],
    evaluationSteps: [
      { step: "Endoscopic Evaluation", desc: "Checking the lower esophageal valve for laxity, inflammation, or hiatus hernia." },
      { step: "24-hour pH Impedance Study", desc: "Measuring the frequency and duration of acid reflux over a 24-hour period." },
      { step: "Manometry", desc: "Testing the muscle contractions and pressure in the food pipe." }
    ],
    recommendedTests: [
      { name: "Upper GI Endoscopy", purpose: "To inspect for esophagus irritation (esophagitis), Hiatus Hernia, and Barrett’s changes." },
      { name: "H. Pylori Breath Test (UBT)", purpose: "To check for H. pylori infection which can cause gastritis and ulcers." },
      { name: "Barium Swallow", purpose: "An X-ray test to check the structure of the esophagus and hiatal anatomy." }
    ],
    lifestyleAdvice: [
      "Elevate the head of your bed by 6 inches using blocks or wedges.",
      "Keep a gap of at least 2.5 to 3 hours between your dinner and bedtime.",
      "Avoid tight clothing around your waist which increases abdominal pressure.",
      "Quit smoking and limit intake of tea, coffee, and alcohol."
    ],
    faqs: [
      { q: "क्या रोज एंटासिड (antacids) गोलियां लेना सुरक्षित है?", a: "लंबे समय तक बिना डॉक्टर की सलाह के एंटासिड दवाएं लेने से किडनी पर असर पड़ सकता है और विटामिन B12 व कैल्शियम का अवशोषण कम हो जाता है। हमेशा मुख्य कारण का इलाज करें।" },
      { q: "एसिडिटी और हार्ट अटैक के दर्द में कैसे अंतर करें?", a: "एसिडिटी का दर्द खाना खाने के बाद बढ़ सकता है और बैठने या एंटासिड लेने से ठीक हो जाता है। हार्ट अटैक का दर्द चलने-फिरने से बढ़ता है, छाती में भारीपन लाता है और बाएं हाथ, कंधे या जबड़े की ओर जाता है।" },
      { q: "हायटस हर्निया (Hiatus Hernia) क्या है?", a: "इसमें पेट का ऊपरी हिस्सा छाती की तरफ ऊपर खिसक जाता है, जिससे भोजन की नली का वाल्व ठीक से बंद नहीं हो पाता और गंभीर एसिडिटी होती है।" }
    ],
    relatedConditions: ["ibs"],
    relatedProcedures: ["endoscopy", "balloon-dilation"],
    relatedArticles: ["endoscopy-kya-hota-hai"]
  },
  constipation: {
    slug: "constipation",
    title: "Constipation",
    hindiTitle: "कब्ज की गंभीर समस्या",
    metaTitle: "Chronic Constipation Specialist in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Dealing with painful, chronic constipation in Ranchi? Read expert advice and advanced treatment options from senior gastroenterologist Dr. Akhilesh Yadav.",
    simpleExplanation: "कब्ज (Constipation) एक ऐसी स्थिति है जिसमें सप्ताह में 3 बार से कम मल त्याग होता है, मल बहुत कड़ा, सूखा या कम मात्रा में आता है, और मल त्याग के दौरान अत्यधिक जोर लगाना पड़ता है। यदि यह समस्या 3 महीने से अधिक समय तक बनी रहे, तो इसे क्रोनिक कब्ज (Chronic Constipation) कहा जाता है। इसके मुख्य कारणों में आहार में फाइबर की कमी, पानी की कमी, धीमी आंत की गतिशीलता या पेल्विक फ्लोर की मांसपेशियों का असंतुलन शामिल हैं।",
    quickSummary: "कब्ज में मल त्याग कठिन और अनियमित हो जाता है। यह कम पानी, कम फाइबर और आंतों की धीमी गति (sluggish colon) के कारण होती है।",
    doctorReassurance: "Most constipation cases resolve with dietary changes, but chronic constipation needs a specialist's approach. Dr. Akhilesh Yadav checks for organic blockage, slow colon transit, and rectal evacuation disorders to tailor safe therapies.",
    causesLifestyle: [
      "Low dietary fiber intake (diet lacking green vegetables, fruits, whole grains)",
      "Inadequate daily water and fluid intake",
      "Ignoring the natural urge to pass stool repeatedly",
      "Sedentary lifestyle and lack of daily physical walk"
    ],
    causesMedical: [
      "Hypothyroidism or Diabetes mellitus",
      "Irritable Bowel Syndrome with Constipation (IBS-C)",
      "Strictures or tumors blocking the colon (आंत का सिकुड़ना या गांठ)",
      "Anismus or Pelvic floor dyssynergia (निकास की मांसपेशियों का तालमेल न होना)"
    ],
    warningRedFlags: [
      "Sudden onset of constipation in patients older than 45-50 years",
      "Blood in stool or severe pain during defecation",
      "Unexplained weight loss or persistent fever",
      "Inability to pass stool or gas accompanied by vomiting (intestinal blockage)"
    ],
    possibleConditions: [
      "Chronic Idiopathic Constipation (CIC)",
      "Irritable Bowel Syndrome (IBS-C)",
      "Anorectal Outlet Obstruction",
      "Colonic Stricture or Neoplasm"
    ],
    evaluationSteps: [
      { step: "Diet & Drug Review", desc: "Checking food logs and stopping medications that cause constipation (like iron supplements, calcium channel blockers, or opioids)." },
      { step: "Colonoscopy", desc: "Inspecting the entire large intestine for narrowing, strictures, or tumors." },
      { step: "Anorectal Manometry", desc: "Assessing the coordination and pressure of pelvic floor and anal sphincter muscles." }
    ],
    recommendedTests: [
      { name: "Colonoscopy", purpose: "To rule out mechanical blockage, narrowing, or tumors in the large intestine." },
      { name: "Thyroid Profile (T3, T4, TSH)", purpose: "To check for underactive thyroid (hypothyroidism) which slows digestion." },
      { name: "Anorectal Manometry", purpose: "To diagnose pelvic floor dysfunction or outlet obstruction." }
    ],
    lifestyleAdvice: [
      "Increase daily fiber intake gradually by eating whole grains, oats, green vegetables, and papaya.",
      "Drink at least 2.5 to 3 liters of water daily.",
      "Adopt a squatting posture (using a stool under your feet) to naturally align the rectum for easier evacuation.",
      "Exercise or walk for 30 minutes daily to stimulate bowel motility."
    ],
    faqs: [
      { q: "क्या रोजाना रेचक (laxatives) दवाएं लेना सही है?", a: "नहीं, लंबे समय तक कब्ज निवारक चूर्ण या लैक्सेटिव गोलियों की आदत डालने से आंतें कमजोर हो जाती हैं और उनके बिना मल पास होना बंद हो जाता है। हमेशा जड़ का इलाज करें।" },
      { q: "मल के साथ खून आने का क्या मतलब है?", a: "कब्ज के कारण कड़ा मल आने से मलद्वार छिल जाता है, जिसे फिशर (fissure) या बवासीर (piles) कहा जाता है। यह मल में ताजा खून आने का मुख्य कारण है।" },
      { q: "ईसबगोल की भूसी (Psyllium husk) कैसे लेनी चाहिए?", a: "ईसबगोल को एक गिलास गुनगुने पानी या दूध में मिलाकर तुरंत पिएं, और उसके बाद एक गिलास पानी और पिएं। पानी कम पीने पर ईसबगोल आंत में फंसकर कब्ज बढ़ा सकता है।" }
    ],
    relatedConditions: ["ibs"],
    relatedProcedures: ["colonoscopy"],
    relatedArticles: ["constipation-diet-blog"]
  },
  diarrhoea: {
    slug: "diarrhoea",
    title: "Diarrhoea",
    hindiTitle: "दस्त और लूज मोशन",
    metaTitle: "Chronic Diarrhoea Diagnosis & Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Experiencing chronic or watery diarrhea in Ranchi? Get accurate diagnostics and effective treatment options from senior gastrologist Dr. Akhilesh Yadav.",
    simpleExplanation: "दस्त (Diarrhoea) तब होता है जब आपको एक दिन में तीन या अधिक बार पानी जैसा या ढीला मल (loose watery stools) आता है। दस्त दो प्रकार के होते हैं: तीव्र (acute) जो दूषित भोजन/पानी के कारण 1-2 दिन रहता है, और क्रोनिक (chronic) जो 4 सप्ताह से अधिक समय तक बना रहता है। क्रोनिक दस्त आंतों के संक्रमण, आईबीडी (जैसे अल्सरेटिव कोलाइटिस), ग्लूटेन से होने वाली एलर्जी (Celiac Disease) या इरिटेबल बाउल सिंड्रोम (IBS) के कारण हो सकता है।",
    quickSummary: "दस्त में बार-बार पानी जैसा मल आता है। 4 सप्ताह से अधिक रहने वाला दस्त गंभीर आंत रोगों (IBD, कोलाइटिस, ग्लूटेन एलर्जी) का संकेत हो सकता है।",
    doctorReassurance: "While acute diarrhea is self-limiting, persistent diarrhea leads to dehydration and requires diagnosis. Dr. Akhilesh Yadav uses targeted stool assays, celiac screens, and colonoscopy to find the exact intestinal cause.",
    causesLifestyle: [
      "Drinking untreated water or contaminated juices from street vendors",
      "Consuming stale, undercooked, or raw food left open",
      "Excessive consumption of sugar-free foods containing sorbitol/mannitol",
      "Food allergies or sudden dietary changes"
    ],
    causesMedical: [
      "Inflammatory Bowel Disease (IBD - Ulcerative Colitis or Crohn's Disease)",
      "Celiac Disease (Wheat allergy causing damage to small intestine)",
      "Irritable Bowel Syndrome with Diarrhea (IBS-D)",
      "Chronic infections (Giardiasis, Tuberculosis, or Amoebiasis)"
    ],
    warningRedFlags: [
      "Stools containing blood, pus, or mucus (पेचिश)",
      "High fever with chills and vomiting that prevents drinking fluids",
      "Signs of severe dehydration (dry mouth, sunken eyes, no urine pass for 8 hours)",
      "Diarrhea that wakes you up from sleep at night (nocturnal diarrhea)"
    ],
    possibleConditions: [
      "Ulcerative Colitis",
      "Crohn's Disease",
      "Celiac Disease",
      "IBS-D"
    ],
    evaluationSteps: [
      { step: "Dehydration Check", desc: "Evaluating hydration status immediately and initiating ORS or IV fluids if necessary." },
      { step: "Stool Analysis", desc: "Testing stool samples for parasites, bacteria, and fecal calprotectin (to check for IBD inflammation)." },
      { step: "Colonoscopy with Biopsy", desc: "Inspecting the colon lining and taking tissue samples to diagnose microscopic colitis or IBD." }
    ],
    recommendedTests: [
      { name: "Stool PCR or Culture", purpose: "To identify specific bacterial, viral, or parasitic pathogens." },
      { name: "Colonoscopy with Terminal Ileoscopy", purpose: "To diagnose Crohn's disease, Ulcerative Colitis, or tuberculosis in the ileum." },
      { name: "Fecal Calprotectin Test", purpose: "A stool biomarker test to distinguish between inflammatory bowel disease (IBD) and IBS." }
    ],
    lifestyleAdvice: [
      "Drink Oral Rehydration Salt (ORS) solution, coconut water, or salted rice starch water to prevent mineral loss.",
      "Eat soft, bland foods like banana, rice, apple puree, and toast (BRAT diet).",
      "Strictly avoid dairy products, milk, spicy foods, caffeine, and alcohol during diarrhea.",
      "Always wash your hands thoroughly with soap before eating and after using the restroom."
    ],
    faqs: [
      { q: "क्या दस्त शुरू होते ही एंटीबायोटिक (antibiotics) लेना चाहिए?", a: "नहीं, अधिकतर दस्त वायरल या खानपान की गड़बड़ी से होते हैं जहाँ एंटीबायोटिक दवाओं की आवश्यकता नहीं होती। बिना डॉक्टर की सलाह के गलत एंटीबायोटिक लेने से आंत के अच्छे बैक्टीरिया मर जाते हैं और दस्त और गंभीर हो सकता है।" },
      { q: "अल्सरेटिव कोलाइटिस (Ulcerative Colitis) क्या है?", a: "यह एक आटोइम्यून बीमारी है जिसमें बड़ी आंत में छाले (ulcers) बन जाते हैं, जिससे मरीज को बार-बार मवाद और खून के साथ दस्त आता है।" },
      { q: "ओआरएस (ORS) घोल कैसे तैयार करें?", a: "एक लीटर साफ पीने के पानी में ओआरएस का पूरा पैकेट घोलें। यदि पैकेट न हो, तो 1 लीटर पानी में 6 छोटी चम्मच चीनी और आधा चम्मच नमक मिलाकर घोल बनाएं।" }
    ],
    relatedConditions: ["ibs"],
    relatedProcedures: ["colonoscopy", "enteroscopy"],
    relatedArticles: ["celiac-gluten-blog", "lactose-intolerance-blog"]
  },
  vomiting: {
    slug: "vomiting",
    title: "Vomiting & Nausea",
    hindiTitle: "उल्टी और मतली (जी मिचलाना)",
    metaTitle: "Chronic Nausea & Vomiting Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Dealing with constant nausea and vomiting in Ranchi? Find the underlying gastrointestinal cause and get expert treatment from Dr. Akhilesh Yadav.",
    simpleExplanation: "उल्टी (Vomiting) और जी मिचलाना (Nausea) स्वतंत्र बीमारियाँ नहीं हैं, बल्कि यह पाचन तंत्र या शरीर में किसी गड़बड़ी के लक्षण हैं। सामान्य एसिडिटी या फूड पॉइजनिंग से लेकर गॉलब्लेडर की सूजन, लिवर की बीमारी (Hepatitis), अपेंडिसाइटिस, माइग्रेन, या पेट में किसी प्रकार की रुकावट के कारण उल्टी हो सकती है। यदि यह समस्या हफ्तों तक बनी रहे तो इसे गंभीरता से लेकर जांच करानी चाहिए।",
    quickSummary: "जी मिचलाना और उल्टी होना पाचन तंत्र में खराबी, फूड पॉइजनिंग, लिवर रोगों, या पेट में रुकावट (obstruction) का संकेत हो सकता है।",
    doctorReassurance: "Acute vomiting is often due to infection, but chronic vomiting needs comprehensive diagnosis. Dr. Akhilesh Yadav checks for gastric outlet blockages, gallbladder inflammation, or liver issues to stop symptoms safely.",
    causesLifestyle: [
      "Eating contaminated food, street snacks, or stale dairy items",
      "Overeating or lying down immediately after heavy, greasy meals",
      "Excessive alcohol intake or food poisoning",
      "Motion sickness during travel"
    ],
    causesMedical: [
      "Acute Gastritis or Peptic Ulcers (पेट में छाले या सूजन)",
      "Hepatitis (लिवर की सूजन या पीलिया)",
      "Acute Cholecystitis or Pancreatitis (अग्न्याशय या पित्ताशय की सूजन)",
      "Gastric Outlet Obstruction (पेट से आंत में जाने वाले मार्ग में रुकावट)"
    ],
    warningRedFlags: [
      "Vomiting fresh blood or coffee-ground-colored fluid (खून की उल्टी)",
      "Severe headache, stiff neck, or confusion accompanying vomiting",
      "Severe abdominal pain, rigidity, and inability to pass gas or stool",
      "Dehydration symptoms: dry tongue, no urine for 8 hours, dizziness"
    ],
    possibleConditions: [
      "Acute/Chronic Gastritis",
      "Gastric Outlet Obstruction (GOO)",
      "Cholecystitis or Biliary Colic",
      "Migraine or Central nervous system triggers"
    ],
    evaluationSteps: [
      { step: "Dehydration & Vitals Assessment", desc: "Checking blood pressure and skin turgor; starting IV antiemetics and fluids if oral intake is impossible." },
      { step: "Blood Investigations", desc: "Checking liver function tests (LFT), renal function (KFT) to assess dehydration, and electrolytes." },
      { step: "Upper GI Endoscopy", desc: "Visualizing the stomach and pyloric channel to look for active ulcers, tumors, or narrowings." }
    ],
    recommendedTests: [
      { name: "Upper GI Endoscopy", purpose: "To rule out pyloric narrowing (strictures) or severe stomach ulcers causing vomiting." },
      { name: "Liver Function Test (LFT) & Ultrasound", purpose: "To check for jaundice, hepatitis, gallstones, or liver inflammation." },
      { name: "Serum Electrolytes Test", purpose: "To evaluate sodium, potassium, and chloride levels which drop due to persistent vomiting." }
    ],
    lifestyleAdvice: [
      "Avoid eating solid foods for a few hours. Keep sipping ice water, clear soup, or ORS in small amounts.",
      "Avoid strong food smells, perfumes, or cooking odors that trigger nausea.",
      "Do not lie flat immediately after eating; keep your head elevated.",
      "Stay hydrated, but drink fluids slowly in small sips rather than gulping."
    ],
    faqs: [
      { q: "उल्टी के साथ खून आने का क्या मतलब होता है?", a: "उल्टी में खून आना (hematemesis) पेट के अल्सर, भोजन नली में नस फटने (varices), या लगातार उल्टी करने से भोजन नली की परत में कट (Mallory-Weiss tear) आने का संकेत हो सकता है। यह एक मेडिकल इमरजेंसी है।" },
      { q: "क्या उल्टी रोकने के लिए तुरंत दवा लेना सुरक्षित है?", a: "हाँ, सामान्य उल्टी में एंटी-एमेटिक (antiemetics) दवाएं ली जा सकती हैं। लेकिन अगर उल्टी पेट में रुकावट या गंभीर लिवर रोग के कारण है, तो केवल उल्टी की दवा काफी नहीं है, मुख्य बीमारी का इलाज जरूरी है।" },
      { q: "पीलिया (Jaundice) में उल्टी क्यों होती है?", a: "पीलिया में लिवर की सूजन (Hepatitis) के कारण बिलिरूबिन और अन्य विषाक्त पदार्थ शरीर में जमा होने लगते हैं, जो मस्तिष्क के उल्टी केंद्र (CTZ) को उत्तेजित करते हैं जिससे लगातार जी मिचलाता है।" }
    ],
    relatedConditions: ["jaundice", "liver-cirrhosis"],
    relatedProcedures: ["endoscopy", "glue-injection"],
    relatedArticles: ["jaundice-symptoms-causes", "endoscopy-kya-hota-hai"]
  },
  "blood-in-stool": {
    slug: "blood-in-stool",
    title: "Blood in Stool",
    hindiTitle: "मल में खून आना (आंतरिक ब्लीडिंग)",
    metaTitle: "Blood in Stool Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Noticed blood in your stool or toilet bowl? Get immediate diagnostic evaluation and treatment in Ranchi from gastroenterologist Dr. Akhilesh Yadav.",
    simpleExplanation: "मल में खून आना (Blood in Stool) पाचन तंत्र के किसी हिस्से में हो रहे रक्तस्राव का स्पष्ट संकेत है। यदि खून का रंग चमकीला लाल (bright red) है, तो यह आमतौर पर मलद्वार के पास की समस्याओं जैसे बवासीर (piles), फिशर (fissure), या मलाशय के संक्रमण (proctitis) के कारण होता है। यदि मल का रंग बिल्कुल काला, डार्क या कोलतार जैसा (black tarry stool/melena) है, तो यह पेट (stomach) या छोटी आंत से हो रही पुरानी ब्लीडिंग का संकेत है।",
    quickSummary: "मल में खून आना पाइल्स, फिशर, कोलाइटिस या बड़ी आंत के कैंसर का संकेत हो सकता है। लाल या काला मल आने पर तुरंत दूरबीन जांच (कोलोनोस्कोपी) आवश्यक है।",
    doctorReassurance: "Bleeding in stool is a critical symptom that should never be ignored. Dr. Akhilesh Yadav utilizes high-definition colonoscopy and endoscopy to localize the source and resolve it endoscopically without surgery.",
    causesLifestyle: [
      "Chronic constipation leading to straining during stool pass",
      "Low fiber diet lacking green vegetables and fruits",
      "Poor hydration leading to hard, dry stools",
      "Sedentary lifestyle causing poor bowel motility"
    ],
    causesMedical: [
      "Hemorrhoids (Piles - बवासीर) or Anal Fissures (गुदा मार्ग में कट)",
      "Ulcerative Colitis or Crohn's Disease (आंतों में छाले व सूजन)",
      "Colon Polyps or Colon Cancer (बड़ी आंत में मस्से या कैंसर)",
      "Diverticulosis or Angiodysplasia (कमजोर रक्त वाहिकाएं)"
    ],
    warningRedFlags: [
      "Passing large amounts of fresh dark red blood or blood clots in stool",
      "Passing black, sticky, tarry stools with a very foul smell (melena)",
      "Bleeding accompanied by severe dizziness, cold sweat, or fainting",
      "Unexplained severe fatigue, pale skin, or weight loss"
    ],
    possibleConditions: [
      "Hemorrhoids / Anal Fissure",
      "Inflammatory Bowel Disease (IBD)",
      "Colonic Polyposis / Colorectal Cancer",
      "Upper GI Bleed (causing melena)"
    ],
    evaluationSteps: [
      { step: "Clinical Assessment", desc: "Differentiating between bright red blood (hematochezia) and black tarry stool (melena) to locate upper vs lower GI source." },
      { step: "Digital Rectal Examination (DRE)", desc: "A quick physical check to examine the anal canal for hemorrhoids or fissures." },
      { step: "Endoscopic Visual Check", desc: "Performing an urgent colonoscopy or endoscopy to find the bleeding point and stop it." }
    ],
    recommendedTests: [
      { name: "Colonoscopy", purpose: "To inspect the entire large intestine for bleeding, ulcers, polyps, or tumors." },
      { name: "Hemoglobin (CBC) & Coagulation Studies", purpose: "To check the severity of blood loss and verify clotting time." },
      { name: "Upper GI Endoscopy", purpose: "If the stool is black (melena), to check the stomach and duodenum for ulcers." }
    ],
    lifestyleAdvice: [
      "Adopt a high-fiber diet (papaya, apples, leafy greens, oats) to keep stools soft.",
      "Drink at least 3 liters of water daily to prevent straining.",
      "Avoid sitting on the toilet seat for long periods or straining excessively.",
      "Never self-treat with piles creams without confirming the diagnosis with a specialist."
    ],
    faqs: [
      { q: "क्या मल में खून आने का कारण हमेशा बवासीर (Piles) ही होता है?", a: "नहीं। अधिकांश लोग इसे बवासीर मानकर टाल देते हैं, लेकिन यह बड़ी आंत के पॉलिप्स, कोलाइटिस या बड़ी आंत के कैंसर का भी पहला संकेत हो सकता है। बिना डॉक्टर की जांच के अनुमान न लगाएं।" },
      { q: "काला मल (Melena) आने का क्या कारण होता है?", a: "यदि खून पेट या भोजन की नली से निकलता है, तो पेट का एसिड उसे पचा देता है जिससे वह मल के रास्ते काले रंग का होकर बाहर आता है। इसका मुख्य कारण पेट का अल्सर या लिवर सिरोसिस होता है।" },
      { q: "कोलोनोस्कोपी में ब्लीडिंग कैसे रोकी जाती है?", a: "कोलोनोस्कोपी के दौरान डॉक्टर स्पेशल क्लिप्स (hemoclips) लगाकर, आर्गन प्लाज्मा (APC) से जलाकर, या ब्लीडिंग रोकने की दवा डालकर रक्तस्राव को तुरंत बंद कर सकते हैं।" }
    ],
    relatedConditions: ["liver-cirrhosis", "ibs"],
    relatedProcedures: ["colonoscopy", "gi-bleeding", "apc"],
    relatedArticles: ["endoscopy-kya-hota-hai", "jaundice-symptoms-causes"]
  },
  "difficulty-swallowing": {
    slug: "difficulty-swallowing",
    title: "Difficulty Swallowing",
    hindiTitle: "खाना निगलने में कठिनाई (डिस्फेजिया)",
    metaTitle: "Difficulty Swallowing (Dysphagia) Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Struggling to swallow food or liquids? Get expert evaluation for Dysphagia in Ranchi from senior gastroenterologist Dr. Akhilesh Yadav.",
    simpleExplanation: "निगलने में कठिनाई (Difficulty Swallowing या Dysphagia) एक गंभीर लक्षण है जिसमें गले या भोजन की नली में खाना फंसने का अहसास होता है। यह भोजन नली में किसी रुकावट (जैसे एसिडिटी के कारण नली का सिकुड़ना,Hiatus hernia या कैंसर) अथवा नसों व मांसपेशियों की कमजोरी (जैसे Achalasia Cardia) के कारण हो सकता है। यह लक्षण दिखने पर तुरंत जांच कराना अनिवार्य है।",
    quickSummary: "निगलने में कठिनाई (डिस्फेजिया) भोजन नली में संकुचन (stricture), एसिडिटी जनित घाव, या भोजन नली के कैंसर का गंभीर संकेत हो सकता है।",
    doctorReassurance: "Dysphagia is a warning sign that requires diagnostic clarity. Dr. Akhilesh Yadav uses advanced endoscopy and dilatation techniques to locate the block and expand the food pipe to restore normal eating.",
    causesLifestyle: [
      "Eating dry, large bites of solid food too quickly without chewing",
      "Chronic acid reflux (acid burn) due to high intake of junk food",
      "Drinking highly hot beverages regularly",
      "Stress-induced esophageal spasms"
    ],
    causesMedical: [
      "Esophageal Stricture (एसिड रिफ्लक्स या तेजाब के कारण नली का सिकुड़ना)",
      "Achalasia Cardia (भोजन नली के निचले हिस्से की मांसपेशियों का न खुलना)",
      "Esophageal Cancer (भोजन की नली का कैंसर)",
      "Esophageal Candidiasis (फंगल संक्रमण, विशेषकर कमजोर इम्यूनिटी वाले मरीजों में)"
    ],
    warningRedFlags: [
      "Difficulty swallowing even liquids (तरल पदार्थ निगलने में भी परेशानी)",
      "Pain while swallowing (Odynophagia - निगलने में तेज दर्द)",
      "Food repeatedly coming back up into the mouth (regurgitation) or coughing while eating",
      "Rapid, unexplained weight loss and changes in voice (hoarseness)"
    ],
    possibleConditions: [
      "Esophageal Stricture",
      "Achalasia Cardia",
      "Esophageal Carcinoma",
      "Eosinophilic Esophagitis (EoE)"
    ],
    evaluationSteps: [
      { step: "Clinical Intake", desc: "Differentiating whether difficulty is with solids only (suggests mechanical narrowing) or both solids and liquids (suggests muscle issue like Achalasia)." },
      { step: "Endoscopic Exam", desc: "An urgent upper endoscopy to directly visualize the esophagus lumen for blocks." },
      { step: "Esophageal Manometry", desc: "Checking the pressure and coordination of swallowing muscles." }
    ],
    recommendedTests: [
      { name: "Upper GI Endoscopy", purpose: "To visually check the esophagus for strictures, inflammation, and tumors, and take biopsies." },
      { name: "Barium Swallow Study", purpose: "An X-ray test showing the movement of swallowed liquid through the food pipe." },
      { name: "Esophageal Manometry", purpose: "To test for Achalasia Cardia and other motility disorders." }
    ],
    lifestyleAdvice: [
      "Take small bites, chew your food thoroughly, and eat slowly.",
      "Sit upright while eating and remain upright for at least 45 minutes after meals.",
      "Drink water along with meals to help push solid food down.",
      "Stick to soft, pureed, or liquid foods until you see a gastroenterologist."
    ],
    faqs: [
      { q: "क्या भोजन नली का सिकुड़ना (stricture) बिना बड़ी सर्जरी के ठीक हो सकता है?", a: "हाँ। यदि संकुचन कैंसर रहित (benign) है, तो एंडोस्कोपी के दौरान बलून डाइलेशन (Balloon Dilatation) करके सिकुड़ी हुई नली को आसानी से चौड़ा किया जा सकता है, जिससे तुरंत राहत मिलती है।" },
      { q: "अकेलेसिया कार्डिया (Achalasia Cardia) क्या है?", a: "यह एक ऐसी बीमारी है जिसमें भोजन नली का निचला वाल्व (LES) जकड़ जाता है और खुलता नहीं है, जिससे खाना पेट में नहीं जा पाता। इसका इलाज गुब्बारे से गुदा नली फैलाने (Pneumatic Dilation) या माईओटॉमी (POEM) प्रक्रिया से किया जाता है।" },
      { q: "निगलने में दर्द (Odynophagia) का क्या मतलब होता है?", a: "निगलने में दर्द आमतौर पर भोजन की नली में गहरे छालों (ulcers) या फंगल इंफेक्शन (candida) के कारण होता है। दवाइयों से यह समस्या 1-2 हफ्तों में ठीक हो जाती है।" }
    ],
    relatedConditions: ["ibs"],
    relatedProcedures: ["endoscopy", "balloon-dilation"],
    relatedArticles: ["endoscopy-kya-hota-hai"]
  },
  "weight-loss": {
    slug: "weight-loss",
    title: "Unexplained Weight Loss",
    hindiTitle: "बिना कारण वजन कम होना",
    metaTitle: "Unexplained Weight Loss Diagnosis in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Losing weight without trying? Read expert diagnostic and treatment advice from senior Ranchi gastroenterologist Dr. Akhilesh Yadav.",
    simpleExplanation: "बिना किसी प्रयास के अचानक वजन कम होना (Unexplained Weight Loss) एक महत्वपूर्ण स्वास्थ्य समस्या है। यदि पिछले 6 से 12 महीनों में बिना डाइटिंग या कसरत के आपके शरीर का कुल वजन 5% से अधिक कम हो गया है, तो इसे सामान्य न समझें। यह पाचन तंत्र में पोषक तत्वों के सही अवशोषण न होने (malabsorption), थायराइड की बीमारी, गंभीर संक्रमण (जैसे टीबी), क्रोनिक डायरिया, या कैंसर जैसी गंभीर बीमारियों का शुरुआती संकेत हो सकता है।",
    quickSummary: "बिना किसी प्रयास के अचानक तेजी से वजन कम होना गंभीर आंत रोगों (Celiac, IBD), क्रोनिक इंफेक्शन (टीबी) या कैंसर का संकेत हो सकता है।",
    doctorReassurance: "Unexplained weight loss requires systematic testing to rule out organic causes. Dr. Akhilesh Yadav evaluates your liver, pancreas, and intestinal absorption capacity through state-of-the-art imaging and scope tests to ensure a timely diagnosis.",
    causesLifestyle: [
      "Severe psychological stress, anxiety, or depression causing loss of appetite",
      "Nutritional neglect or eating imbalanced meals",
      "Excessive working hours leading to poor food habits",
      "Unregulated fasts or skipped meals"
    ],
    causesMedical: [
      "Celiac Disease (ग्लूटेन एलर्जी जिससे आंत पोषक तत्व नहीं सोख पाती)",
      "Inflammatory Bowel Disease (IBD - Crohn's Disease or Ulcerative Colitis)",
      "Uncontrolled Diabetes or Hyperthyroidism (अतिसक्रिय थायराइड)",
      "Gastrointestinal cancers (stomach, colon, pancreatic, or liver cancers)"
    ],
    warningRedFlags: [
      "Weight loss accompanied by a lump (गांठ) in the abdomen",
      "Persistent fever, night sweats, or bone pain",
      "Blood in stool, vomiting, or persistent black stools",
      "Severe fatigue, anemia, or yellow jaundice"
    ],
    possibleConditions: [
      "Celiac Disease",
      "Crohn's Disease",
      "Hyperthyroidism",
      "Gastrointestinal Malignancy"
    ],
    evaluationSteps: [
      { step: "Comprehensive Assessment", desc: "Detailed screening of diet, daily calorie intake, and tracing when the weight loss began." },
      { step: "Metabolic Panel", desc: "Requesting blood sugar, thyroid profile, and kidney/liver functions." },
      { step: "Endoscopic Imaging", desc: "Performing an endoscopy or colonoscopy to inspect the absorption lining of the small and large intestines." }
    ],
    recommendedTests: [
      { name: "Complete Blood Count (CBC) & ESR", purpose: "To screen for anemia, chronic inflammation, or infections." },
      { name: "Celiac Profile (tTG IgA & Duodenal Biopsy)", purpose: "To test for gluten allergy which blocks nutrient absorption." },
      { name: "CT Scan of Abdomen & Pelvis", purpose: "To rule out deep-seated tumors, cysts, or lymph node masses." }
    ],
    lifestyleAdvice: [
      "Eat high-calorie, nutrient-rich foods (nuts, dates, bananas, milk, eggs) regularly.",
      "Include proteins in every meal to prevent muscle loss.",
      "Monitor your weight weekly and keep a log of symptoms and food intake.",
      "Do not take weight-gaining supplements or steroids without consulting a qualified specialist."
    ],
    faqs: [
      { q: "कितना वजन कम होना चिंताजनक माना जाता है?", a: "यदि 6 महीने में आपके शरीर का कुल वजन बिना किसी प्रयास के 5% से अधिक (जैसे 60 किलो के व्यक्ति का 3 किलो से ज्यादा) कम हो जाता है, तो इसकी तुरंत जांच कराई जानी चाहिए।" },
      { q: "ग्लूटेन एलर्जी (Celiac Disease) में वजन क्यों कम होता है?", a: "ग्लूटेन के कारण आंतों की अंदरूनी परत क्षतिग्रस्त हो जाती है। इससे भोजन का पाचन और पोषक तत्वों (विटामिन, मिनरल, वसा) का अवशोषण बंद हो जाता है, जिससे मरीज कमजोर होने लगता है और वजन गिर जाता है।" },
      { q: "क्या टीबी (Tuberculosis) के कारण भी वजन कम हो सकता है?", a: "हाँ। भारत में पेट की टीबी (Intestinal TB) एक आम बीमारी है जिसके कारण पेट दर्द, दस्त, बुखार और तेजी से वजन कम होने जैसे लक्षण दिखते हैं। यह पूरी तरह इलाज योग्य है।" }
    ],
    relatedConditions: ["fatty-liver", "jaundice", "liver-cirrhosis"],
    relatedProcedures: ["endoscopy", "colonoscopy", "eus"],
    relatedArticles: ["celiac-gluten-blog", "endoscopy-kya-hota-hai"]
  },
  jaundice: {
    slug: "jaundice",
    title: "Jaundice",
    hindiTitle: "पीलिया के लक्षण और उपचार",
    metaTitle: "Jaundice Causes & Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Noticed yellow eyes or dark urine? Get expert diagnosis and treatment for Jaundice in Ranchi from liver specialist Dr. Akhilesh Yadav.",
    simpleExplanation: "पीलिया (Jaundice) कोई बीमारी नहीं है, बल्कि यह लिवर में किसी खराबी का मुख्य संकेत है। जब रक्त में बिलिरूबिन (bilirubin) नाम के पीले पिगमेंट की मात्रा सामान्य से अधिक हो जाती है, तो त्वचा, आंखों का सफेद हिस्सा (sclera) और पेशाब का रंग पीला हो जाता है। पीलिया का मुख्य कारण वायरल हेपेटाइटिस (लिवर की सूजन), शराब का सेवन, पित्त की नली में पथरी (bile duct stone), या लिवर सिरोसिस हो सकता है।",
    quickSummary: "पीलिया (जॉन्डिस) खून में बिलिरूबिन बढ़ने से आंखों और पेशाब के पीले होने से पहचान में आता है। यह लिवर संक्रमण (हेपेटाइटिस) या पित्त नली में रुकावट के कारण होता है।",
    doctorReassurance: "Jaundice requires urgent investigation to identify the type (medical vs surgical/obstructive). Dr. Akhilesh Yadav offers complete hepatology evaluations, FibroScan, and ERCP to clear biliary obstructions quickly and heal the liver.",
    causesLifestyle: [
      "Consuming contaminated water or food (leading to Hepatitis A or E)",
      "Excessive and chronic consumption of alcohol leading to alcoholic hepatitis",
      "Unregulated self-medication with alternative medicines or heavy metal tonics",
      "Sharing needles or getting unsafe tattoos (leading to Hepatitis B or C)"
    ],
    causesMedical: [
      "Viral Hepatitis (A, B, C, E)",
      "Bile Duct Stones (पित्त की नली में पथरी - Obstructive Jaundice)",
      "Liver Cirrhosis (लिवर का सिकुड़ना)",
      "Bile duct cancer or Pancreatic head cancer blocking bile flow"
    ],
    warningRedFlags: [
      "Jaundice accompanied by high fever with chills (infection in bile duct)",
      "Severe confusion, drowsiness, or altered behavior (Hepatic Encephalopathy)",
      "Blood in vomit or dark black stools",
      "Severe abdominal swelling (ascites - पेट में पानी भरना)"
    ],
    possibleConditions: [
      "Acute Viral Hepatitis",
      "Choledocholithiasis (Bile duct stone)",
      "Decompensated Liver Cirrhosis",
      "Cholangiocarcinoma"
    ],
    evaluationSteps: [
      { step: "Clinical Check", desc: "Checking eyes, skin, and nails under bright daylight; palpating the right upper abdomen for liver tenderness." },
      { step: "Hepatology Lab Profile", desc: "Requesting Liver Function Test (LFT) to check total, direct, and indirect bilirubin, SGOT/SGPT, and viral markers (Hav, Hev, HbsAg)." },
      { step: "Imaging Studies", desc: "Performing an ultrasound or MRCP to check for dilated bile ducts or stones." }
    ],
    recommendedTests: [
      { name: "Liver Function Test (LFT)", purpose: "To measure bilirubin levels and check liver enzyme (SGOT, SGPT) elevation." },
      { name: "Abdomen Ultrasound / MRCP", purpose: "To differentiate between medical jaundice and biliary obstruction (surgical jaundice)." },
      { name: "Viral Markers Panel", purpose: "To test for Hepatitis viruses (A, B, C, E) causing infection." }
    ],
    lifestyleAdvice: [
      "Drink only boiled, filtered, or bottled mineral water. Avoid street juices or ice.",
      "Strictly avoid alcohol and oily, heavy, fried foods until the liver heals.",
      "Eat a light, carbohydrate-rich diet (sugarcane juice, papaya, boiled potatoes, khichdi) to reduce the liver's workload.",
      "Do not fall for self-proclaimed 'herbal' healers or jhara-phunki; alternative medicines can trigger acute liver failure."
    ],
    faqs: [
      { q: "क्या पीलिया होने पर झाड़-फूंक या देसी दवाएं लेना सुरक्षित है?", a: "बिल्कुल नहीं। देसी जड़ी-बूटियों या बिना लेबल वाली दवाओं में भारी धातुएं (heavy metals) होती हैं, जो लिवर को गंभीर नुकसान पहुंचाकर 'एक्यूट लिवर फेलियर' (Acute Liver Failure) का कारण बन सकती हैं, जो जानलेवा है।" },
      { q: "पित्त नली में पथरी के कारण पीलिया कैसे होता है?", a: "पित्त नली में पथरी फंसने से लिवर से निकलने वाला पित्त (bile) आंत में नहीं जा पाता और वापस खून में मिल जाता है, जिससे पीलिया हो जाता है। इसे दूरबीन प्रक्रिया (ERCP) से ठीक किया जाता है।" },
      { q: "हेपेटाइटिस बी और सी (Hepatitis B & C) क्या हैं?", a: "ये रक्त-जनित वायरल संक्रमण हैं जो लिवर को धीरे-धीरे नुकसान पहुंचाते हैं और आगे चलकर सिरोसिस या लिवर कैंसर का कारण बन सकते हैं। इनका इलाज सुरक्षित एंटीवायरल दवाओं से किया जाता है।" }
    ],
    relatedConditions: ["fatty-liver", "liver-cirrhosis"],
    relatedProcedures: ["ercp", "cholangioscopy", "ehl-biopsy"],
    relatedArticles: ["jaundice-symptoms-causes", "sgpt-sgot-blog", "fibroscan-test-blog"]
  }
};

export function getSymptomBySlug(slug: string): SymptomDataV2 | null {
  return SYMPTOMS_DATA_V2[slug] || null;
}

export function getAllSymptomSlugs(): string[] {
  return Object.keys(SYMPTOMS_DATA_V2);
}
