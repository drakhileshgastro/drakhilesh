export interface BlogPost {
  slug: string;
  titleHi: string;
  titleEn: string;
  excerptHi: string;
  excerptEn: string;
  category: string;
  readTimeMins: number;
  publishedAt: string;
  emoji: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
}

export interface BlogSection {
  heading?: string;
  content: string;
  list?: string[];
  type?: "text" | "list" | "tip" | "warning";
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "fatty-liver-diet-hindi",
    titleHi: "फैटी लिवर में क्या खाएं, क्या नहीं? पूरी जानकारी — Dr. Akhilesh Yadav",
    titleEn: "Fatty Liver Diet Guide — What to Eat and Avoid",
    excerptHi: "फैटी लिवर की बीमारी को सही खानपान से ठीक किया जा सकता है। जानिए कौन सी चीज़ें खाएं और कौन सी बिल्कुल न खाएं — Dr. Akhilesh Yadav की expert advice।",
    excerptEn: "Fatty liver disease can be reversed with the right diet. Find out what to eat and avoid according to Dr. Akhilesh Yadav, Gastroenterologist, Ranchi.",
    category: "Liver Health",
    readTimeMins: 6,
    publishedAt: "June 2026",
    emoji: "🥗",
    tags: ["Fatty Liver", "Diet", "Liver Health", "NAFLD", "Hindi"],
    metaTitle: "फैटी लिवर में क्या खाएं? | Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
    metaDescription: "फैटी लिवर (NAFLD) में diet guide — क्या खाएं, क्या avoid करें, कौन से foods liver को heal करते हैं। Dr. Akhilesh Yadav, Orchid Medical Centre, Ranchi।",
    sections: [
      {
        type: "text",
        content: "फैटी लिवर (Non-Alcoholic Fatty Liver Disease — NAFLD) आज भारत की सबसे आम liver बीमारियों में से एक है। हर 3 में से 1 व्यक्ति को कोई न कोई degree का fatty liver है। लेकिन एक अच्छी खबर है — अगर शुरुआती stage में पकड़ा जाए, तो सिर्फ खानपान और जीवनशैली बदलकर फैटी लिवर को पूरी तरह ठीक किया जा सकता है।",
      },
      {
        type: "text",
        content: "मैं Dr. Akhilesh Yadav, Gastroenterologist & Hepatologist, Orchid Medical Centre, Ranchi से हूँ। अपने clinic में हज़ारों fatty liver patients को देखने के बाद मैं यह कह सकता हूँ — diet सबसे powerful medicine है।",
      },
      {
        heading: "✅ फैटी लिवर में क्या खाना चाहिए?",
        type: "list",
        content: "ये foods आपके liver को heal करने में मदद करते हैं:",
        list: [
          "हरी सब्ज़ियाँ — पालक, मेथी, करेला, लौकी, तोरई (liver detox के लिए बेहतरीन)",
          "दालें — मूंग दाल, मसूर दाल, चना दाल (plant protein, low fat)",
          "ओट्स और दलिया — fiber rich, blood sugar control करते हैं",
          "अखरोट (Walnuts) — omega-3 fatty acids से भरपूर, liver inflammation कम करते हैं",
          "लहसुन — liver enzymes activate करता है जो toxins flush करते हैं",
          "हल्दी — curcumin liver cells को protect करती है",
          "ग्रीन टी — antioxidants से liver fat कम होती है",
          "Berries और सेब — antioxidants और fiber दोनों",
          "Coffee (1-2 cup black, no sugar) — studies में liver enzymes improve करती है",
          "मछली (Rohu, Katla) — omega-3 sources, liver-friendly protein",
        ],
      },
      {
        heading: "❌ फैटी लिवर में क्या नहीं खाना चाहिए?",
        type: "list",
        content: "ये चीज़ें liver में और ज़्यादा fat जमा करती हैं:",
        list: [
          "शराब — बिल्कुल बंद करें। Non-alcoholic fatty liver में भी शराब बहुत नुकसान करती है",
          "तला हुआ खाना — समोसा, पकोड़ा, poori, chips — liver पर direct load",
          "मैदा से बनी चीज़ें — bread, biscuit, noodles, pizza, pasta",
          "मिठाई और चीनी — ladoo, barfi, cold drinks, packaged juice — liver में fat convert होती है",
          "White rice (ज़्यादा मात्रा में) — glycemic index high है, fat बनाता है",
          "Red meat — mutton, beef — saturated fat बहुत ज़्यादा",
          "Packaged और processed food — hidden sugar और trans fat",
          "Full-fat dairy — मलाई, butter, paneer (ज़्यादा मात्रा में)",
          "Fruit juice (packaged) — fiber नहीं, सिर्फ sugar",
        ],
      },
      {
        heading: "🍱 एक दिन का आदर्श Diet Plan (Hindi)",
        type: "text",
        content: "सुबह खाली पेट: 1 गिलास गर्म पानी + आधा नींबू + 1 चुटकी हल्दी\n\nनाश्ता: 1 कटोरी oats / dalia / moong dal chilla + 1 कप green tea\n\nदोपहर का खाना: 2 chapati (wheat) + 1 कटोरी sabzi + 1 कटोरी dal + salad\n\nशाम का नाश्ता: मुट्ठी भर अखरोट या roasted chana\n\nरात का खाना: 1-2 chapati + 1 कटोरी sabzi + light dal soup। रात को 8 बजे से पहले खाएं।",
      },
      {
        heading: "💪 Diet के साथ Exercise भी ज़रूरी",
        type: "text",
        content: "सिर्फ diet से 60%, exercise से 40% फर्क पड़ता है। रोज़ 30-45 मिनट तेज़ चलना (brisk walk) शुरू करें। हफ्ते में 5 दिन पर्याप्त है। Weight कम होना liver health का सबसे बड़ा indicator है — BMI 25 से नीचे रखने की कोशिश करें।",
      },
      {
        heading: "⚠️ Doctor की सलाह कब ज़रूरी है?",
        type: "warning",
        content: "अगर ultrasound में Grade 2 या Grade 3 fatty liver है, liver function tests abnormal हैं, या थकान और पेट में दर्द की शिकायत है — तो सिर्फ diet पर depend न करें। Medication और close monitoring ज़रूरी हो सकती है। Orchid Medical Centre, Ranchi में appointment लें।",
      },
    ],
  },

  {
    slug: "jaundice-symptoms-causes",
    titleHi: "पीलिया के 8 लक्षण जो आपको पहचाननी चाहिए — Dr. Akhilesh Yadav",
    titleEn: "8 Signs of Jaundice You Should Never Ignore",
    excerptHi: "पीलिया होने पर सिर्फ आंखें पीली नहीं होतीं — इसके और भी कई लक्षण हैं। जल्दी पहचानें और तुरंत डॉक्टर से मिलें।",
    excerptEn: "Jaundice is more than just yellow eyes. Recognise all 8 warning signs and know when to see a doctor immediately.",
    category: "Jaundice",
    readTimeMins: 5,
    publishedAt: "June 2026",
    emoji: "👁️",
    tags: ["Jaundice", "Pilia", "Liver", "Symptoms", "Hindi"],
    metaTitle: "पीलिया के 8 लक्षण | Jaundice Signs in Hindi — Dr. Akhilesh Yadav Ranchi",
    metaDescription: "पीलिया (Pilia/Jaundice) के 8 लक्षण जो ignore नहीं करने चाहिए। कब doctor से मिलें? Dr. Akhilesh Yadav, Gastroenterologist, Orchid Medical Centre, Ranchi।",
    sections: [
      {
        type: "text",
        content: "पीलिया (Jaundice) — हिंदी में इसे 'पिलिया' या 'पित्त' भी कहते हैं — एक ऐसी condition है जिसमें blood में bilirubin नामक yellow pigment बढ़ जाता है। यह खुद एक बीमारी नहीं है, बल्कि किसी और गंभीर समस्या का संकेत है — liver disease, bile duct blockage, या blood disorder।",
      },
      {
        type: "text",
        content: "मैं Dr. Akhilesh Yadav, Gastroenterologist, Ranchi से हूँ। अपने clinic में मैं हर हफ्ते कई ऐसे patients देखता हूँ जो सिर्फ आँखें पीली होने पर आते हैं — और अक्सर तब तक condition काफी advance हो चुकी होती है। इसीलिए यह 8 लक्षण जानना ज़रूरी है।",
      },
      {
        heading: "पीलिया के 8 मुख्य लक्षण",
        type: "list",
        content: "",
        list: [
          "आँखों का सफेद हिस्सा पीला होना — यह पहला और सबसे आम sign है। 'Scleral icterus' कहते हैं। अच्छी रोशनी में आईने में देखें।",
          "त्वचा (skin) का पीला पड़ना — पूरे शरीर की skin पीली हो सकती है, खासकर हथेली और तलवों में।",
          "गहरे पीले/भूरे रंग का पेशाब (Dark Urine) — Bilirubin पेशाब में आने लगता है जिससे color dark tea जैसा हो जाता है।",
          "हल्के रंग का मल (Pale / Clay-coloured Stools) — अगर bile flow रुक जाए तो मल का रंग बहुत हल्का या सफेद हो जाता है।",
          "पेट के दाहिनी ओर दर्द या भारीपन — Liver पर swelling या bile duct blockage का sign।",
          "बुखार और ठंड लगना — खासकर infection (cholangitis) होने पर। बुखार के साथ पीलिया = emergency।",
          "तेज़ खुजली पूरे शरीर में — Bile salts skin में जमा होते हैं जिससे असहनीय खुजली होती है।",
          "थकान, कमज़ोरी और भूख न लगना — liver बीमार होने पर energy production कम हो जाती है।",
        ],
      },
      {
        heading: "पीलिया कितने प्रकार का होता है?",
        type: "list",
        content: "Jaundice के 3 main types हैं — और हर type का कारण और इलाज अलग है:",
        list: [
          "Pre-hepatic Jaundice — Red blood cells ज़्यादा टूटने से (Hemolytic Anemia, Malaria). Bilirubin ज़्यादा बनता है।",
          "Hepatic Jaundice — Liver खुद damage है (Hepatitis A/B/C, Alcoholic liver disease, Cirrhosis). सबसे common type।",
          "Post-hepatic / Obstructive Jaundice — Bile duct में blockage (Gallstone, tumor, stricture). ERCP से इलाज।",
        ],
      },
      {
        heading: "⚠️ तुरंत Doctor के पास कब जाएं?",
        type: "warning",
        content: "इन situations में बिना देरी के hospital जाएं:\n• बुखार के साथ पीलिया (Cholangitis का sign — life-threatening)\n• पेट में बहुत तेज़ दर्द\n• उल्टी में खून या काला मल\n• Confusion या बेहोशी\n• 2-3 दिन में पीलिया तेज़ी से बढ़ रहा हो",
      },
      {
        heading: "पीलिया में क्या खाएं?",
        type: "list",
        content: "पीलिया के दौरान liver पर load कम करना ज़रूरी है:",
        list: [
          "खिचड़ी, मूंग दाल, उबली सब्ज़ियाँ — easy to digest",
          "नारियल पानी — natural electrolytes, liver-friendly",
          "सेब, पपीता, अनार — antioxidants",
          "ज़्यादा पानी — toxins flush करने के लिए",
          "शराब, तला हुआ खाना, मिठाई, मसालेदार खाना — बिल्कुल बंद",
        ],
      },
      {
        heading: "Dr. Akhilesh की सलाह",
        type: "tip",
        content: "पीलिया में घरेलू नुस्खे — गन्ने का रस, नीम का रस — कुछ हद तक comfort दे सकते हैं, लेकिन ये इलाज नहीं हैं। कारण पहचाना बिना इलाज होना संभव नहीं। Blood test, ultrasound और कभी-कभी ERCP ज़रूरी होते हैं। Orchid Medical Centre, Ranchi में आएं — उसी दिन diagnosis हो जाती है।",
      },
    ],
  },

  {
    slug: "endoscopy-kya-hota-hai",
    titleHi: "एंडोस्कोपी में दर्द होता है? — सब मिथ टूटेंगे | Dr. Akhilesh Yadav",
    titleEn: "Does Endoscopy Hurt? All Myths Busted by a Gastroenterologist",
    excerptHi: "बहुत लोग endoscopy से डरते हैं। लेकिन क्या यह सच में इतनी तकलीफदेह है? Dr. Akhilesh Yadav सब सच बताते हैं।",
    excerptEn: "Many patients fear endoscopy. Dr. Akhilesh Yadav, Gastroenterologist at Orchid Medical Centre, Ranchi, busts the most common myths.",
    category: "Procedures",
    readTimeMins: 4,
    publishedAt: "May 2026",
    emoji: "🔬",
    tags: ["Endoscopy", "Procedure", "Myths", "Hindi", "Stomach"],
    metaTitle: "Endoscopy में दर्द होता है? | एंडोस्कोपी की पूरी जानकारी — Dr. Akhilesh Ranchi",
    metaDescription: "Endoscopy (OGD Scopy) के बारे में सबसे common myths और facts। कितना दर्द होता है, कितना समय लगता है, क्या तैयारी करें? Dr. Akhilesh Yadav, Ranchi।",
    sections: [
      {
        type: "text",
        content: "मेरे clinic में रोज़ कम से कम 2-3 patients ऐसे आते हैं जिन्हें endoscopy की ज़रूरत है — लेकिन वो डर की वजह से मना कर देते हैं। और इस डर की वजह है — गलत जानकारी। आज मैं, Dr. Akhilesh Yadav, Gastroenterologist, Orchid Medical Centre, Ranchi — endoscopy के सबसे common मिथ तोड़ूंगा।",
      },
      {
        heading: "❌ मिथ 1: Endoscopy में बहुत दर्द होता है",
        type: "text",
        content: "सच: Endoscopy से पहले throat spray दी जाती है जो गले को numb कर देती है। अगर आप anxious हैं तो sedation (IV injection) दिया जाता है जिससे आप almost sleep में रहते हैं। ज़्यादातर patients को procedure के दौरान सिर्फ mild discomfort — pressure या fullness — महसूस होती है, दर्द नहीं।\n\nसच्चाई यह है कि procedure के बाद ज़्यादातर patients कहते हैं — 'इतना कम था? हम तो बहुत डरे हुए थे।'",
      },
      {
        heading: "❌ मिथ 2: Endoscopy में बहुत समय लगता है",
        type: "text",
        content: "सच: एक standard diagnostic endoscopy सिर्फ 10-15 मिनट में होती है। Sedation के साथ 30 मिनट recovery time लगती है — और उसके बाद आप घर जा सकते हैं। आप उसी दिन रिपोर्ट लेकर जा सकते हैं।",
      },
      {
        heading: "❌ मिथ 3: Endoscopy खतरनाक है",
        type: "text",
        content: "सच: Endoscopy दुनिया भर में performed होने वाले सबसे safe procedures में से एक है। Serious complications बहुत rare हैं — 1 in 10,000 से भी कम। एक experienced gastroenterologist के हाथों यह procedure बेहद safe है।",
      },
      {
        heading: "❌ मिथ 4: Endoscopy सिर्फ serious बीमारी में होती है",
        type: "text",
        content: "सच: Endoscopy कई common कारणों के लिए की जाती है — बार-बार acidity, H. Pylori infection जाँचना, stomach ulcer confirm करना, निगलने में तकलीफ, या unexplained weight loss। यह एक diagnostic tool है — बीमारी का नहीं, बल्कि बीमारी पहचानने का।",
      },
      {
        heading: "✅ Endoscopy की तैयारी कैसे करें?",
        type: "list",
        content: "",
        list: [
          "6-8 घंटे पहले कुछ खाना-पीना नहीं — सुबह खाली पेट आएं",
          "Blood thinners (Aspirin, Warfarin) के बारे में doctor को बताएं — शायद बंद करनी पड़े",
          "अपनी सभी medicines की list लेकर आएं",
          "Sedation के बाद driving मत करें — कोई साथ लेकर आएं",
          "Loose, comfortable कपड़े पहनें",
        ],
      },
      {
        heading: "Endoscopy में क्या दिखता है?",
        type: "list",
        content: "Endoscopy से इन सब की जाँच होती है:",
        list: [
          "Esophagus (food pipe) — reflux damage, varices, cancer screening",
          "Stomach — ulcers, gastritis, H. Pylori, cancer",
          "Duodenum (first part of small intestine) — ulcers, inflammation",
          "Biopsy — अगर suspicious area हो तो tissue sample लिया जाता है",
        ],
      },
      {
        heading: "Dr. Akhilesh की final advice",
        type: "tip",
        content: "अगर doctor ने endoscopy recommend की है — तो डरें नहीं, करवाएं। जितना जल्दी diagnosis होगी, उतना जल्दी और आसान इलाज होगा। Orchid Medical Centre, Ranchi में हम patient comfort को सबसे ज़्यादा priority देते हैं। Appointment लें, आएं, और देखें कि endoscopy कितनी simple है।",
      },
    ],
  },
  {
    slug: "fatty-liver-reversal-ranchi",
    titleHi: "फैटी लिवर का घरेलू इलाज और सही डाइट चार्ट — Dr. Akhilesh Yadav",
    titleEn: "Reversing Fatty Liver in Ranchi — Indian Diet & Lifestyle Guide",
    excerptHi: "फैटी लिवर (Grade 1 & 2) को सिर्फ सही खानपान और लाइफस्टाइल से 3 महीने में ठीक किया जा सकता है। जानिए क्या खाएं और क्या बचें।",
    excerptEn: "Reverse Non-Alcoholic Fatty Liver Disease (NAFLD) with a structured Indian diet plan and expert medical tips from Dr. Akhilesh Yadav in Ranchi.",
    category: "Liver Health",
    readTimeMins: 7,
    publishedAt: "July 15, 2026",
    emoji: "🥗",
    tags: ["Fatty Liver", "Indian Diet", "Ranchi", "Liver Health"],
    metaTitle: "फैटी लिवर का इलाज | Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
    metaDescription: "फैटी लिवर (Grade 1 & 2) रिवर्स करने का आसान घरेलू इलाज, इंडियन डाइट चार्ट और लाइफस्टाइल बदलाव। Dr. Akhilesh Yadav, Orchid Medical Centre, Ranchi।",
    sections: [
      {
        type: "text",
        content: "फैटी लिवर की समस्या (Non-Alcoholic Fatty Liver Disease - NAFLD) आज भारत में बहुत तेज़ी से बढ़ रही है। खानपान में गड़बड़ी, जंक फूड और शारीरिक निष्क्रियता के कारण आज हर 3 में से 1 वयस्क इस समस्या से जूझ रहा है। लेकिन अच्छी बात यह है कि फैटी लिवर के शुरुआती चरण (Grade 1 और Grade 2) पूरी तरह रिवर्सिबल हैं, यानी इन्हें सिर्फ सही खानपान और लाइफस्टाइल से पूरी तरह ठीक किया जा सकता है।"
      },
      {
        heading: "📊 फैटी लिवर के तीन चरण (Grades)",
        type: "text",
        content: "1. Grade 1 (Simple Fatty Liver): लिवर में फैट जमा होना शुरू होता है, लेकिन कोई सूजन नहीं होती। इसे ठीक करना सबसे आसान है।\n2. Grade 2 (NASH): लिवर में फैट के साथ-साथ सूजन (inflammation) आ जाती है। यहाँ डॉक्टर की सलाह और दवा की आवश्यकता पड़ सकती है।\n3. Grade 3 (Cirrhosis Risk): लिवर सेल्स डैमेज होने लगते हैं और स्कारिंग (scar tissue) बनने लगती है। इस स्थिति में तुरंत इलाज आवश्यक है।"
      },
      {
        heading: "✅ फैटी लिवर में क्या खाना चाहिए? (Diet to Eat)",
        type: "list",
        content: "लिवर से अतिरिक्त फैट हटाने और कोशिकाओं को हील करने के लिए इन खाद्य पदार्थों को अपनी डाइट में शामिल करें:",
        list: [
          "मोटे अनाज (Millets): सफेद चावल और गेहूं की जगह ज्वार, बाजरा, रागी या ओट्स का सेवन करें।",
          "हरी पत्तेदार सब्जियां: पालक, बथुआ, लौकी, तोरई और करेला लिवर डिटॉक्स में मदद करते हैं।",
          "ब्लैक कॉफी: बिना चीनी की ब्लैक कॉफी लिवर एंजाइम्स (SGPT/SGOT) को सुधारने में बेहद मददगार है।",
          "अखरोट और बादाम: इनमें मौजूद ओमेगा-3 फैटी एसिड लिवर की सूजन को कम करते हैं।",
          "छाछ और दही: प्रोबायोटिक्स आंतों के साथ-साथ लिवर की हेल्थ को भी बूस्ट करते हैं।"
        ]
      },
      {
        heading: "❌ किन चीज़ों से बिल्कुल परहेज करें? (Avoid List)",
        type: "list",
        content: "लिवर पर दबाव कम करने के लिए इन चीज़ों से दूरी बनाएं:",
        list: [
          "शराब (Alcohol): लिवर की कोशिकाओं को सीधे नष्ट करती है, इसलिए इसे तुरंत बंद करें।",
          "तली-भुनी चीज़ें: समोसा, पकोड़े, पूड़ी और बाजार के जंक फूड लिवर में फैट बढ़ाते हैं।",
          "रिफाइंड शुगर और मैदा: बिस्कुट, ब्रेड, कोल्ड ड्रिंक्स और पैकेट जूस लिवर पर एक्स्ट्रा लोड डालते हैं।"
        ]
      },
      {
        heading: "💡 डॉक्टर की सलाह",
        type: "tip",
        content: "फैटी लिवर का पता लगाने के लिए अल्ट्रासाउंड और फाइब्रोस्कैन (FibroScan) सबसे सटीक तरीके हैं। रांची में ऑर्किड मेडिकल सेंटर (Orchid Medical Centre) में उन्नत फाइब्रोस्कैन सुविधा उपलब्ध है। लिवर की स्थिति जानने के लिए समय पर जांच कराएं और डॉक्टर से सलाह लें।"
      }
    ]
  },
  {
    slug: "painless-endoscopy-ranchi",
    titleHi: "रांची में बिना दर्द के एंडोस्कोपी (Painless Endoscopy) — पूरी जानकारी और खर्च",
    titleEn: "Painless Endoscopy in Ranchi — Procedure, Anesthesia, & Cost",
    excerptHi: "एंडोस्कोपी के नाम से डर लगता है? जानिए कैसे conscious sedation (हल्की बेहोशी) से एंडोस्कोपी पूरी तरह दर्दरहित और आसान होती है।",
    excerptEn: "Learn how conscious sedation makes upper GI endoscopy 100% painless and comfortable at Orchid Medical Centre, Ranchi, along with price estimates.",
    category: "Diagnostics",
    readTimeMins: 6,
    publishedAt: "July 18, 2026",
    emoji: "🔬",
    tags: ["Endoscopy", "Painless", "Ranchi", "Diagnostics"],
    metaTitle: "बिना दर्द की एंडोस्कोपी | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "रांची में एंडोस्कोपी जांच की पूरी प्रक्रिया, बेहोशी (Anesthesia) की जानकारी और अनुमानित खर्च। Dr. Akhilesh Yadav, Orchid Medical Centre, Ranchi।",
    sections: [
      {
        type: "text",
        content: "अक्सर जब डॉक्टर पेट दर्द, लगातार गैस, सीने में जलन या निगलने में तकलीफ के लिए एंडोस्कोपी (Upper GI Endoscopy) की सलाह देते हैं, तो मरीज घबरा जाते हैं। उन्हें लगता है कि गले में पाइप डालना बहुत कष्टदायक होगा। लेकिन आधुनिक चिकित्सा में एंडोस्कोपी बेहद सरल और दर्दरहित है।"
      },
      {
        heading: "❓ एंडोस्कोपी क्या है और कब आवश्यक है?",
        type: "text",
        content: "एंडोस्कोपी एक ऐसी प्रक्रिया है जिसमें एक पतली, लचीली नली (एंडोस्कोप) जिसके सिरे पर कैमरा लगा होता है, मुंह के रास्ते फूड पाइप (Esophagus), पेट (Stomach) और छोटी आंत के पहले हिस्से (Duodenum) में डाली जाती है। यह पेट के अल्सर, एसिडिटी के नुकसान, ब्लीडिंग या कैंसर की जांच के लिए सबसे सटीक तरीका है।"
      },
      {
        heading: "😴 बेहोशी (Conscious Sedation) कैसे काम करती है?",
        type: "text",
        content: "ऑर्किड मेडिकल सेंटर, रांची में हम मरीजों की सुविधा के लिए 'Conscious Sedation' का उपयोग करते हैं। इसमें मरीज को एक हल्की नींद की दवा दी जाती है जिससे वे शांत होकर सो जाते हैं। उन्हें प्रक्रिया के दौरान न तो कोई दर्द होता है, न ही घबराहट होती है। 10-15 मिनट की प्रक्रिया पूरी होने के बाद मरीज बिना किसी परेशानी के जाग जाते हैं।"
      },
      {
        heading: "💰 रांची में एंडोस्कोपी का खर्च कितना है?",
        type: "text",
        content: "रांची के प्रमुख अस्पतालों में डायग्नोस्टिक एंडोस्कोपी का खर्च लगभग ₹1,000 से ₹3,500 के बीच होता है। यदि प्रक्रिया के दौरान बायोप्सी (tissue sample) ली जाती है या कोई थैरेप्यूटिक उपचार (जैसे पॉलिप निकालना) किया जाता है, तो खर्च थोड़ा बढ़ सकता है।"
      },
      {
        heading: "📋 जांच से पहले की जरूरी तैयारी",
        type: "list",
        content: "एंडोस्कोपी से पहले इन बातों का विशेष ध्यान रखें:",
        list: [
          "कम से कम 6 से 8 घंटे तक पूरी तरह खाली पेट रहें (पानी भी न पिएं)।",
          "यदि आप खून पतला करने की दवा (जैसे एस्पिरिन) लेते हैं, तो डॉक्टर को पहले बताएं।",
          "जांच के बाद हल्की बेहोशी का असर रहने के कारण खुद ड्राइव न करें, किसी परिजन को साथ लाएं।"
        ]
      }
    ]
  },
  {
    slug: "gallstones-dissolve-myths-india",
    titleHi: "पित्त की पथरी बिना ऑपरेशन के कैसे ठीक करें? सच्चाई और मिथक",
    titleEn: "Can Gallstones Dissolve Without Surgery? Myths vs Medical Facts",
    excerptHi: "क्या पित्त की पथरी (Gallbladder Stone) नींबू रस या घरेलू नुस्खों से गल सकती है? जानिए क्यों सर्जरी ही इसका एकमात्र सुरक्षित इलाज है।",
    excerptEn: "Debunking popular online remedies for gallstones. Learn why gallbladder stones cannot dissolve naturally and why laparoscopic surgery is safe.",
    category: "Stomach Care",
    readTimeMins: 7,
    publishedAt: "July 21, 2026",
    emoji: "🟢",
    tags: ["Gallstone", "Cholecystectomy", "Surgery", "Myths"],
    metaTitle: "पित्त की पथरी का सच | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "क्या पित्त की पथरी बिना ऑपरेशन गल सकती है? घरेलू नुस्खों के खतरे और दूरबीन विधि (Laparoscopy) से पथरी निकालने की सही जानकारी।",
    sections: [
      {
        type: "text",
        content: "इंटरनेट पर अक्सर 'पित्त की पथरी गलाने के जादुई नुस्खे', 'लीवर फ्लश' या 'नींबू पानी और जैतून के तेल से पथरी निकालने' जैसे दावे देखने को मिलते हैं। ये दावे न केवल झूठे हैं, बल्कि बेहद खतरनाक भी हैं। चिकित्सा विज्ञान में पित्त की पथरी को बिना ऑपरेशन गलाने का कोई प्रमाणित तरीका नहीं है।"
      },
      {
        heading: "🔴 घरेलू नुस्खों के गंभीर खतरे",
        type: "text",
        content: "पित्त की थैली (Gallbladder) से निकलने वाली नली बहुत पतली होती है। जब मरीज पथरी निकालने के लिए तरह-तरह के घरेलू नुस्खे अपनाते हैं, तो थैली में दबाव बढ़ने से पथरी खिसककर पित्त नली (Common Bile Duct - CBD) में फंस सकती है। इसके कारण मरीज को तीव्र दर्द, पीलिया (Jaundice) या अग्नाशय में गंभीर सूजन (Acute Pancreatitis) हो सकती है, जो जानलेवा हो सकता है।"
      },
      {
        heading: "⚡ पित्त की पथरी के लक्षण क्या हैं?",
        type: "list",
        content: "यदि पथरी के कारण थैली में रुकावट आ रही है, तो मरीज को ये लक्षण महसूस हो सकते हैं:",
        list: [
          "पेट के दाहिने हिस्से में पसलियों के नीचे अचानक तेज दर्द होना, जो पीठ तक फैले।",
          "भोजन करने के बाद, खासकर तैलीय भोजन के बाद मतली और उल्टी आना।",
          "रुकावट बढ़ने पर ठंड देकर बुखार आना और आँखों का पीला होना।"
        ]
      },
      {
        heading: "🏆 सही इलाज: दूरबीन विधि (Laparoscopy)",
        type: "text",
        content: "सम्पत (symptomatic) पथरी का एकमात्र स्थायी और सुरक्षित इलाज लैप्रोस्कोपिक कोलेसिस्टेक्टॉमी (Laparoscopic Cholecystectomy) यानी दूरबीन द्वारा पित्त की थैली को निकालना है। यह एक बहुत ही सुरक्षित और आम ऑपरेशन है जिसमें पेट पर बिना बड़ा कट लगाए थैली निकाल दी जाती है। ऑपरेशन के अगले ही दिन मरीज को अस्पताल से छुट्टी मिल जाती है और वे सामान्य जीवन जी सकते हैं।"
      }
    ]
  },
  {
    slug: "ibs-stress-indian-diet",
    titleHi: "आईबीएस (IBS) में क्या खाना चाहिए? इंडियन डाइट और तनाव प्रबंधन",
    titleEn: "Managing IBS on an Indian Diet — FODMAPs & Stress Relief",
    excerptHi: "bloating, gas और पेट की खराबी (IBS) से परेशान हैं? जानिए कम-FODMAP वाले भारतीय खाद्य पदार्थ और लाइफस्टाइल बदलाव।",
    excerptEn: "Learn how to manage Irritable Bowel Syndrome (IBS) with an Indian diet structure, identify food triggers, and understand the gut-brain connection.",
    category: "Gut Health",
    readTimeMins: 8,
    publishedAt: "July 24, 2026",
    emoji: "🌾",
    tags: ["IBS", "Indian Diet", "Gut Health", "FODMAP"],
    metaTitle: "आईबीएस डाइट प्लान | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Irritable Bowel Syndrome (IBS) को नियंत्रित करने के लिए आसान भारतीय डाइट चार्ट, लो-FODMAP खाद्य पदार्थ और तनाव कम करने के तरीके।",
    sections: [
      {
        type: "text",
        content: "इरिटेबल बॉवेल सिंड्रोम (IBS) आंतों की एक आम बीमारी है जिसमें पेट दर्द, मरोड़, गैस, पेट फूलना (bloating) और मल त्याग की आदतों में बार-बार बदलाव (कब्ज या दस्त) होना शामिल है। यह कोई संरचनात्मक खराबी नहीं है, बल्कि आंतों की संवेदनशीलता और काम करने के तरीके में बदलाव के कारण होता है।"
      },
      {
        heading: "🧠 तनाव और पेट का संबंध (Gut-Brain Connection)",
        type: "text",
        content: "क्या आपने कभी महसूस किया है कि परीक्षा, इंटरव्यू या ऑफिस के तनाव के समय आपका पेट खराब हो जाता है? हमारे दिमाग और आंतों के बीच एक सीधा संबंध होता है जिसे 'Gut-Brain Axis' कहते हैं। मानसिक तनाव आंतों की नसों को उत्तेजित करता है, जिससे मरोड़ और दस्त की समस्या बढ़ जाती है। इसलिए IBS के इलाज में दवा के साथ-साथ योग, ध्यान और अच्छी नींद लेना बेहद जरूरी है।"
      },
      {
        heading: "🍲 भारतीय आहार में क्या खाएं? (IBS Friendly Diet)",
        type: "list",
        content: "आंतों को शांत रखने के लिए इन सुपाच्य खाद्य पदार्थों का सेवन करें:",
        list: [
          "दही और छाछ (प्रोबायोटिक्स): ये पेट के अच्छे बैक्टीरिया को बढ़ाते हैं।",
          "हल्की हरी सब्जियां: लौकी, तोरई, कद्दू, और करेला आसानी से पच जाते हैं।",
          "चावल और दलिया: सफेद चावल और ओट्स फाइबर के अच्छे स्रोत हैं जो पेट को परेशान नहीं करते।",
          "पके केले: यह घुलनशील फाइबर का अच्छा स्रोत है और आंतों को राहत देता है।"
        ]
      },
      {
        heading: "🚫 किन चीज़ों से परहेज करें? (Triggers)",
        type: "list",
        content: "इन चीज़ों से परहेज करें क्योंकि ये आंतों में गैस और मरोड़ बढ़ाती हैं:",
        list: [
          "भारी दालें: राजमा, काबुली चना, उड़द दाल पेट में गैस बनाते हैं।",
          "दूध और पनीर (Lactose): कई IBS मरीजों को दूध पचाने में कठिनाई होती है।",
          "ज्यादा चाय, कॉफी और कोल्ड ड्रिंक्स: कैफीन आंतों की गति को तेज कर दस्त का कारण बनता है।",
          "अत्यधिक तीखा और मसालेदार भोजन।"
        ]
      }
    ]
  },
  {
    slug: "gerd-acid-reflux-cure-ranchi",
    titleHi: "एसिडिटी और सीने में जलन से हमेशा के लिए छुटकारा कैसे पाएं?",
    titleEn: "How to Cure GERD & Acid Reflux Permanently",
    excerptHi: "क्या आप हर दिन गैस/एसिडिटी की दवा (Pantocid/Omez) खाते हैं? जानिए इसे हमेशा के लिए रोकने के सुरक्षित तरीके और लाइफस्टाइल नियम।",
    excerptEn: "Taper off daily antacids and heal chronic GERD/acid reflux with structural lifestyle changes and clinical guidance from Dr. Akhilesh Yadav.",
    category: "Stomach Care",
    readTimeMins: 7,
    publishedAt: "July 27, 2026",
    emoji: "🔥",
    tags: ["GERD", "Acid Reflux", "Heartburn", "PPIs"],
    metaTitle: "एसिडिटी का स्थायी इलाज | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "सीने में जलन, गले में अटकाव (Globus) और एसिड रिफ्लक्स (GERD) का स्थायी समाधान। बिना दवा एसिडिटी ठीक करने के लाइफस्टाइल नियम।",
    sections: [
      {
        type: "text",
        content: "आजकल बहुत से लोग हर सुबह खाली पेट एसिडिटी की दवा (जैसे Pantocid, Omez, Rantac) खाने के आदी हो चुके हैं। वे सोचते हैं कि यह सामान्य है, लेकिन लंबे समय तक बिना डॉक्टर की सलाह के इन दवाओं को खाना शरीर में कैल्शियम की कमी, आंतों के इन्फेक्शन और किडनी पर असर डाल सकता है। एसिड रिफ्लक्स (GERD) का इलाज लाइफस्टाइल में सुधार से संभव है।"
      },
      {
        heading: "🛑 क्या आपके गले में कुछ अटका हुआ महसूस होता है?",
        type: "text",
        content: "कई मरीजों को गले में हमेशा कुछ अटका हुआ (Globus sensation) या खराश महसूस होती है, साथ ही सूखी खांसी आती है। वे सोचते हैं कि उन्हें गले की बीमारी है, लेकिन वास्तव में यह 'साइलेंट रिफ्लक्स' (Laryngopharyngeal Reflux - LPR) का लक्षण है। पेट का एसिड रात में सोते समय गले तक आ जाता है और गले की परत को नुकसान पहुंचाता है।"
      },
      {
        heading: "🔑 एसिडिटी से मुक्ति के 3 सुनहरे नियम (Lifestyle Rules)",
        type: "list",
        content: "यदि आप इन तीन नियमों का कड़ाई से पालन करें, तो आपकी दवाएं हमेशा के लिए बंद हो सकती हैं:",
        list: [
          "भोजन और सोने के बीच 3 घंटे का अंतर: रात का खाना खाने के तुरंत बाद न सोएं। खाना खाने के बाद कम से कम 100 कदम टहलें।",
          "सोते समय सिर को ऊंचा रखें: अपने बिस्तर के सिरहाने को 4-6 इंच ऊपर उठाएं या वेज पिलो (wedge pillow) का उपयोग करें ताकि एसिड गुरुत्वाकर्षण के कारण ऊपर न आ पाए।",
          "छोटा और नियमित भोजन: एक बार में पेट भरकर न खाएं, बल्कि थोड़े-थोड़े अंतराल पर हल्का भोजन करें। चाय, कॉफी और सॉफ्ट ड्रिंक्स का सेवन बंद करें।"
        ]
      }
    ]
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
