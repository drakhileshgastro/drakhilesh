export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  titleHindi: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  emoji: string;
  color: string;
  introEn: string;
  introHi: string;
  symptoms: string[];
  treatments: string[];
  whyChoose: string[];
  faqs: ServiceFAQ[];
}

export const ALL_SERVICES: ServiceData[] = [
  {
    slug: "fatty-liver",
    title: "Fatty Liver Treatment",
    titleHindi: "फैटी लिवर का इलाज",
    h1: "Fatty Liver Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaTitle: "Fatty Liver Treatment in Ranchi | Dr. Akhilesh Yadav — Gastroenterologist",
    metaDescription: "Expert fatty liver (NAFLD/NASH) treatment in Ranchi by Dr. Akhilesh Yadav, DM Gastroenterology. Diet plan, medication & lifestyle guidance. Book appointment at Orchid Medical Centre.",
    targetKeyword: "fatty liver treatment Ranchi",
    emoji: "🫀",
    color: "teal",
    introEn: "Fatty liver disease (Non-Alcoholic Fatty Liver Disease / NAFLD) is one of the most common liver conditions in India today, affecting nearly 1 in 3 adults. In fatty liver, excess fat accumulates in liver cells, causing inflammation and, if untreated, can progress to liver cirrhosis or liver failure. The good news: when detected early, fatty liver is completely reversible with the right diet, lifestyle changes, and medical guidance.\n\nDr. Akhilesh Yadav, DM Gastroenterology at Orchid Medical Centre, Ranchi, specialises in diagnosing and treating all stages of fatty liver — from mild NAFLD to advanced NASH (Non-Alcoholic Steatohepatitis). He uses ultrasound, liver function tests (LFT), and FibroScan to accurately assess liver health and design a personalised treatment plan.",
    introHi: "फैटी लिवर (NAFLD) एक ऐसी बीमारी है जिसमें लिवर में अतिरिक्त वसा (fat) जमा हो जाती है। यह बीमारी आज भारत में बहुत आम है — हर 3 में से 1 व्यक्ति को है। शुरुआती अवस्था में सही खानपान और इलाज से फैटी लिवर पूरी तरह ठीक हो जाता है। डॉ. अखिलेश यादव रांची में फैटी लिवर के सबसे अनुभवी विशेषज्ञ हैं। वे हिंदी में समझाते हैं, diet chart देते हैं और पूरी देखभाल करते हैं।",
    symptoms: [
      "पेट के ऊपरी दाहिने हिस्से में हल्का दर्द या भारीपन",
      "बिना कारण थकान और कमज़ोरी",
      "भूख कम लगना",
      "पेट में गैस और बेचैनी",
      "कोई लक्षण नहीं — ultrasound में पता चलता है",
      "वज़न बढ़ना या मोटापा",
    ],
    treatments: [
      "Ultrasound & FibroScan to assess fat accumulation and liver stiffness",
      "Personalised diet plan — low-fat, low-sugar, high-fibre Indian diet",
      "Medication to reduce liver inflammation (when required)",
      "Weight loss programme with BMI monitoring",
      "Regular liver function tests (LFT) for progress tracking",
      "Lifestyle counselling — exercise, alcohol avoidance, sleep",
    ],
    whyChoose: [
      "DM Gastroenterology — highest qualification in liver disease",
      "FibroScan facility at Orchid Medical Centre, Ranchi",
      "Diet counselling in Hindi — desi food chart provided",
      "4,000+ patients treated from Jharkhand, Bihar & Chhattisgarh",
      "Transparent diagnosis — no unnecessary tests",
    ],
    faqs: [
      {
        q: "क्या फैटी लिवर पूरी तरह ठीक हो सकता है?",
        a: "हाँ, अगर Grade 1 या Grade 2 है तो सही diet और lifestyle से 3-6 महीने में पूरी तरह ठीक हो सकता है। Grade 3 (NASH) में medication और close monitoring ज़रूरी होती है।",
      },
      {
        q: "Fatty liver में क्या खाना चाहिए और क्या नहीं?",
        a: "खाएं: सब्ज़ियाँ, दाल, ओट्स, फल (कम मीठे), हरी चाय। बिल्कुल नहीं: तला हुआ खाना, मैदा, मिठाई, शराब, packaged juice। Dr. Akhilesh appointment में personal diet chart देते हैं।",
      },
      {
        q: "Fatty liver की जाँच कैसे होती है?",
        a: "पेट का ultrasound सबसे आम test है। FibroScan से liver की stiffness पता चलती है। Blood test (LFT, lipid profile, blood sugar) भी ज़रूरी होते हैं।",
      },
      {
        q: "क्या fatty liver से liver cancer हो सकता है?",
        a: "अगर NAFLD को ignore किया जाए और वह NASH बन जाए, फिर cirrhosis — तो yes, liver cancer का risk बढ़ सकता है। इसीलिए early treatment बहुत ज़रूरी है।",
      },
    ],
  },

  {
    slug: "jaundice",
    title: "Jaundice (Pilia) Treatment",
    titleHindi: "पीलिया का इलाज",
    h1: "Jaundice Doctor in Ranchi | Pilia Specialist — Dr. Akhilesh Yadav",
    metaTitle: "Jaundice Doctor in Ranchi | Best Pilia Specialist Jharkhand — Dr. Akhilesh Yadav",
    metaDescription: "Expert jaundice (pilia) treatment in Ranchi by Dr. Akhilesh Yadav, DM Gastroenterologist. Fast diagnosis, liver jaundice, obstructive jaundice & neonatal jaundice. Book now.",
    targetKeyword: "jaundice doctor Ranchi pilia specialist Jharkhand",
    emoji: "👁️",
    color: "gold",
    introEn: "Jaundice (Pilia) is a condition where the skin and whites of the eyes turn yellow due to excess bilirubin in the blood. It is a symptom, not a disease itself — and identifying the underlying cause is critical. Jaundice can result from liver disease (hepatitis, cirrhosis), bile duct obstruction (gallstones, tumours), or blood disorders (haemolytic anaemia).\n\nDr. Akhilesh Yadav, DM Gastroenterology at Orchid Medical Centre, Ranchi, provides rapid diagnosis of all types of jaundice using LFT, bilirubin levels, MRCP, and ERCP. He has treated hundreds of jaundice patients from across Jharkhand, Bihar and Chhattisgarh, including complex obstructive and hepatic jaundice cases.",
    introHi: "पीलिया (Jaundice) में त्वचा और आँखें पीली हो जाती हैं — यह खून में bilirubin बढ़ने के कारण होता है। पीलिया के कई कारण हो सकते हैं — लिवर की बीमारी, पित्त नली में रुकावट, या खून की कमी। सही कारण पहचाने बिना इलाज नहीं होता। डॉ. अखिलेश यादव पीलिया के सभी प्रकारों में माहिर हैं और जल्दी से सटीक diagnosis करते हैं।",
    symptoms: [
      "आँखों और त्वचा का पीला होना",
      "गहरे पीले रंग का पेशाब (dark urine)",
      "हल्के रंग का मल (pale stools)",
      "पेट में दर्द — खासकर ऊपरी दाहिनी तरफ",
      "बुखार, उल्टी और थकान",
      "खुजली (obstructive jaundice में)",
    ],
    treatments: [
      "Bilirubin & LFT blood tests for rapid diagnosis",
      "Ultrasound abdomen & MRCP imaging",
      "ERCP for bile duct obstruction (gallstones, strictures)",
      "Antiviral treatment for hepatitis-related jaundice",
      "IV fluids and supportive care for acute liver jaundice",
      "Surgery coordination for tumour-related obstruction",
    ],
    whyChoose: [
      "Same-day diagnosis in most jaundice cases",
      "ERCP available at Orchid Medical Centre — rare in Ranchi",
      "Experience with complex obstructive jaundice cases",
      "Clear Hindi explanation of diagnosis and treatment plan",
      "Emergency consultations available for acute jaundice",
    ],
    faqs: [
      {
        q: "पीलिया में क्या खाना चाहिए?",
        a: "हल्का खाना खाएं — खिचड़ी, मूंग दाल, उबली सब्ज़ियाँ, नारियल पानी। तला, मसालेदार, घी-तेल वाला खाना बिल्कुल बंद। Alcohol सख्त मना है।",
      },
      {
        q: "पीलिया में कितने दिन में ठीक होते हैं?",
        a: "कारण पर depend करता है। Hepatitis A की वजह से हुआ पीलिया 2-4 हफ्ते में ठीक होता है। Obstructive jaundice में ERCP के बाद जल्दी सुधार होता है। Serious liver disease में ज़्यादा समय लग सकता है।",
      },
      {
        q: "क्या पीलिया संक्रामक है?",
        a: "Hepatitis A और E (जो पानी से फैलते हैं) की वजह से पीलिया हो तो वो contagious हो सकता है। लेकिन बाकी types — जैसे gallstone या liver disease — contagious नहीं होते।",
      },
      {
        q: "पीलिया के लिए doctor के पास कब जाएं?",
        a: "जैसे ही आँखें या त्वचा पीली दिखे — तुरंत doctor से मिलें। देर करने से liver को और नुकसान हो सकता है। Dark urine + पीली आँखें = emergency consultation ज़रूरी।",
      },
    ],
  },

  {
    slug: "liver-cirrhosis",
    title: "Liver Cirrhosis Treatment",
    titleHindi: "लिवर सिरोसिस का इलाज",
    h1: "Liver Cirrhosis Doctor in Ranchi | Dr. Akhilesh Yadav",
    metaTitle: "Liver Cirrhosis Treatment in Ranchi | Dr. Akhilesh Yadav — Hepatologist",
    metaDescription: "Liver cirrhosis treatment & management in Ranchi by Dr. Akhilesh Yadav, DM Hepatologist. Prevent complications, manage ascites, portal hypertension. Orchid Medical Centre.",
    targetKeyword: "liver cirrhosis doctor Ranchi",
    emoji: "🏥",
    color: "teal",
    introEn: "Liver cirrhosis is a serious condition where healthy liver tissue is gradually replaced by scar tissue (fibrosis), permanently impairing liver function. It is often the end result of long-standing liver disease — chronic hepatitis B or C, alcoholic liver disease, or untreated fatty liver (NASH). While cirrhosis cannot be fully reversed, its progression can be halted and complications can be effectively managed with expert hepatology care.\n\nDr. Akhilesh Yadav at Orchid Medical Centre, Ranchi is an experienced hepatologist who specialises in the complete management of liver cirrhosis — from diagnosis and grading (Child-Pugh, MELD score) to managing ascites, portal hypertension, hepatic encephalopathy, and preventing liver cancer.",
    introHi: "लिवर सिरोसिस में लिवर का स्वस्थ tissue धीरे-धीरे scar tissue से बदल जाता है। यह hepatitis, शराब, या लम्बे समय के fatty liver से होता है। सिरोसिस को पूरी तरह ठीक नहीं किया जा सकता, लेकिन सही इलाज से इसे रोका जा सकता है और जटिलताओं से बचाया जा सकता है। डॉ. अखिलेश यादव सिरोसिस के सभी चरणों का expert management करते हैं।",
    symptoms: [
      "पेट में पानी भरना (Ascites)",
      "पैरों में सूजन",
      "उल्टी में खून आना (Varices bleeding)",
      "पीलिया — त्वचा और आँखें पीली",
      "याददाश्त कमज़ोर होना, confusion (Hepatic Encephalopathy)",
      "अत्यधिक थकान और कमज़ोरी",
    ],
    treatments: [
      "FibroScan & liver biopsy for accurate staging",
      "Diuretics and diet for ascites management",
      "Endoscopy & band ligation for variceal bleeding",
      "Lactulose & Rifaximin for hepatic encephalopathy",
      "Antiviral therapy if hepatitis is the cause",
      "Liver transplant evaluation and referral when needed",
    ],
    whyChoose: [
      "DM Gastroenterology & Hepatology — complete liver expertise",
      "Endoscopy for variceal surveillance & treatment at Orchid",
      "Regular monitoring with LFT, AFP, and ultrasound",
      "Clear guidance on diet, medications, and alcohol avoidance",
      "Referral network for liver transplant when required",
    ],
    faqs: [
      {
        q: "क्या लिवर सिरोसिस ठीक हो सकता है?",
        a: "Cirrhosis को पूरी तरह reverse नहीं किया जा सकता। लेकिन सही इलाज से progression रोकी जा सकती है और patient अच्छी quality of life जी सकता है। Severe cases में liver transplant ही एकमात्र उपाय होता है।",
      },
      {
        q: "सिरोसिस में पेट में पानी क्यों भरता है?",
        a: "Cirrhosis के कारण portal hypertension होती है — portal vein में pressure बढ़ता है जिससे fluid पेट में जमा होने लगता है (ascites)। Diuretics और salt restriction से इसे control किया जाता है।",
      },
      {
        q: "Cirrhosis patient को शराब पीनी चाहिए?",
        a: "बिल्कुल नहीं। Alcohol cirrhosis का सबसे बड़ा कारण है और cirrhosis के बाद एक भी drop alcohol liver को बहुत नुकसान कर सकती है। यह strict medical advice है।",
      },
      {
        q: "सिरोसिस में क्या खाना चाहिए?",
        a: "कम नमक (salt-restricted diet), उच्च protein (अगर encephalopathy न हो), ताज़े फल और सब्ज़ियाँ। शराब, नमकीन packaged food और heavy meals बिल्कुल बंद।",
      },
    ],
  },

  {
    slug: "hepatitis",
    title: "Hepatitis B & C Treatment",
    titleHindi: "हेपेटाइटिस बी और सी का इलाज",
    h1: "Hepatitis B & C Treatment in Jharkhand | Dr. Akhilesh Yadav, Ranchi",
    metaTitle: "Hepatitis B & C Treatment Jharkhand | Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
    metaDescription: "Complete Hepatitis B & C treatment in Ranchi. Antiviral therapy, viral load testing, liver protection. Dr. Akhilesh Yadav at Orchid Medical Centre. Book appointment today.",
    targetKeyword: "hepatitis B C treatment Jharkhand Ranchi",
    emoji: "🧬",
    color: "teal",
    introEn: "Hepatitis B and Hepatitis C are viral infections that attack the liver, causing inflammation that can lead to chronic liver disease, cirrhosis, and liver cancer if left untreated. Hepatitis B affects over 40 million Indians and is spread through blood, sexual contact, or from mother to child. Hepatitis C spreads mainly through contaminated blood (transfusions, needles). Both conditions are manageable — and Hepatitis C is now completely curable with modern antiviral medication.\n\nDr. Akhilesh Yadav at Orchid Medical Centre, Ranchi, provides expert diagnosis and management of Hepatitis B and C, including HBsAg testing, viral load (HBV DNA, HCV RNA), genotyping, antiviral therapy, and regular monitoring to prevent progression to cirrhosis.",
    introHi: "हेपेटाइटिस B और C वायरस लिवर को infect करते हैं। Hepatitis B खून, sexual contact या माँ से बच्चे में फैलता है। Hepatitis C मुख्यतः contaminated blood से। अगर इलाज न हो तो ये cirrhosis और liver cancer तक पहुँच सकते हैं। अच्छी खबर यह है कि Hepatitis C अब पूरी तरह ठीक हो सकता है — और Hepatitis B को long-term antiviral से control किया जा सकता है।",
    symptoms: [
      "थकान और कमज़ोरी — हफ्तों तक",
      "पीलिया — आँखें और त्वचा पीली",
      "पेट में दर्द — खासकर दाहिनी तरफ",
      "जी मिचलाना और उल्टी",
      "भूख न लगना, वज़न कम होना",
      "कोई लक्षण नहीं — blood test में पता चलता है (chronic hepatitis)",
    ],
    treatments: [
      "HBsAg, Anti-HCV, HBV DNA, HCV RNA viral load testing",
      "Genotyping for Hepatitis C (to select correct antiviral)",
      "Tenofovir / Entecavir for Hepatitis B long-term suppression",
      "DAA (Direct Acting Antivirals) — Hepatitis C cure in 12 weeks",
      "Regular monitoring: LFT, viral load, AFP, ultrasound",
      "Vaccination for household contacts (Hepatitis B vaccine)",
    ],
    whyChoose: [
      "Complete Hepatitis workup done at one centre",
      "Access to latest DAA antivirals for Hepatitis C",
      "Affordable treatment guidance for rural patients",
      "Regular follow-up to prevent cirrhosis progression",
      "Family member screening and vaccination advice",
    ],
    faqs: [
      {
        q: "Hepatitis C क्या पूरी तरह ठीक हो सकता है?",
        a: "हाँ! नई DAA medicines से Hepatitis C 12 हफ्ते के इलाज में 95%+ cases में पूरी तरह ठीक हो जाता है। यह अब एक curable disease है।",
      },
      {
        q: "Hepatitis B का इलाज कितने समय तक चलता है?",
        a: "Hepatitis B का इलाज लम्बे समय तक चलता है — कई साल या जीवन भर। लक्ष्य वायरस को suppress रखना और cirrhosis रोकना होता है।",
      },
      {
        q: "क्या Hepatitis B परिवार में फैल सकता है?",
        a: "हाँ। परिवार के सदस्यों को Hepatitis B vaccine ज़रूर लगवानी चाहिए। खून, contaminated items या sexual contact से फैलता है — casual contact से नहीं।",
      },
      {
        q: "Hepatitis में क्या खाना avoid करें?",
        a: "शराब बिल्कुल बंद। तला हुआ, heavy fat वाला खाना कम करें। Fresh fruits, vegetables और अच्छे protein लें। Iron supplements doctor की सलाह के बिना नहीं।",
      },
    ],
  },

  {
    slug: "ibs",
    title: "IBS Treatment (Irritable Bowel Syndrome)",
    titleHindi: "IBS — आंत की बीमारी का इलाज",
    h1: "IBS Treatment in Ranchi | Irritable Bowel Syndrome Specialist — Dr. Akhilesh Yadav",
    metaTitle: "IBS Treatment Ranchi | Irritable Bowel Specialist Jharkhand — Dr. Akhilesh Yadav",
    metaDescription: "IBS (Irritable Bowel Syndrome) treatment in Ranchi by Dr. Akhilesh Yadav. Bloating, constipation, diarrhoea, abdominal pain — expert gut health care at Orchid Medical Centre.",
    targetKeyword: "IBS treatment Ranchi pet ki bimari doctor",
    emoji: "💊",
    color: "teal",
    introEn: "Irritable Bowel Syndrome (IBS) is one of the most common digestive disorders, affecting millions of Indians. It is a chronic condition of the large intestine characterised by abdominal pain, bloating, and altered bowel habits — diarrhoea, constipation, or both. IBS is not a structural disease but a functional disorder — meaning the gut looks normal but doesn't function correctly. Stress, diet, and gut microbiome play major roles.\n\nDr. Akhilesh Yadav provides a comprehensive approach to IBS at Orchid Medical Centre, Ranchi — including ruling out serious conditions (colonoscopy if needed), dietary guidance, stress management, and personalised medication.",
    introHi: "IBS (Irritable Bowel Syndrome) में बार-बार पेट दर्द, गैस, कब्ज़ या दस्त की समस्या होती है। यह आंत की एक functional problem है — आंत normal दिखती है लेकिन ठीक से काम नहीं करती। खाने की आदतें, तनाव, और gut bacteria इसमें बड़ी भूमिका निभाते हैं। डॉ. अखिलेश यादव IBS की सटीक diagnosis और long-term management में expert हैं।",
    symptoms: [
      "पेट में बार-बार दर्द या ऐंठन — खाने के बाद",
      "गैस, acidity और bloating",
      "कब्ज़ (constipation) या दस्त (diarrhoea) — या दोनों बारी-बारी",
      "मल में सफेद mucus",
      "शौच के बाद भी पेट साफ न लगना",
      "तनाव से लक्षण बढ़ना",
    ],
    treatments: [
      "Colonoscopy & stool tests to rule out Inflammatory Bowel Disease",
      "Low-FODMAP diet plan (tailored Indian diet guide)",
      "Antispasmodic and gut motility medication",
      "Probiotics to restore healthy gut microbiome",
      "Stress management and behavioural therapy advice",
      "Long-term follow-up with symptom diary review",
    ],
    whyChoose: [
      "Correct diagnosis — IBS vs IBD vs other conditions",
      "Indian-specific diet guidance, not generic Western advice",
      "Hindi consultation — explain your symptoms fully",
      "Colonoscopy at Orchid Medical Centre if needed",
      "Ongoing support, not just a one-time prescription",
    ],
    faqs: [
      {
        q: "IBS में कौन सा खाना avoid करें?",
        a: "Milk & dairy (if lactose intolerant), maida, fried food, gas-producing foods (rajma, chhole, broccoli in excess), caffeine, alcohol। हर patient अलग होता है — Dr. Akhilesh आपके लिए personal diet chart बनाते हैं।",
      },
      {
        q: "क्या IBS खतरनाक है?",
        a: "IBS एक chronic condition है लेकिन life-threatening नहीं है। यह cancer या serious bowel disease नहीं बनता। लेकिन quality of life बुरी तरह affect होती है — इसलिए management ज़रूरी है।",
      },
      {
        q: "IBS का इलाज कितने समय में होता है?",
        a: "IBS एक long-term condition है जिसे manage किया जाता है। सही diet और medication से 2-3 महीनों में symptoms काफी बेहतर हो जाते हैं। कुछ patients बिल्कुल ठीक भी हो जाते हैं।",
      },
      {
        q: "IBS और IBD में क्या अंतर है?",
        a: "IBS functional है — test normal आते हैं। IBD (Crohn's, Ulcerative Colitis) structural है — inflammation और tissue damage होती है। Colonoscopy से दोनों में फ़र्क होता है।",
      },
    ],
  },

  {
    slug: "acid-reflux",
    title: "Acid Reflux & GERD Treatment",
    titleHindi: "एसिडिटी और GERD का इलाज",
    h1: "Acid Reflux & GERD Specialist in Ranchi | Dr. Akhilesh Yadav",
    metaTitle: "Acid Reflux GERD Treatment Ranchi | Acidity Specialist — Dr. Akhilesh Yadav",
    metaDescription: "Chronic acid reflux & GERD treatment in Ranchi. Heartburn, acidity, regurgitation specialist Dr. Akhilesh Yadav at Orchid Medical Centre. Endoscopy, medication & lifestyle plan.",
    targetKeyword: "acidity specialist Ranchi GERD treatment",
    emoji: "🔥",
    color: "gold",
    introEn: "Gastroesophageal Reflux Disease (GERD) is a chronic condition where stomach acid flows back into the oesophagus (food pipe), causing heartburn, sour belching, and chest discomfort. While occasional acidity is normal, chronic GERD can damage the oesophagus lining and, in serious cases, lead to Barrett's oesophagus — a pre-cancerous condition. Poor diet, obesity, late-night meals, and stress are major triggers.\n\nDr. Akhilesh Yadav provides complete GERD management at Orchid Medical Centre, Ranchi — from endoscopy to confirm the diagnosis, to medication, lifestyle counselling, and surgical referral for severe cases.",
    introHi: "Acidity या GERD में पेट का acid वापस food pipe में आ जाता है जिससे सीने में जलन, खट्टी डकार और गले में जलन होती है। यह problem common है लेकिन अगर लम्बे समय तक ignore किया जाए तो food pipe को नुकसान हो सकता है। डॉ. अखिलेश यादव GERD का सटीक diagnosis और long-term treatment देते हैं।",
    symptoms: [
      "सीने में जलन (heartburn) — खाने के बाद या रात को",
      "खट्टी-कड़वी डकार (acid regurgitation)",
      "गले में जलन और खुजली",
      "निगलने में तकलीफ (dysphagia)",
      "सूखी खाँसी और गला बैठना",
      "पेट फूलना और बेचैनी",
    ],
    treatments: [
      "Upper GI Endoscopy to assess oesophageal damage",
      "H. Pylori testing and eradication if present",
      "PPI medication (proton pump inhibitors) — personalised dose",
      "Antacid & prokinetic medicines for symptom control",
      "Diet modification — avoid triggers, meal timing guidance",
      "Surgical referral (Fundoplication) for severe refractory GERD",
    ],
    whyChoose: [
      "Accurate diagnosis with endoscopy — rule out Barrett's",
      "Evidence-based medication, not just long-term antacids",
      "Diet counselling specific to Indian eating habits",
      "Endoscopy facility at Orchid Medical Centre, Ranchi",
      "Clear plan to reduce or stop medication over time",
    ],
    faqs: [
      {
        q: "Acidity में क्या नहीं खाना चाहिए?",
        a: "Spicy food, fried items, chocolate, coffee, alcohol, tomato, citrus fruits (nimbu, orange), carbonated drinks। रात को खाना सोने से 2-3 घंटे पहले खाएं। खाने के बाद तुरंत लेटें नहीं।",
      },
      {
        q: "क्या GERD में endoscopy ज़रूरी है?",
        a: "अगर 4-8 हफ्ते से ज़्यादा acidity है, निगलने में तकलीफ है, या खून आ रहा है — तो endoscopy ज़रूरी है। इससे food pipe की condition और Barrett's का पता चलता है।",
      },
      {
        q: "क्या acidity की दवाई जीवन भर खानी होगी?",
        a: "नहीं — अगर lifestyle और diet सुधार लें, weight कम करें, तो medicines धीरे-धीरे कम या बंद हो सकती हैं। Severe GERD में long-term medication या surgery की ज़रूरत पड़ सकती है।",
      },
      {
        q: "सीने में जलन और heart attack में फ़र्क कैसे करें?",
        a: "GERD की जलन खाने के बाद होती है, antacid से कम होती है। Heart attack में तेज़ दर्द, पसीना, बाँह में दर्द होता है। अगर doubt हो — emergency में जाएं। Dr. Akhilesh से जाँच करवाएं।",
      },
    ],
  },

  {
    slug: "gallstone",
    title: "Gallstone Treatment",
    titleHindi: "पित्ताशय की पथरी का इलाज",
    h1: "Gallstone Treatment in Ranchi | Pittashay Ki Pathri — Dr. Akhilesh Yadav",
    metaTitle: "Gallstone Treatment Ranchi | Pittashay Ki Pathri Doctor — Dr. Akhilesh Yadav",
    metaDescription: "Gallstone diagnosis & treatment in Ranchi by Dr. Akhilesh Yadav. ERCP, medication & surgical referral for gallbladder stones. Orchid Medical Centre, Ranchi.",
    targetKeyword: "gallstone doctor Ranchi pittashay ki pathri",
    emoji: "⚕️",
    color: "gold",
    introEn: "Gallstones are hardened deposits in the gallbladder — a small organ under the liver that stores bile. Gallstones form when bile contains too much cholesterol or bilirubin. They can range from tiny sand-like particles to golf-ball-sized stones. Many people have gallstones without symptoms — but when a stone blocks the bile duct, it causes severe upper abdominal pain (biliary colic), jaundice, and can lead to serious complications like cholecystitis or pancreatitis.\n\nDr. Akhilesh Yadav at Orchid Medical Centre, Ranchi, provides complete gallstone management — from accurate ultrasound diagnosis to ERCP for bile duct stones and surgical referral for gallbladder removal when needed.",
    introHi: "पित्ताशय (Gallbladder) में पथरी होने पर पेट के ऊपरी दाहिने हिस्से में तेज़ दर्द होता है। यह दर्द खाने के बाद — खासकर तेज़ और घी वाले खाने के बाद — बढ़ता है। अगर पथरी bile duct में फंस जाए तो पीलिया और pancreatitis हो सकता है। डॉ. अखिलेश यादव पथरी का सटीक diagnosis और सही treatment plan देते हैं।",
    symptoms: [
      "पेट के दाहिने ऊपरी हिस्से में अचानक तेज़ दर्द",
      "दर्द जो पीठ या कंधे तक जाता है",
      "खाने के बाद — खासकर तला हुआ खाने पर — दर्द बढ़ना",
      "जी मिचलाना और उल्टी",
      "पीलिया अगर bile duct blocked हो",
      "बुखार अगर infection हो (Cholecystitis)",
    ],
    treatments: [
      "Ultrasound abdomen for stone size and location",
      "MRCP/CT scan for bile duct stones",
      "ERCP to remove stones from bile duct",
      "Medication for small stones and symptom control",
      "Surgical referral — laparoscopic cholecystectomy for gallbladder stones",
      "Diet and lifestyle counselling to prevent recurrence",
    ],
    whyChoose: [
      "ERCP available at Orchid Medical Centre — removes bile duct stones",
      "Medically-guided decision: operate or observe?",
      "Clear explanation in Hindi of surgical vs non-surgical options",
      "Coordination with best laparoscopic surgeons in Ranchi",
      "Follow-up care post-ERCP and post-surgery",
    ],
    faqs: [
      {
        q: "पित्ताशय की पथरी में operation ज़रूरी है?",
        a: "अगर पथरी bile duct में है या बार-बार दर्द हो रहा है — तो operation (laparoscopic cholecystectomy) recommend होता है। Small silent stones को wait & watch approach से monitor किया जा सकता है।",
      },
      {
        q: "ERCP क्या होता है पथरी में?",
        a: "ERCP एक procedure है जिसमें endoscope से bile duct में जाकर पथरी निकाली जाती है। यह तब किया जाता है जब पथरी bile duct में फंस जाए और पीलिया या pancreatitis हो।",
      },
      {
        q: "क्या दवाई से पथरी घुल सकती है?",
        a: "Cholesterol stones छोटी हों तो कुछ medicines (Ursodeoxycholic acid) से कभी-कभी घुल सकती हैं। लेकिन यह slow process है और सभी में काम नहीं करतीं। Dr. Akhilesh से सही option जानें।",
      },
      {
        q: "पथरी में क्या खाना चाहिए?",
        a: "कम fat वाला खाना — boiled vegetables, dal, chapati, fruits। तला हुआ, घी, butter, full-fat dairy avoid करें। छोटे-छोटे meals लें — एक बार में ज़्यादा न खाएं।",
      },
    ],
  },

  {
    slug: "endoscopy",
    title: "Endoscopy (Upper GI)",
    titleHindi: "एंडोस्कोपी जाँच",
    h1: "Endoscopy in Ranchi | Upper GI Endoscopy — Dr. Akhilesh Yadav",
    metaTitle: "Endoscopy Doctor Ranchi | Upper GI Endoscopy — Dr. Akhilesh Yadav, Orchid Medical Centre",
    metaDescription: "Painless upper GI endoscopy in Ranchi by Dr. Akhilesh Yadav. Diagnose stomach ulcers, acid reflux, bleeding, H. Pylori. Walk-in & appointment. Orchid Medical Centre.",
    targetKeyword: "endoscopy doctor Ranchi",
    emoji: "🔬",
    color: "teal",
    introEn: "Upper GI Endoscopy (OGD Scopy) is a diagnostic procedure where a thin, flexible camera tube (endoscope) is passed through the mouth to examine the oesophagus, stomach, and first part of the small intestine (duodenum). It is the gold standard for diagnosing stomach ulcers, GERD, H. Pylori infection, oesophageal varices, and upper GI bleeding.\n\nAt Orchid Medical Centre, Ranchi, Dr. Akhilesh Yadav performs endoscopies with patient comfort as the priority. The procedure takes only 10-15 minutes, is minimally uncomfortable, and provides an immediate, accurate diagnosis. Sedation is available for anxious patients.",
    introHi: "Endoscopy में एक पतली camera tube मुँह के रास्ते पेट के अंदर डाली जाती है जिससे food pipe, stomach और duodenum की अंदर से जाँच होती है। यह procedure सिर्फ 10-15 मिनट की होती है और ज़्यादा दर्दनाक नहीं होती। डॉ. अखिलेश यादव endoscopy करने में highly experienced हैं और patient को पूरा comfort provide करते हैं।",
    symptoms: [
      "बार-बार पेट दर्द या जलन जो medicines से ठीक न हो",
      "निगलने में तकलीफ (dysphagia)",
      "उल्टी में खून या काला मल (upper GI bleeding)",
      "अचानक वज़न कम होना",
      "जाँच: H. Pylori infection, ulcer, या GERD confirm करना",
      "Varices screening — liver cirrhosis patients के लिए",
    ],
    treatments: [
      "OGD Scopy — diagnostic endoscopy with HD camera",
      "Biopsy for H. Pylori, cancer screening if needed",
      "Variceal band ligation for oesophageal varices",
      "Haemostasis for upper GI bleeding",
      "Sedation available for patient comfort",
      "Same-day report and doctor consultation",
    ],
    whyChoose: [
      "Experienced gastroenterologist — not a junior technician",
      "HD endoscope equipment at Orchid Medical Centre",
      "10-15 minutes procedure — patient goes home same day",
      "Biopsy and immediate findings explained in Hindi",
      "Sedation option available for anxious patients",
    ],
    faqs: [
      {
        q: "Endoscopy में दर्द होता है?",
        a: "बहुत कम। Throat spray और sedation से procedure almost painless होती है। कुछ लोगों को हल्की बेचैनी होती है — लेकिन 10-15 मिनट में खत्म हो जाती है।",
      },
      {
        q: "Endoscopy से पहले क्या करना चाहिए?",
        a: "6-8 घंटे पहले कुछ खाना-पीना नहीं (NPO)। सुबह खाली पेट आना होता है। अपनी सभी medications की list लेकर आएं।",
      },
      {
        q: "Endoscopy के बाद क्या होता है?",
        a: "Sedation दिया हो तो 30-60 मिनट rest करना होता है। उसके बाद आप खाना खा सकते हैं। Report उसी दिन मिलती है। कोई भी तकलीफ हो तो तुरंत Dr. Akhilesh को बताएं।",
      },
      {
        q: "Endoscopy कितने रुपए में होती है Ranchi में?",
        a: "Orchid Medical Centre में endoscopy की fees reasonable है। Exact cost appointment के समय बताई जाती है। Dr. Akhilesh unnecessary tests recommend नहीं करते।",
      },
    ],
  },

  {
    slug: "colonoscopy",
    title: "Colonoscopy",
    titleHindi: "कोलोनोस्कोपी जाँच",
    h1: "Colonoscopy in Ranchi | Large Bowel Examination — Dr. Akhilesh Yadav",
    metaTitle: "Colonoscopy Ranchi | Colon Cancer Screening — Dr. Akhilesh Yadav, Orchid Medical Centre",
    metaDescription: "Colonoscopy in Ranchi by Dr. Akhilesh Yadav. Diagnose colitis, polyps, colon cancer, bleeding. Expert large bowel examination at Orchid Medical Centre. Book appointment.",
    targetKeyword: "colonoscopy Ranchi",
    emoji: "🩺",
    color: "teal",
    introEn: "Colonoscopy is a procedure where a thin, flexible camera is passed through the rectum to examine the entire large intestine (colon). It is the most accurate test for diagnosing colitis, colon polyps, colorectal cancer, and lower GI bleeding. It is also used for colon cancer screening in high-risk individuals above 40-45 years.\n\nDr. Akhilesh Yadav performs colonoscopies at Orchid Medical Centre, Ranchi with a focus on patient comfort, thorough examination, and immediate reporting. Biopsy and polyp removal (polypectomy) can be performed during the same procedure.",
    introHi: "Colonoscopy में एक पतली camera tube गुदा (rectum) के रास्ते पूरी बड़ी आंत (colon) की जाँच करती है। यह colitis, polyps, colon cancer और खून आने की सबसे सटीक जाँच है। डॉ. अखिलेश यादव colonoscopy में highly experienced हैं और patient को पूरा comfort देते हैं।",
    symptoms: [
      "मल में खून आना या मल का काला होना",
      "बार-बार दस्त या कब्ज़ — लम्बे समय से",
      "पेट में दर्द जो मल त्याग से ठीक न हो",
      "Colitis या IBD की जाँच",
      "Colon cancer screening — 45+ age या family history",
      "Unexplained weight loss + bowel changes",
    ],
    treatments: [
      "Full colonoscopy with HD camera",
      "Biopsy from suspicious areas",
      "Polypectomy — polyp removal during colonoscopy",
      "Haemostasis for lower GI bleeding",
      "Diagnosis of Ulcerative Colitis, Crohn's disease",
      "Colon cancer screening and surveillance",
    ],
    whyChoose: [
      "Experienced gastroenterologist — precise, complete examination",
      "Polypectomy done during same procedure",
      "Sedation for patient comfort",
      "Clear Hindi report explanation",
      "Follow-up schedule if polyps or colitis found",
    ],
    faqs: [
      {
        q: "Colonoscopy की preparation कैसे होती है?",
        a: "procedure से 1-2 दिन पहले liquid diet और bowel cleansing solution (Polyethylene Glycol) लेना होता है। पेट पूरी तरह साफ होना ज़रूरी है। Dr. Akhilesh complete prep instructions देते हैं।",
      },
      {
        q: "Colonoscopy में दर्द होता है?",
        a: "Sedation दिया जाता है इसलिए procedure के दौरान आप लगभग सोए होते हैं। बाद में थोड़ी gas और bloating हो सकती है — जो कुछ घंटों में ठीक हो जाती है।",
      },
      {
        q: "Colonoscopy कब करानी चाहिए?",
        a: "मल में खून, लम्बे समय से bowel changes, unexplained weight loss, या 45+ age पर cancer screening के लिए। Family में colon cancer history है तो 40 से colonoscopy शुरू करें।",
      },
      {
        q: "Polyp क्या होता है और क्या यह cancer बन सकता है?",
        a: "Polyp colon की inner wall पर growths होती हैं। कुछ polyps (adenomas) अगर remove न किए जाएं तो सालों में cancer बन सकते हैं। Colonoscopy में polyp दिखे तो वहीं remove किया जाता है।",
      },
    ],
  },

  {
    slug: "ercp",
    title: "ERCP Procedure",
    titleHindi: "ERCP प्रक्रिया",
    h1: "ERCP Specialist in Jharkhand | Ranchi — Dr. Akhilesh Yadav",
    metaTitle: "ERCP Specialist Jharkhand | Bile Duct Stones Treatment Ranchi — Dr. Akhilesh Yadav",
    metaDescription: "ERCP procedure in Ranchi by Dr. Akhilesh Yadav. Remove bile duct stones, treat strictures, relieve jaundice. Advanced endoscopy at Orchid Medical Centre, Ranchi.",
    targetKeyword: "ERCP specialist Jharkhand Ranchi",
    emoji: "⚙️",
    color: "teal",
    introEn: "ERCP (Endoscopic Retrograde Cholangiopancreatography) is an advanced endoscopic procedure that combines endoscopy and X-ray to diagnose and treat problems in the bile duct and pancreatic duct. It is used primarily to remove stones stuck in the bile duct, place stents in blocked ducts, and treat strictures — all without open surgery.\n\nERCP is a specialised procedure available at very few centres in Jharkhand. Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi is one of the few gastroenterologists in the region trained and experienced in performing ERCP, making it accessible for patients from across Jharkhand, Bihar, and Chhattisgarh without travelling to metro cities.",
    introHi: "ERCP एक advanced endoscopy procedure है जिसमें bile duct और pancreatic duct की जाँच और treatment एक साथ होती है। Bile duct में फंसी पथरी निकालना, duct की रुकावट खोलना — यह सब बिना operation के ERCP से होता है। Jharkhand में यह facility बहुत कम जगह है — Dr. Akhilesh यादव रांची में ERCP के specialist हैं।",
    symptoms: [
      "पीलिया जो bile duct blockage से हो",
      "पित्ताशय की पथरी जो bile duct में फंस गई हो",
      "Acute pancreatitis — bile duct obstruction से",
      "Bile duct stricture (narrowing)",
      "Cholangitis — bile duct infection",
      "Pancreatic duct problems",
    ],
    treatments: [
      "Sphincterotomy — bile duct opening widened",
      "Stone extraction from common bile duct",
      "Stent placement for duct strictures or tumours",
      "Balloon dilation of bile duct strictures",
      "Tissue sampling (biopsy) from bile duct",
      "Nasobiliary drain for acute cholangitis",
    ],
    whyChoose: [
      "One of very few ERCP-trained gastroenterologists in Jharkhand",
      "Avoid major surgery — ERCP removes stones without operation",
      "Available at Orchid Medical Centre, Ranchi — accessible to all districts",
      "Pre and post-procedure complete care",
      "ERCP combined with other GI procedures when needed",
    ],
    faqs: [
      {
        q: "ERCP और normal endoscopy में क्या फ़र्क है?",
        a: "Normal endoscopy (OGD) सिर्फ stomach और food pipe देखती है। ERCP bile duct और pancreatic duct में जाती है और treatment भी करती है — stones निकालना, stent डालना। यह ज़्यादा advanced procedure है।",
      },
      {
        q: "ERCP के बाद कितने दिन hospital में रहना होता है?",
        a: "Simple ERCP के बाद 1-2 दिन observation के लिए रहना होता है। Complicated cases में ज़्यादा हो सकता है। Dr. Akhilesh पूरी देखभाल करते हैं।",
      },
      {
        q: "ERCP के क्या risks होते हैं?",
        a: "ERCP एक safe procedure है लेकिन कुछ risks हैं — pancreatitis (3-5%), infection, bleeding। Dr. Akhilesh careful technique से risks को minimum रखते हैं।",
      },
      {
        q: "ERCP से पहले क्या करना होता है?",
        a: "6-8 घंटे खाली पेट रहना होता है। Blood thinners बंद करने पड़ सकते हैं। Consent form sign करना होता है। Procedure से पहले Dr. Akhilesh सब explain करते हैं।",
      },
    ],
  },

  {
    slug: "pancreatitis",
    title: "Pancreatitis Treatment",
    titleHindi: "अग्नाशयशोथ (Pancreatitis) का इलाज",
    h1: "Pancreatitis Treatment in Ranchi | Dr. Akhilesh Yadav — Gastroenterologist",
    metaTitle: "Pancreatitis Treatment Ranchi | Acute & Chronic Pancreatitis — Dr. Akhilesh Yadav",
    metaDescription: "Pancreatitis treatment in Ranchi by Dr. Akhilesh Yadav. Acute & chronic pancreatitis management, pain relief, enzyme replacement. Orchid Medical Centre.",
    targetKeyword: "pancreatitis treatment Ranchi",
    emoji: "🩻",
    color: "teal",
    introEn: "Pancreatitis is inflammation of the pancreas — the organ responsible for producing digestive enzymes and insulin. Acute pancreatitis causes sudden severe abdominal pain, nausea, and vomiting, and is often triggered by gallstones or alcohol. Chronic pancreatitis develops gradually, often from repeated acute episodes, and can cause malabsorption, diabetes, and chronic pain.\n\nDr. Akhilesh Yadav at Orchid Medical Centre, Ranchi, manages both acute and chronic pancreatitis with evidence-based protocols — IV fluids, pain management, nutritional support, and addressing the underlying cause. ERCP is available for pancreatitis caused by bile duct stones.",
    introHi: "Pancreatitis में pancreas में सूजन होती है। Acute pancreatitis में अचानक पेट में बहुत तेज़ दर्द होता है। Chronic pancreatitis में लम्बे समय तक दर्द, पाचन की कमज़ोरी और diabetes हो सकती है। Gallstone और शराब इसके मुख्य कारण हैं। डॉ. अखिलेश यादव pancreatitis का expert management करते हैं।",
    symptoms: [
      "पेट में तेज़ दर्द — नाभि के ऊपर, जो पीठ तक जाता है",
      "खाने के बाद दर्द बढ़ना",
      "उल्टी और जी मिचलाना",
      "बुखार और पेट फूलना",
      "Chronic: तैलीय, बदबूदार मल (malabsorption)",
      "Chronic: वज़न कम होना, diabetes",
    ],
    treatments: [
      "CT scan & MRI for severity assessment",
      "IV fluids and pain management (hospitalisation if acute)",
      "NPO (nothing by mouth) and nutritional support",
      "ERCP if gallstone-induced pancreatitis",
      "Alcohol cessation counselling — critical for recovery",
      "Pancreatic enzyme replacement for chronic pancreatitis",
    ],
    whyChoose: [
      "Emergency management for acute pancreatitis",
      "ERCP access — addresses bile duct cause",
      "Chronic pancreatitis: long-term diet and enzyme management",
      "Coordination with surgical team for complications",
      "Hindi counselling on alcohol cessation, diet changes",
    ],
    faqs: [
      {
        q: "Pancreatitis में क्या खाना खाना चाहिए?",
        a: "Acute phase में खाना बंद करके drip (IV fluids) दिया जाता है। ठीक होने पर low-fat, bland diet — khichdi, boiled vegetables, banana। Alcohol, fried food, spicy food पूरी तरह बंद।",
      },
      {
        q: "Pancreatitis कितना serious है?",
        a: "Mild pancreatitis अस्पताल में 3-5 दिन में ठीक हो जाती है। Severe acute pancreatitis (Necrotizing Pancreatitis) life-threatening हो सकती है — ICU care ज़रूरी। Dr. Akhilesh severity के according best treatment plan बनाते हैं।",
      },
      {
        q: "क्या Pancreatitis बार-बार होती है?",
        a: "अगर कारण ठीक न किया जाए (gallstone निकाला नहीं, शराब बंद नहीं की) — तो हाँ, recurrence हो सकती है। हर episode के बाद pancreas को नुकसान होता है जो chronic pancreatitis बन सकता है।",
      },
      {
        q: "Pancreatitis और appendix pain में फ़र्क क्या है?",
        a: "Pancreatitis का दर्द पेट के बीच या ऊपरी हिस्से में होता है और पीठ तक जाता है। Appendix का दर्द दाहिनी तरफ नीचे होता है। दोनों serious हैं — तुरंत doctor से मिलें।",
      },
    ],
  },

  {
    slug: "liver-cancer",
    title: "Liver Cancer Specialist",
    titleHindi: "लिवर कैंसर विशेषज्ञ",
    h1: "Liver Cancer Specialist in Jharkhand | Dr. Akhilesh Yadav, Ranchi",
    metaTitle: "Liver Cancer Specialist Jharkhand | Hepatocellular Carcinoma — Dr. Akhilesh Yadav, Ranchi",
    metaDescription: "Liver cancer (HCC) consultation & management in Ranchi. AFP testing, ultrasound surveillance, treatment planning. Dr. Akhilesh Yadav, DM Hepatologist at Orchid Medical Centre.",
    targetKeyword: "liver cancer specialist Jharkhand Ranchi",
    emoji: "🎗️",
    color: "teal",
    introEn: "Liver cancer (Hepatocellular Carcinoma / HCC) most commonly develops in patients with underlying liver disease — cirrhosis, chronic Hepatitis B, or Hepatitis C. Early detection is critical: liver cancer caught early has significantly better treatment options and outcomes. Regular surveillance with AFP blood test and ultrasound every 6 months is recommended for all cirrhosis patients.\n\nDr. Akhilesh Yadav at Orchid Medical Centre, Ranchi provides expert liver cancer surveillance, diagnosis, and early-stage management, with referral to oncology centres for surgery, TACE (Trans-Arterial Chemoembolisation), or ablation therapy. His role is ensuring no patient with liver disease misses the surveillance window.",
    introHi: "Liver cancer (Hepatocellular Carcinoma) ज़्यादातर उन लोगों में होता है जिन्हें पहले से cirrhosis या chronic Hepatitis है। अगर जल्दी पकड़ा जाए तो treatment के अच्छे options होते हैं। Cirrhosis patients को हर 6 महीने में ultrasound और AFP test ज़रूरी है। डॉ. अखिलेश यादव liver cancer की early detection और management में expert हैं।",
    symptoms: [
      "पेट के ऊपरी दाहिने हिस्से में दर्द या गांठ",
      "अचानक वज़न कम होना",
      "पीलिया और पेट में पानी भरना",
      "थकान और भूख न लगना",
      "AFP blood test में बढ़ोतरी",
      "Cirrhosis patient में अचानक हालत बिगड़ना",
    ],
    treatments: [
      "AFP & des-gamma-carboxyprothrombin (DCP) blood markers",
      "Ultrasound + CT/MRI abdomen for tumour assessment",
      "Liver biopsy if diagnosis uncertain",
      "TACE referral for unresectable HCC",
      "Surgical resection or liver transplant referral",
      "6-monthly surveillance programme for cirrhosis patients",
    ],
    whyChoose: [
      "Regular AFP + ultrasound surveillance programme",
      "Early detection before symptoms appear",
      "Referral network to Tata Main Hospital and AIIMS for treatment",
      "Honest prognostic counselling in Hindi",
      "Complete hepatology follow-up throughout treatment",
    ],
    faqs: [
      {
        q: "Liver cancer के शुरुआती लक्षण क्या हैं?",
        a: "शुरुआती stage में कोई लक्षण नहीं होते — इसीलिए cirrhosis और Hepatitis B patients को regular ultrasound ज़रूरी है। बाद में पेट दर्द, वज़न कम होना, पीलिया होता है।",
      },
      {
        q: "Liver cancer में कितना जीते हैं?",
        a: "Early stage (Stage 1-2) में surgery या ablation से 5-year survival अच्छी होती है। Late stage में treatment options limited हैं। इसीलिए early detection — हर 6 महीने surveillance — बहुत important है।",
      },
      {
        q: "क्या Hepatitis B से liver cancer होता है?",
        a: "हाँ। Chronic Hepatitis B liver cancer का major risk factor है। Antiviral treatment और regular monitoring से risk significantly कम होती है। HBsAg positive हैं तो Dr. Akhilesh से मिलें।",
      },
      {
        q: "Liver cancer की treatment Ranchi में होती है?",
        a: "Diagnosis और initial management Orchid Medical Centre, Ranchi में होती है। Surgery, TACE या transplant के लिए Jamshedpur, Kolkata या Delhi referral किया जाता है। Dr. Akhilesh पूरी treatment journey में support करते हैं।",
      },
    ],
  },

  {
    slug: "ulcerative-colitis",
    title: "Ulcerative Colitis Treatment",
    titleHindi: "अल्सरेटिव कोलाइटिस का इलाज",
    h1: "Ulcerative Colitis Treatment in Ranchi | IBD Specialist — Dr. Akhilesh Yadav",
    metaTitle: "Ulcerative Colitis Treatment Ranchi | IBD Specialist Jharkhand — Dr. Akhilesh Yadav",
    metaDescription: "Ulcerative Colitis & Crohn's disease treatment in Ranchi by Dr. Akhilesh Yadav. Colonoscopy, 5-ASA, immunosuppressants, biologics. Orchid Medical Centre, Ranchi.",
    targetKeyword: "ulcerative colitis treatment Ranchi IBD specialist",
    emoji: "🧪",
    color: "teal",
    introEn: "Ulcerative Colitis (UC) is a chronic inflammatory bowel disease (IBD) that causes inflammation and ulcers in the large intestine (colon). It leads to persistent bloody diarrhoea, abdominal cramping, and urgency. UC is a lifelong condition that goes through flares (active disease) and remissions (symptom-free periods). With the right treatment, most patients achieve long remissions and lead normal lives.\n\nDr. Akhilesh Yadav at Orchid Medical Centre, Ranchi is experienced in managing all stages of Ulcerative Colitis and Crohn's disease — from mild 5-ASA therapy to immunosuppressants and biological agents. He performs colonoscopy for diagnosis and disease monitoring.",
    introHi: "Ulcerative Colitis में बड़ी आंत में सूजन और घाव हो जाते हैं जिससे खून के साथ दस्त, पेट दर्द और बार-बार शौच जाने की तकलीफ होती है। यह life-long condition है जो सही इलाज से control में रहती है। डॉ. अखिलेश यादव UC और Crohn's disease के expert हैं।",
    symptoms: [
      "खून के साथ दस्त — बार-बार",
      "पेट में ऐंठन और दर्द",
      "शौच करने की अचानक और तेज़ ज़रूरत",
      "बुखार और थकान — flare के दौरान",
      "वज़न कम होना",
      "Joints, skin या eyes की problems (extraintestinal manifestations)",
    ],
    treatments: [
      "Colonoscopy with biopsy for diagnosis & disease extent",
      "5-Aminosalicylates (Mesalamine) for mild-moderate UC",
      "Corticosteroids for acute flares",
      "Immunosuppressants — Azathioprine for maintenance",
      "Biologic therapy (Infliximab, Vedolizumab) for severe UC",
      "Nutritional support and IBD diet counselling",
    ],
    whyChoose: [
      "IBD-experienced gastroenterologist in Jharkhand",
      "Colonoscopy for accurate disease assessment",
      "Step-up therapy — right medicine at right stage",
      "Biologics access via referral network",
      "Long-term remission management — not just flare treatment",
    ],
    faqs: [
      {
        q: "Ulcerative Colitis में क्या खाना चाहिए?",
        a: "Flare के दौरान: low-fibre, bland diet — white rice, boiled eggs, banana, boiled chicken। Remission में: normal diet with gradual fibre increase। Spicy food, alcohol, raw vegetables avoid करें flare में।",
      },
      {
        q: "क्या Ulcerative Colitis cancer बन सकता है?",
        a: "Long-standing UC (8-10+ साल से) में colon cancer risk थोड़ा बढ़ जाता है। इसीलिए regular colonoscopy surveillance ज़रूरी है। Dr. Akhilesh proper follow-up schedule बनाते हैं।",
      },
      {
        q: "UC की दवाई कितने समय तक लेनी होती है?",
        a: "UC maintenance के लिए लम्बे समय तक (कई साल) दवाई लेनी होती है। अपने आप बंद करने से relapse होता है। Doctor की सलाह से dose adjust होती है।",
      },
      {
        q: "Ulcerative Colitis और Crohn's में क्या फ़र्क है?",
        a: "UC सिर्फ large intestine को affect करती है। Crohn's any part of GI tract — मुँह से गुदा तक — को affect कर सकती है। Colonoscopy और biopsy से दोनों में फ़र्क किया जाता है।",
      },
    ],
  },

  {
    slug: "abdominal-pain",
    title: "Abdominal Pain (Pet Dard)",
    titleHindi: "पेट दर्द का इलाज",
    h1: "Abdominal Pain Specialist in Ranchi | Pet Dard Doctor — Dr. Akhilesh Yadav",
    metaTitle: "Abdominal Pain Specialist Ranchi | Pet Dard Doctor Jharkhand — Dr. Akhilesh Yadav",
    metaDescription: "Expert abdominal pain diagnosis & treatment in Ranchi. Stomach pain, recurring pain, upper or lower abdomen — Dr. Akhilesh Yadav finds the exact cause. Book now.",
    targetKeyword: "pet dard specialist Ranchi abdominal pain doctor",
    emoji: "🫃",
    color: "gold",
    introEn: "Abdominal pain (stomach pain) is one of the most common reasons patients visit a gastroenterologist. It can range from mild indigestion to a symptom of serious conditions like appendicitis, gallstones, pancreatitis, peptic ulcer, liver disease, or bowel obstruction. Chronic, recurring, or severe abdominal pain should never be ignored — it needs an accurate diagnosis, not just painkillers.\n\nDr. Akhilesh Yadav at Orchid Medical Centre, Ranchi, is an expert at identifying the exact cause of abdominal pain — using clinical examination, blood tests, ultrasound, and endoscopy or colonoscopy as needed. He has diagnosed and treated thousands of patients with complex abdominal pain from across Jharkhand.",
    introHi: "पेट दर्द एक common problem है लेकिन इसके कारण बहुत अलग-अलग हो सकते हैं — gas, acidity, ulcer, gallstone, appendix, liver की बीमारी, आंतों की समस्या। बार-बार होने वाले या तेज़ पेट दर्द को ignore मत करें। डॉ. अखिलेश यादव पेट दर्द की exact वजह पहचानते हैं और सही इलाज देते हैं।",
    symptoms: [
      "पेट में बार-बार दर्द — हफ्तों या महीनों से",
      "खाने के बाद दर्द बढ़ना",
      "रात को नींद से जगाने वाला पेट दर्द",
      "दर्द के साथ उल्टी, बुखार या मल में खून",
      "दर्द जो पीठ, कंधे या जाँघ तक जाए",
      "वज़न कम होना, भूख न लगना",
    ],
    treatments: [
      "Complete history & physical examination",
      "Blood tests — CBC, LFT, amylase, lipase, H. Pylori",
      "Ultrasound abdomen for gallstones, liver, kidneys",
      "Endoscopy / Colonoscopy as clinically indicated",
      "Targeted treatment based on exact diagnosis",
      "Red flag signs identified and managed urgently",
    ],
    whyChoose: [
      "Systematic approach — find the cause, not just treat the pain",
      "All investigations available at one centre",
      "Experience with complex, undiagnosed abdominal pain",
      "Hindi consultation — describe pain in your own words",
      "Clear explanation of diagnosis and treatment plan",
    ],
    faqs: [
      {
        q: "पेट दर्द में doctor के पास कब जाना चाहिए?",
        a: "अगर दर्द बहुत तेज़ है, बुखार है, उल्टी में खून है, मल काला है, या दर्द 2-3 दिन से ज़्यादा है — तुरंत doctor से मिलें। Gas से होने वाला हल्का दर्द घर पर manage हो सकता है।",
      },
      {
        q: "पेट के किस हिस्से में दर्द किस बीमारी का संकेत है?",
        a: "ऊपरी दाहिना: Liver, gallbladder। ऊपरी बीच: Stomach, pancreas। नीचे दाहिना: Appendix। नीचे बायाँ: Colon। चारों तरफ: Gas, IBS। लेकिन यह guide है — exact diagnosis के लिए doctor ज़रूरी है।",
      },
      {
        q: "क्या gas से इतना तेज़ दर्द होता है?",
        a: "हाँ, severe gas colic बहुत painful हो सकती है। लेकिन अगर दर्द बार-बार हो, खाने से जुड़ा हो, या अन्य symptoms भी हों — तो gallstone, ulcer या appendix को rule out करना ज़रूरी है।",
      },
      {
        q: "Endoscopy ज़रूरी है हर पेट दर्द में?",
        a: "नहीं। Dr. Akhilesh पहले clinical examination और basic tests करते हैं। Endoscopy तब ज़रूरी है जब upper GI problem — ulcer, GERD, bleeding — suspect हो।",
      },
    ],
  },

  {
    slug: "liver-transplant",
    title: "Liver Transplant Consultation",
    titleHindi: "लिवर ट्रांसप्लांट सलाह",
    h1: "Liver Transplant Consultation in Ranchi | Dr. Akhilesh Yadav — Hepatologist",
    metaTitle: "Liver Transplant Consultation Ranchi Jharkhand | Dr. Akhilesh Yadav — Hepatologist",
    metaDescription: "Liver transplant evaluation & referral in Ranchi by Dr. Akhilesh Yadav. MELD score, transplant centre referral, pre & post-transplant care. Orchid Medical Centre, Ranchi.",
    targetKeyword: "liver transplant consultation Ranchi Jharkhand",
    emoji: "💙",
    color: "teal",
    introEn: "Liver transplant is the definitive treatment for end-stage liver disease (ESLD) — when the liver has failed beyond medical management. Conditions that may eventually require a liver transplant include decompensated cirrhosis, acute liver failure, certain liver cancers, and rare inherited metabolic liver diseases.\n\nDr. Akhilesh Yadav at Orchid Medical Centre, Ranchi, provides expert hepatology consultation to evaluate whether a patient needs liver transplant listing, calculates MELD score for urgency assessment, manages the patient's condition optimally while awaiting transplant, and refers to the best liver transplant centres — including those in Jamshedpur, Kolkata, Delhi, and Mumbai.",
    introHi: "जब liver इतना damaged हो जाए कि medicines से ठीक न हो — तो liver transplant एकमात्र उपाय होता है। Dr. Akhilesh यादव यह evaluate करते हैं कि मरीज़ को transplant की ज़रूरत है या नहीं, MELD score calculate करते हैं, और best transplant centre में refer करते हैं। साथ ही transplant तक और उसके बाद भी पूरी care करते हैं।",
    symptoms: [
      "Decompensated Cirrhosis — ascites, encephalopathy, bleeding",
      "Acute Liver Failure — sudden liver failure",
      "Recurrent variceal bleeding not controlled by other treatments",
      "Hepatocellular Carcinoma (early stage, within Milan criteria)",
      "MELD score ≥15 — high transplant priority",
      "Quality of life severely affected by liver disease",
    ],
    treatments: [
      "MELD score calculation and transplant listing assessment",
      "Optimise medical management while awaiting transplant",
      "Nutritional support and frailty management pre-transplant",
      "Referral to liver transplant centres — Jamshedpur, Kolkata, Delhi",
      "Post-transplant medication management and monitoring",
      "Living donor liver transplant (LDLT) evaluation for family donors",
    ],
    whyChoose: [
      "Honest assessment — transplant only when truly indicated",
      "MELD score monitoring with regular LFT and ultrasound",
      "Referral to reputed transplant centres across India",
      "Hindi counselling for patient and family — full transparency",
      "Post-transplant follow-up in Ranchi — no need to travel for routine visits",
    ],
    faqs: [
      {
        q: "Liver transplant कब ज़रूरी होता है?",
        a: "जब cirrhosis decompensated हो जाए — पेट में पानी जो diuretics से न जाए, बार-बार खून उल्टी, severe encephalopathy, या acute liver failure — तब transplant evaluate किया जाता है।",
      },
      {
        q: "Liver transplant का खर्च कितना होता है?",
        a: "India में liver transplant 20-30 lakh तक हो सकता है, hospital और city के हिसाब से। Ayushman Bharat और state schemes में कुछ coverage मिल सकती है। Dr. Akhilesh best affordable options में guide करते हैं।",
      },
      {
        q: "क्या घर का कोई member liver donate कर सकता है?",
        a: "हाँ। Living Donor Liver Transplant (LDLT) में family member (blood relative) liver का एक हिस्सा donate करते हैं। Donor को thorough evaluation होती है। यह safer और faster option है।",
      },
      {
        q: "Liver transplant के बाद कैसी ज़िंदगी होती है?",
        a: "Successful transplant के बाद ज़्यादातर patients normal life जीते हैं। Immunosuppressant medicines ज़िंदगी भर लेनी होती हैं। Regular follow-up ज़रूरी है — जो Ranchi में Dr. Akhilesh के साथ होती है।",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return ALL_SERVICES.map((s) => s.slug);
}
