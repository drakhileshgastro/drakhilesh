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
    excerptEn: "Learn how conscious sedation makes upper GI endoscopy comfortable and well-tolerated at Orchid Medical Centre, Ranchi, along with price estimates.",
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
    titleEn: "How to Control GERD & Acid Reflux Long-Term — Treatment & Lifestyle Guide",
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
    titleEn: "How to Relieve Chronic Constipation — Indian Diet & Exercise Guide",
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
        content: "\"Mere paas roz aise patients aate hain jo mahino — kabhi kabhi saalon — se generic doctor ke paas ja rahe hain, paise aur waqt waste ho raha hai, aur bimari thik nahi ho rahi. Digestive system ki bimariyan ek specialist ko dikhni chahiye — especially jab symptoms baar-baar aayein ya 2 hafte mein theek na hon.\n\n\"Jharkhand aur Bihar ke patients ke liye ek aur baat — aapko ilaaj ke liye Kolkata ya Delhi bhagne ki zaroorat nahi hai. Ranchi mein hi advanced [endoscopy](/procedures/endoscopy), [ERCP](/procedures/ercp), [EUS](/procedures/eus) sab available hai. Aur main khud personally har patient ko dekhta hoon.\"\n\n[Appointment lein](/book) — Orchid Medical Centre, HB Road, Ranchi. Call karein: +91 9031669888. Ya seedha [WhatsApp karein](https://wa.me/919031669888?text=Namaskar%2C+mujhe+Dr.+Akhilesh+Yadav+se+appointment+chahiye).",
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

  // === BATCH 1: Cluster 0 — Local Doctor Ranchi ===
  {
    slug: "gastroenterologist-in-ranchi",
    image: "/images/gastroenterologist-in-ranchi-blog.png",
    titleHi: "रांची में गैस्ट्रोएंटेरोलॉजिस्ट — Dr. Akhilesh Yadav से कब मिलना चाहिए?",
    titleEn: "Gastroenterologist in Ranchi — When to See Dr. Akhilesh Yadav",
    excerptHi: "पेट, लिवर और आँतों की किसी भी बीमारी के लिए Ranchi में DM Gastroenterologist से कब और क्यों मिलना चाहिए — Dr. Akhilesh Yadav, Orchid Medical Centre।",
    excerptEn: "When do you need a gastroenterologist in Ranchi? Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre, explains which symptoms must not be ignored.",
    category: "Local SEO",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🏥",
    tags: ["Gastroenterologist", "Ranchi", "Stomach Doctor", "Local", "Hindi"],
    metaTitle: "Gastroenterologist in Ranchi | Dr. Akhilesh Yadav Orchid Medical",
    metaDescription: "Gastroenterologist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterology, Orchid Medical Centre, HB Road. Expert digestive care. Call: +91 74919 25047",
    sections: [
      {
        type: "text",
        content: "Ranchi ke Bariatu area ke rehne wale 52-saal ke Ramesh Prasad ji pichhle 4 mahine se pet mein discomfort, gas aur bhookh na lagne ki takleef uthate rahe. Local doctor ne antacids diye — thodi der acha lagta, phir wahi haal. Jab unki beti ne Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology specialist — se appointment dilwayi, toh pehli hi visit mein endoscopy mein H. Pylori infection ke saath Grade 2 gastritis diagnose hua. Sirf 2 hafte ke sahi treatment ke baad unka condition dramatically improve hua. 'Kash main pehle hi aa jaata' — yeh baat Ranchi ke hazaron patients ke mann mein hoti hai. Agar aap bhi 4+ hafte se pet ki koi bhi problem uthaa rahe hain, toh yeh guide aapke liye hai.",
      },
      {
        heading: "Gastroenterologist Kaun Hota Hai?",
        type: "text",
        content: "Gastroenterologist yaani pet, liver, aanton, pancreas (अग्न्याशय) aur biliary system ka visheshagya doctor. Dr. Akhilesh Yadav — MBBS, MD (Internal Medicine), DM Gastroenterology — Jharkhand ke senior DM Gastroenterologists mein se hain jo Orchid Medical Centre, HB Road, Ranchi mein practice karte hain. DM Gastroenterology degree MBBS ke baad 8-10 saal ki additional training ke baad milti hai. Yeh sirf digestive tract ki bimariyon ke expert hote hain — general physician se zyada specialised hote hain. Ranchi aur poori Jharkhand ke patients [gastroenterologist Ranchi mein](/blog/best-gastroenterologist-ranchi) dhundhte hain toh Orchid Medical Centre sabse reliable choice hai. [Conditions ki poori list dekhein](/conditions) ya [procedures ke baare mein jaanein](/procedures).",
      },
      {
        heading: "🔴 Kab Turant Gastroenterologist se Milein?",
        type: "list",
        content: "Yeh symptoms ignore mat karein — ek hafte ke andar specialist se milein:",
        list: [
          "Khoon ki ulti (hematemesis — खून की उल्टी) ya mala mein khoon — GI bleeding ka sign, turant jayein",
          "Aankhon ya skin ka peela hona (Jaundice — पीलिया) — liver problem ka sign",
          "Achanak 5+ kg wajan kam hona bina kisi obvious karan ke",
          "Pura pet phula hua rehna (Ascites — पेट में पानी) ya bahut tight feel hona",
          "Nigalne mein takleef (Dysphagia — खाना निगलने में दिक्कत) ya khaana atkna",
          "Persistent ulti jo 2-3 din mein theek na ho",
          "Pet mein achanak bahut tej dard — emergency room jayein",
        ],
      },
      {
        heading: "🟡 Kab 1-2 Hafte mein Appointment Lein?",
        type: "list",
        content: "Yeh symptoms bhi doctor se zaroori hain — ignore nahi karna:",
        list: [
          "4 hafte se zyada bani reh rahi acidity ya seene mein jalan (GERD)",
          "Kabj ya diarrhea jo baar baar aata ho (2+ months)",
          "Khane ke baad hamesha bloating ya gas ki problem",
          "Liver tests mein SGPT/SGOT high aana — liver enzymes badhna",
          "Ultrasound mein 'fatty liver' ya 'enlarged liver' mention hona",
          "Hepatitis B/C positive test result — ek hafte mein milein",
          "Piles (bawasir — बवासीर) mein khoon aana jo 1 hafte mein na ruke",
        ],
      },
      {
        heading: "Ranchi mein Gastroenterologist se Tests Kaise Hote Hain?",
        type: "text",
        content: "Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — sabse pehle comprehensive history lenge aur physical examination karenge. Zaroorat ke hisaab se blood tests (LFT, CBC, CRP, H. Pylori), Ultrasound abdomen, ya advanced tests recommend hote hain. Ranchi mein hi Upper GI Endoscopy (OGD Scopy), Colonoscopy, ERCP, aur EUS sab available hain — bade shahar jaane ki zaroorat nahi. WHO ke data ke mutaabik, India mein 40% se zyada GI cancers late stage mein diagnose hote hain kyunki log symptoms ignore karte hain. Early diagnosis se outcomes significantly better hote hain. [Endoscopy ke baare mein jaanein](/blog/endoscopy-kya-hota-hai) ya [painless colonoscopy Ranchi](/blog/painless-colonoscopy-ranchi-cost-preparation) padhen.",
      },
      {
        heading: "Dr. Akhilesh Yadav — Ranchi ke Senior Gastroenterologist",
        type: "text",
        content: "Dr. Akhilesh Yadav — MBBS, MD, DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein 10+ saal se hazaron patients ka ilaj kar rahe hain. Fatty liver, jaundice, endoscopy, ERCP, colonoscopy, liver cirrhosis, IBD — sab mein expert hain. Bokaro, Hazaribagh, Jamshedpur, Dhanbad aur Deoghar se bhi patients Ranchi aate hain unse milne ke liye. Jharkhand mein DM Gastroenterology trained doctors ki sankhya bahut kam hai — is liye Dr. Akhilesh Yadav ki seva poore region ke liye mahatvapurna hai. [Appointment book karein](/book) ya seedha call karein +91 74919 25047.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein bahut log stomach problems ko ghar par nuskhon se treat karte hain — kuch hafton tak theek lagta hai, phir wahi problem wapas aati hai. Agar aapko 4+ hafte se koi bhi digestive problem hai, toh ek baar specialist se milna zaroori hai. Early diagnosis mein cost bhi kam hoti hai aur result bhi better hota hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein Mon–Sat available hain.\n\nYeh article sirf educational purpose ke liye hai. Kisi bhi health problem ke liye Dr. Akhilesh Yadav ya apne doctor se zaroor milein.\n\nAppointment ke liye call karein: +91 74919 25047 ya [WhatsApp karein](https://wa.me/917491925047). Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Gastroenterologist Ranchi",
        type: "text",
        content: "Neeche kuch common sawaalon ke jawab hain jo Ranchi ke patients gastroenterologist ke baare mein aksar poochte hain:",
      },
    ],
    faqs: [
      {
        q: "Ranchi mein gastroenterologist ki fees kitni hoti hai?",
        a: "Orchid Medical Centre mein Dr. Akhilesh Yadav ki consultation fees reasonable hai. Pehli consultation ke liye call karein: +91 74919 25047. Appointment prefer karein — walk-in bhi available hai lekin wait time zyada ho sakta hai.",
      },
      {
        q: "Gastroenterologist aur general physician mein kya fark hai?",
        a: "General physician sabhi bimariyon ka basic treatment karte hain. Gastroenterologist specifically pet, liver, pancreas aur aanton ke specialist hain — DM Gastroenterology ki degree mein 8+ saal ki advanced training hoti hai. Complex liver ya gut problems mein specialist se milna zaroori hai.",
      },
      {
        q: "Kya Ranchi mein endoscopy hoti hai?",
        a: "Haan — Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav OGD Scopy (Upper Endoscopy), Colonoscopy, ERCP aur EUS perform karte hain. Anesthesia ke saath procedure hoti hai, bahut kam discomfort hoti hai.",
      },
      {
        q: "Kya appointment ke bina aa sakte hain?",
        a: "Walk-in possible hai, lekin appointment lena better hai kyunki wait time kam hogi. Call karein: +91 74919 25047. Online appointment bhi milti hai.",
      },
      {
        q: "Gastroenterologist se milne ke baad kitne time mein treatment shuru hoti hai?",
        a: "Dr. Akhilesh Yadav same-day diagnosis karne ki koshish karte hain. Agar endoscopy ki zaroorat ho toh 1-3 din mein schedule hoti hai. Blood tests ki report usi din ya next day mil jaati hai. Emergency cases mein same-day treatment bhi possible hai.",
      },
      {
        q: "Bokaro ya Hazaribagh se Ranchi kab aana chahiye?",
        a: "Agar local doctor se 4-6 hafte mein improvement na ho, ya serious symptoms hon, toh Ranchi mein Dr. Akhilesh Yadav se milein. Orchid Medical Centre mein ek din mein consultation + tests + treatment sab ho sakti hai. Bokaro se sirf 90 km, Hazaribagh se bhi 90 km hai.",
      },
    ],
  },

  {
    slug: "stomach-specialist-ranchi",
    image: "/images/stomach-specialist-ranchi-blog.png",
    titleHi: "पेट के Specialist Doctor रांची — Dr. Akhilesh Yadav से मिलें",
    titleEn: "Stomach Specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical",
    excerptHi: "Ranchi mein pet ke specialist doctor — Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre. Pet, aant aur liver ki har bimari ka expert ilaj.",
    excerptEn: "Stomach specialist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre, treats all digestive, liver and stomach conditions.",
    category: "Local SEO",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🫃",
    tags: ["Stomach Specialist", "Ranchi", "Pet ka Doctor", "Gastroenterologist", "Hindi"],
    metaTitle: "Stomach Specialist Ranchi | Dr. Akhilesh Yadav Orchid Medical",
    metaDescription: "Stomach specialist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterology, Orchid Medical Centre, HB Road. Expert digestive care for all stomach problems. +91 74919 25047",
    sections: [
      {
        type: "text",
        content: "Ranchi ke Kanke Road ki 38-saal ki Priya Devi pichhle chhe mahine se pet mein jalan, nausea aur khane ke baad discomfort se pareshan thi. Kai general doctors se antacids, digestive enzymes, vitamins le chuki thi — kuch dino ke liye acha lagta, phir wahi haal. Jab ek sahelion ne suggest kiya Orchid Medical Centre, Ranchi mein pet ke specialist doctor — Dr. Akhilesh Yadav, DM Gastroenterology — se milne ka, toh pehli hi consultation mein upper endoscopy se pata chala ki unhe GERD (Gastroesophageal Reflux Disease — आमाशय एसिड का वापस आना) ke saath mild esophagitis thi. Proper treatment se 6 hafte mein Priya ji ki condition normal ho gayi. 'Main socha tha yeh toh normal hai' — yeh ek bahut common galati hai jo Ranchi ke patients karte hain.",
      },
      {
        heading: "Pet ka Specialist Doctor — Kya Treat Karte Hain?",
        type: "text",
        content: "Pet ke specialist doctor yaani Gastroenterologist poori digestive tract — esophagus (food pipe — भोजन नली) se le kar anus tak — ki bimariyon ka ilaj karte hain. Isme liver, pancreas (अग्न्याशय) aur gallbladder (पित्ताशय) bhi shamil hain. Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — yeh sab conditions treat karte hain: Acidity/GERD, IBS, IBD (Crohn's, Ulcerative Colitis), Fatty Liver, Hepatitis B aur C, Liver Cirrhosis, Jaundice, Piles, aur Colon Cancer Screening. [Conditions ki poori list dekhein](/conditions) ya [procedures ke baare mein padhen](/procedures). Ranchi ke aas-paas Bokaro, Hazaribagh se bhi log unse milne aate hain.",
      },
      {
        heading: "🔴 Yeh Symptoms Hain Toh Pet ka Specialist Zaroori Hai",
        type: "list",
        content: "Inhe ignore karna serious ho sakta hai:",
        list: [
          "Baar-baar acidity ya seene mein jalan jo antacid se control na ho (4+ hafte)",
          "Mala mein khoon ya kaala pakhana (melaena — पुरानी GI bleeding ka sign)",
          "Wajan jo bina koshish ke kam ho raha ho (unexplained weight loss)",
          "Khane ke baad hamesha nausea (जी मिचलाना) ya ulti",
          "Pura pet phula hua ya tight feel hona (Bloating/Distension)",
          "Pairo ya aankhon mein peelaahat (Jaundice — पीलिया) — liver sign",
          "Kabj ya diarrhea jo teen hafte se zyada chal raha ho",
          "Pet mein gaanth ya kuch hard feel hona — turant milein",
        ],
      },
      {
        heading: "Pet ki Common Bimariyon ke Karan",
        type: "list",
        content: "Ranchi aur Jharkhand mein in kaaranon se zyada pet ki problems hoti hain:",
        list: [
          "Bahar ka khana — teekha, masaledar, processed food zyada khaana",
          "Paani ki quality — contaminated water se H. Pylori aur Hepatitis A",
          "Stress aur anxiety — IBS aur GERD ka sabse bada trigger",
          "Alcohol ka sevan — fatty liver aur gastritis ka mukhya karan",
          "NSAIDs ya painkillers ka lambe samay tak use — ulcer ka risk",
          "Raat ka khana bahut late khaana aur so jaana — acid reflux badhta hai",
        ],
      },
      {
        heading: "Ranchi mein Pet ki Bimari ki Jach — Dr. Akhilesh Yadav",
        type: "text",
        content: "Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ek structured diagnostic approach follow karte hain. Pehle detailed history aur physical examination, phir zaroorat ke hisaab se tests: CBC, LFT, H. Pylori stool antigen test, Ultrasound abdomen. Complex cases mein Upper GI Endoscopy ya Colonoscopy hoti hai — Orchid Medical Centre mein hi available hai. AIIMS ke ek study ke mutaabik, India mein 60% se zyada peptic ulcer cases H. Pylori infection se hote hain — jo ek treatable infection hai. [Endoscopy ke baare mein jaanein](/blog/endoscopy-kya-hota-hai) ya [jaundice ke lakshan padhen](/blog/jaundice-symptoms-causes).",
      },
      {
        heading: "Pet ki Bimariyon ka Ilaj — Dr. Akhilesh Yadav ka Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — ka maanna hai ki har patient ka treatment personalized hona chahiye. Simple cases mein diet modification aur medications se kaam hota hai. Ranchi ke local food mein — litti-chokha, dal-bhat, dahi — ko gut-friendly banana bhi Dr. Akhilesh Yadav sikhate hain. Complex cases mein endoscopic procedures zaroori hote hain — ERCP se bile duct stone nikalna, colonoscopy se polyp remove karna — sab Orchid Medical Centre mein available hai. Regular follow-up se outcomes behtar hote hain. [ERCP procedure](/blog/ercp-procedure-cbd-stones-ranchi) ke baare mein padhen ya [appointment book karein](/book).",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Specialist Advice",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Pet ki bimariyon mein sabse badi galati hai — thoda theek laga toh doctor ke paas nahi gaye. Agar aapka symptom 3-4 hafte se chal raha hai, toh pet ke specialist se milna zaroori hai. Ranchi mein hi poori facilities available hain — Patna ya Delhi jaane ki zaroorat nahi.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein available hain.\n\nYeh article sirf educational purpose ke liye hai. Kisi bhi health problem ke liye Dr. Akhilesh Yadav ya apne doctor se zaroor milein.\n\nAppointment ke liye call karein: +91 74919 25047 ya [WhatsApp karein](https://wa.me/917491925047). Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Stomach Specialist Ranchi",
        type: "text",
        content: "Ranchi ke patients stomach specialist ke baare mein yeh sawaal aksar poochte hain:",
      },
    ],
    faqs: [
      {
        q: "Pet ke specialist aur general doctor mein kya antar hai?",
        a: "General doctor sabhi bimariyon ka basic treatment karte hain. Pet ke specialist (Gastroenterologist) specifically digestive tract, liver aur pancreas ki bimariyon mein expert hote hain. DM Gastroenterology degree mein 3+ saal ki additional super-specialty training hoti hai. Complex stomach problems mein specialist se milein.",
      },
      {
        q: "Ranchi mein stomach specialist kahan hain?",
        a: "Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein practice karte hain. Appointment ke liye call karein: +91 74919 25047.",
      },
      {
        q: "Pet ki jach mein endoscopy kab zaroor hoti hai?",
        a: "4+ hafte ki acidity jo medications se control na ho, mala mein khoon, unintentional weight loss, ya swallowing problem mein endoscopy zaroori hoti hai. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav yeh procedure safely karte hain.",
      },
      {
        q: "Kya diet se pet ki bimari theek ho sakti hai?",
        a: "Mild cases mein diet modification se significant improvement hoti hai. Lekin chronic conditions — jaise GERD, IBD, H. Pylori — mein doctor ki guidance se treatment zaroori hai. Diet sirf ek component hai, pure treatment plan ka hissa.",
      },
      {
        q: "Jharkhand ke chhote shehar se Ranchi kab aana chahiye?",
        a: "Agar local doctor se 4-6 hafte mein improvement na ho, ya serious symptoms hon, toh Ranchi mein Dr. Akhilesh Yadav se milein. Orchid Medical Centre mein ek din mein consultation + tests + initial treatment sab ho sakti hai.",
      },
      {
        q: "Stomach specialist ke paas jaane se pehle koi test karwana chahiye?",
        a: "Agar aapke paas recent blood tests ya ultrasound reports hain toh laayein — time bachega. Agar nahi hain toh koi baat nahi — Dr. Akhilesh Yadav pehle examination karenge, phir zaroorat ke hisaab se tests recommend karenge.",
      },
    ],
  },

  {
    slug: "stomach-doctor-ranchi",
    image: "/images/stomach-doctor-ranchi-blog.png",
    titleHi: "रांची के Stomach Doctor — कब और क्यों मिलें Dr. Akhilesh Yadav से",
    titleEn: "Stomach Doctor in Ranchi — When to See Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein stomach doctor ki talaash? Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre mein pet, liver aur aanton ki bimariyon ka expert ilaj karte hain.",
    excerptEn: "Find the right stomach doctor in Ranchi. Dr. Akhilesh Yadav, DM Gastroenterology at Orchid Medical Centre, HB Road — expert digestive care for all conditions.",
    category: "Local SEO",
    readTimeMins: 5,
    publishedAt: "August 2026",
    emoji: "🩺",
    tags: ["Stomach Doctor", "Ranchi", "Pet ka Doctor", "Gastro", "Hindi", "Jharkhand"],
    metaTitle: "Stomach Doctor Ranchi | Dr. Akhilesh Yadav Orchid Medical Centre",
    metaDescription: "Stomach doctor in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterology, Orchid Medical Centre. Treatment for acidity, IBS, liver problems. Call: +91 74919 25047",
    sections: [
      {
        type: "text",
        content: "Ranchi ke Morabadi mohalle ke 55-saal ke Dinesh Kumar Verma 2 saal se intermittent pet dard mein antacids lete rahe. Local clinic ne kabhi antibiotic, kabhi antacid diya — koi permanent solution nahi mila. Phir ek din ulti mein thoda khoon nazar aaya. Turant unhe Orchid Medical Centre, Ranchi laya gaya. Dr. Akhilesh Yadav — DM Gastroenterology — ne same day endoscopy ki: ek bleeding peptic ulcer tha. Timely endoscopic treatment ne unhe major surgery se bachaya. 'Agar main pehle stomach doctor ke paas jaata, toh yeh naabat nahi aati' — yeh Dinesh ji ka message hai Ranchi ke saare patients ke liye.",
      },
      {
        heading: "Stomach Doctor — Kya Treat Karte Hain?",
        type: "text",
        content: "Stomach doctor — yaani Gastroenterologist — pet se le kar poori digestive tract ka specialist hota hai. Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — stomach ke saath liver, pancreas aur gallbladder ki bimariyon mein bhi expert hain. Sirf stomach pain nahi — acidity, ulcer, jaundice, fatty liver, hepatitis, piles — sab mein specialist training hai. Ranchi ke 10+ saal ke experience mein unhone hazaron patients ka ilaj kiya hai. [Gastroenterologist Ranchi mein](/blog/best-gastroenterologist-ranchi) se jude sawaalon ke liye yeh guide helpful hai. [Conditions ki poori list](/conditions) ya [procedures Ranchi](/procedures) dekhein.",
      },
      {
        heading: "🚨 In Symptoms Mein Stomach Doctor Se Milna Zaroori Hai",
        type: "list",
        content: "Inhe kabhi ignore na karein:",
        list: [
          "Pet mein dard jo 2 hafte se zyada ho aur painkillers se na chhoothe",
          "Khoon ki ulti (hematemesis — खून की उल्टी) — yeh emergency hai",
          "Kale ya dark red rang ka mala — internal bleeding ka sign (melaena)",
          "Jaundice — aankhon ya skin ka peela hona (Jaundice — पीलिया)",
          "Achanak wajan ghat jaana bina kisi karan ke",
          "Nigalne mein takleef ya khaana food pipe mein atkna (Dysphagia)",
          "Chronic diarrhea jo 2 hafte se zyada ho",
          "Alcohol pine ke baad bahut tej pet dard — pancreatitis ho sakta hai",
        ],
      },
      {
        heading: "Pet ki Problems ke Pramukh Karan",
        type: "list",
        content: "Ranchi aur aas-paas ke ilakon mein yeh karan zyada common hain:",
        list: [
          "H. Pylori bacteria — contaminated paani aur khane se failta hai",
          "Alcohol aur gutka/tobacco — liver aur stomach dono ko nuksaan",
          "NSAIDs (aspirin, ibuprofen) — gastric ulcer ka sabse bada karan",
          "Stress aur anxiety — IBS ka major trigger",
          "Unhygienic food — hepatitis A, typhoid, amoebiasis ka risk",
          "Obesity — GERD, fatty liver ka risk badhta hai",
          "Genetic factors — family mein colon cancer ya IBD hone se risk zyada",
        ],
      },
      {
        heading: "Ranchi mein Stomach Doctor se Jach aur Diagnosis",
        type: "text",
        content: "Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ek systematic diagnostic process follow karte hain. Pehle detailed clinical history aur abdominal examination, phir zaroorat ke hisaab se basic blood tests (CBC, LFT, amylase) ya H. Pylori test. Complex cases mein Ultrasound, CT Scan ya Endoscopy hoti hai. WHO ke data ke mutaabik, gastric cancer ki 5-year survival rate early stage mein 90%+ hoti hai lekin late stage mein 30% se bhi kam — isliye early diagnosis zaroori hai. [Fatty liver diet guide](/blog/fatty-liver-diet-hindi) ya [liver cirrhosis stages](/blog/liver-cirrhosis-stages-treatment-india) padhen.",
      },
      {
        heading: "Stomach Problems ka Ilaj — Dr. Akhilesh Yadav ka Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — ka treatment approach patient-centered hai. Simple acidity ya H. Pylori mein medicines aur diet guidance se kaam hota hai — Ranchi ke local food sattu, dahi-chura ko gut-friendly banana bhi batate hain. Moderate cases mein combination therapy. Severe cases ya complications mein endoscopic ya surgical intervention — ERCP se bile duct stones nikaalna, colonoscopy se polyp remove karna — sab Orchid Medical Centre mein available hai. [ERCP ke baare mein padhen](/blog/ercp-procedure-cbd-stones-ranchi) ya [appointment book karein](/book).",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Stomach Doctor Ranchi",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Main Ranchi mein hazaron patients dekha hai jinhe 6-12 mahine baad pata chala ki unhe kya tha. Stomach pain ko ghar par 4 hafte se zyada mat handle karein — ek baar specialist se milein. Early treatment mein time, paisa aur stress — teeno bachte hain.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein Mon–Sat available hain.\n\nYeh article sirf educational purpose ke liye hai. Kisi bhi health problem ke liye Dr. Akhilesh Yadav ya apne doctor se zaroor milein.\n\nAppointment ke liye call karein: +91 74919 25047 ya [WhatsApp karein](https://wa.me/917491925047). Orchid Medical Centre, HB Road, Ranchi.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Stomach Doctor Ranchi",
        type: "text",
        content: "Ranchi ke patients stomach doctor ke baare mein yeh sawaal aksar poochte hain:",
      },
    ],
    faqs: [
      {
        q: "Ranchi mein stomach doctor aur gastroenterologist mein kya antar hai?",
        a: "Dono ek hi hain — 'stomach doctor' common language mein use hota hai jabki 'gastroenterologist' medical term hai. Dr. Akhilesh Yadav DM Gastroenterology qualified stomach specialist hain Orchid Medical Centre, Ranchi mein.",
      },
      {
        q: "Stomach pain mein kab doctor ke paas jaana chahiye?",
        a: "Agar pain 2 hafte se zyada ho, raat ko uthaye, ya khoon ki ulti ke saath ho — turant doctor se milein. Mild pain jo khud theek ho jaaye toh wait kar sakte hain.",
      },
      {
        q: "Kya Ranchi mein stomach ke liye saare tests available hain?",
        a: "Haan — Orchid Medical Centre, Ranchi mein blood tests, ultrasound, endoscopy, colonoscopy, ERCP, EUS sab available hain. Patna ya Kolkata jaane ki zaroorat nahi padti zyada tar cases mein.",
      },
      {
        q: "Pet dard mein kya khaana chahiye?",
        a: "Dahi, khichdi, plain dal-bhat, chhachh (buttermilk) — yeh gut ke liye gentle hote hain. Teekha, maida, processed food, cold drinks avoid karein. Specific diet ke liye Dr. Akhilesh Yadav se milna better hai — diagnosis ke hisaab se alag hoti hai.",
      },
      {
        q: "Stomach doctor ka wait time kitna hota hai Orchid Medical Centre mein?",
        a: "Appointment ke saath wait time bahut kam hota hai. Walk-in mein thoda zyada wait ho sakta hai. Call karein +91 74919 25047 pehle appointment ke liye.",
      },
      {
        q: "Kya stomach cancer Ranchi mein common hai?",
        a: "Dr. Akhilesh Yadav recommend karte hain ki 45+ age ke logo ko endoscopy ya colon cancer screening zaroor karwani chahiye, especially agar family history ho ya chronic symptoms hain. Early detection bahut zaroori hai.",
      },
    ],
  },

  {
    slug: "jaundice-treatment-ranchi",
    image: "/images/jaundice-treatment-ranchi-blog.png",
    titleHi: "रांची में Jaundice (पीलिया) का इलाज — Types, Tests और Treatment",
    titleEn: "Jaundice Treatment in Ranchi — Types, Tests and Treatment Guide",
    excerptHi: "Ranchi mein jaundice ka ilaj — hepatitis A se le kar bile duct blockage tak, Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre mein sahi diagnosis milti hai.",
    excerptEn: "Jaundice treatment in Ranchi — from hepatitis A to bile duct obstruction, Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre, provides expert care.",
    category: "Liver Health",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🟡",
    tags: ["Jaundice", "Ranchi", "Liver", "Piliya", "Treatment", "Hindi", "Jharkhand"],
    metaTitle: "Jaundice Treatment Ranchi | Dr. Akhilesh Yadav Orchid Medical",
    metaDescription: "Jaundice (piliya) treatment in Ranchi by Dr. Akhilesh Yadav, DM Gastroenterology. Types of jaundice, liver tests, treatment at Orchid Medical Centre. +91 74919 25047",
    sections: [
      {
        type: "text",
        content: "Ranchi ke Doranda mohalle ki 32-saal ki Kavita Singh ko ek hafte se aankhein aur skin peeli ho rahi thi. Ghabrahat mein pahle ek jyotishi ke paas gayi, phir ek neem-hakim ne kuch dawa di. Jab ek hafte mein koi sudhar nahi hua aur ulti aur bukhar bhi aane lage, tab pariwarik log unhe Orchid Medical Centre, Ranchi le gaye. Dr. Akhilesh Yadav — DM Gastroenterology — ne blood tests (LFT, hepatitis panel) karaye — Hepatitis A infection confirm hua. Proper medical treatment se 10 din mein Kavita ji poori tarah recover ho gayi. Sahi waqt par sahi diagnosis ne unhe complications se bachaya. Pilia ko ghar ke nuskhon par mat chhodein.",
      },
      {
        heading: "Jaundice (पीलिया) Kya Hota Hai?",
        type: "text",
        content: "Jaundice — pehle ise 'pilia' bolte the — ek condition nahi balki ek sign hai. Jab khoon mein bilirubin (पित्त रंजक — bile pigment) badhta hai, toh aankhein, skin aur nails peeli ho jaati hain. Bilirubin liver mein process hota hai — agar liver theek se kaam na kare, bile duct block ho, ya red blood cells zyada toote, toh bilirubin badh jaata hai. Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre — jaundice ke teen types diagnose karte hain: Pre-hepatic (blood disorder se), Hepatic (liver ki bimari se), aur Post-hepatic (bile duct blockage se). Har type ka treatment alag hota hai. [Jaundice ke lakshan](/blog/jaundice-symptoms-causes) padhen ya [liver problem doctor](/blog/best-gastroenterologist-ranchi) se milein.",
      },
      {
        heading: "🔴 Jaundice ke Symptoms Jo Doctor Ko Dikhane Chahiye",
        type: "list",
        content: "Yeh symptoms hone par turant Ranchi mein doctor se milein:",
        list: [
          "Aankhon ka safed hissa (sclera) peela hona — sabse pehla sign",
          "Skin ka peela padna — fingers, palms, face",
          "Peshab (urine) ka dark yellow ya brown hona — bilirubin zyada hai",
          "Mala (stool) ka pale, grey ya chalk-white hona — bile duct blockage",
          "Thakan, bhookh na lagna aur nausea (जी मिचलाना)",
          "Pet mein dard — especially right side mein liver ke area mein",
          "Bukhar aur khaamp lagna — hepatitis infection ka sign",
          "Itching (khujli) — bile salts skin mein jamane se hoti hai",
        ],
      },
      {
        heading: "Jaundice ke Karan — Types aur Causes",
        type: "list",
        content: "Jharkhand mein in kaaranon se jaundice zyada hota hai:",
        list: [
          "Hepatitis A — contaminated paani ya khane se (Ranchi mein monsoon mein zyada)",
          "Hepatitis B aur C — blood contact, infected needle ya sexual contact se",
          "Alcohol-related liver disease (ALD — मद्यजनित यकृत रोग)",
          "Gallstones — bile duct mein pathri se blockage (Obstructive Jaundice)",
          "Fatty liver disease advancing to liver damage",
          "Drug-induced liver injury — kuch medicines se liver damage",
          "Liver Cirrhosis (यकृत का सिकुड़ना) — chronic liver scarring",
        ],
      },
      {
        heading: "Ranchi mein Jaundice ki Jach — Tests aur Diagnosis",
        type: "text",
        content: "Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — structured approach se jaundice diagnose karte hain. Sabse pehle LFT (Liver Function Tests) — SGPT, SGOT, Alkaline Phosphatase, Bilirubin (total aur direct) aur PT/INR. Phir viral hepatitis panel — Hepatitis A IgM, HBsAg, Anti-HCV. Ultrasound abdomen se liver size, texture aur bile duct check hoti hai. Agar gallstone ya bile duct obstruction ho toh MRCP ya ERCP recommend karte hain. WHO ke data ke mutaabik, India mein har saal 30 lakh se zyada hepatitis A cases hote hain — zyada tar monsoon ke baad. [ERCP procedure](/blog/ercp-procedure-cbd-stones-ranchi) aur [hepatitis treatment](/blog/hepatitis-b-c-prevention-treatment-facts) padhen.",
      },
      {
        heading: "Ranchi mein Jaundice ka Ilaj — Treatment Options",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — treatment cause ke hisaab se decide karte hain. Hepatitis A mein rest, hydration aur supportive care se theek hota hai — 4-6 hafte mein. Hepatitis B mein antiviral medicines lagte hain. Hepatitis C mein naye DAA (Direct Acting Antivirals) se 8-12 hafte mein 95%+ recovery rate hai — India mein yeh medicines accessible hain. Obstructive Jaundice mein ERCP se bile duct ki pathri nikalna ya stent daalna hota hai. Alcohol-related liver disease mein strict alcohol band aur liver support medicines. Ghar ke nuskhe — ganne ka ras, kutki — sirf mild supportive role mein hain; severe jaundice mein medical treatment essential hai. [Appointment book karein](/book).",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Jaundice",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein jaundice ke patients aksar jhola-chhap doctor ya ghar ke nushkhe try karte hain — 2-3 hafte waste hote hain aur condition serious ho jaati hai. Jaundice ek medical condition hai jisme liver involved hota hai. Turant blood tests karwayein aur gastroenterologist se milein. Jaundice ka cause pata karna zaroori hai — har type ka ilaj alag hota hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein available hain.\n\nYeh article sirf educational purpose ke liye hai. Kisi bhi health problem ke liye Dr. Akhilesh Yadav ya apne doctor se zaroor milein.\n\nAppointment ke liye call karein: +91 74919 25047 ya [WhatsApp karein](https://wa.me/917491925047). Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Jaundice Treatment Ranchi",
        type: "text",
        content: "Ranchi ke patients jaundice ke baare mein yeh sawaal aksar poochte hain:",
      },
    ],
    faqs: [
      {
        q: "Jaundice mein kya khaana chahiye?",
        a: "Jaundice mein light easily digestible food best hai — khichdi, dal ka paani, coconut water, plain rice. Oily, fried, spicy food avoid karein. Alcohol bilkul band karein. Dr. Akhilesh Yadav ki guidance se diet tay karein — cause ke hisaab se recommendations alag hoti hain.",
      },
      {
        q: "Kya jaundice contagious (sankramak) hota hai?",
        a: "Hepatitis A aur E contagious hote hain (contaminated food/water se). Hepatitis B aur C blood/sexual contact se faila sakte hain. Hepatitis A aur B dono ke liye vaccination available hai. Orchid Medical Centre mein Dr. Akhilesh Yadav se vaccination advice lein.",
      },
      {
        q: "Jaundice mein ganne ka ras peena chahiye?",
        a: "Mild supportive hoga lekin medical treatment ki jagah nahi le sakta. Obstructive jaundice ya severe hepatitis mein sirf ganne ka ras se theek nahi hoga — proper diagnosis aur treatment zaroori hai.",
      },
      {
        q: "Ranchi mein jaundice ke liye blood test kahan hoti hai?",
        a: "Orchid Medical Centre, Ranchi mein ya kisi bhi registered diagnostic lab mein LFT (Liver Function Test) karwa sakte hain. Dr. Akhilesh Yadav specific tests recommend karenge symptoms ke hisaab se. Call karein: +91 74919 25047.",
      },
      {
        q: "Jaundice kitne din mein theek hota hai?",
        a: "Hepatitis A mein 4-6 hafte. Hepatitis B mein treatment ke saath 6-12 months (chronic ho sakta hai). Obstructive jaundice mein ERCP ke baad 1-2 hafte. Cause ke hisaab se timing alag hoti hai — Dr. Akhilesh Yadav accurate prognosis bata sakte hain.",
      },
      {
        q: "Kya Ranchi mein Hepatitis C ka ilaj hota hai?",
        a: "Haan — naye Direct Acting Antivirals (DAA) se Hepatitis C ka 8-12 hafte mein 95%+ recovery rate hai. Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, Ranchi mein Hepatitis C ka complete treatment karte hain.",
      },
    ],
  },

  {
    slug: "acidity-doctor-ranchi",
    image: "/images/acidity-doctor-ranchi-blog.png",
    titleHi: "रांची में Acidity का Doctor — बिना Antacid के Permanent Relief कैसे?",
    titleEn: "Acidity Doctor in Ranchi — Long-term Relief Without Daily Antacids",
    excerptHi: "Ranchi mein acidity ka doctor — Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre. GERD, chronic acidity aur ulcer ka sahi diagnosis aur lasting treatment.",
    excerptEn: "Acidity doctor in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre, treats chronic GERD and acidity with lasting results without daily antacids.",
    category: "Stomach Care",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🔥",
    tags: ["Acidity", "Ranchi", "GERD", "Stomach", "Doctor", "Hindi", "Treatment"],
    metaTitle: "Acidity Doctor Ranchi | Dr. Akhilesh Yadav GERD Treatment",
    metaDescription: "Acidity doctor in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterology, Orchid Medical Centre. Chronic GERD, reflux and ulcer treatment. Call: +91 74919 25047",
    sections: [
      {
        type: "text",
        content: "Ranchi ke Ashok Nagar ke 42-saal ke Mukesh Tiwari roz subah uthte toh seene mein jalan hoti thi. 3 saal se woh chemist se antacid tablet le lete aur kaam chalate rahe. Jab jalan raat ko so ne nahi dene lagi aur khaasi bhi shuru ho gayi, tab unki patni zordar argue karke Orchid Medical Centre, Ranchi le gayi. Dr. Akhilesh Yadav — DM Gastroenterology — ne Upper Endoscopy ki: Grade B esophagitis (food pipe mein sujan) aur Barrett's esophagus ka early sign mila. Sirf antacid nahi — proper PPI therapy aur lifestyle changes se 8 hafte mein Mukesh ji ko lasting relief mili. 'Main sochta tha yeh toh normal hai' — yeh soch hazaron Ranchi ke patients mein hai.",
      },
      {
        heading: "Acidity aur GERD — Fark Samjhein",
        type: "text",
        content: "Acidity aur GERD (Gastroesophageal Reflux Disease — आमाशय से भोजन-नलिका में एसिड का वापस आना) mein fark hai. Occasional acidity normal hai — teekha khaya, late night khaya. GERD tab hota hai jab yeh hafte mein 2 ya zyada baar ho, ya 4+ hafte se continuously ho. GERD mein acid esophagus mein repeatedly aata hai, jisse esophagitis, ulcer, ya Barrett's esophagus ho sakta hai — jo cancer risk hai. Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre — aksar dekhte hain ki log saalon tak antacid lete hain bina proper diagnosis ke. [Gastroenterologist Ranchi mein](/blog/best-gastroenterologist-ranchi) ya [endoscopy ke baare mein](/blog/endoscopy-kya-hota-hai) padhen.",
      },
      {
        heading: "🔴 Acidity ke Yeh Symptoms Hain Toh Doctor Se Milein",
        type: "list",
        content: "Sirf antacid se kaam mat chalayein — yeh hone par doctor zaroori hai:",
        list: [
          "Seene mein jalan (heartburn) jo raat ko zyada ho ya loatey waqt badhe",
          "Gala kharab rehna ya khaasi aana — acid larynx mein ja raha hai",
          "Khana nigalne mein takleef ya khaana atkna (Dysphagia — खाना निगलने में दिक्कत)",
          "Antacid se 4+ hafte mein koi faida nahi ho raha",
          "Bhookh na lagna ya wajan kam ho jaana",
          "Kaala ya dark stool — ulcer bleeding ka sign, turant milein",
          "Raat ko seene mein dard se uthna",
        ],
      },
      {
        heading: "Chronic Acidity ke Karan — Ranchi ke Patients Mein Common Triggers",
        type: "list",
        content: "Ranchi ki lifestyle mein yeh triggers zyada dekhe jaate hain:",
        list: [
          "Raat ka khana bahut late khaana aur turant so jaana",
          "Teekha-masaledar food — litti-chokha bahut zyada ghee ke saath",
          "Chai aur coffee ki zyada consumption — acid production badhta hai",
          "Stress aur anxiety — cortisol acid secretion badhata hai",
          "H. Pylori infection — gastric acid dysregulation ka karan",
          "Zyada wajan (Obesity) — LES (Lower Esophageal Sphincter) par pressure badhta hai",
        ],
      },
      {
        heading: "Ranchi mein Acidity ki Jach — Dr. Akhilesh Yadav ka Approach",
        type: "text",
        content: "Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — chronic acidity mein systematic approach lete hain. Pehle 4+ hafte ki history lena, PPI (Proton Pump Inhibitor — एसिड रोकने की दवा) trial response dekhna. Agar response partial ho ya red-flag symptoms hon, toh Upper GI Endoscopy (OGD Scopy) karte hain — Orchid Medical Centre mein hi available hai. H. Pylori test (stool antigen test) bhi recommend karte hain. AIIMS ke study ke mutaabik, India mein 50-60% GERD cases mein H. Pylori positive hota hai. Timely endoscopy se Barrett's esophagus ya early cancer bhi detect hoti hai. [Piles vs fissure](/blog/piles-fissure-fistula-differences-treatment) ya [appointment book karein](/book).",
      },
      {
        heading: "Acidity aur GERD ka Ilaj — Sirf Antacid Nahi",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — ka maanna hai ki GERD ka solution multidimensional hai. Sabse pehle cause identify karna — H. Pylori hai toh 14-day eradication therapy. Phir PPI ka proper course — akele antacid se zyada effective hota hai. Lifestyle mein: raat ka khana so ne se 3 ghante pehle khaana, bed ka head 6-8 inch uthana, wajan control, alcohol avoid karna. Ranchi ke local food mein — sattu ka paani, plain dahi (curd), chhachh — yeh sab acidity mein helpful hain. Severe Barrett's esophagus cases mein endoscopic ablation ya surgery bhi possible hai, lekin zyada tar cases conservative treatment se theek hote hain.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Acidity",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main roz 10-15 acidity patients dekhta hoon. Inme se aadhe se zyada log saalon se antacid le rahe hote hain bina kisi doctor ke advice ke. Yeh dangerous ho sakta hai — chronic acid reflux se esophageal damage aur cancer risk hota hai. 4 hafte se zyada acidity hai toh ek baar endoscopy zaroor karwa lein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein available hain.\n\nYeh article sirf educational purpose ke liye hai. Kisi bhi health problem ke liye Dr. Akhilesh Yadav ya apne doctor se zaroor milein.\n\nAppointment ke liye call karein: +91 74919 25047 ya [WhatsApp karein](https://wa.me/917491925047). Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Acidity Doctor Ranchi",
        type: "text",
        content: "Ranchi ke patients acidity aur GERD ke baare mein yeh sawaal aksar poochte hain:",
      },
    ],
    faqs: [
      {
        q: "Kya antacid zyada lene se nuksaan hota hai?",
        a: "Haan — long-term antacid use se kidney stones, magnesium deficiency aur rebound acidity ho sakti hai. PPI (Omeprazole, Pantoprazole) bhi bina supervision ke months tak lena theek nahi. Dr. Akhilesh Yadav se proper assessment karwa ke hi treatment lein.",
      },
      {
        q: "Acidity mein kya nahi khaana chahiye?",
        a: "Avoid karein: citrus fruits (nimbu, orange), tomatoes, chocolate, mint, alcohol, coffee, fried/fatty food. Ranchi mein litti-chokha bahut oily hota hai — thoda kam ghee use karein GERD mein. Plain dahi aur lassi theek hote hain.",
      },
      {
        q: "GERD aur heart attack mein kaise pehchaan karein?",
        a: "GERD mein jalan esophagus mein hoti hai — khane ke baad zyada, loatane par zyada. Heart attack mein chest pressure/squeezing, left arm mein dard, sweating hoti hai. Doubt hone par turant emergency room jayein — Dr. Akhilesh Yadav bhi yehi recommend karte hain.",
      },
      {
        q: "Kya yoga se acidity theek hoti hai?",
        a: "Kuch yoga poses (jaise Vajrasana after meals) acidity mein helpful hain. Lekin GERD mein certain poses (jaise headstand, forward bends) acid reflux badhate hain. Dr. Akhilesh Yadav se specific recommendations lein apni condition ke hisaab se.",
      },
      {
        q: "Ranchi mein endoscopy ke bina acidity diagnose ho sakti hai?",
        a: "Mild cases mein clinical history aur PPI trial se diagnosis possible hai. Lekin 4+ hafte ki acidity, red-flag symptoms ya medications se relief na ho toh endoscopy zaroori hai — Orchid Medical Centre, Ranchi mein available hai.",
      },
      {
        q: "Kya bacchon mein acidity ka treatment alag hota hai?",
        a: "Haan — bacchon mein acid reflux (GERD) ka presentation alag hota hai. Sirf adult medicines use karna theek nahi. Dr. Akhilesh Yadav — DM Gastroenterology — adult aur pediatric gastro conditions dono mein expert hain Orchid Medical Centre, Ranchi mein.",
      },
    ],
  },

  // ── BATCH 2: BLOGS 6–10 ─────────────────────────────────────────────────────

  {
    slug: "piles-doctor-ranchi",
    titleHi: "बवासीर (Piles) के लिए Ranchi में Doctor — Dr. Akhilesh Yadav",
    titleEn: "Piles Doctor in Ranchi — Diagnosis & Treatment by Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein bawaseer ke liye best gastroenterologist kaun hain? Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre mein hemorrhoids ka advanced, surgery-free ilaj karte hain.",
    excerptEn: "Looking for a piles doctor in Ranchi? Dr. Akhilesh Yadav offers advanced, non-surgical hemorrhoid treatment at Orchid Medical Centre.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🩺",
    tags: ["piles doctor ranchi", "bawaseer ka ilaj ranchi", "hemorrhoids ranchi", "gastroenterologist ranchi", "piles treatment jharkhand"],
    metaTitle: "Piles Doctor in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Piles (hemorrhoids) treatment in Ranchi by Dr. Akhilesh Yadav — DM Gastroenterologist at Orchid Medical Centre. Non-surgical options available. Book now.",
    sections: [
      {
        heading: "Ranchi ke Patient ki Kahani — Bawaseer ka Dard",
        type: "text",
        content: "Ramgarh se aaye 42-saal ke Ram Kishore — unhe 8 mahine se malbandh (constipation) aur toilet ke baad bleeding ho rahi thi. Unke padosi ne kaha 'piles hai toh surgery hi hogi.' Lekin Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne proctoscopy se diagnosis ki aur bataya ki unhe Grade 2 Internal Hemorrhoids hain jo bina surgery ke theek ho sakte hain. Aaj woh bilkul theek hain. Ranchi aur Jharkhand mein piles (bawaseer / बबासीर) ek common problem hai — lekin zyada tar log ya toh share karne se sharm aate hain ya galat treatment lete hain.",
      },
      {
        heading: "Piles Kya Hota Hai — Samjhein Aasaan Bhasha Mein",
        type: "text",
        content: "Piles yani Hemorrhoids — rectum (मलाशय) aur anus (गुदा) ke andar ya bahar ki swollen veins hoti hain. Jaise pair mein varicose veins hoti hain, waisi hi rectum mein bhi ho sakti hain. Internal Hemorrhoids (andar): generally pain-free, lekin toilet ke baad bright red blood aata hai. External Hemorrhoids (bahar): dard, khujli, aur ek hard lump feel hoti hai. Prolapsed Hemorrhoids (bahar nikal aaye): Grade 3-4, jisme tissue anus ke bahar aa jaata hai. Ranchi mein Dr. Akhilesh Yadav daily 8-10 piles patients dekhte hain — aur majority ko surgery ki zaroorat nahi hoti.",
      },
      {
        heading: "Piles ke Karan — Ranchi ke Context Mein",
        type: "list",
        content: "Ranchi aur Jharkhand mein piles ke yeh common karan hain:",
        list: [
          "Chronic constipation — fiber-poor diet, kam paani peena — Jharkhand ke rural areas mein zyada",
          "Oily-spicy food ka zyada sevan — dal-baati, litti-chokha mein ghee ki matra",
          "Lambe waqt tak toilet par baithna aur strain karna",
          "Pregnancy — especially 3rd trimester mein pelvic pressure",
          "Motaapa (Obesity) — abdominal pressure badhta hai",
          "Hereditery factors — agar family mein hai toh risk zyada",
          "Sedentary lifestyle — zyada der baithna, exercise nahi karna",
        ],
      },
      {
        heading: "Dr. Akhilesh Yadav ka Diagnosis Approach — Orchid Medical Centre Ranchi",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology — pehle detailed history lete hain: kitne din se, blood ka colour kya hai (bright red vs dark), dard hai ya nahi, prolapse hai ya nahi. Phir Proctoscopy (एक छोटा instrument jo anus mein daala jaata hai — generally painless) se exact grade determine karte hain. Agar bleeding excessive ho ya age 40+ ho, toh Colonoscopy bhi recommend karte hain colon cancer ya polyps rule out karne ke liye — Orchid Medical Centre mein hi available hai. Ek baar diagnosis clear ho, toh treatment plan decide hota hai.",
      },
      {
        heading: "Piles ka Ilaj — Surgery Zaroor Nahi",
        type: "text",
        content: "Dr. Akhilesh Yadav, Ranchi ke patients ko explain karte hain: Grade 1-2 hemorrhoids mein lifestyle + medication se 80% improvement hota hai. High-fiber diet (sabjiyan, daalein, isabgol), 2-3 litre paani roz, stool softeners, topical creams. Grade 2-3 mein Rubber Band Ligation (RBL) — ek OPD procedure jisme hemorrhoid ko band se bandha jaata hai aur woh shrink ho jaata hai — no general anesthesia, no admission. Grade 3-4 severe cases mein Stapler Hemorrhoidopexy ya Hemorrhoidectomy — lekin yeh sirf minority mein zaroor hoti hai. Ranchi mein Dr. Akhilesh Yadav Orchid Medical Centre mein yeh sab options provide karte hain.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Piles",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Bawaseer mein sharmane ki zaroorat nahi — yeh ek medical condition hai. Ranchi mein main roz patients dekhta hoon jinhone 2-3 saal tak chhupaaya aur phir problem badh gayi. Jitni jaldi milein, utna behtar — Grade 1-2 mein koi surgery nahi chahiye.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein available hain.\n\nYeh article sirf educational purpose ke liye hai. Kisi bhi health problem ke liye qualified doctor se zaroor milein.\n\nAppointment ke liye call karein: +91 74919 25047 ya [WhatsApp karein](https://wa.me/917491925047). Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Piles Doctor Ranchi",
        type: "text",
        content: "Ranchi ke patients piles ke baare mein yeh sawaal aksar poochte hain:",
      },
    ],
    faqs: [
      {
        q: "Kya piles mein hamesha operation karna padta hai?",
        a: "Nahi — Grade 1 aur 2 hemorrhoids mein medication, diet change aur Rubber Band Ligation (OPD procedure) se theek ho jaata hai. Surgery sirf severe Grade 3-4 cases mein lagti hai. Dr. Akhilesh Yadav Ranchi mein sabse pehle non-surgical options try karte hain.",
      },
      {
        q: "Piles mein konsa doctor dikhana chahiye?",
        a: "Gastroenterologist ya Colorectal specialist dikhana best hai. Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, Ranchi mein hemorrhoids ke sab cases dekhte hain — OPD procedure se lekar surgery tak.",
      },
      {
        q: "Toilet mein bright red blood aane par kya karein?",
        a: "Piles ka common sign hai, lekin kabhi kabhi colon polyp ya early cancer bhi ho sakta hai, isliye ignore mat karein. 40+ age mein especially — turant Dr. Akhilesh Yadav ya kisi gastroenterologist se milein Ranchi mein.",
      },
      {
        q: "Piles mein kya khaana chahiye?",
        a: "High fiber foods — isabgol (psyllium), green leafy vegetables, fruits with skin, daalein. Roz 2-3 litre paani. Avoid karein: refined flour (maida), oily-spicy food, alcohol. Ranchi ke local food mein sattu ka paani aur chhachh helpful hain.",
      },
      {
        q: "Rubber Band Ligation kya hota hai aur dard hota hai kya?",
        a: "RBL ek OPD procedure hai jisme hemorrhoid ke base par ek rubber band daal dete hain — blood supply cut hoti hai aur woh 7-10 din mein apne aap gir jaata hai. Most patients mein sirf halki discomfort ya heaviness hoti hai. Dr. Akhilesh Yadav yeh procedure Orchid Medical Centre, Ranchi mein karte hain.",
      },
      {
        q: "Piles dobara ho sakti hai surgery ke baad bhi?",
        a: "Haan — agar diet aur lifestyle nahi badalee toh recurrence ho sakta hai. Dr. Akhilesh Yadav surgery ke baad bhi detailed diet plan aur follow-up ka schedule dete hain Ranchi ke patients ko.",
      },
    ],
  },

  {
    slug: "ibs-doctor-ranchi",
    titleHi: "IBS (Irritable Bowel Syndrome) Doctor Ranchi — Dr. Akhilesh Yadav",
    titleEn: "IBS Doctor in Ranchi — Expert IBS Diagnosis & Management | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein IBS ke liye specialist doctor kaun hain? Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre mein irritable bowel syndrome ka scientific, patient-centric ilaj karte hain.",
    excerptEn: "Best IBS doctor in Ranchi. Dr. Akhilesh Yadav at Orchid Medical Centre offers personalised IBS management — diet, lifestyle, medication and gut-health guidance.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🫁",
    tags: ["ibs doctor ranchi", "irritable bowel syndrome ranchi", "pet ki takleef ranchi", "gastroenterologist ranchi", "ibs treatment jharkhand"],
    metaTitle: "IBS Doctor in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "IBS specialist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre. Personalised diet, medication & lifestyle plan for IBS.",
    sections: [
      {
        heading: "Ranchi ki Patient ki Kahani — Saalon ki Takleef",
        type: "text",
        content: "Hazaribagh se aaye 28-saal ki Priya Devi — 3 saal se pet mein dard, baar baar loose motions, aur phir kuch din bilkul constipation. Doctors ne kai tests kiye — sab normal. 'Stress hai' bolke dismiss kar diya. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne diagnosis ki: IBS (Irritable Bowel Syndrome). 'Yeh real condition hai — aapki imagination nahi,' unka pehla shabd tha. 4 mahine ke structured treatment ke baad Priya ki life normal ho gayi. Ranchi mein IBS ek underdiagnosed condition hai — lakho patients saalon tak suffer karte hain.",
      },
      {
        heading: "IBS Kya Hai — Aur Kyun Itna Confusing Hai",
        type: "text",
        content: "IBS (Irritable Bowel Syndrome) ek functional gut disorder hai — matlab, aapki intestine (aanth) mein koi structural damage nahi hota, lekin function abnormal hota hai. Brain-gut connection disturbed rehta hai. Yeh ek spectrum hai: IBS-D (Diarrhea predominant) — aksar loose motions. IBS-C (Constipation predominant) — aksar kabj. IBS-M (Mixed) — dono baar baar aata-jaata hai. Ranchi mein Dr. Akhilesh Yadav ke anusaar, India mein 10-15% adults ko IBS hai — aur bahut kam ko sahi diagnosis milti hai. Tests 'normal' aate hain, toh log sochte hain kuch nahi hai — jo galat hai.",
      },
      {
        heading: "IBS ke Symptoms — Kya Aap Pehchante Hain?",
        type: "list",
        content: "IBS ke yeh common symptoms hain:",
        list: [
          "Recurrent abdominal pain (pet mein dard) jo toilet ke baad better ho jaata hai",
          "Stool consistency mein change — kabhi loose, kabhi hard",
          "Bloating aur gas — pet phula hua lagta hai",
          "Feeling of incomplete evacuation — toilet ke baad bhi lagta hai poori tarah nahi hua",
          "Mucus in stool (aant ka fluid motions mein)",
          "Symptoms stress ya certain foods se worse hote hain",
          "Bina kisi obvious cause ke baar baar bathroom jaana",
        ],
      },
      {
        heading: "IBS ka Diagnosis — Dr. Akhilesh Yadav ka Rome IV Criteria Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi mein IBS diagnosis ke liye Rome IV Criteria use karte hain: recurrent abdominal pain minimum 1 day/week for last 3 months, related to defecation, associated with stool frequency or form change. Saath mein, yeh rule out karte hain: Inflammatory Bowel Disease (IBD — Crohn's/Colitis), Celiac Disease (gluten intolerance), Colon Cancer. Iske liye blood tests (CBC, CRP, Celiac markers), stool tests, aur zaroorat padne par Colonoscopy. Red flags — rectal bleeding, weight loss, night symptoms, age 50+ — mein pehle investigation zaroori hai.",
      },
      {
        heading: "IBS ka Ilaj — Sirf Dawa Nahi, Life Change",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi mein IBS ka multidimensional treatment dete hain. Diet: Low-FODMAP diet trial (fermentable carbohydrates avoid karna — onion, garlic, wheat, milk, lentils temporarily reduce karna). Local foods mein — plain rice, moong dal, banana, curd (in moderation) IBS-safe hote hain. Medication: Anti-spasmodics (pet dard ke liye), probiotics (gut bacteria balance), fiber supplements (IBS-C mein), loperamide (IBS-D mein). Stress Management: IBS mein gut-brain axis ka bada role hai — meditation, yoga, aur consistent sleep schedule help karte hain. CBT (Cognitive Behavioral Therapy) bhi evidence-based hai severe cases mein.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — IBS",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'IBS ke patients ko sabse pehle yeh assurance chahiye ki yeh real condition hai aur inki imagination nahi. Ranchi mein main dekh raha hoon ki patients bina diagnosis ke saalon tak anxiety aur dard mein rehte hain. Ek simple structured plan se 70% patients mein significant improvement hota hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein available hain.\n\nYeh article sirf educational purpose ke liye hai. Apni condition ke liye Dr. Akhilesh Yadav ya apne doctor se zaroor milein.\n\nAppointment ke liye call karein: +91 74919 25047 ya [WhatsApp karein](https://wa.me/917491925047). Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — IBS Doctor Ranchi",
        type: "text",
        content: "IBS ke baare mein Ranchi ke patients ke common sawaal:",
      },
    ],
    faqs: [
      {
        q: "IBS aur IBD mein kya fark hai?",
        a: "IBS (Irritable Bowel Syndrome) ek functional disorder hai — tests normal aate hain, koi structural damage nahi. IBD (Inflammatory Bowel Disease — Crohn's/Ulcerative Colitis) mein actual inflammation aur damage hoti hai — tests mein abnormality dikhti hai. Dr. Akhilesh Yadav Ranchi mein dono conditions treat karte hain.",
      },
      {
        q: "IBS mein kaunsa khana avoid karein?",
        a: "Low-FODMAP approach follow karein: avoid karein onion, garlic, wheat (roti thodi kam), milk, rajma/chole, apple, mango in excess. Ranchi ke local safe foods: plain rice, moong daal, banana, curd (limited), sattu (in IBS-C). Dr. Akhilesh Yadav ke paas personalized diet plan milega.",
      },
      {
        q: "Kya IBS mein colonoscopy zaroor hai?",
        a: "IBS-C/D ke typical cases mein under 45 age mein zaroor nahi. Lekin red flags hain toh: rectal bleeding, weight loss, family history of colon cancer, anemia — toh Colonoscopy zaroori hai. Dr. Akhilesh Yadav decide karte hain Orchid Medical Centre, Ranchi mein.",
      },
      {
        q: "IBS ki wajah se kitne din mein theek ho sakte hain?",
        a: "IBS ek chronic condition hai — 'theek' nahi, 'manage' karna hota hai. 4-8 hafte ke structured treatment mein zyada tar patients ko significant relief milta hai. Lifestyle changes long-term maintain karne se symptoms bahut kam rehte hain. Dr. Akhilesh Yadav regular follow-up karte hain.",
      },
      {
        q: "IBS mein stress ka kitna role hai?",
        a: "Bahut bada role hai — IBS ek gut-brain axis disorder hai. Stress se symptoms worsen hote hain. Dr. Akhilesh Yadav medication ke saath stress management techniques bhi suggest karte hain — breathing exercises, yoga, consistent sleep schedule.",
      },
      {
        q: "Kya probiotics IBS mein help karte hain?",
        a: "Haan — research-backed hain kuch specific strains (Lactobacillus, Bifidobacterium). Plain dahi mein natural probiotics hote hain. Over-the-counter probiotic supplements bhi effective ho sakte hain. Dr. Akhilesh Yadav Ranchi mein patient-specific probiotic recommendation dete hain.",
      },
    ],
  },

  {
    slug: "constipation-doctor-ranchi",
    titleHi: "कब्ज (Constipation) के Doctor Ranchi — Dr. Akhilesh Yadav",
    titleEn: "Constipation Doctor in Ranchi — Diagnosis & Treatment | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein kabj (constipation) ke liye specialist doctor: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Chronic constipation ke karan, ilaj aur diet guide.",
    excerptEn: "Chronic constipation treatment in Ranchi by Dr. Akhilesh Yadav, DM Gastroenterologist. Causes, diet tips, medication & when to seek specialist care.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "💊",
    tags: ["constipation doctor ranchi", "kabj ka ilaj ranchi", "chronic constipation ranchi", "gastroenterologist ranchi", "pet ki samasya jharkhand"],
    metaTitle: "Constipation Doctor in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Chronic constipation specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Diet, lifestyle & medication for lasting relief from kabj.",
    sections: [
      {
        heading: "Jab Kabj Sirf 'Aam Baat' Nahi Rahi",
        type: "text",
        content: "Giridih se aaye 55-saal ke Shyam Lal ji — 6 mahine se sirf hafte mein 2-3 baar bathroom jaana, baar baar strain, aur toilet mein 20-25 minute spend karna. Unhe laga yeh umar ka sign hai. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne unhe detail mein assess kiya. Pata chala unhe Slow Transit Constipation tha — aur unke stool mein occult blood bhi tha. Timely colonoscopy ne ek colon polyp pakda jo early stage mein remove kar diya gaya. Kabj — chronic constipation — sirf takleef nahi, kabhi kabhi kuch serious ka sign bhi ho sakta hai.",
      },
      {
        heading: "Constipation Kab 'Chronic' Kehlaata Hai?",
        type: "text",
        content: "Rome IV Criteria ke mutaabik, Chronic Constipation diagnosis hoti hai agar 6+ mahine se koi bhi 2 symptoms hon: Hafte mein 3 se kam bowel movements. 25% se zyada times hard/lumpy stools. 25% se zyada times excessive straining. 25% se zyada times incomplete evacuation ki feeling. Manual maneuvers ki zaroorat (apni ungli se help karna). Ranchi mein Dr. Akhilesh Yadav ke anusaar, India mein 14-22% adults Chronic Constipation suffer karte hain — aur majority sirf self-medication karte hain.",
      },
      {
        heading: "Kabj ke Karan — Kab Doctor Zaroori Hai",
        type: "list",
        content: "Kabj ke common karan aur warning signs:",
        list: [
          "Low fiber diet — maida roti, processed food, kam sabji",
          "Insufficient water intake — 2 litre se kam roz",
          "Sedentary lifestyle — exercise nahi karna",
          "Hypothyroidism (thyroid ki kami) — constipation ka hormonal cause",
          "Certain medications — iron tablets, calcium, certain pain killers",
          "Diabetes — bowel motility affect hoti hai",
          "Warning: rectal bleeding, weight loss, age 50+ mein naya constipation — turant doctor",
        ],
      },
      {
        heading: "Dr. Akhilesh Yadav ka Constipation Assessment — Ranchi",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein constipation assessment mein karte hain: detailed history (diet, medications, lifestyle), physical examination including rectal exam. Basic tests: thyroid function, blood sugar, CBC. Agar 50+ age, rectal bleeding, weight loss, ya family history ho toh Colonoscopy zaroori — colon polyp ya cancer rule out karne ke liye. Functional constipation mein colonic transit study ya anorectal manometry bhi kabhi kabhi lagti hai. Yeh structured approach ensure karta hai ki underlying cause miss na ho.",
      },
      {
        heading: "Kabj ka Ilaj — Dr. Akhilesh Yadav ka Step-by-Step Plan",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke patients ko step-by-step plan dete hain. Step 1 — Diet: Isabgol (psyllium husk) 1 tbsp roz raat ko paani ke saath, high-fiber vegetables (palak, lauki, karela), whole grains, fruits with skin, roz 2.5-3 litre paani. Ranchi ke local helpful foods: sattu ka paani (natural fiber), papaya, guava, chhachh. Step 2 — Lifestyle: Roz 30 min walk, fixed bathroom time (morning, after chai), Squatty Potty position (ek stool rakhen paon ke neeche — physiologically better). Step 3 — Medication (doctor ke guidance mein): osmotic laxatives (lactulose, PEG), stool softeners — sirf short-term. Long-term laxative dependence dangerous hai. Step 4 — Advanced: Biofeedback therapy (pelvic floor dysfunction mein) ya rare cases mein surgery.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Constipation",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main roz 5-7 chronic constipation patients dekhta hoon. Sabse badi problem yeh hai ki log saalon tak laxatives khate rehte hain bina diagnosis ke — aur kabhi kabhi serious condition miss ho jaati hai. 3 mahine se zyada kabj hai, toh ek baar proper evaluation zaroor karwa lein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Apni condition ke liye qualified doctor se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Constipation Doctor Ranchi",
        type: "text",
        content: "Kabj ke baare mein Ranchi ke patients ke common sawaal:",
      },
    ],
    faqs: [
      {
        q: "Roz laxative lena safe hai?",
        a: "Nahi — long-term stimulant laxatives (senna, bisacodyl) se colon dependent ho jaata hai aur function aur worse ho sakta hai. Short-term use theek hai. Dr. Akhilesh Yadav Ranchi mein underlying cause treat karte hain taaki laxative dependency na bane.",
      },
      {
        q: "Kabj mein sabse achha gharelu nuskha kya hai?",
        a: "Isabgol (psyllium husk) raat ko paani ke saath sabse effective evidence-based remedy hai. Saath mein roz 2.5 litre paani aur walk. Papaya, guava, sattu ka paani bhi helpful hain. Lekin 3 mahine se zyada problem ho toh doctor zaroor dikhayein.",
      },
      {
        q: "Kya kabj se colon cancer hota hai?",
        a: "Constipation apne aap colon cancer nahi karta, lekin chronic constipation colon cancer ka symptom ho sakta hai. Isliye 50+ age mein naya onset constipation, rectal bleeding, weight loss — colonoscopy zaroor karwa lein Dr. Akhilesh Yadav se Ranchi mein.",
      },
      {
        q: "Bacchon mein kabj ka kya karein?",
        a: "Bacchon mein bhi fiber aur paani pehli line hai. Lekin persistent constipation mein pediatric evaluation zaroori hai — Hirschsprung's disease ya other structural issues rule out karne ke liye. Dr. Akhilesh Yadav adult cases handle karte hain — bacchon ke liye pediatric gastro refer karein.",
      },
      {
        q: "Pregnancy mein kabj normal hai kya?",
        a: "Haan — progesterone hormone bowel motility slow karta hai pregnancy mein. Safe options: isabgol, lactulose, fiber increase, paani zyada peena. Iron tablets bhi constipate karte hain — doctor se iron form change karwa sakte hain. Dr. Akhilesh Yadav pregnancy-safe options guide karenge.",
      },
    ],
  },

  {
    slug: "stomach-ulcer-doctor-ranchi",
    titleHi: "Stomach Ulcer (Peptic Ulcer) Doctor Ranchi — Dr. Akhilesh Yadav",
    titleEn: "Stomach Ulcer Doctor in Ranchi — Peptic Ulcer Treatment | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein peptic ulcer (stomach ulcer) ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. H. Pylori se lekar endoscopy tak, complete care.",
    excerptEn: "Stomach ulcer (peptic ulcer) specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. H. Pylori treatment, endoscopy & complete ulcer management.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🔬",
    tags: ["stomach ulcer doctor ranchi", "peptic ulcer ranchi", "h pylori treatment ranchi", "gastroenterologist ranchi", "ulcer specialist jharkhand"],
    metaTitle: "Stomach Ulcer Doctor Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Peptic ulcer specialist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist. H. Pylori eradication, endoscopy & complete ulcer treatment at Orchid Medical Centre.",
    sections: [
      {
        heading: "Ranchi ke Patient ki Kahani — Ulcer Ka Dard",
        type: "text",
        content: "Dhanbad se aaye 35-saal ke Manoj Kumar — 2 mahine se khaane ke 1-2 ghante baad pet mein jalan aur dard. Raat ko bhi uthate the. Gaon mein neem-hakeem ne 'gas ki problem' boli aur antacid diya — kuch din theek, phir wapas. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne Endoscopy ki. Report: Duodenal Ulcer (first part of small intestine mein ghav) aur H. Pylori positive. 14-day eradication therapy ke baad Manoj ki problem bilkul khatam. Ranchi aur Jharkhand mein H. Pylori infection bahut common hai — aur yeh peptic ulcer ka main cause hai.",
      },
      {
        heading: "Peptic Ulcer Kya Hai — Stomach vs Duodenal",
        type: "text",
        content: "Peptic Ulcer — stomach (Gastric Ulcer) ya duodenum (Duodenal Ulcer) ki inner lining mein open sore (ghav) hota hai. Stomach ki mucus lining normally acid se protect karti hai — jab yeh protective layer damage ho, toh acid tissue ko hurt karta hai. Gastric Ulcer: khane ke saath ya baad mein dard. Duodenal Ulcer: khaane ke 2-3 ghante baad ya raat ko dard — khane se temporarily theek lagta hai. H. Pylori infection aur NSAIDs (aspirin, ibuprofen) — yeh do sabse bade causes hain. Ranchi mein Dr. Akhilesh Yadav ke clinic mein 40-50% ulcer cases mein H. Pylori positive aata hai.",
      },
      {
        heading: "Peptic Ulcer ke Warning Signs",
        type: "list",
        content: "Inme se koi bhi ho toh turant doctor se milein:",
        list: [
          "Khaane ke baad ya raat ko burning/gnawing pain upper abdomen mein",
          "Nausea ya vomiting — sometimes blood ya coffee-ground jaise",
          "Black tarry stools (kala paakhana) — bleeding ulcer ka sign",
          "Suddenly severe stomach pain — perforated ulcer emergency hai",
          "Weight loss without trying",
          "Khana khaane ke baad bhi pet bhar gaya lagta hai (early satiety)",
        ],
      },
      {
        heading: "Diagnosis — Dr. Akhilesh Yadav ka Endoscopy Approach Ranchi",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi mein ulcer diagnosis mein pehle detailed history lete hain: dard pattern, NSAID use history, stress level. H. Pylori test: stool antigen test ya urea breath test (blood test se zyada accurate). Definitive diagnosis: Upper GI Endoscopy (OGD Scopy) — ulcer directly dekhna, biopsy lena (malignancy rule out karne ke liye Gastric Ulcer mein), aur H. Pylori rapid urease test. Orchid Medical Centre mein advanced endoscopy available hai. 45+ age mein ya alarm features mein endoscopy zaroori hai.",
      },
      {
        heading: "Peptic Ulcer ka Ilaj — Dr. Akhilesh Yadav ka Protocol",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi mein ulcer treatment mein yeh approach follow karte hain. H. Pylori positive cases: Triple therapy — 2 antibiotics (clarithromycin + amoxicillin) + PPI (Pantoprazole) — 14 days. Eradication rate 85-90%. NSAIDs-induced ulcer: NSAID bandh karo, PPI shuru karo. PPI (Proton Pump Inhibitor): stomach acid reduce karna zaroori hai — 4-8 hafte. Follow-up endoscopy (Gastric Ulcer mein 6-8 hafte baad) — healing confirm karne aur malignancy rule out karne ke liye. Diet: avoid karein NSAIDs, alcohol, smoking, oily-spicy food. Ranchi ke local safe foods: plain rice, dahi, moong daal soup.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Stomach Ulcer",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main aksar dekhta hoon ki patients saalon tak antacid khate hain bina yeh jaane ki unhe H. Pylori infection hai. Yeh 14-din ki antibiotic therapy se theek hoti hai — lekin pehle diagnosis zaroori hai. Kala paakhana ya ulti mein blood — yeh emergency hai, turant aaein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Diagnosis aur treatment ke liye qualified doctor se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Stomach Ulcer Doctor Ranchi",
        type: "text",
        content: "Peptic ulcer ke baare mein Ranchi ke patients ke common sawaal:",
      },
    ],
    faqs: [
      {
        q: "H. Pylori kaise failta hai?",
        a: "H. Pylori contaminated paani ya khane se, ya infected vyakti ke saath close contact se fail sakta hai. Ranchi aur Jharkhand mein piped water quality variable hai — isliye infection rate zyada hai. Dr. Akhilesh Yadav stool test ya urea breath test se H. Pylori diagnose karte hain.",
      },
      {
        q: "Ulcer mein kya khaana safe hai?",
        a: "Safe: dahi, plain rice, moong daal soup, cooked vegetables, banana, oatmeal. Avoid: NSAIDs (ibuprofen, aspirin), alcohol, smoking, very spicy food, coffee. Koi ek 'ulcer diet' nahi hoti — jo trigger kare woh avoid karein. Dr. Akhilesh Yadav se personalized guidance lein.",
      },
      {
        q: "Kala paakhana hone par kya karein?",
        a: "Kala tarry stool (Melena) bleeding ulcer ka serious sign hai — upper GI tract se blood aa raha hai. Yeh emergency hai — turant Orchid Medical Centre ya nearest emergency room jayein. Dr. Akhilesh Yadav urgent endoscopy karte hain aise cases mein.",
      },
      {
        q: "Ulcer aur acid reflux (GERD) mein kya fark hai?",
        a: "GERD mein acid esophagus mein aata hai — chest mein jalan (heartburn) hoti hai, khane ke baad zyada. Ulcer mein stomach ya duodenum mein ghav hota hai — upper abdomen mein dard, often khaane se related. Dono conditions alag hain aur different treatment chahte hain. Dr. Akhilesh Yadav endoscopy se clearly differentiate karte hain.",
      },
      {
        q: "Kya stress se ulcer hota hai?",
        a: "Pure stress se ulcer nahi hota (yeh myth hai), lekin stress H. Pylori infection aur NSAID use ke saath ulcer severity badha sakta hai. Physiological stress (ICU patients) se 'Stress Ulcer' hoti hai — lekin yeh alag context hai. Dr. Akhilesh Yadav Ranchi mein patients ko yeh confusion clear karte hain.",
      },
      {
        q: "Gastric ulcer mein follow-up endoscopy kyun zaroori hai?",
        a: "Gastric ulcer (stomach ulcer) mein rare cases mein early gastric cancer ulcer jaisi dikhti hai. Isliye 6-8 hafte ke treatment ke baad follow-up endoscopy se confirm karte hain ki ulcer heal hua aur malignancy nahi hai. Duodenal ulcer mein generally follow-up endoscopy zaroor nahi hoti.",
      },
    ],
  },

  {
    slug: "colon-cancer-screening-ranchi",
    titleHi: "Colon Cancer Screening Ranchi — Dr. Akhilesh Yadav | Colonoscopy",
    titleEn: "Colon Cancer Screening in Ranchi — Colonoscopy & Prevention | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein colon cancer screening ke liye colonoscopy: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. 50+ age mein screening kyun zaroori hai — poori guide.",
    excerptEn: "Colon cancer screening in Ranchi — colonoscopy by Dr. Akhilesh Yadav at Orchid Medical Centre. Who needs screening, what to expect, and why early detection matters.",
    category: "procedures",
    readTimeMins: 9,
    publishedAt: "August 2026",
    emoji: "🏥",
    tags: ["colon cancer screening ranchi", "colonoscopy ranchi", "colorectal cancer prevention ranchi", "gastroenterologist ranchi", "cancer screening jharkhand"],
    metaTitle: "Colon Cancer Screening Ranchi | Colonoscopy | Dr. Akhilesh Yadav",
    metaDescription: "Colon cancer screening & colonoscopy in Ranchi by Dr. Akhilesh Yadav, DM Gastroenterologist. Who needs it, cost & what to expect at Orchid Medical Centre.",
    sections: [
      {
        heading: "Ranchi ke Patient ki Kahani — Polyp Jo Cancer Banta",
        type: "text",
        content: "Bokaro se aaye 58-saal ke Ramnath ji — unhe koi symptoms nahi the. Unki beti ne zid karke colonoscopy karwai kyunki unke bade bhai ko 5 saal pehle colon cancer hua tha. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne colonoscopy ki. Mili: ek 18mm adenomatous polyp. Endoscopy ke dauran hi remove kar diya — colonoscopic polypectomy. Biopsy mein high-grade dysplasia (pre-cancerous) thi. Agar 5 saal aur wait karte, cancer ho sakta tha. 'Dr. Sahab ne meri jaan bachi' — Ramnath ji ke shabd. Colon cancer India mein tera rahe cancers mein hai — aur early screening se yeh rokable hai.",
      },
      {
        heading: "Colon Cancer Screening Kyun Zaroori Hai",
        type: "text",
        content: "Colon cancer (colorectal cancer) dheerey dheerey develop hota hai — pehle colon mein polyp (chhota growth) banta hai, phir saalon mein cancer mein badal sakta hai. Colonoscopy screening mein yeh polyps cancer banne se pehle dekhkar remove kar diye jaate hain. AIIMS aur Indian Council of Medical Research (ICMR) guideline ke mutaabik: Average risk mein 45-50 saal se shuru karein screening. High risk mein (family history, IBD, Lynch syndrome) pehle shuru karein. Ranchi mein Dr. Akhilesh Yadav ke anusaar, Jharkhand mein colon cancer cases badh rahe hain — awareness aur screening bahut zaroori hai.",
      },
      {
        heading: "Kise Screening Ki Zaroorat Hai — Ranchi ke Patients",
        type: "list",
        content: "Aapko colon cancer screening ki zaroorat hai agar:",
        list: [
          "Age 45+ aur average risk — regular colonoscopy har 10 saal",
          "First-degree relative (parents/sibling) mein colon cancer — 40 saal se ya 10 saal pehle jitni umra mein unhe hua",
          "Personal history of colon polyps ya colon cancer",
          "Inflammatory Bowel Disease (Crohn's ya Ulcerative Colitis)",
          "Lynch Syndrome ya FAP (familial adenomatous polyposis) genetic condition",
          "Rectal bleeding, unexplained weight loss, change in bowel habits — kisi bhi age mein",
          "Kala (tarry/dark) stool jo explain na ho",
        ],
      },
      {
        heading: "Colonoscopy Experience — Orchid Medical Centre Ranchi Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi mein colonoscopy se pehle patients ko poori tarah explain karte hain. Preparation (1 din pehle): liquid diet, bowel preparation solution (PEG — polyethylene glycol) pine se colon clean hoti hai. Yeh process thoda uncomfortable lagta hai, lekin zaroori hai. Procedure: sedation (IV medication se neend aata hai — procedure dard nahi hota mostly). Flexible scope colon mein daala jaata hai. Duration: 30-45 minute. Agar polyp mile toh same time mein remove kar sakte hain (polypectomy). Recovery: sedation se 1-2 ghante mein utha sakte hain. Koi cuts nahi, koi taakon nahi. Driving avoid karein us din.",
      },
      {
        heading: "Colon Cancer ke Warning Signs — Ignore Mat Karein",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke patients ko yeh warning signs yaad rakhne ko kehte hain: Rectal bleeding ya stool mein blood (bright red ya dark). Stool ki width ya shape mein change — 'pencil thin' stools. Unexplained weight loss. Persistent abdominal discomfort — gas, cramps, pain. Feeling of incomplete bowel emptying. Unexplained iron deficiency anemia. In symptoms mein se koi bhi ho — kisi bhi age mein — colonoscopy zaroori hai. Colon cancer early stage mein detect ho toh outcomes significantly better hote hain. Late stage mein treatment complex aur prognosis alag hoti hai.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Cancer Screening",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Colonoscopy se log darte hain — lekin jo patients ek baar karwa lete hain, woh kehte hain itna bura nahi tha. Aur jo polyp hum nikaalte hain — woh theek nahi karte, cancer rokta hai. Ranchi mein main chahta hoon ki har 45+ individual ek baar colonoscopy karwa le.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Apni screening ke liye qualified gastroenterologist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Colon Cancer Screening Ranchi",
        type: "text",
        content: "Colonoscopy aur colon cancer screening ke baare mein Ranchi ke patients ke common sawaal:",
      },
    ],
    faqs: [
      {
        q: "Colonoscopy kitni baar karwani chahiye?",
        a: "Average risk mein 45-50 saal se shuru, har 10 saal mein. Agar polyp mile toh 3-5 saal mein follow-up. High risk (family history, IBD) mein Dr. Akhilesh Yadav zyada frequent schedule recommend karte hain Orchid Medical Centre, Ranchi mein.",
      },
      {
        q: "Colonoscopy dardnak hoti hai?",
        a: "Sedation ke saath generally nahi. Most patients ko sirf minor bloating ya cramping yaad rehti hai. Preparation (bowel prep) zyada uncomfortable lagta hai kuch logon ko. Dr. Akhilesh Yadav Ranchi mein procedure se pehle poori preparation explain karte hain.",
      },
      {
        q: "Ranchi mein colonoscopy ka kharcha kitna hai?",
        a: "Orchid Medical Centre, Ranchi mein colonoscopy cost reasonable hai aur Jharkhand mein kisi bhi government hospital comparable hai. Polypectomy sath ho toh additional charge. Exact cost ke liye +91 74919 25047 par call karein ya WhatsApp karein.",
      },
      {
        q: "Kya colon cancer ke symptoms hamesha hote hain?",
        a: "Nahi — early stage colon cancer mein symptoms ho bhi nahi sakte. Jab symptoms aate hain (rectal bleeding, weight loss) toh cancer already advanced stage mein ho sakta hai. Isliye asymptomatic logon mein bhi 45+ age mein screening zaroori hai.",
      },
      {
        q: "Colonoscopy se pehle kya khaana chahiye aur kya nahi?",
        a: "1 din pehle clear liquid diet — paani, clear soup, nimbu paani (pulp ke bina), coconut water. Red ya purple colored drinks avoid karein. Bowel prep solution (PEG) raat ko peena hota hai — Dr. Akhilesh Yadav detailed written instructions dete hain.",
      },
      {
        q: "Family mein colon cancer history hai — kab se screening shuru karein?",
        a: "Agar ek first-degree relative (parent/sibling) ko colon cancer hua — 40 saal ya unki age se 10 saal pehle (jo bhi pehle ho). Agar Lynch syndrome ya FAP genetic condition ho — aur bhi pehle. Dr. Akhilesh Yadav family history ke hisaab se personalized screening schedule banate hain.",
      },
    ],
  },
  // ── BATCH 3: BLOGS 11–15 ─────────────────────────────────────────────────────

  {
    slug: "hemorrhoids-treatment-ranchi",
    titleHi: "Hemorrhoids Treatment Ranchi — बिना Surgery के Bawaseer ka Ilaj",
    titleEn: "Hemorrhoids Treatment in Ranchi — Non-Surgical Options | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein hemorrhoids (bawaseer) ka advanced non-surgical treatment: Rubber Band Ligation, sclerotherapy aur lifestyle changes. Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre.",
    excerptEn: "Advanced non-surgical hemorrhoid treatment in Ranchi by Dr. Akhilesh Yadav — Rubber Band Ligation, sclerotherapy & complete management at Orchid Medical Centre.",
    category: "procedures",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "💉",
    tags: ["hemorrhoids treatment ranchi", "bawaseer treatment ranchi", "rubber band ligation ranchi", "piles non-surgical ranchi", "gastroenterologist ranchi"],
    metaTitle: "Hemorrhoids Treatment Ranchi | Non-Surgical | Dr. Akhilesh Yadav",
    metaDescription: "Non-surgical hemorrhoid treatment in Ranchi — Rubber Band Ligation & sclerotherapy by Dr. Akhilesh Yadav at Orchid Medical Centre. No admission needed.",
    sections: [
      {
        heading: "Bawaseer Mein Surgery Ka Darr — Ek Galat Dharna",
        type: "text",
        content: "Ranchi se aaye 48-saal ke Vijay Sinha — Grade 2 internal hemorrhoids ki taqleef 8 mahine se. Unka pehla sawaal tha: 'Operation toh nahi hogi na?' Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre — ne unhe samjhaaya ki Grade 2 mein Rubber Band Ligation (RBL) ek simple OPD procedure hai — koi anesthesia nahi, koi admission nahi, 20-30 minute ka procedure. 6 hafte mein Vijay ki problem resolve ho gayi. Ranchi mein bahut se patients surgery ke darr se doctor nahi jaate — aur problem badh jaati hai. Aaj advanced non-surgical options bahut effective hain.",
      },
      {
        heading: "Hemorrhoids Grade aur Treatment Mapping",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi mein hemorrhoid treatment grade ke hisaab se decide karte hain. Grade 1 (internal, no prolapse): Lifestyle + diet + stool softeners. Fiber badhana, paani peena, strain avoid karna. Grade 2 (prolapse during straining, reduces spontaneously): Rubber Band Ligation (RBL) — most effective OPD procedure. Grade 3 (manual reduction needed): RBL ya Stapler Hemorrhoidopexy (minimally invasive surgery). Grade 4 (permanent prolapse, cannot be reduced): Hemorrhoidectomy — surgical removal. Overall, 75-80% hemorrhoid patients non-surgical treatment se theek ho jaate hain.",
      },
      {
        heading: "Rubber Band Ligation (RBL) — Kya, Kaise, Kitna Effective",
        type: "text",
        content: "RBL Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav karte hain. Procedure: Anoscope (ek chota instrument) se internal hemorrhoid ko dekha jaata hai. Hemorrhoid ke base par ek tight rubber band apply ki jaati hai — blood supply cut hoti hai. 7-10 din mein hemorrhoid shrink hokar apne aap gir jaata hai. Patient ko sirf halki discomfort ya heaviness feel hoti hai ek-do din. No general anesthesia — local ya no anesthesia. OPD procedure — admission nahi chahiye. Effectiveness: 80-85% patients mein significant relief. Ek session mein 1-2 hemorrhoids treat ho sakte hain — multiple sessions 4-6 hafte mein.",
      },
      {
        heading: "Sclerotherapy aur Infrared Coagulation — Aur Bhi Options",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi mein RBL ke alawa yeh bhi karte hain. Sclerotherapy: ek chemical solution inject kiya jaata hai hemorrhoid mein — shrink hota hai. Grade 1-2 mein effective, bleeding control ke liye bhi use hoti hai. Infrared Coagulation (IRC): infrared energy se hemorrhoid tissue destroy hota hai — smaller internal hemorrhoids ke liye. Surgical options (jab zaroor ho): Stapler Hemorrhoidopexy — minimally invasive, kam dard, fast recovery. Open Hemorrhoidectomy — large/external hemorrhoids mein. Dr. Akhilesh Yadav grade aur patient preference ke hisaab se best option suggest karte hain.",
      },
      {
        heading: "Hemorrhoids Wapas Na Aayein — Prevention Plan",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi ke patients ko yeh prevention tips dete hain:",
        list: [
          "Roz 25-30g fiber — isabgol, fruits, vegetables, whole grains",
          "2.5-3 litre paani daily",
          "Toilet mein 5 min se zyada mat baithein, strain mat karein",
          "Squat position (stool under feet) — natural defecation posture",
          "Regular 30 min walk — bowel motility improve hoti hai",
          "NSAIDs avoid karein (aspirin, ibuprofen) — agar blood thinners pe ho toh doctor se poochein",
          "Ranchi mein sattu ka paani, chhachh, papaya — natural fiber sources",
        ],
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Hemorrhoids",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main dekhta hoon ki Grade 2 ke patients 2-3 saal tak wait karte hain aur Grade 4 mein aa jaate hain. RBL ek OPD procedure hai — zyada tar log 30 minute mein wapas ghar chale jaate hain. Jitna jaldi aaein, utna simple treatment.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Apni condition ke liye doctor se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "RBL procedure ke baad kitne din rest chahiye?",
        a: "Zyada tar patients same day wapas jaate hain. 1-2 din light pain ya discomfort ho sakta hai — paracetamol se manage hota hai. Heavy lifting ya strenuous exercise 2-3 din avoid karein. Dr. Akhilesh Yadav Ranchi mein procedure ke baad detailed instructions dete hain.",
      },
      {
        q: "Kya external hemorrhoids bhi RBL se treat hote hain?",
        a: "RBL sirf internal hemorrhoids ke liye hai. External hemorrhoids (bahar ki skin par) mein dardnak RBL nahi ki jaati — unke liye sclerotherapy, excision, ya surgical options consider hoti hai. Dr. Akhilesh Yadav proctoscopy se type confirm karte hain Orchid Medical Centre, Ranchi mein.",
      },
      {
        q: "Pregnancy mein hemorrhoids ka kya karein?",
        a: "Pregnancy mein conservative treatment pehli line hai — fiber, paani, sitz bath (warm water mein baithna), topical creams. Invasive procedures generally delivery ke baad karte hain. Zyada tar cases delivery ke baad improve ho jaate hain. Dr. Akhilesh Yadav safe options guide karenge.",
      },
      {
        q: "Hemorrhoids aur colon cancer mein rectal bleeding alag kaise hoti hai?",
        a: "Hemorrhoid bleeding: bright red, surface par, toilet ke baad — generally painless internal mein. Colon cancer bleeding: dark, stool ke saath mixed, weight loss/change in bowel habit ke saath. Lekin certainty ke liye — 40+ age mein ya symptoms alarming hon toh colonoscopy zaroor karwa lein Dr. Akhilesh Yadav se Ranchi mein.",
      },
    ],
  },

  {
    slug: "pancreatitis-doctor-ranchi",
    titleHi: "Pancreatitis Doctor Ranchi — अग्नाशयशोथ का Specialist | Dr. Akhilesh Yadav",
    titleEn: "Pancreatitis Doctor in Ranchi — Acute & Chronic Treatment | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein pancreatitis (pancreas ki soojan) ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Acute aur chronic pancreatitis ka complete ilaj.",
    excerptEn: "Pancreatitis specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert diagnosis, acute management & chronic pancreatitis care for Jharkhand patients.",
    category: "conditions",
    readTimeMins: 9,
    publishedAt: "August 2026",
    emoji: "🫀",
    tags: ["pancreatitis doctor ranchi", "pancreas specialist ranchi", "acute pancreatitis ranchi", "chronic pancreatitis ranchi", "gastroenterologist ranchi"],
    metaTitle: "Pancreatitis Doctor Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Pancreatitis specialist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre. Acute & chronic pancreatitis treatment for Jharkhand patients.",
    sections: [
      {
        heading: "Ranchi ke Patient ki Kahani — Achanak Severe Dard",
        type: "text",
        content: "Jamshedpur se aaye 44-saal ke Arvind Kumar — unhone raat ko heavy dawat khai aur alcohol piya. Aadhi raat mein upper abdomen mein severe dard shuru hua — peethe mein bhi ja raha tha. Ulti bhi hui. Emergency mein admit kiya gaya. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne evaluate kiya: Acute Pancreatitis (gallstone-induced). 5 din hospital mein IV fluids, pain management, aur monitoring ke baad discharge. Phir elective laparoscopic cholecystectomy. Yeh case Ranchi aur Jharkhand mein ek aam problem hai — pancreatitis ka awareness zaroori hai.",
      },
      {
        heading: "Pancreas Kya Karta Hai — Aur Pancreatitis Kyun Hoti Hai",
        type: "text",
        content: "Pancreas ek important organ hai jo do kaam karta hai: Exocrine function — digestive enzymes (amylase, lipase) banata hai jo food digest karne mein help karte hain. Endocrine function — insulin aur glucagon banata hai (blood sugar regulate). Pancreatitis: jab pancreatic enzymes pancreas ke andar hi activate ho jaate hain aur organ ko khud damage karte hain. Acute Pancreatitis: sudden onset, severe dard — gallstones (60%) aur alcohol (20-30%) main causes. Chronic Pancreatitis: progressive damage — recurrent attacks, abdominal pain, malabsorption, diabetes. Ranchi mein Dr. Akhilesh Yadav dono types treat karte hain.",
      },
      {
        heading: "Pancreatitis ke Symptoms — Emergency vs Chronic",
        type: "list",
        content: "Acute Pancreatitis — emergency symptoms (turant hospital):",
        list: [
          "Severe upper abdominal pain — often peethe (back) mein bhi jaata hai",
          "Nausea aur vomiting",
          "Abdominal tenderness — chhuone par dard",
          "Fever",
          "Accelerated heart rate",
          "Chronic Pancreatitis: recurrent dard, fatty stools (steatorrhea), weight loss, diabetes",
          "Jaundice (agar bile duct involved ho)",
        ],
      },
      {
        heading: "Diagnosis — Dr. Akhilesh Yadav ka Systematic Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi mein pancreatitis diagnosis mein karte hain: Blood tests: Serum amylase aur lipase (3x normal se zyada — acute pancreatitis confirm). CBC, LFT, RFT, blood sugar. Imaging: CT scan abdomen (severity assess karna, complications dekhna). MRCP (Magnetic Resonance Cholangiopancreatography) — bile duct aur pancreatic duct ke liye superior imaging, koi radiation nahi. Ultrasound — gallstones detect karne ke liye. EUS (Endoscopic Ultrasound) — detailed pancreatic assessment ke liye. Orchid Medical Centre Ranchi mein ERCP bhi available hai — complicated bile duct stones ke liye.",
      },
      {
        heading: "Pancreatitis ka Ilaj — Acute se Chronic Tak",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke patients ko explain karte hain: Acute Pancreatitis: Main treatment — aggressive IV hydration (fluids), pain management (IV analgesics), bowel rest initially, gradual oral refeeding (low-fat diet se shuru). Antibiotics sirf infected necrosis mein. Gallstone pancreatitis mein cholecystectomy (gallbladder removal) prevent karta hai recurrence. ERCP — agar bile duct mein stone fansa ho. Chronic Pancreatitis: Pain management (analgesics, nerve blocks, EUS-guided celiac plexus block). Pancreatic enzyme supplementation (malabsorption ke liye). Diabetes management. Alcohol completely band — recurrence rokne ka ek zaroori step. Surgery (rare cases mein — Frey's procedure, Whipple).",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Pancreatitis",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Pancreatitis mein alcohol bandh karna mandatory hai — yeh sirf advice nahi, yeh treatment ka hissa hai. Ranchi mein main dekhta hoon ki chronic pancreatitis ke patients alcohol nahi chodte aur repeated admissions hote hain. Ek severe episode life-threatening ho sakta hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Pancreatitis emergency hoti hai — hospital zaroor jaayein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kya pancreatitis se pancreatic cancer hota hai?",
        a: "Chronic pancreatitis long-term mein pancreatic cancer ka risk thoda badhata hai, lekin yeh common nahi hai. Risk factors mein smoking bhi add hoti hai. Dr. Akhilesh Yadav Ranchi mein chronic pancreatitis patients ka regular surveillance karte hain.",
      },
      {
        q: "Pancreatitis mein kya khaana chahiye?",
        a: "Acute episode mein: pehle NPO (kuch nahi), phir liquid diet, phir low-fat solid diet. Long-term: very low fat diet (20-30g fat per day), alcohol completely avoid, small frequent meals. Ranchi ke local safe foods: plain rice, dal pani, khichdi, boiled vegetables.",
      },
      {
        q: "ERCP kya hoti hai aur kab lagti hai?",
        a: "ERCP (Endoscopic Retrograde Cholangiopancreatography) ek advanced endoscopic procedure hai jisme bile duct mein scope daala jaata hai — stones nikaalte hain, stent daalte hain. Gallstone pancreatitis mein jab bile duct mein stone fansa ho. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav ERCP karte hain.",
      },
      {
        q: "Pancreatitis se diabetes ho sakti hai?",
        a: "Haan — chronic pancreatitis mein progressive beta cell damage se Type 3c Diabetes ho sakti hai. Yeh regular Type 2 diabetes se alag hai — management bhi different hoti hai. Dr. Akhilesh Yadav endocrinologist ke saath coordinate karke treat karte hain.",
      },
      {
        q: "Pancreatitis ke baad gallbladder nikaalna zaroor hai?",
        a: "Gallstone-induced pancreatitis mein haan — same admission ya discharge ke baad jaldi laparoscopic cholecystectomy recommended hai recurrence rokne ke liye. Dr. Akhilesh Yadav Ranchi mein surgical team ke saath coordinate karte hain.",
      },
    ],
  },

  {
    slug: "liver-problem-doctor-ranchi",
    titleHi: "Liver Problem Doctor Ranchi — लीवर रोग के Specialist | Dr. Akhilesh Yadav",
    titleEn: "Liver Problem Doctor in Ranchi — Hepatology Expert | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein liver ki samasya ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre. Fatty liver, hepatitis, cirrhosis, jaundice — complete liver care.",
    excerptEn: "Liver specialist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist & Hepatologist at Orchid Medical Centre. Expert care for fatty liver, hepatitis, cirrhosis & all liver conditions.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🫀",
    tags: ["liver problem doctor ranchi", "liver specialist ranchi", "hepatologist ranchi", "liver disease ranchi", "gastroenterologist ranchi"],
    metaTitle: "Liver Problem Doctor Ranchi | Dr. Akhilesh Yadav Hepatologist",
    metaDescription: "Liver specialist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist & Hepatologist. Fatty liver, hepatitis, cirrhosis & all liver conditions treated at Orchid Medical Centre.",
    sections: [
      {
        heading: "Jab Liver Ki Baat Aati Hai — Ranchi Mein Sahi Doctor Kaun",
        type: "text",
        content: "Bokaro se aaye 52-saal ke Ramesh Prasad ji — routine checkup mein SGPT (liver enzyme) 3x normal tha. Ultra sound mein fatty liver Grade 2. Koi symptoms nahi the. Local doctor ne kaha 'wait karo.' 6 mahine baad SGPT aur badh gaya. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — ne complete liver workup kiya: NASH (Non-Alcoholic SteatoHepatitis) diagnose hua. Structured lifestyle program aur medication se 8 mahine mein liver enzymes normalize ho gaye. Ranchi mein liver diseases common hain — early assessment aur correct specialist kaafi zaroori hai.",
      },
      {
        heading: "Liver Kya Karta Hai — Kyun Itna Important Hai",
        type: "text",
        content: "Liver human body ka sabse bada internal organ hai — 500+ functions karta hai. Key functions: detoxification (blood filter karna), bile production (fat digestion), protein synthesis (albumin, clotting factors), glucose storage (glycogen), vitamin/mineral storage. Jab liver damage hoti hai — yeh sab functions affect hote hain. Ranchi mein Dr. Akhilesh Yadav ke anusaar, common liver conditions hain: Fatty Liver (NAFLD/NASH), Alcoholic Liver Disease, Hepatitis B/C, Liver Cirrhosis, Jaundice, Liver Abscess. Aur har condition ka alag approach chahiye.",
      },
      {
        heading: "Liver Problems ke Symptoms — Kai Baar Quiet Hote Hain",
        type: "list",
        content: "Liver disease ke symptoms:",
        list: [
          "Jaundice (skin/eyes yellow hona) — bilirubin processing fail hone par",
          "Fatigue aur weakness — unexplained",
          "Upper right abdomen mein discomfort ya heaviness",
          "Nausea, appetite loss",
          "Dark urine (chai jaise), pale stools",
          "Ascites (pet mein paani) — advanced liver disease mein",
          "Confusion ya disorientation — Hepatic Encephalopathy (serious sign)",
        ],
      },
      {
        heading: "Liver Tests aur Diagnosis — Dr. Akhilesh Yadav ka Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein liver assessment mein karte hain: Liver Function Tests (LFT): SGPT, SGOT, ALP, GGT, Bilirubin, Albumin, PT-INR. Viral Hepatitis panel: HBsAg, anti-HCV, HBeAg. Imaging: Ultrasound abdomen (first line), CT scan, MRI liver (MRCP). FibroScan — liver stiffness measure karta hai bina biopsy ke — cirrhosis staging ke liye non-invasive tool. Liver Biopsy — agar non-invasive tests unclear hon. ERCP/EUS — bile duct complications mein. Complete workup se correct diagnosis aur treatment plan milta hai.",
      },
      {
        heading: "Liver Ka Ilaj — Condition Ke Hisaab Se",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi mein liver treatment tailored approach se karte hain. Fatty Liver (NAFLD): weight loss (7-10% body weight), exercise, diabetes control — zyada tar cases mein main treatment yahi hai. NASH mein specific medications bhi consider hoti hain. Alcoholic Liver Disease: alcohol complete abstinence — mandatory. Hepatitis B: antiviral therapy (Tenofovir/Entecavir) — lifelong monitoring. Hepatitis C: modern DAA (Direct-Acting Antivirals) se 8-12 hafte mein 95%+ patients mein virus clear hota hai. Cirrhosis: complications manage karna — ascites (diuretics), varices (endoscopic banding), encephalopathy. Liver Transplant evaluation (advanced cases). Liver Abscess: antibiotics aur drainage.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Liver Health",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Liver ki badi khaasiyat hai ki yeh bahut kuch silently sahta hai — jab symptoms aate hain, kabhi kabhi disease advanced hoti hai. Ranchi mein main kehta hoon: routine checkup mein liver tests zaroor karwayein, khaaskar agar diabetes, motaapa, ya alcohol history hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Liver symptoms hone par qualified hepatologist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Fatty liver kya apne aap theek ho sakta hai?",
        a: "Grade 1-2 fatty liver mein lifestyle changes (weight loss, exercise, diet) se liver significantly improve ho sakta hai. Lekin NASH (inflammatory stage) mein active management zaroori hai. Dr. Akhilesh Yadav Ranchi mein FibroScan se fibrosis degree assess karte hain aur accordingly treat karte hain.",
      },
      {
        q: "Liver ke liye konse tests zaroori hain?",
        a: "Basic: LFT (SGPT, SGOT, ALP, bilirubin), HBsAg (Hepatitis B), anti-HCV (Hepatitis C), Ultrasound abdomen. Diabetes ya motaapa hai toh yeh annual tests hone chahiye. Dr. Akhilesh Yadav Ranchi mein complete liver health assessment karte hain.",
      },
      {
        q: "Hepatitis B ya C mein kya khaana chahiye?",
        a: "Koi specific 'hepatitis diet' nahi — healthy balanced diet: fruits, vegetables, whole grains, lean protein. Alcohol bilkul avoid karein. NSAIDs avoid karein. Paracetamol normal dose mein generally safe hai. Dr. Akhilesh Yadav patient-specific guidance dete hain.",
      },
      {
        q: "Liver cirrhosis reversible hai?",
        a: "Early-stage fibrosis reversible hai treatment se (Hepatitis C cure, alcohol abstinence, weight loss). Advanced cirrhosis (scarring) fully reverse nahi hota, lekin progression roka ja sakta hai aur complications manage ho sakte hain. Liver transplant last resort hai. Dr. Akhilesh Yadav Ranchi mein FibroScan se stage assess karte hain.",
      },
      {
        q: "Kya desi nuskhe liver ke liye safe hain?",
        a: "Kuch herbal supplements actually hepatotoxic (liver-damaging) hote hain — kala jeera, certain Ayurvedic combinations. 'Natural' ka matlab always safe nahi. Dr. Akhilesh Yadav Ranchi mein herb-induced liver injury (DILI) ke cases dekhte hain. Kuch bhi lene se pehle doctor se poochein.",
      },
    ],
  },

  {
    slug: "digestive-specialist-ranchi",
    titleHi: "Digestive Specialist Ranchi — पाचन तंत्र के Expert | Dr. Akhilesh Yadav",
    titleEn: "Digestive Specialist in Ranchi — Complete GI Care | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein digestive system ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Har prakar ki paachan samasyaon ka sampurna ilaj.",
    excerptEn: "Top digestive specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert care for all GI conditions — GERD, IBS, IBD, liver, pancreas & more.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🏥",
    tags: ["digestive specialist ranchi", "gastro specialist ranchi", "GI specialist ranchi", "pet ka specialist ranchi", "gastroenterologist ranchi"],
    metaTitle: "Digestive Specialist in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Digestive specialist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre. Expert care for all stomach, intestine & liver conditions.",
    sections: [
      {
        heading: "Digestive Specialist Kyun Alag Hota Hai — General Doctor Se Fark",
        type: "text",
        content: "Ranchi se aaye 38-saal ki Sunita Kumari — 2 saal se pet mein dard, bloating aur weight loss. Kai doctors ne 'stress ka asar' bola. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne structured evaluation ki. Endoscopy aur colonoscopy ne Crohn's Disease (Inflammatory Bowel Disease) diagnose kiya. Sahi treatment se 6 mahine mein quality of life dramatically improve hui. Ek dedicated gastroenterologist ka fayda yeh hai ki woh digestive system ki har pareshani mein specialized expertise rakhte hain — esophagus se rectum tak, liver, pancreas, biliary system sab.",
      },
      {
        heading: "Dr. Akhilesh Yadav — Ranchi ke Digestive Specialist Ka Portfolio",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, HB Road, Ranchi — yeh conditions treat karte hain: Upper GI: GERD (acid reflux), peptic ulcer, H. Pylori infection, esophagitis, swallowing difficulties (dysphagia). Liver & Biliary: Fatty liver (NAFLD/NASH), Hepatitis B/C, liver cirrhosis, jaundice, gallstones, primary biliary cholangitis. Pancreas: acute/chronic pancreatitis, pancreatic cysts. Small Intestine: celiac disease, malabsorption, small intestinal bacterial overgrowth (SIBO). Large Intestine: IBS, IBD (Crohn's, Ulcerative Colitis), colon polyps, diverticulosis. Anorectal: hemorrhoids, anal fissure, fistula. Procedures: Endoscopy, Colonoscopy, ERCP, EUS — sab Orchid Medical Centre, Ranchi mein.",
      },
      {
        heading: "Kab Ek Digestive Specialist Se Milein?",
        type: "list",
        content: "Inme se koi bhi ho toh gastroenterologist se milein:",
        list: [
          "4+ hafte se pet mein dard ya discomfort jo theek nahi ho raha",
          "Rectal bleeding ya kala stool",
          "Unexplained weight loss (>5% body weight bina diet change ke)",
          "Persistent nausea/vomiting",
          "Jaundice (eyes ya skin yellow hona)",
          "Swallowing mein difficulty",
          "Chronic diarrhea ya constipation (3+ mahine)",
          "Abnormal liver tests ya ultrasound findings",
        ],
      },
      {
        heading: "Diagnostic Procedures — Orchid Medical Centre Ranchi Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav ke paas Orchid Medical Centre Ranchi mein advanced diagnostic capabilities hain. Upper GI Endoscopy (OGD Scopy): esophagus, stomach, duodenum dekhna — biopsy, H. Pylori test, bleeding control. Colonoscopy: full colon aur terminal ileum — polyp removal, IBD assessment, cancer screening. ERCP (Endoscopic Retrograde Cholangiopancreatography): bile duct stones, stenting. EUS (Endoscopic Ultrasound): pancreas, bile duct, submucous lesions ki detailed imaging. FibroScan: liver fibrosis non-invasive assessment. In procedures ka combination Ranchi mein sabse accurate GI diagnosis enable karta hai.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Digestive Health",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Digestive system ek complex machine hai — jab koi ek hissa theek nahi kaam karta, toh sab affect hota hai. Ranchi mein main dekh raha hoon ki patients symptoms ignore karte hain ya years tak self-medicate karte hain. Ek baar sahi evaluation — aur zyada tar cases mein treatment straightforward hota hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. GI symptoms ke liye qualified specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Gastroenterologist aur General Physician mein kya fark hai?",
        a: "General physician broad care karta hai — common conditions, referral. Gastroenterologist sirf digestive system mein specialist hai — MBBS + MD + DM (3 saal super-specialization). Dr. Akhilesh Yadav DM Gastroenterology hain — Jharkhand ke top digestive specialists mein hain.",
      },
      {
        q: "Kya Ranchi mein sab GI procedures available hain?",
        a: "Haan — Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav ke paas Endoscopy, Colonoscopy, ERCP, EUS, FibroScan — advanced procedures available hain. Patients ko bade cities jane ki zaroorat nahi hoti routine GI care ke liye.",
      },
      {
        q: "First visit mein kya expect karein?",
        a: "Dr. Akhilesh Yadav detailed history lenge (symptoms, duration, diet, medications). Physical exam hogi. Previous reports review. Phir appropriate tests recommend karenge — blood, imaging, ya endoscopy. Sabse pehle differential diagnosis clear karenge. Pehle visit mein poora plan milta hai.",
      },
      {
        q: "GI problems mein diet ka kitna role hai?",
        a: "Bahut bada — khaas karke IBS, IBD, fatty liver, GERD, constipation mein diet ek important part of treatment hai. Dr. Akhilesh Yadav Ranchi mein condition-specific diet guidance dete hain — generic 'bland diet' nahi, evidence-based recommendations.",
      },
    ],
  },

  {
    slug: "hepatologist-ranchi",
    titleHi: "Hepatologist Ranchi — लीवर के Super-Specialist | Dr. Akhilesh Yadav",
    titleEn: "Hepatologist in Ranchi — Liver Disease Expert | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein hepatologist (liver specialist) kaun hain? Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre. Hepatitis, cirrhosis, fatty liver ka advanced care.",
    excerptEn: "Best hepatologist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert hepatology: hepatitis B/C, liver cirrhosis, fatty liver, NASH & all liver conditions.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🫀",
    tags: ["hepatologist ranchi", "liver specialist ranchi", "hepatitis doctor ranchi", "liver cirrhosis doctor ranchi", "gastroenterologist ranchi"],
    metaTitle: "Hepatologist in Ranchi | Liver Specialist | Dr. Akhilesh Yadav",
    metaDescription: "Best hepatologist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist & Hepatologist at Orchid Medical Centre. Expert liver care for Jharkhand patients.",
    sections: [
      {
        heading: "Ranchi Mein Hepatologist Ki Zaroorat — Ek Real Case",
        type: "text",
        content: "Deoghar se aaye 45-saal ke Suresh Mahto — Hepatitis B positive tha kaafi saalon se. Pehle kisi ne treatment start nahi kiya — bola 'inactive carrier hai.' 3 saal mein SGPT 5x normal ho gaya, liver biopsy mein significant fibrosis mili. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — ne antiviral therapy (Tenofovir) start ki. 1 saal mein viral load undetectable, liver enzymes normal. Ranchi aur Jharkhand mein Hepatitis B prevalence national average se zyada hai — aur ek expert hepatologist ki role bahut critical hai.",
      },
      {
        heading: "Hepatology Kya Hai — Gastroenterology Se Kaise Alag",
        type: "text",
        content: "Hepatology gastroenterology ki sub-specialty hai — specifically liver, gallbladder, bile ducts, aur pancreas ki conditions focus. Ek hepatologist liver disease mein deeper expertise rakhta hai. Dr. Akhilesh Yadav — DM Gastroenterology — hepatology mein specialized interest rakhte hain aur Orchid Medical Centre, Ranchi mein yeh conditions actively treat karte hain: Viral Hepatitis (A, B, C, D, E), Non-Alcoholic Fatty Liver Disease (NAFLD) / NASH, Alcoholic Liver Disease (ALD), Autoimmune Hepatitis, Primary Biliary Cholangitis (PBC), Liver Cirrhosis aur complications, Hepatocellular Carcinoma (liver cancer) surveillance aur early management.",
      },
      {
        heading: "Liver Tests Aur Unka Matlab — Simplified",
        type: "list",
        content: "Common liver tests aur kya dikhate hain:",
        list: [
          "SGPT (ALT): liver cell damage — elevated in hepatitis, NASH, medications",
          "SGOT (AST): liver + muscle damage — ratio matters (AST:ALT >2 alcoholic liver)",
          "ALP / GGT: bile duct-related disease — cholestasis, PBC",
          "Bilirubin (Total/Direct): jaundice ka cause batata hai",
          "Albumin: liver protein synthesis — low in chronic liver disease",
          "PT-INR: clotting — liver function ka sensitive marker",
          "HBsAg / anti-HCV: Hepatitis B / C infection screening",
        ],
      },
      {
        heading: "FibroScan — Biopsy Ke Bina Liver Ki Stage Jaanein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein FibroScan (Transient Elastography) use karte hain — ek non-invasive tool jaise ultrasound, jo liver stiffness measure karta hai aur fibrosis ka degree batata hai. F0-F1: minimal/no fibrosis — lifestyle changes se manage. F2-F3: significant fibrosis — active treatment aur monitoring. F4 (Cirrhosis): advanced scarring — intensive management, complications monitoring, liver transplant evaluation agar zaroor ho. FibroScan se patients ko baar baar biopsy ki zaroorat nahi hoti. Ranchi mein yeh facility Orchid Medical Centre mein available hai.",
      },
      {
        heading: "Hepatitis C — Ab Ilaj Mumkin Hai (95%+ Cure Rate)",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke Hepatitis C patients ko yeh good news dete hain: Modern DAA (Direct-Acting Antivirals) — Sofosbuvir/Velpatasvir combination — 8-12 hafte ki treatment se 95%+ patients mein Hepatitis C virus completely clear hota hai. Sustained Virological Response (SVR) matlab permanent cure. Ab koi painful injections (interferon) nahi. Aur PMGKY (government) scheme mein Hepatitis C medicines subsidized hain India mein. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein yeh treatment karte hain aur proper monitoring ensure karte hain.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Liver Disease",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi aur Jharkhand mein Hepatitis B bahut common hai — aur bahut se log jante hi nahi. Simple blood test se pata chal jaata hai. Agar positive hain, regular monitoring aur sahi time par treatment se liver damage roka ja sakta hai. Aur Hepatitis C ab curable hai — please doctor se milein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Liver conditions ke liye hepatology expert se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Hepatitis B ka koi vaccine hai — kya adult mein bhi lagwa sakte hain?",
        a: "Haan — Hepatitis B vaccine adult mein bhi effective hai. 3 doses (0, 1, 6 mahine). Agar negative hain aur expose hone ka risk hai (healthcare worker, family mein carrier) — zaroor lagwayein. Agar already positive hain, vaccine kaam nahi karta — treatment ki zaroorat hoti hai.",
      },
      {
        q: "Hepatitis C kaise phailta hai?",
        a: "Infected blood ke contact se: contaminated needles/syringes, unsterilized tattoo/piercing equipment, blood transfusion (1992 se pehle), mother se child. Sexual transmission possible lekin less common. Casual contact (khana, haath milana, chumna) se nahi phailta. Dr. Akhilesh Yadav Ranchi mein anti-HCV test recommend karte hain high-risk logon ko.",
      },
      {
        q: "Liver cirrhosis mein kya khana band karein?",
        a: "Alcohol completely — ek bhi drop nahi. Salt restrict karein agar ascites (pet mein paani) ho. High protein diet avoid agar encephalopathy history ho. NSAIDs avoid karein. Dr. Akhilesh Yadav Ranchi mein cirrhosis stage ke hisaab se detailed diet counseling dete hain.",
      },
      {
        q: "Kya liver transplant Ranchi mein available hai?",
        a: "Liver transplant ke liye AIIMS New Delhi, Medanta, Apollo Chennai jaise centers jana padta hai. Lekin Dr. Akhilesh Yadav Ranchi mein pre-transplant evaluation, listing, aur post-transplant follow-up coordinate karte hain Orchid Medical Centre se.",
      },
      {
        q: "Autoimmune hepatitis kya hai?",
        a: "Ek condition jisme body khud apne liver ko attack karti hai — immune system malfunction se. Symptoms: jaundice, fatigue, joint pain. Blood test mein specific autoantibodies (ANA, ASMA, LKM1) milte hain. Treatment: immunosuppressants (steroids). Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein yeh diagnose aur treat karte hain.",
      },
    ],
  },

  // ── BATCH 4: BLOGS 16–20 ─────────────────────────────────────────────────────

  {
    slug: "endoscopy-cost-ranchi",
    titleHi: "Endoscopy Cost Ranchi — OGD Scopy Kharcha | Dr. Akhilesh Yadav",
    titleEn: "Endoscopy Cost in Ranchi — OGD Scopy Price & What to Expect | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein endoscopy (OGD Scopy) ka kharcha kitna hai? Dr. Akhilesh Yadav — Orchid Medical Centre — mein affordable endoscopy aur complete procedure guide.",
    excerptEn: "Endoscopy cost in Ranchi at Orchid Medical Centre. OGD scopy price, preparation, what to expect, and why Dr. Akhilesh Yadav is Ranchi's trusted endoscopist.",
    category: "procedures",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🔭",
    tags: ["endoscopy cost ranchi", "OGD scopy ranchi", "endoscopy price ranchi", "gastroenterologist ranchi", "endoscopy clinic ranchi"],
    metaTitle: "Endoscopy Cost in Ranchi | OGD Scopy | Dr. Akhilesh Yadav",
    metaDescription: "Endoscopy (OGD Scopy) cost in Ranchi at Orchid Medical Centre. Affordable pricing, sedation available, expert gastroenterologist Dr. Akhilesh Yadav.",
    sections: [
      {
        heading: "Endoscopy Se Kyun Darte Hain — Aur Kyun Nahi Darna Chahiye",
        type: "text",
        content: "Ranchi se aaye 39-saal ke Deepak Kumar — doctor ne endoscopy recommend ki thi chronic acidity ke liye. Unka pehla sawaal: 'Kharcha kitna hoga? Dard toh nahi hoga na?' Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — ne unhe bataya: procedure sedation mein hoti hai (anesthesia jaise neend aa jaati hai), dard nahi hota, aur Ranchi mein cost reasonable hai. Deepak ki endoscopy mein Barrett's Esophagus (pre-cancerous condition) early stage mein detect hua — jo treatment se control ho gaya. Sahi time par endoscopy life-changing hoti hai.",
      },
      {
        heading: "Endoscopy (OGD Scopy) Kya Hoti Hai?",
        type: "text",
        content: "Upper GI Endoscopy ya OGD Scopy (OesophagoGastroDuodenoscopy) — ek thin, flexible camera tube (endoscope) jo mooh se daali jaati hai aur esophagus (food pipe), stomach, aur duodenum (first part of small intestine) ko examine karti hai. Kya dekha ja sakta hai: ulcers, inflammation, bleeding, tumors, strictures, H. Pylori. Kya kiya ja sakta hai: biopsy (tissue sample), H. Pylori test, bleeding control, polyp removal, esophageal dilation. Ranchi mein Dr. Akhilesh Yadav Orchid Medical Centre mein high-definition endoscopy karte hain — best imaging clarity ke saath.",
      },
      {
        heading: "Endoscopy Kab Zaroor Hai?",
        type: "list",
        content: "In situations mein endoscopy zaroori hai:",
        list: [
          "4+ hafte se persistent acidity ya GERD jo medications se theek nahi ho rahi",
          "Swallowing mein difficulty (dysphagia)",
          "Ulti mein blood ya dark brown material (coffee grounds)",
          "Kala tarry stool (upper GI bleeding sign)",
          "Unexplained weight loss",
          "Upper abdominal pain — H. Pylori ya ulcer rule out karne ke liye",
          "Age 45+ mein naya onset dyspepsia (indigestion)",
        ],
      },
      {
        heading: "Endoscopy Cost Ranchi — Orchid Medical Centre",
        type: "text",
        content: "Orchid Medical Centre, Ranchi mein endoscopy ki cost Jharkhand ke government aur private hospitals ke comparable hai. Basic OGD Scopy (diagnostic): budget-friendly — sedation included. Biopsy additional charge (agar tissue sample lena ho). H. Pylori Rapid Urease Test: additional. Sedation (IV medication): patient zyada comfortable rehte hain — recommended. Insurance: zyada tar health insurance plans mein endoscopy covered hoti hai — apni policy check karein. Exact current pricing ke liye: +91 74919 25047 ya WhatsApp pe poochein — transparent billing, koi hidden charges nahi.",
      },
      {
        heading: "Endoscopy Preparation aur Recovery — Step by Step",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein patients ko detailed preparation instructions dete hain. Pehle din raat tak: normal dinner le sakte hain. Procedure se 6-8 ghante pehle: kuch nahi khaana peena (NPO — nil per oral). Kuch specific medications continue rakhein — doctor se confirm karein. Procedure ke din: Orchid Medical Centre pahuncho, IV line lagegi. Sedation diya jayega — aap neend mein hoge (conscious sedation — poori anesthesia nahi). Procedure: 15-20 minute. Recovery: 30-60 minute baad discharge. Driving khud mat karein us din — kisi ke saath aayen. Report: day end tak mil jaati hai Orchid Medical Centre mein.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Endoscopy",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main roz 8-10 endoscopies karta hoon. Zyada tar patients procedurse ke baad kehte hain: yeh toh kitna aasaan tha! Darr se zyada imagination mein hota hai. Aur jo conditions hum early mein detect karte hain — ulcer, Barrett's, early cancer — unka treatment bahut aasaan hota hai early stage mein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Endoscopy ki zaroorat ke liye doctor se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Endoscopy kitna dardnak hota hai?",
        a: "Sedation ke saath generally dard nahi hota — mild discomfort ya bloating feel ho sakti hai. Bina sedation ke gag reflex hota hai jo uncomfortable hai. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein sedation ke saath endoscopy karte hain for maximum comfort.",
      },
      {
        q: "Endoscopy kitne time mein hoti hai?",
        a: "Diagnostic OGD Scopy: 15-20 minute. Agar therapeutic procedure (biopsy, polyp removal, bleeding control) ho toh 30-45 minute. Total time Orchid Medical Centre mein (registration se discharge tak): 2-3 ghante.",
      },
      {
        q: "Kya endoscopy safe hai?",
        a: "Haan — endoscopy bahut safe procedure hai. Complications rare hain (<0.1% major complications). Minor: sore throat, bloating. Sedation reactions bahut rare. Dr. Akhilesh Yadav DM Gastroenterology hain — extensive endoscopy training ke saath.",
      },
      {
        q: "Endoscopy report kitne din mein milti hai?",
        a: "Orchid Medical Centre, Ranchi mein: endoscopy report same day ya next day milti hai. Biopsy report: 5-7 din (pathology lab processing time). Dr. Akhilesh Yadav results explain karte hain aur next steps discuss karte hain.",
      },
      {
        q: "Kya endoscopy mein anesthesia hoti hai?",
        a: "Full anesthesia nahi — Conscious Sedation (IV midazolam/propofol) diya jaata hai. Aap neend mein hoge lekin breathe normally karte rahenge. Anesthesiologist ki zaroorat nahi hoti routine cases mein. Orchid Medical Centre mein yeh safely manage hota hai.",
      },
    ],
  },

  {
    slug: "colonoscopy-cost-ranchi",
    titleHi: "Colonoscopy Cost Ranchi — Kharcha, Preparation aur Doctor | Dr. Akhilesh Yadav",
    titleEn: "Colonoscopy Cost in Ranchi — Price, Preparation & Expert Care | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein colonoscopy ka kharcha kitna hai? Dr. Akhilesh Yadav — Orchid Medical Centre — mein affordable colonoscopy, complete preparation guide aur expert colonoscopist.",
    excerptEn: "Colonoscopy cost in Ranchi at Orchid Medical Centre. Affordable pricing, full preparation guide & expert colonoscopy by Dr. Akhilesh Yadav, DM Gastroenterologist.",
    category: "procedures",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🏥",
    tags: ["colonoscopy cost ranchi", "colonoscopy price ranchi", "colonoscopy preparation ranchi", "colon cancer screening ranchi", "gastroenterologist ranchi"],
    metaTitle: "Colonoscopy Cost in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Colonoscopy cost & preparation in Ranchi at Orchid Medical Centre. Affordable colonoscopy with sedation by expert DM Gastroenterologist Dr. Akhilesh Yadav.",
    sections: [
      {
        heading: "Colonoscopy Ka Darr — Aur Ek Real Case Jo Zindagi Bachaa Gaya",
        type: "text",
        content: "Dhanbad se aaye 60-saal ke Ramchandra Prasad ji — unhe koi symptoms nahi the, lekin beti ne 'baba, umra ho gayi, ek baar scope karwa lo' bola. Orchid Medical Centre Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne colonoscopy ki. Mila: 3 polyps (ek 2.5cm large adenoma). Same sitting mein sab remove kar diye. Biopsy mein high-grade dysplasia — agar 2 saal aur ruk jaate, cancer ho sakta tha. Colonoscopy mein 'dard hoga' ki wajah se logon ki bahut baar procrastination hoti hai — lekin yeh procedure sedation mein hoti hai aur zyada tar patients ke liye manageable hai.",
      },
      {
        heading: "Colonoscopy Kya Hai — Endoscopy Se Kaise Alag",
        type: "text",
        content: "Colonoscopy mein ek flexible camera tube (colonoscope) anus se daali jaati hai aur poore colon (large intestine) ko — ileocecal junction (small-large intestine junction) tak — examine kiya jaata hai. Kya dekha ja sakta hai: polyps, colon cancer, IBD (Crohn's/Colitis), diverticulosis, bleeding source. Kya kiya ja sakta hai: polyp removal (polypectomy), biopsy, bleeding control. Endoscopy vs Colonoscopy: Endoscopy (OGD) — upper GI (esophagus-stomach-duodenum). Colonoscopy — lower GI (large intestine). Dono Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav karte hain.",
      },
      {
        heading: "Colonoscopy Cost Ranchi — Transparent Pricing",
        type: "text",
        content: "Orchid Medical Centre, Ranchi mein colonoscopy ki cost Jharkhand state ke best value mein hai. Diagnostic Colonoscopy (bina polyp removal): standard charge — sedation included. Colonoscopy + Polypectomy (polyp removal): additional charge per polyp depending on size/technique. Biopsy: additional. Sedation (IV): recommended for comfort — included in package. Insurance: most major health insurance plans mein colonoscopy covered hoti hai (especially cancer screening ke context mein). Cashless facility: available for select insurers. Exact pricing ke liye: +91 74919 25047 ya WhatsApp. Transparent billing — koi surprise charge nahi.",
      },
      {
        heading: "Colonoscopy Preparation — Ranchi ke Patients Ke Liye Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein colonoscopy preparation written instructions dete hain. 2 din pehle se: high-fiber foods avoid karein (seeds, nuts, whole grains). 1 din pehle: Clear liquid diet sirf — paani, coconut water, clear soup, nimbu paani (bina pulp), black tea/coffee (bina milk). Red/purple colored drinks avoid karein (colon lining se confuse ho sakti hai blood ke saath). Shyam ko: Bowel Preparation Solution (PEG — polyethylene glycol) peena hota hai — 2-4 litre, split dose. Pehle half raat ko, doosra half procedure se 4-6 ghante pehle (subah sujha dosage ke hisaab se). Raat mein 'gas aur loose motions' hogi — yeh normal hai, matlab preparation ho rahi hai. Procedure ke din: NPO (kuch mat peeyein) prescribed time se. Iron supplements ek hafte pehle bandh karein (daagtey hain colon mein).",
      },
      {
        heading: "Colonoscopy Recovery — Kya Expect Karein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein post-colonoscopy care mein batate hain: Sedation se 1-2 ghante mein recover hote hain. Bloating/gas feel ho sakta hai — normal, toot jaata hai thodi der mein. Agar polypectomy hui hai: bland diet 24-48 ghante, heavy exercise avoid. Minor rectal bleeding (speck of blood) ek-do din tak: normal agar polypectomy hui. Alarming signs (doctor ko call karein): significant rectal bleeding, severe abdominal pain, fever. Driving: us din nahi — kisi ke saath aayen. Next day se generally normal activities.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Colonoscopy",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main colonoscopy ke baad patients se poochta hoon — kaisa laga? 90% log kehte hain: preparation se zyada darta tha, procedure toh neend mein hi ho gayi. Bowel prep uncomfortable hota hai, lekin woh ek raat ki baat hai. Colon cancer jo hum rokate hain — woh zindagi bhar ka fayda hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Colonoscopy ki zaroorat ke liye doctor se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Colonoscopy kitne ghante ki hoti hai?",
        a: "Procedure khud: 30-45 minute (diagnostic). Polyp removal ho toh 60-90 minute. Total Orchid Medical Centre mein: arrival se discharge tak 3-4 ghante — preparation, sedation recovery include karke. Dr. Akhilesh Yadav Ranchi mein efficient aur thorough colonoscopy karte hain.",
      },
      {
        q: "Bowel prep kitna mushkil hai?",
        a: "PEG solution peena aur frequent loose motions — uncomfortable hota hai, lekin manageable. Chilled karein solution ko — easier hota hai. Lemon flavor available hai kuch brands mein. Dr. Akhilesh Yadav Ranchi mein alternative split-dose schedule bhi discuss karte hain.",
      },
      {
        q: "Colonoscopy mein anesthesia hoti hai kya?",
        a: "Full general anesthesia nahi — Conscious Sedation (IV medication) diya jaata hai. Aap deeply relaxed ya neend mein hoge. Anesthesiologist nahi chahiye routine cases mein. Orchid Medical Centre Ranchi mein yeh safely manage hota hai.",
      },
      {
        q: "Agar polyp mile toh kya hoga?",
        a: "Same colonoscopy ke dauran remove kar diya jaata hai (polypectomy) — zyada tar cases mein. Biopsy pathology lab mein jaati hai — 5-7 din mein result. Polyp size aur type ke hisaab se next colonoscopy ka schedule Dr. Akhilesh Yadav decide karte hain.",
      },
      {
        q: "Kya colonoscopy se pehle koi test hota hai?",
        a: "Blood tests: CBC, coagulation profile (PT-INR) — agar anticoagulants par ho. Diabetes control check. Blood thinners (warfarin, aspirin, clopidogrel) — Dr. Akhilesh Yadav batayenge kab bandh karni hain. Hypertension/cardiac medicines: generally continue.",
      },
    ],
  },

  {
    slug: "eus-ranchi",
    titleHi: "EUS (Endoscopic Ultrasound) Ranchi — Dr. Akhilesh Yadav | Orchid Medical Centre",
    titleEn: "EUS (Endoscopic Ultrasound) in Ranchi — Advanced GI Diagnosis | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein EUS (Endoscopic Ultrasound) — advanced GI diagnostic procedure — Dr. Akhilesh Yadav karte hain Orchid Medical Centre mein. Pancreas, bile duct, submucosal lesions.",
    excerptEn: "EUS (Endoscopic Ultrasound) in Ranchi by Dr. Akhilesh Yadav at Orchid Medical Centre. Advanced diagnosis for pancreas, bile duct stones, submucosal tumors & more.",
    category: "procedures",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🔬",
    tags: ["EUS ranchi", "endoscopic ultrasound ranchi", "pancreas test ranchi", "advanced endoscopy ranchi", "gastroenterologist ranchi"],
    metaTitle: "EUS Endoscopic Ultrasound Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "EUS (Endoscopic Ultrasound) in Ranchi by Dr. Akhilesh Yadav at Orchid Medical Centre. Advanced pancreas, bile duct & GI tumour assessment. Expert care.",
    sections: [
      {
        heading: "Jab Normal Tests Jawab Nahi Dete — EUS Ka Role",
        type: "text",
        content: "Bokaro se aaye 50-saal ke Sunil Tiwari — recurrent upper abdominal pain, CT scan normal, MRCP inconclusive. Orchid Medical Centre Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne EUS (Endoscopic Ultrasound) ki. Result: small common bile duct stone detect hua jo CT scan mein miss ho gaya tha. ERCP se same visit mein stone nikaal diya. Yeh case EUS ki power dikhata hai — jab conventional imaging enough nahi hoti. EUS Ranchi mein available hai Orchid Medical Centre mein.",
      },
      {
        heading: "EUS Kya Hai — Aur Normal Ultrasound Se Kaise Alag",
        type: "text",
        content: "EUS (Endoscopic Ultrasound) mein endoscope ke tip par ek ultrasound probe hoti hai. Yeh probe GI tract ke andar se adjacent organs ko image karta hai — bahar se skin ke through nahi. Isliye: Resolution bahut zyada hoti hai — 1mm tak structures clearly dikhte hain. Pancreas, bile duct, gallbladder, stomach wall layers, mediastinal lymph nodes — sab clearly assess hota hai. Normal ultrasound limitation: bowel gas interfere karta hai — pancreas aur bile duct clear nahi dikhte. EUS limitation: nahi. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav EUS karte hain — Jharkhand ke limited centers mein yeh available hai.",
      },
      {
        heading: "EUS Kab Lagti Hai?",
        type: "list",
        content: "EUS in conditions mein recommend ki jaati hai:",
        list: [
          "Bile duct stones — MRCP ya CT mein nahi dikh rahe lekin suspicion hai",
          "Pancreatic masses — cyst, tumor — CT ke baad characterization",
          "Chronic pancreatitis — detailed pancreatic duct assessment",
          "Submucosal GI tumors (GIST, carcinoid) — layer-by-layer imaging",
          "Esophageal/gastric cancer staging — T aur N staging",
          "Gallbladder polyps — malignancy risk assessment",
          "EUS-guided biopsy (FNA/FNB) — pancreas ya lymph node se tissue sample",
        ],
      },
      {
        heading: "EUS-Guided FNA/FNB — Bina Surgery Ke Tissue Diagnosis",
        type: "text",
        content: "EUS ka ek powerful application hai EUS-guided Fine Needle Aspiration (FNA) ya Fine Needle Biopsy (FNB). Pancreatic mass ya lymph node mein EUS se needle daali jaati hai (ultrasound guidance mein) aur tissue sample liya jaata hai — biopsy ke liye. Yeh avoid karta hai: separate surgical biopsy, CT-guided biopsy. Accuracy: 85-95% diagnostic yield. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein yeh procedure karte hain — Jharkhand ke patients ko bade cities nahi jaana padta is advanced procedure ke liye.",
      },
      {
        heading: "EUS Preparation aur Procedure — Ranchi Mein",
        type: "text",
        content: "EUS preparation similar to endoscopy: NPO 6-8 ghante. Procedure sedation mein hoti hai — generally comfortable. Upper EUS (pancreas/bile duct/stomach): scope mooh se — 45-60 minute. Rectal EUS (rectal cancer staging): scope anus se — 20-30 minute. Recovery: 1-2 ghante baad discharge. Results discuss: Dr. Akhilesh Yadav same day ya next visit mein imaging report explain karte hain. FNA/FNB biopsy report: 5-7 din pathology se. Cost inquiry ke liye: +91 74919 25047 ya WhatsApp.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — EUS",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'EUS ek baar mein woh information deta hai jo multiple tests se bhi nahi milti. Pancreatic cyst hai jo benign dikhti hai — EUS FNA se tissue leke confirm karte hain. Ranchi ke patients ke liye yeh ek big advantage hai ki yeh facility locally available hai — Patna ya Delhi nahi jaana padta.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Advanced GI procedures ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "EUS aur ERCP mein kya fark hai?",
        a: "EUS diagnostic hai — organs dekhna, biopsy lena. ERCP therapeutic hai — bile duct mein directly work karna (stones nikalna, stent daalna). Often dono saath ya ek ke baad doosra kiya jaata hai. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein dono karte hain.",
      },
      {
        q: "Kya EUS safe hai?",
        a: "Haan — regular endoscopy jitni safe. Complications rare (<0.5%). FNA ke saath: pancreatitis ka slight risk (<2%), infection (<1%). Overall risk-benefit ratio bahut favorable hai accurate diagnosis ke liye.",
      },
      {
        q: "EUS mein dard hota hai?",
        a: "Sedation ke saath nahi. Procedure ke dauran aap comfortably neend mein hoge. Baad mein mild bloating ya sore throat ho sakta hai — 1-2 din mein theek ho jaata hai.",
      },
      {
        q: "Pancreatic cyst ke liye EUS kab zaroor hai?",
        a: "Agar CT/MRI mein pancreatic cyst mile — size >1cm, main duct connect, mural nodule, solid component — toh EUS with FNA recommend hai characterization ke liye. Dr. Akhilesh Yadav Ranchi mein worrisome cysts ko surgery ke liye refer aur benign ones ko monitor karte hain.",
      },
    ],
  },

  {
    slug: "liver-biopsy-ranchi",
    titleHi: "Liver Biopsy Ranchi — Procedure, Cost aur Kab Zaroori Hai | Dr. Akhilesh Yadav",
    titleEn: "Liver Biopsy in Ranchi — Procedure, Cost & When Needed | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein liver biopsy kab zaroor hai aur kaise hoti hai? Dr. Akhilesh Yadav — Orchid Medical Centre — mein liver biopsy ki poori guide aur FibroScan alternative.",
    excerptEn: "Liver biopsy in Ranchi — when it's needed, how it's done, and FibroScan alternatives. Expert hepatology by Dr. Akhilesh Yadav at Orchid Medical Centre.",
    category: "procedures",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🫀",
    tags: ["liver biopsy ranchi", "liver test ranchi", "FibroScan ranchi", "hepatologist ranchi", "liver disease ranchi"],
    metaTitle: "Liver Biopsy in Ranchi | FibroScan | Dr. Akhilesh Yadav",
    metaDescription: "Liver biopsy in Ranchi by Dr. Akhilesh Yadav at Orchid Medical Centre. Know when biopsy vs FibroScan is recommended. Expert hepatology care for Jharkhand.",
    sections: [
      {
        heading: "Liver Biopsy — Kyun Zaroorat Hoti Hai?",
        type: "text",
        content: "Hazaribagh se aaye 41-saal ki Meena Devi — elevated liver enzymes 1 saal se, HBsAg negative, alcohol nahi — cause unclear. FibroScan mein F2 fibrosis suggest hua. Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology, Orchid Medical Centre Ranchi — ne liver biopsy recommend ki cause confirm karne ke liye. Biopsy result: Autoimmune Hepatitis. Correct diagnosis se sahi treatment start hua — steroids aur immunosuppressants. 6 mahine mein enzymes normal. Liver biopsy ek invasive procedure hai, lekin kuch cases mein diagnosis ki gold standard hai.",
      },
      {
        heading: "Liver Biopsy Kab Zaroor Hoti Hai?",
        type: "list",
        content: "Liver biopsy in situations mein recommend hoti hai:",
        list: [
          "Unknown cause ka liver disease — non-invasive tests se clear nahi hua",
          "Autoimmune Hepatitis diagnosis aur activity grading",
          "NASH vs simple fatty liver — grade aur stage determine karna",
          "Primary Biliary Cholangitis (PBC) ya Primary Sclerosing Cholangitis (PSC)",
          "Drug-induced liver injury (DILI) — confirmation",
          "Liver mass — FNA (fine needle aspiration) se diagnosis",
          "Agar FibroScan result inconclusive ho ya body habitus (obesity/ascites) limit kare",
        ],
      },
      {
        heading: "FibroScan vs Liver Biopsy — Pehle FibroScan Try Karein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein FibroScan ko prefer karte hain jab bhi possible. FibroScan: 10 minute ka non-invasive test — ultrasound jaise. Liver stiffness measure karta hai — fibrosis estimate. F0-F1 (minimal), F2-F3 (significant), F4 (cirrhosis). No sedation, no risk. Accuracy: 85-90% fibrosis staging ke liye. Liver Biopsy: invasive, 10-15% discomfort/pain risk, rare complications. Lekin: tissue directly dekhte hain — exact cause, grade, stage. When FibroScan is used: routine staging of Hepatitis B/C/NAFLD. When biopsy needed: unclear diagnosis, autoimmune, specific cause confirmation.",
      },
      {
        heading: "Liver Biopsy Procedure — Orchid Medical Centre Ranchi Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein ultrasound-guided liver biopsy karte hain — safer aur more accurate. Preparation: blood tests (PT-INR, platelet count), blood group. Blood thinners bandh karna (doctor advise karega). NPO 4-6 ghante. Procedure: local anesthesia + mild sedation. Ultrasound guidance se needle target location par daali jaati hai. Tissue sample (needle core) liya jaata hai — 15-20 mm piece. Duration: 20-30 minute. Post-biopsy: 2-4 ghante observation (blood pressure monitoring, pain check). Discharge same day zyada tar. Pain: mild to moderate upper right abdomen — analgesics se manage. Biopsy report: 5-7 din pathology se.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Liver Biopsy",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Liver biopsy se patients darte hain — lekin aaj FibroScan se bahut kam cases mein biopsy lagti hai. Jab biopsy zaroor ho — ultrasound guidance se bahut safe ho gayi hai. Sahi diagnosis ke liye correct procedure choose karna zaroori hai — FibroScan pehle, biopsy sirf jab zaroor.'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Liver procedures ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Liver biopsy mein bahut dard hota hai?",
        a: "Local anesthesia diya jaata hai — needle insertion par chubhan ya pressure feel hota hai. Procedure ke baad 4-6 ghante tak dull aching pain right side mein — paracetamol se manage. Serious pain (<5% cases) mein doctor ko immediately batayein. Dr. Akhilesh Yadav Ranchi mein sedation bhi consider karte hain anxious patients ke liye.",
      },
      {
        q: "Liver biopsy ke complications kya hain?",
        a: "Pain (most common, 20-30%). Bleeding (significant: <1%). Bile peritonitis (<0.1%). Organ puncture (<0.1%). Overall serious complication rate bahut low hai, khaas karke ultrasound guidance ke saath. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein post-biopsy 2-4 ghante monitor karte hain.",
      },
      {
        q: "FibroScan kab fail hoti hai?",
        a: "FibroScan ki accuracy kam hoti hai agar: morbid obesity (BMI >35), ascites (pet mein paani), narrow intercostal spaces. In cases mein liver biopsy alternative hai. Dr. Akhilesh Yadav assess karke decide karte hain Ranchi mein.",
      },
      {
        q: "Kya liver biopsy se cancer phailta hai?",
        a: "Yeh ek common misconception hai. Modern ultrasound-guided biopsy mein needle tract seeding (cancer spreading along needle path) extremely rare (<0.01%) hai. Risk-benefit ratio ke liye — diagnosis clear karne ka fayda zyada hota hai.",
      },
    ],
  },

  {
    slug: "colon-polyp-removal-ranchi",
    titleHi: "Colon Polyp Removal Ranchi — Colonoscopic Polypectomy | Dr. Akhilesh Yadav",
    titleEn: "Colon Polyp Removal in Ranchi — Polypectomy | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein colon polyp removal (colonoscopic polypectomy) — Dr. Akhilesh Yadav — Orchid Medical Centre mein. Cancer hone se pehle polyp removal kaise cancer rokti hai — guide.",
    excerptEn: "Colon polyp removal (polypectomy) in Ranchi by Dr. Akhilesh Yadav at Orchid Medical Centre. Cancer prevention through colonoscopy — how it works, risks & recovery.",
    category: "procedures",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🏥",
    tags: ["colon polyp removal ranchi", "polypectomy ranchi", "colonoscopy polyp ranchi", "colon cancer prevention ranchi", "gastroenterologist ranchi"],
    metaTitle: "Colon Polyp Removal Ranchi | Polypectomy | Dr. Akhilesh Yadav",
    metaDescription: "Colon polyp removal (polypectomy) in Ranchi by Dr. Akhilesh Yadav at Orchid Medical Centre. Cancer prevention colonoscopy — what to expect & follow-up care.",
    sections: [
      {
        heading: "Polyp Jo Cancer Nahi Bana — Ek Success Story",
        type: "text",
        content: "Ranchi se hi 54-saal ke Jagdish Prasad ji — routine colonoscopy cancer screening ke liye aaye (unke bade bhai ko colon cancer tha). Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre — ne 3 polyps find kiye: ek 12mm, ek 6mm, ek 4mm. Teeno same session mein remove kar diye — biopsy mein 12mm polyp tubular adenoma with low-grade dysplasia (pre-cancerous). Jagdish ji cancer se bache — sirf ek colonoscopy ki wajah se. Colon polyp removal (polypectomy) cancer prevention ka sabse effective tool hai.",
      },
      {
        heading: "Colon Polyp Kya Hai — Aur Kab Khatra Banta Hai?",
        type: "text",
        content: "Colon Polyp — large intestine (colon) ki lining mein ek abnormal growth hai. Zyada tar polyps benign (harmless) hote hain, lekin kuch types cancer mein badal sakte hain. Types: Hyperplastic Polyps — generally benign, cancer risk nahi. Adenomatous Polyps (Adenomas) — pre-cancerous. Tubular, villous, tubulovillous. Size matters: <1cm: low risk. 1-2cm: moderate. >2cm: high risk. High-grade dysplasia mein — cancer very close hai. Ranchi mein Dr. Akhilesh Yadav ke anusaar, colonoscopy mein milne wale 70-80% polyps adenomas hote hain jinhe timely remove karna cancer rokta hai.",
      },
      {
        heading: "Polypectomy Kaise Hoti Hai — Orchid Medical Centre Ranchi Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav colonoscopy ke dauran hi polyp remove karte hain — same procedure, koi alag surgery nahi. Techniques: Cold Snare Polypectomy: small polyps (<1cm) ke liye — snare (loop) se cut kar dete hain, no electricity, minimal risk. Hot Snare Polypectomy (EMR — Endoscopic Mucosal Resection): larger polyps ke liye — electrocautery use hoti hai. EMR (Endoscopic Mucosal Resection): flat/sessile large polyps ke liye — saline lift karke remove. ESD (Endoscopic Submucosal Dissection): very large flat polyps, early mucosal cancer — highly skilled procedure. Removed tissue biopsy ke liye lab jaati hai. Results 5-7 din mein.",
      },
      {
        heading: "Polypectomy ke Baad — Kya Expect Karein aur Follow-up",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein post-polypectomy care mein batate hain: Diet: bland soft diet 24-48 ghante (khaas karke large polyp removal ke baad). Strenuous activity 1 week avoid. Blood thinners: doctor se confirm karein kab start karein. Minor rectal bleeding (1-2 din) — normal. Alarming (emergency): significant rectal bleeding (large clots), severe abdominal pain, fever — hospital aayein immediately. Follow-up Colonoscopy: Polyp type aur size ke hisaab se schedule karta hai Dr. Akhilesh Yadav. Low-risk adenoma (<1cm, 1-2 polyps): 5-10 saal. High-risk adenoma (large, multiple, villous): 1-3 saal mein repeat.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Polyp Removal",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Colon polyp removal sabse underrated cancer prevention procedure hai. Koi dawa nahi — sirf ek colonoscopy. Polyp nikalte hain, cancer prevent hota hai. Ranchi mein main yeh message patients tak pahunchana chahta hoon: 45+ age hai, ek baar colonoscopy zaroor karwa lein — chahe koi symptoms na hon.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Colon cancer screening ke liye gastroenterologist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Polypectomy mein dard hota hai?",
        a: "Sedation ke saath nahi — aap neend mein hoge. Baad mein mild cramping ya discomfort ho sakti hai — paracetamol se manage. Large polyp removal ke baad thodi zyada discomfort ho sakti hai. Dr. Akhilesh Yadav Ranchi mein post-procedure pain management clearly guide karte hain.",
      },
      {
        q: "Kya polyp wapas aa sakta hai?",
        a: "Completely removed polyp wapas nahi aata. Lekin naaye polyps colon mein develop ho sakte hain — isliye follow-up colonoscopy schedule zaroori hai. High-risk adenoma mein 1-3 saal mein, low-risk mein 5-10 saal mein Dr. Akhilesh Yadav repeat colonoscopy schedule karte hain.",
      },
      {
        q: "Agar biopsy mein cancer aaya toh?",
        a: "Early mucosal cancer (T1a) — colonoscopic removal hi kaafi hota hai usually. Deeper invasion (T1b, T2+) — surgical resection ki zaroorat. Dr. Akhilesh Yadav Ranchi mein cancer surgery ke liye appropriate surgical oncologist ko refer karte hain aur care coordinate karte hain.",
      },
      {
        q: "Blood thinners par hoon — polypectomy safe hai?",
        a: "Aspirin: chhote polyps ke liye continue kar sakte hain. Warfarin/clopidogrel: 5-7 din pehle bandh karni hoti hai (cardiac risk assess karke — cardiologist se coordinate). Anticoagulant bridging kabhi kabhi zaroor hoti hai. Dr. Akhilesh Yadav Ranchi mein case-by-case decide karte hain.",
      },
      {
        q: "Ek colonoscopy mein kitne polyps remove kar sakte hain?",
        a: "Generally ek session mein 3-5 polyps comfortably remove ho jaate hain. Bahut zyada aur large polyps mein staged procedure (2 sessions) safe hoti hai. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein safety pehle rakhte hain — ek session mein over-aggressive polypectomy avoid karte hain.",
      },
    ],
  },

  // ── BATCH 5: BLOGS 21–25 (Hindi-first) ──────────────────────────────────────

  {
    slug: "ranchi-mein-pet-ke-doctor",
    titleHi: "Ranchi Mein Pet Ke Doctor — Dr. Akhilesh Yadav | Gastroenterologist",
    titleEn: "Pet Ke Doctor in Ranchi — Best Stomach Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein pet ke doctor kaun hain? Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre mein stomach, intestine aur liver ki sabhi samasya ka ilaj karte hain.",
    excerptEn: "Looking for a stomach doctor in Ranchi? Dr. Akhilesh Yadav — DM Gastroenterologist at Orchid Medical Centre — treats all stomach, gut & liver conditions.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🩺",
    tags: ["ranchi mein pet ke doctor", "pet ka doctor ranchi", "stomach doctor ranchi", "gastroenterologist ranchi", "pet specialist ranchi"],
    metaTitle: "Pet Ke Doctor Ranchi | Dr. Akhilesh Yadav Gastroenterologist",
    metaDescription: "Ranchi mein pet ke doctor — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre. All stomach, intestine & liver conditions treated. Book now.",
    sections: [
      {
        heading: "Pet Ki Problem — Sahi Doctor Kon Hai?",
        type: "text",
        content: "Ranchi ke bahut se log confused rehte hain — 'pet mein dard hai toh kis doctor ke paas jaayein?' General physician? Surgeon? Ya koi specialist? Jab baat stomach, intestine, liver ya pancreas ki ho — toh sahi specialist hai: Gastroenterologist. Orchid Medical Centre, HB Road, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — Jharkhand ke experienced super-specialists mein hain. Din mein 20-25 patients aate hain — Ranchi, Bokaro, Dhanbad, Hazaribagh, Jamshedpur, Deoghar se. Ek dedicated pet ke doctor ka fayda: correct diagnosis, sahi treatment, unnecessary surgery se bachao.",
      },
      {
        heading: "Dr. Akhilesh Yadav Kya Treat Karte Hain?",
        type: "list",
        content: "Orchid Medical Centre Ranchi mein Dr. Akhilesh Yadav in conditions ka ilaj karte hain:",
        list: [
          "Acidity aur GERD (acid reflux, seene mein jalan)",
          "Peptic Ulcer — H. Pylori infection sametey",
          "IBS (Irritable Bowel Syndrome) — baar baar loose motions ya kabj",
          "IBD (Crohn's disease, Ulcerative Colitis)",
          "Fatty Liver (NAFLD/NASH), Hepatitis B/C, Liver Cirrhosis",
          "Jaundice (peela hona — skin aur aankhein)",
          "Gallstones aur biliary conditions",
          "Piles (bawaseer), constipation, rectal bleeding",
          "Pancreatitis (pancreas ki soojan)",
          "Colon cancer screening aur polyp removal",
        ],
      },
      {
        heading: "Orchid Medical Centre Ranchi — Suvidha Aur Procedures",
        type: "text",
        content: "Orchid Medical Centre, HB Road, Ranchi mein Dr. Akhilesh Yadav ke paas advanced gastroenterology suvidhayen hain: Upper GI Endoscopy (OGD Scopy) — esophagus, stomach, duodenum. Colonoscopy — full colon examination, polyp removal. ERCP — bile duct stones, stenting. EUS (Endoscopic Ultrasound) — pancreas, bile duct advanced imaging. FibroScan — liver fibrosis non-invasive assessment. Kaphi saari conditions ka diagnosis aur treatment ek hi jagah — Ranchi se bahar jaana nahi padta. Appointment ke liye: +91 74919 25047. Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
      {
        heading: "Kab Pet Ke Doctor Ko Dikhana Zaroor Hai",
        type: "list",
        content: "In symptoms mein delay mat karein — gastroenterologist se milein:",
        list: [
          "4+ hafte se pet mein dard — theek nahi ho raha",
          "Toilet mein blood aana — bright red ya kala",
          "Bina wajah ka wajan ghatna",
          "Peela hona (jaundice) — skin ya aankhein",
          "Nigalna mushkil lagna (dysphagia)",
          "Baar baar ulti ya nausea",
          "Liver ya pancreas tests mein abnormality",
        ],
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi ke patients mujhse kehte hain ki pehle sochte the itna bada doctor hai, milenge kaise. Lekin main chahta hoon ki har marz ka patient — chahe Bokaro se aaye ya Deoghar se — Ranchi mein world-class gastro care paye. Symptoms ignore mat karein, milne aayein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Pet ke doctor aur surgeon mein kya fark hai?",
        a: "Gastroenterologist medical treatment karta hai — endoscopy, medications, lifestyle management. Surgeon operation karta hai. Zyada tar GI conditions mein pehle gastroenterologist see karte hain — zaroorat padne par surgical referral. Dr. Akhilesh Yadav Ranchi mein coordinate karte hain jab zaroor ho.",
      },
      {
        q: "Kya bina appointment ke aa sakte hain?",
        a: "Orchid Medical Centre, Ranchi mein appointment preferred hai — wait time kam hoti hai. Emergency cases immediate attend hote hain. +91 74919 25047 par call karein ya WhatsApp karein appointment ke liye.",
      },
      {
        q: "Ranchi se kitni door hai Orchid Medical Centre?",
        a: "Orchid Medical Centre HB Road, Ranchi mein hai — city center ke kareeb. Ranchi station se 15-20 minute. Bokaro se ~2 ghante, Hazaribagh se ~1.5 ghante, Dhanbad se ~2.5 ghante. Patients Bihar aur Chhattisgarh se bhi aate hain.",
      },
      {
        q: "Hindi mein consultation milti hai?",
        a: "Haan — Dr. Akhilesh Yadav fluent Hindi mein consultation dete hain. Jharkhand ke local patients ke liye yeh ek bada comfort hai — medical terms Hindi mein samjhaye jaate hain.",
      },
    ],
  },

  {
    slug: "ranchi-mein-liver-ka-doctor",
    titleHi: "Ranchi Mein Liver Ka Doctor — Dr. Akhilesh Yadav | Hepatologist",
    titleEn: "Liver Doctor in Ranchi — Hepatologist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein liver ka doctor kaun hai? Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre mein fatty liver, hepatitis, jaundice, cirrhosis ka expert ilaj.",
    excerptEn: "Liver doctor in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist & Hepatologist at Orchid Medical Centre. Fatty liver, hepatitis, jaundice & all liver conditions.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🫀",
    tags: ["ranchi mein liver ka doctor", "liver doctor ranchi", "hepatologist ranchi", "jaundice doctor ranchi", "liver specialist jharkhand"],
    metaTitle: "Liver Doctor in Ranchi | Dr. Akhilesh Yadav Hepatologist",
    metaDescription: "Liver doctor in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist & Hepatologist at Orchid Medical Centre. Expert liver care: fatty liver, hepatitis, jaundice, cirrhosis.",
    sections: [
      {
        heading: "Ranchi Mein Liver Doctor Ki Zaroorat — Kyon?",
        type: "text",
        content: "Jharkhand mein liver diseases ek growing problem hai. Hepatitis B ka prevalence national average se zyada hai — kai logon ko pata hi nahi hota. Fatty liver (NAFLD) diabetes aur motaape ke saath badh raha hai. Alcohol-related liver disease bhi common hai. Deoghar se lekar Bokaro tak — Ranchi ke Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Jharkhand ka ek experienced liver specialist hain. Liver diseases mein dedicated specialist zaroor dikhayein — general physician ki expertise yahan limited hoti hai.",
      },
      {
        heading: "Liver Ki Koi Bhi Problem — Dr. Akhilesh Yadav Se Milein",
        type: "list",
        content: "Orchid Medical Centre Ranchi mein yeh liver conditions treat hoti hain:",
        list: [
          "Fatty Liver (NAFLD/NASH) — Grade 1-3, advanced fibrosis tak",
          "Alcoholic Liver Disease (ALD) — early se advanced cirrhosis",
          "Hepatitis B — antiviral therapy, long-term monitoring",
          "Hepatitis C — modern DAA se 8-12 week mein virus clear",
          "Hepatitis A/E — acute management",
          "Liver Cirrhosis — ascites, varices, encephalopathy management",
          "Autoimmune Hepatitis — steroid/immunosuppressant therapy",
          "Jaundice (peela hona) — cause finding aur treatment",
          "Liver Abscess — antibiotics aur drainage",
          "Liver cancer surveillance — high-risk patients monitoring",
        ],
      },
      {
        heading: "FibroScan — Ranchi Mein Liver Test Bina Biopsy",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein FibroScan use karte hain — ek non-invasive liver test jo liver stiffness measure karta hai aur fibrosis stage batata hai. Sirf 10 minute ka procedure, koi needle nahi, koi dard nahi. Results: F0-F1 (normal-minimal), F2-F3 (significant fibrosis), F4 (cirrhosis). Hepatitis B/C patients mein annual FibroScan se disease progression monitor hoti hai. Fatty liver patients mein FibroScan se pata chalta hai ki weight loss/treatment se liver improve hua ya nahi.",
      },
      {
        heading: "Jaundice Emergency — Kab Hospital Zaroor Jaayein",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke patients ko warn karte hain — yeh jaundice emergency signs hain: Skin aur aankhein bright yellow. Dark brown urine (chai jaise), pale/clay-colored stools. Severe abdominal pain, especially right upper side. Confusion ya disorientation (Hepatic Encephalopathy). High fever with jaundice (infection sign). Swollen abdomen (ascites). In symptoms mein immediately Orchid Medical Centre ya nearest hospital jayein — delay life-threatening ho sakta hai.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Liver",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Liver ek silent organ hai — bahut kuch silently sahta hai aur late stage mein symptoms aate hain. Ranchi mein main recommend karta hoon — agar diabetes, motaapa, alcohol history, ya family mein liver disease hai — toh saal mein ek baar liver checkup zaroor karwayein. Early detection mein treatment bahut aasaan hota hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Liver symptoms ke liye hepatologist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Liver ke liye konsa blood test karwayein?",
        a: "LFT (SGPT, SGOT, ALP, GGT, Bilirubin, Albumin, PT-INR), HBsAg (Hepatitis B), anti-HCV (Hepatitis C), Ultrasound abdomen. Diabetes ya motaapa ho toh saal mein ek baar. Dr. Akhilesh Yadav Ranchi mein complete liver health workup guide karte hain.",
      },
      {
        q: "Fatty liver mein kya khaana avoid karein?",
        a: "Avoid: alcohol (completely), refined sugar (mithai, cold drinks), maida (ultra-processed), saturated fats (excessive ghee, vanaspati), fried snacks. Helpful: sattu, oats, nuts (limited), olive oil, haldi, lehsun. Dr. Akhilesh Yadav Ranchi mein detailed diet counseling dete hain.",
      },
      {
        q: "Hepatitis B positive hoon — kya mujhe treatment ki zaroorat hai?",
        a: "Sab Hepatitis B carriers ko treatment ki zaroorat nahi hoti. Viral load (HBV DNA), liver enzymes (SGPT), aur FibroScan/biopsy se decide hota hai. Dr. Akhilesh Yadav Ranchi mein complete evaluation karke decide karte hain — treatment kab start karein.",
      },
      {
        q: "Liver mein paani bharna (ascites) kya hai?",
        a: "Ascites cirrhosis ya liver failure ka complication hai — abdominal cavity mein fluid accumulate hota hai. Pet phul jaata hai. Diuretics se manage hota hai pehle, phir paracentesis (needle se paani nikaalna) zaroor hoti hai. Dr. Akhilesh Yadav Ranchi mein ascites cases regularly manage karte hain.",
      },
    ],
  },

  {
    slug: "ranchi-mein-acidity-ka-ilaj",
    titleHi: "Ranchi Mein Acidity Ka Ilaj — GERD Treatment | Dr. Akhilesh Yadav",
    titleEn: "Acidity Treatment in Ranchi — GERD Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein acidity aur GERD ka ilaj: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Sirf antacid se nahi, sahi diagnosis aur lasting management.",
    excerptEn: "Acidity & GERD treatment in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Correct diagnosis & long-term acid reflux management beyond just antacids.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🔥",
    tags: ["ranchi mein acidity ka ilaj", "acidity treatment ranchi", "GERD ranchi", "seene ki jalan ranchi", "gastroenterologist ranchi"],
    metaTitle: "Acidity Ka Ilaj Ranchi | GERD Doctor | Dr. Akhilesh Yadav",
    metaDescription: "Acidity aur GERD ka ilaj Ranchi mein — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre. Correct diagnosis, lasting relief, endoscopy available.",
    sections: [
      {
        heading: "Ranchi Mein Acidity — Aam Nahi Hai Jo Aap Soch Rahe Hain",
        type: "text",
        content: "Ranchi mein litti-chokha, dal-bati, oily khana aur chai-coffee ki badi consumption hai — aur iske saath hai acidity epidemic. Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — roz 10-15 acidity ke patients dekhte hain. Unka kehna hai: '90% patients sirf antacid khaate hain bina samjhe ki problem kya hai.' Acidity ka sahi naam hai GERD (Gastroesophageal Reflux Disease) jab yeh chronic ho jaaye — aur iska ilaj sirf antacid nahi, systematic approach chahiye.",
      },
      {
        heading: "Acidity Ke Lakshan — Kab Zyada Serious Hai?",
        type: "list",
        content: "Yeh symptoms GERD ke hain — aur yeh alarm signs hain jab endoscopy zaroor hai:",
        list: [
          "Seene mein jalan (heartburn) — khaane ke baad ya loatne par badh jaaye",
          "Mooh mein khatta aana (acid regurgitation)",
          "Khaana nigalne mein takleef (dysphagia) — ALARM SIGN",
          "Khana nahi khaa paana pura — early satiety",
          "Raat ko uthna acidity se",
          "Khaansi jo kisi dawaai se theek nahi — acid-related",
          "Unexplained wajan ghaata — ALARM SIGN, turant doctor",
        ],
      },
      {
        heading: "Sahi Diagnosis — Antacid Se Pehle",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein GERD diagnosis mein karte hain: Detailed history: dard pattern, trigger foods, medications, weight history. H. Pylori test (stool antigen test): 50-60% Indian GERD patients mein H. Pylori positive. Endoscopy (OGD Scopy): zaroor hai agar 4+ hafte ki acidity medications se theek nahi ho rahi, ya alarm symptoms hain. Endoscopy se dekhte hain: esophagitis grade, H. Pylori status, Barrett's Esophagus (pre-cancerous — long-term acid damage), peptic ulcer. Sahi diagnosis se — sahi treatment.",
      },
      {
        heading: "GERD Ka Ilaj — Dr. Akhilesh Yadav Ka Plan",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke GERD patients ke liye yeh plan dete hain: H. Pylori positive: 14-day eradication therapy — significant improvement hoti hai. PPI (Pantoprazole/Omeprazole): acid reduce karna — sirf PPI course, antacid nahi. 4-8 hafte ka course. Lifestyle: raat ka khana so ne se 3 ghante pehle. Bed head 6-8 inch uthana. Wajan ghatana agar overweight. Avoid: tea-coffee in excess, alcohol, oily-spicy. Ranchi ke helpful local foods: sattu ka paani (alkaline), chhachh, plain dahi. Barrett's Esophagus mein: regular surveillance endoscopy schedule. Severe GERD mein: anti-reflux surgery (rare cases) ka referral.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Acidity",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main log dekhta hoon jo 2-3 saal se antacid le rahe hain daily. Yeh sahi nahi — long-term antacid side effects hain. Aur kuch cases mein jo hum 'simple acidity' samajhte hain woh actually Barrett's ya early cancer nikalta hai. 4 hafte se zyada acidity hai — ek baar endoscopy zaroor karwayein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. GERD ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Acidity mein konsa khana safe hai Ranchi ke context mein?",
        a: "Safe: sattu ka paani (alkaline nature), plain dahi/chhachh (probiotic), banana, oatmeal, boiled vegetables, plain rice. Avoid: litti-chokha bahut zyada ghee ke saath, tamatar, khatta fal, chai-coffee zyada, oily fried snacks. Dr. Akhilesh Yadav condition-specific diet guide karte hain.",
      },
      {
        q: "Antacid aur PPI mein kya fark hai?",
        a: "Antacid (eno, gelusil): turant neutralize karta hai acid — short-term relief, minutes mein. PPI (omeprazole, pantoprazole): acid production ki factory bandh karta hai — asar 2-3 din mein aata hai, lekin lasting. Chronic GERD mein PPI zyada effective hai — lekin sirf doctor ke guidance mein.",
      },
      {
        q: "Kya pregnancy mein acidity ka ilaj alag hai?",
        a: "Haan — pregnancy mein antacids (calcium/magnesium based) generally safe. Certain PPIs safe category mein hain. H2 blockers (ranitidine) bhi use hote hain. Dr. Akhilesh Yadav Ranchi mein pregnancy-safe options clearly guide karte hain.",
      },
      {
        q: "Barrett's Esophagus kya hai — kya yeh dangerous hai?",
        a: "Barrett's Esophagus: chronic acid damage se normal esophageal cells change ho jaate hain — pre-cancerous state. Risk: esophageal adenocarcinoma. Regular surveillance endoscopy se early changes detect hote hain. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein Barrett's patients ka regular follow-up karte hain.",
      },
    ],
  },

  {
    slug: "ranchi-ka-gastroenterologist",
    titleHi: "Ranchi Ka Gastroenterologist — Dr. Akhilesh Yadav | Best GI Doctor",
    titleEn: "Best Gastroenterologist in Ranchi — Dr. Akhilesh Yadav | Orchid Medical Centre",
    excerptHi: "Ranchi ka sabse trusted gastroenterologist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road. Jharkhand ke patients ki pehli choice.",
    excerptEn: "Best gastroenterologist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre. Trusted by thousands of patients from Jharkhand, Bihar & Chhattisgarh.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "⭐",
    tags: ["ranchi ka gastroenterologist", "best gastroenterologist ranchi", "top gastro doctor ranchi", "DM gastroenterologist ranchi", "Orchid Medical Centre ranchi"],
    metaTitle: "Best Gastroenterologist in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Best gastroenterologist in Ranchi — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre. Expert GI care for all stomach, liver & intestine conditions.",
    sections: [
      {
        heading: "Ranchi Ka Gastroenterologist — Qualification Kya Hai Sahi Doctor Ki?",
        type: "text",
        content: "Ranchi mein kai 'pet ke doctor' hain — lekin ek DM Gastroenterologist ka matlab kya hai? MBBS (5.5 saal) → MD Internal Medicine (3 saal) → DM Gastroenterology (3 saal super-specialization) — kul 11.5 saal ki medical education. Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein practice karte hain. Is level ki qualification ensure karta hai ki GI conditions mein deepest expertise ho — endoscopy, hepatology, advanced procedures sab mein. Jharkhand mein DM Gastroenterologists ki sankhya bahut limited hai.",
      },
      {
        heading: "Dr. Akhilesh Yadav — Ranchi Mein Kyun Choose Karein",
        type: "list",
        content: "Dr. Akhilesh Yadav choose karne ke reasons:",
        list: [
          "DM Gastroenterology — highest GI qualification in India",
          "Orchid Medical Centre mein advanced procedures: Endoscopy, Colonoscopy, ERCP, EUS, FibroScan",
          "4,000+ consultations — Ranchi aur Jharkhand ke patients",
          "Hindi mein consultation — Jharkhand ke local patients ke liye comfort",
          "Ranchi mein kareeb — Bokaro, Hazaribagh, Dhanbad, Jamshedpur, Deoghar se accessible",
          "GERD se liver cirrhosis tak — complete GI care ek jagah",
          "Online appointment available — +91 74919 25047 ya WhatsApp",
        ],
      },
      {
        heading: "Orchid Medical Centre — Ranchi Ka Advanced GI Centre",
        type: "text",
        content: "Orchid Medical Centre, HB Road, Ranchi mein Dr. Akhilesh Yadav ke paas hain: High-definition Endoscopy — esophagus, stomach, duodenum visualize. Colonoscopy with polypectomy — colon cancer prevention. ERCP (Endoscopic Retrograde Cholangiopancreatography) — bile duct stones, stenting. EUS (Endoscopic Ultrasound) — pancreas, bile duct advanced imaging. FibroScan — liver fibrosis non-invasive test. Sedation facilities — comfortable procedures. Yeh all-in-one GI center Jharkhand mein rare hai — patients ko bade cities nahi jana padta.",
      },
      {
        heading: "Patient Reviews — Ranchi Mein Dr. Akhilesh Yadav Ka Trust",
        type: "text",
        content: "Ranchi aur Jharkhand ke hazaron patients ne Dr. Akhilesh Yadav se ilaj liya hai. Google Reviews mein: 4.9/5.0 rating. Patients ki kahaniyan: fatty liver Grade 3 jo lifestyle program se Grade 1 ho gayi. Hepatitis C jo 12 hafte mein cure hua. Chronic IBS jo 4 saal baad sahi diagnosis aur treatment se theek hua. Colon polyp jo cancer banne se pehle nikala gaya. 'Hindi mein samjhate hain — itne bade doctor hoke bhi.' 'Ranchi mein hi yeh facility milna bahut bada relief hai.' Appointment ke liye: +91 74919 25047 ya WhatsApp.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ka Sandesh Ranchi Ke Patients Ko",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Main chahta hoon ki Jharkhand ke har patient ko — chahe Ranchi mein ho ya Bokaro, Hazaribagh, Deoghar mein — sahi gastroenterology care milein. Pet ki takleef ignore karna sahi nahi. Aur Ranchi se bahar jaane ki zaroorat nahi — yahan Orchid Medical Centre mein sab milta hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "DM Gastroenterologist aur MD Medicine mein kya fark hai?",
        a: "MD Medicine general internal medicine specialist hai — broad training. DM Gastroenterology 3 saal ki additional super-specialization hai — sirf GI system focus. Endoscopy, colonoscopy, ERCP, hepatology — sab mein DM Gastroenterologist zyada expert hai. Dr. Akhilesh Yadav Ranchi mein DM Gastroenterology hain.",
      },
      {
        q: "Kya Orchid Medical Centre mein cashless insurance hai?",
        a: "Haan — select insurance plans ke liye cashless facility available hai. Exact insurance eligibility confirm karne ke liye +91 74919 25047 par call karein. Most major insurance procedures cover karte hain — endoscopy, colonoscopy included.",
      },
      {
        q: "Kya telemedicine ya phone consultation milti hai?",
        a: "Follow-up consultations phone/WhatsApp pe possible hain. First consultation aur procedures ke liye in-person visit zaroor hai Orchid Medical Centre, Ranchi mein. +91 74919 25047 par call karein guidance ke liye.",
      },
      {
        q: "Kya Sunday ko OPD milti hai?",
        a: "Dr. Akhilesh Yadav Monday se Saturday available hain: 10 AM–2 PM aur 5 PM–8 PM. Sunday generally holiday hai. Emergency cases ke liye contact karein — +91 74919 25047.",
      },
    ],
  },

  {
    slug: "ranchi-mein-fatty-liver-ka-ilaj",
    titleHi: "Ranchi Mein Fatty Liver Ka Ilaj — Diet, Exercise & Treatment | Dr. Akhilesh Yadav",
    titleEn: "Fatty Liver Treatment in Ranchi — Diet, Exercise & Medical Care | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein fatty liver (NAFLD/NASH) ka ilaj: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Weight loss, diet, exercise aur medication ka complete guide.",
    excerptEn: "Fatty liver treatment in Ranchi by Dr. Akhilesh Yadav at Orchid Medical Centre. Complete guide: diet, exercise, weight loss & medical management of NAFLD/NASH.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🥗",
    tags: ["ranchi mein fatty liver ka ilaj", "fatty liver treatment ranchi", "NAFLD ranchi", "liver diet ranchi", "gastroenterologist ranchi"],
    metaTitle: "Fatty Liver Ka Ilaj Ranchi | NAFLD Treatment | Dr. Akhilesh Yadav",
    metaDescription: "Fatty liver (NAFLD/NASH) treatment in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Diet, exercise, weight loss & medical management. Book now.",
    sections: [
      {
        heading: "Fatty Liver — Ranchi Mein Epidemic",
        type: "text",
        content: "Ranchi ke Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — ke paas roz 4-5 fatty liver patients aate hain. Kahin se — 'routine ultrasound mein fatty liver aa gaya.' Zyada tar ko koi symptoms nahi the. Jharkhand mein fatty liver (NAFLD — Non-Alcoholic Fatty Liver Disease) ka prevalence badh raha hai — diabetes, motaapa, sedentary lifestyle ke saath. Sabse important baat: fatty liver zyada tar stages mein lifestyle changes se significantly improve hota hai. Lekin correct guidance zaroori hai — sirf 'khaana mat khao' nahi.",
      },
      {
        heading: "Fatty Liver Grade aur Kya Matlab Hai",
        type: "text",
        content: "Ultrasound mein fatty liver 3 grades mein bataya jaata hai: Grade 1 (Mild): liver mein 5-33% fat — typically reversible with lifestyle. Grade 2 (Moderate): 33-66% fat — significant lifestyle change zaroori. Grade 3 (Severe/NASH): >66% fat + inflammation (NASH) — medical treatment bhi required. FibroScan se fibrosis stage pata chalta hai — F0 se F4 (cirrhosis). Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein FibroScan se stage assess karte hain aur treatment accordingly decide karte hain.",
      },
      {
        heading: "Fatty Liver Ka Ilaj — Dr. Akhilesh Yadav Ka Protocol",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi ke fatty liver patients ko yeh protocol dete hain:",
        list: [
          "Weight loss: 7-10% body weight reduce karo — yeh liver fat significantly ghataata hai",
          "Diet: refined carbs (maida, sugar, cold drinks) avoid. Vegetables, fruits (portion control), lean protein, good fats",
          "Exercise: roz 30-45 min walk ya aerobic exercise — liver fat pe direct asar",
          "Alcohol: bilkul nahi — ek drink bhi fatty liver worsen karta hai",
          "Diabetes aur thyroid control: agar hai toh manage karo — liver health pe direct impact",
          "NASH mein medications: Vitamin E (non-diabetic NASH), Pioglitazone (diabetic NASH), newer agents",
          "FibroScan monitoring: treatment response check karne ke liye saal mein ek baar",
        ],
      },
      {
        heading: "Ranchi Mein Fatty Liver Ke Liye Diet — Local Foods Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke patients ke liye local food context mein diet guide karte hain: Helpful: Sattu (chana sattu — high protein, fiber, low GI), chhachh aur lassi (plain, low-fat), moong daal, palak, lauki, karela, haldi (anti-inflammatory), amlaa (Vitamin C, liver support), papaya, guava. Avoid karein: litti-chokha bahut zyada ghee ke saath (occasional theek hai, roz nahi), mithai aur kheer, dalda/vanaspati, biscuit-cookies (maida+sugar), cold drinks. Intermediate: Roti — 2-3 phulka theek hai, zyada nahi. Chawal — thoda control. Non-veg — grilled/boiled — fry nahi.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Fatty Liver",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Fatty liver mein sabse powerful medicine exercise aur weight loss hai. Main roz patients ko yeh kehta hoon — koi supplement ya dawa lifestyle se zyada effective nahi hogi. 6 mahine mein 7-10% weight loss ho jaaye — ultrasound mein liver improve hoga, enzymes normalize hoge. Ranchi ke patients mein yeh possible hai — main baar baar dekh raha hoon.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Fatty liver ke liye gastroenterologist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Fatty liver mein liver enzymes (SGPT) kitne high ho sakte hain?",
        a: "NAFLD mein SGPT mild-moderately elevated hoti hai (1.5-3x normal). NASH mein zyada elevated. Lekin SGPT normal bhi ho sakti hai even with significant fatty liver — isliye ultrasound aur FibroScan dono zaroori hain. Dr. Akhilesh Yadav Ranchi mein complete assessment karte hain.",
      },
      {
        q: "Kya fatty liver mein koi dawa hoti hai?",
        a: "NAFLD (bina inflammation) mein main treatment lifestyle hai — koi specific FDA-approved drug abhi nahi. NASH (inflammation ke saath) mein: Vitamin E (non-diabetic), Pioglitazone (diabetic). Newer drugs (semaglutide, lanifibranor) research mein hain. Dr. Akhilesh Yadav latest evidence-based treatment Ranchi mein provide karte hain.",
      },
      {
        q: "Fatty liver se cirrhosis hone mein kitna time lagta hai?",
        a: "Simple NAFLD se cirrhosis: 10-20 saal typically. NASH se faster — 5-10 saal mein advanced fibrosis. Yeh individual factors pe depend karta hai — diabetes, obesity, genetics. FibroScan se progression monitor hoti hai. Dr. Akhilesh Yadav Ranchi mein high-risk patients ka intensive follow-up karte hain.",
      },
      {
        q: "Kya yoga se fatty liver theek hota hai?",
        a: "Yoga + aerobic exercise combination helpful hai. Surya namaskar, brisk walk, cycling — sab liver fat reduce karte hain. Lekin 'yoga se fatty liver theek' claim overstatement hai — exercise ek part hai treatment ka, akele nahi. Diet control equally important. Dr. Akhilesh Yadav holistic approach recommend karte hain.",
      },
      {
        q: "Bacchon mein fatty liver hota hai?",
        a: "Haan — childhood obesity ke saath Pediatric NAFLD badh raha hai India mein. Bacchon mein treatment focus hai weight management aur diet. Dr. Akhilesh Yadav adult cases treat karte hain — bacchon ke liye pediatric gastroenterologist ya pediatrician appropriate hai.",
      },
    ],
  },

  // ── BATCH 6: BLOGS 26–30 ─────────────────────────────────────────────────────

  {
    slug: "ranchi-mein-piles-ka-ilaj",
    titleHi: "Ranchi Mein Piles Ka Ilaj — Bawaseer Treatment | Dr. Akhilesh Yadav",
    titleEn: "Piles Treatment in Ranchi — Bawaseer Ka Ilaj | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein piles (bawaseer) ka ilaj bina surgery ke — Dr. Akhilesh Yadav — Orchid Medical Centre. Rubber Band Ligation, diet tips aur complete hemorrhoid guide.",
    excerptEn: "Piles (hemorrhoid) treatment in Ranchi — non-surgical options by Dr. Akhilesh Yadav at Orchid Medical Centre. RBL, diet tips & complete bawaseer guide.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "💊",
    tags: ["ranchi mein piles ka ilaj", "bawaseer ka ilaj ranchi", "piles treatment ranchi", "hemorrhoids ranchi", "gastroenterologist ranchi"],
    metaTitle: "Piles Ka Ilaj Ranchi | Bawaseer Treatment | Dr. Akhilesh Yadav",
    metaDescription: "Piles (bawaseer) ka ilaj Ranchi mein — Dr. Akhilesh Yadav at Orchid Medical Centre. Non-surgical RBL, diet guide & complete hemorrhoid treatment.",
    sections: [
      {
        heading: "Bawaseer — Sharmane Ki Nahi, Ilaaj Ki Zaroorat Hai",
        type: "text",
        content: "Bawaseer (hemorrhoids/piles) ek aisi takleef hai jise Ranchi ke bahut se patients share nahi karte — sharm aati hai. Lekin Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ke paas roz 8-10 piles patients aate hain. 'Yeh ek medical condition hai — iska ilaj hai,' Dr. Akhilesh Yadav kehte hain. Aur achhi baat yeh hai ki zyada tar cases mein surgery ki zaroorat nahi hoti. Ranchi mein bawaseer ka karan bhi local factors hain — oily food, kam fiber, lambe waqt tak baithna.",
      },
      {
        heading: "Bawaseer Ke Prakar Aur Koi Bhi Ho Sakta Hai",
        type: "text",
        content: "Internal Hemorrhoids (andar): toilet ke baad bright red blood — generally dard nahi. Prolapse (tissue bahar aa jaata hai) Grade 3-4 mein. External Hemorrhoids (bahar): anus ke around swelling, dard, khujli. Thrombosed External Hemorrhoid: ek clot ban jaata hai — bahut dard, emergency mein release karna padta hai. Ranchi mein Dr. Akhilesh Yadav proctoscopy se exact grade diagnose karte hain aur uske hisaab se treatment plan karte hain. Grade 1-2: bina surgery ke theek. Grade 3-4: minimally invasive ya surgery.",
      },
      {
        heading: "Bawaseer Ka Ilaj — Dawa Se Lekar Procedure Tak",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi ke bawaseer patients ke liye yeh options rakhte hain:",
        list: [
          "Grade 1: high-fiber diet, paani, stool softeners, topical creams",
          "Grade 2: Rubber Band Ligation (RBL) — OPD mein, no anesthesia, 20-30 minute",
          "Grade 2-3: Sclerotherapy — injection treatment, shrink hota hai hemorrhoid",
          "Grade 3-4: Stapler Hemorrhoidopexy — minimally invasive surgery",
          "Grade 4/large external: Open Hemorrhoidectomy — surgical removal",
          "Prevention: isabgol roz, 2.5 litre paani, squat position, 5 min se zyada strain nahi",
          "Ranchi ke helpful foods: sattu ka paani, chhachh, papaya, guava",
        ],
      },
      {
        heading: "Kab Seriously Lein — Warning Signs",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke patients ko warn karte hain — yeh signs ignore mat karein: Bright red bleeding jo zyada ho raha ho. Kala tarry stool — upper GI bleeding ka sign, serious. Dard zyada badh jaaye suddenly (thrombosed hemorrhoid). 40+ age mein rectal bleeding — colonoscopy zaroor. Unexplained weight loss + rectal bleeding — turant specialist se milein. Bawaseer ki diagnosis confirm karna zaroor hai — kabhi kabhi rectal bleeding colon cancer ka sign bhi hota hai.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Piles",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main roz dekhta hoon ki Grade 2 ke patients surgery ka darr leke 2-3 saal wait karte hain aur Grade 4 mein aa jaate hain. Rubber Band Ligation OPD procedure hai — 30 minute mein ho jaata hai, uski subah se ghar aakar kaam kar sakte hain. Sharmane ki wajah se delay mat karein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Bawaseer mein Ayurvedic treatment kaargaar hai?",
        a: "Kuch Ayurvedic formulations (Arshkalp Vati, Abhayarishta) mild cases mein help karte hain. Lekin Grade 2-4 mein evidence-based procedures (RBL, surgery) zyada effective hain. Ayurvedic treatment se delay se problem badh sakti hai. Dr. Akhilesh Yadav Ranchi mein grade-based best treatment guide karte hain.",
      },
      {
        q: "Kya piles mein operation ke baad dobara hota hai?",
        a: "Complete hemorrhoidectomy ke baad recurrence rate low (<5-10%) hai long-term mein. Lekin agar diet aur lifestyle nahi badalee toh naye hemorrhoids ban sakte hain. RBL ke baad same hemorrhoid wapas aane ka chance 15-20% hai — lekin repeat procedure possible hai. Dr. Akhilesh Yadav Ranchi mein prevention plan dete hain.",
      },
      {
        q: "Kya pregnancy mein bawaseer ka ilaj ho sakta hai?",
        a: "Pregnancy mein conservative treatment — fiber, paani, sitz bath, topical creams. Invasive procedures generally delivery ke baad. Zyada tar cases delivery ke baad improve ho jaate hain. Dr. Akhilesh Yadav safe options guide karte hain.",
      },
      {
        q: "Piles ke saath kya khaana chahiye?",
        a: "Daily isabgol (psyllium husk) — 1 tbsp raat ko warm paani ke saath. High fiber: sabji, daal, phal ke chilke ke saath. Roz 2.5 litre paani. Ranchi mein: sattu ka paani, papaya, guava, chhachh — sab helpful hain. Avoid: maida, oily fried snacks, zyada masala.",
      },
    ],
  },

  {
    slug: "ranchi-mein-jaundice-ka-ilaj",
    titleHi: "Ranchi Mein Jaundice Ka Ilaj — Peeliya Treatment | Dr. Akhilesh Yadav",
    titleEn: "Jaundice Treatment in Ranchi — Peeliya Ka Ilaj | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein jaundice (peeliya) ka ilaj: Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre. Cause diagnosis aur complete liver care.",
    excerptEn: "Jaundice (peeliya) treatment in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Cause-based diagnosis & complete management of all types of jaundice.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🌟",
    tags: ["ranchi mein jaundice ka ilaj", "peeliya ka ilaj ranchi", "jaundice doctor ranchi", "hepatologist ranchi", "liver doctor ranchi"],
    metaTitle: "Jaundice Ka Ilaj Ranchi | Peeliya Doctor | Dr. Akhilesh Yadav",
    metaDescription: "Jaundice (peeliya) ka ilaj Ranchi mein — Dr. Akhilesh Yadav, DM Gastroenterologist & Hepatologist at Orchid Medical Centre. Cause-based diagnosis & treatment.",
    sections: [
      {
        heading: "Peeliya — Sirf Akele Ek Bimari Nahi, Ek Sign Hai",
        type: "text",
        content: "Ranchi ke Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — ko roz peeliya ke patients aate hain. Sabse common galat dharna: 'peeliya mein sirf ganne ka ras peena chahiye aur aaram karna chahiye.' Yeh partial sach hai. Jaundice (peeliya) khud ek bimari nahi — yeh liver ya bile system ki kisi problem ka sign hai. Iska cause janana sabse zaroori hai. Hepatitis A ya E mein rest aur diet theek hai. Bile duct stone mein ERCP procedure zaroori ho sakti hai. Liver cancer mein oncology team coordinate karni padti hai.",
      },
      {
        heading: "Peeliya Ke Prakar — Dr. Akhilesh Yadav Ka Classification",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein jaundice ko 3 categories mein classify karte hain: Pre-hepatic (liver se pehle): hemolytic anemia (red blood cells zyada toot rahe hain) — bilirubin production zyada. Hepatic (liver mein): Hepatitis A/B/C/E, alcoholic hepatitis, autoimmune hepatitis, drug-induced liver injury (DILI), liver cirrhosis. Post-hepatic (bile duct blockage): gallstones in bile duct, pancreatic cancer, bile duct stricture — yeh surgical/endoscopic emergency ho sakti hai. Ranchi mein Dr. Akhilesh Yadav blood tests aur imaging se type determine karke treatment plan karte hain.",
      },
      {
        heading: "Peeliya Ka Ilaj — Cause Ke Hisaab Se",
        type: "list",
        content: "Jaundice treatment cause-specific hai:",
        list: [
          "Hepatitis A/E (viral): rest, hydration, high-carb diet, alcohol avoid — generally self-limiting",
          "Hepatitis B acute: supportive care, severe cases mein antivirals",
          "Hepatitis C: DAA therapy — 8-12 hafte mein virus clear",
          "Alcoholic Hepatitis: alcohol bandh, nutrition support, steroids severe cases mein",
          "Bile duct stone: ERCP se stone removal — Orchid Medical Centre Ranchi mein available",
          "Drug-induced jaundice: offending drug bandh karo",
          "Liver failure: intensive management, transplant evaluation",
        ],
      },
      {
        heading: "Peeliya Mein Kya Khayein — Sahi Diet Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke peeliya patients ke liye diet guide karte hain. Khayein: High-carbohydrate foods — rice, khichdi, sabudana, potato (boiled). Fruits — papaya, banana, coconut water. Ganne ka ras — beneficial as high-carb, energy source (hygienic source se). Nimbu paani (diluted). Chhachh, plain dahi (probiotics). Avoid karein: Alcohol — completely. Heavy ghee-oil wala khana. Raw/undercooked food (infection ka risk). NSAIDs (paracetamol limited dose safe hai). Ranchi ke patients Hepatitis E ke cases mein especially hydration important hai.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Peeliya",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein peeliya mein ganne ka ras aur neem hakim ke paas jaana common hai. Kuch cases mein yeh fine hai — Hepatitis A/E mein natural recovery hoti hai. Lekin bile duct blockage ya severe hepatitis mein delay dangerous ho sakta hai. Peeliya hua toh pehle doctor se milein — cause pata karo, phir treatment.'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Jaundice ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Peeliya mein hospital admit karna zaroor hai?",
        a: "Mild Hepatitis A/E mein ghar mein theek ho sakte hain — rest, diet, hydration. Severe cases mein (PT-INR badha, confusion, inability to eat): admit zaroori. Bile duct blockage: hospital + ERCP. Dr. Akhilesh Yadav Ranchi mein severity assess karke admit/discharge decide karte hain.",
      },
      {
        q: "Peeliya ek vyakti se doosre ko phail sakta hai?",
        a: "Depends on cause. Hepatitis A/E: faecal-oral route se phailta hai (contaminated water/food) — infectious. Hepatitis B/C: blood/body fluid se — close contact se protect karein. Bile duct stone ya drug-induced: infectious nahi. Dr. Akhilesh Yadav Ranchi mein cause bataate hain taaki family precautions lein.",
      },
      {
        q: "Peeliya mein aankhein kyun peeli hoti hain?",
        a: "Bilirubin (waste product jo red blood cells tootne par banta hai) blood mein accumulate hota hai. Aankhon ka sclera (safed hissa) bilirubin absorb karta hai — isliye peela hota hai. Skin bhi affected hoti hai. Bilirubin >2.5 mg/dL hone par clinically visible jaundice hoti hai.",
      },
      {
        q: "Kya neem pani ya tulsi se peeliya theek hoti hai?",
        a: "Koi scientific evidence nahi hai ki yeh hepatitis ya bile duct jaundice treat karte hain. Hepatitis A/E mein natural recovery hoti hai — chahe kuch bhi karo. Lekin in home remedies ki wajah se critical treatment mein delay dangerous ho sakta hai. Dr. Akhilesh Yadav Ranchi mein evidence-based guidance dete hain.",
      },
    ],
  },

  {
    slug: "kabj-ka-doctor-ranchi",
    titleHi: "Kabj Ka Doctor Ranchi — Chronic Constipation Specialist | Dr. Akhilesh Yadav",
    titleEn: "Kabj Doctor in Ranchi — Chronic Constipation Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein kabj (constipation) ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Saalon ki kabj ka sahi diagnosis aur ilaj.",
    excerptEn: "Chronic constipation specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Diagnosis, diet tips & medical treatment for long-term kabj relief.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "💊",
    tags: ["kabj ka doctor ranchi", "constipation specialist ranchi", "kabj ka ilaj ranchi", "pet ki takleef ranchi", "gastroenterologist ranchi"],
    metaTitle: "Kabj Ka Doctor Ranchi | Constipation Specialist | Dr. Akhilesh Yadav",
    metaDescription: "Kabj (constipation) ka doctor Ranchi mein — Dr. Akhilesh Yadav at Orchid Medical Centre. Chronic kabj ka sahi diagnosis, diet aur medical treatment.",
    sections: [
      {
        heading: "Kabj — Sirf Diet Problem Nahi, Kabhi Kabhi Serious Sign",
        type: "text",
        content: "Ranchi ke Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — roz kabj ke patients dekhte hain. Ek 55-saal ke patient ne 8 mahine se kabj ki shikayat ki — unhe thyroid problem thi jo diagnose hi nahi hui thi. Thyroid treat hote hi kabj bhi theek ho gayi. Dusre patient ki kabj mein colonoscopy se early colon polyp mila. Kabj sirf 'kam pani' ya 'khaana theek nahi' wali problem nahi — khaas karke 50+ age mein ya naya onset ho toh specialist se milein.",
      },
      {
        heading: "Kabj Ke Karan — Ranchi Ke Patients Mein Common",
        type: "list",
        content: "Ranchi aur Jharkhand mein kabj ke yeh common karan hain:",
        list: [
          "Low fiber diet: maida roti, processed snacks, kam sabji",
          "Insufficient paani: 1 litre se kam roz — bahut common rural areas mein",
          "Sedentary lifestyle: desk job, exercise nahi",
          "Hypothyroidism (thyroid deficiency) — bahut common, khaas karke mahilaon mein",
          "Diabetes — bowel motility slow hoti hai",
          "Iron tablets — constipation ka side effect",
          "Calcium supplements — common osteoporosis mein, constipating",
          "IBS-C (Irritable Bowel Syndrome — Constipation type)",
          "50+ mein naya kabj — colon cancer rule out zaroor",
        ],
      },
      {
        heading: "Kabj Ka Diagnosis Aur Kab Colonoscopy",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein kabj assessment mein karte hain: History: kitne din se, diet pattern, medications, stress level. Blood tests: thyroid function (TSH), blood sugar, CBC — underlying cause rule out. Colonoscopy: zaroor hai agar: 50+ age mein naya onset kabj. Rectal bleeding ke saath kabj. Weight loss. Family history colon cancer. Iron deficiency anemia. Anorectal examination: pelvic floor dysfunction ya rectal prolapse check. Yeh structured approach ensure karta hai ki serious cause miss na ho.",
      },
      {
        heading: "Kabj Ka Ilaj — Gharelu Se Lekar Medical Tak",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke kabj patients ko step-by-step plan dete hain. Diet: Isabgol (psyllium husk) raat ko warm paani ke saath — sab se effective evidence-based approach. High fiber: sabji, dal, fruits ke saath. Roz 2.5-3 litre paani. Ranchi ke local helpful foods: sattu ka paani, papaya, guava, imli-imli ka ras (limited). Lifestyle: Roz 30 min walk. Fixed bathroom time (morning routine banana). Squat position (paon ke neeche stool). Medications (doctor ke under): Lactulose ya PEG (osmotic laxatives — safe for regular use). Stimulant laxatives (bisacodyl, senna) — sirf short-term. Long-term laxative dependence avoid karein.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Kabj",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Kabj mein ek baat zaroori hai: laxatives khate rehna bina diagnosis ke nahi. Kai patients saalon se daily senna ya bisacodyl kha rahe hain — yeh colon ka function aur bigaad deta hai. 3 mahine se zyada kabj hai — ek baar specialist se milein. Aur 50+ mein kabj — colonoscopy zaroor.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Chronic kabj ke liye doctor se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Roz ek baar toilet nahi jaana — kya yeh kabj hai?",
        a: "Nahi necessarily — 'normal' bowel frequency 3/day to 3/week tak hai. Kabj diagnosis hoti hai agar: hafte mein 3 se kam, excessive straining, hard stools, incomplete evacuation feeling. Dr. Akhilesh Yadav Ranchi mein Rome IV Criteria se kabj assess karte hain.",
      },
      {
        q: "Isabgol roz lena safe hai?",
        a: "Haan — isabgol (psyllium husk) ek natural fiber supplement hai, safe for long-term use unlike stimulant laxatives. Plenty of water ke saath lena zaroori hai — warna block ho sakta hai. Paani se leke hain toh bahut safe aur effective hai.",
      },
      {
        q: "Kabj mein enema dena theek hai?",
        a: "Occasional enema short-term mein theek hai. Regular enema use se bowel dependence ho sakti hai — avoid karein. Chronic kabj ke liye proper diagnosis aur treatment zaroori hai — enema symptomatic relief deta hai, cause nahi treat karta. Dr. Akhilesh Yadav Ranchi mein long-term safe options guide karte hain.",
      },
      {
        q: "Bacche ko kabj hai — kya karein?",
        a: "Bacchon mein kabj mein fiber (fruits, vegetables), paani, physical activity pehle try karein. Persist kare toh pediatric evaluation — Hirschsprung's disease ya functional constipation. Dr. Akhilesh Yadav adult GI specialist hain — bacchon ke liye pediatrician appropriate hai.",
      },
    ],
  },

  {
    slug: "pet-ki-jalan-ka-ilaj-ranchi",
    titleHi: "Pet Ki Jalan Ka Ilaj Ranchi — Heartburn & GERD | Dr. Akhilesh Yadav",
    titleEn: "Heartburn & Pet Ki Jalan Treatment in Ranchi | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein pet ki jalan aur seene ki jalan (heartburn/GERD) ka ilaj: Dr. Akhilesh Yadav — Orchid Medical Centre. Antacid se aage — sahi diagnosis aur lasting relief.",
    excerptEn: "Heartburn & pet ki jalan treatment in Ranchi by Dr. Akhilesh Yadav at Orchid Medical Centre. Beyond antacids — proper GERD diagnosis, endoscopy & long-term relief.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🔥",
    tags: ["pet ki jalan ranchi", "heartburn ranchi", "seene ki jalan ranchi", "GERD ranchi", "gastroenterologist ranchi"],
    metaTitle: "Pet Ki Jalan Ka Ilaj Ranchi | Heartburn | Dr. Akhilesh Yadav",
    metaDescription: "Pet ki jalan (heartburn/GERD) ka ilaj Ranchi mein — Dr. Akhilesh Yadav at Orchid Medical Centre. Proper diagnosis, endoscopy & lasting acid reflux management.",
    sections: [
      {
        heading: "Pet Ki Jalan — Antacid Se Zyada Kuch Chahiye",
        type: "text",
        content: "Ranchi mein seene ki jalan aur pet ki jalan — aksar yahi sunne milta hai ki '2-3 saal se antacid le raha hoon.' Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — roz aise patients dekhte hain jinhe saalon se GERD hai lekin kabhi sahi diagnosis nahi hui. Antacid symptomatic relief deta hai — cause nahi treat karta. GERD (Gastroesophageal Reflux Disease) — stomach ka acid upar food pipe mein aana — ek chronic condition hai jise proper management chahiye. Aur kuch cases mein — yeh Barrett's Esophagus ya esophageal cancer ki taraf bhi ja sakta hai.",
      },
      {
        heading: "Pet Ki Jalan Ke Karan — Ranchi Ke Context Mein",
        type: "list",
        content: "Ranchi mein GERD/heartburn ke common karan:",
        list: [
          "Oily-spicy food: litti-chokha bahut zyada ghee, samosa, namkeen — trigger foods",
          "Chai-coffee: zyada cups — acid production badhta hai",
          "Late night dinner: so ne se pehle hi khaana — acid reflux badhta hai",
          "Obesity/motaapa: pelvic pressure se LES (lower esophageal sphincter) weak hota hai",
          "Tight clothing aur belt: abdominal pressure badhaate hain",
          "H. Pylori infection: 50-60% Indian GERD patients mein positive",
          "NSAIDs: aspirin/ibuprofen regular use",
          "Pregnancy: hormonal + physical pressure",
        ],
      },
      {
        heading: "Endoscopy — Kab Zaroor Hai Jalan Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein endoscopy recommend karte hain agar: 4+ hafte ki jalan jo medications se theek nahi ho rahi. Swallowing mein takleef. Weight loss unexplained. Ulti mein blood. 45+ age mein naya onset. Anemia (iron deficiency). Endoscopy se pata chalta hai: Erosive Esophagitis (acid se damage), Barrett's Esophagus (pre-cancerous — regular surveillance zaroori), H. Pylori. Sahi diagnosis se — PPI course, H. Pylori treatment, ya Barrett's surveillance plan — jo bhi chahiye.",
      },
      {
        heading: "GERD Ka Ilaj Aur Ranchi Ke Liye Diet Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke GERD patients ke liye: Lifestyle (primary treatment): so ne se 3 ghante pehle last meal. Bed head 15-20 cm uthana. Wajan ghatana agar overweight. Quit alcohol aur smoking. Diet mein avoid: oily-spicy food, chai-coffee (2 se zyada cups), citrus fruits (nimbu zyada), chocolate, tomatoes, mint. Ranchi ke safe options: sattu ka paani (alkaline), plain chhachh, banana, oatmeal, boiled dal-rice. Medical: PPI proper course (4-8 hafte). H. Pylori positive — eradication therapy. Zyada tar GERD cases lifestyle + PPI se manage hote hain.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Pet Ki Jalan",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Pet ki jalan ya seene ki jalan mein ek cheez main clearly keh sakta hoon: agar 4 hafte se zyada ho rahi hai aur antacid se poora theek nahi ho raha — ek baar endoscopy zaroor karwayein. Barrett's Esophagus early mein detect ho toh treatment aasaan hai. Late mein detect ho toh mushkil.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. GERD symptoms ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Seene ki jalan aur heart attack mein kaise pehchaan karein?",
        a: "GERD: burning sensation, acid taste in mouth, worse after eating, lying down. Heart attack: pressure/squeezing chest pain, left arm/jaw radiation, sweating, shortness of breath. Doubt hone par — emergency mein jaayein pehle. Heart safe karna pehle, GERD baad mein. Dr. Akhilesh Yadav Ranchi mein cardiac causes rule out karke GERD confirm karte hain.",
      },
      {
        q: "Kya raat ko antacid lena safe hai roz?",
        a: "Short-term mein theek hai. Long-term regular antacid se: magnesium deficiency, kidney issues (calcium antacids), rebound acidity. PPI bhi long-term bina monitoring ke safe nahi. Dr. Akhilesh Yadav Ranchi mein proper treatment plan dete hain taaki antacid dependence na ho.",
      },
      {
        q: "Kya yoga se pet ki jalan mein faayda hota hai?",
        a: "Kuch poses helpful hain: Vajrasana (after meals), Shavasana. Avoid: inversions (headstand, shoulder stand) — acid reflux worse karte hain. Forward bends bhi avoid karein active GERD mein. Brisk walk after meals helpful hai.",
      },
      {
        q: "H. Pylori ke liye test kaise karein?",
        a: "Stool antigen test: most accurate, convenient. Urea Breath Test (UBT): gold standard. Blood antibody test: less accurate (past infection vs active). Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein stool antigen test recommend karte hain — affordable aur accurate.",
      },
    ],
  },

  {
    slug: "ranchi-mein-hepatitis-treatment",
    titleHi: "Ranchi Mein Hepatitis Treatment — Hepatitis B & C Ka Ilaj | Dr. Akhilesh Yadav",
    titleEn: "Hepatitis Treatment in Ranchi — Hepatitis B & C | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein Hepatitis B aur C ka advanced ilaj: Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre. Modern DAA se Hepatitis C cure.",
    excerptEn: "Hepatitis B & C treatment in Ranchi by Dr. Akhilesh Yadav at Orchid Medical Centre. Modern antiviral therapy, monitoring & long-term liver protection.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "💉",
    tags: ["ranchi mein hepatitis treatment", "hepatitis B doctor ranchi", "hepatitis C treatment ranchi", "liver doctor ranchi", "hepatologist ranchi"],
    metaTitle: "Hepatitis Treatment Ranchi | Hepatitis B & C | Dr. Akhilesh Yadav",
    metaDescription: "Hepatitis B & C treatment in Ranchi — Dr. Akhilesh Yadav, DM Hepatologist at Orchid Medical Centre. Modern antivirals, monitoring & liver protection.",
    sections: [
      {
        heading: "Hepatitis — Ranchi Mein Samajhna Zaroori",
        type: "text",
        content: "Jharkhand mein Hepatitis B ka prevalence national average se zyada hai — aur bahut se log carriers hain bina jaane. Hepatitis C bhi puri tarah se curable ho gayi hai aaj. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Hepatitis B/C ka scientific, modern treatment dete hain. 'Hepatitis B hai toh kya treatment karna chahiye?' — yeh confusion bahut common hai. Har patient ka case alag hota hai — viral load, liver damage degree, family status — sab factors matter karte hain.",
      },
      {
        heading: "Hepatitis B Ka Ilaj — Kab Aur Kaise",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein Hepatitis B management mein karte hain: HBV DNA (viral load) + HBeAg status check. LFT (SGPT/SGOT). FibroScan — liver fibrosis stage. Treatment indication: High viral load (>2000 IU/mL) + SGPT elevated. Significant fibrosis (F2+). Or special populations (pregnancy, immunosuppression, family planning). Treatment: Tenofovir disoproxil fumarate (TDF) ya Tenofovir alafenamide (TAF) — first-line antivirals. Long-term therapy — HBsAg clear hone tak ya lifelong. Annual monitoring: HBV DNA, SGPT, FibroScan, AFP (liver cancer screening). Hepatitis B ke saath liver cancer risk hota hai — regular surveillance zaroori hai.",
      },
      {
        heading: "Hepatitis C — Ab Curable Hai (95%+ Success)",
        type: "list",
        content: "Hepatitis C treatment aaj India mein available hai aur bahut effective hai:",
        list: [
          "Modern DAA (Direct-Acting Antivirals): Sofosbuvir/Velpatasvir combination",
          "Treatment duration: 8-12 hafte — genotype-dependent",
          "SVR (Sustained Virological Response) = virus permanently clear — 95%+ cases",
          "Ab koi painful interferon injections nahi",
          "Mild side effects: headache, fatigue — manageable",
          "Government scheme mein subsidized pricing available hai India mein",
          "Post-treatment: SVR 12 hafte baad confirm, then annual LFT monitoring",
          "Orchid Medical Centre Ranchi mein complete DAA therapy available",
        ],
      },
      {
        heading: "Hepatitis Prevention — Ranchi Ke Patients Ke Liye",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke patients ko yeh prevention guide karte hain. Hepatitis B: Vaccination — 3 dose schedule. Family members of HBsAg positive patient — test karwayein aur vaccine lagwayein jo negative hain. Safe sex practices. Sterilized instruments — tattoo, piercing mein. Hepatitis A/E: Clean paani peena — Ranchi mein piped water quality variable hai. Cooked food. Hand hygiene. Hepatitis C: Sterile needles — injecting drug use mein sab se bada risk. Unsterilized medical/dental equipment — risk hota hai India mein kuch settings mein. Blood transfusion — modern screening se risk bahut kam hai.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Hepatitis",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main roz dekhta hoon ki Hepatitis B carrier patients ko koi ne bola hi nahi tha ki treatment kab zaroori hai — silently cirrhosis develop ho gayi. Aur Hepatitis C ke patients ko nahi pata tha ki yeh ab curable hai. Ek simple test — aur sahi treatment — liver ka poora future change kar sakta hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Hepatitis ke liye hepatologist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Hepatitis B positive hoon aur koi symptoms nahi — kya treatment zaroor hai?",
        a: "Sab HBsAg positive logon ko turant treatment nahi chahiye. Viral load, liver enzymes, FibroScan se decide hota hai. 'Inactive carrier' phase mein sirf monitoring. Active phase ya fibrosis mein antiviral start karni chahiye. Dr. Akhilesh Yadav Ranchi mein complete evaluation ke baad decide karte hain.",
      },
      {
        q: "Hepatitis B positive ke paas rehne wale family members ko kya karein?",
        a: "Saare family members — HBsAg test aur anti-HBs test karwayein. Jo negative hain unhe Hepatitis B vaccine lagwayein (3 doses). Jo positive hain — evaluation aur follow-up. Dr. Akhilesh Yadav Ranchi mein family screening guide karte hain.",
      },
      {
        q: "Hepatitis C treatment kitne mein aata hai?",
        a: "India mein government Hepatitis C program ke under kaafi subsidized hai. Generic Sofosbuvir/Velpatasvir available hai. Exact cost inquiry ke liye Orchid Medical Centre Ranchi mein contact karein: +91 74919 25047. Cost accessibility ensure ki jaati hai.",
      },
      {
        q: "Kya Hepatitis B se liver cancer hota hai?",
        a: "Haan — chronic Hepatitis B (especially without antiviral treatment) mein liver cancer (Hepatocellular Carcinoma — HCC) ka risk hota hai. Isliye antiviral therapy cancer risk reduce karti hai. Dr. Akhilesh Yadav Ranchi mein HBsAg positive patients ka regular 6-monthly AFP test aur ultrasound surveillance karte hain.",
      },
      {
        q: "Hepatitis A kab theek hoti hai?",
        a: "Hepatitis A generally self-limiting hai — 4-8 hafte mein theek hoti hai. Treatment: rest, hydration, high-carb low-fat diet. Rarely — acute liver failure mein hospitalization. Lifelong immunity develop hoti hai. Vaccine available hai — travel ya high-risk logon ke liye.",
      },
    ],
  },

  // ── BATCH 7: BLOGS 31–35 ─────────────────────────────────────────────────────

  {
    slug: "crohns-disease-ranchi",
    titleHi: "Crohn's Disease Ranchi — IBD Specialist | Dr. Akhilesh Yadav",
    titleEn: "Crohn's Disease Specialist in Ranchi — Diagnosis & Treatment | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein Crohn's disease (IBD) ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Advanced diagnosis, biologics aur complete IBD care.",
    excerptEn: "Crohn's disease specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert IBD diagnosis, treatment, biologics & long-term management.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🫁",
    tags: ["crohns disease ranchi", "IBD specialist ranchi", "inflammatory bowel disease ranchi", "gastroenterologist ranchi", "crohn's treatment jharkhand"],
    metaTitle: "Crohn's Disease Specialist Ranchi | IBD | Dr. Akhilesh Yadav",
    metaDescription: "Crohn's disease (IBD) specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert diagnosis, biologics & complete IBD management.",
    sections: [
      {
        heading: "Ranchi Mein Crohn's Disease — Ek Underdiagnosed Condition",
        type: "text",
        content: "Bokaro se aaye 25-saal ki Priya — 3 saal se recurrent abdominal pain, diarrhea, weight loss. Kai doctors ne 'IBS' ya 'stress' bola. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne colonoscopy aur small bowel imaging ki. Diagnosis: Crohn's Disease (ileum involved). Sahi treatment se 6 mahine mein remission. Crohn's disease India mein zyada se zyada diagnosed ho rahi hai — aur Ranchi mein bhi ek dedicated IBD specialist ki zaroorat hai.",
      },
      {
        heading: "Crohn's Disease Kya Hai?",
        type: "text",
        content: "Crohn's Disease ek Inflammatory Bowel Disease (IBD) hai — chronic, immune-mediated condition jisme GI tract ke kisi bhi hisse mein (mooh se anus tak) transmural (full thickness) inflammation hoti hai. Most commonly: terminal ileum (small intestine ka end) aur colon. IBS se fark: IBS functional disorder hai — koi structural damage nahi. Crohn's mein actual inflammation aur tissue damage hoti hai — endoscopy aur imaging mein dikh jaata hai. Ulcerative Colitis se fark: UC sirf colon mein, mucosal layer. Crohn's anywhere, full thickness.",
      },
      {
        heading: "Crohn's Ke Symptoms — Kaise Pehchanen",
        type: "list",
        content: "Crohn's disease ke characteristic symptoms:",
        list: [
          "Recurrent abdominal pain — often right lower abdomen (terminal ileum area)",
          "Chronic diarrhea — 6+ hafte (blood ho bhi sakta hai, nahi bhi)",
          "Unexplained weight loss aur fatigue",
          "Fever — low-grade recurrent",
          "Perianal disease: fistula, fissure, abscess — Crohn's ka distinctive feature",
          "Extra-intestinal: joint pain, skin rashes (erythema nodosum), eye inflammation",
          "Growth retardation in children",
        ],
      },
      {
        heading: "Diagnosis — Dr. Akhilesh Yadav Ka Approach Ranchi Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein Crohn's diagnosis mein karte hain: Blood tests: CBC (anemia check), CRP/ESR (inflammation markers), fecal calprotectin (gut inflammation specific marker). Colonoscopy with ileoscopy: mucosal appearance, biopsy — histology confirm karta hai Crohn's. Small bowel imaging: MR Enterography (MRE) — ya CT Enterography — small bowel extent assess karna. Capsule Endoscopy: agar small bowel assessment better chahiye. Perianal MRI: perianal fistula assessment. Complete workup se disease extent, severity, aur complications assess hote hain.",
      },
      {
        heading: "Crohn's Ka Ilaj — Step-Up Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke Crohn's patients ke liye step-up treatment dete hain. Mild Crohn's: Mesalamine (5-ASA), budesonide (ileocecal Crohn's ke liye). Moderate Crohn's: Azathioprine/6-MP (immunomodulators). Steroid induction, phir taper. Severe/Fistulizing Crohn's: Biologics — Anti-TNF agents (Infliximab, Adalimumab) ya newer agents (Vedolizumab, Ustekinumab). Surgery: stricture resection, fistula surgery — kuch cases mein zaroori. Nutrition: Exclusive Enteral Nutrition (EEN) — children mein mucosal healing ke liye. Diet: specific carbohydrate diet, low-FODMAP — symptom management mein helpful.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Crohn's Disease",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Crohn's mein sabse important hai: early diagnosis aur aggressive treatment jab disease active ho. Sirf symptoms manage karna nahi — mucosal healing aur remission achieve karna. Ranchi mein main dekh raha hoon ki young patients saalon tak suffer karte hain bina sahi IBD diagnosis ke. Fecal calprotectin ek simple stool test hai jo IBD vs IBS differentiate karta hai — khaas karke agar 6 hafte se diarrhea hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. IBD ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kya Crohn's disease curable hai?",
        a: "Crohn's chronic condition hai — iska koi permanent cure abhi nahi. Lekin sahi treatment se long-term remission possible hai jisme patients normal life jee sakte hain. Modern biologics se outcomes dramatically better hue hain. Dr. Akhilesh Yadav Ranchi mein goal-based treatment dete hain — mucosal healing aur remission.",
      },
      {
        q: "Crohn's mein kya khaana chahiye?",
        a: "No universal Crohn's diet. Active flare mein: low-fiber, low-residue diet (white rice, white bread, cooked vegetables without skin). Remission mein: balanced nutrition — avoid trigger foods (individual basis). Fats: limited. Alcohol: avoid. Dr. Akhilesh Yadav Ranchi mein patient-specific diet counseling dete hain.",
      },
      {
        q: "Kya Crohn's mein surgery zaroor hoti hai?",
        a: "25-30% Crohn's patients ko life mein ek baar surgery lagti hai — stricture, fistula, abscess, perforation ke liye. Modern biologics ne surgery rate reduce kiya hai. Dr. Akhilesh Yadav Ranchi mein surgical team coordinate karte hain jab zaroor ho.",
      },
      {
        q: "Fecal calprotectin test kya hai?",
        a: "Stool mein inflammatory protein measure karta hai — IBD (Crohn's/Colitis) mein elevated, IBS mein normal. Colonoscopy se pehle ek non-invasive screening test. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein yeh test recommend karte hain chronic diarrhea assessment mein.",
      },
    ],
  },

  {
    slug: "colitis-doctor-ranchi",
    titleHi: "Colitis Doctor Ranchi — Ulcerative Colitis Specialist | Dr. Akhilesh Yadav",
    titleEn: "Colitis Doctor in Ranchi — Ulcerative Colitis Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein Ulcerative Colitis ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Bleeding diarrhea se remission tak — complete IBD care.",
    excerptEn: "Ulcerative colitis specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert diagnosis, treatment & long-term UC management for Jharkhand patients.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🏥",
    tags: ["colitis doctor ranchi", "ulcerative colitis ranchi", "IBD ranchi", "bloody diarrhea doctor ranchi", "gastroenterologist ranchi"],
    metaTitle: "Colitis Doctor Ranchi | Ulcerative Colitis | Dr. Akhilesh Yadav",
    metaDescription: "Ulcerative colitis specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert IBD diagnosis, mesalamine, biologics & long-term UC management.",
    sections: [
      {
        heading: "Ranchi Mein Colitis — Bleeding Diarrhea Ka Sahi Ilaj",
        type: "text",
        content: "Hazaribagh se aaye 32-saal ke Santosh — 4 mahine se har din 6-8 baar loose motions, blood ke saath. Weight 6 kg ghat gaya. Local doctor ne 'infection' bola aur antibiotics diye — koi faida nahi. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne colonoscopy ki: Ulcerative Colitis (pancolitis). Structured treatment se 3 mahine mein remission. Ulcerative Colitis (UC) India mein badh rahi hai — aur Ranchi mein bhi ek IBD specialist zaroori hai.",
      },
      {
        heading: "Ulcerative Colitis Kya Hai — Aur IBD Ka Fark",
        type: "text",
        content: "Ulcerative Colitis ek Inflammatory Bowel Disease (IBD) hai — colon (large intestine) ki mucosal lining mein chronic inflammation. Rectum se shuru hoti hai aur proximal direction mein extend ho sakti hai. Types: Proctitis (sirf rectum), Left-sided Colitis (descending colon), Pancolitis (poora colon). Crohn's vs UC: Crohn's — anywhere GI tract, full thickness, skip lesions. UC — sirf colon, mucosal, continuous. Alag diagnosis alag treatment demand karta hai — isliye colonoscopy with biopsy zaroori hai.",
      },
      {
        heading: "UC Ke Symptoms — Kab Doctor Zaroor",
        type: "list",
        content: "Ulcerative Colitis ke symptoms aur emergency signs:",
        list: [
          "Frequent diarrhea — often bloody, mucusy",
          "Urgency — toilet ki sudden zaroorat",
          "Tenesmus — toilet ke baad bhi incomplete lagta hai",
          "Abdominal cramps — mostly lower left",
          "Rectal bleeding aur mucus",
          "Fatigue aur anemia",
          "Emergency: >6 bloody stools/day, fever, rapid pulse — Fulminant Colitis, admit immediately",
        ],
      },
      {
        heading: "UC Ka Ilaj — Dr. Akhilesh Yadav Ka Protocol Ranchi Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein UC treatment step-wise dete hain. Mild-Moderate UC: Mesalamine (5-ASA) — oral + rectal (suppository/enema) combination. Most effective mild-moderate mein. Moderate-Severe UC: Corticosteroids — induction ke liye. Azathioprine/6-Mercaptopurine — maintenance. Severe UC/Refractory: Biologics — Infliximab, Vedolizumab. Tofacitinib (JAK inhibitor). Severe/Acute Severe UC: Hospital admission — IV steroids, monitoring, surgery evaluation. Surgery (Colectomy): medical therapy fail hone par ya dysplasia/cancer mein — colectomy UC ko 'cure' kar sakta hai.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Colitis",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'UC mein patients aksar apni medication band kar dete hain jab symptoms theek ho jaate hain. Yeh galat hai — UC mein maintenance therapy zaroori hai, nahi toh relapse hota hai. Aur long-term UC mein colon cancer screening bhi zaroori hai. Ranchi mein main regular follow-up ensure karta hoon apne UC patients ke saath.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. IBD ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Ulcerative Colitis aur Amoebic Dysentery mein kya fark hai?",
        a: "Dono mein bloody diarrhea hoti hai. Amoebic dysentery: infection (Entamoeba histolytica), acute onset, metronidazole se treat hoti hai. UC: chronic, immune-mediated, alag treatment. Stool examination aur colonoscopy se differentiate hota hai. Dr. Akhilesh Yadav Ranchi mein pehle infection rule out karte hain phir UC diagnose karte hain.",
      },
      {
        q: "Kya UC mein specific diet zaroori hai?",
        a: "Active flare mein: low-residue diet, avoid raw vegetables, seeds, nuts. Remission mein: balanced diet. Dairy: kuch UC patients lactose intolerant hote hain. Probiotics helpful ho sakte hain. Dr. Akhilesh Yadav Ranchi mein UC patients ke liye individualized diet guidance dete hain.",
      },
      {
        q: "UC mein pregnancy safe hai?",
        a: "Remission mein pregnancy safe hai. Active disease mein: risk badhta hai complications ka. Kuch UC medications (mesalamine) pregnancy safe hain. Azathioprine, steroids — doctor ke guidance mein. Dr. Akhilesh Yadav Ranchi mein UC patients ke liye pre-pregnancy counseling karte hain.",
      },
      {
        q: "UC mein colon cancer risk kitna hai?",
        a: "8+ saal ke extensive UC mein colon cancer risk badhta hai — normal population se zyada. Isliye surveillance colonoscopy zaroori hai: extensive UC mein 8-10 saal ke baad har 1-2 saal. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein UC patients ka cancer surveillance schedule maintain karte hain.",
      },
    ],
  },

  {
    slug: "digestive-disease-ranchi",
    titleHi: "Digestive Disease Ranchi — Paachan Rog Ke Specialist | Dr. Akhilesh Yadav",
    titleEn: "Digestive Disease Specialist in Ranchi — Expert GI Care | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein digestive diseases ke expert: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. GERD se liver cirrhosis tak — sabhi paachan rog ka advanced ilaj.",
    excerptEn: "Digestive disease specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert treatment for all GI diseases — GERD, IBD, liver, pancreas & more.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🏥",
    tags: ["digestive disease ranchi", "paachan rog ranchi", "GI disease ranchi", "gastrointestinal specialist ranchi", "gastroenterologist ranchi"],
    metaTitle: "Digestive Disease Specialist Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Digestive disease specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert GI care: all stomach, intestine, liver & pancreas conditions.",
    sections: [
      {
        heading: "Digestive Diseases — Ranchi Ka Growing Burden",
        type: "text",
        content: "Jharkhand mein digestive diseases ek major health burden hain. Fatty liver (NAFLD) — diabetes aur obesity ke saath badh raha hai. IBD (Crohn's, Colitis) — urbanization ke saath India mein increasing. Liver disease — Hepatitis B/C, alcoholic liver disease, cirrhosis. Colon polyps aur colon cancer — increasing 45+ age group mein. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — Jharkhand ke patients ke liye comprehensive digestive disease care provide karte hain. Ek dedicated GI specialist ka fayda: accurate diagnosis, evidence-based treatment, unnecessary procedures se bachao.",
      },
      {
        heading: "Common Digestive Diseases — Ranchi Mein",
        type: "list",
        content: "Orchid Medical Centre Ranchi mein Dr. Akhilesh Yadav yeh digestive diseases treat karte hain:",
        list: [
          "GERD / Acid Reflux — chronic seene ki jalan, Barrett's Esophagus",
          "Peptic Ulcer — H. Pylori-related, NSAID-induced",
          "IBS (Irritable Bowel Syndrome) — functional gut disorder",
          "IBD (Crohn's Disease, Ulcerative Colitis) — immune-mediated",
          "Fatty Liver (NAFLD/NASH) — metabolic liver disease",
          "Hepatitis B/C — viral liver disease",
          "Liver Cirrhosis — with ascites, varices, encephalopathy",
          "Pancreatitis — acute aur chronic",
          "Colon polyps aur colorectal cancer screening",
          "Celiac Disease — gluten intolerance",
        ],
      },
      {
        heading: "Advanced Procedures — Orchid Medical Centre Ranchi",
        type: "text",
        content: "Dr. Akhilesh Yadav ke paas Orchid Medical Centre Ranchi mein Jharkhand ke limited centers mein available advanced procedures hain: Endoscopy (OGD Scopy) — upper GI. Colonoscopy — colon cancer screening, polyp removal. ERCP — bile duct stones, stenting. EUS (Endoscopic Ultrasound) — pancreas/bile duct advanced imaging. FibroScan — liver fibrosis non-invasive staging. Capsule Endoscopy — small bowel imaging (referral). Yeh comprehensive setup ensure karta hai ki zyada tar digestive conditions ek hi jagah diagnose aur treat ho jayein — Ranchi mein hi.",
      },
      {
        heading: "Digestive Health Kaise Maintain Karein — General Tips",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein patients ko general digestive health guidance dete hain: Fiber: roz 25-30g — fruits, vegetables, daalein. Paani: 2.5-3 litre daily. Exercise: 30 min walk daily — gut motility improve hoti hai. Alcohol: minimum ya zero — liver health ke liye. NSAIDs: avoid regular use — ulcer aur GI bleeding risk. Stress management: gut-brain axis — stress directly digestive health affect karta hai. 45+ screening: saal mein ek baar LFT, blood sugar, colonoscopy har 10 saal. Early detection: GI symptoms 4+ hafte — doctor se milein, ignore mat karein.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Digestive Health",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Digestive diseases mein ek trend dekh raha hoon Ranchi mein — patients symptoms 6-12 mahine baad doctor ke paas aate hain. Jab aate hain toh condition advanced ho chuki hoti hai. GI symptoms early stage mein manageable hote hain — late stage mein complex. 4 hafte se zyada pet ki koi bhi problem — please specialist se milein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Celiac disease kya hai — aur Ranchi mein kaise diagnose hoti hai?",
        a: "Celiac disease: gluten (wheat, barley, rye) se immune reaction — small intestine damage. Symptoms: diarrhea, bloating, weight loss, anemia. Blood test: anti-tTG antibody. Confirm: small bowel biopsy (endoscopy se). Gluten-free diet — lifelong treatment. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein diagnose karte hain.",
      },
      {
        q: "SIBO (Small Intestinal Bacterial Overgrowth) kya hai?",
        a: "Small intestine mein normally kam bacteria hote hain — SIBO mein excess bacteria grow karte hain. Symptoms: bloating, gas, diarrhea. Diagnosis: hydrogen breath test. Treatment: antibiotics (rifaximin). Dr. Akhilesh Yadav IBS-like symptoms mein SIBO rule out karte hain Ranchi mein.",
      },
      {
        q: "Kya digestive problems mental health se connected hain?",
        a: "Haan — gut-brain axis bidirectional hai. Anxiety/depression IBS worsen karte hain. IBS patients mein anxiety rates zyada hain. Stress acute GI flares trigger kar sakta hai IBD mein. Dr. Akhilesh Yadav Ranchi mein mental health aspects bhi discuss karte hain chronic GI disease management mein.",
      },
      {
        q: "Blood in stool kab emergency hai?",
        a: "Emergency: massive bright red bleeding (large amount), black tarry stool (melena — upper GI bleeding), dizziness/fainting ke saath bleeding. Non-emergency lekin zaroor doctor dikhayein: small amounts of blood, on toilet paper, no other symptoms. Dr. Akhilesh Yadav Ranchi mein emergency ya OPD — severity ke hisaab se guide karte hain.",
      },
    ],
  },

  {
    slug: "pet-dard-doctor-ranchi",
    titleHi: "Pet Dard Doctor Ranchi — Abdominal Pain Specialist | Dr. Akhilesh Yadav",
    titleEn: "Abdominal Pain Doctor in Ranchi — Pet Dard Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein pet dard (abdominal pain) ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Chronic ya severe pet dard ka sahi diagnosis aur ilaj.",
    excerptEn: "Abdominal pain specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Correct diagnosis & treatment for all types of stomach & abdominal pain.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🩺",
    tags: ["pet dard doctor ranchi", "abdominal pain ranchi", "stomach pain specialist ranchi", "gastroenterologist ranchi", "pet ki samasya ranchi"],
    metaTitle: "Pet Dard Doctor Ranchi | Abdominal Pain | Dr. Akhilesh Yadav",
    metaDescription: "Abdominal pain specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Correct diagnosis & treatment for acute & chronic stomach pain.",
    sections: [
      {
        heading: "Pet Mein Dard — Kabhi Aam, Kabhi Serious",
        type: "text",
        content: "Pet mein dard (abdominal pain) — bahut common complaint hai Ranchi aur Jharkhand mein. Kuch cases mein: gas ya indigestion se mild discomfort. Kuch cases mein: kidney stone emergency. Kuch mein: appendicitis — operation zaroori. Kuch mein: liver ya pancreas ki serious problem. Orchid Medical Centre Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — systematic approach se abdominal pain assess karte hain — location, character, duration, associated symptoms — aur sahi diagnosis nikaalte hain.",
      },
      {
        heading: "Pet Dard Ka Location — Kya Batata Hai",
        type: "list",
        content: "Abdominal pain location se possible diagnosis:",
        list: [
          "Upper right (right hypochondrium): liver, gallbladder, bile duct — jaundice, gallstone colic",
          "Upper left (left hypochondrium): spleen, stomach, colon (splenic flexure)",
          "Upper center (epigastric): stomach, duodenum, pancreas — ulcer, GERD, pancreatitis",
          "Right lower (right iliac fossa): appendix, terminal ileum (Crohn's), ovary (women)",
          "Left lower (left iliac fossa): sigmoid colon, diverticulitis, ovary",
          "Lower center (hypogastric): bladder, uterus, rectum",
          "Diffuse (everywhere): peritonitis, IBS, generalized infection",
        ],
      },
      {
        heading: "Emergency Pet Dard — Kab Turant Hospital Jayein",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke patients ko clearly batate hain — yeh signs emergency hain: Sudden severe 'worst pain of life' — perforated ulcer, ruptured ectopic, mesenteric ischemia. Rigidity (peth board jaisa sakht) — peritonitis. Blood in vomit ya stool + severe pain — GI bleeding. Fever + severe right upper pain — cholangitis. Pain after trauma — internal injury. Severe pain with rapid deterioration. In cases mein: immediately nearest emergency room ya hospital. Diagnosis baad mein, safety pehle.",
      },
      {
        heading: "Chronic Pet Dard — Dr. Akhilesh Yadav Ka Diagnostic Approach",
        type: "text",
        content: "Chronic abdominal pain (3+ mahine) mein Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein karte hain: Detailed history aur physical examination. Blood tests: CBC, LFT, RFT, Lipase/Amylase, thyroid, blood sugar. Stool tests: occult blood, calprotectin, H. Pylori antigen. Ultrasound abdomen — pehli line imaging. CT scan ya MRI — zyada detail ke liye zaroor hone par. Endoscopy ya Colonoscopy — suspected GI source mein. Yeh systematic approach ensure karta hai ki chronic pain ka cause correctly identify ho — unnecessary surgery ya medications se bachao.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Pet Dard",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Pet mein dard — sirf pain killer mat lo aur ignore mat karo. Kuch conditions mein pain killer temporarily dard chhupa deti hai aur serious condition miss ho jaati hai. Chronic pain mein diagnosis pehle — phir treatment. Ranchi mein main roz aisa dekhta hoon ki correct diagnosis se patient ki problem ki root cause solve hoti hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Pet dard ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Gallstone pain kaisa hota hai?",
        a: "Biliary colic: sudden onset, severe right upper abdominal pain — back ya right shoulder tak jaata hai. Fatty food ke baad trigger. Nausea/vomiting ke saath. 30 min se 4-6 ghante tak reh sakta hai. Ultrasound se gallstones diagnose hote hain. Dr. Akhilesh Yadav Ranchi mein gallstone management guide karte hain.",
      },
      {
        q: "Appendicitis pain kaisa hota hai?",
        a: "Classically: navel ke around dard shuru hota hai, phir right lower abdomen mein shift. Fever, nausea, vomiting ke saath. Walking se worse. Surgical emergency hai — appendectomy. Dr. Akhilesh Yadav emergency mein surgical team ko refer karte hain Orchid Medical Centre Ranchi se.",
      },
      {
        q: "Period (menstrual) pain aur appendicitis mein kaise differentiate karein?",
        a: "Period pain: cyclic, predictable timing, responds to NSAIDs. Appendicitis: acute onset, fever, right lower abdomen specifically, nausea. Doubt mein — doctor se milein immediately. Ultrasound ya CT scan se differentiate hota hai. Dr. Akhilesh Yadav Ranchi mein appropriate diagnosis karte hain.",
      },
      {
        q: "Stress se pet mein dard ho sakta hai?",
        a: "Haan — stress visceral hypersensitivity badhaata hai. IBS patients mein stress ke saath cramping aur diarrhea common hai. Functional abdominal pain (no organic cause) bhi anxiety se related hoti hai. Lekin organic causes rule out karna zaroori hai — phir psychosomatic causes address. Dr. Akhilesh Yadav Ranchi mein dono aspects address karte hain.",
      },
    ],
  },

  {
    slug: "kala-pakhana-doctor-ranchi",
    titleHi: "Kala Paakhana Doctor Ranchi — Black Stool Specialist | Dr. Akhilesh Yadav",
    titleEn: "Black Stool (Kala Paakhana) Doctor in Ranchi — GI Bleeding | Dr. Akhilesh Yadav",
    excerptHi: "Kala paakhana (black/tarry stool) — upper GI bleeding ka sign. Ranchi mein Dr. Akhilesh Yadav — Orchid Medical Centre — emergency endoscopy aur complete GI bleeding management.",
    excerptEn: "Black stool (melena/kala paakhana) in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Emergency upper GI bleeding diagnosis & endoscopic treatment.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🚨",
    tags: ["kala pakhana ranchi", "black stool ranchi", "GI bleeding ranchi", "melena ranchi", "gastroenterologist ranchi"],
    metaTitle: "Kala Paakhana Doctor Ranchi | GI Bleeding | Dr. Akhilesh Yadav",
    metaDescription: "Kala paakhana (black stool/melena) in Ranchi — upper GI bleeding emergency. Dr. Akhilesh Yadav at Orchid Medical Centre for urgent endoscopy & treatment.",
    sections: [
      {
        heading: "IMPORTANT: Kala Paakhana — Emergency Sign",
        type: "warning",
        content: "⚠️ Kala, tarry, sticky, foul-smelling stool (Melena) — upper gastrointestinal (GI) bleeding ka sign hai. Yeh emergency hai. Turant hospital jayein — Dr. Akhilesh Yadav ya nearest emergency room. Delay life-threatening ho sakta hai. Is article mein symptoms, causes aur treatment explain hai — lekin agar kala paakhana ho raha hai ABHI toh pehle medical help lein.\n\nOrchid Medical Centre, HB Road, Ranchi: +91 74919 25047.",
      },
      {
        heading: "Kala Paakhana — Kya Hota Hai Aur Kyon",
        type: "text",
        content: "Melena (kala paakhana) ka matlab: blood jo upper GI tract (esophagus, stomach, duodenum) mein hai woh digestion process se guzarta hai. Blood hemoglobin + bowel bacteria → digested → kala/tarry stool banta hai. Kala paakhana = khoon esophagus, stomach, ya small intestine ke pehle hisse se aa raha hai. Bright red rectal bleeding = lower GI (colon/rectum) — kuch alag causes. Ranchi mein Dr. Akhilesh Yadav emergency mein endoscopy se bleeding source locate karte hain.",
      },
      {
        heading: "Kala Paakhana Ke Causes",
        type: "list",
        content: "Upper GI bleeding ke common causes (kala paakhana):",
        list: [
          "Peptic Ulcer (most common) — duodenal ya gastric ulcer se bleeding",
          "Esophageal Varices — liver cirrhosis mein dilated veins rupt hoti hain — severe",
          "Mallory-Weiss Tear — severe vomiting ke baad esophageal junction mein tear",
          "Erosive Gastritis — NSAIDs, alcohol, stress se stomach lining damage",
          "Esophagitis — severe acid damage ya pill-induced",
          "Gastric/Esophageal Cancer — advanced cases mein bleeding",
          "Iron supplements — iron tablets se black stool (non-urgent, non-tarry)",
        ],
      },
      {
        heading: "Emergency Management — Dr. Akhilesh Yadav Ka Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein upper GI bleeding emergency mein karte hain: Stabilization: IV access, blood pressure monitoring, IV fluids, blood transfusion agar zaroor. IV PPI (pantoprazole infusion) — acid suppress karna, clot protect karna. Risk stratification: Glasgow-Blatchford Score — decide karta hai urgent endoscopy vs wait. Urgent Endoscopy (within 24 hours, often sooner): bleeding source locate karna. Endoscopic therapy: injection (epinephrine), thermal (APC), clips — bleeding control. Varices mein: Band Ligation ya Sclerotherapy. Post-endoscopy: PPI course, address underlying cause (ulcer treatment, cirrhosis management).",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — GI Bleeding",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Kala paakhana dekhkar log ghabra jaate hain — aur sahi bhi hai. Yeh emergency hai. Lekin aaj endoscopy se zyada tar GI bleeding endoscopically control ho jaati hai — surgery ki zaroorat bahut kam cases mein. Ranchi mein Orchid Medical Centre mein urgent endoscopy facility available hai. Delay mat karein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Kala paakhana mein turant medical help lein — emergency hai.\n\nEmergency Contact: +91 74919 25047 ya nearest hospital emergency room.",
      },
    ],
    faqs: [
      {
        q: "Iron tablet lene se kala paakhana hota hai — kya yeh normal hai?",
        a: "Haan — iron supplements se stool dark/black ho jaata hai. Lekin yeh non-tarry hota hai (shiny/sticky nahi) aur foul smell nahi hoti. Doubt hone par — doctor se confirm karein. Dr. Akhilesh Yadav Ranchi mein iron-induced vs melena differentiate karte hain.",
      },
      {
        q: "Kala paakhana ke saath chakkar ya behooshi — kya karein?",
        a: "Yeh significant blood loss ka sign hai — emergency. Turant nearest hospital emergency room jayein ya 108 ambulance call karein. Sit/lie down immediately — gir na jaayein. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein emergencies immediately attend karte hain.",
      },
      {
        q: "Upper GI bleeding mein kya khana safe hai?",
        a: "Active bleeding mein NPO (kuch nahi) — endoscopy se pehle. Endoscopy ke baad: soft bland diet se start. Liquids pehle. Solid food gradually. Ulcer mein: PPI course ke saath avoid NSAIDs, alcohol. Dr. Akhilesh Yadav Ranchi mein post-discharge diet clearly guide karte hain.",
      },
      {
        q: "Kya endoscopy se bleeding permanently theek ho jaati hai?",
        a: "Endoscopic treatment bleeding episode control karta hai. Underlying cause ka treatment zaroor: ulcer mein H. Pylori treat karo, NSAIDs band karo. Cirrhosis mein varices — regular banding sessions + liver management. Without treating cause — rebleeding possible. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein long-term plan dete hain.",
      },
    ],
  },

  // ── BATCH 8: BLOGS 36–40 ─────────────────────────────────────────────────────

  {
    slug: "gas-problem-doctor-ranchi",
    titleHi: "Gas Problem Doctor Ranchi — Bloating & Gas Ka Ilaj | Dr. Akhilesh Yadav",
    titleEn: "Gas Problem Doctor in Ranchi — Bloating & Flatulence Treatment | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein gas problem aur bloating ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Gas ke causes, diet tips aur medical treatment.",
    excerptEn: "Gas problem & bloating specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Causes, diet guide & medical treatment for chronic gas & flatulence.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "💨",
    tags: ["gas problem doctor ranchi", "bloating ranchi", "gas ki samasya ranchi", "gastroenterologist ranchi", "pet fulana ranchi"],
    metaTitle: "Gas Problem Doctor Ranchi | Bloating | Dr. Akhilesh Yadav",
    metaDescription: "Gas problem & bloating treatment in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Diagnosis, diet tips & medical care for chronic flatulence & bloating.",
    sections: [
      {
        heading: "Gas Problem — Aam Nahi Hai Agar Chronic Ho",
        type: "text",
        content: "Ranchi ke Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — roz 5-6 gas problem ke patients dekhte hain. Zyada tar log sochte hain 'thoda gas problem sabko hota hai' — aur wait karte rehte hain. Lekin chronic bloating, excess gas, ya abdominal distension kabhi kabhi kisi underlying condition ka sign hoti hai: IBS, SIBO (Small Intestinal Bacterial Overgrowth), celiac disease, lactose intolerance, ya kabhi kabhi colon conditions. Ranchi mein sahi diagnosis zaroori hai.",
      },
      {
        heading: "Gas Problem Ke Karan — Ranchi Ke Context Mein",
        type: "list",
        content: "Gas problem ke common aur less-known causes:",
        list: [
          "Zyada gas produce karne wali foods: rajma, chole, dal (fermentable carbs)",
          "Lactose Intolerance: doodh, chai mein doodh — gas, bloating, loose motions",
          "SIBO (Small Intestinal Bacterial Overgrowth): excess bacteria gas produce karte hain",
          "IBS (Irritable Bowel Syndrome): visceral hypersensitivity — normal gas bhi zada lagta hai",
          "Constipation: gas pass nahi hoti — bloating badhti hai",
          "Swallowing air (aerophagia): jaldi khaana, carbonated drinks",
          "Celiac Disease: gluten se small intestine damage — fermentation increased",
          "Gastroparesis: stomach emptying slow — gas aur bloating",
        ],
      },
      {
        heading: "Diagnosis — Gas Problem Mein Kab Doctor Zaroor",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein gas problem assessment mein karte hain: Detailed dietary history — kaun sa food trigger hai. Lactose intolerance test: hydrogen breath test ya trial of lactose elimination. H. Pylori test — gastric symptoms ke saath. SIBO assessment: hydrogen breath test. Stool calprotectin — IBS vs IBD differentiate. Colonoscopy ya Endoscopy — agar warning signs hain: rectal bleeding, weight loss, age 50+. Alarm symptoms ke saath gas problem: investigate karo. Simple bloating bina red flags ke: diet aur lifestyle se pehle manage.",
      },
      {
        heading: "Gas Problem Ka Ilaj — Dr. Akhilesh Yadav Ka Plan",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke gas patients ke liye: Dietary approach: Low-FODMAP trial (6-8 hafte) — fermentable carbs temporarily reduce. Ranchi mein avoid: rajma, chole, gobhi, broccoli, apple, mango zyada. Safe: plain rice, banana, potato (boiled), carrot, cucumber. Lactose intolerance: lactose-free milk ya doodh band karo trial ke liye. SIBO treatment: Rifaximin (antibiotic) — gut bacteria reset karta hai. IBS mein gas: antispasmodics + peppermint oil capsules — evidence-based. Probiotics: specific strains gas reduce karte hain. Lifestyle: dhire khaana, carbonated drinks avoid, post-meal walk.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Gas Problem",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Gas problem common hai — lekin chronic, daily bloating jo quality of life affect kare, woh investigate karna chahiye. Ranchi mein main frequently IBS aur SIBO diagnose karta hoon jinhe gas problem samjha ja raha tha. Correct diagnosis se correct treatment milti hai. Antiflatulents sirf temporary relief deti hain — cause treat nahi hota.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kya dahi ya chhachh se gas hoti hai?",
        a: "Plain dahi (curd) aur chhachh generally gas nahi banate — in fact probiotics hote hain jo gut health improve karte hain. Lekin severe lactose intolerance mein even fermented dairy bhi trigger ho sakti hai. Dr. Akhilesh Yadav Ranchi mein individual assessment karte hain.",
      },
      {
        q: "Hing aur ajwain se gas theek hoti hai — kya sach hai?",
        a: "Haan — hing (asafoetida) aur ajwain (carom seeds) traditional anti-flatulents hain. Kuch evidence hai ki yeh mild carminatives hain. Temporary/mild gas mein helpful ho sakte hain. Lekin chronic bloating mein sirf yahi nahi chalega — proper evaluation zaroori hai.",
      },
      {
        q: "SIBO kya hai aur Ranchi mein kaise diagnose hoti hai?",
        a: "SIBO mein small intestine mein excess bacteria gas produce karte hain — bloating, diarrhea. Diagnosis: hydrogen breath test (lactulose ya glucose). Treatment: Rifaximin (non-absorbable antibiotic). Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein SIBO evaluate karte hain.",
      },
      {
        q: "Lactose intolerance aur milk allergy mein kya fark hai?",
        a: "Lactose intolerance: enzyme deficiency — lactose digest nahi hoti — gas, bloating, diarrhea (no immune reaction). Milk allergy: immune-mediated — hives, breathing difficulty, anaphylaxis possible. Lactose intolerance common hai Indians mein. Dr. Akhilesh Yadav Ranchi mein differentiate karte hain.",
      },
    ],
  },

  {
    slug: "ulti-ka-doctor-ranchi",
    titleHi: "Ulti Ka Doctor Ranchi — Nausea & Vomiting Specialist | Dr. Akhilesh Yadav",
    titleEn: "Nausea & Vomiting Doctor in Ranchi — GI Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein baar baar ulti aur nausea ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Causes, diagnosis aur effective treatment.",
    excerptEn: "Nausea & vomiting specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert GI diagnosis & treatment for all causes of chronic nausea & vomiting.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🩺",
    tags: ["ulti ka doctor ranchi", "nausea vomiting ranchi", "chronic vomiting ranchi", "gastroenterologist ranchi", "GI specialist ranchi"],
    metaTitle: "Ulti Ka Doctor Ranchi | Nausea Vomiting | Dr. Akhilesh Yadav",
    metaDescription: "Nausea & vomiting specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert diagnosis & treatment for all causes of chronic nausea & vomiting.",
    sections: [
      {
        heading: "Ulti — Kab Common Hai, Kab Serious",
        type: "text",
        content: "Ek baar ulti — food poisoning, motion sickness, pregnancy — common hai. Lekin chronic nausea ya recurrent vomiting ek underlying GI problem signal kar sakta hai. Orchid Medical Centre Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — systematic approach se nausea/vomiting ke cause assess karte hain. Ranchi mein patients baar baar antiemetics (ulti ki dawa) lete hain bina cause jaane — yeh sirf masking hai, treating nahi.",
      },
      {
        heading: "Ulti Ke GI Causes — Gastroenterologist Ka Domain",
        type: "list",
        content: "GI-related nausea/vomiting ke common causes:",
        list: [
          "Gastroparesis: stomach emptying slow — nausea, vomiting (often undigested food), bloating",
          "GERD/Peptic Ulcer: acid-related — nausea post-meals",
          "H. Pylori Infection: chronic gastritis — nausea, early satiety",
          "Intestinal Obstruction: sudden vomiting, no gas — emergency",
          "Acute Pancreatitis: severe vomiting + upper abdominal pain",
          "Liver failure / Hepatitis: nausea prominent symptom",
          "Cyclic Vomiting Syndrome: recurrent severe vomiting episodes",
          "Medications: NSAIDs, antibiotics, iron tablets — GI side effects",
        ],
      },
      {
        heading: "Emergency — Kab Turant Hospital",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi ke patients ko warn karte hain — yeh signs emergency hain: Khoon ki ulti (hematemesis) — bright red ya coffee grounds. Ulti mein bile (green/yellow) — obstruction ya serious disease. Severe dehydration — mouth dry, sunken eyes, no urine. Severe abdominal pain + vomiting — peritonitis, pancreatitis, obstruction. Neurological symptoms + vomiting — brain cause (meningitis, brain tumor). Vomiting after head injury. In cases mein: turant hospital emergency room.",
      },
      {
        heading: "Diagnosis — Dr. Akhilesh Yadav Ka Approach Nausea/Vomiting Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein nausea/vomiting ke cause assess karne ke liye karte hain: History: duration, pattern, what triggers, associated symptoms, medications, pregnancy status. Blood tests: CBC, LFT, RFT, blood sugar, amylase/lipase, thyroid. Urine pregnancy test: reproductive age women mein. Imaging: X-ray abdomen (obstruction check), ultrasound. Endoscopy: chronic nausea + alarm symptoms mein. Gastric emptying study: gastroparesis suspected mein. Yeh structured approach ensure karta hai ki cause miss na ho.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Nausea & Vomiting",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main dekhta hoon ki patients chronic nausea ke saath mahino tak antiemetics lete hain bina doctor ke. Kuch cases mein gastroparesis nikalta hai, kuch mein H. Pylori, kuch mein anxiety-related. Sab ka treatment alag hai. Diagnosis pehle — phir dawa.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Chronic nausea ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Gastroparesis kya hai?",
        a: "Stomach ki muscles properly contract nahi karte — emptying slow ho jaata hai. Nausea, vomiting (often hours after eating), bloating, early satiety. Common causes: diabetes, post-viral, medications. Diagnosis: gastric emptying study. Treatment: prokinetics (domperidone, metoclopramide), diet (small frequent meals, low fiber, low fat). Dr. Akhilesh Yadav Ranchi mein diagnose aur manage karte hain.",
      },
      {
        q: "Ulti mein khoon aaye toh kya karein?",
        a: "Yeh emergency hai — turant hospital jayein ya ambulance call karein. Upper GI bleeding ka sign hai (peptic ulcer, esophageal varices, Mallory-Weiss tear). Orchid Medical Centre Ranchi mein Dr. Akhilesh Yadav emergency endoscopy karte hain.",
      },
      {
        q: "Pregnancy mein ulti kab serious hoti hai?",
        a: "Mild morning sickness first trimester mein common hai — diet aur small meals se manage. Hyperemesis Gravidarum (severe vomiting, weight loss, dehydration) mein IV fluids aur antiemetics zaroori. OB/GYN aur gastroenterologist coordinate karte hain severe cases mein.",
      },
      {
        q: "Kya stress se ulti ho sakti hai?",
        a: "Haan — severe anxiety ya stress mein psychogenic vomiting ho sakti hai. Gut-brain axis direct link hai. Cyclic Vomiting Syndrome bhi stress-triggered ho sakta hai. Organic causes rule out karne ke baad — anxiety management, biofeedback helpful hote hain. Dr. Akhilesh Yadav Ranchi mein assess karte hain.",
      },
    ],
  },

  {
    slug: "jharkhand-mein-gastroenterologist",
    titleHi: "Jharkhand Mein Gastroenterologist — DM GI Doctor | Dr. Akhilesh Yadav Ranchi",
    titleEn: "Gastroenterologist in Jharkhand — Dr. Akhilesh Yadav | Ranchi's Top GI Specialist",
    excerptHi: "Jharkhand mein DM Gastroenterologist kaun hain? Dr. Akhilesh Yadav — Orchid Medical Centre, Ranchi — Jharkhand ke patients ke liye advanced GI care. Endoscopy, ERCP, EUS available.",
    excerptEn: "Top gastroenterologist in Jharkhand — Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi. Serving all of Jharkhand with advanced GI care — endoscopy, colonoscopy, ERCP & more.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🗺️",
    tags: ["jharkhand mein gastroenterologist", "gastroenterologist jharkhand", "GI specialist jharkhand", "DM gastroenterologist jharkhand", "Ranchi gastro doctor"],
    metaTitle: "Gastroenterologist in Jharkhand | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Best gastroenterologist in Jharkhand — Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi. Advanced GI care for all of Jharkhand — endoscopy, ERCP, EUS.",
    sections: [
      {
        heading: "Jharkhand Mein GI Care — Challenge Aur Solution",
        type: "text",
        content: "Jharkhand ek aisa state hai jahan specialist doctors ki sankhya national average se kam hai — khaas karke super-specialists jaise DM Gastroenterologists. Deoghar, Giridih, Hazaribagh, Bokaro, Dhanbad, Jamshedpur, Palamu — in cities se patients pehle Ranchi, phir agle step mein Patna ya Kolkata ya Delhi jaate hain. Orchid Medical Centre, HB Road, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — Jharkhand ke patients ke liye advanced GI care provide karte hain — taaki sabse zyada baar woh apne state mein hi theek ho sakein.",
      },
      {
        heading: "Jharkhand Ke Kaunse Districts Se Patients Aate Hain?",
        type: "list",
        content: "Dr. Akhilesh Yadav ke paas Jharkhand ke yeh districts se patients aate hain:",
        list: [
          "Ranchi — city aur adjoining areas",
          "Bokaro — HEC area, Chas, Sector areas",
          "Hazaribagh — district headquarters aur rural",
          "Dhanbad — Jharia, Sindri, coal belt areas",
          "Jamshedpur — TISCO area, Adityapur",
          "Deoghar — yatri aur local patients",
          "Giridih, Ramgarh, Lohardaga, Gumla — district patients",
          "Bihar border districts — Aurangabad, Gaya se bhi patients",
          "Chhattisgarh border areas se bhi kuch cases",
        ],
      },
      {
        heading: "Jharkhand Specific Health Issues — Gastro Context",
        type: "text",
        content: "Dr. Akhilesh Yadav Jharkhand ke specific GI health patterns note karte hain: Hepatitis B prevalence: Jharkhand mein national average se zyada — tattooing practices, unsterilized medical procedures, awareness kam. H. Pylori infection: water quality issues — piped water availability rural mein kam hai, contamination risk zyada. Alcohol-related liver disease: coal belt areas mein common. Jaundice (Hepatitis A/E): monsoon mein outbreaks — contaminated water. Colon cancer: increasing urban population mein. Malnutrition-related GI issues: tribal areas mein still prevalent.",
      },
      {
        heading: "Orchid Medical Centre — Jharkhand Ka Advanced GI Centre",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, HB Road, Ranchi ko Jharkhand ka advanced GI facility bana rahe hain. Available procedures: Upper GI Endoscopy, Colonoscopy, ERCP (bile duct), EUS (Endoscopic Ultrasound), FibroScan (liver assessment), Liver Biopsy (ultrasound-guided). Kya nahi jana padta Jharkhand se bahar: routine endoscopy-colonoscopy — Orchid Ranchi mein. ERCP — Orchid Ranchi mein. EUS — Orchid Ranchi mein. Liver cirrhosis management — Orchid Ranchi mein. Advanced liver transplant evaluation — coordination se Kolkata/Delhi.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ka Mission — Jharkhand Mein GI Care",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Jharkhand ke patients ka ek bada problem yeh hai ki specialist care ke liye Ranchi se bahar jaana padta tha. Main chahta hoon ki Orchid Medical Centre, Ranchi ek aisa center bane jahan se sirf critical cases hi refer hoon — baaki sab yahan ho sake. Jharkhand ke har patient ko world-class GI care milni chahiye.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Jharkhand mein DM Gastroenterologist kitne hain?",
        a: "Jharkhand mein DM (Doctorate of Medicine) Gastroenterologists ki sankhya bahut limited hai — statewide double digits mein hi hain. Dr. Akhilesh Yadav Ranchi ke prominent DM Gastroenterologists mein hain Orchid Medical Centre mein.",
      },
      {
        q: "Kya Jharkhand ke patients ko ERCP ke liye Ranchi aana padta hai?",
        a: "Haan — ERCP (Endoscopic Retrograde Cholangiopancreatography) ek advanced procedure hai jo Jharkhand mein limited centers mein available hai. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav ERCP karte hain. Bokaro, Dhanbad, Hazaribagh se patients Ranchi aate hain.",
      },
      {
        q: "Jamshedpur ya Bokaro se Ranchi kitne ghante mein pahuncha ja sakta hai?",
        a: "Jamshedpur se Ranchi: NH33 se ~3-3.5 ghante (130 km). Bokaro se: ~1.5-2 ghante (75 km). Hazaribagh se: ~1.5 ghante (80 km). Dhanbad se: ~2.5 ghante (150 km). Orchid Medical Centre HB Road Ranchi — city center mein accessible location.",
      },
      {
        q: "Kya AIIMS Ranchi ya Rajendra Institute mein gastro care milti hai?",
        a: "AIIMS Ranchi mein gastroenterology department hai — government facility, waiting time zyada ho sakta hai. Rajendra Institute mein bhi. Private practice mein Dr. Akhilesh Yadav Orchid Medical Centre mein — faster appointment, personalized care, advanced procedures available. Dono options ka apna role hai.",
      },
    ],
  },

  {
    slug: "bokaro-mein-gastroenterologist",
    titleHi: "Bokaro Mein Gastroenterologist — Ranchi Mein Dr. Akhilesh Yadav",
    titleEn: "Gastroenterologist Near Bokaro — Dr. Akhilesh Yadav in Ranchi",
    excerptHi: "Bokaro se Ranchi mein gastroenterologist: Dr. Akhilesh Yadav — Orchid Medical Centre. Bokaro ke patients ke liye Ranchi mein advanced GI care — 1.5 ghante mein.",
    excerptEn: "Gastroenterologist near Bokaro — Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi. Serving Bokaro patients with advanced endoscopy, colonoscopy & expert GI care.",
    category: "conditions",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🗺️",
    tags: ["bokaro mein gastroenterologist", "gastroenterologist near bokaro", "bokaro stomach doctor", "bokaro liver doctor", "ranchi GI specialist"],
    metaTitle: "Gastroenterologist Near Bokaro | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Gastroenterologist near Bokaro — Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi (~75km). Advanced GI care: endoscopy, colonoscopy, ERCP & expert hepatology.",
    sections: [
      {
        heading: "Bokaro Ke Patients Ke Liye — Ranchi Mein Sahi GI Specialist",
        type: "text",
        content: "Bokaro Steel City — Jharkhand ka industrial heart. HEC, SAIL, coal belt workers aur unke parivaar ke liye quality healthcare access ek challenge raha hai specialist care mein. Bokaro se Ranchi: approximately 75 km, NH33 se 1.5-2 ghante. Orchid Medical Centre, HB Road, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — Bokaro ke patients ke liye advanced GI care provide karte hain. Bokaro ke General Hospital ya local doctors se refer hoke bhi patients aate hain. Endoscopy, ERCP, EUS, colonoscopy — sab available hai Ranchi mein.",
      },
      {
        heading: "Bokaro Ke Patients Ko Dr. Akhilesh Yadav Kyun Choose Karein",
        type: "list",
        content: "Bokaro se Ranchi journey justify karne ke reasons:",
        list: [
          "DM Gastroenterology — highest GI qualification in India",
          "ERCP available — bile duct stones, pancreatitis cases ke liye",
          "EUS (Endoscopic Ultrasound) — pancreas, bile duct detailed imaging",
          "FibroScan — liver fibrosis non-invasive assessment",
          "One-stop GI center — multiple trips nahi karni padti",
          "Hindi consultation — Jharkhand ke patients ka comfort",
          "Ranchi mein reasonable cost vs Kolkata ya Delhi",
          "Same day appointment availability — urgent cases mein",
        ],
      },
      {
        heading: "Bokaro Mein Common GI Conditions — Aur Ranchi Mein Solution",
        type: "text",
        content: "Bokaro ke steel plant workers aur unke families mein kuch GI conditions common hain: Alcoholic Liver Disease: industrial area mein alcohol consumption — liver cirrhosis common. Fatty Liver: sedentary jobs + high calorie diet — NAFLD prevalent. Peptic Ulcer: workplace stress + NSAID use (joint pain ke liye). Jaundice: Bokaro mein bhi contaminated water issues — Hepatitis A/E. Colorectal screening: 45+ Bokaro ke workers — colon cancer screening neglected. In sab ke liye, Ranchi mein Orchid Medical Centre ek visit mein sahi diagnosis aur treatment plan milta hai.",
      },
      {
        heading: "Bokaro Se Ranchi — Travel Guide",
        type: "text",
        content: "Bokaro se Orchid Medical Centre, HB Road, Ranchi: Route: Bokaro → Ramgarh → Ranchi via NH33 — approximately 75 km. Time: 1.5-2 ghante by car/cab. Train: Bokaro Steel City → Hatia (Ranchi) — regular trains available. Orchid Medical Centre HB Road Ranchi mein Google Maps par easily find ho jaata hai. Appointment ke liye pehle call karein: +91 74919 25047 — same day ya next day usually available. Morning appointment preferred — same day wapas Bokaro pahunch sakte hain.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ka Sandesh Bokaro Ke Patients Ko",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Bokaro se baar baar patients aate hain — pehle refer se, ab directly. Mujhe khushi hai ki Jharkhand ke industrial area ke patients Ranchi mein sahi care pa rahe hain. ERCP jaise procedures ke liye Kolkata ya Delhi nahi jaana padta ab Bokaro ke patients ko — Ranchi mein hi ho jaata hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Bokaro mein koi DM gastroenterologist hai?",
        a: "Bokaro mein currently DM Gastroenterologist ki availability limited hai. Bokaro General Hospital mein GI services hain, lekin advanced procedures ke liye Ranchi refer kiya jaata hai. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein — Bokaro patients ke most accessible DM Gastroenterologist.",
      },
      {
        q: "Bokaro se Orchid Medical Centre kaise pahunchein?",
        a: "NH33 se Bokaro → Ramgarh → Ranchi — approximately 75 km, 1.5-2 ghante. Google Maps par 'Orchid Medical Centre HB Road Ranchi' search karein. Train bhi option hai — Bokaro Steel City station se Hatia ya Ranchi station.",
      },
      {
        q: "Kya Bokaro ke patients ke liye ambulance service available hai?",
        a: "Emergency cases mein 108 Jharkhand ambulance service Bokaro se Ranchi tak available hai. Orchid Medical Centre se pehle call karein emergency mein — +91 74919 25047 — proper preparation ensure ki ja sakti hai arrival se pehle.",
      },
      {
        q: "Colonoscopy ke liye Bokaro se Ranchi aana padega kya?",
        a: "Haan — colonoscopy ke liye Orchid Medical Centre, Ranchi aana padega. Ek din ki visit hai typically — bowel prep ghar pe (previous day), procedure Orchid mein, same day ya overnight stay. Dr. Akhilesh Yadav Bokaro ke patients ke liye convenient scheduling karte hain.",
      },
    ],
  },

  {
    slug: "jamshedpur-se-ranchi-gastroenterologist",
    titleHi: "Jamshedpur Se Ranchi Gastroenterologist — Dr. Akhilesh Yadav | GI Care",
    titleEn: "Gastroenterologist Near Jamshedpur — Dr. Akhilesh Yadav in Ranchi",
    excerptHi: "Jamshedpur se Ranchi mein gastroenterologist: Dr. Akhilesh Yadav — Orchid Medical Centre. Jamshedpur ke patients ke liye Ranchi mein DM level GI care.",
    excerptEn: "Gastroenterologist near Jamshedpur — Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi (~135km). Advanced GI care: endoscopy, colonoscopy, liver & complete gastroenterology.",
    category: "conditions",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🗺️",
    tags: ["jamshedpur se ranchi gastroenterologist", "gastroenterologist near jamshedpur", "jamshedpur liver doctor", "jamshedpur stomach doctor", "ranchi GI specialist"],
    metaTitle: "Gastroenterologist Near Jamshedpur | Dr. Akhilesh Yadav Ranchi",
    metaDescription: "Gastroenterologist near Jamshedpur — Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi. Advanced GI care: endoscopy, colonoscopy & complete hepatology.",
    sections: [
      {
        heading: "Jamshedpur Se Ranchi — Kab Worth It Hai?",
        type: "text",
        content: "Jamshedpur — Tata Steel city, Adityapur industrial belt — Jharkhand ka economic hub. Jamshedpur mein kuch gastroenterologists practice karte hain, lekin advanced procedures (ERCP, EUS, FibroScan, advanced colonoscopy) ke liye Ranchi better equipped hai. Jamshedpur se Ranchi: ~135 km, NH33 se 3-3.5 ghante. Worth it conditions: ERCP need (bile duct stone, stricture). EUS (pancreatic cysts, tumors). Complex liver cases (cirrhosis management, FibroScan). Colonoscopy with polypectomy (cancer screening). Complicated IBD (Crohn's/Colitis) management.",
      },
      {
        heading: "Jamshedpur Patients Mein Common GI Issues",
        type: "list",
        content: "Jamshedpur ke patients mein Dr. Akhilesh Yadav frequently dekhte hain:",
        list: [
          "Gallstone disease — ERCP ke liye Ranchi referral common",
          "Alcoholic Liver Disease — Tata Steel aur industrial workforce",
          "Fatty Liver (NAFLD) — sedentary jobs, Jamshedpur food culture",
          "Colorectal cancer screening — 45+ workers seeking quality screening",
          "Chronic Hepatitis B — Jharkhand-wide issue",
          "IBD (Crohn's, Colitis) — complex cases needing advanced evaluation",
          "Colon polyps — follow-up colonoscopy after abnormal findings elsewhere",
        ],
      },
      {
        heading: "Why Ranchi Over Kolkata For Jamshedpur Patients",
        type: "text",
        content: "Jamshedpur ke patients ke liye traditionally GI treatment ke options the: local Jamshedpur hospitals ya Kolkata (250+ km). Ranchi (135 km) mein Orchid Medical Centre ke advantages: Closer than Kolkata — 3-3.5 ghante vs 5-6 ghante. Comparable advanced facilities — ERCP, EUS, FibroScan. Hindi medium consultation — local language comfort. Reasonable pricing — metro city se kam. Dr. Akhilesh Yadav DM Gastroenterology — equivalent expertise. Same state — no state boundary hassles.",
      },
      {
        heading: "Jamshedpur Se Ranchi — Practical Guide",
        type: "text",
        content: "Jamshedpur se Orchid Medical Centre, HB Road, Ranchi: Route: Jamshedpur → Gamharia → Chandil → Ramgarh → Ranchi via NH33 — ~135 km. Time: 3-3.5 ghante by car. Train: Tatanagar Junction se multiple trains Hatia (Ranchi) — Shatabdi ya other express available. Morning start karo — Ranchi pahuncho, consultation karo, possibly same day procedures (endoscopy), wapas Jamshedpur evening. ERCP ya larger procedures ke liye: advance appointment + possible 1 day stay Ranchi mein. Contact: +91 74919 25047 pehle call karein — appointment confirm karein.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ka Sandesh Jamshedpur Ke Patients Ko",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Jamshedpur se patients aate hain — pehle hesitate karte hain, lekin jab aa jaate hain toh kehte hain ki Kolkata nahi jaana padega ab. Ranchi mein woh sab milta hai jo chahiye. Distance ek issue hai, lekin ek baar aane ke baad zyada tar cases ek visit mein resolve ho jaate hain.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Jamshedpur mein koi ERCP facility hai?",
        a: "Jamshedpur ke kuch hospitals mein basic endoscopy hai, lekin ERCP (advanced bile duct procedure) ke liye Ranchi ya Kolkata refer kiya jaata hai. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein ERCP karte hain — Jamshedpur se 3-3.5 ghante.",
      },
      {
        q: "Tatanagar station se Orchid Medical Centre kaise pahunchein?",
        a: "Tatanagar (Jamshedpur) → Hatia Station (Ranchi) → Auto/Cab se Orchid Medical Centre HB Road. Alternatively, taxi/cab booking Jamshedpur se Ranchi direct available hai.",
      },
      {
        q: "Kya ek hi din mein Jamshedpur-Ranchi-Jamshedpur ho sakta hai endoscopy ke liye?",
        a: "Haan — endoscopy (OGD Scopy) ke liye: morning Jamshedpur se niklo, 10 AM consultation Orchid Medical Centre, endoscopy afternoon, 1-2 ghante recovery, evening wapas Jamshedpur. Advance appointment zaroor lo: +91 74919 25047.",
      },
      {
        q: "Liver cirrhosis ke liye Jamshedpur vs Ranchi vs Kolkata — kahan jayein?",
        a: "Mild-moderate cirrhosis management: Ranchi mein Dr. Akhilesh Yadav Orchid Medical Centre — adequate facilities. Advanced cirrhosis with complications needing liver transplant evaluation: Kolkata (Apollo, AMRI) ya Delhi (AIIMS, Medanta). Dr. Akhilesh Yadav assess karke sahi referral dete hain.",
      },
    ],
  },

  // ── BATCH 9: BLOGS 41–45 ─────────────────────────────────────────────────────

  {
    slug: "ranchi-mein-ibd-treatment",
    titleHi: "Ranchi Mein IBD Treatment — Crohn's & Colitis Ka Ilaj | Dr. Akhilesh Yadav",
    titleEn: "IBD Treatment in Ranchi — Crohn's & Colitis | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein Inflammatory Bowel Disease (IBD) ka advanced treatment: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Biologics aur complete IBD management.",
    excerptEn: "IBD treatment in Ranchi — Crohn's disease & ulcerative colitis by Dr. Akhilesh Yadav at Orchid Medical Centre. Biologics, mesalamine & comprehensive IBD management.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🫁",
    tags: ["ranchi mein IBD treatment", "IBD ranchi", "crohns colitis ranchi", "biologics ranchi", "gastroenterologist ranchi"],
    metaTitle: "IBD Treatment Ranchi | Crohn's & Colitis | Dr. Akhilesh Yadav",
    metaDescription: "IBD (Crohn's & Colitis) treatment in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Biologics, step-up therapy & complete IBD management for Jharkhand.",
    sections: [
      {
        heading: "IBD Ranchi Mein — Diagnosis Se Biologics Tak",
        type: "text",
        content: "Inflammatory Bowel Disease (IBD) — Crohn's Disease aur Ulcerative Colitis — India mein badh rahi hai aur Jharkhand koi exception nahi hai. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — Jharkhand ke IBD patients ke liye comprehensive care dete hain: diagnosis, induction therapy, maintenance, biologics aur surgical coordination. Ek dedicated IBD specialist ki zaroorat yahan hai kyunki IBD complex chronic condition hai jisme lifelong monitoring aur treatment adjustment lagti hai.",
      },
      {
        heading: "IBD Diagnosis Kaise Hoti Hai Ranchi Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein IBD diagnosis mein karte hain: Symptoms: recurrent diarrhea (often bloody), abdominal pain, weight loss, fatigue — 6+ hafte. Blood tests: CBC (anemia), CRP/ESR (inflammation), albumin (nutrition). Stool: fecal calprotectin (IBD vs IBS distinguish — single most useful non-invasive test), culture (infection rule out), C. diff. Colonoscopy with biopsy: gold standard — mucosal appearance + histology. MR Enterography: Crohn's mein small bowel extent assess. Perianal MRI: perianal Crohn's mein.",
      },
      {
        heading: "IBD Treatment Approach — Step Up Therapy",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein IBD treatment:",
        list: [
          "Mild UC: Mesalamine oral + rectal — first-line, effective 70-80%",
          "Moderate UC/Crohn's: Corticosteroids (induction) + Azathioprine (maintenance)",
          "Refractory/Severe: Biologics — Infliximab (anti-TNF), Adalimumab, Vedolizumab, Ustekinumab",
          "New: Small molecules — Tofacitinib (JAK inhibitor) for UC",
          "Nutrition: Exclusive Enteral Nutrition (EEN) — Crohn's children mein mucosal healing",
          "Surgery referral: when medical therapy fails or complications",
          "Goal: mucosal healing (endoscopic remission) not just symptom control",
        ],
      },
      {
        heading: "Biologics — IBD Mein Game Changer",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein IBD mein biologics prescribe karte hain jab conventional therapy fail ho. Biologics — anti-TNF agents (Infliximab, Adalimumab), anti-integrins (Vedolizumab), anti-IL12/23 (Ustekinumab) — yeh inflammation ke specific pathways block karte hain. India mein biosimilars available hain — original biologics se zyada affordable. Pre-biologic workup: TB test (IGRA ya Mantoux), Hepatitis B status, chest X-ray. Monitoring: regular infusions (Infliximab IV) ya subcutaneous injections (Adalimumab). Dr. Akhilesh Yadav Ranchi ke IBD patients ko biologic selection, initiation aur monitoring mein guide karte hain.",
      },
      {
        heading: "IBD Mein Long-Term Care — Ranchi Ke Patients Ke Liye",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein IBD long-term care mein karte hain: Regular follow-up: disease activity monitoring, medication adjustment. Surveillance colonoscopy: extensive UC mein 8-10 saal ke baad annual — cancer risk. Nutrition assessment: IBD mein malabsorption common — vitamin D, B12, iron, folate deficiency. Vaccination: IBD patients (immunosuppressed) mein specific vaccines update karna. Mental health: IBD patients mein depression/anxiety common — screen aur refer. Flare management: rescue therapy plan — steroid taper protocol patients ko deta hoon.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — IBD",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'IBD mein main patients ko ek baat clearly kehta hoon: medication band mat karo jab better lagta hai. IBD chronic hai — remission mein bhi maintenance therapy zaroori hai. Ranchi mein mujhe khushi hai ki ab biologics available hain reasonable cost par — Jharkhand ke patients ko Delhi ya Kolkata nahi jaana padta IBD management ke liye.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. IBD ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Fecal Calprotectin test kahan hota hai Ranchi mein?",
        a: "Fecal calprotectin test major diagnostic labs mein available hai — SRL, Thyrocare, Metropolis. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein test recommend karte hain aur sample collection guide karte hain.",
      },
      {
        q: "IBD mein TB se kaise bachein (biologics start karte waqt)?",
        a: "Biologics (anti-TNF) start karne se pehle latent TB screen karna mandatory hai — IGRA blood test ya Mantoux. Latent TB positive mein: isoniazid prophylaxis 1 mahina pehle start karo, phir biologic. Dr. Akhilesh Yadav Ranchi mein yeh protocol follow karte hain.",
      },
      {
        q: "Kya IBD mein pregnancy safe hai?",
        a: "Remission mein pregnancy safer hoti hai. Active disease mein: miscarriage, premature birth risk badhta hai. Mesalamine pregnancy safe. Azathioprine — risk-benefit discussion. Biologics (Infliximab, Adalimumab) — often continue ki jaati hain pregnancy mein agar zaroor ho. Dr. Akhilesh Yadav pre-pregnancy counseling karte hain Ranchi mein.",
      },
      {
        q: "IBD aur IBS simultaneously ho sakta hai?",
        a: "Haan — IBD remission mein bhi IBS-like symptoms ho sakte hain (IBS-IBD overlap). Fecal calprotectin + colonoscopy se differentiate hota hai active IBD vs IBS. Treatment alag hoti hai. Dr. Akhilesh Yadav Ranchi mein yeh distinction karte hain.",
      },
    ],
  },

  {
    slug: "swallowing-problem-ranchi",
    titleHi: "Swallowing Problem Ranchi — Nigalne Mein Takleef | Dr. Akhilesh Yadav",
    titleEn: "Swallowing Problem (Dysphagia) in Ranchi — Diagnosis & Treatment | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein nigalne mein takleef (dysphagia) ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Endoscopy se sahi diagnosis aur treatment.",
    excerptEn: "Swallowing difficulty (dysphagia) specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert endoscopic diagnosis & treatment for all causes of dysphagia.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🩺",
    tags: ["swallowing problem ranchi", "dysphagia ranchi", "nigalna mushkil ranchi", "esophagus problem ranchi", "gastroenterologist ranchi"],
    metaTitle: "Swallowing Problem Ranchi | Dysphagia | Dr. Akhilesh Yadav",
    metaDescription: "Swallowing difficulty (dysphagia) specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Endoscopic diagnosis & treatment for all causes.",
    sections: [
      {
        heading: "Nigalne Mein Takleef — Kabhi Ignore Mat Karein",
        type: "text",
        content: "Dhanbad se aaye 62-saal ke Ramesh ji — 3 mahine se solid food nigalte waqt ruka-ruka lagta hai. Weight 5 kg ghat gaya. 'Budhaape mein hota hai' soch ke ignore kiya. Orchid Medical Centre, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne urgently endoscopy ki. Mila: esophageal stricture (benign) — chronic acid damage se. Endoscopic dilation (stretching) se significant improvement. Swallowing difficulty (dysphagia) ek ALARM symptom hai — kabhi ignore mat karein. Isme se kuch cases early cancer bhi nikalta hai.",
      },
      {
        heading: "Dysphagia Ke Karan — GI Se Neurological Tak",
        type: "list",
        content: "Nigalne ki takleef ke causes:",
        list: [
          "Esophageal Stricture (benign): chronic GERD acid damage se food pipe narrowing",
          "Esophageal Cancer: progressive dysphagia (pehle solids, phir liquids) + weight loss — ALARM",
          "Achalasia Cardia: food pipe ki muscle dysfunction — food pass nahi hoti",
          "Esophageal Rings/Webs: congenital ya acquired narrowings",
          "Eosinophilic Esophagitis: immune-mediated — food bolus stuck hota hai",
          "Zenker's Diverticulum: pharyngeal pouch mein food collect hota hai",
          "Neurological: stroke, Parkinson's, MND — swallowing muscle control affected",
        ],
      },
      {
        heading: "Endoscopy — Dysphagia Ka Primary Investigation",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein dysphagia ke liye urgently endoscopy recommend karte hain. Endoscopy (OGD Scopy) se: Food pipe ka direct visualization. Stricture, mass, inflammation clearly dikhta hai. Biopsy — malignancy rule out. Achalasia: barium swallow + manometry se better diagnosed. Barium swallow / esophagogram: structural problems outline deta hai — Dr. Akhilesh Yadav refer karte hain. Esophageal Manometry: motility disorders assess karne ke liye (achalasia, diffuse esophageal spasm).",
      },
      {
        heading: "Dysphagia Ka Treatment — Endoscopic Se Surgical",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein dysphagia treatment mein karte hain: Benign Stricture: Endoscopic Dilation (bougie ya balloon) — stricture ko stretch karte hain. Multiple sessions may be needed. Achalasia: Pneumatic Dilation ya POEM (Per-Oral Endoscopic Myotomy — advanced procedure). Surgery: Heller Myotomy. Esophageal Cancer: oncology team referral — staging ke hisaab se chemotherapy/radiation/surgery. Eosinophilic Esophagitis: steroids (swallowed budesonide), proton pump inhibitors, food trigger elimination. GERD-related stricture: PPI + dilation.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Dysphagia",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Dysphagia ek alarm symptom hai — 2 hafte se zyada ho toh endoscopy zaroor. Ranchi mein main dekhta hoon ki patients mahino tak nigalne ki takleef ke saath rehte hain sochke ki budhaapa hai ya khaana solid hai. Yeh galat hai. Early diagnosis mein benign conditions easily treat hoti hain, aur cancer early stage mein milta hai toh outcomes better hote hain.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Dysphagia ke liye urgently doctor se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Achalasia Cardia kya hai aur kaise treat hoti hai?",
        a: "Achalasia mein esophagus ki lower muscle (LES) relax nahi karti — food stomach mein nahi jaata. Regurgitation, weight loss, chest pain common. Treatment: Pneumatic balloon dilation ya POEM (advanced endoscopic procedure) ya Heller Myotomy. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein achalasia diagnose karte hain aur appropriate treatment/referral dete hain.",
      },
      {
        q: "Kya solid food khaane mein ruk-ruk lagta hai — kya karein?",
        a: "Yeh esophageal stricture, ring, ya cancer ka sign ho sakta hai. Urgently endoscopy karwayein. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein urgently evaluate karte hain — ek hafte ke andar appointment try karte hain aise symptoms ke liye.",
      },
      {
        q: "Kya lukewarm paani peene se dysphagia theek hoti hai?",
        a: "Kuch motility disorders (like diffuse esophageal spasm) mein warm liquids temporarily better lagta hai. Lekin yeh cause treat nahi karta. Endoscopy se cause pata karo — phir appropriate treatment. Ghar pe manage karne ki koshish mein delay se serious conditions miss ho sakti hain.",
      },
      {
        q: "Kya neurological dysphagia mein GI doctor help kar sakta hai?",
        a: "Neurological dysphagia (stroke, Parkinson's) mein primary treatment neurologist aur speech therapist handle karte hain. GI doctor ki role: aspiration related complications manage karna, PEG tube placement (jab required) — Dr. Akhilesh Yadav Ranchi mein coordinate karte hain.",
      },
    ],
  },

  {
    slug: "rectal-bleeding-ranchi",
    titleHi: "Rectal Bleeding Ranchi — Toilet Mein Blood Ka Doctor | Dr. Akhilesh Yadav",
    titleEn: "Rectal Bleeding in Ranchi — Blood in Stool Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein rectal bleeding (toilet mein blood) ke specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Causes, diagnosis aur treatment guide.",
    excerptEn: "Rectal bleeding specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Causes from hemorrhoids to colon cancer — expert diagnosis & treatment.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🚨",
    tags: ["rectal bleeding ranchi", "blood in stool ranchi", "toilet mein blood ranchi", "pakhana mein blood ranchi", "gastroenterologist ranchi"],
    metaTitle: "Rectal Bleeding Ranchi | Blood in Stool | Dr. Akhilesh Yadav",
    metaDescription: "Rectal bleeding specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert diagnosis from hemorrhoids to colon cancer — never ignore blood in stool.",
    sections: [
      {
        heading: "Toilet Mein Blood — Kabhi Bhi Ignore Mat Karein",
        type: "text",
        content: "Ranchi ke Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — kehte hain: 'Toilet mein blood dekhna — chahe thoda sa ho — doctor ko dikhao, ignore mat karo.' Bahut se patients sochte hain 'piles hai, theek ho jaayega' aur months tak wait karte hain. 40+ age mein rectal bleeding mein colonoscopy zaroori hai — colon polyp ya early cancer miss ho sakta hai. Piles aur colon cancer dono mein rectal bleeding hoti hai — differentiate karna ek gastroenterologist ka kaam hai.",
      },
      {
        heading: "Rectal Bleeding Ke Causes — Simple Se Serious",
        type: "list",
        content: "Rectal bleeding (hematochezia) ke causes:",
        list: [
          "Hemorrhoids (Piles): most common — bright red blood on toilet paper ya bowl",
          "Anal Fissure: tear in anal lining — blood + severe pain on defecation",
          "Diverticular Bleeding: colon diverticula se sudden painless large bleed — 50+ age",
          "Inflammatory Bowel Disease (UC, Crohn's): blood + mucus + diarrhea",
          "Colon Polyps: larger polyps kabhi kabhi bleed karte hain",
          "Colorectal Cancer: blood mixed with stool, change in bowel habit, weight loss",
          "Infectious Colitis: bloody diarrhea + fever (Salmonella, Shigella, E. coli O157)",
          "Upper GI Bleeding (melena): kala stool — not bright red typically",
        ],
      },
      {
        heading: "Rectal Bleeding Ki Investigation — Kab Kya",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein rectal bleeding assessment mein karte hain: History: color (bright red vs maroon vs dark), amount, with stool or separate, associated symptoms. Age: 40+ mein always colonoscopy. Proctoscopy/Anoscopy: hemorrhoids, fissure quickly diagnose. Colonoscopy: complete colon visualization — polyps, cancer, IBD, diverticular bleeding. Stool tests: culture (infectious cause), calprotectin (IBD). Blood tests: CBC (anemia level), coagulation. Urgent colonoscopy: massive rectal bleeding mein — after hemodynamic stabilization.",
      },
      {
        heading: "Rectal Bleeding Ka Treatment — Cause-Specific",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi mein rectal bleeding treatment cause ke hisaab se karte hain: Hemorrhoids: Grade 1-2 — diet + RBL (OPD). Grade 3-4 — surgical options. Anal Fissure: topical nitrates/calcium channel blockers + stool softeners. Severe/chronic — sphincterotomy. Polyps: colonoscopic polypectomy — same sitting mein. IBD: mesalamine, steroids — UC/Crohn's protocol. Infectious Colitis: appropriate antibiotics. Colorectal Cancer: surgical oncology + oncology team referral. Diverticular Bleeding: mostly self-limiting — angiographic embolization ya surgery agar persistent.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Rectal Bleeding",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein main baar baar dekhta hoon — patient ki colonoscopy hoti hai jo aaya tha 'piles' ke liye — aur polyp milta hai, ya early colitis. Agar woh 2-3 mahine aur wait karta toh kya hota? Rectal bleeding = colonoscopy, khaas karke 40+. Yeh rule hai, exception nahi.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Rectal bleeding ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kya piles mein colonoscopy zaroor hai?",
        a: "40+ age mein rectal bleeding mein haan — colonoscopy zaroori hai chahe piles obvious ho. Piles aur colon cancer simultaneously ho sakta hai. Under 40 mein typical hemorrhoid presentation mein proctoscopy se start hoti hai, colonoscopy agar red flags hain. Dr. Akhilesh Yadav Ranchi mein case-by-case decide karte hain.",
      },
      {
        q: "Anal fissure mein kitna dard hota hai?",
        a: "Anal fissure mein defecation ke waqt aur baad mein severe burning/cutting pain hoti hai — burning sensation hours tak reh sakta hai. Blood: bright red, small amount. Constipation se worse hota hai. Dr. Akhilesh Yadav Ranchi mein fissure treat karte hain — topical medications pehle, refractory cases mein procedure.",
      },
      {
        q: "Diverticular disease kya hai?",
        a: "Colon mein small pouches (diverticula) banati hain — low fiber diet, aging, constipation. Zyada tar asymptomatic. Diverticulitis: infection/inflammation — left lower pain, fever. Diverticular bleed: painless large bright red bleed — 50+ mein. Dr. Akhilesh Yadav Ranchi mein colonoscopy se diagnose karte hain.",
      },
      {
        q: "Blood loss se anemia ho sakti hai?",
        a: "Haan — chronic small rectal bleeding (like hemorrhoids, polyps) se iron deficiency anemia ho sakti hai — gradually. Unexplained iron deficiency anemia mein colonoscopy zaroori hai bleeding source find karne ke liye. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein anemia workup mein colonoscopy include karte hain zaroor hone par.",
      },
    ],
  },

  {
    slug: "unexplained-weight-loss-ranchi",
    titleHi: "Unexplained Weight Loss Ranchi — Bina Wajah Wajan Ghatna | Dr. Akhilesh Yadav",
    titleEn: "Unexplained Weight Loss in Ranchi — GI Causes & Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein bina wajah wajan ghatna (unexplained weight loss) ke GI specialist: Dr. Akhilesh Yadav — Orchid Medical Centre. Alarm symptom ki complete investigation guide.",
    excerptEn: "Unexplained weight loss specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert GI workup for involuntary weight loss — cancer screening & complete diagnosis.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "⚠️",
    tags: ["unexplained weight loss ranchi", "wajan ghatna ranchi", "involuntary weight loss ranchi", "cancer screening ranchi", "gastroenterologist ranchi"],
    metaTitle: "Unexplained Weight Loss Ranchi | Dr. Akhilesh Yadav GI Specialist",
    metaDescription: "Unexplained weight loss specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert GI workup including endoscopy & colonoscopy for involuntary weight loss.",
    sections: [
      {
        heading: "⚠️ Bina Wajah Wajan Ghatna — ALARM Symptom",
        type: "warning",
        content: "Agar 6 mahine mein bina diet change ya exercise ke 5% se zyada wajan ghat gaya ho — yeh medical evaluation ka indication hai. Ranchi ke Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — kehte hain: 'Unexplained weight loss top alarm symptoms mein hai. Yeh GI cancer ka sign ho sakta hai, ya thyroid problem, ya malabsorption. Kabhi bhi wait mat karo.'\n\nDr. Akhilesh Yadav ya apne doctor se zaroor milein agar unexplained weight loss ho raha hai.",
      },
      {
        heading: "GI Causes of Unexplained Weight Loss",
        type: "list",
        content: "Unexplained weight loss ke GI-related causes:",
        list: [
          "Esophageal Cancer: dysphagia + weight loss — ALARM",
          "Gastric Cancer: early satiety + weight loss + upper abdominal pain",
          "Colon/Rectal Cancer: change in bowel habit + blood + weight loss",
          "Pancreatic Cancer: weight loss + jaundice + upper abdominal pain",
          "Celiac Disease: gluten malabsorption — diarrhea + weight loss",
          "IBD (Crohn's, Colitis): active disease mein weight loss prominent",
          "SIBO (Small Intestinal Bacterial Overgrowth): malabsorption",
          "Chronic Pancreatitis: exocrine insufficiency — fat malabsorption, weight loss",
        ],
      },
      {
        heading: "Non-GI Causes — Gastroenterologist Ka Role Rule-Out Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein unexplained weight loss mein GI workup karte hain lekin non-GI causes bhi ध्यान mein rakhte hain: Diabetes (uncontrolled): glucose loss mein weight loss. Hyperthyroidism: metabolism fast — weight loss. Tuberculosis: systemic wasting. Cancer anywhere: paraneoplastic weight loss. Depression: appetite loss. HIV/AIDS: wasting. Renal failure: chronic. Agar GI cause nahi mila — appropriate specialist refer karte hain. Complete workup ensure karta hai ki cause miss na ho.",
      },
      {
        heading: "Workup — Dr. Akhilesh Yadav Ka Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein unexplained weight loss workup mein karte hain: History: rate of loss, diet changes, associated symptoms. Blood tests: CBC, LFT, RFT, TSH, blood sugar, ESR, LDH, CA19-9 (pancreatic marker), CEA (colorectal marker). Stool: occult blood, fat (steatorrhea), calprotectin. Imaging: chest X-ray, CT scan abdomen+pelvis (most important — masses, lymphadenopathy). Upper GI Endoscopy: esophageal, gastric, duodenal pathology. Colonoscopy: colorectal cancer, polyps. Additional: PET scan (malignancy staging), bone marrow (hematological causes) if needed.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Weight Loss",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ranchi mein patients khush hote hain jab bina koshish ke wajan ghatata hai — 'pahle se fit ho gaya.' Yeh ek concerning mindset hai. Bina effort ke weight loss investigation ka indication hai. Haan, thyroid ya diabetes bhi ho sakta hai — lekin cancer rule out karna zaroori hai pehle. Early detection mein outcomes bahut better hote hain.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Unexplained weight loss ke liye urgently doctor se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kitna weight loss 'concerning' maana jaata hai?",
        a: "6 mahine mein 5% ya zyada involuntary weight loss — concerning. 65 kg ke vyakti mein: 3.25 kg in 6 months without trying. Elderly mein lower threshold. Dr. Akhilesh Yadav Ranchi mein standard criteria use karte hain assessment mein.",
      },
      {
        q: "Weight loss mein pehle kaunsa doctor dikhayein?",
        a: "GI symptoms (diarrhea, abdominal pain, dysphagia, rectal bleeding) ke saath — directly gastroenterologist. GI symptoms nahi — general physician ya internal medicine specialist. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein comprehensive workup karte hain GI angle se.",
      },
      {
        q: "CT scan ya PET scan — kab choose karein?",
        a: "CT abdomen/pelvis first step — most malignancies detect hoti hain. PET scan: known malignancy mein staging ya occult malignancy search mein jab CT inconclusive. PET scan is expensive — targeted use mein zyada value. Dr. Akhilesh Yadav appropriate imaging recommend karte hain.",
      },
      {
        q: "Celiac disease mein weight loss kyon hota hai?",
        a: "Celiac mein gluten se small intestine ki villi damage hoti hai — absorption impaired. Fat, protein, carbs — sab malabsorb hote hain — weight loss. Anti-tTG antibody test + small bowel biopsy se diagnose. Gluten-free diet se villi heal hoti hai aur weight normalize hota hai. Dr. Akhilesh Yadav Ranchi mein celiac diagnose karte hain.",
      },
    ],
  },

  {
    slug: "liver-cirrhosis-ranchi",
    titleHi: "Liver Cirrhosis Ranchi — Cirrhosis Ka Ilaj | Dr. Akhilesh Yadav",
    titleEn: "Liver Cirrhosis Treatment in Ranchi — Expert Hepatology | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein liver cirrhosis ka ilaj: Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre. Ascites, varices, encephalopathy ka complete management.",
    excerptEn: "Liver cirrhosis treatment in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert management of ascites, varices, hepatic encephalopathy & all cirrhosis complications.",
    category: "conditions",
    readTimeMins: 9,
    publishedAt: "August 2026",
    emoji: "🫀",
    tags: ["liver cirrhosis ranchi", "cirrhosis treatment ranchi", "ascites treatment ranchi", "hepatologist ranchi", "liver doctor ranchi"],
    metaTitle: "Liver Cirrhosis Treatment Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Liver cirrhosis specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Expert management of ascites, varices & all cirrhosis complications.",
    sections: [
      {
        heading: "Liver Cirrhosis — Ranchi Mein Badh Raha Burden",
        type: "text",
        content: "Jharkhand mein liver cirrhosis ke cases badh rahe hain — alcoholic liver disease, Hepatitis B, NASH — teen major causes. Orchid Medical Centre Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — cirrhosis ke complex cases manage karte hain. Cirrhosis mein liver ka normal tissue scar tissue (fibrosis) se replace ho jaata hai — function dheerey dheerey khatam hota jaata hai. Lekin early diagnosis aur sahi management se cirrhosis ki progression rokna aur complications manage karna possible hai.",
      },
      {
        heading: "Cirrhosis Ke Stages — Child-Pugh Aur MELD",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein cirrhosis severity score karte hain: Child-Pugh Score: A (5-6 points, compensated), B (7-9), C (10-15, decompensated). Parameters: bilirubin, albumin, PT-INR, ascites, encephalopathy. MELD Score (Model for End-stage Liver Disease): bilirubin + creatinine + INR — 3-month mortality predict karta hai, transplant listing ke liye use hota hai. Compensated Cirrhosis: koi major symptoms nahi — strict monitoring, alcohol bandh, cause treat karo. Decompensated: ascites, variceal bleed, encephalopathy — intensive management.",
      },
      {
        heading: "Cirrhosis Complications — Management",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi mein cirrhosis complications manage karte hain:",
        list: [
          "Ascites: Spironolactone/furosemide (diuretics). Salt restriction (<2g/day). Large volume paracentesis (paani nikaalna) + albumin infusion",
          "Spontaneous Bacterial Peritonitis (SBP): ascites fluid mein infection — IV antibiotics urgently",
          "Esophageal Varices: endoscopic banding (EVL) prophylaxis/treatment. Non-selective beta-blockers (carvedilol/propranolol) — primary prophylaxis",
          "Variceal Bleeding: emergency banding + terlipressin (IV). TIPS procedure agar refractory",
          "Hepatic Encephalopathy: lactulose (3-4 soft stools/day), rifaximin, low protein triggers avoid",
          "Hepatorenal Syndrome: terlipressin + albumin. Dialysis bridge. Transplant",
          "Hepatocellular Carcinoma (HCC): 6-monthly AFP + ultrasound surveillance",
        ],
      },
      {
        heading: "Cirrhosis Mein Diet — Dr. Akhilesh Yadav Ka Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein cirrhosis diet clearly guide karte hain: Protein: maintain karein — 1.2-1.5 g/kg/day (muscle preserve karna zaroori hai). Old 'protein restrict karo' advice outdated hai — sirf overt encephalopathy mein temporary restrict. Salt (Sodium): agar ascites hai — <2g/day (low sodium diet). Zyada namak = paani zyada. Alcohol: bilkul nahi — even ek drink. Vitamins: Vitamin D, B12, zinc — deficiencies common, supplement karo. Small frequent meals: hypoglycemia risk kam karta hai cirrhosis mein. Ranchi ke local safe foods: plain rice, moong dal soup, chhachh (low-fat), banana, papaya.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Cirrhosis",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Cirrhosis mein main patients ko teen cheezein clearly kehta hoon: pehla — alcohol bandh, ek drop bhi nahi. Doosra — salt kam karo agar ascites hai. Teesra — regular follow-up — 3 mahine mein LFT, 6 mahine mein AFP + ultrasound. Ranchi mein main dekh raha hoon ki jo patients follow-up karte hain unka outcome bahut better hota hai unke comparison mein jo ek baar treatment le ke gayab ho jaate hain.'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Cirrhosis ke liye hepatologist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kya cirrhosis reversible hai?",
        a: "Early fibrosis (F2-F3) reversible ho sakta hai agar cause remove karein — Hepatitis C cure (DAA), alcohol abstinence, weight loss (NASH). Advanced cirrhosis (F4) ka scarring fully reverse nahi hota, lekin progression rok sakte hain. Dr. Akhilesh Yadav FibroScan se stage assess karte hain Orchid Medical Centre Ranchi mein.",
      },
      {
        q: "Pet mein paani (ascites) baar baar kyun aata hai?",
        a: "Ascites portal hypertension + low albumin se hota hai cirrhosis mein. Diuretics se manage hota hai — lekin cause (cirrhosis) nahi treat hota. Regular diuretics + salt restriction se recurrence kam hota hai. Baar baar paracentesis ki zaroorat hai toh TIPS procedure consider hota hai. Dr. Akhilesh Yadav Ranchi mein ascites management karte hain.",
      },
      {
        q: "Esophageal varices kya hain aur kaise rokein?",
        a: "Portal hypertension mein esophagus ki veins dilated hoti hain — varices. Ruptured varices: massive upper GI bleed — life-threatening. Primary prophylaxis: non-selective beta-blockers (carvedilol) ya endoscopic banding. Diagnosis: endoscopy se. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein variceal screening aur banding karte hain.",
      },
      {
        q: "Liver transplant ke liye kahan jaayein?",
        a: "Liver transplant ke liye major centers: AIIMS New Delhi, Medanta Gurugram, Apollo Chennai, AMRI Kolkata. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi se pre-transplant evaluation, MELD scoring, aur appropriate center referral coordinate karte hain. Post-transplant follow-up bhi Ranchi mein possible hai.",
      },
    ],
  },

  // ── BATCH 10: BLOGS 46–50 ─────────────────────────────────────────────────────

  {
    slug: "endoscopy-clinic-ranchi",
    titleHi: "Endoscopy Clinic Ranchi — Best OGD Scopy Centre | Dr. Akhilesh Yadav",
    titleEn: "Best Endoscopy Clinic in Ranchi — OGD Scopy Centre | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein best endoscopy clinic: Orchid Medical Centre — Dr. Akhilesh Yadav — DM Gastroenterology. HD endoscopy, sedation, same-day results. OGD Scopy Ranchi.",
    excerptEn: "Best endoscopy clinic in Ranchi — Orchid Medical Centre with Dr. Akhilesh Yadav. HD endoscopy, sedation available, same-day results. Serving all of Jharkhand.",
    category: "procedures",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🔭",
    tags: ["endoscopy clinic ranchi", "best endoscopy centre ranchi", "OGD scopy clinic ranchi", "gastroenterologist ranchi", "endoscopy near me ranchi"],
    metaTitle: "Best Endoscopy Clinic Ranchi | Orchid Medical Centre | Dr. Akhilesh Yadav",
    metaDescription: "Best endoscopy clinic in Ranchi — Orchid Medical Centre, HB Road. HD endoscopy, sedation & expert DM Gastroenterologist Dr. Akhilesh Yadav. Book now.",
    sections: [
      {
        heading: "Ranchi Mein Endoscopy Clinic — Sahi Centre Kaise Choose Karein",
        type: "text",
        content: "Ranchi mein endoscopy kai jagahon par hoti hai — lekin quality, equipment, aur doctor ki expertise mein fark hota hai. Orchid Medical Centre, HB Road, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — advanced endoscopy facility dete hain. Importance: endoscopy scope ki quality, endoscopist ki experience, sedation facility — yeh sab milke ensure karte hain ki procedure accurate, comfortable aur safe ho. Jharkhand ke patients ke liye Orchid Medical Centre ek trusted choice ban gayi hai.",
      },
      {
        heading: "Orchid Medical Centre Endoscopy — Kya Milta Hai",
        type: "list",
        content: "Orchid Medical Centre Ranchi mein endoscopy facility:",
        list: [
          "High-Definition (HD) Video Endoscope — clear visualization",
          "Dedicated endoscopy suite — clean, sterile environment",
          "IV Sedation (conscious sedation) — comfortable, virtually painless",
          "Dr. Akhilesh Yadav — DM Gastroenterology — expert endoscopist",
          "Same-day procedure aur results — report same day",
          "Therapeutic endoscopy: biopsy, H. Pylori test, polyp removal, bleeding control",
          "Upper GI + Lower GI (Colonoscopy) — same location",
          "ERCP aur EUS — advanced procedures also available",
        ],
      },
      {
        heading: "Endoscopy Se Kya Diagnose Hota Hai — Complete Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein endoscopy se yeh conditions diagnose aur treat karte hain: Esophagus: GERD, esophagitis, Barrett's Esophagus, stricture, achalasia, esophageal cancer early stage. Stomach: gastritis, peptic ulcer, H. Pylori infection, gastric polyps, gastric cancer. Duodenum: duodenal ulcer, celiac disease (biopsy from duodenum), duodenitis. Therapeutic: bleeding control (injection, thermal, clips), polyp removal (esophageal/gastric), stent placement, esophageal dilation. Advanced: Chromoendoscopy, NBI (Narrow Band Imaging) — subtle lesion detection.",
      },
      {
        heading: "Endoscopy Appointment — Kaise Book Karein Ranchi Mein",
        type: "text",
        content: "Orchid Medical Centre Ranchi mein endoscopy appointment ke liye: Call: +91 74919 25047 (Mon–Sat: 10 AM–2 PM, 5 PM–8 PM). WhatsApp: +91 74919 25047. What to tell: symptoms, duration, previous endoscopy reports (agar hain). Preparation instructions milee: NPO timing, medication instructions. Urgent cases: same day ya next day typically available. Pre-procedure: blood tests (agar required — anticoagulants, platelet issues). Insurance: most health insurance covers endoscopy — cashless facility available for select insurers.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Endoscopy Clinic",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Endoscopy clinic choose karte waqt sirf cost mat dekho — doctor ki qualification aur scope quality bhi matter karti hai. HD endoscope se subtle changes dikhti hain jo standard scope mein miss ho jaati hain. Ranchi mein Orchid Medical Centre mein main ensure karta hoon ki har endoscopy properly done ho — chahe diagnostic ho ya therapeutic.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kya endoscopy mein scope sterilize hota hai?",
        a: "Haan — modern endoscopes reprocessing (cleaning + high-level disinfection ya sterilization) se guzarte hain har patient ke baad. Orchid Medical Centre Ranchi mein standard protocols follow hote hain. If unsure, puchhne mein sharm nahi — yeh valid question hai.",
      },
      {
        q: "Kya endoscopy aur colonoscopy same din ho sakti hain?",
        a: "Haan — ek hi sedation session mein upper + lower endoscopy possible hai ('bidirectional endoscopy'). Bowel prep colonoscopy ke liye karni padti hai. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein yeh combined procedure karte hain agar zaroor ho.",
      },
      {
        q: "Endoscopy report kitna detailed hota hai Orchid Medical Centre mein?",
        a: "Orchid Medical Centre mein Dr. Akhilesh Yadav ka endoscopy report same-day dikhaaya jaata hai — patient ko clearly explain karte hain kya mila. Written report bhi milta hai. Biopsy results: 5-7 din pathology se. Follow-up plan bhi discuss hota hai.",
      },
      {
        q: "Kya endoscopy ke liye koi age restriction hai?",
        a: "Koi strict age limit nahi hai — infants se elderly tak endoscopy safe hai appropriate sedation ke saath. Elderly mein sedation dose adjust hota hai. Dr. Akhilesh Yadav appropriate sedation protocol use karte hain Orchid Medical Centre Ranchi mein.",
      },
    ],
  },

  {
    slug: "ranchi-mein-ercp-cost",
    titleHi: "Ranchi Mein ERCP Cost — Bile Duct Procedure Kharcha | Dr. Akhilesh Yadav",
    titleEn: "ERCP Cost in Ranchi — Bile Duct Procedure Price | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein ERCP (Endoscopic Retrograde Cholangiopancreatography) ka kharcha: Dr. Akhilesh Yadav — Orchid Medical Centre. Bile duct stones, stenting — complete guide aur cost.",
    excerptEn: "ERCP cost in Ranchi at Orchid Medical Centre. Bile duct stone removal, stenting & pancreatitis management by Dr. Akhilesh Yadav — affordable advanced GI care.",
    category: "procedures",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "💊",
    tags: ["ERCP cost ranchi", "ERCP ranchi", "bile duct stone ranchi", "cholangiopancreatography ranchi", "gastroenterologist ranchi"],
    metaTitle: "ERCP Cost in Ranchi | Bile Duct Procedure | Dr. Akhilesh Yadav",
    metaDescription: "ERCP cost in Ranchi at Orchid Medical Centre. Bile duct stone removal, stent placement by Dr. Akhilesh Yadav, DM Gastroenterologist. Affordable advanced GI care.",
    sections: [
      {
        heading: "ERCP Kya Hai — Aur Ranchi Mein Kyun Ek Badi Baat Hai",
        type: "text",
        content: "Deoghar se aaye 58-saal ke Ramji Lal ji — gallstone-induced pancreatitis ke baad bile duct mein stone fansa raha tha. Jaundice aur pain continue kar raha tha. Previously Patna refer kiya gaya tha — khaandaan ke liye mushkil tha. Orchid Medical Centre Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — ne ERCP karke bile duct stone nikaal diya. Ranchi mein ERCP available hona Jharkhand ke patients ke liye ek badi baat hai — pehle Kolkata ya Patna jaana padta tha.",
      },
      {
        heading: "ERCP Kab Zaroor Hoti Hai?",
        type: "list",
        content: "ERCP (Endoscopic Retrograde Cholangiopancreatography) zaroor hai jab:",
        list: [
          "Bile duct mein stone (choledocholithiasis) — obstructive jaundice, cholangitis",
          "Acute Cholangitis (bile duct infection) — emergency ERCP",
          "Post-cholecystectomy bile leak — stent se seal karna",
          "Biliary stricture — benign ya malignant",
          "Pancreatic duct stone ya stricture",
          "Pancreatic pseudocyst drainage (EUS-guided)",
          "Pre-operative bile duct stone removal before gallbladder surgery",
          "Sphincterotomy (bile duct opening widening) for stone clearance",
        ],
      },
      {
        heading: "ERCP Cost Ranchi — Orchid Medical Centre",
        type: "text",
        content: "ERCP ek advanced procedure hai — cost basic endoscopy se zyada hoti hai. Orchid Medical Centre, Ranchi mein ERCP cost Jharkhand ke competitive pricing mein hai — Patna ya Kolkata se travel + hotel + procedure cost se zyada tar kam aata hai. What determines cost: diagnostic ERCP vs therapeutic (stone removal, stenting). Number of procedures in one session. Anesthesia (ERCP mein deeper sedation typically). Duration aur complexity. Insurance: major health insurance plans mein ERCP covered hoti hai — cashless facility available hoti hai. Exact current pricing ke liye: +91 74919 25047 — transparent pricing, koi hidden charges nahi.",
      },
      {
        heading: "ERCP Procedure — Kya Expect Karein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein ERCP ke liye patient preparation karte hain: Pre-ERCP: blood tests (coagulation, LFT), NPO 6-8 ghante. Antibiotics agar cholangitis ho. Sedation: deeper conscious sedation ya short general anesthesia — anesthesiologist present. Scope: side-viewing duodenoscope through mouth → duodenum → bile duct cannulation. What done: stone removal (sphincterotomy + basket/balloon), stent placement, brush cytology. Duration: 30-60 minute. Post-ERCP: 4-6 ghante observation. Possible post-ERCP pancreatitis (3-5% risk) — Dr. Akhilesh Yadav monitor karte hain.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — ERCP",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'ERCP ek complex procedure hai — isliye experience matter karta hai. Main chahta hoon ki Jharkhand ke patients ko ERCP ke liye bahar nahi jaana pare. Orchid Medical Centre Ranchi mein main regular ERCP karta hoon — bile duct stones, stenting, post-op bile leaks — sab conditions treat hoti hain yahan.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. ERCP ke liye experienced gastroenterologist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "ERCP ke baad kitne din hospital mein rehna padta hai?",
        a: "Uncomplicated ERCP: same day ya next day discharge. Cholangitis (infection) ya complex cases: 2-3 din observation. Post-ERCP pancreatitis mein: longer stay required. Dr. Akhilesh Yadav Ranchi mein case complexity ke hisaab se hospitalization plan karte hain.",
      },
      {
        q: "ERCP ke baad kya khaayein?",
        a: "Procedure ke baad: liquid diet start (nimbu paani, clear soup). Agle din: bland soft diet (khichdi, plain daal soup). 2-3 din mein: normal low-fat diet. Avoid: oily/fatty food 1-2 hafte. Dr. Akhilesh Yadav discharge pe detailed instructions dete hain.",
      },
      {
        q: "Kya ERCP se pancreatitis ho sakti hai?",
        a: "Post-ERCP pancreatitis (PEP) — 3-5% risk, most cases mild. High-risk patients mein indomethacin suppository (pre-procedure) aur adequate hydration se risk reduce hota hai. Dr. Akhilesh Yadav Ranchi mein preventive measures use karte hain. Post-ERCP abdominal pain badhe toh immediately contact karein.",
      },
      {
        q: "Kya ERCP ke baad gallbladder nikalna zaroor hai?",
        a: "Gallstone mein (bile duct + gallbladder stones): ERCP se bile duct clear, phir laparoscopic cholecystectomy (gallbladder removal). Dono alag procedures hain. Dr. Akhilesh Yadav ERCP karte hain, surgical team gallbladder removal karte hain — Ranchi mein coordinate hota hai.",
      },
    ],
  },

  {
    slug: "ranchi-mein-eus-test",
    titleHi: "Ranchi Mein EUS Test — Endoscopic Ultrasound Kya Hai | Dr. Akhilesh Yadav",
    titleEn: "EUS Test in Ranchi — Endoscopic Ultrasound Explained | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein EUS (Endoscopic Ultrasound) test: Dr. Akhilesh Yadav — Orchid Medical Centre. Pancreas, bile duct, submucosal tumors ki best imaging — kab aur kyon zaroori hai.",
    excerptEn: "EUS test in Ranchi at Orchid Medical Centre — endoscopic ultrasound explained by Dr. Akhilesh Yadav. When it's needed, what it shows & how it differs from regular ultrasound.",
    category: "procedures",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🔬",
    tags: ["EUS test ranchi", "endoscopic ultrasound ranchi", "pancreas test ranchi", "EUS cost ranchi", "gastroenterologist ranchi"],
    metaTitle: "EUS Test in Ranchi | Endoscopic Ultrasound | Dr. Akhilesh Yadav",
    metaDescription: "EUS (Endoscopic Ultrasound) test in Ranchi at Orchid Medical Centre. Expert pancreas, bile duct & GI tumour imaging by Dr. Akhilesh Yadav, DM Gastroenterologist.",
    sections: [
      {
        heading: "EUS Test Kya Hai — Aur Regular Ultrasound Se Better Kyun",
        type: "text",
        content: "Ranchi ke kai patients CT scan aur regular ultrasound ke baad bhi unresolved diagnosis leke Orchid Medical Centre aate hain. Dr. Akhilesh Yadav — DM Gastroenterology — EUS se woh details reveal karte hain jo baaki tests se miss ho jaate hain. EUS = endoscope + ultrasound probe ka combination. Probe GI tract ke andar se imaging karta hai — bowel gas interference nahi. Pancreas, bile duct, gallbladder — jo regular ultrasound mein clearly nahi dikhte — EUS mein crystal clear hote hain. Orchid Medical Centre, HB Road, Ranchi mein EUS available hai — Jharkhand ke limited centers mein se ek.",
      },
      {
        heading: "EUS Kis Condition Mein Recommend Hoti Hai?",
        type: "list",
        content: "EUS in conditions mein zaroor hoti hai:",
        list: [
          "Pancreatic mass ya cyst — CT ke baad characterization, FNA for tissue",
          "Suspected bile duct stones — CT/MRCP inconclusive",
          "Chronic Pancreatitis — pancreatic duct detail assessment",
          "Esophageal cancer staging — T aur N staging pre-operatively",
          "Gastric cancer staging — lymph node assessment",
          "Submucosal GI tumors (GIST, carcinoid, lipoma) — layer identification",
          "Gallbladder polyps >1cm — malignancy risk",
          "Mediastinal lymphadenopathy — sampling via EUS-FNA",
        ],
      },
      {
        heading: "EUS-FNA/FNB — Biopsy Bina Surgery Ke",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein EUS-guided Fine Needle Aspiration (FNA) ya Fine Needle Biopsy (FNB) karte hain. Ek needle EUS scope ke andar hoti hai — real-time ultrasound guidance mein target (pancreatic mass, lymph node) mein daali jaati hai. Tissue sample milta hai — pathology mein cancer diagnose ya rule out hota hai. Advantages: bina surgery ke tissue diagnosis. Accurate — 85-95% diagnostic yield. Avoid CT-guided percutaneous biopsy (which can be harder for pancreas). Ranchi mein EUS-FNA hona — Jharkhand ke patients ke liye ek major advantage hai.",
      },
      {
        heading: "EUS Experience — Orchid Medical Centre Ranchi Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein EUS experience describe karte hain: Preparation: upper EUS ke liye endoscopy jaise NPO 6-8 ghante. Sedation: comfortable — IV sedation, conscious level. Scope: echoendoscope mouth se — esophagus, stomach, duodenum mein ja ke adjacent structures image karta hai. Duration: 30-60 minute (diagnostic EUS). FNA ke saath: 45-75 minute. Recovery: 1-2 ghante post-sedation. Report: imaging findings same day discuss karte hain Dr. Akhilesh Yadav. FNA cytology: 3-5 din pathology. EUS cost inquiry: +91 74919 25047.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — EUS",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'EUS mujhe wo cheezein dikhati hai jo CT scan miss karta hai — ek 8mm bile duct stone, ek 12mm pancreatic cyst ki wall lining, ek submucosal tumor ki exact layer. Ranchi mein patients ke liye EUS ka available hona ek breakthrough hai. Ab Delhi ya Kolkata nahi jaana padta pancreatic cyst biopsy ke liye.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Advanced GI diagnosis ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "EUS aur normal ultrasound mein specifically kya fark hai?",
        a: "Normal ultrasound: bahar se skin ke through imaging — bowel gas interfere karta hai. Pancreas aur bile duct poorly seen. EUS: probe GI tract ke andar — 2-5mm distance se organs image hote hain. Bahut superior resolution — 1mm tak structures clearly. Dr. Akhilesh Yadav Ranchi mein decide karte hain kab EUS vs normal ultrasound appropriate hai.",
      },
      {
        q: "Pancreatic cyst ke liye EUS zaroor hai?",
        a: "Haan — 1cm se bade pancreatic cysts ke liye EUS recommended hai characterization ke liye: cyst type (mucinous vs serous), mural nodule presence, main duct connection. FNA se fluid analysis — mucinous vs serous confirm karta hai. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein pancreatic cyst assessment karte hain.",
      },
      {
        q: "EUS mein kitna dard hota hai?",
        a: "Sedation ke saath nahi. Similar to regular endoscopy experience — aap comfortable ya neend mein hoge. Procedure ke baad: mild bloating ya sore throat — 1-2 din mein theek. FNA ke saath: koi extra pain nahi hoti typically.",
      },
      {
        q: "EUS report samajhne mein help chahiye — kya Dr. Akhilesh Yadav explain karte hain?",
        a: "Haan — Dr. Akhilesh Yadav same day procedure ke baad imaging findings explain karte hain. Biopsy report aane ke baad follow-up appointment mein final interpretation aur next steps discuss hote hain. Patient education Dr. Akhilesh Yadav ke practice ka important part hai.",
      },
    ],
  },

  {
    slug: "capsule-endoscopy-ranchi",
    titleHi: "Capsule Endoscopy Ranchi — Small Bowel Imaging | Dr. Akhilesh Yadav",
    titleEn: "Capsule Endoscopy in Ranchi — Small Intestine Imaging | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein capsule endoscopy (capsule camera) — small intestine ki imaging ke liye Dr. Akhilesh Yadav — Orchid Medical Centre. Kab zaroor hai aur kya expect karein.",
    excerptEn: "Capsule endoscopy (wireless camera capsule) in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Small bowel Crohn's, obscure GI bleeding & small intestine assessment.",
    category: "procedures",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "💊",
    tags: ["capsule endoscopy ranchi", "small bowel imaging ranchi", "wireless capsule ranchi", "small intestine test ranchi", "gastroenterologist ranchi"],
    metaTitle: "Capsule Endoscopy Ranchi | Small Bowel Imaging | Dr. Akhilesh Yadav",
    metaDescription: "Capsule endoscopy in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Wireless camera capsule for small bowel Crohn's, obscure GI bleeding & small intestine disorders.",
    sections: [
      {
        heading: "Capsule Endoscopy — Woh Cheez Jo Normal Scope Nahi Dekh Sakti",
        type: "text",
        content: "Ranchi se aaye 34-saal ke Ajit Kumar — recurrent anemia, endoscopy normal, colonoscopy normal. Bleeding source nahi mila. Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — ne capsule endoscopy recommend ki. Result: small bowel Angioectasia (abnormal blood vessels) — obscure GI bleeding ka source. Yeh sirf capsule endoscopy se detect hua. Capsule endoscopy — ek camera in a capsule jo patient nighalta hai aur poori small intestine ki 50,000+ images leta hai — woh area jahan regular scope nahi pahunch sakta.",
      },
      {
        heading: "Capsule Endoscopy Kab Zaroor Hai?",
        type: "list",
        content: "Capsule endoscopy in conditions mein recommend hoti hai:",
        list: [
          "Obscure GI Bleeding: endoscopy + colonoscopy normal, lekin anemia/bleeding continue",
          "Crohn's Disease: small bowel extent assess karna — MR Enterography ke alternative/complement",
          "Celiac Disease: small bowel villous atrophy assess karna",
          "Iron Deficiency Anemia: source undetermined after upper/lower endoscopy",
          "Small Bowel Tumors: suspected polyps, carcinoid, lymphoma",
          "NSAID-induced small bowel damage: assessment",
          "Peutz-Jeghers Syndrome: small bowel polyp surveillance",
        ],
      },
      {
        heading: "Capsule Endoscopy Experience — Kaise Hoti Hai",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein capsule endoscopy ke liye patient guide karte hain: Preparation: ek din pehle liquid diet, bowel prep (colonoscopy-lite). Day of procedure: sensors body par tape hote hain (data recorder bhi). Patient ek small camera capsule swallow karta hai — size aik badi vitamin capsule jaisi. Capsule naturally GI tract se travel karta hai — 8 ghante recording. Patient normal activities kar sakta hai (baith na, chalna) — heavy exercise avoid. No sedation required. Capsule naturally 24-48 ghante mein stool mein pass hoti hai. Data recorder doctor ko — 50,000+ images review hoti hain. Report: 1-2 din mein.",
      },
      {
        heading: "Capsule Endoscopy — Limitations Bhi Samjhein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein capsule endoscopy ke limitations bhi explain karte hain: Cannot do biopsy — sirf imaging. Capsule retention risk: GI stricture mein capsule phans sakta hai — pehle patency capsule (dissolvable) test hoti hai. Battery life: 8-12 ghante — complete small bowel may not always be visualized. Cost: expensive compared to standard endoscopy. No therapeutic capability. Kab avoid karein: known stricture, implanted cardiac devices (certain models), swallowing difficulty, pregnancy. Dr. Akhilesh Yadav appropriately select karte hain kab capsule endoscopy vs MR Enterography better option hai.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Capsule Endoscopy",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Capsule endoscopy ek patient-friendly procedure hai — koi sedation nahi, koi scope nahi, bas ek capsule nigalo. Ranchi mein main isey select cases mein recommend karta hoon — jab upper aur lower endoscopy normal ho aur anemia ya bleeding source pata nahi chal raha ho. Small bowel Crohn's ke liye bhi ek valuable tool hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Capsule endoscopy ke liye specialist se consultation zaroor karein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Capsule endoscopy Ranchi mein available hai?",
        a: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein capsule endoscopy arrange karte hain — availability aur scheduling ke liye +91 74919 25047 contact karein. Kuch cases mein referral bhi suggest karte hain appropriate center ko agar zaroor ho.",
      },
      {
        q: "Kya capsule body mein reh jaati hai?",
        a: "Normal GI tract mein — nahi. Capsule 24-48 ghante mein naturally stool mein pass ho jaati hai. Confirm karne ke liye: patient dekhta hai (ya abdominal X-ray). GI stricture ya obstruction mein capsule retain ho sakti hai — isliye pehle patency capsule test hoti hai. Dr. Akhilesh Yadav Ranchi mein iska appropriate screening karte hain.",
      },
      {
        q: "Capsule endoscopy ka kharcha kitna hoga?",
        a: "Capsule endoscopy standard endoscopy se zyada expensive hai — capsule disposable hoti hai, imported equipment. India mein cost ranges hain. Exact Orchid Medical Centre pricing ke liye +91 74919 25047 contact karein. Insurance coverage: select plans mein covered, confirm karein apni policy se.",
      },
      {
        q: "Capsule endoscopy MRI se better hai?",
        a: "Dono alag information dete hain. Capsule endoscopy: mucosal lesions — villi, small ulcers, angiectasia clearly. MR Enterography: full-thickness bowel wall, stricture, fistula, extraluminal disease — Crohn's staging. Dono complementary hain. Dr. Akhilesh Yadav decide karte hain kaunsa test kis patient ke liye appropriate hai.",
      },
    ],
  },

  {
    slug: "ranchi-mein-colonoscopy-preparation",
    titleHi: "Ranchi Mein Colonoscopy Ki Preparation — Complete Guide | Dr. Akhilesh Yadav",
    titleEn: "Colonoscopy Preparation Guide in Ranchi — Step-by-Step | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein colonoscopy preparation: Dr. Akhilesh Yadav — Orchid Medical Centre. Step-by-step bowel prep guide — kya khaayein, kya avoid karein, medicines aur timing.",
    excerptEn: "Complete colonoscopy preparation guide for Ranchi patients by Dr. Akhilesh Yadav at Orchid Medical Centre. Diet, bowel prep, medications & what to expect.",
    category: "procedures",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "📋",
    tags: ["colonoscopy preparation ranchi", "bowel prep ranchi", "colonoscopy diet ranchi", "colonoscopy guide ranchi", "gastroenterologist ranchi"],
    metaTitle: "Colonoscopy Preparation Guide Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Complete colonoscopy preparation guide for Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Diet, bowel prep solution, medication guide & what to expect.",
    sections: [
      {
        heading: "Colonoscopy Preparation — Kyun Itna Important Hai",
        type: "text",
        content: "Colonoscopy ki success 50% preparation par depend karti hai — baaki 50% endoscopist pe. Agar colon properly clean nahi hua toh: polyps miss ho sakte hain (even >1cm polyps!), procedure longer hoti hai, repeat colonoscopy karni pad sakti hai. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein kehte hain: 'Main preparation ko utna hi important maanta hoon jitna procedure ko.' Yeh guide Ranchi ke patients ke liye hai jo Orchid Medical Centre mein colonoscopy karwa rahe hain.",
      },
      {
        heading: "2 Din Pehle Se Preparation Shuru — Diet Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein colonoscopy diet instructions clearly dete hain: 2-3 din pehle: high-fiber foods avoid karein — seeds, nuts, whole grains, raw vegetables, fruits with seeds (angoor, strawberry). White rice, white bread, eggs, chicken — theek hain. 1 din pehle: Clear liquid diet sirf: Plain paani. Coconut water (nariyal paani). Nimbu paani (nimbu + paani + sugar — bina pulp). Clear soup (broth — vegetables ya chicken, strain karein). Black chai ya coffee (bina doodh). Avoid karein: doodh, dahi, solid food. Red/purple colored drinks bilkul avoid — colon lining se confuse ho sakta hai.",
      },
      {
        heading: "Bowel Preparation Solution — PEG Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein PEG (Polyethylene Glycol) solution bowel prep recommend karte hain. Split-dose schedule (most commonly): Evening before: 2 litre PEG over 2-3 ghante (5 PM–8 PM). Morning of procedure: 1-2 litre PEG over 1-2 ghante (minimum 4 ghante before procedure time). How to make it tolerable: Chill the solution — refrigerate. Drink with a straw. Small sips, not large gulps — 240ml har 15 min. Clear liquid (paani ya coconut water) baad mein peeyein. Menthol sugar-free candy — taste reduce karta hai. Effects: 1-2 ghante ke baad loose motions shuru — normal. Raat bhar bathroom trips — yeh normal hai, matlab colon clean ho rahi hai.",
      },
      {
        heading: "Medications — Kya Lein, Kya Bandh Karein",
        type: "list",
        content: "Colonoscopy se pehle medications ke baare mein Dr. Akhilesh Yadav ka guide:",
        list: [
          "Blood pressure medications: sahi waqt par paani ke ghoomt ke saath — continue",
          "Diabetes medications: doctor se confirm — typically insulin dose adjust, oral meds hold",
          "Blood thinners (warfarin, clopidogrel): 5-7 din pehle bandh — cardiac risk assess karke",
          "Aspirin: chhote polyps ke liye continue ho sakta — Dr. Akhilesh Yadav specific instructions dete hain",
          "Iron supplements: 1 hafte pehle bandh — colon mein daag jaisi appearance aati hai",
          "NSAIDs: colonoscopy ke din hold",
          "Diabetes: morning dose hold on procedure day — last consultation mein confirm",
        ],
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Colonoscopy Prep",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Colonoscopy preparation mein jo cheez patients ko sabse zyada pareshan karti hai woh hai PEG solution aur raat bhar bathroom jana. Main patients ko clearly kehta hoon — yeh ek raat ki takleef hai, badle mein aap colon cancer prevention ka highest standard paate hain. Prep ka quality = colonoscopy ka quality. Ranchi ke patients — preparation seriously lein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Colonoscopy preparation ke liye Orchid Medical Centre se written instructions zaroor lein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Agar bowel prep ke baad stool clear nahi hua toh kya karein?",
        a: "Agar 4 ghante baad bhi unclear/brown stool aa raha hai — Dr. Akhilesh Yadav se contact karein (+91 74919 25047). Possible additional prep ya procedure reschedule. Brown murky stool means colon not clean enough — polyps miss ho sakte hain.",
      },
      {
        q: "Kya PEG solution peena zaroori hai ya koi alternative hai?",
        a: "PEG most effective aur commonly used hai. Alternatives: low-volume prep (2L PEG + bisacodyl). Sodium Picosulfate-based (Picolax). These are prescribed — patient cannot choose on own. Dr. Akhilesh Yadav Ranchi mein appropriate prep recommend karte hain based on patient factors.",
      },
      {
        q: "Diabetes hai — colonoscopy prep mein extra care kya?",
        a: "Clear liquid mein sugar-containing drinks careful — glucose spike. Coconut water aur plain water safer. Oral diabetes medications hold on prep day. Insulin dose — doctor se adjust karwayein. Blood sugar monitor karte rahein. Dr. Akhilesh Yadav Ranchi mein diabetic patients ko specific prep instructions dete hain.",
      },
      {
        q: "Colonoscopy ke kitni der baad normal khaana kha sakte hain?",
        a: "Procedure ke baad: liquid diet se start. 2-4 ghante: light meal (khichdi, chhachh, toast). Same day: normal light diet. Polypectomy ke baad: 24-48 ghante bland diet. Heavy meals aur alcohol: 1 din wait. Dr. Akhilesh Yadav discharge ke waqt post-procedure diet instructions dete hain.",
      },
    ],
  },

  // ── BATCH 11: BLOGS 51–55 ─────────────────────────────────────────────────────

  {
    slug: "hazaribagh-se-ranchi-gastroenterologist",
    titleHi: "Hazaribagh Se Ranchi Mein Gastroenterologist — Dr. Akhilesh Yadav",
    titleEn: "Gastroenterologist from Hazaribagh — Ranchi Specialist Dr. Akhilesh Yadav",
    excerptHi: "Hazaribagh se Ranchi gastroenterologist dekhne ki zaroorat hai? Dr. Akhilesh Yadav — Orchid Medical Centre, HB Road. Hazaribagh ke patients ke liye guide — kaise aayein, kya expect karein.",
    excerptEn: "Gastroenterologist in Ranchi for Hazaribagh patients — Dr. Akhilesh Yadav at Orchid Medical Centre. How to plan your visit, what to expect & appointment guide.",
    category: "locations",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🗺️",
    tags: ["gastroenterologist hazaribagh", "hazaribagh se ranchi gastro", "stomach doctor hazaribagh", "best gastroenterologist ranchi hazaribagh", "liver doctor hazaribagh"],
    metaTitle: "Gastroenterologist for Hazaribagh Patients — Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Hazaribagh se Ranchi gastroenterologist Dr. Akhilesh Yadav — Orchid Medical Centre, HB Road. Expert GI care, endoscopy, liver disease for Hazaribagh patients. Book today.",
    sections: [
      {
        heading: "Hazaribagh Ke Patients Ranchi Kyun Aate Hain Gastro Ke Liye",
        type: "text",
        content: "Hazaribagh se Ravi Shankar ji — 52 saal, chronic liver disease — ne kai months local level par treatment kiya lekin specialist ki zaroorat thi. Ranchi sirf 95 km door — 2-2.5 ghante ka safar. Orchid Medical Centre, HB Road, Ranchi mein Dr. Akhilesh Yadav — DM Gastroenterology — se unka first consultation hua. Dr. Akhilesh Yadav Hazaribagh, Chatra, Ramgarh, Koderma — in sabhi districts ke patients ko regularly dekhte hain. Advanced GI care ke liye Hazaribagh se nearest DM Gastroenterologist Ranchi mein available hai.",
      },
      {
        heading: "Hazaribagh Se Ranchi Kaise Aayein — Practical Guide",
        type: "text",
        content: "Hazaribagh se Ranchi (Orchid Medical Centre, HB Road): Distance: ~95 km. Time: 2-2.5 ghante (NH 33 via Ramgarh). Bus: Hazaribagh se Ranchi regular JKTC/private buses — Bus Stand se Ranchi Ranchi Main Bus Stand. Auto ya Ola/Uber: Ranchi Bus Stand se Orchid Medical Centre, HB Road — 15-20 minute. Private vehicle: National Highway 33 — Ramgarh hote hue — straight road. Train: Limited direct trains from Hazaribagh — bus recommended. Appointment: Pehle call karein +91 74919 25047 (Mon–Sat: 10 AM–2 PM, 5 PM–8 PM) — same-day ya next-day availability usually milti hai urgent cases mein.",
      },
      {
        heading: "Hazaribagh Ke Patients Ke Liye Kya Services Available Hain",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein Hazaribagh patients ke liye:",
        list: [
          "Consultation: liver disease, fatty liver, jaundice, hepatitis B/C",
          "Endoscopy (OGD Scopy): GERD, ulcer, H. Pylori, bleeding — same-day",
          "Colonoscopy: colon cancer screening, IBD, rectal bleeding",
          "ERCP: bile duct stone, stenting — Hazaribagh mein nahi hota",
          "EUS: pancreatic cyst/mass, advanced imaging",
          "IBD management: Crohn's, Ulcerative Colitis",
          "Pancreatitis management: acute aur chronic",
          "Ascites aur liver cirrhosis management",
          "Same-day procedures + follow-up plan — sirf ek trip mein complete",
        ],
      },
      {
        heading: "Hazaribagh Se Aane Se Pehle Kya Laayein",
        type: "list",
        content: "Orchid Medical Centre visit ke liye Hazaribagh se laane wali cheezein:",
        list: [
          "Purani reports: ultrasound, blood tests, endoscopy reports (agar hain)",
          "Current medications list — all tablets + doses",
          "Symptoms ka history — kab se, kya worse karta hai",
          "Insurance card agar applicable",
          "Appointment confirmation (SMS/WhatsApp)",
          "Pani aur light snack — wait hoti hai kabhi kabhi",
        ],
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Hazaribagh Patients",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Hazaribagh aur surrounding districts ke patients mere paas regular aate hain. Main unhe ek hi visit mein maximum value dene ki koshish karta hoon — consultation + procedure + follow-up plan. Taki baar baar Ranchi na aana pade. Ek din mein endoscopy bhi ho sakti hai agar NPO rule follow kiya ho — call karke confirm zaroor karein.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kya Hazaribagh se Ranchi ka ek hi din mein aana aur consultation + endoscopy possible hai?",
        a: "Haan — agar aap NPO (khaali pet, minimum 6 ghante) aate hain aur pehle se appointment le chuke hain. Morning appointment book karein (10-11 AM). Consultation + endoscopy + report same day. Evening ko Hazaribagh wapas ja sakte hain. Call karke confirm karein: +91 74919 25047.",
      },
      {
        q: "Kya Hazaribagh ke patients ke liye koi referral zaroor hai?",
        a: "Nahi — Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein direct consultation available hai. Koi referral letter ki requirement nahi. Direct appointment lein — +91 74919 25047.",
      },
      {
        q: "Hazaribagh mein follow-up kaise hoga Ranchi visit ke baad?",
        a: "Dr. Akhilesh Yadav digital follow-up facilitate karte hain — WhatsApp pe reports share, phone consultation for routine follow-ups. Major changes ya procedures ke liye Ranchi visit. Kuch cases mein 3-6 month mein ek visit sufficient hoti hai.",
      },
      {
        q: "Hazaribagh ke paas koi gastroenterologist nahi hai?",
        a: "Hazaribagh mein general physician available hain. DM Gastroenterologist (advanced GI specialist) ke liye Ranchi nearest option hai. Dr. Akhilesh Yadav Ranchi mein regularly Hazaribagh district ke patients dekhte hain.",
      },
    ],
  },

  {
    slug: "dhanbad-se-ranchi-gastroenterologist",
    titleHi: "Dhanbad Se Ranchi Gastroenterologist — Dr. Akhilesh Yadav GI Specialist",
    titleEn: "Gastroenterologist from Dhanbad — Ranchi GI Specialist Dr. Akhilesh Yadav",
    excerptHi: "Dhanbad se Ranchi mein gastroenterologist ki zaroorat? Dr. Akhilesh Yadav — Orchid Medical Centre. DM Gastroenterologist — liver, endoscopy, IBD, ERCP — complete GI care.",
    excerptEn: "Dhanbad to Ranchi gastroenterologist — Dr. Akhilesh Yadav at Orchid Medical Centre. Complete GI care for Dhanbad patients: liver, endoscopy, IBD & advanced procedures.",
    category: "locations",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🏙️",
    tags: ["gastroenterologist dhanbad", "dhanbad se ranchi gastro", "liver doctor dhanbad", "endoscopy dhanbad ranchi", "best gastroenterologist dhanbad"],
    metaTitle: "Gastroenterologist for Dhanbad Patients — Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Dhanbad se Ranchi gastroenterologist — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre, HB Road. Advanced GI care, endoscopy, ERCP for Dhanbad patients.",
    sections: [
      {
        heading: "Dhanbad Se Ranchi — Kyun Patients Aate Hain GI Care Ke Liye",
        type: "text",
        content: "Dhanbad — Jharkhand ka coal capital — aur aas paas ke areas (Sindri, Jharia, Katras) mein patients advanced GI care ke liye Ranchi aate hain. Dhanbad se Ranchi: ~160 km, 3-3.5 ghante via NH 2/NH 19. Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi. Dhanbad district ke patients ke liye advanced procedures jo locally available nahi: ERCP, EUS, capsule endoscopy, biologics for IBD. Dhanbad mein liver specialist aur advanced GI endoscopy ki availability limited hai — Ranchi nearest comprehensive GI centre hai.",
      },
      {
        heading: "Dhanbad Se Ranchi — Travel Options",
        type: "text",
        content: "Dhanbad to Ranchi (Orchid Medical Centre, HB Road): By Bus: Dhanbad Bus Stand se Ranchi direct — multiple daily routes. 3-4 ghante. By Train: Dhanbad to Ranchi — multiple trains (Jharkhand Express, etc.) — 3.5-4 ghante. By Car/Taxi: NH 2 via Govindpur/Hazaribagh — 3-3.5 ghante. Fastest: Private car — early morning departure recommended. Orchid Medical Centre, HB Road: Bus Stand/Railway Station se auto ya Ola — 20-25 minute. Appointment: +91 74919 25047 — confirm before leaving. Emergency cases: call ahead for priority.",
      },
      {
        heading: "Dhanbad Patients — Dr. Akhilesh Yadav Se Kya Milega",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein Dhanbad patients ke liye advanced GI care:",
        list: [
          "Chronic Liver Disease — hepatitis B/C, cirrhosis, portal hypertension",
          "Fatty Liver (NAFLD/MASLD) — grading, advanced fibrosis assessment",
          "Jaundice workup — infectious vs obstructive vs hepatocellular",
          "Endoscopy (OGD Scopy) — same-day procedure possible",
          "Colonoscopy — bowel cancer screening, IBD, rectal bleeding",
          "ERCP — bile duct stones, Dhanbad mein nahi milta",
          "IBD (Crohn's/Colitis) management — biologics, step-up therapy",
          "Pancreatitis — acute/chronic management, EUS",
        ],
      },
      {
        heading: "Dhanbad Se Same-Day Visit — Kaise Plan Karein",
        type: "text",
        content: "Dr. Akhilesh Yadav ke saath Dhanbad se same-day visit planning: Pehle din: Call karein +91 74919 25047 — appointment book karein. Endoscopy chahiye toh NPO ka time batao (6-8 ghante khaali pet). Travel: Raat ko ya very early morning nikal sakte hain. Orchid Medical Centre pahunchein: 10 AM appointment mein. Consultation + procedure (agar pre-arranged): done by early afternoon. Return: Evening tak Dhanbad wapas. Ek din mein complete GI assessment possible hai — sir darbaar ek baar.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Dhanbad Patients",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Dhanbad aur mining belt ke patients ko pata hai ki serious GI condition mein Ranchi aana padega. Main koshish karta hoon ki unka ek visit productive ho — sari zarori cheezein ek din mein ho jayein. ERCP, colonoscopy, endoscopy — sab plan karta hoon pehle se unke convenience ke hisaab se.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Dhanbad mein koi gastroenterologist nahi milta kya?",
        a: "Dhanbad mein kuch GI doctors available hain — lekin DM Gastroenterology qualified specialist aur advanced procedures (ERCP, EUS, biologics, complex IBD) ke liye Ranchi aana padta hai. Dr. Akhilesh Yadav Ranchi mein Dhanbad patients regularly dekhte hain.",
      },
      {
        q: "Dhanbad se Ranchi ek hi baar mein sab ho jayega?",
        a: "Haan — properly plan karo: appointment + NPO for endoscopy if needed + reports saath lao. Ek din mein consultation + endoscopy ya colonoscopy complete ho sakta hai. ERCP/EUS ke liye kuch cases mein 2 trips zaroor ho sakti hain depending on case complexity.",
      },
      {
        q: "Kya Dr. Akhilesh Yadav Dhanbad aate hain ya only Ranchi?",
        a: "Dr. Akhilesh Yadav Orchid Medical Centre, HB Road, Ranchi mein practice karte hain. Dhanbad mein visiting clinic nahi hai currently. Patients Ranchi aate hain consultation ke liye.",
      },
    ],
  },

  {
    slug: "deoghar-se-ranchi-gastroenterologist",
    titleHi: "Deoghar Se Ranchi Gastroenterologist — Dr. Akhilesh Yadav Liver Specialist",
    titleEn: "Gastroenterologist from Deoghar — Ranchi Liver Specialist Dr. Akhilesh Yadav",
    excerptHi: "Deoghar aur Santhal Pargana se Ranchi mein gastroenterologist — Dr. Akhilesh Yadav — Orchid Medical Centre. Liver disease, endoscopy, ERCP — complete GI care for Deoghar patients.",
    excerptEn: "Deoghar to Ranchi gastroenterologist — Dr. Akhilesh Yadav, DM Gastroenterologist. Liver disease, jaundice, endoscopy & ERCP for Deoghar and Santhal Pargana patients.",
    category: "locations",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🙏",
    tags: ["gastroenterologist deoghar", "deoghar se ranchi gastro", "liver doctor deoghar", "endoscopy deoghar", "best gastroenterologist deoghar"],
    metaTitle: "Gastroenterologist for Deoghar Patients — Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "Deoghar se Ranchi gastroenterologist — Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre. Liver disease, jaundice, ERCP for Deoghar patients.",
    sections: [
      {
        heading: "Deoghar Se Patients Ranchi Kyun Aate Hain — Gastro Ke Liye",
        type: "text",
        content: "Deoghar — Jharkhand ka religious aur cultural hub — se kai patients Orchid Medical Centre, Ranchi aate hain Dr. Akhilesh Yadav ke paas. Deoghar aur Santhal Pargana mein jaundice, liver disease, hepatitis ka burden zyada hai — Ganga basin area mein waterborne hepatitis A/E common hai. Dr. Akhilesh Yadav kehte hain: 'Deoghar aur Dumka, Godda, Sahibganj se bahut patients aate hain — liver disease, jaundice, aur ERCP ke liye khaastan.' Deoghar se Ranchi: ~220 km, 4-4.5 ghante. Typically ek raat Ranchi ruk ke procedures complete karna better hota hai.",
      },
      {
        heading: "Deoghar Se Ranchi Travel — Practical Information",
        type: "text",
        content: "Deoghar to Ranchi (Orchid Medical Centre): Distance: ~220 km. Time: 4-4.5 ghante by road. Route: NH 2 via Giridih ya Jamtara — Ranchi. By Train: Limited direct option — road travel faster typically. By Bus: Deoghar se Ranchi direct — JKTC/private 5-6 ghante typically. Recommend: Private car/taxi — more comfortable for patients who are unwell. Plan: 1-2 din Ranchi mein rukhein agar multiple procedures — endoscopy + consultation. Orchid Medical Centre accommodation options: nearby dharamshalas/budget hotels HB Road area. Appointment: +91 74919 25047 — early call for planning.",
      },
      {
        heading: "Deoghar Patients Ke Liye Specific Conditions — Dr. Akhilesh Yadav",
        type: "list",
        content: "Deoghar aur Santhal Pargana ke common GI conditions jo Dr. Akhilesh Yadav treat karte hain:",
        list: [
          "Hepatitis A/E (waterborne) — acute liver disease, jaundice",
          "Hepatitis B — chronic liver disease, cirrhosis prevention",
          "Obstructive Jaundice — bile duct stone, gallstone — ERCP",
          "Alcoholic Liver Disease — common in tribal areas",
          "Peptic Ulcer — H. Pylori — endoscopy aur treatment",
          "Iron Deficiency Anemia — GI cause workup",
          "Kala-azar related liver splenomegaly",
          "Intestinal tuberculosis — misdiagnosed IBD",
        ],
      },
      {
        heading: "Deoghar Se Ranchi Visit — Kaise Plan Karein",
        type: "text",
        content: "Dr. Akhilesh Yadav ke saath Deoghar se visit planning: Step 1: Sabse pehle call karein +91 74919 25047 — symptoms aur previous reports discuss karein. Step 2: Appointment book karein — agar endoscopy ya ERCP zaroor toh 2-din trip plan karein. Step 3: Sabhi purani reports, test results, medicines saath laayein. Step 4: 1 din pehle Ranchi pahunchein agar ERCP/colonoscopy hai — bowel prep ya fasting ensure karna padta hai. Step 5: Procedure ke baad Dr. Akhilesh Yadav results explain karte hain — follow-up plan dete hain. Step 6: Routine follow-ups often telephonic ya WhatsApp pe — agle visit ki frequency case pe depend karti hai.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Deoghar Patients",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Deoghar aur Santhal Pargana ke patients ke liye main especially concerned rehta hoon — yahan liver disease ka burden kaafi hai aur awareness kam. Hepatitis B ka vaccine aur timely treatment liver cirrhosis rokta hai. Main unhe encourage karta hoon ki diagnosis mein der na karein — Ranchi aana zaroor hai agar local mein kuch nahi ho raha.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Deoghar mein koi DM Gastroenterologist hai?",
        a: "Deoghar mein specialist GI care limited hai. DM Gastroenterology qualified doctor ke liye nearest comprehensive center Ranchi hai. Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein available hain.",
      },
      {
        q: "Kya jaundice mein Deoghar se Ranchi le jaana theek hai?",
        a: "Haan — agar jaundice severe hai, obstructive jaundice suspect ho (pale stool, dark urine, itching), ya local doctors ne refer kiya ho — Ranchi aana chahiye. Dr. Akhilesh Yadav Ranchi mein jaundice workup aur ERCP (agar bile duct stone) karte hain. Emergency mein: immediately Ranchi ke liye niklo aur call karein.",
      },
      {
        q: "Deoghar mein waterborne jaundice ka kaafi problem hai — kya vaccination help karti hai?",
        a: "Hepatitis A vaccine (2 doses) aur Hepatitis B vaccine (3 doses) — dono recommended. Hepatitis A/E ka koi antiviral treatment nahi — supportive care. Prevention: safe water, hand hygiene. Deoghar mein public water quality — purification zaroor. Dr. Akhilesh Yadav vaccination counseling karte hain.",
      },
    ],
  },

  {
    slug: "orchid-medical-centre-gastro-ranchi",
    titleHi: "Orchid Medical Centre Ranchi — Gastroenterology Clinic | Dr. Akhilesh Yadav",
    titleEn: "Orchid Medical Centre Ranchi — Gastroenterology Clinic | Dr. Akhilesh Yadav",
    excerptHi: "Orchid Medical Centre, HB Road, Ranchi — Dr. Akhilesh Yadav — DM Gastroenterology. Facilities, timing, procedures, location guide aur appointment information — complete guide.",
    excerptEn: "Orchid Medical Centre Ranchi gastroenterology clinic — Dr. Akhilesh Yadav, DM Gastroenterologist. Facilities, appointment, procedures, timing & location guide.",
    category: "locations",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🏥",
    tags: ["orchid medical centre ranchi", "orchid medical centre gastroenterologist", "HB road ranchi gastro", "orchid medical centre dr akhilesh", "gastroenterologist ranchi orchid"],
    metaTitle: "Orchid Medical Centre Ranchi — Gastroenterology | Dr. Akhilesh Yadav",
    metaDescription: "Orchid Medical Centre, HB Road, Ranchi — gastroenterology clinic. Dr. Akhilesh Yadav, DM Gastroenterologist. Timing, facilities, appointment guide & location.",
    sections: [
      {
        heading: "Orchid Medical Centre Ranchi — Gastroenterology Ka Hub",
        type: "text",
        content: "Orchid Medical Centre, HB Road, Ranchi — yahan Dr. Akhilesh Yadav, DM Gastroenterology, apni specialized GI practice chalate hain. HB Road Ranchi ka medical corridor hai — accessible from all directions. Orchid Medical Centre established multi-specialty facility hai jahan Dr. Akhilesh Yadav ke pass dedicated gastroenterology consultation aur procedure facility hai. Jharkhand, Bihar, aur Chhattisgarh ke patients yahan aate hain — liver disease, endoscopy, ERCP, IBD management ke liye. Full address: Orchid Medical Centre, HB Road, Ranchi, Jharkhand — 834001.",
      },
      {
        heading: "Orchid Medical Centre Timing — Dr. Akhilesh Yadav",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi mein consultation timing:",
        list: [
          "Monday to Saturday: 10:00 AM – 2:00 PM (Morning OPD)",
          "Monday to Saturday: 5:00 PM – 8:00 PM (Evening OPD)",
          "Sunday: Closed (emergency consultation: call +91 74919 25047)",
          "Endoscopy: typically morning slot — pre-arranged appointment zaroor",
          "ERCP/EUS: pre-booked procedure days — call to schedule",
          "Colonoscopy: morning procedure — bowel prep day before",
        ],
      },
      {
        heading: "Orchid Medical Centre — Gastroenterology Facilities",
        type: "list",
        content: "Dr. Akhilesh Yadav ke saath Orchid Medical Centre mein available:",
        list: [
          "Dedicated Gastroenterology OPD — private consultation",
          "HD Video Endoscopy Suite — upper GI (OGD Scopy)",
          "Colonoscopy — lower GI — HD video",
          "ERCP — bile duct procedure",
          "EUS — Endoscopic Ultrasound",
          "Biopsy, H. Pylori testing — therapeutic endoscopy",
          "IV Sedation — comfortable conscious sedation",
          "Digital reporting — same-day results",
          "UPI/Card/Cash payment — insurance coordination available",
        ],
      },
      {
        heading: "Orchid Medical Centre Ranchi — Kaise Pahunchein",
        type: "text",
        content: "Orchid Medical Centre, HB Road, Ranchi pahunchne ke liye: HB Road Ranchi ka central aur well-connected road hai. Ranchi Main Bus Stand se: Auto/Ola — 15-20 minute. Ranchi Railway Station se: Auto/Ola — 20-25 minute. Birsa Munda Airport se: 30-35 minute. Parking: limited on HB Road — nearby parking spots available. Google Maps: Search 'Orchid Medical Centre HB Road Ranchi' — accurate location. Landmarks: Dr. Akhilesh Yadav ke clinic signage visible — HB Road main road par.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Orchid Medical Centre",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Orchid Medical Centre mein main dedicated gastroenterology care deta hoon — sirf pet aur liver ke liye. Patients ko yahan ek experienced DM Gastroenterologist milta hai jo unhein clearly explain karta hai — Hindi mein — kya ho raha hai aur kya karna hai. Jharkhand ke patients deserve karte hain world-class GI care locally.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Orchid Medical Centre mein walk-in possible hai ya appointment zaroor hai?",
        a: "Walk-in possible hai — lekin appointment lena better hai, especially procedures ke liye (endoscopy, ERCP). Walk-in mein wait zyada ho sakta hai. Appointment: +91 74919 25047. WhatsApp bhi available hai.",
      },
      {
        q: "Kya Orchid Medical Centre mein emergency endoscopy hoti hai?",
        a: "Upper GI bleeding (hematemesis — khoon ki ulti) emergency mein: immediately +91 74919 25047 call karein. Dr. Akhilesh Yadav emergency endoscopy coordinate karte hain Orchid Medical Centre mein agar available ho. Critical cases hospital admission ke liye coordinate hote hain.",
      },
      {
        q: "Kya Dr. Akhilesh Yadav ke alawa bhi gastroenterologist hain Orchid Medical Centre mein?",
        a: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein gastroenterology practice karte hain. Clinic mein other specialists bhi hain different specialties ke liye. Gastroenterology specifically Dr. Akhilesh Yadav ka department hai.",
      },
      {
        q: "Orchid Medical Centre mein cashless insurance kaise claim karein?",
        a: "Appointment ke waqt insurance card laayein. Orchid Medical Centre coordination karta hai select insurers ke saath. Pre-authorization zaroor hoti hai planned procedures ke liye. Dr. Akhilesh Yadav clinic staff aapki help karega insurance process mein.",
      },
    ],
  },

  {
    slug: "ranchi-mein-liver-test",
    titleHi: "Ranchi Mein Liver Test — Kaunsa Test, Kab Karwayein | Dr. Akhilesh Yadav",
    titleEn: "Liver Tests in Ranchi — Which Test, When & Why | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein liver test guide: LFT, viral markers, fibroscan, liver biopsy — kaunsa test kab zaroor hai. Dr. Akhilesh Yadav — Orchid Medical Centre — complete liver test guide.",
    excerptEn: "Liver test guide for Ranchi patients — LFT, hepatitis markers, fibroscan & biopsy explained by Dr. Akhilesh Yadav. When each test is needed & what results mean.",
    category: "conditions",
    readTimeMins: 8,
    publishedAt: "August 2026",
    emoji: "🧪",
    tags: ["liver test ranchi", "LFT test ranchi", "fibroscan ranchi", "liver biopsy ranchi", "hepatitis test ranchi", "gastroenterologist ranchi"],
    metaTitle: "Liver Tests in Ranchi — LFT, Fibroscan, Biopsy Guide | Dr. Akhilesh Yadav",
    metaDescription: "Liver test guide for Ranchi patients — LFT, hepatitis markers, fibroscan, liver biopsy by Dr. Akhilesh Yadav, DM Gastroenterologist. What each test means.",
    sections: [
      {
        heading: "Liver Test Kyun Zaroor Hai — Aur Kaunsa Pehle Karwayein",
        type: "text",
        content: "Ranchi ke ek 45-saal ke patient — Mahesh Kumar — 2 saal se thakaan aur pet mein bhari feeling tha. Annual health check mein LFT (Liver Function Test) mein SGOT/SGPT slightly raised mili. Local doctor ne kaha 'chinta mat karo' — par Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre mein milne ke baad pata chala ki Grade 2 fatty liver hai. Liver tests kai prakar ke hote hain — aur ek test se pura picture nahi milta. Dr. Akhilesh Yadav Ranchi mein systematically liver test recommend karte hain based on clinical picture.",
      },
      {
        heading: "Liver Tests — Kaunsa Kya Batata Hai",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein yeh liver tests use karte hain:",
        list: [
          "LFT (Liver Function Test): SGOT/SGPT (liver cell damage), Bilirubin (jaundice level), ALP/GGT (bile duct), Albumin (liver function), PT/INR (clotting function)",
          "Hepatitis Panel: HBsAg (Hep B surface antigen), Anti-HCV (Hep C antibody), Hep B DNA/Hep C RNA (viral load)",
          "Ultrasound Abdomen: liver size, echogenicity (fatty vs normal), focal lesions, spleen size",
          "Fibroscan (Transient Elastography): liver stiffness = fibrosis stage — F0 to F4",
          "ARFI/SWE (Shear Wave Elastography): ultrasound-based fibrosis assessment",
          "Liver Biopsy: definitive — inflammation grade, fibrosis stage; invasive",
          "Serum Ferritin, Ceruloplasmin: hemochromatosis, Wilson's disease",
          "ANA, Anti-LKM: autoimmune hepatitis",
        ],
      },
      {
        heading: "Fibroscan — Ranchi Mein Kaise Hota Hai",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein Fibroscan coordinate karte hain. Fibroscan — Transient Elastography — liver fibrosis assess karta hai bina biopsy ke. A probe skin par rakha jaata hai (right side, intercostal) — ultrasound wave bheja jaata hai — stiffness measure hoti hai kPa mein. Results: F0-F1 (<7.1 kPa): no/minimal fibrosis — normal. F2 (7.1-9.5 kPa): significant fibrosis. F3 (9.5-12.5 kPa): advanced fibrosis. F4 (>12.5 kPa): cirrhosis likely. CAP (Controlled Attenuation Parameter): fatty liver grade (S0-S3). Fibroscan + LFT + viral markers = complete liver assessment. Dr. Akhilesh Yadav results interpret karte hain aur next steps guide karte hain.",
      },
      {
        heading: "Liver Test Results — Kab Urgent Hai, Kab Wait Ho Sakta Hai",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi mein liver test results ke baad urgency assess karte hain: URGENT — immediately milein: Bilirubin >5 mg/dL (severe jaundice). PT/INR >1.5 (coagulation impaired). Albumin <3 g/dL (liver failing). Acute hepatitis + altered consciousness. SOON (within 1-2 weeks): SGPT >3x normal. New hepatitis B/C diagnosis. Fatty liver grade 2+ with fibrosis. ROUTINE (1-3 months): Mild SGPT elevation (<2x). Stable chronic liver disease monitoring. Hepatitis B carrier — annual surveillance. Dr. Akhilesh Yadav specifically guide karte hain — report lekar seedha milein.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Liver Tests",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Liver tests ek panel hai — ek report se sab nahi pata chalta. Main patients ko bolta hoon: sirf SGPT dekh ke pareshaan mat ho, aur sirf normal LFT dekh ke nishshchint mat ho. Fibroscan bata sakta hai ki fatty liver se fibrosis shuru hua hai ya nahi. Early detection — treatment se zyada effective hoti hai.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Liver reports lekar Dr. Akhilesh Yadav se milein for expert interpretation.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Normal LFT mein bhi fatty liver ho sakti hai?",
        a: "Haan — bilkul. 20-30% fatty liver patients mein SGPT/SGOT normal hoti hai. Diagnosis ke liye ultrasound better initial test hai. Fibroscan — fibrosis assess karta hai chahe LFT normal ho. Dr. Akhilesh Yadav Ranchi mein fatty liver ke liye complete assessment karte hain — sirf LFT nahi.",
      },
      {
        q: "Fibroscan Ranchi mein available hai?",
        a: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein fibroscan coordinate karte hain. Availability aur scheduling ke liye +91 74919 25047 contact karein. Kuch cases mein referral diagnostic centre bhi suggest karte hain.",
      },
      {
        q: "Liver biopsy kab zaroor hoti hai?",
        a: "Liver biopsy tab zaroor hai jab: fibroscan aur LFT se diagnosis unclear ho, autoimmune hepatitis diagnose karna ho, fibrosis stage treatment decision change kare (e.g., antiviral ya not). Dr. Akhilesh Yadav Ranchi mein liver biopsy (endoscopic/percutaneous) karte hain — select cases mein.",
      },
      {
        q: "Hepatitis B positive aaya — abhi kya karein?",
        a: "Immediately Dr. Akhilesh Yadav se milein. Assess karwana padega: HBsAg + Hep B DNA viral load + LFT + Fibroscan + HBeAg/anti-HBe status. Treatment decision (antiviral — tenofovir/entecavir) is complete assessment ke baad. Panic nahi — hepatitis B treatable/manageable hai early detection mein.",
      },
    ],
  },

  // ── BATCH 12: BLOGS 56–60 ─────────────────────────────────────────────────────

  {
    slug: "ranchi-mein-stomach-cancer-screening",
    titleHi: "Ranchi Mein Stomach Cancer Screening — Gastric Cancer Detection | Dr. Akhilesh Yadav",
    titleEn: "Stomach Cancer Screening in Ranchi — Early Gastric Cancer Detection | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein stomach cancer (gastric cancer) screening: Dr. Akhilesh Yadav — Orchid Medical Centre. Kise karwana chahiye, kab karwana chahiye, aur kya expect karein.",
    excerptEn: "Stomach cancer (gastric cancer) screening in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Who needs screening, when & what to expect from early detection.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🔭",
    tags: ["stomach cancer screening ranchi", "gastric cancer ranchi", "cancer screening ranchi", "gastroenterologist ranchi", "early cancer detection ranchi"],
    metaTitle: "Stomach Cancer Screening Ranchi | Early Detection | Dr. Akhilesh Yadav",
    metaDescription: "Stomach cancer screening in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Early gastric cancer detection with endoscopy. Know your risk & when to screen.",
    sections: [
      {
        heading: "Stomach Cancer — Ranchi Aur Jharkhand Mein Iska Burden",
        type: "text",
        content: "Gastric cancer (stomach cancer) India mein 5th most common cancer hai aur mortality mein upar hai — kyunki zyada cases late stage mein diagnose hote hain. Jharkhand mein specific risk factors: H. Pylori infection (very common in Jharkhand), smoked aur salted food (litti-chokha mein salt content), kuch areas mein water quality, alcohol, family history. Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein kehte hain: 'Jharkhand mein gastric cancer ke cases main regularly dekhta hoon — aur agar 2-3 saal pehle endoscopy hui hoti toh early stage mein milta.' Early detection = better outcomes.",
      },
      {
        heading: "Kise Stomach Cancer Screening Karwani Chahiye — Risk Factors",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein in patients ko screening recommend karte hain:",
        list: [
          "Age 40+ with any GI symptoms — upper abdominal pain, loss of appetite, weight loss",
          "H. Pylori infection history — especially if not treated",
          "Family history of gastric cancer (first-degree relative)",
          "Chronic atrophic gastritis ya intestinal metaplasia diagnosis",
          "Previous gastric polyps",
          "Pernicious anemia",
          "Smoking + alcohol combination",
          "Long-term NSAID use with GI symptoms",
          "Post-gastrectomy patients (remaining stomach after surgery)",
        ],
      },
      {
        heading: "Stomach Cancer Screening — Endoscopy Kya Dikhata Hai",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein upper GI endoscopy se stomach cancer screening karte hain: Early gastric cancer: flat or slightly raised lesion, subtle color change — HD endoscopy + NBI (Narrow Band Imaging) se detect hota hai. Suspicious findings: irregular mucosa, non-healing ulcer, mass. Biopsy: suspicious areas se tissue liya jaata hai — pathology mein cancer confirm ya rule out. Pre-cancerous conditions: intestinal metaplasia, dysplasia — surveillance schedule plan ki jaati hai. Dr. Akhilesh Yadav chromoendoscopy aur advanced imaging techniques use karte hain subtle early lesions detect karne ke liye.",
      },
      {
        heading: "Alarm Symptoms — Immediate Endoscopy Karwayein",
        type: "list",
        content: "Yeh symptoms mein Dr. Akhilesh Yadav Ranchi mein urgent endoscopy recommend karte hain:",
        list: [
          "Unexplained weight loss >5% in 3 months",
          "Persistent upper abdominal pain (>4 weeks, not responding to antacids)",
          "Dysphagia — khana nigalne mein takleef",
          "Vomiting blood (hematemesis) ya coffee-ground vomiting",
          "Tarry black stools (melena)",
          "New-onset iron deficiency anemia in adults 40+",
          "Loss of appetite with early satiety",
          "Progressive dyspepsia starting after age 40",
        ],
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Stomach Cancer Screening",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Stomach cancer mein survival directly stage se linked hai. Stage 1 mein — 80-90% 5-year survival. Stage 4 mein — 5% se kam. Endoscopy ek simple procedure hai — agar koi alarm symptom hai ya age 45+ se upar ho aur family history ho, toh ek baar zaroor karwao. Miss mat karo.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Cancer screening ke liye specialist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kya stomach cancer endoscopy se pakad mein aata hai?",
        a: "Haan — upper GI endoscopy best tool hai early gastric cancer ke liye. HD endoscopy + NBI se subtle mucosal changes detect hoti hain. Biopsy se confirm hota hai. Ranchi mein Dr. Akhilesh Yadav Orchid Medical Centre mein advanced endoscopy karte hain — early lesion miss nahi honi chahiye.",
      },
      {
        q: "H. Pylori treatment se stomach cancer ka risk kam hota hai?",
        a: "Haan — H. Pylori eradication se gastric cancer risk 30-40% reduce hota hai (evidence-based). Isliye Dr. Akhilesh Yadav Ranchi mein H. Pylori detect aur treat karte hain proactively. Triple/quadruple therapy se H. Pylori eradicate hota hai — confirmation test (urea breath test) 4-6 hafte baad.",
      },
      {
        q: "Stomach cancer ka dard kaisa hota hai?",
        a: "Early stage mein: often no pain ya mild epigastric discomfort — ulcer jaisa. Isliye early cancer miss ho jaata hai. Advanced stage mein: persistent pain, fullness, weight loss, vomiting. Dard se cancer stage judge nahi hota — endoscopy se pata chalta hai. Alarm symptoms mein se koi bhi ho — immediately milein.",
      },
    ],
  },

  {
    slug: "ranchi-mein-food-allergy-doctor",
    titleHi: "Ranchi Mein Food Allergy Doctor — GI Food Intolerance | Dr. Akhilesh Yadav",
    titleEn: "Food Allergy Doctor in Ranchi — GI Food Intolerance Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein food allergy aur food intolerance specialist: Dr. Akhilesh Yadav — Orchid Medical Centre. Celiac disease, lactose intolerance, IBS-food triggers — diagnosis aur management.",
    excerptEn: "Food allergy and GI food intolerance specialist in Ranchi — Dr. Akhilesh Yadav. Celiac disease, lactose intolerance & IBS food triggers diagnosed & managed at Orchid Medical Centre.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🌾",
    tags: ["food allergy doctor ranchi", "food intolerance ranchi", "celiac disease ranchi", "lactose intolerance ranchi", "gluten intolerance ranchi", "gastroenterologist ranchi"],
    metaTitle: "Food Allergy Doctor Ranchi | Celiac Disease, Food Intolerance | Dr. Akhilesh Yadav",
    metaDescription: "Food allergy & GI food intolerance specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Celiac disease, lactose intolerance & IBS food triggers.",
    sections: [
      {
        heading: "Food Allergy vs Food Intolerance — Fark Kya Hai Aur Ranchi Mein Doctor Kaun",
        type: "text",
        content: "Ranchi ki 28-saal ki Neha — roti khaate hi bloating, dast, aur thakaan. Doctor ne 'IBS' bola aur antacid diya — 2 saal tak better nahi hui. Orchid Medical Centre mein Dr. Akhilesh Yadav — DM Gastroenterology — ne celiac disease diagnose ki (anti-tTG antibody + duodenal biopsy). Gluten-free diet se 3 mahine mein dramatic improvement. Food allergy: immune response — immediate symptoms (hives, throat tightening) — severe cases anaphylaxis. Food intolerance: digestive enzyme deficiency ya gut sensitivity — delayed GI symptoms. GI food intolerance (celiac, lactose, fructose malabsorption) — gastroenterologist ki field hai.",
      },
      {
        heading: "GI Food Intolerances — Dr. Akhilesh Yadav Ranchi Mein Kya Diagnose Karte Hain",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein yeh GI food conditions diagnose karte hain:",
        list: [
          "Celiac Disease: anti-tTG IgA blood test + duodenal biopsy — gluten (wheat/roti/maida) se triggered",
          "Non-Celiac Gluten Sensitivity: celiac markers negative, lekin gluten se symptoms",
          "Lactose Intolerance: lactase enzyme deficiency — doodh/dahi se gas, bloating, diarrhea",
          "Fructose Malabsorption: excess fructose from fruits, honey, aloo — GI symptoms",
          "FODMAP Intolerance: fermentable carbohydrates — IBS trigger",
          "Food Protein-Induced Enterocolitis (FPIES): infants mein — serious food reactions",
          "Eosinophilic Esophagitis/Gastritis: eosinophil-driven GI inflammation",
        ],
      },
      {
        heading: "Celiac Disease Ranchi — Jharkhand Mein Underdiagnosed",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein kehte hain: 'Celiac disease Jharkhand mein bahut underdiagnosed hai — patients saalon tak IBS, anemia, ya general weakness ke label mein rehte hain.' Celiac disease: small intestine mein villi damage — gluten se. India mein prevalence ~1% — lekin diagnosis rate kaafi kam hai. Jharkhand mein wheat-based roti, maida — daily staple. Celiac patients mein chronic diarrhea, anemia, weight loss, bloating common. Testing: anti-tTG IgA + total IgA. Confirmation: upper endoscopy + duodenal biopsy (Marsh grading). Treatment: strict lifetime gluten-free diet — jowar, bajra, rice, makka okay — gehun, jau, rye avoid.",
      },
      {
        heading: "Low-FODMAP Diet — IBS Food Triggers Ranchi Context Mein",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein IBS patients ko low-FODMAP diet explain karte hain. High-FODMAP (Jharkhand diet mein common): Onion (pyaaz), garlic (lahsun) — HIGH FODMAP. Milk (doodh), yogurt (dahi) — lactose. Wheat (roti, maida) — fructans. Litti (sattu + ghee) — check karna padega. Mango, watermelon — excess fructose. Beans (daal) — galactans. Low-FODMAP (Jharkhand mein available): Rice, poha, rice flour roti. Lauki, karela, palak, gajar. Banana (ripe), papaya. Dahi (small amount — lactose lower). Chhachh (low-FODMAP if small serving). Dr. Akhilesh Yadav Ranchi ke patients ko local food context mein FODMAP guide karte hain.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Food Allergy/Intolerance",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Food intolerance mein self-diagnosis dangerous ho sakta hai — bina testing ke gluten-free ya dairy-free mat jao. Celiac test ke liye gluten khaana zaroor hai pre-test — nahi toh result false negative aayega. Ranchi mein main properly test karta hoon, diagnose karta hoon, phir diet plan karta hoon — sirf guess nahi.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kya dahi aur chhachh celiac disease mein kha sakte hain?",
        a: "Haan — dairy naturally gluten-free hai. Celiac disease mein dahi, chhachh, doodh okay hain (lactose intolerance alag cheez hai). Dhyan rakho: flavored yogurt, packaged dairy products mein wheat starch ya malt — label check karo. Dr. Akhilesh Yadav Ranchi mein celiac diet counseling dete hain.",
      },
      {
        q: "Kya sattu (Jharkhand/Bihar staple food) celiac mein safe hai?",
        a: "Traditional sattu: roasted chana (chickpea) — gluten-free. Lekin market sattu mein wheat mix hoti hai often (cost cutting). Celiac patients: pure chana sattu ya certified gluten-free product use karein. Dr. Akhilesh Yadav Ranchi mein patients ko Jharkhand-specific foods ke baare mein guide karte hain.",
      },
      {
        q: "Lactose intolerance aur celiac disease dono saath ho sakte hain?",
        a: "Haan — secondary lactose intolerance active celiac disease mein hoti hai (damaged villi = less lactase enzyme). Strict gluten-free diet se villi heal hoti hai aur lactase improve hoti hai — secondary lactose intolerance resolve ho jaati hai typically 6-12 mahine mein. Primary lactose intolerance (genetic) alag condition hai.",
      },
    ],
  },

  {
    slug: "ranchi-mein-ascites-treatment",
    titleHi: "Ranchi Mein Ascites Treatment — Pet Mein Paani Ka Ilaj | Dr. Akhilesh Yadav",
    titleEn: "Ascites Treatment in Ranchi — Abdominal Fluid Management | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein ascites (pet mein paani) ka treatment: Dr. Akhilesh Yadav — Orchid Medical Centre. Liver cirrhosis se judi ascites — diuretics, paracentesis, SBP prevention — complete guide.",
    excerptEn: "Ascites treatment in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Liver cirrhosis ascites management: diuretics, therapeutic paracentesis & SBP prevention.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "💧",
    tags: ["ascites treatment ranchi", "pet mein paani ranchi", "liver cirrhosis ascites ranchi", "paracentesis ranchi", "gastroenterologist ranchi"],
    metaTitle: "Ascites Treatment Ranchi | Pet Mein Paani | Dr. Akhilesh Yadav",
    metaDescription: "Ascites (pet mein paani) treatment in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Liver cirrhosis ascites management, paracentesis & SBP prevention.",
    sections: [
      {
        heading: "Ascites — Pet Mein Paani Kyon Aata Hai",
        type: "text",
        content: "Ascites matlab pet mein abnormal fluid accumulation. Ranchi mein commonly liver cirrhosis se hota hai — Jharkhand mein alcohol-related liver disease aur hepatitis B/C dominant cause hain. Kaise hota hai: Liver cirrhosis → portal hypertension (liver ka blood pressure badh jaata hai) → fluid portal veins se abdomen mein leak hota hai → ascites. Secondary ascites: cancer (peritoneal), heart failure, kidney disease, tuberculosis. Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein ascites patients regularly aate hain — especially liver disease se.",
      },
      {
        heading: "Ascites — Diagnosis Kaise Hoti Hai",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein ascites diagnosis: Clinical: shifting dullness, fluid thrill — exam se detect hoti hai moderate-large ascites. Ultrasound Abdomen: even small amount detect — 100mL se kam bhi. Diagnostic Paracentesis (fluid tap): important step. 50-100mL fluid liya jaata hai analysis ke liye. SAAG (Serum-Ascites Albumin Gradient): ≥1.1 → portal hypertension (cirrhosis, heart failure). <1.1 → malignancy, TB, pancreatitis. Cell count: SBP (spontaneous bacterial peritonitis) rule out — PMN >250 cells. Protein, LDH, ADA, cytology — as needed. Cause-specific workup: LFT, viral markers, liver imaging.",
      },
      {
        heading: "Ascites Treatment — Dr. Akhilesh Yadav Ranchi Ka Approach",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein cirrhotic ascites manage karte hain:",
        list: [
          "Salt restriction: 2g/day sodium — Jharkhand food mein — achaar, papad, namkeen avoid",
          "Diuretics: Spironolactone (aldactone) + Furosemide (lasix) — standard combination",
          "Monitoring: daily weight, urine output, electrolytes (potassium especially)",
          "Large Volume Paracentesis (LVP): >5L ascites — albumin infusion saath zaroor",
          "TIPS (Transjugular Intrahepatic Portosystemic Shunt): refractory ascites — specialized procedure",
          "SBP Prevention: norfloxacin prophylaxis in high-risk patients",
          "Liver transplant evaluation: end-stage liver disease — timely referral",
          "Avoid NSAIDs, nephrotoxic drugs — worsens kidney function",
        ],
      },
      {
        heading: "SBP — Ascites Ki Dangerous Complication",
        type: "text",
        content: "SBP (Spontaneous Bacterial Peritonitis) — ascitic fluid mein infection — cirrhosis patients mein 10-30% hota hai. Dangerous: 20-30% mortality agar late diagnose ho. Dr. Akhilesh Yadav Ranchi mein SBP ke baare mein patients ko alert karte hain. Symptoms: fever, abdominal pain, mental confusion (encephalopathy) — ya koi symptom nahi bhi. Diagnosis: paracentesis — PMN >250 cells/mm3. Treatment: IV antibiotics (cefotaxime/ceftriaxone) + albumin infusion. Prevention: norfloxacin (400mg daily) — high-risk patients mein. Message: ascites patient mein fever ya pain hone par immediately Dr. Akhilesh Yadav se contact karein — SBP emergency hai.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Ascites",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Ascites ek warning sign hai ki liver disease advanced ho chuki hai. Lekin proper management se patients saalon tak quality life jee sakte hain. Salt restriction, diuretics, aur regular monitoring — yeh simple steps bahut important hain. Aur koi bhi fever, confusion, ya sudden pain — immediately aao — SBP emergently treat honi chahiye.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Ascites ke liye DM Gastroenterologist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Ascites mein diet mein kya avoid karein — Jharkhand ke context mein?",
        a: "Salt restriction <2g/day: avoid karein — achaar (bahut high salt), papad, namkeen, packaged foods, ketchup. Limit karein: daal mein namak (less), chatni mein namak. Okay hai: sattu ka paani (bina namak), chhachh (bina namak), plain rice, dal without salt. Dr. Akhilesh Yadav Ranchi mein detailed diet counseling dete hain.",
      },
      {
        q: "Paracentesis kitni baar karwani padti hai?",
        a: "Depends on ascites re-accumulation rate. Refractory ascites (diuretics nahi sunti) mein: har 2-4 hafte. Controlled ascites mein: zaroorat nahi — diet + diuretics kaafi. Dr. Akhilesh Yadav Ranchi mein frequency decide karte hain ultrasound aur clinical assessment ke baad.",
      },
      {
        q: "Kya ascites se liver transplant zaroor hai?",
        a: "Ascites hona matlab transplant nahi — lekin liver disease evaluation zaroor hai. Refractory ascites (diuretics resistant) mein MELD score high hota hai — transplant evaluation consider hoti hai. Dr. Akhilesh Yadav Ranchi mein MELD/Child-Pugh score assess karte hain aur timely referral karte hain agar zaroor ho.",
      },
    ],
  },

  {
    slug: "ranchi-mein-fatty-liver-diet",
    titleHi: "Ranchi Mein Fatty Liver Diet — Kya Khaayein Kya Na Khaayein | Dr. Akhilesh Yadav",
    titleEn: "Fatty Liver Diet in Ranchi — What to Eat & Avoid | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein fatty liver diet guide: Dr. Akhilesh Yadav — Orchid Medical Centre. Jharkhand ke local foods mein kya theek hai, kya avoid karein — complete diet plan.",
    excerptEn: "Fatty liver diet guide for Ranchi patients — Dr. Akhilesh Yadav. Jharkhand food context: what to eat, what to avoid, local food choices & lifestyle changes.",
    category: "diet",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🥗",
    tags: ["fatty liver diet ranchi", "fatty liver kya khaayein", "fatty liver food ranchi", "NAFLD diet ranchi", "gastroenterologist ranchi"],
    metaTitle: "Fatty Liver Diet Guide Ranchi | What to Eat & Avoid | Dr. Akhilesh Yadav",
    metaDescription: "Fatty liver diet guide for Ranchi patients — Dr. Akhilesh Yadav at Orchid Medical Centre. Jharkhand food context, what to eat, avoid & lifestyle changes for fatty liver.",
    sections: [
      {
        heading: "Fatty Liver Diet — Kyun Itna Important Hai",
        type: "text",
        content: "Ranchi ke Suresh Prasad — 48 saal, Grade 2 fatty liver — ne Dr. Akhilesh Yadav se mila. Dr. ne unhe medicines dene ke bajaye pehle diet aur lifestyle change ki baat ki. 6 mahine baad: SGPT normal, ultrasound Grade 1 fatty liver. Diet alone ne grade reduce kar diya. Fatty liver (NAFLD/MASLD) mein koi specific approved medicine nahi hai abhi tak — diet aur exercise hi primary treatment hai. Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein kehte hain: 'Fatty liver mein sahi khaana aadhi battle jeet leta hai.'",
      },
      {
        heading: "Fatty Liver Mein Kya AVOID Karein — Jharkhand Context",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi mein fatty liver patients ko yeh avoid karne ki salah dete hain:",
        list: [
          "Maida (refined flour): litti ka atta theek hai (sattu/wheat), maida (poori, samosa, bread) avoid",
          "Refined sugar: shakkar, mithai — liver mein fat convert hoti hai",
          "Alcohol: bilkul avoid — alcoholic fatty liver mein major trigger",
          "Deep-fried foods: jalebi, pakoda, tele hua khaana",
          "Packaged/processed: biscuit, chips, namkeen — transfat + refined carbs",
          "Fructose-rich drinks: soft drinks (Coca-Cola, Pepsi), packaged fruit juices",
          "Full-fat dairy excess: too much cream, paneer in large amounts",
          "White rice in excess: low fiber, high glycemic index — replace with brown rice or millets",
        ],
      },
      {
        heading: "Fatty Liver Mein Kya KHAAYEIN — Jharkhand Ke Local Foods",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi mein yeh foods fatty liver patients ke liye recommend karte hain:",
        list: [
          "Sattu ka paani (bina shakkar/namak) — high protein, low glycemic — excellent for fatty liver",
          "Chhachh (bina namak, chilled) — probiotics, low fat",
          "Makka (maize) roti ya poha — better than maida",
          "Bajra/jowar roti — high fiber, low glycemic — excellent grain choice",
          "Papaya — liver-friendly, low sugar, high fiber",
          "Lauki (bottle gourd), karela (bitter gourd), palak — all good for liver",
          "Dal (arhar, masoor, moong) — high protein, low fat",
          "Fish (rahu, katla — freshwater) — omega-3, low saturated fat",
          "Ajwain paani, haldi doodh (limited quantity) — anti-inflammatory",
          "Green tea — catechins, mild liver benefit evidence",
        ],
      },
      {
        heading: "Fatty Liver Diet — Exercise Bhi Zaroori Hai",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein emphasize karte hain: 'Diet ke saath exercise nahi toh results half honge.' Recommended: 150-180 min/week moderate exercise — tez chalna (brisk walk) best. 10,000 steps/day target. Strength training 2-3 times/week — muscle mass increases fat burning. Weight loss: 5-10% body weight loss se NAFLD grade improve hoti hai. 10%+ loss se NASH (inflammation) bhi reduce hoti hai. Even without weight loss — exercise liver fat reduce karti hai. Ranchi mein morning walk spots: Jubilee Park, Kanke Dam road, XLRI road — sabhi accessible hain.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — Fatty Liver Diet",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'Jharkhand ke patients ke paas actually bahut saari liver-friendly cheezein available hain — sattu ka paani, chhachh, papaya, bajra roti, fresh fish — main unhe global Mediterranean diet recommend karne ki jagah unki local food culture mein hi solution dhundta hoon. Sustainable diet woh hai jo local, affordable, aur tasty ho.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. Personalized diet ke liye consultation zaroor lein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Kya litti-chokha fatty liver mein kha sakte hain?",
        a: "Litti-chokha: sattu filling (theek hai — high protein), lekin traditional litti ghee mein pakti hai — calories zyada. Baked/roasted litti (tandoor/tawa) — better option. Chokha (roasted eggplant/tomato + pyaaz + hari mirch — bina excess ghee) — okay. Ghee quantity limit karein — 1-2 chammach per day total.",
      },
      {
        q: "Kya coconut water (nariyal paani) fatty liver mein theek hai?",
        a: "Haan — moderate amount (1 glass/day) okay hai. Natural electrolytes, low calorie. Packaged coconut water mein sugar add hota hai — avoid karein. Fresh nariyal paani better.",
      },
      {
        q: "Fatty liver mein weight loss kaafi fast karna chahiye?",
        a: "Nahi — rapid weight loss (>1.5 kg/week) paradoxically fatty liver worsen kar sakta hai — especially if on very low-calorie diet. Safe rate: 0.5-1 kg per week. Dr. Akhilesh Yadav Ranchi mein sustainable weight loss plan — crash diet recommend nahi karte.",
      },
      {
        q: "Kya haldi (turmeric) fatty liver mein help karti hai?",
        a: "Curcumin (haldi ka active compound) mein anti-inflammatory evidence hai — small clinical trials mein NAFLD mein mild benefit. Haldi doodh ya daily cooking mein haldi — safe addition. Supplement dose alag hai — Dr. se poochhen before taking curcumin supplements.",
      },
    ],
  },

  {
    slug: "ranchi-mein-h-pylori-treatment",
    titleHi: "Ranchi Mein H. Pylori Treatment — H Pylori Ka Ilaj | Dr. Akhilesh Yadav",
    titleEn: "H. Pylori Treatment in Ranchi — Helicobacter Pylori Cure | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi mein H. Pylori (Helicobacter Pylori) treatment: Dr. Akhilesh Yadav — Orchid Medical Centre. Triple therapy, quadruple therapy, resistance patterns — complete treatment guide.",
    excerptEn: "H. Pylori treatment in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Triple/quadruple therapy, antibiotic resistance, eradication confirmation & recurrence prevention.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🦠",
    tags: ["h pylori treatment ranchi", "helicobacter pylori ranchi", "h pylori ka ilaj ranchi", "peptic ulcer h pylori ranchi", "gastroenterologist ranchi"],
    metaTitle: "H. Pylori Treatment Ranchi | Helicobacter Pylori Cure | Dr. Akhilesh Yadav",
    metaDescription: "H. Pylori (Helicobacter Pylori) treatment in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Triple therapy, quadruple therapy & eradication confirmation.",
    sections: [
      {
        heading: "H. Pylori — Ranchi Mein Kitna Common Hai",
        type: "text",
        content: "H. Pylori (Helicobacter Pylori) ek bacteria hai jo stomach ki lining mein rehta hai — ulcer aur gastric cancer ka major risk factor. India mein prevalence: 50-70% adults. Jharkhand mein — safe drinking water access ki kami se H. Pylori transmission zyada hai. Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi mein kehte hain: 'Ranchi mein endoscopy pe jo patients aate hain, unme se 40-50% mein H. Pylori positive milta hai — ulcer ke saath ya bina.' H. Pylori treatable hai — lekin antibiotic resistance increasing hai India mein.",
      },
      {
        heading: "H. Pylori Kaisa Spread Hota Hai — Aur Kise Zyada Risk",
        type: "list",
        content: "H. Pylori transmission aur risk factors jo Dr. Akhilesh Yadav Ranchi mein discuss karte hain:",
        list: [
          "Contaminated water — main route in Jharkhand/Ranchi",
          "Fecal-oral route — hygiene practices",
          "Crowded living conditions — family clustering common",
          "Childhood acquisition — most infections acquired in childhood",
          "Low socioeconomic status — indirect marker",
          "Same utensils/water sources",
          "Family history of H. Pylori or peptic ulcer",
        ],
      },
      {
        heading: "H. Pylori Treatment — Triple vs Quadruple Therapy",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein H. Pylori ke liye evidence-based treatment dete hain: Standard Triple Therapy (14 days): PPI (omeprazole 20mg BD) + Clarithromycin 500mg BD + Amoxicillin 1g BD. Eradication rate: ~70-80% (clarithromycin resistance badh rahi hai India mein). Bismuth Quadruple Therapy (14 days): PPI + Bismuth + Metronidazole + Tetracycline. Eradication rate: ~85-90% — preferred in high clarithromycin resistance areas. Sequential Therapy: 5 days amoxicillin + 5 days clarithromycin/metronidazole combination. Salvage Therapy (failed first-line): levofloxacin-based regimen. Dr. Akhilesh Yadav local resistance patterns dekh ke appropriate regimen choose karte hain.",
      },
      {
        heading: "H. Pylori Eradication Confirm Karna Zaroor Hai",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi mein emphasize karte hain: H. Pylori treatment ke baad eradication confirm karna mandatory hai — sirf symptoms theek hone se nahi pata chalta. Urea Breath Test (UBT): Gold standard non-invasive. 4-6 hafte after completing treatment. 2 hafte pehle PPI bandh karna zaroor. Stool Antigen Test: alternative — less commonly used in India. Repeat Endoscopy: agar ulcer tha — heal hone ka confirm karna zaroor (especially gastric ulcer — cancer rule out). Failed first-line: salvage therapy — Dr. Akhilesh Yadav Ranchi mein guide karte hain. Reinfection: possible — hand hygiene, safe water important.",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav ki Expert Advice — H. Pylori Treatment",
        type: "tip",
        content: "Dr. Akhilesh Yadav kehte hain: 'H. Pylori treatment mein teen cheezein important hain: sahi regimen, poora course (14 din — beech mein mat chhodo), aur eradication confirm karna. Ranchi mein main often bismuth quadruple therapy use karta hoon kyunki clarithromycin resistance local mein kaafi hai. Aur patient ko bolta hoon: antibiotics ka poora course lo — varna bacteria wapas aa sakta hai aur mushkil ho jaata hai treat karna.'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nYeh article sirf educational purpose ke liye hai. H. Pylori ke liye gastroenterologist se milein.\n\nAppointment: +91 74919 25047 ya [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM aur 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "H. Pylori test Ranchi mein kaise hota hai?",
        a: "Multiple options: Endoscopy + biopsy (RUT — rapid urease test + histology): most common in India — Dr. Akhilesh Yadav Orchid Medical Centre mein karte hain. Urea Breath Test (UBT): available at select labs — eradication confirmation ke liye better. Stool Antigen Test: less commonly used. Blood H. Pylori IgG: past infection batata hai — current active infection ke liye better tests preferred.",
      },
      {
        q: "H. Pylori positive hai par koi symptoms nahi — treatment karni chahiye?",
        a: "Haan — agar H. Pylori positive hai, treatment recommended hai even without symptoms. Reasons: ulcer prevention, gastric cancer risk reduction, family clustering prevention. Dr. Akhilesh Yadav Ranchi mein individual case ke basis par decide karte hain.",
      },
      {
        q: "H. Pylori treatment ke baad kya khaayein?",
        a: "During treatment: probiotics (dahi, probiotic capsule) saath lena antibiotics se antibiotic-associated diarrhea reduce karta hai. After treatment: regular balanced diet. Avoid: NSAIDs (ibuprofen, naproxen) — ulcer risk. Alcohol: avoid during treatment. Smoking: quit — healing slow karta hai.",
      },
      {
        q: "Kya H. Pylori family mein ek se doosre ko ho sakta hai?",
        a: "Haan — H. Pylori family clusters mein milta hai. Agar ek member positive hai: screen other family members (especially jo symptomatic hain). Shared utensils, water sources se spread. Hand hygiene, safe drinking water — prevention keys. Dr. Akhilesh Yadav Ranchi mein family screening guide karte hain.",
      },
    ],
  },

];

// ── PUBLISH DATE HELPERS ─────────────────────────────────────────────────────
/** Parses "June 2026", "August 12, 2026", or ISO strings → Date */
function parsePublishedDate(publishedAt: string): Date {
  const s = publishedAt.trim();
  // ISO / YYYY-MM-DD with no letters
  if (!s.match(/[A-Za-z]/)) return new Date(s);
  // "Month YYYY" (e.g. "June 2026") — split on spaces, no comma
  const parts = s.split(/[\s,]+/).filter(Boolean);
  if (parts.length === 2) {
    // "June 2026" → treat as the 1st of that month
    return new Date(`${parts[0]} 1, ${parts[1]}`);
  }
  // "August 12, 2026" or "July 15, 2026" — native Date handles this fine
  return new Date(s);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

/** For sitemap — slug + ISO publish date for every post */
export function getAllBlogsForSitemap(): { slug: string; isoDate: string }[] {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
    isoDate: parsePublishedDate(p.publishedAt).toISOString(),
  }));
}
