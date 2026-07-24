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
  image?: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
  faqs?: { q: string; a: string }[];
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
    image: "/images/fatty-liver-diet-blog.png",
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
        content: "मैं Dr. Akhilesh Yadav, Gastroenterologist & Hepatologist, Orchid Medical Centre, Ranchi से हूँ। अपने clinic में हज़ारों fatty liver patients को देखने के बाद मैं यह कह सकता हूँ — diet सबसे powerful medicine है। अगर आप Ranchi में एक experienced [gastroenterologist से मिलना चाहते हैं](/blog/best-gastroenterologist-ranchi), तो Orchid Medical Centre आएं।",
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
    image: "/images/jaundice-symptoms-blog.png",
    titleHi: "पीलिया के 8 लक्षण जो आपको पहचाननी चाहिए — Dr. Akhilesh Yadav",
    titleEn: "8 Signs of Jaundice You Should Never Ignore",
    excerptHi: "पीलिया होने पर सिर्फ आंखें पीली नहीं होतीं — इसके और भी कई लक्षण हैं। जल्दी पहचानें और तुरंत डॉक्टर से मिलें।",
    excerptEn: "Jaundice is more than just yellow eyes. Recognise all 8 warning signs and know when to see a doctor immediately.",
    category: "Jaundice",
    readTimeMins: 5,
    publishedAt: "June 2026",
    emoji: "👁️",
    tags: ["Jaundice", "Liver", "Symptoms", "Hindi"],
    metaTitle: "पीलिया के 8 लक्षण | Jaundice Signs in Hindi — Dr. Akhilesh Yadav Ranchi",
    metaDescription: "पीलिया (Jaundice) के 8 लक्षण जो ignore नहीं करने चाहिए। कब doctor से मिलें? Dr. Akhilesh Yadav, Gastroenterologist, Orchid Medical Centre, Ranchi।",
    sections: [
      {
        type: "text",
        content: "पीलिया (Jaundice) — हिंदी में इसे 'पिलिया' या 'पित्त' भी कहते हैं — एक ऐसी condition है जिसमें blood में bilirubin नामक yellow pigment बढ़ जाता है। यह खुद एक बीमारी नहीं है, बल्कि किसी और गंभीर समस्या का संकेत है — liver disease, bile duct blockage, या blood disorder।",
      },
      {
        type: "text",
        content: "मैं Dr. Akhilesh Yadav, Gastroenterologist, Ranchi से हूँ। अपने clinic में मैं हर हफ्ते कई ऐसे patients देखता हूँ जो सिर्फ आँखें पीली होने पर आते हैं — और अक्सर तब तक condition काफी advance हो चुकी होती है। इसीलिए यह 8 लक्षण जानना ज़रूरी है। Ranchi में Jaundice specialist से मिलने के लिए [best gastroenterologist in Ranchi](/blog/best-gastroenterologist-ranchi) guide ज़रूर पढ़ें।",
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
    image: "/images/painless-endoscopy-blog.png",
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
        content: "सच: Endoscopy दुनिया भर में performed होने वाले सबसे safe procedures में से एक है। Serious complications बहुत rare हैं — 1 in 10,000 से भी कम। एक experienced gastroenterologist के हाथों यह procedure बेहद safe है। Ranchi में endoscopy के लिए [best gastroenterologist](/blog/best-gastroenterologist-ranchi) से appointment लें।",
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
        heading: "Dr. Akhilesh Yadav की final advice",
        type: "tip",
        content: "अगर doctor ने endoscopy recommend की है — तो डरें नहीं, करवाएं। जितना जल्दी diagnosis होगी, उतना जल्दी और आसान इलाज होगा। Orchid Medical Centre, Ranchi में हम patient comfort को सबसे ज़्यादा priority देते हैं। Appointment लें, आएं, और देखें कि endoscopy कितनी simple है।",
      },
    ],
    faqs: [
      {
        q: "क्या एंडोस्कोपी में दर्द होता है? — Kya Endoscopy Mein Dard Hota Hai",
        a: "नहीं, आधुनिक एंडोस्कोपी में दर्द नहीं होता। Dr. Akhilesh Yadav conscious sedation (हल्की नींद) के साथ एंडोस्कोपी करते हैं जिससे procedure के दौरान आपको कुछ भी महसूस नहीं होता। अधिकतर मरीजों को यह experience 'बिल्कुल तकलीफ नहीं हुई' — ऐसा होता है।",
      },
      {
        q: "क्या Endoscopy बिना sedation के दर्दनाक होती है?",
        a: "बिना sedation के एंडोस्कोपी असुविधाजनक हो सकती है लेकिन असहनीय नहीं। Throat spray से gag reflex काफी कम हो जाती है। Orchid Medical Centre में हम IV conscious sedation की सलाह देते हैं — जिससे आप पूरी procedure में सोते हैं और जागने पर सब ठीक हो जाता है।",
      },
      {
        q: "Endoscopy के side effects क्या हैं? — Endoscopy Ke Side Effects in Hindi",
        a: "एंडोस्कोपी के बाद सामान्य side effects: गले में हल्की खराश (1-2 दिन में ठीक), हल्का पेट फूलना, और sedation से थोड़ी नींद। ये सभी 24 घंटे में ठीक हो जाते हैं। Serious complications (bleeding, perforation) 10,000 में 1 से भी कम chance में होती हैं।",
      },
      {
        q: "Endoscopy के बाद क्या खाना चाहिए?",
        a: "एंडोस्कोपी के बाद 1-2 घंटे कुछ न खाएं जब तक throat numbness खत्म न हो। उसके बाद खिचड़ी, दाल, curd या soup लें। अगले दिन से सामान्य खाना शुरू करें। पहले दिन बहुत गर्म या मसालेदार खाना avoid करें।",
      },
      {
        q: "Endoscopy कब करानी चाहिए? — When Is Endoscopy Needed",
        a: "बार-बार acidity, खाना निगलने में तकलीफ, खून की उल्टी, पेट दर्द जो दवाओं से ठीक न हो, या unexplained weight loss — इन सभी में endoscopy ज़रूरी है। H. Pylori infection, gastritis, peptic ulcer और stomach cancer की early detection के लिए भी एंडोस्कोपी कराई जाती है।",
      },
    ],
  },
  {
    slug: "fatty-liver-reversal-ranchi",
    image: "/images/fatty-liver-diet-blog.png",
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
    image: "/images/painless-endoscopy-blog.png",
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
    image: "/images/gallstones-myths-blog.png",
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
    image: "/images/ibs-stress-blog.png",
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
    image: "/images/gerd-reflux-blog.png",
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
  },
  {
    slug: "painless-colonoscopy-ranchi-cost-preparation",
    titleHi: "रांची में दर्द रहित कोलोनोस्कोपी (Painless Colonoscopy) — तैयारी, खर्च और पूरी जानकारी",
    titleEn: "Painless Colonoscopy in Ranchi: Preparation, Cost, & What to Expect",
    excerptHi: "जानिए रांची में बिना दर्द के कोलोनोस्कोपी (Painless Colonoscopy) कैसे की जाती है। जांच की तैयारी, बेहोशी (Sedation), अनुमानित खर्च और डॉक्टर की सलाह।",
    excerptEn: "Unravel the process of painless colonoscopy. Understand bowel preparation, conscious sedation, cost at Orchid Medical Centre, Ranchi, and when it is needed.",
    category: "Diagnostics",
    readTimeMins: 6,
    publishedAt: "August 5, 2026",
    emoji: "🔍",
    image: "/images/colonoscopy-equipment.png",
    tags: [
      "Colonoscopy",
      "Painless",
      "Ranchi",
      "Diagnostics",
      "Colorectal"
    ],
    metaTitle: "Painless Colonoscopy in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "रांची में बिना दर्द के कोलोनोस्कोपी (Painless Colonoscopy) की पूरी जानकारी। जांच से पहले बाउल प्रेप (bowel prep), बेहोशी और खर्च। Dr. Akhilesh Yadav, Ranchi.",
    sections: [
      {
        type: "text",
        content: "कोलोनोस्कोपी (Colonoscopy) बड़ी आंत (Large Intestine) और मलाशय (Rectum) की जांच करने वाली एक अत्यंत महत्वपूर्ण प्रक्रिया है। कई बार मरीज पेट में लंबे समय से दर्द, लगातार दस्त, कब्ज या मल में खून आने की शिकायत पर जब डॉक्टर कोलोनोस्कोपी कराने को कहते हैं, तो अत्यधिक घबरा जाते हैं। उन्हें लगता है कि यह बहुत दर्दनाक होगा। लेकिन रांची के ऑर्किड मेडिकल सेंटर में आधुनिक तकनीक और 'Conscious Sedation' के जरिए यह जांच पूरी तरह दर्द रहित और सुरक्षित तरीके से की जाती है।"
      },
      {
        heading: "❓ कोलोनोस्कोपी क्या है और इसकी आवश्यकता क्यों होती है?",
        type: "text",
        content: "कोलोनोस्कोपी में एक पतली, लचीली नली (कोलोनोस्कोप) जिसके सिरे पर लाइट और कैमरा लगा होता है, मलाशय के रास्ते बड़ी आंत में डाली जाती है। यह डॉक्टर को पूरी आंत के अंदरूनी हिस्से को लाइव स्क्रीन पर देखने में मदद करती है। इसकी आवश्यकता मुख्यतः निम्नलिखित स्थितियों में होती है: आंत के कैंसर की शुरुआती पहचान (Colorectal Cancer Screening), आंत में पुरानी सूजन (Colitis), पॉलिप्स (polyps) की जांच और बिना कारण वजन कम होना।"
      },
      {
        heading: "😴 बेहोशी (Conscious Sedation) से दर्द रहित अनुभव",
        type: "text",
        content: "जांच के दौरान होने वाली असुविधा को खत्म करने के लिए, हम मरीजों को 'Conscious Sedation' (हल्की बेहोशी) देते हैं। इसमें मरीज एक आरामदायक नींद में चले जाते हैं। उन्हें प्रक्रिया के दौरान किसी भी दर्द या खिंचाव का अहसास नहीं होता है। जांच में सामान्यतः 15 से 30 मिनट का समय लगता है, और इसके बाद मरीज बिना किसी परेशानी या हैंगओवर के होश में आ जाते हैं।"
      },
      {
        heading: "📋 जांच से पहले की जरूरी तैयारी (Bowel Preparation)",
        type: "list",
        content: "कोलोनोस्कोपी को सफल बनाने के लिए बड़ी आंत का पूरी तरह साफ होना आवश्यक है ताकि कैमरा स्पष्ट देख सके। इसके लिए तैयारी जांच से एक दिन पहले शुरू होती है:",
        list: [
          "जांच से एक दिन पहले केवल तरल पदार्थ (लिक्विड डाइट) जैसे पानी, नारियल पानी, या साफ सूप ही लें।",
          "डॉक्टर द्वारा दी गई पेट साफ करने की दवा (laxative solution) का सेवन निर्देशानुसार करें, जिससे बार-बार दस्त होकर पेट पूरी तरह साफ हो जाए।",
          "यदि आप शुगर, बीपी या खून पतला करने वाली दवाएं (जैसे एस्पिरिन) लेते हैं, तो जांच से पहले डॉक्टर को अवश्य सूचित करें।"
        ]
      },
      {
        heading: "💰 रांची में कोलोनोस्कोपी का खर्च कितना है?",
        type: "tip",
        content: "रांची में डायग्नोस्टिक कोलोनोस्कोपी का सामान्य खर्च लगभग ₹2,500 से ₹5,000 के बीच होता है। बेहोशी (Sedation) का खर्च इसमें अलग से जुड़ सकता है। यदि जांच के दौरान कोई पॉलिप निकाला जाता है (Polypectomy) या बायोप्सी (Biopsy) के लिए सैंपल लिया जाता है, तो खर्च आंशिक रूप से बढ़ सकता है।"
      }
    ]
  },
  {
    slug: "chronic-constipation-cure-indian-diet",
    image: "/images/constipation-diet-blog.png",
    titleHi: "पुरानी कब्ज से हमेशा के लिए छुटकारा कैसे पाएं? सही डाइट और लाइफस्टाइल",
    titleEn: "How to Cure Chronic Constipation Permanently — Indian Diet & Exercises",
    excerptHi: "क्या आप पुरानी कब्ज (Constipation) से परेशान हैं और हर दिन चूर्ण या जुलाब लेते हैं? जानिए इसे हमेशा के लिए ठीक करने के सुरक्षित तरीके और सही डाइट प्लान।",
    excerptEn: "Learn the structural approach to curing chronic constipation permanently using high-fiber Indian foods, proper hydration, and healthy bowel habits.",
    category: "Stomach Care",
    readTimeMins: 6,
    publishedAt: "August 12, 2026",
    emoji: "🍎",
    tags: [
      "Constipation",
      "Diet",
      "Stomach Care",
      "Fiber",
      "Hindi"
    ],
    metaTitle: "How to Cure Chronic Constipation permanently | Dr. Akhilesh Yadav",
    metaDescription: "पुरानी कब्ज का स्थायी समाधान। डॉक्टर अखिलेश यादव से जानिए कब्ज दूर करने के लिए हाई-फाइबर भारतीय भोजन, योगासन और जुलाब (laxative) दवाओं के नुकसान।",
    sections: [
      {
        type: "text",
        content: "कब्ज (Constipation) एक ऐसी समस्या है जिससे आज हर दूसरा व्यक्ति परेशान है। बहुत से लोग इसे हल्के में लेते हैं और सालों तक विभिन्न चूर्ण या पेट साफ करने की दवाएं (Laxatives) खाते रहते हैं। यह आदत न केवल आंतों को कमजोर बनाती है, बल्कि दवाओं पर निर्भरता भी बढ़ा देती है। कब्ज कोई स्वतंत्र बीमारी नहीं है, बल्कि यह गलत खानपान और सुस्त जीवनशैली का परिणाम है। इसे जीवनशैली में बदलाव कर स्थायी रूप से ठीक किया जा सकता है।"
      },
      {
        heading: "⚠️ चूर्ण और जुलाब (Laxatives) के नियमित सेवन के खतरे",
        type: "warning",
        content: "लंबे समय तक पेट साफ करने वाली दवाएं या तेज चूर्ण खाने से आंतों की प्राकृतिक संकुचन क्षमता (peristalsis) धीमी हो जाती है। इसे 'Lazy Bowel Syndrome' कहते हैं। इसके अलावा, शरीर में पानी और आवश्यक मिनरल्स (जैसे पोटैशियम) की कमी हो सकती है। इसलिए दवाओं के बजाय प्राकृतिक तरीकों को अपनाएं।"
      },
      {
        heading: "🍲 आंतों की सफाई के लिए सर्वश्रेष्ठ भारतीय भोजन (High-Fiber Diet)",
        type: "list",
        content: "कब्ज से मुक्ति पाने के लिए अपने दैनिक आहार में इन बदलावों को शामिल करें:",
        list: [
          "फाइबर युक्त अनाज: चोकर युक्त गेहूं की रोटी, दलिया, ओट्स, और ब्राउन राइस का सेवन करें।",
          "हरी सब्जियां और फल: लौकी, तोरई, पालक, पपीता, अमरूद, और सेब को छिलके सहित (यदि संभव हो) खाएं। पपीता कब्ज के लिए सर्वोत्तम फल माना जाता है।",
          "पर्याप्त पानी: दिनभर में कम से कम 3 से 4 लीटर गुनगुना पानी पिएं। सुबह खाली पेट 2 गिलास गुनगुना पानी पीने की आदत डालें।",
          "प्रोबायोटिक्स: दोपहर के भोजन में ताजी दही या छाछ का सेवन करें, यह आंतों के मित्र बैक्टीरिया को स्वस्थ रखती है।"
        ]
      },
      {
        heading: "🏃‍♂️ योग और एक्सरसाइज का महत्व",
        type: "text",
        content: "शारीरिक रूप से सक्रिय रहने से आंतों की मांसपेशियां सक्रिय होती हैं। रोजाना 30 मिनट तेज गति से टहलें (brisk walking)। कब्ज से राहत पाने के लिए वज्रासन, पवनमुक्तासन और कपालभाति प्राणायाम अत्यंत लाभकारी हैं। भोजन करने के तुरंत बाद वज्रासन में 10 मिनट बैठना पाचन क्रिया को तेज करता है।"
      },
      {
        heading: "🚨 डॉक्टर से कब संपर्क करें?",
        type: "text",
        content: "यदि आपको कब्ज के साथ मल में खून आ रहा हो, अचानक वजन कम हो रहा हो, या पेट में असहनीय दर्द रहता हो, तो यह आंतों की गंभीर रुकावट या किसी बड़ी बीमारी का संकेत हो सकता है। ऐसी स्थिति में तुरंत गैस्ट्रोएंट्रोलॉजिस्ट से मिलकर कोलोनोस्कोपी जांच करानी चाहिए।"
      }
    ]
  },
  {
    slug: "liver-cirrhosis-stages-treatment-india",
    titleHi: "लिवर सिरोसिस (Liver Cirrhosis) के लक्षण, चरण और रांची में आधुनिक इलाज",
    titleEn: "Liver Cirrhosis Stages, Life Expectancy, and Treatment Options in India",
    excerptHi: "लिवर सिरोसिस क्या है? जानिए लिवर की गंभीर खराबी के कारण, इसके विभिन्न चरण (Stages), डाइट के नियम और रांची में उपलब्ध आधुनिक उपचार के तरीके।",
    excerptEn: "Understand Liver Cirrhosis, its development stages, life expectancy factors, and medical advancements to manage liver health under Dr. Akhilesh Yadav.",
    category: "Liver Health",
    readTimeMins: 8,
    publishedAt: "August 20, 2026",
    emoji: "🩺",
    image: "/images/fatty-liver-diet-blog.png",
    tags: [
      "Liver Cirrhosis",
      "Liver Health",
      "Hepatology",
      "Liver Transplant",
      "Hindi"
    ],
    metaTitle: "Liver Cirrhosis Stages & Treatment in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "लिवर सिरोसिस (Liver Cirrhosis) के लक्षण और चरणों की पूरी जानकारी। क्या सिरोसिस ठीक हो सकता है? जानिए इलाज के तरीके और लिवर ट्रांसप्लांट सलाह।",
    sections: [
      {
        type: "text",
        content: "लिवर सिरोसिस (Liver Cirrhosis) लिवर की एक गंभीर स्थिति है जिसमें लिवर की स्वस्थ कोशिकाएं नष्ट हो जाती हैं और उनकी जगह स्कार टिश्यू (Scar Tissue / तंतु) ले लेते हैं। यह लिवर में लंबे समय से हो रहे नुकसान (जैसे क्रॉनिक हेपेटाइटिस, फैटी लिवर या अत्यधिक शराब का सेवन) का अंतिम चरण है। जब स्कार टिश्यू बहुत अधिक बढ़ जाते हैं, तो लिवर अपना काम (जैसे खून को साफ करना, पित्त बनाना और पोषक तत्वों का भंडारण करना) बंद करने लगता है।"
      },
      {
        heading: "⚠️ लिवर सिरोसिस के मुख्य कारण",
        type: "list",
        content: "भारत में सिरोसिस होने के प्रमुख कारण निम्नलिखित हैं:",
        list: [
          "शराब का अत्यधिक और लंबे समय तक सेवन (Alcoholic Liver Disease)",
          "गैर-अल्कोहलिक फैटी लिवर (NAFLD/NASH) जो समय पर ठीक न किया गया हो",
          "क्रॉनिक हेपेटाइटिस बी और हेपेटाइटिस सी इन्फेक्शन",
          "ऑटोइम्यून लिवर बीमारियां और पित्त नलियों का बंद होना"
        ]
      },
      {
        heading: "📈 सिरोसिस के विभिन्न चरण (Stages of Cirrhosis)",
        type: "text",
        content: "चिकित्सा विज्ञान में सिरोसिस को मुख्य रूप से दो श्रेणियों में बांटा जाता है:\n1) Compensated Cirrhosis: इस शुरुआती चरण में लिवर काफी हद तक क्षतिग्रस्त होने के बावजूद अपना काम चला लेता है। मरीज में कोई स्पष्ट लक्षण दिखाई नहीं देते।\n2) Decompensated Cirrhosis: इस गंभीर चरण में लिवर पूरी तरह काम करना बंद कर देता है। मरीज के पेट में पानी भरना (Ascites), पीलिया (Jaundice), खून की उल्टी होना, या बेहोशी/भ्रम (Hepatic Encephalopathy) जैसे लक्षण दिखाई देने लगते हैं।"
      },
      {
        heading: "🥗 सिरोसिस के मरीज का डाइट प्लान (Diet Guidelines)",
        type: "list",
        content: "लिवर सिरोसिस के मरीजों के लिए आहार का विशेष ध्यान रखना आवश्यक है ताकि लिवर पर अतिरिक्त दबाव न पड़े:",
        list: [
          "नमक का सेवन न्यूनतम करें: नमक कम करने से पेट और पैरों में पानी जमा होने (सूंजन) की समस्या नियंत्रित रहती है।",
          "उच्च प्रोटीन (High Protein): डॉक्टर की सलाह पर पर्याप्त और सुपाच्य प्रोटीन (जैसे पनीर, दालें, और soyaबीन) लें, क्योंकि सिरोसिस में मांसपेशियों का नुकसान तेजी से होता है।",
          "थोड़ा-थोड़ा भोजन बार-बार खाएं: दिन में 3 भारी भोजन के बजाय 5 से 6 बार हल्का भोजन करें। सोने से पहले हल्का स्नैक (जैसे दूध या फल) लेना फायदेमंद होता है।"
        ]
      },
      {
        heading: "💉 क्या लिवर सिरोसिस ठीक हो सकता है? (Treatment)",
        type: "tip",
        content: "सिरोसिस में लिवर का जो हिस्सा पूरी तरह डैमेज हो चुका है, उसे वापस सामान्य नहीं किया जा सकता। लेकिन सही दवाओं, परहेज और लाइफस्टाइल से बचे हुए लिवर को सुरक्षित रखकर सामान्य जीवन जिया जा सकता है। अंतिम चरण (Decompensated Cirrhosis) में जब दवाएं बेअसर हो जाती हैं, तब एकमात्र विकल्प लिवर ट्रांसप्लांट (Liver Transplant) होता है, जिसके लिए रांची में डॉ. अखिलेश यादव से परामर्श लिया जा सकता है।"
      }
    ]
  },
  {
    slug: "acute-chronic-pancreatitis-diet-causes",
    image: "/images/pancreatitis-diet-blog.png",
    titleHi: "पैंक्रियाटाइटिस (Pancreatitis) क्या है? इसके लक्षण, कारण और रिकवरी डाइट",
    titleEn: "Pancreatitis Explained: Causes, Symptoms, and Safe Recovery Diet",
    excerptHi: "पैंक्रियाज (अग्न्याशय) में सूजन की समस्या को पैंक्रियाटाइटिस कहते हैं। जानिए इसके कारण, असहनीय पेट दर्द के लक्षण और रिकवरी के लिए सही खानपान।",
    excerptEn: "Learn about Pancreatitis, the difference between acute and chronic types, major causes like alcohol and gallstones, and dietary recovery paths.",
    category: "Stomach Care",
    readTimeMins: 7,
    publishedAt: "August 28, 2026",
    emoji: "🔥",
    tags: [
      "Pancreatitis",
      "Pancreas",
      "Stomach Pain",
      "Diet",
      "Hindi"
    ],
    metaTitle: "Pancreatitis Causes, Symptoms & Recovery Diet | Ranchi",
    metaDescription: "पैंक्रियाटाइटिस (Pancreatitis) क्यों होता है? जानिए इसके लक्षण, एक्यूट बनाम क्रॉनिक अंतर और पैंक्रियाज की सूजन ठीक करने के लिए जरूरी लो-फैट डाइट टिप्स.",
    sections: [
      {
        type: "text",
        content: "पैंक्रियाज (Pancreas या अग्न्याशय) हमारे पेट के पीछे स्थित एक छोटी सी ग्रंथि है, जो खाना पचाने के लिए एंजाइम और ब्लड शुगर नियंत्रित करने के लिए इंसुलिन बनाती है। जब इस ग्रंथि में किसी कारणवश सूजन आ जाती है, तो उस स्थिति को पैंक्रियाटाइटिस (Pancreatitis) कहते हैं। यह एक बेहद गंभीर स्थिति है जिसमें मरीज को असहनीय पेट दर्द होता है और तुरंत अस्पताल में भर्ती होने की आवश्यकता पड़ सकती है।"
      },
      {
        heading: "⚡ एक्यूट बनाम क्रॉनिक पैंक्रियाटाइटिस (Acute vs Chronic)",
        type: "text",
        content: "1) एक्यूट पैंक्रियाटाइटिस (Acute Pancreatitis): यह अचानक होने वाली सूजन है जो कुछ दिनों में दवाओं से ठीक हो सकती है। लेकिन गंभीर मामलों में यह जानलेवा भी हो सकती है।\n2) क्रॉनिक पैंक्रियाटाइटिस (Chronic Pancreatitis): यह लंबे समय तक रहने वाली बीमारी है जिसमें पैंक्रियाज धीरे-धीरे पूरी तरह क्षतिग्रस्त हो जाता है। इससे पाचन क्रिया खराब हो जाती है और मरीज को स्थायी रूप से डायबिटीज हो सकती है।"
      },
      {
        heading: "🔍 पैंक्रियाटाइटिस के मुख्य कारण और लक्षण",
        type: "list",
        content: "इस बीमारी के प्रमुख कारणों में शामिल हैं: पित्त की पथरी का पैंक्रियाज की नली में फंसना (Gallstones), अत्यधिक शराब का सेवन, रक्त में वसा (Triglycerides) का स्तर बहुत बढ़ना, और कुछ दवाएं। इसके मुख्य लक्षण हैं:",
        list: [
          "ऊपरी पेट में तेज दर्द जो धीरे-धीरे पीठ की तरफ जाता है (विशेषकर खाने के बाद दर्द बढ़ना)",
          "जी मिचलाना, उल्टी होना और पेट छूने पर अत्यंत संवेदनशील महसूस होना",
          "क्रॉनिक मामलों में बिना कारण वजन कम होना और चिकना, दुर्गंधयुक्त मल आना (Steatorrhea)",
          "बुखार और दिल की धड़कन तेज होना"
        ]
      },
      {
        heading: "🍲 पैंक्रियाज को आराम देने वाली रिकवरी डाइट",
        type: "list",
        content: "पैंक्रियाटाइटिस के ठीक होने के दौरान पैंक्रियाज को काम से राहत देने के लिए बहुत ही हल्का आहार लेना आवश्यक है:",
        list: [
          "लो-फैट डाइट (Low-Fat Diet): घी, तेल, मक्खन, मलाईदार दूध और तली-भुनी चीजों का सेवन पूरी तरह बंद करें।",
          "छोटा और सुपाच्य भोजन: एक बार में ज्यादा न खाएं। उबली सब्जियां, दाल का पानी, नारियल पानी, और दलिया का सेवन करें।",
          "शराब और धूम्रपान से पूर्ण परहेज: पैंक्रियाटाइटिस के मरीज के लिए अल्कोहल जहर के समान है। शराब की एक बूंद भी दोबारा गंभीर अटैक ला सकती है।",
          "एंटीऑक्सीडेंट युक्त फल: अंगूर, जामुन, सेब और हरी पत्तेदार सब्जियां पैंक्रियाज के घावों को भरने में मदद करती हैं।"
        ]
      }
    ]
  },
  {
    slug: "ulcerative-colitis-ibd-diet-management",
    titleHi: "अल्सरेटिव कोलाइटिस (Ulcerative Colitis) में डाइट चार्ट और सही लाइफस्टाइल टिप्स",
    titleEn: "Managing Ulcerative Colitis (IBD) on an Indian Diet: What to Avoid",
    excerptHi: "आंतों के गंभीर घाव और सूजन की बीमारी 'अल्सरेटिव कोलाइटिस' को नियंत्रित करने के लिए आसान भारतीय डाइट चार्ट, ट्रिगर फूड्स और डॉक्टर अखिलेश यादव की सलाह।",
    excerptEn: "Explore the difference between IBS and IBD. Find a practical guide to managing Ulcerative Colitis with a customized, soothing Indian diet during flare-ups.",
    category: "Gut Health",
    readTimeMins: 8,
    publishedAt: "September 5, 2026",
    emoji: "🍃",
    image: "/images/ibs-stress-blog.png",
    tags: [
      "Ulcerative Colitis",
      "IBD",
      "Gut Health",
      "Diet",
      "Hindi"
    ],
    metaTitle: "Managing Ulcerative Colitis on Indian Diet | Dr. Akhilesh Yadav",
    metaDescription: "अल्सरेटिव कोलाइटिस (Ulcerative Colitis) में क्या खाएं और क्या न खाएं? जानिए आंतों की सूजन और खूनी दस्त को कंट्रोल करने वाले बेस्ट इंडियन फूड्स और डाइट चार्ट.",
    sections: [
      {
        type: "text",
        content: "अल्सरेटिव कोलाइटिस (Ulcerative Colitis) एक प्रकार की इंफ्लेमेटरी बॉवेल डिजीज (IBD) है, जिसमें बड़ी आंत (Colon) और मलाशय (Rectum) की अंदरूनी परत में लंबे समय तक सूजन और छाले (घाव) हो जाते हैं। इसके कारण मरीज को पेट में मरोड़ के साथ बार-बार खूनी दस्त (blood in stool) की समस्या होती है। यह एक ऑटोइम्यून बीमारी है, जिसे दवाओं के साथ-साथ एक अनुशासित डाइट और लाइफस्टाइल से ही नियंत्रित रखा जा सकता है।"
      },
      {
        heading: "🆚 आईबीएस (IBS) बनाम आईबीडी (IBD) में अंतर",
        type: "text",
        content: "कई लोग IBS (इरिटेबल बॉवेल सिंड्रोम) और IBD (इंफ्लेमेटरी बॉवेल डिजीज) को एक ही समझ लेते हैं, लेकिन ये पूरी तरह अलग हैं। IBS आंतों की केवल संवेदनशीलता की समस्या है जिसमें आंतों को कोई भौतिक नुकसान नहीं होता। वहीं, IBD (जैसे अल्सरेटिव कोलाइटिस) आंतों की संरचनात्मक बीमारी है जिसमें आंतों में घाव और सूजन आ जाती है, जो कि गंभीर है और नियमित डॉक्टरी इलाज मांगती है।"
      },
      {
        heading: "🍲 फ्लेयर-अप (दौरे) के दौरान क्या खाएं? (Soothing Foods)",
        type: "list",
        content: "जब बीमारी एक्टिव हो (दस्त और ब्लीडिंग हो रही हो), तब आंतों को आराम देने के लिए निम्नलिखित सुपाच्य खाद्य पदार्थ लें:",
        list: [
          "सफेद चावल, खिचड़ी और साबूदाना (पचाने में बेहद आसान)",
          "पका हुआ केला और उबला हुआ सेब (बिना छिलके के)",
          "मूंग दाल का पानी या अच्छी तरह गली हुई पीली मूंग दाल",
          "छाछ या पतली दही (यदि लैक्टोज से समस्या न हो तो, यह आंतों को शांत करती है)",
          "पर्याप्त ओआरएस (ORS) घोल, नारियल पानी और सादा पानी (शरीर में पानी की कमी रोकने के लिए)"
        ]
      },
      {
        heading: "🚫 किन खाद्य पदार्थों से पूरी तरह परहेज करें? (Triggers)",
        type: "list",
        content: "अल्सरेटिव कोलाइटिस के मरीजों को इन ट्रिगर फूड्स से बचना चाहिए क्योंकि ये आंतों में जलन पैदा करते हैं:",
        list: [
          "कच्ची सब्जियां, सलाद और अत्यधिक फाइबर युक्त खाद्य पदार्थ (फ्लेयर-अप के दौरान आंतों को परेशान करते हैं)",
          "दूध और डेयरी उत्पाद (कई मरीजों में दूध दस्त और गैस को बढ़ा देता है)",
          "लाल मिर्च, गरम मसाले, और तली-भुनी चीजें",
          "चाय, कॉफी, कोल्ड ड्रिंक्स और शराब (ये आंतों को उत्तेजित करते हैं)",
          "साबुत सूखी दालें (जैसे राजमा, चना) और सूखे मेवे"
        ]
      },
      {
        heading: "🔑 महत्वपूर्ण सुझाव (Lifestyle Tips)",
        type: "tip",
        content: "दवाओं को कभी भी डॉक्टर से पूछे बिना बंद न करें, भले ही आपके लक्षण पूरी तरह ठीक हो चुके हों (Remission phase)। मानसिक तनाव आंतों की सूजन को बढ़ाता है, इसलिए योग, ध्यान और गहरी सांस लेने वाले व्यायाम करें। हर मरीज के ट्रिगर फूड्स अलग हो सकते हैं, इसलिए एक फूड डायरी बनाएं और ध्यान रखें कि किस खाद्य पदार्थ को खाने से आपकी तकलीफ बढ़ती है।"
      }
    ]
  },
  {
    slug: "ercp-procedure-cbd-stones-ranchi",
    titleHi: "ईआरसीपी (ERCP) क्या है? पित्त नली की पथरी निकालने की बिना ऑपरेशन विधि",
    titleEn: "ERCP Procedure for Common Bile Duct (CBD) Stones: Indications & Ranchi Cost",
    excerptHi: "जानिए ईआरसीपी (ERCP) जांच और इलाज के बारे में। पित्त की नली में फंसी पथरी (CBD Stone) को बिना बड़े चीरे या ऑपरेशन के निकालने की आधुनिक दूरबीन तकनीक।",
    excerptEn: "Learn about the ERCP procedure. Understand how common bile duct (CBD) stones are diagnosed and removed endoscopically, including costs in Ranchi.",
    category: "Diagnostics",
    readTimeMins: 6,
    publishedAt: "September 15, 2026",
    emoji: "🔬",
    image: "/images/endoscopy-equipment.png",
    tags: [
      "ERCP",
      "Bile Duct",
      "Gallstone",
      "Endoscopy",
      "Ranchi"
    ],
    metaTitle: "ERCP Procedure for CBD Stones in Ranchi | Cost & Details",
    metaDescription: "रांची में ईआरसीपी (ERCP) प्रक्रिया की पूरी जानकारी। पित्त नली की पथरी (CBD Stones) और पीलिया के इलाज के लिए दूरबीन विधि। Dr. Akhilesh Yadav, Orchid Ranchi.",
    sections: [
      {
        type: "text",
        content: "जब पित्त की थैली (Gallbladder) से पथरी खिसककर पित्त की मुख्य नली (Common Bile Duct - CBD) में आकर फंस जाती है, तो आंतों तक पित्त (Bile) का पहुंचना बंद हो जाता है। इसके कारण मरीज को गंभीर पेट दर्द, तेज पीलिया (Jaundice) और लिवर में इन्फेक्शन (Cholangitis) होने लगता है। इस स्थिति में पथरी निकालने के लिए किसी बड़े पेट के ऑपरेशन की आवश्यकता नहीं होती, बल्कि आधुनिक दूरबीन विधि 'ERCP' का उपयोग किया जाता है।"
      },
      {
        heading: "❓ ईआरसीपी (ERCP) क्या है?",
        type: "text",
        content: "ERCP का पूरा नाम 'Endoscopic Retrograde Cholangiopancreatography' है। यह एक विशेष एंडोस्कोपी प्रक्रिया है जिसमें मुंह के रास्ते एक लंबा, लचीला एंडोस्कोप छोटी आंत तक पहुंचाया जाता है। वहां से पित्त की नली में डाई (contrast fluid) डालकर एक्स-रे की मदद से पथरी की स्थिति देखी जाती है और विशेष उपकरणों की मदद से पथरी को खींचकर बाहर निकाल दिया जाता है। इस पूरी प्रक्रिया में पेट पर कोई चीरा या टांका नहीं लगाया जाता।"
      },
      {
        heading: "🎯 ईआरसीपी की आवश्यकता कब होती है? (Indications)",
        type: "list",
        content: "ERCP का उपयोग मुख्यतः निम्नलिखित समस्याओं के निदान और उपचार के लिए किया जाता है:",
        list: [
          "पित्त की मुख्य नली (CBD) में पथरी होने पर (CBD Stones)",
          "पित्त की नली में सिकुड़न (stricture) या कैंसर के कारण पित्त रुकने पर प्लास्टिक या मेटल की नली (Stent) डालना",
          "पैंक्रियाज की नली में रुकावट या पथरी होने पर",
          "लीवर ट्रांसप्लांट या पित्त की सर्जरी के बाद होने वाले पित्त रिसाव (Bile leak) को बंद करने के लिए"
        ]
      },
      {
        heading: "😴 बेहोशी और प्रक्रिया के दौरान की तैयारी",
        type: "text",
        content: "ERCP प्रक्रिया को पूरी तरह आरामदायक बनाने के लिए मरीज को जनरल एनेस्थीसिया या डीप सेडेशन (गहरी बेहोशी) दिया जाता है। यह प्रक्रिया कैथ लैब (Cath Lab) में की जाती है क्योंकि इसमें लगातार लाइव एक्स-रे इमेजिंग की जरूरत होती है। प्रक्रिया में सामान्यतः 30 से 45 मिनट का समय लगता है। जांच से पहले मरीज को कम से कम 8 घंटे पूरी तरह खाली पेट (NPO) रहना पड़ता है।"
      },
      {
        heading: "💰 रांची में ईआरसीपी (ERCP) का खर्च कितना है?",
        type: "tip",
        content: "रांची में ईआरसीपी प्रक्रिया का खर्च लगभग ₹20,000 से ₹45,000 के बीच होता है। यह खर्च अस्पताल, उपयोग की जाने वाली स्टेंट के प्रकार (प्लास्टिक या मेटल) और पथरी के आकार/जटिलता पर निर्भर करता है। डॉ. अखिलेश यादव रांची के ऑर्किड मेडिकल सेंटर में जटिल से जटिल ईआरसीपी प्रक्रियाएं करने के लिए जाने जाते हैं।"
      }
    ]
  },
  {
    slug: "peptic-ulcer-h-pylori-diet-cure",
    titleHi: "पेट के अल्सर (Peptic Ulcer) और H. pylori इन्फेक्शन का कारण, लक्षण और इलाज",
    titleEn: "H. Pylori Infection & Peptic Ulcers: Symptoms, Diet, and Antibiotic Treatment",
    excerptHi: "पेट और आंतों में होने वाले छालों (Peptic Ulcers) का सबसे बड़ा कारण है H. pylori बैक्टीरिया। जानिए इसके लक्षण, एंटीबायोटिक इलाज और अल्सर-फ्रेंडली डाइट।",
    excerptEn: "Understand the strong link between Helicobacter pylori bacteria and peptic ulcers. Learn about triple-therapy antibiotic cures and ulcer-safe diet charts.",
    category: "Stomach Care",
    readTimeMins: 7,
    publishedAt: "September 24, 2026",
    emoji: "🩹",
    image: "/images/gerd-reflux-blog.png",
    tags: [
      "Peptic Ulcer",
      "H. Pylori",
      "Stomach Pain",
      "Acid Reflux",
      "Hindi"
    ],
    metaTitle: "Peptic Ulcer & H. Pylori Diet & Treatment | Ranchi",
    metaDescription: "पेट के अल्सर (Stomach Ulcer) क्यों होते हैं? H. pylori संक्रमण के लक्षण, एंडोस्कोपी द्वारा जांच और आंतों के घाव जल्दी ठीक करने वाली एंटी-अल्सर डाइट गाइड.",
    sections: [
      {
        type: "text",
        content: "बहुत से लोग सोचते हैं कि पेट के अल्सर (Peptic Ulcers) केवल अत्यधिक मसालेदार भोजन खाने या मानसिक तनाव से होते हैं। लेकिन चिकित्सा विज्ञान ने यह साबित किया है कि पेट के अधिकांश अल्सर एक बैक्टीरिया के कारण होते हैं जिसे हेलीकोबैक्टर पायलोरी (Helicobacter pylori - H. pylori) कहते हैं। यह बैक्टीरिया पेट की सुरक्षात्मक परत को नुकसान पहुंचाता है, जिससे पेट का एसिड पेट की दीवारों को जलाकर घाव (अल्सर) बना देता है।"
      },
      {
        heading: "⚠️ H. pylori इन्फेक्शन और अल्सर के लक्षण",
        type: "list",
        content: "यदि आपके पेट में निम्नलिखित लक्षण हैं, तो यह पेट के अल्सर का संकेत हो सकता है:",
        list: [
          "पेट के ऊपरी हिस्से में जलन या सुई चुभने जैसा दर्द (खाली पेट होने पर दर्द का अधिक बढ़ना)",
          "खाना खाने के बाद पेट में अत्यधिक भारीपन महसूस होना या थोड़ी देर में दर्द ठीक हो जाना",
          "लगातार खट्टी डकारें आना, गैस बनना और जी मिचलाना",
          "गंभीर मामलों में काले रंग का मल आना (Melena) या खून की उल्टी होना, जो पेट के अंदर खून बहने का संकेत है"
        ]
      },
      {
        heading: "🔬 एंडोस्कोपी द्वारा सटीक जांच",
        type: "text",
        content: "पेट के अल्सर और H. pylori का पता लगाने के लिए एंडोस्कोपी (Upper GI Endoscopy) सबसे सटीक तरीका है। एंडोस्कोपी के दौरान डॉक्टर पेट की परत से एक छोटा सा सैंपल लेते हैं जिसे 'Rapid Urease Test' या बायोप्सी के लिए भेजा जाता है। इसके अलावा, H. pylori की जांच के लिए यूरिया ब्रीथ टेस्ट (Urea Breath Test) और स्टूल एंटीजन टेस्ट भी किए जाते हैं।"
      },
      {
        heading: "💊 H. pylori का इलाज (Triple Therapy)",
        type: "tip",
        content: "यदि जांच में H. pylori बैक्टीरिया पाया जाता है, तो डॉक्टर 10 से 14 दिनों का एक विशिष्ट एंटीबायोटिक कोर्स देते हैं जिसे 'H. Pylori Eradication Therapy' या ट्रिपल थैरेपी कहते हैं। इसमें एसिड कम करने वाली दवा (PPI) के साथ दो अलग-अलग एंटीबायोटिक्स दी जाती हैं। इस कोर्स को बिना छोड़े पूरा करना अत्यंत महत्वपूर्ण है ताकि बैक्टीरिया पूरी तरह नष्ट हो जाए और भविष्य में अल्सर दोबारा न हो।"
      },
      {
        heading: "🥗 अल्सर के मरीजों के लिए डाइट के नियम",
        type: "list",
        content: "अल्सर को जल्दी ठीक करने के लिए खानपान में निम्नलिखित बदलाव करें:",
        list: [
          "मिर्च-मसाले, तली चीजें, खट्टे फल (नींबू, संतरा), और सिरके का सेवन बंद करें क्योंकि ये घावों में जलन बढ़ाते हैं।",
          "चाय, कॉफी, कोल्ड ड्रिंक्स और धूम्रपान से पूरी तरह बचें। निकोटीन और कैफीन पेट में एसिड का उत्पादन बढ़ाते हैं।",
          "पत्तागोभी का रस, ठंडी दही, दलिया, लौकी की सब्जी और उबले आलू अल्सर को शांत करने में सहायक होते हैं।",
          "एक बार में ज्यादा खाने के बजाय हर 3 घंटे में थोड़ा-थोड़ा खाएं।"
        ]
      }
    ]
  },
  {
    slug: "blood-in-stool-causes-piles-vs-cancer",
    titleHi: "मल में खून आना: बवासीर (Piles) या कैंसर का संकेत? जानिए कब तुरंत डॉक्टर से मिलें",
    titleEn: "Blood in Stool: Is it Piles (Fissures) or Something Serious?",
    excerptHi: "मल में खून आने को हल्के में न लें। जानिए बवासीर (Piles) या फिशर और बड़ी आंत के कैंसर या कोलाइटिस में क्या अंतर होता है, और कब कोलोनोस्कोपी आवश्यक है।",
    excerptEn: "Blood in stool should never be ignored. Understand the critical differences between piles/fissures and colorectal cancer or IBD, and when to seek help.",
    category: "Gut Health",
    readTimeMins: 7,
    publishedAt: "October 5, 2026",
    emoji: "🚨",
    image: "/images/colonoscopy-equipment.png",
    tags: [
      "Blood in Stool",
      "Piles",
      "Colorectal Cancer",
      "Colonoscopy",
      "Ranchi"
    ],
    metaTitle: "Blood in Stool Causes: Piles vs Cancer | Dr. Akhilesh Yadav",
    metaDescription: "मल में खून आने के कारण। बवासीर (Piles) और बड़ी आंत के कैंसर के लक्षणों में अंतर कैसे पहचानें? जानिए कब कोलोनोस्कोपी जांच है अनिवार्य.",
    sections: [
      {
        type: "text",
        content: "मल त्याग के दौरान या बाद में खून आना (Blood in Stool) एक ऐसा लक्षण है जिसे लोग अक्सर शर्म के कारण छिपाते हैं या खुद ही यह मान लेते हैं कि उन्हें 'बवासीर' (Piles) है। वे बिना किसी डॉक्टर से जांच कराए तरह-तरह की क्रीम, चूर्ण या घरेलू नुस्खे अपनाने लगते हैं। यह उपेक्षा जानलेवा हो सकती है। हालांकि अधिकांश मामलों में खून आने का कारण बवासीर या फिशर होता है, लेकिन कभी-कभी यह बड़ी आंत के अल्सर, कोलाइटिस या मलाशय के कैंसर (Colorectal Cancer) का शुरुआती लक्षण भी हो सकता है।"
      },
      {
        heading: "🆚 बवासीर (Piles) बनाम आंत का कैंसर: लक्षणों में अंतर",
        type: "list",
        content: "बवासीर और गंभीर बीमारियों के खून आने के पैटर्न में कुछ स्पष्ट अंतर होते हैं:",
        list: [
          "बवासीर / फिशर (Piles/Fissures): इसमें आमतौर पर मल त्याग के बाद चमकीला लाल (Bright Red) खून बूंद-बूंद करके टपकता है। फिशर में मल के साथ तेज दर्द और जलन होती है, जबकि बवासीर (Internal Piles) में अक्सर दर्द नहीं होता।",
          "आंत का कैंसर / कोलाइटिस (IBD/Cancer): इसमें खून का रंग गहरा लाल या काला हो सकता है और यह मल के साथ अच्छी तरह मिला हुआ होता है। इसके साथ ही बार-बार पेट खराब होना, दस्त होना, पेट में मरोड़ उठना, और बिना प्रयास के तेजी से वजन कम होना जैसे लक्षण भी दिखाई देते हैं।"
        ]
      },
      {
        heading: "🚨 रेड फ्लैग लक्षण (Red Flag Warnings)",
        type: "warning",
        content: "यदि मल में खून आने के साथ निम्नलिखित में से कोई भी लक्षण हो, तो बिना एक दिन की देरी किए तुरंत पेट रोग विशेषज्ञ (Gastroenterologist) से मिलना चाहिए:\n1) उम्र 45 वर्ष से अधिक होना,\n2) मोशन की आदतों में अचानक बदलाव (जैसे कभी दस्त तो कभी कब्ज रहना),\n3) भूख कम लगना और अत्यधिक कमजोरी महसूस होना,\n4) मल का बहुत पतला (pencil-thin stool) आना।"
      },
      {
        heading: "🔍 जांच की सही विधि: कोलोनोस्कोपी",
        type: "text",
        content: "मल में खून आने के सही कारण का पता लगाने का एकमात्र और सबसे सटीक तरीका कोलोनोस्कोपी (Colonoscopy) जांच है। इसमें एक छोटी दूरबीन के जरिए डॉक्टर बड़ी आंत के अंदरूनी हिस्से को लाइव देखते हैं। यदि वहां कोई सूजन, छाला या गांठ (Polyp/Tumour) दिखाई देती है, तो उसका तुरंत टुकड़ा (Biopsy sample) ले लिया जाता है। शुरुआती स्टेज में बड़ी आंत के पॉलिप्स को एंडोस्कोपी के जरिए (Polypectomy) निकालकर कैंसर बनने से रोका जा सकता है।"
      }
    ]
  },
  {
    slug: "hepatitis-b-c-prevention-treatment-facts",
    titleHi: "हेपेटाइटिस बी और सी (Hepatitis B & C): लक्षण, कारण, बचाव और इलाज के सच",
    titleEn: "Hepatitis B & C: Modes of Transmission, Vaccine, and Cure",
    excerptHi: "क्या हेपेटाइटिस बी और सी का इलाज संभव है? जानिए ये वायरस कैसे फैलते हैं, पीलिया से इनका क्या संबंध है और लिवर को खराब होने से बचाने के लिए जरूरी सावधानियां।",
    excerptEn: "Differentiate chronic Hepatitis B & C from common jaundice. Learn about viral transmission, liver failure prevention, vaccines, and highly effective cures.",
    category: "Liver Health",
    readTimeMins: 7,
    publishedAt: "October 15, 2026",
    emoji: "💉",
    image: "/images/fatty-liver-diet-blog.png",
    tags: [
      "Hepatitis B",
      "Hepatitis C",
      "Liver Health",
      "Vaccine",
      "Hepatology"
    ],
    metaTitle: "Hepatitis B and C Treatment & Prevention | Ranchi",
    metaDescription: "हेपेटाइटिस बी और सी संक्रमण की पूरी जानकारी। क्या हेपेटाइटिस पूरी तरह ठीक हो सकता है? टीके (Vaccines) और आधुनिक एंटीवायरल दवाओं के फायदे.",
    sections: [
      {
        type: "text",
        content: "हेपेटाइटिस (Hepatitis) का अर्थ है लिवर में सूजन। यह मुख्य रूप से हेपेटाइटिस वायरस (A, B, C, D, E) के संक्रमण के कारण होता है। इनमें हेपेटाइटिस ए और ई दूषित पानी और भोजन से फैलते हैं और कुछ हफ्तों में ठीक हो जाते हैं। लेकिन हेपेटाइटिस बी (Hepatitis B) और हेपेटाइटिस सी (Hepatitis C) अत्यधिक खतरनाक होते हैं। ये वायरस सालों तक शरीर में चुपचाप रहकर लिवर को धीरे-धीरे नुकसान पहुंचाते हैं और आगे चलकर लिवर सिरोसिस या लिवर कैंसर का कारण बन सकते हैं।"
      },
      {
        heading: "⚠️ ये वायरस कैसे फैलते हैं? (Modes of Transmission)",
        type: "list",
        content: "हेपेटाइटिस बी और सी वायरस का प्रसार संक्रमित रक्त और शारीरिक तरल पदार्थों (body fluids) के संपर्क में आने से होता है, न कि छूने या साथ खाने से। इसके मुख्य कारण हैं:",
        list: [
          "संक्रमित सुई या सीरिंज का दोबारा उपयोग करना (नशीली दवाओं के सेवनकर्ताओं में आम)",
          "बिना जांचे गए संक्रमित खून को चढ़ाना (Blood Transfusion)",
          "असुरक्षित यौन संबंध बनाना",
          "टैटू बनवाने या संक्रमित औजारों से शेविंग कराने से",
          "संक्रमित मां से शिशु में जन्म के समय फैलना (विशेषकर हेपेटाइटिस बी)"
        ]
      },
      {
        heading: "🔍 साइलेंट किलर: लक्षण और पीलिया का संबंध",
        type: "text",
        content: "हेपेटाइटिस बी और सी को 'साइलेंट किलर' कहा जाता है क्योंकि शुरुआती वर्षों में मरीज को कोई भी लक्षण नहीं होता। मरीज बिल्कुल सामान्य महसूस करता है। कई बार जब मरीज नियमित ब्लड टेस्ट कराते हैं या रक्तदान करने जाते हैं, तब इसका पता चलता है। अंतिम चरणों में जब लिवर गंभीर रूप से डैमेज हो जाता है, तब पीलिया (Jaundice), अत्यधिक थकान, भूख न लगना और पेट में पानी भरने जैसे लक्षण आते हैं।"
      },
      {
        heading: "🛡️ हेपेटाइटिस से बचाव और आधुनिक इलाज के विकल्प",
        type: "list",
        content: "आज के समय में हेपेटाइटिस बी और सी का बेहद प्रभावी इलाज उपलब्ध है:",
        list: [
          "हेपेटाइटिस बी वैक्सीन (Vaccination): हेपेटाइटिस बी से बचाव के लिए एक अत्यंत सुरक्षित और असरदार टीका उपलब्ध है, जिसे सभी बच्चों और वयस्कों को लगवाना चाहिए। हालांकि, हेपेटाइटिस सी के लिए वर्तमान में कोई टीका उपलब्ध नहीं है।",
          "हेपेटाइटिस सी का स्थायी इलाज: अब नई ओरल दवाओं (Direct-Acting Antivirals - DAAs) से हेपेटाइटिस सी को केवल 12 से 24 हफ्तों में 95% से अधिक मामलों में पूरी तरह ठीक किया जा सकता है।",
          "हेपेटाइटिस बी का नियंत्रण: हेपेटाइटिस बी को पूरी तरह खत्म करना मुश्किल होता है, लेकिन रोजाना खाई जाने वाली एंटीवायरल दवाओं से वायरस को पूरी तरह निष्क्रिय रखा जा सकता है जिससे लिवर सिरोसिस का खतरा न के बराबर हो जाता है।"
        ]
      }
    ]
  },
  {
    slug: "chronic-gas-bloating-cures-home-remedies",
    titleHi: "पेट में हमेशा गैस और भारीपन क्यों रहता है? 7 मुख्य कारण और उनके समाधान",
    titleEn: "Constant Gas and Bloating? 7 Underlying Medical Causes and Cures",
    excerptHi: "क्या आपका पेट हमेशा फूला रहता है और लगातार गैस बनती है? जानिए इसके 7 मुख्य कारण, आसान घरेलू उपाय और कब डॉक्टर से मिलना जरूरी है।",
    excerptEn: "Struggling with persistent gas and bloating? Discover the 7 primary medical causes—from slow digestion to IBS—and lifestyle tips to find relief.",
    category: "Stomach Care",
    readTimeMins: 6,
    publishedAt: "October 24, 2026",
    emoji: "🎈",
    image: "/images/gerd-reflux-blog.png",
    tags: [
      "Gas",
      "Bloating",
      "Acidity",
      "IBS",
      "Stomach Care"
    ],
    metaTitle: "Constant Gas & Bloating Causes & Cures | Dr. Akhilesh Yadav",
    metaDescription: "हमेशा पेट फूलना (Bloating) और गैस बनने का कारण। पेट में भारीपन दूर करने के 7 तरीके और सही भोजन आदतें। Ranchi Orchid Medical Centre.",
    sections: [
      {
        type: "text",
        content: "पेट में गैस (Gas) बनना और पेट फूलना (Bloating) एक बहुत ही आम समस्या है जिसे लोग अक्सर सामान्य समझकर नजरअंदाज कर देते हैं या गैस की गोलियां (Antacids) खाकर काम चलाते हैं। लेकिन यदि आपको यह समस्या रोजाना होती है, पेट हमेशा गुब्बारे की तरह फुला हुआ और भारी महसूस होता है, तो यह आंतों की किसी अंतर्निहित समस्या का संकेत हो सकता है। इसे केवल गैस की दवा से नहीं बल्कि इसकी जड़ तक पहुंचकर ठीक किया जा सकता है।"
      },
      {
        heading: "🔍 हमेशा गैस और पेट फूलने के 7 मुख्य कारण",
        type: "list",
        content: "इसके पीछे निम्नलिखित प्रमुख चिकित्सकीय और जीवनशैली से जुड़े कारण हो सकते हैं:",
        list: [
          "जल्दबाजी में भोजन चबाए बिना खाना (जिससे पेट में अतिरिक्त हवा चली जाती है)",
          "पेट में अच्छे बैक्टीरिया की कमी (Dysbiosis)",
          "दूध और डेयरी उत्पादों को पचाने में असमर्थता (Lactose Intolerance)",
          "इरितेबल बॉवेल सिंड्रोम (IBS) या आंतों की अत्यधिक संवेदनशीलता",
          "कब्ज (Constipation) होना, जिससे आंतों में मल सड़ने से अधिक गैस बनती है",
          "H. pylori बैक्टीरिया का इन्फेक्शन या पेट का अल्सर",
          "अत्यधिक मात्रा में कार्बोनेटेड ड्रिंक्स, च्युइंग गम, और मैदा/जंक फूड का सेवन"
        ]
      },
      {
        heading: "💡 राहत पाने के आसान घरेलू उपाय (Simple Cures)",
        type: "list",
        content: "यदि समस्या सामान्य है, तो इन आसान आदतों से तुरंत राहत मिल सकती है:",
        list: [
          "गुनगुने पानी में हींग, अजवाइन और काला नमक मिलाकर पिएं। यह पाचन को उत्तेजित करता है।",
          "भोजन को आराम से, चबा-चबाकर खाएं। खाना खाते समय बात करने या फोन देखने से बचें।",
          "भोजन के तुरंत बाद 10 मिनट टहलें या वज्रासन में बैठें। सीधे सोने से बचें।",
          "सौंफ और जीरे की चाय पिएं, यह पेट की गैस को प्राकृतिक रूप से रिलीज करने में मदद करती है।"
        ]
      },
      {
        heading: "🚨 डॉक्टर से कब संपर्क करें?",
        type: "text",
        content: "यदि पेट फूलने के साथ आपको बार-बार उल्टी आ रही हो, मल में खून आता हो, वजन लगातार घट रहा हो, या पेट में तेज दर्द के साथ बुखार रहता हो, तो यह आंतों की रुकावट या संक्रमण का गंभीर संकेत हो संकेत हो सकता है। ऐसी स्थिति में तुरंत रांची में डॉ. अखिलेश यादव से संपर्क कर एंडोस्कोपी या सोनोग्राफी जांच करानी चाहिए।"
      }
    ]
  },
  {
    slug: "high-sgpt-sgot-causes-diet-remedies",
    titleHi: "एसजीपीटी (SGPT) और एसजीओटी (SGOT) बढ़ने का कारण, लक्षण और इसे कम करने के उपाय",
    titleEn: "High SGPT and SGOT Levels? Causes, Diet, and How to Lower Them",
    excerptHi: "ब्लड टेस्ट में SGPT और SGOT बढ़ने का क्या मतलब है? जानिए लिवर एंजाइम बढ़ने के कारण, लक्षण और इन्हें कम करने के लिए बेस्ट डाइट और लाइफस्टाइल।",
    excerptEn: "Elevated liver enzymes (SGPT/SGOT) indicate liver stress. Discover common causes, warning symptoms, and practical diet tips to lower them naturally.",
    category: "Liver Health",
    readTimeMins: 7,
    publishedAt: "November 2, 2026",
    emoji: "🩸",
    image: "/images/sgpt-sgot-blog.png",
    tags: [
      "SGPT",
      "SGOT",
      "LFT",
      "Liver Health",
      "Hindi"
    ],
    metaTitle: "High SGPT & SGOT Levels Causes & Diet | Ranchi",
    metaDescription: "ब्लड टेस्ट में SGPT और SGOT बढ़ने का क्या मतलब है? जानिए लिवर एंजाइम बढ़ने के कारण, लक्षण और इन्हें कम करने के लिए बेस्ट डाइट और लाइफस्टाइल।",
    sections: [
      {
        type: "text",
        content: "जब आप सामान्य स्वास्थ्य जांच या लिवर फंक्शन टेस्ट (LFT) कराते हैं, तो रिपोर्ट में दो नाम अक्सर आपका ध्यान खींचते हैं — SGPT (Alanine Aminotransferase) और SGOT (Aspartate Aminotransferase)। यदि इन दोनों का स्तर सामान्य से अधिक आता है, तो घबराना स्वाभाविक है। ये दोनों लिवर में पाए जाने वाले एंजाइम हैं। जब लिवर की कोशिकाओं को कोई नुकसान पहुंचता है या उनमें सूजन आती है, तो ये एंजाइम लिवर से निकलकर रक्त में मिल जाते हैं, जिससे रक्त में इनका स्तर बढ़ जाता है।"
      },
      {
        heading: "⚠️ SGPT और SGOT बढ़ने के मुख्य कारण",
        type: "list",
        content: "रक्त में इन एंजाइमों के बढ़ने के पीछे कई कारण हो सकते हैं:",
        list: [
          "फैटी लिवर (Fatty Liver): लिवर में अतिरिक्त वसा जमा होने से सूजन आना।",
          "शराब का सेवन: अत्यधिक शराब पीने से लिवर की कोशिकाओं का नष्ट होना।",
          "हेपेटाइटिस संक्रमण: हेपेटाइटिस ए, बी, सी, या ई वायरस के कारण लिवर में गंभीर संक्रमण।",
          "दवाओं का दुष्प्रभाव: बिना डॉक्टर की सलाह के दर्द निवारक दवाएं (जैसे पैरासिटामोल) या एंटीबायोटिक्स लंबे समय तक लेना।"
        ]
      },
      {
        heading: "🍲 लिवर एंजाइम कम करने के लिए डाइट (Lowering SGPT/SGOT)",
        type: "list",
        content: "सही खानपान से लिवर की सूजन को कम करके इन एंजाइमों को वापस सामान्य स्तर पर लाया जा सकता है:",
        list: [
          "हरी पत्तेदार सब्जियां: पालक, ब्रोकोली, और मेथी लिवर को डिटॉक्स करने में मदद करती हैं।",
          "लहसुन और हल्दी: इनमें एंटी-इंफ्लेमेटरी गुण होते हैं जो लिवर कोशिकाओं को सुरक्षित रखते हैं।",
          "एंटीऑक्सीडेंट युक्त फल: पपीता, सेब और जामुन लिवर के घावों को तेजी से भरते हैं।",
          "ओट्स और साबुत अनाज: फाइबर से भरपूर अनाज लिवर से एक्स्ट्रा फैट को कम करते हैं।"
        ]
      },
      {
        heading: "🚫 किन चीजों से पूरी तरह परहेज करें?",
        type: "list",
        content: "लिवर को ठीक होने का समय देने के लिए इन चीजों से दूर रहें:",
        list: [
          "तली-भुनी और ज्यादा मसालेदार चीजें।",
          "प्रोसेस्ड और डिब्बाबंद खाद्य पदार्थ जिनमें प्रिजर्वेटिव्स और चीनी अधिक होती है।",
          "शराब और धूम्रपान (यह लिवर के लिए सीधे तौर पर जहर का काम करते हैं)।",
          "बिना डॉक्टरी सलाह के ली जाने वाली दर्द निवारक दवाएं।"
        ]
      }
    ]
  },
  {
    slug: "understand-abdomen-ultrasound-report-findings",
    titleHi: "पेट का अल्ट्रासाउंड (USG Abdomen) रिपोर्ट कैसे पढ़ें? सामान्य शब्दों का मतलब समझें",
    titleEn: "Understanding Your Abdomen Ultrasound Report: Common Gastro Findings Explained",
    excerptHi: "अल्ट्रासाउंड रिपोर्ट में फैटी लिवर (Fatty Liver), हेपेटोमेगाली (Hepatomegaly) और गॉलब्लैडर स्टोन (Gallstones) का क्या अर्थ है? जानिए पूरी जानकारी।",
    excerptEn: "Decipher your whole abdomen ultrasound report. Learn what terms like Hepatomegaly, Fatty Liver, Cholelithiasis, and Calculus mean in simple terms.",
    category: "Diagnostics",
    readTimeMins: 8,
    publishedAt: "November 9, 2026",
    emoji: "🔍",
    image: "/images/procedure-room.png",
    tags: [
      "Ultrasound",
      "USG Abdomen",
      "Diagnostics",
      "Hepatomegaly",
      "Hindi"
    ],
    metaTitle: "How to Read Abdomen Ultrasound Report | Dr. Akhilesh Yadav",
    metaDescription: "अल्ट्रासाउंड रिपोर्ट में फैटी लिवर (Fatty Liver), हेपेटोमेगाली (Hepatomegaly) और गॉलब्लैडर स्टोन (Gallstones) का क्या अर्थ है? जानिए पूरी जानकारी।",
    sections: [
      {
        type: "text",
        content: "जब पेट में दर्द, गैस, अपच या भारीपन की समस्या होती है, तो डॉक्टर सबसे पहले पेट का अल्ट्रासाउंड (Ultrasound Whole Abdomen) कराने की सलाह देते हैं। यह एक बेहद सुरक्षित, दर्द रहित और त्वरित जांच है जो ध्वनि तरंगों (sound waves) की मदद से पेट के अंदरूनी अंगों की लाइव तस्वीरें बनाती है। लेकिन जब मरीज को रिपोर्ट मिलती है, तो उसमें लिखे जटिल मेडिकल शब्द उन्हें भ्रमित कर देते हैं। आइए जानते हैं रिपोर्ट में अक्सर दिखने वाले कुछ मुख्य शब्दों का आसान मतलब।"
      },
      {
        heading: "📈 लिवर से जुड़े सामान्य शब्द (Liver Findings)",
        type: "list",
        content: "लिवर की जांच में अक्सर ये निष्कर्ष देखने को मिलते हैं:",
        list: [
          "Hepatomegaly (हेपेटोमेगाली): इसका अर्थ है लिवर का आकार सामान्य से बड़ा हो जाना। यह फैटी लिवर, संक्रमण या शराब के कारण हो सकता है।",
          "Fatty Liver (फैटी लिवर): लिवर कोशिकाओं में वसा का जमा होना। इसे ग्रेड 1 (शुरुआती), ग्रेड 2 (मध्यम), या ग्रेड 3 (गंभीर) में विभाजित किया जाता है।",
          "Coarse Liver Echo Texture: इसका अर्थ है कि लिवर की बनावट खुरदरी या असमान हो गई है, जो लिवर में पुरानी सूजन या सिरोसिस की शुरुआत का संकेत हो सकती है।"
        ]
      },
      {
        heading: "🟢 पित्ताशय से जुड़े निष्कर्ष (Gallbladder Findings)",
        type: "list",
        content: "पित्ताशय की थैली में सबसे आम समस्याएं निम्नलिखित होती हैं:",
        list: [
          "Cholelithiasis / GB Calculus: इसका स्पष्ट अर्थ है कि पित्त की थैली में पथरी (Gallstones) है। Calculus का अर्थ पथरी होता है।",
          "Cholecystitis (कोलेसिस्टाइटिस): पित्त की थैली में सूजन आ जाना। यह अक्सर पथरी के कारण पित्त नली के ब्लॉक होने से होता है।",
          "GB Sludge (जीबी स्लज): पित्त का गाढ़ा हो जाना, जो पथरी बनने की शुरुआती अवस्था होती है।"
        ]
      },
      {
        heading: "🚨 किडनी और अन्य अंगों के निष्कर्ष",
        type: "list",
        content: "रिपोर्ट में अन्य अंगों के बारे में भी लिखा हो सकता है:",
        list: [
          "Nephrolithiasis / Renal Calculus: इसका मतलब है कि गुर्दे (Kidney) में पथरी है।",
          "Splenomegaly (स्प्लेनोमेगाली): तिल्ली (Spleen) का आकार बढ़ना, जो लिवर की गंभीर बीमारी (Portal Hypertension) के कारण हो सकता है।",
          "Ascites (असाइटिस): पेट के अंदरूनी हिस्से में पानी का जमा होना, जो लिवर सिरोसिस का मुख्य लक्षण है।"
        ]
      }
    ]
  },
  {
    slug: "fibroscan-liver-test-ranchi-cost-procedure",
    titleHi: "फाइब्रोस्कैन (Fibroscan) टेस्ट क्या है? लिवर डैमेज की जांच का खर्च और सही जानकारी",
    titleEn: "Fibroscan Liver Test: What is it, Price in Ranchi, & Reading the Report",
    excerptHi: "लिवर सिरोसिस और फाइब्रोसिस की जांच के लिए फाइब्रोस्कैन (Fibroscan) कैसे किया जाता है? रांची में इसका खर्च और रिपोर्ट समझने का आसान तरीका।",
    excerptEn: "Understand the Fibroscan liver test. Learn how it measures liver scarring and fat, price expectations in Ranchi, and how to read CAP and kPa scores.",
    category: "Diagnostics",
    readTimeMins: 6,
    publishedAt: "November 16, 2026",
    emoji: "🩺",
    image: "/images/fibroscan-test-blog.png",
    tags: [
      "Fibroscan",
      "Liver Fibrosis",
      "Cirrhosis",
      "Ranchi",
      "Diagnostics"
    ],
    metaTitle: "Fibroscan Liver Test in Ranchi: Price & Procedure",
    metaDescription: "लिवर सिरोसिस और फाइब्रोसिस की जांच के लिए फाइब्रोस्कैन (Fibroscan) कैसे किया जाता है? रांची में इसका खर्च और रिपोर्ट समझने का आसान तरीका।",
    sections: [
      {
        type: "text",
        content: "लिवर हमारे शरीर का एक बहुत ही लचीला अंग है जो नुकसान होने पर खुद को ठीक (regenerate) कर सकता है। लेकिन जब लिवर में लंबे समय तक सूजन रहती है (जैसे फैटी लिवर या हेपेटाइटिस के कारण), तो वहां स्कार टिश्यू (स्कारिंग) बनने लगते हैं। इसे फाइब्रोसिस (Fibrosis) कहते हैं। फाइब्रोसिस बढ़ने पर लिवर कड़ा हो जाता है जिसे सिरोसिस कहते हैं। पहले लिवर के कड़ेपन की जांच के लिए सुई डालकर लिवर का टुकड़ा निकाला जाता था (Biopsy), जो दर्दनाक था। लेकिन आज फाइब्रोस्कैन (Fibroscan) के जरिए बिना दर्द के केवल 5 मिनट में यह जांच संभव है।"
      },
      {
        heading: "❓ फाइब्रोस्कैन टेस्ट कैसे किया जाता है?",
        type: "text",
        content: "फाइब्रोस्कैन एक उन्नत अल्ट्रासाउंड जैसी मशीन है। इसमें मरीज को पीठ के बल लिटाया जाता है और पसलियों के बीच दाहिनी तरफ एक प्रोब (ultrasound probe) रखा जाता है। यह प्रोब लिवर में हल्की ध्वनि तरंगें (shear waves) भेजता है। ये तरंगें जितनी तेजी से लिवर से गुजरती हैं, लिवर उतना ही कड़ा माना जाता है। पूरी प्रक्रिया में कोई दर्द नहीं होता, कोई सुई नहीं चुभाई जाती, और मरीज तुरंत घर जा सकते हैं।"
      },
      {
        heading: "📊 फाइब्रोस्कैन स्कोर को कैसे समझें? (kPa and CAP)",
        type: "list",
        content: "फाइब्रोस्कैन रिपोर्ट में दो मुख्य स्कोर होते हैं:",
        list: [
          "LSM / Stiffness (kPa): यह लिवर के कड़ेपन (Fibrosis) को मापता है। स्कोर जितना अधिक होगा, फाइब्रोसिस उतना ही गंभीर होगा। F0 (सामान्य) से लेकर F4 (सिरोसिस/गंभीर कड़ापन) तक इसकी ग्रेडिंग होती है।",
          "CAP Score (dB/m): यह लिवर में वसा (Fat) की मात्रा को मापता है। यह फैटी लिवर की श्रेणी (S1, S2, S3) निर्धारित करने में मदद करता है।"
        ]
      },
      {
        heading: "💰 रांची में फाइब्रोस्कैन का खर्च कितना है?",
        type: "tip",
        content: "रांची में फाइब्रोस्कैन जांच का खर्च आमतौर पर ₹2,500 से ₹4,500 के बीच होता है। रांची के ऑर्किड मेडिकल सेंटर (Orchid Medical Centre) में डॉ. अखिलेश यादव की देखरेख में अत्याधुनिक फाइब्रोस्कैन मशीन द्वारा यह जांच की जाती है, जिससे लिवर सिरोसिस का शुरुआती स्टेज में ही पता लगाकर उसे समय रहते नियंत्रित किया जा सकता है।"
      }
    ]
  },
  {
    slug: "fatty-liver-grade-1-2-3-differences-reversal",
    titleHi: "फैटी लिवर ग्रेड 1, 2 और 3 में क्या अंतर है? क्या ग्रेड 2 फैटी लिवर ठीक हो सकता है?",
    titleEn: "Fatty Liver Grade 1, 2, and 3: Symptoms, Differences, and Reversal Guide",
    excerptHi: "फैटी लिवर ग्रेड 1, 2 और 3 (Grade 1, 2, 3 Fatty Liver) के बीच अंतर। जानिए लक्षण, गंभीरता और डॉक्टर की सलाह से इसे पूरी तरह ठीक करने के उपाय।",
    excerptEn: "Examine the three severity grades of Fatty Liver Disease (NAFLD). Understand symptoms of Grade 2 & 3 and clinical steps to reverse liver fat accumulation.",
    category: "Liver Health",
    readTimeMins: 7,
    publishedAt: "November 23, 2026",
    emoji: "🍏",
    image: "/images/fatty-liver-diet-blog.png",
    tags: [
      "Fatty Liver",
      "Grades",
      "NAFLD",
      "Liver Health",
      "Hindi"
    ],
    metaTitle: "Fatty Liver Grade 1, 2, 3 Differences & Treatment",
    metaDescription: "फैटी लिवर ग्रेड 1, 2 और 3 (Grade 1, 2, 3 Fatty Liver) के बीच अंतर। जानिए लक्षण, गंभीरता और डॉक्टर की सलाह से इसे पूरी तरह ठीक करने के उपाय।",
    sections: [
      {
        type: "text",
        content: "अल्ट्रासाउंड रिपोर्ट में जब पहली बार 'Fatty Liver' लिखा आता है, तो अधिकांश लोग इसे अनदेखा कर देते हैं क्योंकि वे सोचते हैं कि यह हर दूसरे व्यक्ति को होता है। लेकिन फैटी लिवर कोई सामान्य बात नहीं है। यह एक धीमी गति से बढ़ने वाली बीमारी है जो समय पर न रोकी जाए, तो लिवर फेलियर का कारण बन सकती है। डॉक्टर अल्ट्रासाउंड रिपोर्ट में वसा के जमाव के आधार पर इसे तीन ग्रेड (Grade 1, 2, and 3) में विभाजित करते हैं।"
      },
      {
        heading: "🔍 फैटी लिवर के तीनों ग्रेड में अंतर",
        type: "list",
        content: "ग्रेड के आधार पर लिवर की स्थिति और गंभीरता इस प्रकार बदलती है:",
        list: [
          "ग्रेड 1 फैटी लिवर (Mild): इसमें लिवर कोशिकाओं के बाहरी हिस्से में बहुत कम मात्रा में वसा जमा होती है। मरीज को कोई लक्षण महसूस नहीं होते। इसे सिर्फ संतुलित आहार और सामान्य टहलने से ठीक किया जा सकता है।",
          "ग्रेड 2 फैटी लिवर (Moderate): इसमें लिवर में वसा का जमाव काफी बढ़ जाता है। लिवर में हल्की सूजन आने लगती है। मरीज को पेट के दाहिने हिस्से में भारीपन या हल्का दर्द और लगातार थकान महसूस हो सकती है।",
          "ग्रेड 3 फैटी लिवर (Severe): यह एक गंभीर स्थिति है जिसमें लिवर में भारी मात्रा में फैट जमा हो जाता है और सूजन बहुत अधिक बढ़ जाती है। यदि इसे इस स्टेज पर भी न रोका जाए, तो यह फाइब्रोसिस और लिवर सिरोसिस में बदल जाती है।"
        ]
      },
      {
        heading: "🔄 क्या ग्रेड 2 फैटी लिवर पूरी तरह ठीक हो सकता है? (Reversal)",
        type: "tip",
        content: "हाँ! एक अच्छी खबर यह है कि फैटी लिवर (ग्रेड 1 और ग्रेड 2) पूरी तरह प्रतिवर्ती (reversible) है। चूंकि लिवर में खुद को ठीक करने की अद्भुत क्षमता होती है, इसलिए यदि आप अपना वजन 7-10% कम कर लें, मीठी और तली चीजें बंद कर दें, और रोजाना 45 मिनट कार्डियो एक्सरसाइज करें, तो आपका लिवर वापस पूरी तरह स्वस्थ हो सकता है।"
      },
      {
        heading: "🚨 फैटी लिवर रिवर्स करने के 4 नियम",
        type: "list",
        content: "लिवर फैट को तेजी से कम करने के लिए इन नियमों का पालन करें:",
        list: [
          "मैदा, चीनी, कोल्ड ड्रिंक्स और जंक फूड का सेवन पूरी तरह बंद करें।",
          "भोजन में कॉम्प्लेक्स कार्बोहाइड्रेट (जैसे दलिया, ओट्स, चोकर युक्त रोटी) बढ़ाएं।",
          "रात का खाना जल्दी खाएं और शराब का सेवन बिल्कुल न करें।",
          "डॉक्टर की सलाह पर विटामिन ई (Vitamin E) या लिवर प्रोटेक्टिव सप्लीमेंट्स लें।"
        ]
      }
    ]
  },
  {
    slug: "early-signs-alcoholic-liver-disease-prevention",
    titleHi: "शराब से लिवर खराब होने के 5 शुरुआती संकेत (Early Signs of Alcoholic Liver Damage)",
    titleEn: "5 Early Warning Signs Your Liver is Damaged by Alcohol",
    excerptHi: "शराब पीने से लिवर डैमेज होने के 5 महत्वपूर्ण लक्षण। जानिए फैटी लिवर, सूजन और सिरोसिस से बचने के लिए शुरुआती चेतावनी संकेतों को कैसे पहचानें।",
    excerptEn: "Identify the early signs of Alcoholic Liver Disease (ALD). Learn how alcohol affects hepatocytes and when to stop to prevent irreversible liver cirrhosis.",
    category: "Liver Health",
    readTimeMins: 6,
    publishedAt: "November 30, 2026",
    emoji: "🍷",
    image: "/images/liver-icon.png",
    tags: [
      "Alcoholic Liver",
      "Cirrhosis",
      "Hepatitis",
      "Liver Damage",
      "Hindi"
    ],
    metaTitle: "Early Signs of Alcoholic Liver Disease | Dr. Akhilesh Yadav",
    metaDescription: "शराब पीने से लिवर डैमेज होने के 5 महत्वपूर्ण लक्षण। जानिए फैटी लिवर, सूजन और सिरोसिस से बचने के लिए शुरुआती चेतावनी संकेतों को कैसे पहचानें।",
    sections: [
      {
        type: "text",
        content: "शराब (Alcohol) का अत्यधिक सेवन लिवर की सेहत के लिए सबसे बड़ा खतरा है। चूंकि लिवर शरीर में शराब को प्रोसेस और फिल्टर करता है, इसलिए इस प्रक्रिया के दौरान उत्पन्न होने वाले हानिकारक टॉक्सिन्स लिवर की कोशिकाओं को गंभीर नुकसान पहुंचाते हैं। शराब से होने वाली लिवर की बीमारी (Alcoholic Liver Disease - ALD) धीरे-धीरे आगे बढ़ती है। शुरुआती स्टेज में लक्षण बहुत हल्के होते हैं, जिन्हें पहचानकर यदि शराब पीना बंद कर दिया जाए, तो लिवर को गंभीर नुकसान से बचाया जा सकता है।"
      },
      {
        heading: "🚨 शराब से लिवर डैमेज होने के 5 शुरुआती संकेत",
        type: "list",
        content: "यदि आप नियमित शराब पीते हैं और शरीर में ये लक्षण दिखें, तो सावधान हो जाएं:",
        list: [
          "लगातार थकान और कमजोरी: लिवर जब कमजोर होता है, तो वह ऊर्जा का संचय नहीं कर पाता, जिससे मरीज को हमेशा सुस्ती और थकान महसूस होती है।",
          "पेट के ऊपरी दाहिने हिस्से में दर्द या भारीपन: यह लिवर के सूज जाने और उसके आकार बढ़ने (Hepatomegaly) का स्पष्ट लक्षण है।",
          "भूख न लगना और अचानक वजन कम होना: लिवर की खराबी से पाचन तंत्र कमजोर हो जाता है, जिससे खाने की इच्छा समाप्त होने लगती है।",
          "जी मिचलाना और अपच: सुबह उठने पर मतली आना, खट्टी डकारें और गैस की गंभीर समस्या होना।",
          "त्वचा और आंखों में हल्का पीलापन: यह खून में बिलीरुबिन (bilirubin) के स्तर बढ़ने का संकेत है, जो पीलिया (Jaundice) की शुरुआत है।"
        ]
      },
      {
        heading: "🔄 क्या लिवर को दोबारा ठीक किया जा सकता है?",
        type: "tip",
        content: "शुरुआती चरण (जैसे अल्कोहलिक फैटी लिवर) में यदि शराब का सेवन पूरी तरह से बंद (Complete Abstinence) कर दिया जाए, तो लिवर 4 से 6 हफ्तों में वापस सामान्य हो सकता है। लेकिन यदि शराब पीना जारी रखा जाए, तो यह अल्कोहलिक हेपेटाइटिस और अंततः लिवर सिरोसिस (Liver Cirrhosis) में बदल जाता है, जो कि एक जानलेवा स्थिति है।"
      }
    ]
  },
  {
    slug: "liver-cirrhosis-ascites-water-retention-management",
    titleHi: "लिवर सिरोसिस के कारण पेट में पानी भरना (Ascites): लक्षण, बचाव और इलाज",
    titleEn: "Fluid in Stomach (Ascites) due to Liver Cirrhosis: Management and Cures",
    excerptHi: "लिवर सिरोसिस में पेट में पानी (Ascites) क्यों भरता है? पानी निकालने की प्रक्रिया (tapping), दवाओं और खानपान के कड़े नियम। डॉ. अखिलेश यादव।",
    excerptEn: "Learn about Ascites, the accumulation of fluid in the abdomen due to advanced liver cirrhosis. Discover dietary sodium rules, diuretics, and tapping therapies.",
    category: "Liver Health",
    readTimeMins: 8,
    publishedAt: "December 7, 2026",
    emoji: "💧",
    image: "/images/liver-icon.png",
    tags: [
      "Ascites",
      "Liver Cirrhosis",
      "Water Retention",
      "Hepatology",
      "Hindi"
    ],
    metaTitle: "Ascites (Stomach Fluid) due to Liver Cirrhosis | Ranchi",
    metaDescription: "लिवर सिरोसिस में पेट में पानी (Ascites) क्यों भरता है? पानी निकालने की प्रक्रिया (tapping), दवाओं और खानपान के कड़े नियम। डॉ. अखिलेश यादव।",
    sections: [
      {
        type: "text",
        content: "जब लिवर सिरोसिस (Liver Cirrhosis) अपने अंतिम चरण में पहुंच जाता है, तो लिवर के अंदर खून का बहाव गंभीर रूप से बाधित हो जाता है। इससे लिवर की मुख्य नस में दबाव बढ़ जाता है जिसे 'Portal Hypertension' कहते हैं। इस बढ़ते दबाव और शरीर में एल्बूमिन प्रोटीन की कमी के कारण रक्त वाहिकाओं से पानी रिसकर पेट के खाली हिस्से (Peritoneal Cavity) में जमा होने लगता है। इस स्थिति को चिकित्सा विज्ञान में असाइटिस (Ascites) या साधारण भाषा में 'पेट में पानी भरना' कहते हैं।"
      },
      {
        heading: "⚠️ असाइटिस के मुख्य लक्षण",
        type: "list",
        content: "पेट में पानी जमा होने पर मरीज को निम्नलिखित तकलीफें होती हैं:",
        list: [
          "पेट का आकार तेजी से बढ़ना और गुब्बारे की तरह कड़ा हो जाना।",
          "लेटने या बैठने पर सांस लेने में तकलीफ होना (पानी फेफड़ों पर दबाव डालता है)।",
          "पैरों और टखनों में गंभीर सूजन आना (Edema)।",
          "भूख बिल्कुल न लगना और पेट भरा हुआ महसूस होना।"
        ]
      },
      {
        heading: "🔑 असाइटिस नियंत्रण के 3 मुख्य स्तंभ (Management)",
        type: "list",
        content: "पेट के पानी को नियंत्रित करने के लिए डॉक्टरों द्वारा तीन मुख्य उपाय किए जाते हैं:",
        list: [
          "नमक पर सख्त प्रतिबंध (Low-Sodium Diet): मरीज को 24 घंटे में 2 ग्राम (आधा चम्मच) से अधिक नमक नहीं देना चाहिए। अतिरिक्त नमक शरीर में पानी को और अधिक रोकता है। ऊपर से नमक डालना या पापड़, अचार, नमकीन देना पूरी तरह वर्जित है।",
          "पेशाब बढ़ाने वाली दवाएं (Diuretics): डॉक्टर स्पायरोनोलैक्टोन (Spironolactone) या फ्रूसेमाइड (Frusemide) जैसी दवाएं देते हैं जो किडनी के रास्ते अतिरिक्त पानी को बाहर निकालती हैं।",
          "पेट से पानी निकालना (Therapeutic Paracentesis): जब पेट बहुत फूल जाता है और सांस लेना मुश्किल होता है, तो डॉक्टर अल्ट्रासाउंड की मदद से पेट में एक बारीक सुई डालकर 3 से 5 लीटर पानी सुरक्षित रूप से बाहर निकालते हैं। इसे 'Tapping' कहते हैं।"
        ]
      },
      {
        heading: "⚠️ इन्फेक्शन का खतरा (SBP)",
        type: "warning",
        content: "पेट में जमा पानी में बैक्टीरिया पनपने का बहुत अधिक खतरा होता है। इसे Spontaneous Bacterial Peritonitis (SBP) कहते हैं। यदि असाइटिस के मरीज को पेट दर्द के साथ तेज बुखार या बेहोशी/भ्रम (Hepatic Encephalopathy) महसूस हो, तो इसे मेडिकल इमरजेंसी मानकर तुरंत अस्पताल ले जाना चाहिए।"
      }
    ],
    faqs: [
      {
        q: "Ascites क्या बीमारी है? — Ascites Disease in Hindi",
        a: "Ascites (असाइटिस) वह स्थिति है जब लिवर सिरोसिस या liver failure के कारण पेट के अंदर पानी जमा हो जाता है। इसे Hindi में 'पेट में पानी भरना' या 'जलोदर' कहते हैं। Portal Hypertension और खून में प्रोटीन (albumin) की कमी इसके मुख्य कारण हैं।",
      },
      {
        q: "Moderate Ascites का मतलब क्या है? — Moderate Ascites Meaning in Hindi",
        a: "Ascites की 3 grades होती हैं: Grade 1 (mild) — केवल ultrasound में दिखता है; Grade 2 (moderate) — पेट थोड़ा फूला हुआ दिखता है और हाथ रखने पर पानी की लहर महसूस होती है; Grade 3 (severe/tense) — पेट बहुत बड़ा हो जाता है और सांस लेना मुश्किल होता है। Moderate ascites में दवाएं (diuretics) और कम नमक की डाइट दी जाती है।",
      },
      {
        q: "लिवर में पानी भरने पर क्या खाएं? — Liver Me Pani Bhar Jana Diet",
        a: "पेट में पानी (ascites) के मरीज को नमक (sodium) बहुत कम खाना चाहिए — दिन में 2 ग्राम से कम। अचार, पापड़, नमकीन, सोया सॉस और packaged foods बिल्कुल बंद। प्रोटीन के लिए दाल, अंडे का सफेद हिस्सा, मछली खाएं। पानी की मात्रा डॉक्टर की सलाह से तय करें।",
      },
      {
        q: "पेट का पानी (Ascites) कितनी बार निकालना पड़ता है?",
        a: "जब पेट बहुत ज़्यादा फूल जाए और सांस लेना मुश्किल हो जाए, तो 'Therapeutic Paracentesis' यानी tapping की जाती है — ultrasound की मदद से सुई डालकर 3-5 लीटर पानी निकाला जाता है। यह कोई इलाज नहीं, बल्कि relief procedure है — पानी दोबारा भर सकता है। नमक कम खाने और दवाओं से इसे रोका जाता है।",
      },
      {
        q: "Ascites में डॉक्टर से कब मिलें? — Ranchi में Liver Specialist",
        a: "अगर पेट तेजी से बढ़ रहा हो, पैरों में सूजन हो, बुखार के साथ पेट दर्द हो (SBP का खतरा), या सांस लेने में तकलीफ हो — तो तुरंत liver specialist से मिलें। रांची में Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre में ascites और liver cirrhosis का विशेष उपचार करते हैं। अपॉइंटमेंट: 7764028474।",
      },
    ],
  },
  {
    slug: "does-cold-milk-cure-acidity-myths-facts",
    titleHi: "क्या ठंडा दूध पीने से एसिडिटी ठीक होती है? जानिए इसके सच और नुकसान",
    titleEn: "Does Cold Milk Actually Cure Acidity? Myths vs Gastro Facts",
    excerptHi: "क्या ठंडा दूध पीना एसिडिटी का स्थायी इलाज है? जानिए दूध पीने से पेट में एसिड बढ़ने के वैज्ञानिक कारण और एसिडिटी के सही घरेलू उपचार।",
    excerptEn: "Debunking the popular home remedy of using cold milk for acid reflux. Understand the science of calcium, fat-induced acid rebound, and safe alternatives.",
    category: "Stomach Care",
    readTimeMins: 6,
    publishedAt: "December 14, 2026",
    emoji: "🥛",
    image: "/images/gerd-reflux-blog.png",
    tags: [
      "Acidity",
      "Milk Myth",
      "Acid Reflux",
      "GERD",
      "Hindi"
    ],
    metaTitle: "ठंडा दूध एसिडिटी में पीना चाहिए? सच और नुकसान | Dr. Akhilesh Yadav",
    metaDescription: "क्या ठंडा दूध पीना एसिडिटी का स्थायी इलाज है? जानिए दूध पीने से पेट में एसिड बढ़ने के वैज्ञानिक कारण और एसिडिटी के सही घरेलू उपचार।",
    sections: [
      {
        type: "text",
        content: "जब भी किसी को सीने में जलन या एसिडिटी होती है, तो घर के बुजुर्ग अक्सर सलाह देते हैं — 'एक गिलास फ्रिज का ठंडा दूध पी लो, तुरंत राहत मिलेगी।' बहुत से लोग इसे रामबाण इलाज मानकर रोजाना ठंडा दूध पीने लगते हैं। यह सच है कि दूध पीने से गले और पेट की जलन में कुछ मिनटों के लिए शांति मिलती है, लेकिन चिकित्सा विज्ञान के अनुसार, यह उपाय वास्तव में एसिडिटी को और अधिक बढ़ा सकता है। आइए जानते हैं इसके पीछे का वैज्ञानिक सच।"
      },
      {
        heading: "🔬 दूध पीने से पेट में क्या होता है? (The Science)",
        type: "text",
        content: "दूध में कैल्शियम (Calcium) और प्रोटीन (Protein) प्रचुर मात्रा में होते हैं। कैल्शियम एक प्राकृतिक एंटासिड की तरह काम करता है जो पेट के एसिड को तुरंत न्यूट्रलाइज (उदासीन) कर देता है। यही कारण है कि ठंडा दूध पीते ही गले की जलन तुरंत शांत हो जाती है। लेकिन कहानी यहीं खत्म नहीं होती। पेट की दीवारें जैसे ही दूध के भारी प्रोटीन और कैल्शियम को देखती हैं, वे आमाशय से अधिक मात्रा में पाचक रस और हाइड्रोक्लोरिक एसिड (HCl) का स्राव करने लगती हैं ताकि दूध को पचाया जा सके। इसे 'Acid Rebound' कहते हैं। यानी कुछ मिनटों की राहत के बाद एसिडिटी और तेज हो जाती है।"
      },
      {
        heading: "🥛 फुल-फैट दूध के खतरे",
        type: "warning",
        content: "यदि आप मलाईदार या फुल-फैट (Full-Fat) दूध पी रहे हैं, तो यह और भी खतरनाक है। वसा (Fat) पेट को खाली होने की प्रक्रिया को धीमा कर देती है, जिससे भोजन और एसिड लंबे समय तक पेट में रहते हैं। इसके अलावा, फैट पेट और फूड पाइप के बीच के वाल्व (LES) को ढीला कर देता है, जिससे एसिड आसानी से ऊपर गले तक आ जाता है।"
      },
      {
        heading: "✅ एसिडिटी से राहत पाने के सही उपाय",
        type: "list",
        content: "दूध के बजाय एसिडिटी ठीक करने के लिए इन सुरक्षित विकल्पों को अपनाएं:",
        list: [
          "नारियल पानी: यह पूरी तरह से क्षारीय (alkaline) होता है और पेट की परत को शांत रखता है।",
          "गुनगुना पानी और सौंफ का पानी: भोजन के बाद सौंफ चबाना या सौंफ का पानी पीना गैस और एसिडिटी को कम करता है।",
          "केला: यह घुलनशील फाइबर का अच्छा स्रोत है और एसिडिटी को प्राकृतिक रूप से ब्लॉक करता है।",
          "ठंडी छाछ (मट्ठा): छाछ में थोड़ा भुना जीरा और काला नमक डालकर पीने से आंतों को तुरंत ठंडक मिलती है।"
        ]
      }
    ],
    faqs: [
      {
        q: "एसिडिटी में ठंडा दूध पीना चाहिए या नहीं? — Acidity Me Thanda Dudh",
        a: "ठंडा दूध एसिडिटी में तुरंत राहत दे सकता है लेकिन यह स्थायी इलाज नहीं है। दूध में मौजूद calcium और fat कुछ देर बाद और ज़्यादा acid बनाती है — इसे 'acid rebound' कहते हैं। इसलिए रात को सोने से पहले ठंडा दूध पीने से GERD या acidity और बढ़ सकती है। नारियल पानी, छाछ और सौंफ का पानी बेहतर विकल्प हैं।",
      },
      {
        q: "एसिडिटी के लिए सबसे अच्छा घरेलू उपाय क्या है?",
        a: "एसिडिटी के लिए सबसे कारगर घरेलू उपाय: (1) खाने के बाद 10 मिनट टहलें, (2) सौंफ का पानी या ठंडी छाछ पिएं, (3) खाना खाने के तुरंत बाद न सोएं — 2 घंटे का gap रखें, (4) चाय-कॉफी कम करें, (5) तली-भुनी चीज़ें और मसालेदार खाना कम करें। अगर 2 हफ्ते में राहत न मिले तो gastroenterologist से मिलें।",
      },
      {
        q: "क्या दूध एसिड रिफ्लक्स (GERD) में नुकसानदेह है?",
        a: "हाँ, खासकर full-fat दूध GERD में नुकसान कर सकता है। दूध में मौजूद fat lower esophageal sphincter (LES) को relax कर देती है — जिससे acid आसानी से food pipe में वापस आ जाता है। Low-fat दूध थोड़ा बेहतर है, लेकिन GERD के मरीजों को dairy कम करने की सलाह दी जाती है।",
      },
      {
        q: "एसिडिटी बार-बार होती है — डॉक्टर से कब मिलें?",
        a: "अगर एसिडिटी हफ्ते में 2 से ज़्यादा बार हो, रात को सोते समय acid throat तक आए, खाना निगलने में तकलीफ हो, या आवाज बैठ जाए — तो यह simple acidity नहीं बल्कि GERD हो सकती है। ऐसे में Gastroenterologist से मिलना ज़रूरी है। रांची में Dr. Akhilesh Yadav से संपर्क करें: 7764028474।",
      },
    ],
  },
  {
    slug: "piles-fissure-fistula-differences-treatment",
    titleHi: "बवासीर (Piles), फिशर और फिस्टुला (Bhagandar) में अंतर और सही इलाज",
    titleEn: "Piles, Fissures, and Fistula: How to Tell the Difference and Treatment",
    excerptHi: "गुदा रोग (Piles, Fissure, Fistula) के बीच अंतर कैसे पहचानें? इनके लक्षण, कारण और दूरबीन व लेजर विधि से होने वाले आधुनिक उपचार की जानकारी।",
    excerptEn: "Distinguish between Hemorrhoids (Piles), Anal Fissures, and Fistula-in-Ano. Learn about symptoms, fiber diets, and modern painless laser therapies.",
    category: "Gut Health",
    readTimeMins: 8,
    publishedAt: "December 21, 2026",
    emoji: "🩹",
    image: "/images/ibs-stress-blog.png",
    tags: [
      "Piles",
      "Fissure",
      "Fistula",
      "Bhagandar",
      "Hindi"
    ],
    metaTitle: "Piles, Fissure and Fistula Differences & Cure | Ranchi",
    metaDescription: "गुदा रोग (Piles, Fissure, Fistula) के बीच अंतर कैसे पहचानें? इनके लक्षण, कारण और दूरबीन व लेजर विधि से होने वाले आधुनिक उपचार की जानकारी।",
    sections: [
      {
        type: "text",
        content: "मलाशय और गुदा मार्ग में होने वाली बीमारियों को लोग अक्सर एक ही समझ लेते हैं। यदि किसी को गुदा द्वार पर दर्द, सूजन या खून आने की समस्या होती है, तो वे तुरंत मान लेते हैं कि उन्हें 'बवासीर' (Piles) है। लेकिन वास्तव में ये तीन पूरी तरह अलग बीमारियां हैं — बवासीर (Piles), फिशर (Fissure), और फिस्टुला या भगंदर (Fistula)। इन तीनों के कारण, लक्षण और इलाज के तरीके बिल्कुल अलग हैं। इनका सही समय पर अंतर पहचानना सही इलाज के लिए बेहद जरूरी है।"
      },
      {
        heading: "🔴 1. बवासीर (Piles / Hemorrhoids)",
        type: "text",
        content: "बवासीर में गुदा मार्ग की रक्त वाहिकाएं (veins) सूज जाती हैं और फूलकर मसे का रूप ले लेती हैं। इसके मुख्य लक्षण हैं: मल त्याग के दौरान बिना दर्द के चमकीला लाल खून टपकना, गुदा द्वार पर मस्से बाहर आना (जिन्हें हाथ से अंदर करना पड़ता है), और खुजली होना। यह मुख्य रूप से पुरानी कब्ज और ज्यादा देर तक टॉयलेट सीट पर जोर लगाने से होता है।"
      },
      {
        heading: "⚡ 2. फिशर (Anal Fissure)",
        type: "text",
        content: "फिशर गुदा मार्ग की नाजुक त्वचा पर आने वाला एक कट या दरार (tear) है। यह आमतौर पर बहुत कड़ा मल (hard stool) त्यागने से त्वचा के छिल जाने के कारण होता है। इसके मुख्य लक्षण हैं: मल त्याग के दौरान असहनीय, सुई चुभने जैसा या काटने जैसा दर्द होना, जो मोशन के कई घंटों बाद तक बना रहता है, और मल के ऊपर बारीक खून की लकीर आना।"
      },
      {
        heading: "🌀 3. फिस्टुला या भगंदर (Fistula-in-Ano)",
        type: "text",
        content: "फिस्टुला गुदा मार्ग के अंदर की ग्रंथि से लेकर बाहर की त्वचा तक बनने वाली एक असामान्य नली (tunnel) है। यह आमतौर पर गुदा मार्ग में मवाद या फोड़ा (abscess) होने और उसके ठीक से न सूखने के कारण बनता है। इसके मुख्य लक्षण हैं: गुदा मार्ग के पास एक छोटा छेद होना जिससे लगातार मवाद (pus), पानी या खून रिसता रहता है, पेट साफ होने में तकलीफ होना और बार-बार फोड़ा होना।"
      },
      {
        heading: "🛡️ इलाज के आधुनिक विकल्प (Laser Treatment)",
        type: "tip",
        content: "शुरुआती स्टेज में बवासीर और फिशर को केवल हाई-फाइबर डाइट, पर्याप्त पानी और स्टूल सॉफ्टनर दवाओं से ठीक किया जा सकता है। लेकिन पुराने मामलों में सर्जरी की आवश्यकता होती है। आज पारंपरिक ऑपरेशन के बजाय आधुनिक 'लेजर थेरेपी' (Laser Treatment) उपलब्ध है, जिसमें कोई बड़ा चीरा नहीं लगता, रक्तस्राव बहुत कम होता है और मरीज अगले ही दिन से अपने काम पर लौट सकते हैं। फिस्टुला के इलाज में लेजर और फिस्टुलेक्टोमी अत्यंत सफल हैं।"
      }
    ]
  },
  {
    slug: "silent-reflux-lpr-throat-globus-cough",
    titleHi: "गले में हमेशा कुछ अटका महसूस होना (Globus) या खराश: क्या यह साइलेंट रिफ्लक्स है?",
    titleEn: "Chronic Throat Clearing, Globus, and Dry Cough: Is it Silent Reflux (LPR)?",
    excerptHi: "बिना छाती में जलन के गले में अटकाव (Globus), सूखी खांसी और खराश क्यों होती है? जानिए साइलेंट रिफ्लक्स (LPR) के लक्षण, कारण और स्थायी समाधान।",
    excerptEn: "Struggling with a lump in the throat (Globus) or chronic cough? Discover Silent Reflux (Laryngopharyngeal Reflux), how it differs from GERD, and LPR cures.",
    category: "Stomach Care",
    readTimeMins: 7,
    publishedAt: "December 28, 2026",
    emoji: "🗣️",
    image: "/images/stomach-icon.png",
    tags: [
      "Silent Reflux",
      "LPR",
      "Globus",
      "Acid Reflux",
      "Hindi"
    ],
    metaTitle: "Silent Reflux (LPR) Symptoms & Cures | Ranchi",
    metaDescription: "बिना छाती में जलन के गले में अटकाव (Globus), सूखी खांसी और खराश क्यों होती है? जानिए साइलेंट रिफ्लक्स (LPR) के लक्षण, कारण और स्थायी समाधान।",
    sections: [
      {
        type: "text",
        content: "अक्सर लोग शिकायत करते हैं कि उनके गले में हमेशा कुछ अटका हुआ (Globus sensation) महसूस होता है, वे बार-बार गला साफ करने की कोशिश करते हैं, आवाज भारी हो जाती है या हफ्तों तक सूखी खांसी आती है। वे सोचते हैं कि उन्हें गले का इन्फेक्शन (ENT issue) है, लेकिन वास्तव में यह पेट की एक छिपी हुई बीमारी हो सकती है जिसे 'साइलेंट रिफ्लक्स' या लैरिंगोफैरिन्जियल रिफ्लक्स (Laryngopharyngeal Reflux - LPR) कहते हैं। इसे साइलेंट इसलिए कहा जाता है क्योंकि इसमें सामान्य एसिडिटी की तरह छाती में कोई जलन महसूस नहीं होती।"
      },
      {
        heading: "❓ यह कैसे होता है? (The Mechanism)",
        type: "text",
        content: "हमारे पेट में भोजन पचाने के लिए शक्तिशाली एसिड बनता है। पेट और फूड पाइप के बीच का वाल्व जब ढीला हो जाता है, तो पेट का एसिड और पेप्सिन नामक एंजाइम सोते समय या झुकते समय ऊपर की ओर बहने लगते हैं। जब यह एसिड फूड पाइप को पार कर सीधे गले (Larynx) और आवाज ग्रंथि (Voice Box) तक पहुंच जाता है, तो वहां की नाजुक परत में सूजन आ जाती है। चूंकि गले की त्वचा पेट की तुलना में बहुत नाजुक होती है, इसलिए एसिड की थोड़ी सी मात्रा भी वहां जलन और खराश पैदा कर देती है।"
      },
      {
        heading: "🚨 साइलेंट रिफ्लक्स (LPR) के मुख्य लक्षण",
        type: "list",
        content: "यदि आपके पास छाती में जलन के बिना ये लक्षण हैं, तो यह LPR हो सकता है:",
        list: [
          "Globus Sensation: गले में हमेशा बलगम या कोई गोला अटका हुआ महसूस होना जिसे निगलने पर भी राहत न मिले।",
          "लगातार गला साफ करने की आदत (chronic throat clearing)।",
          "आवाज का भारी होना या बैठ जाना (Hoarseness), विशेष रूप से सुबह के समय।",
          "बिना किसी सर्दी-जुकाम के हफ्तों तक चलने वाली सूखी खांसी।",
          "गले में जलन, कड़वा स्वाद महसूस होना और खाना निगलने में असुविधा।"
        ]
      },
      {
        heading: "💡 इलाज और लाइफस्टाइल में बदलाव",
        type: "list",
        content: "साइलेंट रिफ्लक्स को ठीक करने के लिए निम्नलिखित नियम अत्यंत आवश्यक हैं:",
        list: [
          "सोने से 3 घंटे पहले भोजन करें: रात का भोजन करने के तुरंत बाद बिस्तर पर न जाएं।",
          "सिर को ऊंचा रखकर सोएं: तकिए की संख्या बढ़ाने के बजाय बिस्तर के सिरहाने को 4 से 6 इंच ऊपर उठाएं।",
          "ट्रिगर फूड्स बंद करें: चाय, कॉफी, कोल्ड ड्रिंक्स, पुदीना, चॉकलेट, प्याज और खट्टे फलों का सेवन पूरी तरह बंद करें।",
          "डॉक्टर की सलाह पर एसिडिटी कम करने वाली दवाएं (PPI) और प्रोनेटिक्स (Prokinetics) का कोर्स करें।"
        ]
      }
    ],
    faqs: [
      {
        q: "LPR (Silent Reflux) क्या है? — LPR in Hindi",
        a: "LPR यानी Laryngopharyngeal Reflux एक प्रकार का एसिड रिफ्लक्स है जिसमें पेट का एसिड सीधे गले (Larynx) और आवाज की नली (Pharynx) तक पहुंचता है। इसे 'साइलेंट रिफ्लक्स' इसलिए कहते हैं क्योंकि इसमें अक्सर सीने में जलन (heartburn) नहीं होती — सिर्फ गले में अटकाव, खराश या खांसी होती है।",
      },
      {
        q: "LPR के मुख्य लक्षण क्या हैं? — LPR Symptoms in Hindi",
        a: "LPR के प्रमुख लक्षण हैं: गले में कुछ अटका हुआ महसूस होना (Globus Sensation), लगातार गला साफ करना, सूखी खांसी, आवाज का बैठ जाना या भारी होना, और गले में हल्की जलन या कड़वाहट। ये लक्षण सुबह के समय ज्यादा होते हैं।",
      },
      {
        q: "क्या LPR बिना दवाओं के ठीक हो सकता है?",
        a: "हल्के LPR में जीवनशैली बदलाव (खाने का समय, सोने की पोजीशन, ट्रिगर फूड्स बंद करना) से काफी राहत मिल सकती है। लेकिन अधिकतर मरीजों को 8–12 हफ्ते के PPI (एसिड ब्लॉकर) कोर्स की जरूरत होती है। बिना डॉक्टर की सलाह के सिर्फ घरेलू उपाय पर निर्भर न रहें।",
      },
      {
        q: "LPR के लिए कौन से घरेलू उपाय काम करते हैं? — LPR Treatment in Hindi",
        a: "प्रभावी घरेलू उपाय: सोने से 3 घंटे पहले खाना खाएं, बिस्तर का सिरहाना 4–6 इंच ऊंचा रखें, चाय/कॉफी/कोल्ड ड्रिंक से परहेज करें, छोटे-छोटे भोजन खाएं, वजन नियंत्रित रखें और ढीले कपड़े पहनें। ये बदलाव डॉक्टरी इलाज के साथ सबसे प्रभावी हैं।",
      },
      {
        q: "LPR के लिए डॉक्टर से कब मिलना चाहिए?",
        a: "अगर गले में अटकाव या खांसी 3 हफ्ते से ज्यादा बनी हो, आवाज बैठ जाए, निगलने में दिक्कत हो, या ENT डॉक्टर इलाज से ठीक न हो — तो गैस्ट्रोएंटेरोलॉजिस्ट से मिलें। रांची में Dr. Akhilesh Yadav (DM Gastroenterology) LPR का एंडोस्कोपी से सही निदान करते हैं।",
      },
    ],
  },
  {
    slug: "endoscopy-vs-colonoscopy-differences-indications",
    titleHi: "एंडोस्कोपी और कोलोनोस्कोपी में क्या अंतर है? जानिए कब दोनों जांचें जरूरी होती हैं",
    titleEn: "Endoscopy vs. Colonoscopy: What is the Difference and Do You Need Both?",
    excerptHi: "एंडोस्कोपी और कोलोनोस्कोपी में मुख्य अंतर। जानिए ये जांचें कैसे होती हैं, इनमें कितना समय लगता है और कब डॉक्टर इन दोनों की सलाह देते हैं।",
    excerptEn: "Compare Upper GI Endoscopy and Colonoscopy. Understand their procedure differences, prep differences, sedation usage, and clinical conditions for each.",
    category: "Diagnostics",
    readTimeMins: 7,
    publishedAt: "January 4, 2027",
    emoji: "🔬",
    image: "/images/endoscopy-equipment.png",
    tags: [
      "Endoscopy",
      "Colonoscopy",
      "Diagnostics",
      "Comparison",
      "Hindi"
    ],
    metaTitle: "Endoscopy vs Colonoscopy: Differences & Uses",
    metaDescription: "एंडोस्कोपी और कोलोनोस्कोपी में मुख्य अंतर। जानिए ये जांचें कैसे होती हैं, इनमें कितना समय लगता है और कब डॉक्टर इन दोनों की सलाह देते हैं।",
    sections: [
      {
        type: "text",
        content: "जब पेट या आंतों से जुड़ी बीमारियों के निदान की बात आती है, तो एंडोस्कोपी (Endoscopy) और कोलोनोस्कोपी (Colonoscopy) दो सबसे महत्वपूर्ण और सटीक जांचें हैं। बहुत से मरीज इन दोनों जांचों के बीच भ्रमित हो जाते हैं और सोचते हैं कि ये एक ही हैं। हालांकि इन दोनों में लचीली नली और कैमरे का उपयोग किया जाता है, लेकिन ये पाचन तंत्र के पूरी तरह अलग हिस्सों की जांच करती हैं। आइए जानते हैं इनके बीच के अंतर।"
      },
      {
        heading: "🆚 एंडोस्कोपी और कोलोनोस्कोपी में मुख्य अंतर",
        type: "list",
        content: "दोनों जांचों के बीच मुख्य अंतर निम्नलिखित हैं:",
        list: [
          "अपर जीआई एंडोस्कोपी (Upper GI Endoscopy): यह जांच मुंह के रास्ते की जाती है और यह आपके ऊपरी पाचन तंत्र — भोजन की नली (Esophagus), पेट (Stomach), और छोटी आंत के पहले हिस्से (Duodenum) की जांच करती है। इसका उपयोग मुख्य रूप से एसिडिटी, अल्सर, निगलने में कठिनाई और पेट दर्द के कारणों का पता लगाने के लिए किया जाता है।",
          "कोलोनोस्कोपी (Colonoscopy): यह जांच गुदा मार्ग (Rectum) के रास्ते की जाती है और यह आपके निचले पाचन तंत्र — बड़ी आंत (Colon) और मलाशय की जांच करती है। इसका उपयोग पुरानी कब्ज, खूनी दस्त, अचानक वजन कम होने और आंत के कैंसर की जांच के लिए किया जाता है।"
        ]
      },
      {
        heading: "📋 तैयारी और समय में अंतर (Preparation & Duration)",
        type: "text",
        content: "एंडोस्कोपी के लिए मरीज को केवल 6 से 8 घंटे खाली पेट रहने की आवश्यकता होती है। यह जांच मात्र 5 से 10 मिनट में पूरी हो जाती है। वहीं, कोलोनोस्कोपी के लिए बड़ी आंत का पूरी तरह साफ होना जरूरी होता है, जिसके लिए एक दिन पहले लिक्विड डाइट लेनी पड़ती है और आंत साफ करने वाली दवा (Laxative) का सेवन करना पड़ता है। कोलोनोस्कोपी में सामान्यतः 15 से 30 मिनट का समय लगता है।"
      },
      {
        heading: "😴 क्या दोनों जांचों में दर्द होता है?",
        type: "tip",
        content: "आधुनिक चिकित्सा में दोनों जांचों को पूरी तरह आरामदायक बनाने के लिए 'Conscious Sedation' (हल्की बेहोशी) का उपयोग किया जाता है। रांची में डॉ. अखिलेश यादव के क्लिनिक में ये दोनों जांचें बेहोशी के तहत की जाती हैं, जिससे मरीज को कोई दर्द, घबराहट या खिंचाव का अनुभव नहीं होता।"
      }
    ]
  },
  {
    slug: "laparoscopic-gallbladder-surgery-ranchi-recovery",
    titleHi: "पित्त की थैली का दूरबीन ऑपरेशन (Laparoscopy): रिकवरी, खर्च और रांची में बेस्ट इलाज",
    titleEn: "Laparoscopic Gallbladder Surgery: Recovery, Safety, and Ranchi Cost",
    excerptHi: "पित्त की पथरी निकालने के दूरबीन ऑपरेशन (Laparoscopy) के बाद रिकवरी में कितना समय लगता है? रांची में इसका अनुमानित खर्च और ऑपरेशन के फायदे।",
    excerptEn: "Prepare for laparoscopic cholecystectomy. Discover surgery steps, recovery guidelines, price ranges in Ranchi, and why open surgery is rarely needed now.",
    category: "Stomach Care",
    readTimeMins: 7,
    publishedAt: "January 11, 2027",
    emoji: "🟢",
    image: "/images/gallstones-myths-blog.png",
    tags: [
      "Gallbladder Surgery",
      "Laparoscopy",
      "Cholecystectomy",
      "Ranchi",
      "Hindi"
    ],
    metaTitle: "Laparoscopic Gallbladder Surgery in Ranchi | Cost",
    metaDescription: "पित्त की पथरी निकालने के दूरबीन ऑपरेशन (Laparoscopy) के बाद रिकवरी में कितना समय लगता है? रांची में इसका अनुमानित खर्च और ऑपरेशन के फायदे।",
    sections: [
      {
        type: "text",
        content: "जब पित्त की थैली में पथरी (Gallbladder Stones) हो जाती है और वह दर्द, उल्टी या पीलिया जैसी समस्याएं पैदा करने लगती है, तो पित्त की थैली को निकालना आवश्यक हो जाता है। चिकित्सा विज्ञान में इसे कोलेसिस्टेक्टोमी (Cholecystectomy) कहते हैं। पहले इसके लिए पेट पर बड़ा चीरा लगाया जाता था, लेकिन आज दूरबीन विधि (Laparoscopic Surgery) के जरिए यह ऑपरेशन बेहद आसान, सुरक्षित और दर्दरहित हो गया है। आइए जानते हैं इसके फायदे और रांची में इसके खर्च के बारे में।"
      },
      {
        heading: "🌟 दूरबीन विधि (Laparoscopy) के क्या फायदे हैं?",
        type: "list",
        content: "पारंपरिक ऑपरेशन की तुलना में लैप्रोस्कोपी के कई फायदे हैं:",
        list: [
          "छोटा चीरा, कम दर्द: पेट पर कोई बड़ा कट नहीं लगाया जाता, केवल 3-4 छोटे छेद (की-होल) किए जाते हैं, जिससे बहुत कम दर्द होता है।",
          "न्यूनतम रक्तस्राव और टांके: टांके बहुत छोटे होते हैं जिनके निशान कुछ महीनों में गायब हो जाते हैं।",
          "तेजी से रिकवरी: मरीज ऑपरेशन के अगले ही दिन अस्पताल से छुट्टी पा सकते हैं और 3 से 5 दिनों में अपनी सामान्य दिनचर्या में लौट सकते हैं।",
          "इन्फेक्शन का बहुत कम खतरा।"
        ]
      },
      {
        heading: "🛌 ऑपरेशन के बाद रिकवरी और परहेज",
        type: "text",
        content: "ऑपरेशन के बाद शुरुआती 2 से 3 हफ्तों तक बहुत हल्का और सुपाच्य भोजन (कम वसा वाला खाना) खाने की सलाह दी जाती है, क्योंकि लिवर द्वारा बनाया गया पित्त सीधे छोटी आंत में गिरता है और शरीर को बिना गॉलब्लैडर के वसा पचाने के लिए थोड़ा अनुकूलित होना पड़ता है। भारी चीजें उठाना और कठिन व्यायाम करना 4 हफ्तों तक टालना चाहिए।"
      },
      {
        heading: "💰 रांची में दूरबीन ऑपरेशन का खर्च कितना है?",
        type: "tip",
        content: "Ranchi में लैप्रोस्कोपिक गॉलब्लैडर सर्जरी का खर्च अस्पताल की श्रेणी, कमरे के प्रकार और सर्जरी की जटिलता के आधार पर लगभग ₹30,000 से ₹65,000 के बीच होता है। डॉ. अखिलेश यादव रांची के प्रमुख अस्पतालों में इस सर्जरी के लिए गैस्ट्रो-मेडिकल टीम के साथ मिलकर मरीजों को सुरक्षित और किफायती उपचार प्रदान करते हैं।"
      }
    ]
  },
  {
    slug: "celiac-disease-gluten-free-indian-diet",
    titleHi: "गेहूं से एलर्जी (Celiac Disease): लक्षण, जांच और भारतीय ग्लूटेन-फ्री डाइट चार्ट",
    titleEn: "Celiac Disease & Gluten Free Indian Diet: Foods to Eat and Avoid",
    excerptHi: "सीलिएक रोग (गेहूं से एलर्जी) के लक्षण और जांच। भारतीय जीवनशैली में ग्लूटेन-फ्री डाइट कैसे अपनाएं? क्या खाएं और किन अनाजों से पूरी तरह बचें।",
    excerptEn: "Learn about Celiac disease (gluten allergy). Find a comprehensive Indian gluten-free diet chart containing grains like Ragi, Bajra, and Jowar.",
    category: "Gut Health",
    readTimeMins: 8,
    publishedAt: "January 18, 2027",
    emoji: "🌾",
    image: "/images/celiac-gluten-blog.png",
    tags: [
      "Celiac Disease",
      "Gluten Free",
      "Indian Diet",
      "Allergy",
      "Hindi"
    ],
    metaTitle: "Celiac Disease Gluten Free Indian Diet Chart | Ranchi",
    metaDescription: "सीलिएक रोग (गेहूं से एलर्जी) के लक्षण और जांच। भारतीय जीवनशैली में ग्लूटेन-फ्री डाइट कैसे अपनाएं? क्या खाएं और किन अनाजों से पूरी तरह बचें।",
    sections: [
      {
        type: "text",
        content: "सीलिएक रोग (Celiac Disease) एक ऑटोइम्यून बीमारी है जिसमें मरीज का इम्यून सिस्टम 'ग्लूटेन' (Gluten) नामक प्रोटीन को सहन नहीं कर पाता। ग्लूटेन मुख्य रूप से गेहूं, जौ और राई (rye) में पाया जाता है। जब सीलिएक रोग से पीड़ित व्यक्ति ग्लूटेन युक्त खाना खाता है, तो उसका शरीर छोटी आंत की अंदरूनी परत (Villi) पर हमला कर उसे नुकसान पहुंचाता है। इससे आंतें पोषक तत्वों (जैसे आयरन, कैल्शियम, विटामिन्स) को सोखना बंद कर देती हैं, जिससे मरीज कुपोषण और गंभीर कमजोरी का शिकार हो जाता है।"
      },
      {
        heading: "⚠️ सीलिएक रोग के मुख्य लक्षण",
        type: "list",
        content: "इसके लक्षण बच्चों और वयस्कों में अलग-अलग हो सकते हैं:",
        list: [
          "क्रॉनिक दस्त (Chronic Diarrhoea) या लगातार पेट फूलना और गैस बनना।",
          "बिना कारण गंभीर रूप से वजन कम होना और शरीर में खून की कमी (Anemia)।",
          "बच्चों में शारीरिक विकास का रुक जाना (stunted growth) और पेट बाहर आ जाना।",
          "लगातार कमजोरी, सिरदर्द और हड्डियों में दर्द।"
        ]
      },
      {
        heading: "🍲 भारतीय ग्लूटेन-फ्री डाइट प्लान (Gluten-Free Grains)",
        type: "list",
        content: "भारत में गेहूं मुख्य भोजन है, इसलिए सीलिएक रोगियों को गेहूं की रोटी की जगह इन अनाजों को शामिल करना चाहिए:",
        list: [
          "चावल (Rice): सफेद चावल और ब्राउन राइस पूरी तरह से ग्लूटेन-फ्री और सुरक्षित हैं।",
          "रागी, बाजरा, और ज्वार: इनकी रोटियां गेहूं की रोटी का बेहतरीन और पौष्टिक विकल्प हैं।",
          "मक्का और साबूदाना: यह भी ग्लूटेन-फ्री हैं और इनका सेवन आसानी से किया जा सकता है।",
          "दालें, अंडे, ताजी सब्जियां, फल और दूध: ये प्राकृतिक रूप से ग्लूटेन-फ्री हैं।"
        ]
      },
      {
        heading: "🚫 किन चीजों से पूरी तरह बचें? (Triggers)",
        type: "list",
        content: "इन खाद्य पदार्थों में ग्लूटेन छिपा हो सकता है, इसलिए इनसे बचें:",
        list: [
          "गेहूं से बनी चीजें: रोटी, सूजी, मैदा, ब्रेड, पास्ता, बिस्कुट, केक, और नूडल्स।",
          "बाहर के मसाले और सॉस: कई बार मसालों में गाढ़ा करने के लिए गेहूं का आटा मिलाया जाता है।",
          "हिंग (Asafoetida): बाजार में मिलने वाली हिंग में गेहूं का स्टार्च मिलाया जाता है। केवल शुद्ध या ग्लूटेन-फ्री हिंग लें।"
        ]
      }
    ]
  },
  {
    slug: "lactose-intolerance-indian-dairy-alternatives",
    titleHi: "दूध न पचने की समस्या (Lactose Intolerance): लक्षण और भारतीय डेयरी विकल्प",
    titleEn: "Lactose Intolerance: Symptoms, Indian Alternatives, and Dairy Management",
    excerptHi: "दूध पीने के बाद गैस, दस्त और पेट फूलने की समस्या? जानिए लैक्टोज इनटोलरेंस के लक्षण, दही/पनीर खाने के नियम और बेस्ट भारतीय डेयरी विकल्प।",
    excerptEn: "Struggling with dairy? Understand Lactose Intolerance, why milk causes bloating and diarrhea, and how to manage calcium needs using curd, paneer, and plant milk.",
    category: "Gut Health",
    readTimeMins: 7,
    publishedAt: "January 25, 2027",
    emoji: "🥛",
    image: "/images/lactose-intolerance-blog.png",
    tags: [
      "Lactose Intolerance",
      "Dairy Free",
      "Indian Diet",
      "Bloating",
      "Hindi"
    ],
    metaTitle: "Lactose Intolerance Symptoms & Alternatives | India",
    metaDescription: "दूध पीने के बाद गैस, दस्त और पेट फूलने की समस्या? जानिए लैक्टोज इनटोलरेंस के लक्षण, दही/पनीर खाने के नियम और बेस्ट भारतीय डेयरी विकल्प।",
    sections: [
      {
        type: "text",
        content: "दूध को भारत में एक संपूर्ण और आवश्यक आहार माना जाता है। लेकिन कई लोगों को दूध पीने के 30 मिनट से 2 घंटे के भीतर पेट में मरोड़, तेज गैस, पेट फूलना (bloating) और दस्त होने की समस्या होने लगती है। चिकित्सा विज्ञान में इसे लैक्टोज इनटोलरेंस (Lactose Intolerance) या 'लैक्टोज असहिष्णुता' कहते हैं। यह कोई बीमारी नहीं है, बल्कि पेट में 'लैक्टेज' (Lactase) नामक एंजाइम की कमी के कारण होता है, जो दूध की प्राकृतिक चीनी (Lactose) को पचाने का काम करता है।"
      },
      {
        heading: "🆚 लैक्टोज इनटोलरेंस और दूध की एलर्जी में अंतर",
        type: "text",
        content: "लैक्टोज इनटोलरेंस पाचन तंत्र की समस्या है जिसमें सिर्फ गैस या दस्त होते हैं और यह जानलेवा नहीं होती। वहीं, दूध की एलर्जी (Milk Allergy) सीधे इम्यून सिस्टम की प्रतिक्रिया है जिसमें सांस लेने में तकलीफ, चेहरे पर सूजन, और चकत्ते होने लगते हैं, जो कि एक गंभीर स्थिति है।"
      },
      {
        heading: "🍲 भारतीय आहार में डेयरी के विकल्प (Alternatives)",
        type: "list",
        content: "यदि आपको दूध नहीं पचता, तो भी आप कैल्शियम और प्रोटीन के लिए इन विकल्पों को आजमा सकते हैं:",
        list: [
          "दही और छाछ (Curd & Buttermilk): दही जमाने की प्रक्रिया के दौरान बैक्टीरिया अधिकांश लैक्टोज को लैक्टिक एसिड में बदल देते हैं। इसलिए, लैक्टोज इनटोलरेंस वाले अधिकांश लोग दही को आसानी से पचा लेते हैं।",
          "पनीर (Paneer): छैना या पनीर में दूध की तुलना में बहुत कम लैक्टोज होता है और यह प्रोटीन का बेहतरीन स्रोत है।",
          "प्लांट-बेस्ड मिल्क: बादाम का दूध (Almond Milk), सोया मिल्क (Soy Milk) या नारियल का दूध बिल्कुल लैक्टोज-फ्री होते हैं।",
          "कैल्शियम के गैर-डेयरी स्रोत: रागी, हरी पत्तेदार सब्जियां, बादाम और तिल में पर्याप्त कैल्शियम होता है।"
        ]
      }
    ]
  },
  {
    slug: "h-pylori-recurrence-prevention-tips",
    titleHi: "एच पायलोरी (H. pylori) इन्फेक्शन बार-बार क्यों हो जाता है? इसे हमेशा के लिए रोकने के तरीके",
    titleEn: "Why H. Pylori Infection Comes Back & How to Prevent Recurrence",
    excerptHi: "एक बार इलाज के बाद दोबारा H. pylori इन्फेक्शन होने के कारण। जानिए आंतों के छाले (Ulcers) और इन्फेक्शन को दोबारा होने से कैसे रोकें। हाइजीन और डाइट टिप्स।",
    excerptEn: "Why does H. Pylori infection recur? Understand antibiotic resistance, household transmission vectors, and strict hygiene steps to cure it permanently.",
    category: "Stomach Care",
    readTimeMins: 7,
    publishedAt: "February 1, 2027",
    emoji: "🦠",
    image: "/images/gerd-reflux-blog.png",
    tags: [
      "H. Pylori",
      "Stomach Ulcer",
      "Infection",
      "Recurrence",
      "Hindi"
    ],
    metaTitle: "H. Pylori Recurrence Prevention Tips | Dr. Akhilesh",
    metaDescription: "एक बार इलाज के बाद दोबारा H. pylori इन्फेक्शन होने के कारण। जानिए आंतों के छाले (Ulcers) और इन्फेक्शन को दोबारा होने से कैसे रोकें। हाइजीन और डाइट टिप्स।",
    sections: [
      {
        type: "text",
        content: "एच पायलोरी (Helicobacter pylori) एक ऐसा बैक्टीरिया है जो पेट के अंदरूनी परत में संक्रमण फैलाता है और एसिडिटी, सूजन और पेट के अल्सर (Ulcers) का कारण बनता है। बहुत से मरीज शिकायत करते हैं कि उन्होंने डॉक्टर द्वारा दी गई 14 दिनों की एंटीबायोटिक थेरेपी पूरी की, वे ठीक भी हो गए, लेकिन कुछ महीनों बाद उन्हें दोबारा वही पेट दर्द और जलन महसूस होने लगी। जांच कराने पर पता चलता है कि संक्रमण वापस आ गया है। आइए जानते हैं ऐसा क्यों होता है और इससे कैसे बचें।"
      },
      {
        heading: "🔄 संक्रमण दोबारा होने के 3 मुख्य कारण",
        type: "list",
        content: "H. pylori का दोबारा आना निम्नलिखित कारणों से हो सकता है:",
        list: [
          "अधूरा इलाज या एंटीबायोटिक रेजिस्टेंस: यदि मरीज दवाओं का कोर्स बीच में ही छोड़ देते हैं, तो कुछ बैक्टीरिया जीवित बच जाते हैं और दवाओं के प्रति प्रतिरोधी (resistant) हो जाते हैं, जिससे वे दोबारा हमला करते हैं।",
          "दूषित पानी और भोजन (Re-infection): यह बैक्टीरिया दूषित पानी और अधपके भोजन के जरिए फैलता है। इलाज के बाद यदि फिर से बाहर का असुरक्षित खाना खाया जाए, तो दोबारा संक्रमण हो जाता है।",
          "पारिवारिक सदस्यों से संक्रमण (Household Transmission): यदि परिवार के किसी अन्य सदस्य के पेट में यह बैक्टीरिया है (भले ही उन्हें लक्षण न हों), तो उनके साथ बर्तन साझा करने या झूठा खाने से संक्रमण वापस आ सकता है।"
        ]
      },
      {
        heading: "🛡️ दोबारा संक्रमण से बचने के कड़े नियम",
        type: "list",
        content: "H. pylori को स्थायी रूप से खत्म करने के लिए इन आदतों को अपनाएं:",
        list: [
          "हाथों की सफाई: खाना खाने से पहले और शौचालय के उपयोग के बाद साबुन से 20 सेकंड तक अच्छी तरह हाथ धोएं।",
          "उबला या फिल्टर पानी पिएं: पीने के लिए केवल उबला हुआ या आरओ (RO) का साफ पानी ही उपयोग करें। बाहर का खुला पानी बिल्कुल न पिएं।",
          "झूठा खाने से बचें: परिवार में एक-दूसरे का झूठा खाने या एक ही बर्तन में साथ खाने से बचें जब तक कि सभी सदस्य पूरी तरह ठीक न हों।",
          "ताजा गर्म भोजन: बासी भोजन और कच्चे सलाद से बचें (जब तक कि उन्हें अच्छी तरह साफ न किया गया हो)।"
        ]
      }
    ]
  },
  {
    slug: "cholesterol-fatty-liver-connection-diet",
    titleHi: "कोलेस्ट्रॉल और फैटी लिवर का आपस में संबंध: दोनों को एक साथ कैसे कंट्रोल करें?",
    titleEn: "High Cholesterol and Fatty Liver: The Connection and How to Manage Both",
    excerptHi: "हाई कोलेस्ट्रॉल और फैटी लिवर एक साथ होने के खतरे। जानिए कैसे खानपान में सुधार करके लिपिड प्रोफाइल और लिवर फैट दोनों को एक साथ सामान्य करें।",
    excerptEn: "Explore the metabolic link between hyperlipidemia and fatty liver. Discover foods and exercise plans to lower LDL cholesterol and liver fat simultaneously.",
    category: "Liver Health",
    readTimeMins: 7,
    publishedAt: "February 8, 2027",
    emoji: "⚖️",
    image: "/images/fatty-liver-diet-blog.png",
    tags: [
      "Fatty Liver",
      "Cholesterol",
      "Diet",
      "Dyslipidemia",
      "Hindi"
    ],
    metaTitle: "High Cholesterol and Fatty Liver Link | Diet Guide",
    metaDescription: "हाई कोलेस्ट्रॉल और फैटी लिवर एक साथ होने के खतरे। जानिए कैसे खानपान में सुधार करके लिपिड प्रोफाइल और लिवर फैट दोनों को एक साथ सामान्य करें।",
    sections: [
      {
        type: "text",
        content: "जब आप अपना वार्षिक स्वास्थ्य परीक्षण कराते हैं, तो अक्सर दो रिपोर्ट एक साथ खराब आती हैं — लिपिड प्रोफाइल में 'हाई कोलेस्ट्रॉल' (High Cholesterol/Triglycerides) और अल्ट्रासाउंड में 'फैटी लिवर' (Fatty Liver)। यह कोई संयोग नहीं है। चिकित्सा विज्ञान में इन दोनों के बीच एक बहुत ही गहरा और सीधा संबंध है। वास्तव में, ये दोनों हमारे शरीर में वसा (Fat) के असंतुलन और सुस्त मेटाबॉलिज्म के कारण एक साथ उत्पन्न होते हैं।"
      },
      {
        heading: "🔄 कोलेस्ट्रॉल और फैटी लिवर का संबंध (The Metabolic Link)",
        type: "text",
        content: "हमारा लिवर ही शरीर में कोलेस्ट्रॉल और वसा को प्रोसेस करने का मुख्य कारखाना है। जब हम आवश्यकता से अधिक वसायुक्त, मीठा, या मैदे से बना भोजन खाते हैं, तो रक्त में ट्राइग्लिसराइड्स (Triglycerides) और खराब कोलेस्ट्रॉल (LDL) की मात्रा बढ़ जाती है। लिवर जब इस अतिरिक्त वसा को पचाने या बाहर निकालने में असमर्थ हो जाता है, तो वह इसे अपनी कोशिकाओं के अंदर ही जमा करना शुरू कर देता है। यही जमा वसा आगे चलकर फैटी लिवर की बीमारी बन जाती है। यानी, बढ़ा हुआ कोलेस्ट्रॉल फैटी लिवर को बढ़ाता है और कमजोर लिवर खराब कोलेस्ट्रॉल को और बढ़ा देता है।"
      },
      {
        heading: "🥗 दोनों को एक साथ सामान्य करने के लिए बेस्ट डाइट",
        type: "list",
        content: "खानपान में इन बदलावों को करके आप इन दोनों समस्याओं पर एक साथ काबू पा सकते हैं:",
        list: [
          "घुलनशील फाइबर (Soluble Fiber): ओट्स, सेब, अमरूद, और हरी बीन्स का सेवन करें। फाइबर आंतों में कोलेस्ट्रॉल के अवशोषण को रोकता है।",
          "स्वस्थ वसा (Healthy Fats): रिफाइंड तेल और डालडा घी का उपयोग पूरी तरह बंद करें। इसके बजाय ऑलिव ऑयल या कच्ची घानी सरसों के तेल का कम मात्रा में उपयोग करें। मुट्ठीभर बादाम और अखरोट खाएं (यह अच्छे कोलेस्ट्रॉल HDL को बढ़ाते हैं)।",
          "ओमेगा-3 फैटी एसिड: यदि आप मांसाहारी हैं, तो ओमेगा-3 युक्त मछली खाएं, अन्यथा अलसी के बीज (flax seeds) लें। यह लिवर में जमे फैट को कम करते हैं।"
        ]
      },
      {
        heading: "🏃‍♂️ शारीरिक व्यायाम का महत्व",
        type: "text",
        content: "सप्ताह में कम से कम 5 दिन रोजाना 40 मिनट तेज चलने या दौड़ने की आदत डालें। शारीरिक सक्रियता लिवर में जमा फैट को ऊर्जा के रूप में जलाती है और रक्त में खराब कोलेस्ट्रॉल (LDL) को कम करके अच्छे कोलेस्ट्रॉल (HDL) को बढ़ाती है।"
      }
    ]
  },
  {
    slug: "fatty-liver-mein-kya-khana-chahiye",
    image: "/images/fatty-liver-diet-blog.png",
    titleHi: "फैटी लिवर में क्या खाना चाहिए? क्या खाएं, क्या न खाएं — पूरी जानकारी",
    titleEn: "What to Eat in Fatty Liver? Complete Hindi Diet Guide",
    excerptHi: "फैटी लिवर में क्या खाना चाहिए, क्या नहीं खाना चाहिए — यह सवाल हर fatty liver patient के मन में होता है। Dr. Akhilesh Yadav की सलाह में जानें कौन से foods liver को ठीक करते हैं और कौन से नुकसान पहुंचाते हैं।",
    excerptEn: "What should you eat if you have fatty liver? Dr. Akhilesh Yadav, Gastroenterologist Ranchi, explains the complete diet guide in Hindi.",
    category: "Liver Health",
    readTimeMins: 7,
    publishedAt: "July 2026",
    emoji: "🥦",
    tags: ["Fatty Liver", "Diet", "Hindi", "NAFLD", "kya khana chahiye", "liver diet"],
    metaTitle: "फैटी लिवर में क्या खाना चाहिए? | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "फैटी लिवर में क्या खाएं, क्या न खाएं — chawal खा सकते हैं या नहीं? 7-दिन का diet plan। Dr. Akhilesh Yadav, Gastroenterologist, Orchid Medical Centre, Ranchi।",
    sections: [
      {
        type: "text",
        content: "अगर आपको फैटी लिवर की बीमारी है और आपके मन में यह सवाल है — 'फैटी लिवर में क्या खाना चाहिए, क्या नहीं खाना चाहिए?' — तो यह article आपके लिए ही लिखा गया है।\n\nमैं Dr. Akhilesh Yadav हूँ — DM Gastroenterologist & Hepatologist, Orchid Medical Centre, Ranchi। अपने clinic में हर रोज़ मैं fatty liver के मरीज़ों को यही सवाल पूछते देखता हूँ। इस article में मैं आपको वही जानकारी दूंगा जो मैं अपने patients को clinic में देता हूँ।",
      },
      {
        type: "tip",
        heading: "💡 सबसे पहले एक ज़रूरी बात",
        content: "फैटी लिवर (NAFLD — Non-Alcoholic Fatty Liver Disease) एक reversible बीमारी है। यानी सही खानपान और जीवनशैली से इसे पूरी तरह ठीक किया जा सकता है — बिना किसी बड़ी दवाई के। Diet ही इसकी सबसे बड़ी दवाई है।",
      },
      {
        heading: "✅ फैटी लिवर में क्या खाना चाहिए?",
        type: "list",
        content: "ये foods आपके liver की fat को कम करने में directly मदद करते हैं:",
        list: [
          "हरी सब्ज़ियाँ (पालक, मेथी, करेला, लौकी, तोरई, गाजर) — liver को detox करती हैं",
          "दालें (मूंग, मसूर, चना) — plant protein, fat बिल्कुल कम, liver के लिए safe",
          "ओट्स और दलिया — fiber से भरपूर, blood sugar control करते हैं, liver fat कम होती है",
          "अखरोट (Walnuts) — omega-3 fatty acids, liver inflammation कम करते हैं",
          "लहसुन — liver enzymes activate करता है, fat metabolism बेहतर होती है",
          "हल्दी वाला दूध — curcumin liver cells protect करता है",
          "ग्रीन टी (बिना चीनी) — antioxidants से liver fat कम होती है",
          "सेब, पपीता, अनार — fiber + antioxidants, liver healing के लिए",
          "Coffee (1-2 cup black, without sugar) — research में liver enzymes improve होते हैं",
          "मछली (रोहू, कतला) — omega-3 protein source, liver के लिए बेहतरीन",
          "Flax seeds / अलसी — omega-3 का vegetarian source",
        ],
      },
      {
        heading: "❌ फैटी लिवर में क्या नहीं खाना चाहिए?",
        type: "list",
        content: "ये चीज़ें liver में fat और बढ़ाती हैं — इनसे पूरी तरह बचें:",
        list: [
          "शराब (Alcohol) — बिल्कुल बंद करें, non-alcoholic fatty liver में भी शराब बहुत नुकसान करती है",
          "तला-भुना खाना — समोसा, पकोड़ा, पूरी, chips — liver पर सबसे ज़्यादा load",
          "मैदा से बनी चीज़ें — bread, biscuit, noodles, pizza, pasta — liver में fat तेज़ी से जमती है",
          "मिठाई और refined sugar — ladoo, barfi, cold drinks, packaged juice",
          "Red meat (mutton, beef) — saturated fat बहुत ज़्यादा होती है",
          "Packaged और processed food — hidden sugar, trans fat, preservatives",
          "Full-fat dairy ज़्यादा मात्रा में — मलाई, butter, cream",
          "Packaged fruit juice — fiber नहीं, सिर्फ concentrated sugar",
        ],
      },
      {
        heading: "🍚 क्या फैटी लिवर में चावल खा सकते हैं? (Can You Eat Rice?)",
        type: "text",
        content: "यह सबसे common सवाल है जो मेरे patients पूछते हैं। जवाब है — हाँ, खा सकते हैं, लेकिन कम मात्रा में और सही तरीके से।\n\nWhite rice का glycemic index high होता है, जिससे blood sugar जल्दी बढ़ता है और liver में fat जमा होने की संभावना बढ़ती है। इसलिए:\n\n✓ चावल खाएं — लेकिन रोटी से कम मात्रा में (आधा कटोरी काफी है)\n✓ Brown rice ज़्यादा better है — इसमें fiber होता है\n✓ दोपहर में खाएं, रात में न खाएं\n✓ अकेले चावल की जगह दाल-सब्ज़ी के साथ खाएं — इससे glycemic load कम होता है\n✗ सिर्फ चावल-दाल या सिर्फ white rice न खाएं\n\nसारांश: Fatty liver में चावल completely बंद करने की ज़रूरत नहीं है — बस quantity और combination सही रखें।",
      },
      {
        heading: "📅 7-दिन का फैटी लिवर Diet Plan (Hindi)",
        type: "text",
        content: "यह एक sample diet plan है। हर दिन का pattern यही रहेगा:\n\n🌅 सुबह उठकर (खाली पेट): 1 गिलास गर्म पानी + नींबू + हल्दी\n\n🍳 नाश्ता (8-9 बजे): दलिया / moong dal chilla / oats + 1 कप green tea\n\n🥗 Lunch (1-2 बजे): 2 गेहूं की रोटी + सब्ज़ी + 1 कटोरी दाल + salad (आधा कटोरी चावल optional)\n\n🥜 Evening Snack (5 बजे): मुट्ठी भर अखरोट / roasted chana\n\n🌙 Dinner (7-8 बजे): 1-2 रोटी + हल्की सब्ज़ी + दाल soup। रात 8 बजे के बाद कुछ न खाएं।\n\nइस pattern को 3 months follow करने से ultrasound में clearly improvement आती है।",
      },
      {
        heading: "💪 Diet के साथ ये भी ज़रूरी है",
        type: "list",
        content: "सिर्फ diet काफी नहीं — ये habits भी साथ में रखें:",
        list: [
          "रोज़ 30-45 मिनट तेज़ चलना (Brisk Walk) — liver fat जलाने का सबसे effective तरीका",
          "BMI 25 से नीचे रखने की कोशिश करें — weight loss = liver fat loss",
          "रात को 7-8 बजे तक खाना खा लें — late night eating liver के लिए बहुत नुकसानदेह",
          "दिन में 8-10 गिलास पानी पिएं",
          "Stress कम करें — cortisol hormone liver में fat जमा करता है",
          "नींद पूरी लें (7-8 घंटे) — poor sleep liver metabolism को बिगाड़ती है",
        ],
      },
      {
        heading: "⚠️ Doctor से कब मिलें?",
        type: "warning",
        content: "अगर ultrasound में Grade 2 या Grade 3 fatty liver है, liver function tests (SGOT/SGPT) abnormal हैं, या पेट में दर्द, थकान, और भूख न लगने की शिकायत है — तो सिर्फ diet पर depend न करें। इस condition में medication और close monitoring ज़रूरी होती है।\n\nRanchi में Orchid Medical Centre में Dr. Akhilesh Yadav से appointment लें। OPD: सोमवार–शनिवार, सुबह 10 बजे – शाम 8 बजे।",
      },
    ],
  },
  {
    slug: "bilirubin-test-meaning-ranchi",
    titleHi: "बिलीरुबिन टेस्ट क्या होता है? — Normal Range, High Bilirubin का मतलब",
    titleEn: "Bilirubin Test: Normal Range, High Levels and What It Means | Ranchi",
    excerptHi: "बिलीरुबिन टेस्ट में क्या देखा जाता है? Normal Range क्या है? अगर बिलीरुबिन बढ़ा हुआ आए तो क्या करें? रांची में Liver Function Test और Gastroenterologist।",
    excerptEn: "Understand your bilirubin test results. Learn about normal bilirubin range, causes of high bilirubin (jaundice, hepatitis, cirrhosis) and when to see a liver specialist in Ranchi.",
    category: "Liver Health",
    readTimeMins: 6,
    publishedAt: "February 15, 2027",
    emoji: "🧪",
    image: "/images/liver-icon.png",
    tags: [
      "Bilirubin Test",
      "Liver Function Test",
      "Jaundice",
      "Ranchi",
      "Hindi"
    ],
    metaTitle: "Bilirubin Test in Ranchi | Normal Range & High Bilirubin Meaning",
    metaDescription: "बिलीरुबिन टेस्ट में क्या देखा जाता है? Normal Range क्या है? अगर बिलीरुबिन बढ़ा हुआ आए तो क्या करें? रांची में Liver Function Test और Gastroenterologist।",
    sections: [
      {
        type: "text",
        content: "जब भी डॉक्टर लिवर की जांच के लिए LFT (Liver Function Test) करवाते हैं, उसमें एक बहुत महत्वपूर्ण मान होता है — बिलीरुबिन (Bilirubin)। बहुत से मरीज रिपोर्ट में 'Total Bilirubin High' देखकर घबरा जाते हैं लेकिन यह नहीं जानते कि इसका क्या मतलब है। बिलीरुबिन वह पीला रंग का पदार्थ है जो हमारे पुराने लाल रक्त कोशिकाओं (Red Blood Cells) के टूटने पर बनता है और लिवर इसे पित्त (Bile) के रूप में शरीर से बाहर निकालता है। जब लिवर इस काम में विफल हो जाता है, तो बिलीरुबिन खून में जमा होने लगता है — जिसका सबसे पहला संकेत पीलिया (Jaundice) है।"
      },
      {
        heading: "📊 बिलीरुबिन की Normal Range क्या है?",
        type: "list",
        content: "बिलीरुबिन दो प्रकार का होता है और रिपोर्ट में दोनों अलग-अलग दिखते हैं:",
        list: [
          "Total Bilirubin (कुल बिलीरुबिन): सामान्य मान 0.1 से 1.2 mg/dL। इससे ज़्यादा होने पर आगे जांच ज़रूरी है।",
          "Direct Bilirubin (सीधा / Conjugated): सामान्य मान 0 से 0.3 mg/dL। यह लिवर की कोशिकाओं द्वारा प्रसंस्कृत होता है।",
          "Indirect Bilirubin (अप्रत्यक्ष / Unconjugated): सामान्य मान 0.1 से 0.9 mg/dL। यह RBCs के टूटने से बनता है।",
          "नवजात शिशुओं में बिलीरुबिन की range अलग होती है और 'Neonatal Jaundice' एक अलग स्थिति है।"
        ]
      },
      {
        heading: "⚠️ बिलीरुबिन बढ़ने के कारण (Causes of High Bilirubin)",
        type: "list",
        content: "बिलीरुबिन कई कारणों से बढ़ सकता है — इसका सही कारण जानने के लिए डॉक्टर अन्य जांचें भी करते हैं:",
        list: [
          "हेपेटाइटिस A, B, C या E: वायरल इन्फेक्शन से लिवर की कोशिकाएं क्षतिग्रस्त होती हैं।",
          "लिवर सिरोसिस (Liver Cirrhosis): लिवर के गंभीर रूप से क्षतिग्रस्त होने पर बिलीरुबिन प्रोसेस नहीं होता।",
          "पित्त नली में रुकावट (Bile Duct Obstruction): पथरी, ट्यूमर या stricture के कारण पित्त बाहर नहीं निकल पाता।",
          "हेमोलिटिक एनीमिया (Hemolytic Anemia): RBCs बहुत तेज़ी से टूटती हैं — Indirect bilirubin बढ़ता है।",
          "Gilbert's Syndrome: यह एक genetic condition है जिसमें बिलीरुबिन थोड़ा बढ़ा रहता है लेकिन खतरनाक नहीं होता।"
        ]
      },
      {
        heading: "🟡 पीलिया (Jaundice) और बिलीरुबिन का संबंध",
        type: "tip",
        content: "जब Total Bilirubin 2-3 mg/dL से ऊपर जाता है, तो आंखों का सफेद हिस्सा (sclera) पीला दिखने लगता है — इसे Icterus कहते हैं। 3 mg/dL से ऊपर जाने पर त्वचा भी पीली हो जाती है जिसे हम पीलिया (Jaundice) कहते हैं। पेशाब गहरे पीले या चाय के रंग का हो जाता है और मल (stool) हल्के या सफेद रंग का हो सकता है।"
      },
      {
        heading: "🏥 रांची में Bilirubin Test और Liver Specialist",
        type: "text",
        content: "रांची में Liver Function Test (LFT) किसी भी अच्छी pathology lab से करवाया जा सकता है। लेकिन रिपोर्ट समझने और आगे का इलाज तय करने के लिए DM Gastroenterologist से मिलना ज़रूरी है। Dr. Akhilesh Yadav, DM Gastroenterology & Hepatology, Orchid Medical Centre Ranchi में लिवर की सभी समस्याओं का निदान और उपचार करते हैं। अपॉइंटमेंट के लिए: 7764028474।"
      }
    ],
    faqs: [
      {
        q: "Bilirubin Test क्यों करवाया जाता है?",
        a: "Bilirubin test LFT (Liver Function Test) का हिस्सा है। इसे पीलिया के कारण का पता लगाने, hepatitis की जांच करने, लिवर की कार्यक्षमता मापने और पित्त नली की रुकावट (bile duct obstruction) की जांच के लिए करवाया जाता है।",
      },
      {
        q: "Total Bilirubin 2 mg/dL — क्या यह खतरनाक है?",
        a: "Total Bilirubin 1.2 mg/dL की normal limit से थोड़ा ऊपर (1.2-2.0) होना हमेशा गंभीर नहीं होता — Gilbert's Syndrome जैसी harmless condition में यह थोड़ा बढ़ा रहता है। लेकिन 2 mg/dL से ऊपर जाने पर, खासकर अगर आंखें पीली हैं या पेशाब गहरा है, तो gastroenterologist से ज़रूर मिलें।",
      },
      {
        q: "Direct और Indirect Bilirubin में क्या अंतर है?",
        a: "Indirect (unconjugated) bilirubin तब बढ़ता है जब RBCs बहुत तेज़ी से टूटती हैं (hemolysis) — जैसे malaria में। Direct (conjugated) bilirubin तब बढ़ता है जब लिवर या पित्त नली में समस्या हो — जैसे hepatitis, cirrhosis, या bile duct stone। दोनों का बढ़ना अलग-अलग बीमारियों की तरफ इशारा करता है।",
      },
      {
        q: "Bilirubin कम करने के लिए क्या करें?",
        a: "बिलीरुबिन कम करने का तरीका इसके कारण पर निर्भर है। Hepatitis में आराम और antiviral दवाएं, पित्त नली की रुकावट में ERCP या surgery, और cirrhosis में liver care। खुद से कोई दवा न लें — पहले कारण पता करें। रांची में Dr. Akhilesh Yadav: 7764028474।",
      },
    ],
  },
  {
    slug: "liver-specialist-vs-gastroenterologist-ranchi",
    titleHi: "लिवर स्पेशलिस्ट डॉक्टर कौन होते हैं? Ranchi में DM Gastroenterologist से मिलें",
    titleEn: "Liver Specialist Doctor in Ranchi | Dr. Akhilesh Yadav DM Gastroenterologist",
    excerptHi: "Ranchi में लिवर की बीमारी के लिए कौन से डॉक्टर से मिलें? General Physician, Gastroenterologist और Hepatologist में क्या फर्क है? जानिए DM Gastroenterology क्या होता है।",
    excerptEn: "Looking for a liver specialist doctor in Ranchi? Understand the difference between a General Physician, Gastroenterologist, and Hepatologist — and why Dr. Akhilesh Yadav's DM degree makes the difference.",
    category: "Liver Health",
    readTimeMins: 5,
    publishedAt: "February 22, 2027",
    emoji: "🩺",
    image: "/images/liver-icon.png",
    tags: [
      "Liver Specialist",
      "Gastroenterologist",
      "Hepatologist",
      "Ranchi",
      "Hindi"
    ],
    metaTitle: "Liver Specialist Doctor in Ranchi | Dr. Akhilesh Yadav DM Gastro",
    metaDescription: "Ranchi में लिवर की बीमारी के लिए कौन से डॉक्टर से मिलें? General Physician, Gastroenterologist और Hepatologist में क्या फर्क है? जानिए DM Gastroenterology क्या होता है।",
    sections: [
      {
        type: "text",
        content: "जब किसी को पीलिया हो, लिवर की रिपोर्ट खराब आए, या पेट में पानी भर जाए — तो सबसे पहला सवाल यही होता है: 'किस डॉक्टर के पास जाएं?' रांची में 'Liver Specialist Doctor' ढूंढने पर लोग confuse हो जाते हैं क्योंकि इस specialization के कई नाम हैं — Hepatologist, Gastroenterologist, और General Physician। यह article आपको सही डॉक्टर चुनने में मदद करेगा।"
      },
      {
        heading: "👨‍⚕️ General Physician vs. Gastroenterologist vs. Hepatologist",
        type: "list",
        content: "तीनों डॉक्टरों की training और specialization अलग-अलग है:",
        list: [
          "General Physician (MBBS/MD Medicine): सामान्य बीमारियों का इलाज करते हैं। लिवर की साधारण जांच और दवाएं दे सकते हैं, लेकिन जटिल लिवर रोग में specialist की ज़रूरत होती है।",
          "DM Gastroenterologist: MBBS → MD Medicine → DM Gastroenterology — 3 स्तरों की training के बाद। पेट, आंत और लिवर की सभी बीमारियों में expert। Hepatology (liver diseases) इसी specialization का हिस्सा है।",
          "Hepatologist (Liver Specialist): कुछ DM Gastroenterologists liver diseases में extra training लेते हैं और खुद को 'Hepatologist' कहते हैं। India में standalone Hepatology DM Gastroenterology के अंतर्गत ही आती है।",
          "सरल शब्दों में: DM Gastroenterologist = Liver Specialist + GI Specialist — एक ही डॉक्टर जो पेट और लिवर दोनों की देखभाल करता है।"
        ]
      },
      {
        heading: "🔬 DM Gastroenterology — यह Degree क्यों ज़रूरी है?",
        type: "tip",
        content: "DM (Doctorate of Medicine) Gastroenterology भारत की सबसे उच्च medical degree है — इसमें 3 साल की super-specialization training होती है जिसमें endoscopy, colonoscopy, liver biopsy, ERCP और liver diseases का गहन अध्ययन होता है। Ranchi में Dr. Akhilesh Yadav ने यही degree हासिल की है, जो उन्हें लिवर और पाचन तंत्र की सभी बीमारियों के लिए Jharkhand के चुनिंदा qualified specialists में से एक बनाती है।"
      },
      {
        heading: "🏥 Ranchi में Dr. Akhilesh Yadav — Liver Specialist",
        type: "list",
        content: "Dr. Akhilesh Yadav, DM Gastroenterology & Hepatology, Orchid Medical Centre Ranchi में इन लिवर बीमारियों का उपचार करते हैं:",
        list: [
          "Fatty Liver (NAFLD/NASH) — Grade 1, 2, 3",
          "Hepatitis B और C — antiviral therapy",
          "Liver Cirrhosis और Ascites (पेट में पानी)",
          "Jaundice (पीलिया) — कारण की जांच और इलाज",
          "Liver Cancer — early detection और management",
          "ERCP — पित्त नली की पथरी निकालना (बिना ऑपरेशन)"
        ]
      },
      {
        heading: "📞 अपॉइंटमेंट कैसे लें?",
        type: "text",
        content: "रांची में Orchid Medical Centre, Morabadi में Dr. Akhilesh Yadav सोमवार से शनिवार सुबह 10 बजे से शाम 8 बजे OPD देते हैं। अपॉइंटमेंट के लिए: 7764028474 पर call या WhatsApp करें। Same-day appointment भी available है।"
      }
    ],
    faqs: [
      {
        q: "Ranchi में Liver Specialist Doctor कौन हैं?",
        a: "Ranchi में Dr. Akhilesh Yadav, DM Gastroenterology & Hepatology, Orchid Medical Centre (Morabadi) में लिवर के सभी रोगों के specialist हैं। वे Jharkhand के चुनिंदा DM Gastroenterologists में से हैं जो fatty liver, hepatitis, cirrhosis, ascites और liver cancer का treatment करते हैं। अपॉइंटमेंट: 7764028474।",
      },
      {
        q: "Liver Doctor और Gastroenterologist में क्या फर्क है?",
        a: "India में अलग से 'Liver Doctor' की कोई standalone degree नहीं होती। DM Gastroenterologist ही liver specialist होते हैं — उनकी training में hepatology (liver diseases) शामिल होती है। General Physician लिवर की साधारण जांच कर सकते हैं, लेकिन hepatitis B/C treatment, liver cirrhosis management, या ERCP के लिए DM Gastroenterologist ज़रूरी है।",
      },
      {
        q: "पीलिया (Jaundice) के लिए किस डॉक्टर से मिलें?",
        a: "पीलिया के लिए पहले general physician से मिल सकते हैं। लेकिन अगर 1 हफ्ते में ठीक न हो, बुखार हो, पेट दर्द हो या dark urine हो — तो DM Gastroenterologist से ज़रूर मिलें। रांची में Dr. Akhilesh Yadav Hepatitis A/E, bile duct stones और liver diseases से होने वाले jaundice का इलाज करते हैं।",
      },
      {
        q: "Liver Biopsy Ranchi में कहां होती है?",
        a: "Liver Biopsy एक ultrasound-guided procedure है जिसमें लिवर के tissue का छोटा sample लेकर microscope से जांचा जाता है। Ranchi में Dr. Akhilesh Yadav Orchid Medical Centre में liver biopsy करते हैं। यह बिना general anesthesia के, outpatient basis पर किया जा सकता है।",
      },
    ],
  },
  {
    slug: "best-gastroenterologist-ranchi",
    titleHi: "Ranchi Mein Best Gastroenterologist — Dr. Akhilesh Yadav (DM Gastroenterology)",
    titleEn: "Best Gastroenterologist in Ranchi — Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में pet, liver aur aant ki bimari ke liye Dr. Akhilesh Yadav — DM Gastroenterology specialist — Orchid Medical Centre, HB Road par available hain. Ek hi doctor, poori dekhbhaal.",
    excerptEn: "Dr. Akhilesh Yadav is Ranchi's trusted DM Gastroenterology specialist at Orchid Medical Centre, HB Road — treating liver disease, gallstones, GERD, IBS & more with advanced endoscopic care.",
    category: "Doctor Profile",
    readTimeMins: 7,
    publishedAt: "July 2026",
    emoji: "🩺",
    image: "/images/gastroenterologist-ranchi.png",
    tags: ["Gastroenterologist Ranchi", "Liver Specialist", "Stomach Doctor", "Dr. Akhilesh Yadav", "Ranchi"],
    metaTitle: "Best Gastroenterologist in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Ranchi ka best gastroenterologist — Dr. Akhilesh Yadav, DM Gastroenterology. Liver, pet aur aant ki bimari ka expert ilaj. Orchid Medical Centre, HB Road. Call: 74919 25047.",
    sections: [
      {
        type: "text",
        content: "Hazaribagh ke ek 52-saal ke teacher, Suresh ji, mahino se pet ke daayi taraf dard aur ulti ki takleef tha. General physician ne kai medicines likh di — lekin koi fark nahi pada. Ek roj unhone Google par search kiya: 'Ranchi mein best gastroenterologist'. Unhe pata nahi tha ki yeh specialist kaun hota hai, aur unhe kitni door jaana padega.\n\nAgar aap bhi aise kisi situation mein hain — ya aapke parivaar mein kisi ko liver, pet ya aant ki takleef hai — toh yeh guide aapke liye hai. Hum batayenge ki gastroenterologist kya hota hai, kab milna chahiye, aur Ranchi mein kaun sabse experienced specialist hai.",
      },
      {
        heading: "Gastroenterologist Kya Hota Hai? General Physician Se Kya Fark Hai?",
        type: "text",
        content: "General physician (GP) ek 'all-rounder' doctor hota hai — fever, BP, diabetes sab dekhta hai. Lekin jab baat aati hai digestive system ki, toh ek specialist ki zaroorat padti hai.\n\nGastroenterologist wo doctor hota hai jisne MBBS ke baad MD (Medicine) ki, aur phir 3 saal ki DM (Gastroenterology) ki super-speciality training li ho. Yeh training specifically in cheezoh ke liye hoti hai:\n\n• Liver (Hepatology) — fatty liver, hepatitis, cirrhosis, liver failure\n• Stomach aur food pipe (Upper GI) — ulcer, GERD, acidity, swallowing problems\n• Small intestine — Crohn's disease, malabsorption, celiac disease\n• Large intestine (Colon) — IBS, colitis, polyps, colorectal cancer screening\n• Gallbladder aur pancreas — gallstones, pancreatitis, bile duct blockage\n• Advanced procedures — endoscopy, colonoscopy, ERCP, EUS\n\nSimple language mein: gastroenterologist wo doctor hai jo aapke pet ke andar kya ho raha hai — woh dekhta hai, samajhta hai, aur thik karta hai.",
      },
      {
        heading: "Kab Gastroenterologist Se Milna Chahiye?",
        type: "list",
        content: "In mein se koi bhi symptom ho toh general physician se referral maangein ya seedha gastroenterologist se milein:",
        list: [
          "Pet mein dard jo baar-baar aaye ya 1 hafte se zyada rahe",
          "Aankhon ya skin ka peela padna (jaundice)",
          "Mala (stool) mein khoon ya kaala rang",
          "Khoon ki ulti ya baar-baar ulti hona",
          "Bina kisi wajah ke 5+ kg wajan kum hona",
          "Khana nigalne mein takleef (dysphagia)",
          "Seene mein jalan (acidity) jo raat ko bhi pareshaan kare",
          "Pet mein pani bhar aana ya bahut zyada sujan",
          "Baar-baar dast ya kabj jo thik na ho",
          "Liver function tests ya ultrasound mein kuch abnormal aaya ho",
        ],
      },
      {
        heading: "Dr. Akhilesh Yadav — Ranchi Ke DM Gastroenterologist",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke un chund doctors mein se hain jinhone DM Gastroenterology (super-speciality degree) ki hai — yeh India ki highest gastroenterology qualification hai. Sirf MBBS ya MD karne wala doctor gastroenterologist nahi hota — DM Gastroenterology ke liye teen saal ki dedicated training zaroori hai.\n\nDr. Akhilesh Yadav ke baare mein:\n• Qualification: MBBS → MD (Medicine) → DM (Gastroenterology)\n• Experience: 10+ saal\n• Clinic: Orchid Medical Centre, HB Road, Ranchi — 834001\n• Timings: Mon–Sat: 10 AM–2 PM & 5 PM–8 PM\n• Phone: +91 74919 25047\n• Google Rating: 4.9 ⭐ (200+ reviews)\n\nHB Road pe clinic hona ek badi baat hai — yeh Ranchi ka central medical corridor hai, jahan se patients Bokaro, Hazaribagh, Jamshedpur, Dhanbad, Palamu — kahi se bhi aasani se pahunch sakte hain.",
      },
      {
        heading: "Kaun Si Bimariyan Treat Hoti Hain?",
        type: "list",
        content: "Dr. Akhilesh Yadav in sabhi conditions ka ilaaj karte hain. Har condition ki detailed jankari ke liye [Conditions page](/conditions) dekhein:",
        list: [
          "Fatty Liver (NAFLD/NASH) — Grade 1, 2, 3 — diet se lekar medicines tak poori care",
          "Jaundice (पीलिया) — Hepatitis A/B/C, obstructive jaundice, bile duct stones",
          "Liver Cirrhosis — fibrosis management, variceal bleeding prevention",
          "Hepatitis B & C — antiviral therapy, monitoring",
          "Acid Reflux & GERD — seene ki jalan, LPR (silent reflux)",
          "Peptic Ulcer & H. Pylori — stomach ulcer ka ilaaj",
          "Gallstones (Pittashay Ki Pathri) — non-surgical management ya ERCP se stone removal",
          "IBS (Irritable Bowel Syndrome) — baar-baar dast ya kabj",
          "Ulcerative Colitis & Crohn's Disease — IBD management",
          "Pancreatitis — acute aur chronic pancreas ki takleef",
          "GI Bleeding — khoon ki ulti ya mala mein khoon — emergency endoscopy",
          "Colon Cancer Screening — colonoscopy se early detection",
          "Unexplained Weight Loss — causes ka diagnosis",
        ],
      },
      {
        heading: "Ranchi Mein Kaun Si Advanced Procedures Available Hain?",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi mein yeh sab advanced procedures karte hain — inke liye Kolkata, Patna ya Delhi jaane ki zaroorat nahi. Har procedure ki jankari ke liye [Procedures page](/procedures) dekhein:",
        list: [
          "Upper GI Endoscopy (UGI Scope) — food pipe, stomach aur duodenum ki camera se jaanch — 15 minute, anesthesia ke saath",
          "Colonoscopy — badi aant ki poori jaanch, polyps remove karna, cancer screening",
          "ERCP — pittashay nali ki pathri nikalana ya bile duct blockage theek karna",
          "EUS (Endoscopic Ultrasound) — andar se ultrasound, tumor biopsy, accurate diagnosis",
          "Variceal Band Ligation & Glue Injection — liver cirrhosis mein bleeding veins ka emergency ilaaj",
          "Polypectomy & EMR — bina surgery ke colon ya stomach se polyps/early tumors nikalana",
          "Balloon Dilation — aant ki nali ke tightness ko endoscopy se theek karna",
          "ESD (Endoscopic Submucosal Dissection) — bina cheera ke early cancer removal",
        ],
      },
      {
        heading: "Personal Doctor vs Hospital Brand — Kya Fark Padta Hai?",
        type: "tip",
        content: "Ranchi mein kuch bade hospitals ke gastroenterology departments hain. Lekin wahan ek problem hoti hai — aap baar baar alag-alag doctor se milte hain. OPD mein jo doctor aaj hai, kal koi aur hoga. Aapki poori history ek jagah nahi rehti.\n\nDr. Akhilesh Yadav ke clinic mein aap HAMESHA same doctor se milte hain. Woh aapki history jaante hain, aapki previous tests yaad hain, aur aapko baar baar sab kuch dohraana nahi padta. Isi continuity ki wajah se unhe 4.9 ⭐ Google rating mili hai — Ranchi ke patients ki real feedback.\n\nJab Suresh ji (is article ke shuruat mein) Dr. Akhilesh Yadav ke paas aaye, unhone pehli hi visit mein ultrasound interpret kiya, blood tests review kiye, aur diagnosis di — chronic pancreatitis. Teen mahine ke ilaaj mein woh kaafi better ho gaye.",
      },
      {
        heading: "Dr. Akhilesh Yadav Ki Salah",
        type: "text",
        content: "\"Mere paas roz aise patients aate hain jo mahino — kabhi kabhi saalon — se generic doctor ke paas ja rahe hain, paise aur waqt waste ho raha hai, aur bimari thik nahi ho rahi. Digestive system ki bimariyan ek specialist ko dikhni chahiye — especially jab symptoms baar-baar aayein ya 2 hafte mein theek na hon.\n\n\"Jharkhand aur Bihar ke patients ke liye ek aur baat — aapko ilaaj ke liye Kolkata ya Delhi bhagne ki zaroorat nahi hai. Ranchi mein hi advanced [endoscopy](/procedures/endoscopy), [ERCP](/procedures/ercp), [EUS](/procedures/eus) sab available hai. Aur main khud personally har patient ko dekhta hoon.\"\n\n[Appointment lein](/book) — Orchid Medical Centre, HB Road, Ranchi. Call karein: +91 74919 25047. Ya seedha [WhatsApp karein](https://wa.me/917491925047?text=Namaskar%2C+mujhe+Dr.+Akhilesh+Yadav+se+appointment+chahiye).",
      },
      {
        heading: "⚠️ Emergency Symptoms — Bilkul Deri Mat Karein",
        type: "warning",
        content: "In symptoms mein turant emergency care ya gastroenterologist se milein — bilkul intezaar na karein:\n• Khoon ki ulti (blood in vomit)\n• Mala mein kaala ya laal khoon\n• Aankhon mein pilappan ke saath bukhaar\n• Pet mein achanak bahut tez dard\n• Behoshi ya confusion ke saath liver ki bimari\nYe sab medical emergencies hain. Orchid Medical Centre: +91 74919 25047",
      },
    ],
    faqs: [
      {
        q: "Gastroenterologist aur general physician mein kya fark hai?",
        a: "General physician sabhi bimariyon ki basic dekhbhaal karta hai. Gastroenterologist sirf digestive system — liver, stomach, intestines, gallbladder, pancreas — ka super-specialist hota hai. DM Gastroenterology degree ke liye MBBS + MD ke baad 3 saal ki alag training hoti hai. Complex pet aur liver ki bimarion ke liye gastroenterologist ka referral zaroori hota hai.",
      },
      {
        q: "Ranchi mein gastroenterologist ki fees kitni hoti hai?",
        a: "Dr. Akhilesh Yadav ka consultation fee reasonable hai — specific amount ke liye call karein +91 74919 25047. Fees mein initial consultation, review visit aur prescription shaamil hote hain. Endoscopy, colonoscopy ya ERCP ki fees alag hoti hai — yeh bhi clinic se confirm karein. Ranchi mein specialist fees typically ₹400–₹800 range mein hoti hai.",
      },
      {
        q: "Dr. Akhilesh Yadav ka clinic kahan hai aur timings kya hain?",
        a: "Dr. Akhilesh Yadav Orchid Medical Centre, HB Road, Ranchi — 834001 mein practice karte hain. Timings: Monday se Saturday, 10:00 AM–2:00 PM aur 5:00 PM–8:00 PM. Sunday band rehta hai. Appointment ke liye pehle call karein: +91 74919 25047.",
      },
      {
        q: "Kya Bokaro, Hazaribagh, Dhanbad se Ranchi aana padega?",
        a: "Haan — aur yeh worth it hai. Dr. Akhilesh Yadav Ranchi ke HB Road par hain, jo Bokaro (90 km), Hazaribagh (90 km), Jamshedpur (130 km), Dhanbad (155 km) se easily reachable hai. Ranchi mein jo advanced procedures available hain — ERCP, EUS, Colonoscopy — woh Jharkhand ke chhote shehar mein nahi milte. Ek din mein consultation + testing ho sakti hai.",
      },
      {
        q: "Liver specialist aur gastroenterologist ek hi hote hain kya?",
        a: "Haan — DM Gastroenterology degree mein liver diseases (hepatology) bhi included hoti hai. Dr. Akhilesh Yadav fatty liver, hepatitis B/C, liver cirrhosis, jaundice — sab treat karte hain. Agar specifically 'hepatologist' ya 'liver specialist' search kar rahe hain, toh DM Gastroenterology wala doctor hi best option hai.",
      },
      {
        q: "Pehli baar doctor se milne mein kya hoga? Kya test karwane padenge?",
        a: "Pehli visit mein Dr. Akhilesh Yadav aapki poori history lenge — symptoms, duration, previous reports, medicines. Phir physical examination karenge. Iske baad zaroorat ke hisaab se blood tests (LFT, CBC, etc.) ya ultrasound recommend karenge. Agar report already hai toh saath laayein — time bachega. Zyada tar patients pehli visit mein hi diagnosis aur treatment plan le jaate hain.",
      },
      {
        q: "Kya endoscopy Ranchi mein ho sakti hai? Iske liye kahaan jayen?",
        a: "Haan — Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi mein Upper GI Endoscopy, Colonoscopy, ERCP aur EUS perform karte hain. Endoscopy ek safe aur fast procedure hai — anesthesia diya jata hai, dard nahi hota, 15-20 minute mein ho jaati hai. Bade cities jaane ki zaroorat nahi. Call karein: +91 74919 25047.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
