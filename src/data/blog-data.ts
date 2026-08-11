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
  /** When true: blog is noindexed (robots: noindex,follow) to prevent cannibalization.
   *  Use for pages that overlap an already-stronger URL for the same search intent.
   *  The page remains accessible and linked — only removed from Google index. */
  noindex?: boolean;
  /** Image generation prompts produced by blog-writer v2.0 (AEO/GEO pipeline) */
  imagePrompt?: {
    /** Featured image — tall/square, used on blog post page hero */
    featured: string;
    /** OG image — 1200×630 landscape, used in social share previews */
    og: string;
    /** Card thumbnail — 400×300, used in blog listing grid */
    card: string;
  };
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
    publishedAt: "August 9, 2026",
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
    publishedAt: "August 9, 2026",
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
    titleHi: "रांची में Best Gastroenterologist — Dr. Akhilesh Yadav (DM Gastroenterology)",
    titleEn: "Best Gastroenterologist in Ranchi — Dr. Akhilesh Yadav",
    excerptHi: "रांची में पेट, लिवर और आंत की बीमारी के लिए Dr. Akhilesh Yadav — DM Gastroenterology specialist — Orchid Medical Centre, HB Road पर available हैं। एक ही doctor, पूरी देखभाल।",
    excerptEn: "Dr. Akhilesh Yadav is Ranchi's trusted DM Gastroenterology specialist at Orchid Medical Centre, HB Road — treating liver disease, gallstones, GERD, IBS & more with advanced endoscopic care.",
    category: "Doctor Profile",
    readTimeMins: 7,
    publishedAt: "July 2026",
    emoji: "🩺",
    image: "/images/gastroenterologist-ranchi.png",
    tags: ["Gastroenterologist Ranchi", "Liver Specialist", "Stomach Doctor", "Dr. Akhilesh Yadav", "Ranchi"],
    metaTitle: "Best Gastroenterologist in Ranchi | Dr. Akhilesh Yadav",
    metaDescription: "रांची का best gastroenterologist — Dr. Akhilesh Yadav, DM Gastroenterology. Liver, पेट और आंत की बीमारी का expert इलाज। Orchid Medical Centre, HB Road. Call: 74919 25047.",
    sections: [
      {
        type: "text",
        content: "हज़ारीबाग के एक 52 साल के teacher, Suresh जी, महीनों से पेट के दाईं तरफ दर्द और उलटी की तकलीफ थी। General physician ने कई medicines लिख दी — लेकिन कोई फर्क नहीं पड़ा। एक रोज़ उन्होंने Google पर search किया: 'रांची में best gastroenterologist'। उन्हें पता नहीं था कि यह specialist कौन होता है, और उन्हें कितनी दूर जाना पड़ेगा।\n\nअगर आप भी ऐसी किसी situation में हैं — या आपके परिवार में किसी को liver, पेट या आंत की तकलीफ है — तो यह guide आपके लिए है। हम बताएंगे कि gastroenterologist क्या होता है, कब मिलना चाहिए, और Ranchi में कौन सबसे experienced specialist है।",
      },
      {
        heading: "Gastroenterologist क्या होता है? General Physician से क्या फर्क है?",
        type: "text",
        content: "General physician (GP) एक 'all-rounder' doctor होता है — fever, BP, diabetes सब देखता है। लेकिन जब बात आती है digestive system की, तो एक specialist की ज़रूरत पड़ती है।\n\nGastroenterologist वो doctor होता है जिसने MBBS के बाद MD (Medicine) की, और फिर 3 साल की DM (Gastroenterology) की super-speciality training ली हो। यह training specifically इन चीज़ों के लिए होती है:\n\n• Liver (Hepatology) — fatty liver, hepatitis, cirrhosis, liver failure\n• Stomach और food pipe (Upper GI) — ulcer, GERD, acidity, swallowing problems\n• Small intestine — Crohn's disease, malabsorption, celiac disease\n• Large intestine (Colon) — IBS, colitis, polyps, colorectal cancer screening\n• Gallbladder और pancreas — gallstones, pancreatitis, bile duct blockage\n• Advanced procedures — endoscopy, colonoscopy, ERCP, EUS\n\nसरल भाषा में: gastroenterologist वो doctor है जो आपके पेट के अंदर क्या हो रहा है — वो देखता है, समझता है, और ठीक करता है।",
      },
      {
        heading: "कब Gastroenterologist से मिलना चाहिए?",
        type: "list",
        content: "इनमें से कोई भी symptom हो तो general physician से referral माँगें या सीधे gastroenterologist से मिलें:",
        list: [
          "पेट में दर्द जो बार-बार आए या 1 हफ्ते से ज़्यादा रहे",
          "आँखों या skin का पीला पड़ना (jaundice)",
          "मल (stool) में खून या काला रंग",
          "खून की उलटी या बार-बार उलटी होना",
          "बिना किसी वजह के 5+ kg वज़न कम होना",
          "खाना निगलने में तकलीफ (dysphagia)",
          "सीने में जलन (acidity) जो रात को भी परेशान करे",
          "पेट में पानी भर आना या बहुत ज़्यादा सूजन",
          "बार-बार दस्त या कब्ज़ जो ठीक न हो",
          "Liver function tests या ultrasound में कुछ abnormal आया हो",
        ],
      },
      {
        heading: "Dr. Akhilesh Yadav — Ranchi के DM Gastroenterologist",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के उन चुनिंदा doctors में से हैं जिन्होंने DM Gastroenterology (super-speciality degree) की है — यह India की highest gastroenterology qualification है। सिर्फ MBBS या MD करने वाला doctor gastroenterologist नहीं होता — DM Gastroenterology के लिए तीन साल की dedicated training ज़रूरी है।\n\nDr. Akhilesh Yadav के बारे में:\n• Qualification: MBBS → MD (Medicine) → DM (Gastroenterology)\n• Experience: 10+ साल\n• Clinic: Orchid Medical Centre, HB Road, Ranchi — 834001\n• Timings: Mon–Sat: 10 AM–2 PM & 5 PM–8 PM\n• Phone: +91 74919 25047\n• Google Rating: 4.9 ⭐ (200+ reviews)\n\nHB Road पे clinic होना एक बड़ी बात है — यह Ranchi का central medical corridor है, जहाँ से patients Bokaro, Hazaribagh, Jamshedpur, Dhanbad, Palamu — कहीं से भी आसानी से पहुँच सकते हैं।",
      },
      {
        heading: "कौन सी बीमारियाँ Treat होती हैं?",
        type: "list",
        content: "Dr. Akhilesh Yadav इन सभी conditions का इलाज करते हैं। हर condition की detailed जानकारी के लिए [Conditions page](/conditions) देखें:",
        list: [
          "Fatty Liver (NAFLD/NASH) — Grade 1, 2, 3 — diet से लेकर medicines तक पूरी care",
          "Jaundice (पीलिया) — Hepatitis A/B/C, obstructive jaundice, bile duct stones",
          "Liver Cirrhosis — fibrosis management, variceal bleeding prevention",
          "Hepatitis B & C — antiviral therapy, monitoring",
          "Acid Reflux & GERD — सीने की जलन, LPR (silent reflux)",
          "Peptic Ulcer & H. Pylori — stomach ulcer का इलाज",
          "Gallstones (पित्ताशय की पथरी) — non-surgical management या ERCP से stone removal",
          "IBS (Irritable Bowel Syndrome) — बार-बार दस्त या कब्ज़",
          "Ulcerative Colitis & Crohn's Disease — IBD management",
          "Pancreatitis — acute और chronic pancreas की तकलीफ",
          "GI Bleeding — खून की उलटी या मल में खून — emergency endoscopy",
          "Colon Cancer Screening — colonoscopy से early detection",
          "Unexplained Weight Loss — causes का diagnosis",
        ],
      },
      {
        heading: "Ranchi में कौन सी Advanced Procedures Available हैं?",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi में यह सब advanced procedures करते हैं — इनके लिए Kolkata, Patna या Delhi जाने की ज़रूरत नहीं। हर procedure की जानकारी के लिए [Procedures page](/procedures) देखें:",
        list: [
          "Upper GI Endoscopy (UGI Scope) — food pipe, stomach और duodenum की camera से जाँच — 15 minute, anesthesia के साथ",
          "Colonoscopy — बड़ी आंत की पूरी जाँच, polyps remove करना, cancer screening",
          "ERCP — पित्ताशय नली की पथरी निकालना या bile duct blockage ठीक करना",
          "EUS (Endoscopic Ultrasound) — अंदर से ultrasound, tumor biopsy, accurate diagnosis",
          "Variceal Band Ligation & Glue Injection — liver cirrhosis में bleeding veins का emergency इलाज",
          "Polypectomy & EMR — बिना surgery के colon या stomach से polyps/early tumors निकालना",
          "Balloon Dilation — आंत की नली के tightness को endoscopy से ठीक करना",
          "ESD (Endoscopic Submucosal Dissection) — बिना चीरे के early cancer removal",
        ],
      },
      {
        heading: "Personal Doctor vs Hospital Brand — क्या फर्क पड़ता है?",
        type: "tip",
        content: "Ranchi में कुछ बड़े hospitals के gastroenterology departments हैं। लेकिन वहाँ एक problem होती है — आप बार-बार अलग-अलग doctor से मिलते हैं। OPD में जो doctor आज है, कल कोई और होगा। आपकी पूरी history एक जगह नहीं रहती।\n\nDr. Akhilesh Yadav के clinic में आप हमेशा same doctor से मिलते हैं। वो आपकी history जानते हैं, आपकी previous tests याद हैं, और आपको बार-बार सब कुछ दोहराना नहीं पड़ता। इसी continuity की वजह से उन्हें 4.9 ⭐ Google rating मिली है — Ranchi के patients की real feedback।\n\nजब Suresh जी (इस article के शुरुआत में) Dr. Akhilesh Yadav के पास आए, उन्होंने पहली ही visit में ultrasound interpret किया, blood tests review किए, और diagnosis दी — chronic pancreatitis। तीन महीने के इलाज में वो काफी better हो गए।",
      },
      {
        heading: "Dr. Akhilesh Yadav की सलाह",
        type: "text",
        content: "\"मेरे पास रोज़ ऐसे patients आते हैं जो महीनों — कभी-कभी सालों — से generic doctor के पास जा रहे हैं, पैसे और वक्त waste हो रहा है, और बीमारी ठीक नहीं हो रही। Digestive system की बीमारियाँ एक specialist को दिखनी चाहिए — especially जब symptoms बार-बार आएं या 2 हफ्ते में ठीक न हों।\n\n\"Jharkhand और Bihar के patients के लिए एक और बात — आपको इलाज के लिए Kolkata या Delhi भागने की ज़रूरत नहीं है। Ranchi में ही advanced [endoscopy](/procedures/endoscopy), [ERCP](/procedures/ercp), [EUS](/procedures/eus) सब available है। और मैं खुद personally हर patient को देखता हूँ।\"\n\n[Appointment लें](/book) — Orchid Medical Centre, HB Road, Ranchi. Call करें: +91 9031669888. या सीधे [WhatsApp करें](https://wa.me/919031669888?text=Namaskar%2C+mujhe+Dr.+Akhilesh+Yadav+se+appointment+chahiye).",
      },
      {
        heading: "⚠️ Emergency Symptoms — बिल्कुल देरी मत करें",
        type: "warning",
        content: "इन symptoms में तुरंत emergency care या gastroenterologist से मिलें — बिल्कुल इंतज़ार न करें:\n• खून की उलटी (blood in vomit)\n• मल में काला या लाल खून\n• आँखों में पीलापन के साथ बुखार\n• पेट में अचानक बहुत तेज़ दर्द\n• बेहोशी या confusion के साथ liver की बीमारी\nये सब medical emergencies हैं। Orchid Medical Centre: +91 74919 25047",
      },
    ],
    faqs: [
      {
        q: "Gastroenterologist और general physician में क्या फर्क है?",
        a: "General physician सभी बीमारियों की basic देखभाल करता है। Gastroenterologist सिर्फ digestive system — liver, stomach, intestines, gallbladder, pancreas — का super-specialist होता है। DM Gastroenterology degree के लिए MBBS + MD के बाद 3 साल की अलग training होती है। Complex पेट और liver की बीमारियों के लिए gastroenterologist का referral ज़रूरी होता है।",
      },
      {
        q: "Ranchi में gastroenterologist की fees कितनी होती है?",
        a: "Dr. Akhilesh Yadav का consultation fee reasonable है — specific amount के लिए call करें +91 74919 25047। Fees में initial consultation, review visit और prescription शामिल होते हैं। Endoscopy, colonoscopy या ERCP की fees अलग होती है — यह भी clinic से confirm करें। Ranchi में specialist fees typically ₹400–₹800 range में होती है।",
      },
      {
        q: "Dr. Akhilesh Yadav का clinic कहाँ है और timings क्या हैं?",
        a: "Dr. Akhilesh Yadav Orchid Medical Centre, HB Road, Ranchi — 834001 में practice करते हैं। Timings: Monday से Saturday, 10:00 AM–2:00 PM और 5:00 PM–8:00 PM। Sunday बंद रहता है। Appointment के लिए पहले call करें: +91 74919 25047।",
      },
      {
        q: "क्या Bokaro, Hazaribagh, Dhanbad से Ranchi आना पड़ेगा?",
        a: "हाँ — और यह worth it है। Dr. Akhilesh Yadav Ranchi के HB Road पर हैं, जो Bokaro (90 km), Hazaribagh (90 km), Jamshedpur (130 km), Dhanbad (155 km) से easily reachable है। Ranchi में जो advanced procedures available हैं — ERCP, EUS, Colonoscopy — वो Jharkhand के छोटे शहर में नहीं मिलते। एक दिन में consultation + testing हो सकती है।",
      },
      {
        q: "Liver specialist और gastroenterologist एक ही होते हैं क्या?",
        a: "हाँ — DM Gastroenterology degree में liver diseases (hepatology) भी included होती है। Dr. Akhilesh Yadav fatty liver, hepatitis B/C, liver cirrhosis, jaundice — सब treat करते हैं। अगर specifically 'hepatologist' या 'liver specialist' search कर रहे हैं, तो DM Gastroenterology वाला doctor ही best option है।",
      },
      {
        q: "पहली बार doctor से मिलने में क्या होगा? क्या test करवाने पड़ेंगे?",
        a: "पहली visit में Dr. Akhilesh Yadav आपकी पूरी history लेंगे — symptoms, duration, previous reports, medicines। फिर physical examination करेंगे। इसके बाद ज़रूरत के हिसाब से blood tests (LFT, CBC, etc.) या ultrasound recommend करेंगे। अगर report already है तो साथ लाएं — time बचेगा। ज़्यादातर patients पहली visit में ही diagnosis और treatment plan ले जाते हैं।",
      },
      {
        q: "क्या endoscopy Ranchi में हो सकती है? इसके लिए कहाँ जाएं?",
        a: "हाँ — Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi में Upper GI Endoscopy, Colonoscopy, ERCP और EUS perform करते हैं। Endoscopy एक safe और fast procedure है — anesthesia दिया जाता है, दर्द नहीं होता, 15-20 minute में हो जाती है। बड़े cities जाने की ज़रूरत नहीं। Call करें: +91 74919 25047।",
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
        content: "Ranchi के Bariatu area के रहने वाले 52 साल के Ramesh Prasad जी पिछले 4 महीने से पेट में discomfort, gas और भूख न लगने की तकलीफ उठाते रहे। Local doctor ने antacids दिए — थोड़ी देर अच्छा लगता, फिर वही हाल। जब उनकी बेटी ने Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology specialist — से appointment दिलाई, तो पहली ही visit में endoscopy में H. Pylori infection के साथ Grade 2 gastritis diagnose हुआ। सिर्फ 2 हफ्ते के सही treatment के बाद उनकी condition dramatically improve हुई। 'काश मैं पहले ही आ जाता' — यह बात Ranchi के हज़ारों patients के मन में होती है। अगर आप भी 4+ हफ्ते से पेट की कोई भी problem उठा रहे हैं, तो यह guide आपके लिए है।",
      },
      {
        heading: "Gastroenterologist कौन होता है?",
        type: "text",
        content: "Gastroenterologist यानी पेट, लिवर, आँतों, pancreas (अग्न्याशय) और biliary system का विशेषज्ञ doctor। Dr. Akhilesh Yadav — MBBS, MD (Internal Medicine), DM Gastroenterology — Jharkhand के senior DM Gastroenterologists में से हैं जो Orchid Medical Centre, HB Road, Ranchi में practice करते हैं। DM Gastroenterology degree MBBS के बाद 8-10 साल की additional training के बाद मिलती है। ये सिर्फ digestive tract की बीमारियों के expert होते हैं — general physician से ज़्यादा specialised होते हैं। Ranchi और पूरे Jharkhand के patients [gastroenterologist Ranchi में](/blog/best-gastroenterologist-ranchi) ढूँढते हैं तो Orchid Medical Centre सबसे reliable choice है। [Conditions की पूरी list देखें](/conditions) या [procedures के बारे में जानें](/procedures)।",
      },
      {
        heading: "🔴 कब तुरंत Gastroenterologist से मिलें?",
        type: "list",
        content: "यह symptoms ignore मत करें — एक हफ्ते के अंदर specialist से मिलें:",
        list: [
          "खून की उलटी (hematemesis — खून की उल्टी) या मल में खून — GI bleeding का sign, तुरंत जाएं",
          "आँखों या skin का पीला होना (Jaundice — पीलिया) — liver problem का sign",
          "अचानक 5+ kg वज़न कम होना बिना किसी obvious कारण के",
          "पूरा पेट फूला हुआ रहना (Ascites — पेट में पानी) या बहुत tight feel होना",
          "निगलने में तकलीफ (Dysphagia — खाना निगलने में दिक्कत) या खाना अटकना",
          "Persistent उलटी जो 2-3 दिन में ठीक न हो",
          "पेट में अचानक बहुत तेज़ दर्द — emergency room जाएं",
        ],
      },
      {
        heading: "🟡 कब 1-2 हफ्ते में Appointment लें?",
        type: "list",
        content: "यह symptoms भी doctor से ज़रूरी हैं — ignore नहीं करना:",
        list: [
          "4 हफ्ते से ज़्यादा बनी रह रही acidity या सीने में जलन (GERD)",
          "कब्ज़ या diarrhea जो बार-बार आता हो (2+ months)",
          "खाने के बाद हमेशा bloating या gas की problem",
          "Liver tests में SGPT/SGOT high आना — liver enzymes बढ़ना",
          "Ultrasound में 'fatty liver' या 'enlarged liver' mention होना",
          "Hepatitis B/C positive test result — एक हफ्ते में मिलें",
          "Piles (बवासीर) में खून आना जो 1 हफ्ते में न रुके",
        ],
      },
      {
        heading: "Ranchi में Gastroenterologist से Tests कैसे होते हैं?",
        type: "text",
        content: "Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — सबसे पहले comprehensive history लेंगे और physical examination करेंगे। ज़रूरत के हिसाब से blood tests (LFT, CBC, CRP, H. Pylori), Ultrasound abdomen, या advanced tests recommend होते हैं। Ranchi में ही Upper GI Endoscopy (OGD Scopy), Colonoscopy, ERCP, और EUS सब available हैं — बड़े शहर जाने की ज़रूरत नहीं। WHO के data के मुताबिक, India में 40% से ज़्यादा GI cancers late stage में diagnose होते हैं क्योंकि लोग symptoms ignore करते हैं। Early diagnosis से outcomes significantly better होते हैं। [Endoscopy के बारे में जानें](/blog/endoscopy-kya-hota-hai) या [painless colonoscopy Ranchi](/blog/painless-colonoscopy-ranchi-cost-preparation) पढ़ें।",
      },
      {
        heading: "Dr. Akhilesh Yadav — Ranchi के Senior Gastroenterologist",
        type: "text",
        content: "Dr. Akhilesh Yadav — MBBS, MD, DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में 10+ साल से हज़ारों patients का इलाज कर रहे हैं। Fatty liver, jaundice, endoscopy, ERCP, colonoscopy, liver cirrhosis, IBD — सब में expert हैं। Bokaro, Hazaribagh, Jamshedpur, Dhanbad और Deoghar से भी patients Ranchi आते हैं उनसे मिलने के लिए। Jharkhand में DM Gastroenterology trained doctors की संख्या बहुत कम है — इसलिए Dr. Akhilesh Yadav की सेवा पूरे region के लिए महत्वपूर्ण है। [Appointment book करें](/book) या सीधे call करें +91 74919 25047।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में बहुत लोग stomach problems को घर पर नुस्खों से treat करते हैं — कुछ हफ्तों तक ठीक लगता है, फिर वही problem वापस आती है। अगर आपको 4+ हफ्ते से कोई भी digestive problem है, तो एक बार specialist से मिलना ज़रूरी है। Early diagnosis में cost भी कम होती है और result भी better होता है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में Mon–Sat available हैं।\n\nयह article सिर्फ educational purpose के लिए है। किसी भी health problem के लिए Dr. Akhilesh Yadav या अपने doctor से ज़रूर मिलें।\n\nAppointment के लिए call करें: +91 74919 25047 या [WhatsApp करें](https://wa.me/917491925047)। Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Gastroenterologist Ranchi",
        type: "text",
        content: "नीचे कुछ common सवालों के जवाब हैं जो Ranchi के patients gastroenterologist के बारे में अक्सर पूछते हैं:",
      },
    ],
    faqs: [
      {
        q: "Ranchi में gastroenterologist की fees कितनी होती है?",
        a: "Orchid Medical Centre में Dr. Akhilesh Yadav की consultation fees reasonable है। पहली consultation के लिए call करें: +91 74919 25047। Appointment prefer करें — walk-in भी available है लेकिन wait time ज़्यादा हो सकता है।",
      },
      {
        q: "Gastroenterologist और general physician में क्या फर्क है?",
        a: "General physician सभी बीमारियों का basic treatment करते हैं। Gastroenterologist specifically पेट, liver, pancreas और आँतों के specialist हैं — DM Gastroenterology की degree में 8+ साल की advanced training होती है। Complex liver या gut problems में specialist से मिलना ज़रूरी है।",
      },
      {
        q: "क्या Ranchi में endoscopy होती है?",
        a: "हाँ — Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav OGD Scopy (Upper Endoscopy), Colonoscopy, ERCP और EUS perform करते हैं। Anesthesia के साथ procedure होती है, बहुत कम discomfort होती है।",
      },
      {
        q: "क्या appointment के बिना आ सकते हैं?",
        a: "Walk-in possible है, लेकिन appointment लेना better है क्योंकि wait time कम होगी। Call करें: +91 74919 25047। Online appointment भी मिलती है।",
      },
      {
        q: "Gastroenterologist से मिलने के बाद कितने time में treatment शुरू होती है?",
        a: "Dr. Akhilesh Yadav same-day diagnosis करने की कोशिश करते हैं। अगर endoscopy की ज़रूरत हो तो 1-3 दिन में schedule होती है। Blood tests की report उसी दिन या next day मिल जाती है। Emergency cases में same-day treatment भी possible है।",
      },
      {
        q: "Bokaro या Hazaribagh से Ranchi कब आना चाहिए?",
        a: "अगर local doctor से 4-6 हफ्ते में improvement न हो, या serious symptoms हों, तो Ranchi में Dr. Akhilesh Yadav से मिलें। Orchid Medical Centre में एक दिन में consultation + tests + treatment सब हो सकती है। Bokaro से सिर्फ 90 km, Hazaribagh से भी 90 km है।",
      },
    ],
  },

  {
    slug: "stomach-specialist-ranchi",
    image: "/images/stomach-specialist-ranchi-blog.png",
    titleHi: "पेट के Specialist Doctor रांची — Dr. Akhilesh Yadav से मिलें",
    titleEn: "Stomach Specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical",
    excerptHi: "रांची में पेट के specialist doctor — Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre। पेट, आंत और लिवर की हर बीमारी का expert इलाज।",
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
        content: "रांची के Kanke Road की 38 साल की Priya Devi पिछले छह महीने से पेट में जलन, nausea और खाने के बाद discomfort से परेशान थी। कई general doctors से antacids, digestive enzymes, vitamins ले चुकी थी — कुछ दिनों के लिए अच्छा लगता, फिर वही हाल। जब एक सहेली ने suggest किया Orchid Medical Centre, Ranchi में पेट के specialist doctor — Dr. Akhilesh Yadav, DM Gastroenterology — से मिलने का, तो पहली ही consultation में upper endoscopy से पता चला कि उन्हें GERD (Gastroesophageal Reflux Disease — आमाशय एसिड का वापस आना) के साथ mild esophagitis थी। Proper treatment से 6 हफ्ते में Priya जी की condition normal हो गई। 'मैंने सोचा था यह तो normal है' — यह एक बहुत common गलती है जो Ranchi के patients करते हैं।",
      },
      {
        heading: "पेट का Specialist Doctor — क्या Treat करते हैं?",
        type: "text",
        content: "पेट के specialist doctor यानी Gastroenterologist पूरी digestive tract — esophagus (food pipe — भोजन नली) से लेकर anus तक — की बीमारियों का इलाज करते हैं। इसमें liver, pancreas (अग्न्याशय) और gallbladder (पित्ताशय) भी शामिल हैं। Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — यह सब conditions treat करते हैं: Acidity/GERD, IBS, IBD (Crohn's, Ulcerative Colitis), Fatty Liver, Hepatitis B और C, Liver Cirrhosis, Jaundice, Piles, और Colon Cancer Screening। [Conditions की पूरी list देखें](/conditions) या [procedures के बारे में पढ़ें](/procedures)। Ranchi के आस-पास Bokaro, Hazaribagh से भी लोग उनसे मिलने आते हैं।",
      },
      {
        heading: "🔴 यह Symptoms हों तो पेट का Specialist ज़रूरी है",
        type: "list",
        content: "इन्हें ignore करना serious हो सकता है:",
        list: [
          "बार-बार acidity या सीने में जलन जो antacid से control न हो (4+ हफ्ते)",
          "मल में खून या काला पखाना (melaena — पुरानी GI bleeding का sign)",
          "वज़न जो बिना कोशिश के कम हो रहा हो (unexplained weight loss)",
          "खाने के बाद हमेशा nausea (जी मिचलाना) या उलटी",
          "पूरा पेट फूला हुआ या tight feel होना (Bloating/Distension)",
          "पैरों या आँखों में पीलापन (Jaundice — पीलिया) — liver sign",
          "कब्ज़ या diarrhea जो तीन हफ्ते से ज़्यादा चल रहा हो",
          "पेट में गाँठ या कुछ hard feel होना — तुरंत मिलें",
        ],
      },
      {
        heading: "पेट की Common बीमारियों के कारण",
        type: "list",
        content: "Ranchi और Jharkhand में इन कारणों से ज़्यादा पेट की problems होती हैं:",
        list: [
          "बाहर का खाना — तीखा, मसालेदार, processed food ज़्यादा खाना",
          "पानी की quality — contaminated water से H. Pylori और Hepatitis A",
          "Stress और anxiety — IBS और GERD का सबसे बड़ा trigger",
          "Alcohol का सेवन — fatty liver और gastritis का मुख्य कारण",
          "NSAIDs या painkillers का लंबे समय तक use — ulcer का risk",
          "रात का खाना बहुत late खाना और सो जाना — acid reflux बढ़ता है",
        ],
      },
      {
        heading: "Ranchi में पेट की बीमारी की जाँच — Dr. Akhilesh Yadav",
        type: "text",
        content: "Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — एक structured diagnostic approach follow करते हैं। पहले detailed history और physical examination, फिर ज़रूरत के हिसाब से tests: CBC, LFT, H. Pylori stool antigen test, Ultrasound abdomen। Complex cases में Upper GI Endoscopy या Colonoscopy होती है — Orchid Medical Centre में ही available है। AIIMS के एक study के मुताबिक, India में 60% से ज़्यादा peptic ulcer cases H. Pylori infection से होते हैं — जो एक treatable infection है। [Endoscopy के बारे में जानें](/blog/endoscopy-kya-hota-hai) या [jaundice के लक्षण पढ़ें](/blog/jaundice-symptoms-causes)।",
      },
      {
        heading: "पेट की बीमारियों का इलाज — Dr. Akhilesh Yadav का Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — का मानना है कि हर patient का treatment personalized होना चाहिए। Simple cases में diet modification और medications से काम होता है। Ranchi के local food में — लिट्टी-चोखा, दाल-भात, दही — को gut-friendly बनाना भी Dr. Akhilesh Yadav सिखाते हैं। Complex cases में endoscopic procedures ज़रूरी होते हैं — ERCP से bile duct stone निकालना, colonoscopy से polyp remove करना — सब Orchid Medical Centre में available है। Regular follow-up से outcomes बेहतर होते हैं। [ERCP procedure](/blog/ercp-procedure-cbd-stones-ranchi) के बारे में पढ़ें या [appointment book करें](/book)।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Specialist Advice",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'पेट की बीमारियों में सबसे बड़ी गलती है — थोड़ा ठीक लगा तो doctor के पास नहीं गए। अगर आपका symptom 3-4 हफ्ते से चल रहा है, तो पेट के specialist से मिलना ज़रूरी है। Ranchi में ही पूरी facilities available हैं — Patna या Delhi जाने की ज़रूरत नहीं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में available हैं।\n\nयह article सिर्फ educational purpose के लिए है। किसी भी health problem के लिए Dr. Akhilesh Yadav या अपने doctor से ज़रूर मिलें।\n\nAppointment के लिए call करें: +91 74919 25047 या [WhatsApp करें](https://wa.me/917491925047)। Orchid Medical Centre, HB Road, Ranchi। Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Stomach Specialist Ranchi",
        type: "text",
        content: "Ranchi के patients stomach specialist के बारे में यह सवाल अक्सर पूछते हैं:",
      },
    ],
    faqs: [
      {
        q: "पेट के specialist और general doctor में क्या अंतर है?",
        a: "General doctor सभी बीमारियों का basic treatment करते हैं। पेट के specialist (Gastroenterologist) specifically digestive tract, liver और pancreas की बीमारियों में expert होते हैं। DM Gastroenterology degree में 3+ साल की additional super-specialty training होती है। Complex stomach problems में specialist से मिलें।",
      },
      {
        q: "Ranchi में stomach specialist कहाँ हैं?",
        a: "Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में practice करते हैं। Appointment के लिए call करें: +91 74919 25047।",
      },
      {
        q: "पेट की जाँच में endoscopy कब ज़रूर होती है?",
        a: "4+ हफ्ते की acidity जो medications से control न हो, मल में खून, unintentional weight loss, या swallowing problem में endoscopy ज़रूरी होती है। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav यह procedure safely करते हैं।",
      },
      {
        q: "क्या diet से पेट की बीमारी ठीक हो सकती है?",
        a: "Mild cases में diet modification से significant improvement होती है। लेकिन chronic conditions — जैसे GERD, IBD, H. Pylori — में doctor की guidance से treatment ज़रूरी है। Diet सिर्फ एक component है, पूरे treatment plan का हिस्सा।",
      },
      {
        q: "Jharkhand के छोटे शहर से Ranchi कब आना चाहिए?",
        a: "अगर local doctor से 4-6 हफ्ते में improvement न हो, या serious symptoms हों, तो Ranchi में Dr. Akhilesh Yadav से मिलें। Orchid Medical Centre में एक दिन में consultation + tests + initial treatment सब हो सकती है।",
      },
      {
        q: "Stomach specialist के पास जाने से पहले कोई test करवाना चाहिए?",
        a: "अगर आपके पास recent blood tests या ultrasound reports हैं तो लाएं — time बचेगा। अगर नहीं हैं तो कोई बात नहीं — Dr. Akhilesh Yadav पहले examination करेंगे, फिर ज़रूरत के हिसाब से tests recommend करेंगे।",
      },
    ],
  },

  {
    slug: "stomach-doctor-ranchi",
    image: "/images/stomach-doctor-ranchi-blog.png",
    titleHi: "रांची के Stomach Doctor — कब और क्यों मिलें Dr. Akhilesh Yadav से",
    titleEn: "Stomach Doctor in Ranchi — When to See Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में stomach doctor की तलाश? Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre में पेट, लिवर और आँतों की बीमारियों का expert इलाज करते हैं।",
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
        content: "Ranchi के Morabadi मोहल्ले के 55 साल के Dinesh Kumar Verma 2 साल से intermittent पेट दर्द में antacids लेते रहे। Local clinic ने कभी antibiotic, कभी antacid दिया — कोई permanent solution नहीं मिला। फिर एक दिन उलटी में थोड़ा खून नज़र आया। तुरंत उन्हें Orchid Medical Centre, Ranchi लाया गया। Dr. Akhilesh Yadav — DM Gastroenterology — ने same day endoscopy की: एक bleeding peptic ulcer था। Timely endoscopic treatment ने उन्हें major surgery से बचाया। 'अगर मैं पहले stomach doctor के पास जाता, तो यह नौबत नहीं आती' — यह Dinesh जी का message है Ranchi के सारे patients के लिए।",
      },
      {
        heading: "Stomach Doctor — क्या Treat करते हैं?",
        type: "text",
        content: "Stomach doctor — यानी Gastroenterologist — पेट से लेकर पूरी digestive tract का specialist होता है। Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — stomach के साथ liver, pancreas और gallbladder की बीमारियों में भी expert हैं। सिर्फ stomach pain नहीं — acidity, ulcer, jaundice, fatty liver, hepatitis, piles — सब में specialist training है। Ranchi के 10+ साल के experience में उन्होंने हज़ारों patients का इलाज किया है। [Gastroenterologist Ranchi में](/blog/best-gastroenterologist-ranchi) से जुड़े सवालों के लिए यह guide helpful है। [Conditions की पूरी list](/conditions) या [procedures Ranchi](/procedures) देखें।",
      },
      {
        heading: "🚨 इन Symptoms में Stomach Doctor से मिलना ज़रूरी है",
        type: "list",
        content: "इन्हें कभी ignore न करें:",
        list: [
          "पेट में दर्द जो 2 हफ्ते से ज़्यादा हो और painkillers से न छूटे",
          "खून की उलटी (hematemesis — खून की उल्टी) — यह emergency है",
          "काले या dark red रंग का मल — internal bleeding का sign (melaena)",
          "Jaundice — आँखों या skin का पीला होना (Jaundice — पीलिया)",
          "अचानक वज़न घट जाना बिना किसी कारण के",
          "निगलने में तकलीफ या खाना food pipe में अटकना (Dysphagia)",
          "Chronic diarrhea जो 2 हफ्ते से ज़्यादा हो",
          "Alcohol पीने के बाद बहुत तेज़ पेट दर्द — pancreatitis हो सकता है",
        ],
      },
      {
        heading: "पेट की Problems के प्रमुख कारण",
        type: "list",
        content: "Ranchi और आस-पास के इलाकों में यह कारण ज़्यादा common हैं:",
        list: [
          "H. Pylori bacteria — contaminated पानी और खाने से फैलता है",
          "Alcohol और gutka/tobacco — liver और stomach दोनों को नुकसान",
          "NSAIDs (aspirin, ibuprofen) — gastric ulcer का सबसे बड़ा कारण",
          "Stress और anxiety — IBS का major trigger",
          "Unhygienic food — hepatitis A, typhoid, amoebiasis का risk",
          "Obesity — GERD, fatty liver का risk बढ़ता है",
          "Genetic factors — family में colon cancer या IBD होने से risk ज़्यादा",
        ],
      },
      {
        heading: "Ranchi में Stomach Doctor से जाँच और Diagnosis",
        type: "text",
        content: "Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — एक systematic diagnostic process follow करते हैं। पहले detailed clinical history और abdominal examination, फिर ज़रूरत के हिसाब से basic blood tests (CBC, LFT, amylase) या H. Pylori test। Complex cases में Ultrasound, CT Scan या Endoscopy होती है। WHO के data के मुताबिक, gastric cancer की 5-year survival rate early stage में 90%+ होती है लेकिन late stage में 30% से भी कम — इसलिए early diagnosis ज़रूरी है। [Fatty liver diet guide](/blog/fatty-liver-diet-hindi) या [liver cirrhosis stages](/blog/liver-cirrhosis-stages-treatment-india) पढ़ें।",
      },
      {
        heading: "Stomach Problems का इलाज — Dr. Akhilesh Yadav का Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — का treatment approach patient-centered है। Simple acidity या H. Pylori में medicines और diet guidance से काम होता है — Ranchi के local food sattu, दही-चूड़ा को gut-friendly बनाना भी बताते हैं। Moderate cases में combination therapy। Severe cases या complications में endoscopic या surgical intervention — ERCP से bile duct stones निकालना, colonoscopy से polyp remove करना — सब Orchid Medical Centre में available है। [ERCP के बारे में पढ़ें](/blog/ercp-procedure-cbd-stones-ranchi) या [appointment book करें](/book)।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Stomach Doctor Ranchi",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'मैं Ranchi में हज़ारों patients देखा है जिन्हें 6-12 महीने बाद पता चला कि उन्हें क्या था। Stomach pain को घर पर 4 हफ्ते से ज़्यादा मत handle करें — एक बार specialist से मिलें। Early treatment में time, पैसा और stress — तीनों बचते हैं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में Mon–Sat available हैं।\n\nयह article सिर्फ educational purpose के लिए है। किसी भी health problem के लिए Dr. Akhilesh Yadav या अपने doctor से ज़रूर मिलें।\n\nAppointment के लिए call करें: +91 74919 25047 या [WhatsApp करें](https://wa.me/917491925047)। Orchid Medical Centre, HB Road, Ranchi।",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Stomach Doctor Ranchi",
        type: "text",
        content: "Ranchi के patients stomach doctor के बारे में यह सवाल अक्सर पूछते हैं:",
      },
    ],
    faqs: [
      {
        q: "Ranchi में stomach doctor और gastroenterologist में क्या अंतर है?",
        a: "दोनों एक ही हैं — 'stomach doctor' common language में use होता है जबकि 'gastroenterologist' medical term है। Dr. Akhilesh Yadav DM Gastroenterology qualified stomach specialist हैं Orchid Medical Centre, Ranchi में।",
      },
      {
        q: "Stomach pain में कब doctor के पास जाना चाहिए?",
        a: "अगर pain 2 हफ्ते से ज़्यादा हो, रात को उठाए, या खून की उलटी के साथ हो — तुरंत doctor से मिलें। Mild pain जो खुद ठीक हो जाए तो wait कर सकते हैं।",
      },
      {
        q: "क्या Ranchi में stomach के लिए सारे tests available हैं?",
        a: "हाँ — Orchid Medical Centre, Ranchi में blood tests, ultrasound, endoscopy, colonoscopy, ERCP, EUS सब available हैं। Patna या Kolkata जाने की ज़रूरत नहीं पड़ती ज़्यादातर cases में।",
      },
      {
        q: "पेट दर्द में क्या खाना चाहिए?",
        a: "दही, खिचड़ी, plain दाल-भात, छाछ (buttermilk) — ये gut के लिए gentle होते हैं। तीखा, मैदा, processed food, cold drinks avoid करें। Specific diet के लिए Dr. Akhilesh Yadav से मिलना better है — diagnosis के हिसाब से अलग होती है।",
      },
      {
        q: "Stomach doctor का wait time कितना होता है Orchid Medical Centre में?",
        a: "Appointment के साथ wait time बहुत कम होता है। Walk-in में थोड़ा ज़्यादा wait हो सकता है। Call करें +91 74919 25047 पहले appointment के लिए।",
      },
      {
        q: "क्या stomach cancer Ranchi में common है?",
        a: "Dr. Akhilesh Yadav recommend करते हैं कि 45+ age के लोगों को endoscopy या colon cancer screening ज़रूर करवानी चाहिए, especially अगर family history हो या chronic symptoms हों। Early detection बहुत ज़रूरी है।",
      },
    ],
  },

  {
    slug: "jaundice-treatment-ranchi",
    image: "/images/jaundice-treatment-ranchi-blog.png",
    titleHi: "रांची में Jaundice (पीलिया) का इलाज — Types, Tests और Treatment",
    titleEn: "Jaundice Treatment in Ranchi — Types, Tests and Treatment Guide",
    excerptHi: "रांची में jaundice का इलाज — hepatitis A से लेकर bile duct blockage तक, Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre में सही diagnosis मिलती है।",
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
        content: "Ranchi के Doranda मोहल्ले की 32 साल की Kavita Singh को एक हफ्ते से आँखें और skin पीली हो रही थी। घबराहट में पहले एक ज्योतिषी के पास गई, फिर एक नीम-हकीम ने कुछ दवा दी। जब एक हफ्ते में कोई सुधार नहीं हुआ और उलटी और बुखार भी आने लगे, तब परिवार वाले उन्हें Orchid Medical Centre, Ranchi ले गए। Dr. Akhilesh Yadav — DM Gastroenterology — ने blood tests (LFT, hepatitis panel) करवाए — Hepatitis A infection confirm हुआ। Proper medical treatment से 10 दिन में Kavita जी पूरी तरह recover हो गईं। सही वक्त पर सही diagnosis ने उन्हें complications से बचाया। पीलिया को घर के नुस्खों पर मत छोड़ें।",
      },
      {
        heading: "Jaundice (पीलिया) क्या होता है?",
        type: "text",
        content: "Jaundice — पहले इसे 'पीलिया' बोलते थे — एक condition नहीं बल्कि एक sign है। जब खून में bilirubin (पित्त रंजक — bile pigment) बढ़ता है, तो आँखें, skin और nails पीली हो जाती हैं। Bilirubin liver में process होता है — अगर liver ठीक से काम न करे, bile duct block हो, या red blood cells ज़्यादा टूटें, तो bilirubin बढ़ जाता है। Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre — jaundice के तीन types diagnose करते हैं: Pre-hepatic (blood disorder से), Hepatic (liver की बीमारी से), और Post-hepatic (bile duct blockage से)। हर type का treatment अलग होता है। [Jaundice के लक्षण](/blog/jaundice-symptoms-causes) पढ़ें या [liver problem doctor](/blog/best-gastroenterologist-ranchi) से मिलें।",
      },
      {
        heading: "🔴 Jaundice के Symptoms जो Doctor को दिखाने चाहिए",
        type: "list",
        content: "यह symptoms होने पर तुरंत Ranchi में doctor से मिलें:",
        list: [
          "आँखों का सफेद हिस्सा (sclera) पीला होना — सबसे पहला sign",
          "Skin का पीला पड़ना — fingers, palms, face",
          "पेशाब (urine) का dark yellow या brown होना — bilirubin ज़्यादा है",
          "मल (stool) का pale, grey या chalk-white होना — bile duct blockage",
          "थकान, भूख न लगना और nausea (जी मिचलाना)",
          "पेट में दर्द — especially right side में liver के area में",
          "बुखार और काँपना — hepatitis infection का sign",
          "Itching (खुजली) — bile salts skin में जमने से होती है",
        ],
      },
      {
        heading: "Jaundice के कारण — Types और Causes",
        type: "list",
        content: "Jharkhand में इन कारणों से jaundice ज़्यादा होता है:",
        list: [
          "Hepatitis A — contaminated पानी या खाने से (Ranchi में monsoon में ज़्यादा)",
          "Hepatitis B और C — blood contact, infected needle या sexual contact से",
          "Alcohol-related liver disease (ALD — मद्यजनित यकृत रोग)",
          "Gallstones — bile duct में पथरी से blockage (Obstructive Jaundice)",
          "Fatty liver disease advancing to liver damage",
          "Drug-induced liver injury — कुछ medicines से liver damage",
          "Liver Cirrhosis (यकृत का सिकुड़ना) — chronic liver scarring",
        ],
      },
      {
        heading: "Ranchi में Jaundice की जाँच — Tests और Diagnosis",
        type: "text",
        content: "Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — structured approach से jaundice diagnose करते हैं। सबसे पहले LFT (Liver Function Tests) — SGPT, SGOT, Alkaline Phosphatase, Bilirubin (total और direct) और PT/INR। फिर viral hepatitis panel — Hepatitis A IgM, HBsAg, Anti-HCV। Ultrasound abdomen से liver size, texture और bile duct check होती है। अगर gallstone या bile duct obstruction हो तो MRCP या ERCP recommend करते हैं। WHO के data के मुताबिक, India में हर साल 30 लाख से ज़्यादा hepatitis A cases होते हैं — ज़्यादातर monsoon के बाद। [ERCP procedure](/blog/ercp-procedure-cbd-stones-ranchi) और [hepatitis treatment](/blog/hepatitis-b-c-prevention-treatment-facts) पढ़ें।",
      },
      {
        heading: "Ranchi में Jaundice का इलाज — Treatment Options",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — treatment cause के हिसाब से decide करते हैं। Hepatitis A में rest, hydration और supportive care से ठीक होता है — 4-6 हफ्ते में। Hepatitis B में antiviral medicines लगते हैं। Hepatitis C में नये DAA (Direct Acting Antivirals) से 8-12 हफ्ते में 95%+ recovery rate है — India में ये medicines accessible हैं। Obstructive Jaundice में ERCP से bile duct की पथरी निकालना या stent डालना होता है। Alcohol-related liver disease में strict alcohol बंद और liver support medicines। घर के नुस्खे — गन्ने का रस, कुटकी — सिर्फ mild supportive role में हैं; severe jaundice में medical treatment essential है। [Appointment book करें](/book)।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Jaundice",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में jaundice के patients अक्सर झोला-छाप doctor या घर के नुस्खे try करते हैं — 2-3 हफ्ते waste होते हैं और condition serious हो जाती है। Jaundice एक medical condition है जिसमें liver involved होता है। तुरंत blood tests करवाएं और gastroenterologist से मिलें। Jaundice का cause पता करना ज़रूरी है — हर type का इलाज अलग होता है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में available हैं।\n\nयह article सिर्फ educational purpose के लिए है। किसी भी health problem के लिए Dr. Akhilesh Yadav या अपने doctor से ज़रूर मिलें।\n\nAppointment के लिए call करें: +91 74919 25047 या [WhatsApp करें](https://wa.me/917491925047)। Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Jaundice Treatment Ranchi",
        type: "text",
        content: "Ranchi के patients jaundice के बारे में ये सवाल अक्सर पूछते हैं:",
      },
    ],
    faqs: [
      {
        q: "Jaundice में क्या खाना चाहिए?",
        a: "Jaundice में light easily digestible food best है — खिचड़ी, दाल का पानी, coconut water, plain rice। Oily, fried, spicy food avoid करें। Alcohol बिल्कुल बंद करें। Dr. Akhilesh Yadav की guidance से diet तय करें — cause के हिसाब से recommendations अलग होती हैं।",
      },
      {
        q: "क्या jaundice contagious (संक्रामक) होता है?",
        a: "Hepatitis A और E contagious होते हैं (contaminated food/water से)। Hepatitis B और C blood/sexual contact से फैल सकते हैं। Hepatitis A और B दोनों के लिए vaccination available है। Orchid Medical Centre में Dr. Akhilesh Yadav से vaccination advice लें।",
      },
      {
        q: "Jaundice में गन्ने का रस पीना चाहिए?",
        a: "Mild supportive होगा लेकिन medical treatment की जगह नहीं ले सकता। Obstructive jaundice या severe hepatitis में सिर्फ गन्ने के रस से ठीक नहीं होगा — proper diagnosis और treatment ज़रूरी है।",
      },
      {
        q: "Ranchi में jaundice के लिए blood test कहाँ होती है?",
        a: "Orchid Medical Centre, Ranchi में या किसी भी registered diagnostic lab में LFT (Liver Function Test) करवा सकते हैं। Dr. Akhilesh Yadav specific tests recommend करेंगे symptoms के हिसाब से। Call करें: +91 74919 25047।",
      },
      {
        q: "Jaundice कितने दिन में ठीक होता है?",
        a: "Hepatitis A में 4-6 हफ्ते। Hepatitis B में treatment के साथ 6-12 months (chronic हो सकता है)। Obstructive jaundice में ERCP के बाद 1-2 हफ्ते। Cause के हिसाब से timing अलग होती है — Dr. Akhilesh Yadav accurate prognosis बता सकते हैं।",
      },
      {
        q: "क्या Ranchi में Hepatitis C का इलाज होता है?",
        a: "हाँ — नए Direct Acting Antivirals (DAA) से Hepatitis C का 8-12 हफ्ते में 95%+ recovery rate है। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, Ranchi में Hepatitis C का complete treatment करते हैं।",
      },
    ],
  },

  {
    slug: "acidity-doctor-ranchi",
    image: "/images/acidity-doctor-ranchi-blog.png",
    titleHi: "रांची में Acidity का Doctor — बिना Antacid के Permanent Relief कैसे?",
    titleEn: "Acidity Doctor in Ranchi — Long-term Relief Without Daily Antacids",
    excerptHi: "रांची में acidity का doctor — Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre। GERD, chronic acidity और ulcer का सही diagnosis और lasting treatment।",
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
        content: "Ranchi के Ashok Nagar के 42 साल के Mukesh Tiwari रोज़ सुबह उठते तो सीने में जलन होती थी। 3 साल से वो chemist से antacid tablet ले लेते और काम चलाते रहे। जब जलन रात को सोने नहीं दे रही थी और खाँसी भी शुरू हो गई, तब उनकी पत्नी ज़ोरदार argue करके Orchid Medical Centre, Ranchi ले गई। Dr. Akhilesh Yadav — DM Gastroenterology — ने Upper Endoscopy की: Grade B esophagitis (food pipe में सूजन) और Barrett's esophagus का early sign मिला। सिर्फ antacid नहीं — proper PPI therapy और lifestyle changes से 8 हफ्ते में Mukesh जी को lasting relief मिली। 'मैं सोचता था ये तो normal है' — ये सोच हज़ारों Ranchi के patients में है।",
      },
      {
        heading: "Acidity और GERD — फर्क समझें",
        type: "text",
        content: "Acidity और GERD (Gastroesophageal Reflux Disease — आमाशय से भोजन-नलिका में एसिड का वापस आना) में फर्क है। Occasional acidity normal है — तीखा खाया, late night खाया। GERD तब होता है जब ये हफ्ते में 2 या ज़्यादा बार हो, या 4+ हफ्ते से continuously हो। GERD में acid esophagus में repeatedly आता है, जिससे esophagitis, ulcer, या Barrett's esophagus हो सकता है — जो cancer risk है। Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre — अक्सर देखते हैं कि लोग सालों तक antacid लेते हैं बिना proper diagnosis के। [Gastroenterologist Ranchi में](/blog/best-gastroenterologist-ranchi) या [endoscopy के बारे में](/blog/endoscopy-kya-hota-hai) पढ़ें।",
      },
      {
        heading: "🔴 Acidity के ये Symptoms हों तो Doctor से मिलें",
        type: "list",
        content: "सिर्फ antacid से काम मत चलाएं — ये होने पर doctor ज़रूरी है:",
        list: [
          "सीने में जलन (heartburn) जो रात को ज़्यादा हो या लोटते वक्त बढ़े",
          "गला खराब रहना या खाँसी आना — acid larynx में जा रहा है",
          "खाना निगलने में तकलीफ या खाना अटकना (Dysphagia — खाना निगलने में दिक्कत)",
          "Antacid से 4+ हफ्ते में कोई फायदा नहीं हो रहा",
          "भूख न लगना या वज़न कम हो जाना",
          "काला या dark stool — ulcer bleeding का sign, तुरंत मिलें",
          "रात को सीने में दर्द से उठना",
        ],
      },
      {
        heading: "Chronic Acidity के कारण — Ranchi के Patients में Common Triggers",
        type: "list",
        content: "Ranchi की lifestyle में ये triggers ज़्यादा देखे जाते हैं:",
        list: [
          "रात का खाना बहुत late खाना और तुरंत सो जाना",
          "तीखा-मसालेदार food — लिट्टी-चोखा बहुत ज़्यादा घी के साथ",
          "चाय और coffee की ज़्यादा consumption — acid production बढ़ता है",
          "Stress और anxiety — cortisol acid secretion बढ़ाता है",
          "H. Pylori infection — gastric acid dysregulation का कारण",
          "ज़्यादा वज़न (Obesity) — LES (Lower Esophageal Sphincter) पर pressure बढ़ता है",
        ],
      },
      {
        heading: "Ranchi में Acidity की जाँच — Dr. Akhilesh Yadav का Approach",
        type: "text",
        content: "Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — chronic acidity में systematic approach लेते हैं। पहले 4+ हफ्ते की history लेना, PPI (Proton Pump Inhibitor — एसिड रोकने की दवा) trial response देखना। अगर response partial हो या red-flag symptoms हों, तो Upper GI Endoscopy (OGD Scopy) करते हैं — Orchid Medical Centre में ही available है। H. Pylori test (stool antigen test) भी recommend करते हैं। AIIMS के study के मुताबिक, India में 50-60% GERD cases में H. Pylori positive होता है। Timely endoscopy से Barrett's esophagus या early cancer भी detect होती है। [Piles vs fissure](/blog/piles-fissure-fistula-differences-treatment) या [appointment book करें](/book)।",
      },
      {
        heading: "Acidity और GERD का इलाज — सिर्फ Antacid नहीं",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, Ranchi — का मानना है कि GERD का solution multidimensional है। सबसे पहले cause identify करना — H. Pylori है तो 14-day eradication therapy। फिर PPI का proper course — अकेले antacid से ज़्यादा effective होता है। Lifestyle में: रात का खाना सोने से 3 घंटे पहले खाना, bed का head 6-8 inch उठाना, वज़न control, alcohol avoid करना। Ranchi के local food में — सत्तू का पानी, plain दही (curd), छाछ — ये सब acidity में helpful हैं। Severe Barrett's esophagus cases में endoscopic ablation या surgery भी possible है, लेकिन ज़्यादातर cases conservative treatment से ठीक होते हैं।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Acidity",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं रोज़ 10-15 acidity patients देखता हूँ। इनमें से आधे से ज़्यादा लोग सालों से antacid ले रहे होते हैं बिना किसी doctor की advice के। ये dangerous हो सकता है — chronic acid reflux से esophageal damage और cancer risk होता है। 4 हफ्ते से ज़्यादा acidity है तो एक बार endoscopy ज़रूर करवा लें।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में available हैं।\n\nयह article सिर्फ educational purpose के लिए है। किसी भी health problem के लिए Dr. Akhilesh Yadav या अपने doctor से ज़रूर मिलें।\n\nAppointment के लिए call करें: +91 74919 25047 या [WhatsApp करें](https://wa.me/917491925047)। Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Acidity Doctor Ranchi",
        type: "text",
        content: "Ranchi के patients acidity और GERD के बारे में ये सवाल अक्सर पूछते हैं:",
      },
    ],
    faqs: [
      {
        q: "क्या antacid ज़्यादा लेने से नुकसान होता है?",
        a: "हाँ — long-term antacid use से kidney stones, magnesium deficiency और rebound acidity हो सकती है। PPI (Omeprazole, Pantoprazole) भी बिना supervision के months तक लेना ठीक नहीं। Dr. Akhilesh Yadav से proper assessment करवा के ही treatment लें।",
      },
      {
        q: "Acidity में क्या नहीं खाना चाहिए?",
        a: "Avoid करें: citrus fruits (नींबू, orange), tomatoes, chocolate, mint, alcohol, coffee, fried/fatty food। Ranchi में लिट्टी-चोखा बहुत oily होता है — थोड़ा कम घी use करें GERD में। Plain दही और लस्सी ठीक होते हैं।",
      },
      {
        q: "GERD और heart attack में कैसे पहचान करें?",
        a: "GERD में जलन esophagus में होती है — खाने के बाद ज़्यादा, लोटने पर ज़्यादा। Heart attack में chest pressure/squeezing, left arm में दर्द, sweating होती है। Doubt होने पर तुरंत emergency room जाएं — Dr. Akhilesh Yadav भी यही recommend करते हैं।",
      },
      {
        q: "क्या yoga से acidity ठीक होती है?",
        a: "कुछ yoga poses (जैसे Vajrasana after meals) acidity में helpful हैं। लेकिन GERD में certain poses (जैसे headstand, forward bends) acid reflux बढ़ाते हैं। Dr. Akhilesh Yadav से specific recommendations लें अपनी condition के हिसाब से।",
      },
      {
        q: "Ranchi में endoscopy के बिना acidity diagnose हो सकती है?",
        a: "Mild cases में clinical history और PPI trial से diagnosis possible है। लेकिन 4+ हफ्ते की acidity, red-flag symptoms या medications से relief न हो तो endoscopy ज़रूरी है — Orchid Medical Centre, Ranchi में available है।",
      },
      {
        q: "क्या बच्चों में acidity का treatment अलग होता है?",
        a: "हाँ — बच्चों में acid reflux (GERD) का presentation अलग होता है। सिर्फ adult medicines use करना ठीक नहीं। Dr. Akhilesh Yadav — DM Gastroenterology — adult और pediatric gastro conditions दोनों में expert हैं Orchid Medical Centre, Ranchi में।",
      },
    ],
  },

  // ── BATCH 2: BLOGS 6–10 ─────────────────────────────────────────────────────

  {
    slug: "piles-doctor-ranchi",
    titleHi: "बवासीर (Piles) के लिए Ranchi में Doctor — Dr. Akhilesh Yadav",
    titleEn: "Piles Doctor in Ranchi — Diagnosis & Treatment by Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में बवासीर के लिए best gastroenterologist कौन हैं? Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre में hemorrhoids का advanced, surgery-free इलाज करते हैं।",
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
        heading: "Ranchi के Patient की कहानी — बवासीर का दर्द",
        type: "text",
        content: "Ramgarh से आए 42 साल के Ram Kishore — उन्हें 8 महीने से मलबंध (constipation) और toilet के बाद bleeding हो रही थी। उनके पड़ोसी ने कहा 'पाइल्स है तो surgery ही होगी।' लेकिन Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने proctoscopy से diagnosis की और बताया कि उन्हें Grade 2 Internal Hemorrhoids हैं जो बिना surgery के ठीक हो सकते हैं। आज वो बिल्कुल ठीक हैं। Ranchi और Jharkhand में पाइल्स (बवासीर / बबासीर) एक common problem है — लेकिन ज़्यादातर लोग या तो share करने से शर्माते हैं या गलत treatment लेते हैं।",
      },
      {
        heading: "Piles क्या होता है — आसान भाषा में समझें",
        type: "text",
        content: "Piles यानि Hemorrhoids — rectum (मलाशय) और anus (गुदा) के अंदर या बाहर की swollen veins होती हैं। जैसे पैर में varicose veins होती हैं, वैसी ही rectum में भी हो सकती हैं। Internal Hemorrhoids (अंदर): generally pain-free, लेकिन toilet के बाद bright red blood आता है। External Hemorrhoids (बाहर): दर्द, खुजली, और एक hard lump feel होती है। Prolapsed Hemorrhoids (बाहर निकल आए): Grade 3-4, जिसमें tissue anus के बाहर आ जाता है। Ranchi में Dr. Akhilesh Yadav daily 8-10 piles patients देखते हैं — और majority को surgery की ज़रूरत नहीं होती।",
      },
      {
        heading: "Piles के कारण — Ranchi के Context में",
        type: "list",
        content: "Ranchi और Jharkhand में piles के ये common कारण हैं:",
        list: [
          "Chronic constipation — fiber-poor diet, कम पानी पीना — Jharkhand के rural areas में ज़्यादा",
          "Oily-spicy food का ज़्यादा सेवन — दाल-बाटी, लिट्टी-चोखा में घी की मात्रा",
          "लंबे वक्त तक toilet पर बैठना और strain करना",
          "Pregnancy — especially 3rd trimester में pelvic pressure",
          "मोटापा (Obesity) — abdominal pressure बढ़ता है",
          "Hereditary factors — अगर family में है तो risk ज़्यादा",
          "Sedentary lifestyle — ज़्यादा देर बैठना, exercise नहीं करना",
        ],
      },
      {
        heading: "Dr. Akhilesh Yadav का Diagnosis Approach — Orchid Medical Centre Ranchi",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology — पहले detailed history लेते हैं: कितने दिन से, blood का colour क्या है (bright red vs dark), दर्द है या नहीं, prolapse है या नहीं। फिर Proctoscopy (एक छोटा instrument जो anus में डाला जाता है — generally painless) से exact grade determine करते हैं। अगर bleeding excessive हो या age 40+ हो, तो Colonoscopy भी recommend करते हैं colon cancer या polyps rule out करने के लिए — Orchid Medical Centre में ही available है। एक बार diagnosis clear हो, तो treatment plan decide होता है।",
      },
      {
        heading: "Piles का इलाज — Surgery ज़रूरी नहीं",
        type: "text",
        content: "Dr. Akhilesh Yadav, Ranchi के patients को explain करते हैं: Grade 1-2 hemorrhoids में lifestyle + medication से 80% improvement होता है। High-fiber diet (सब्जियाँ, दालें, isabgol), 2-3 litre पानी रोज़, stool softeners, topical creams। Grade 2-3 में Rubber Band Ligation (RBL) — एक OPD procedure जिसमें hemorrhoid को band से बाँधा जाता है और वो shrink हो जाता है — no general anesthesia, no admission। Grade 3-4 severe cases में Stapler Hemorrhoidopexy या Hemorrhoidectomy — लेकिन ये सिर्फ minority में ज़रूरी होती है। Ranchi में Dr. Akhilesh Yadav Orchid Medical Centre में ये सब options provide करते हैं।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Piles",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'बवासीर में शर्माने की ज़रूरत नहीं — ये एक medical condition है। Ranchi में मैं रोज़ patients देखता हूँ जिन्होंने 2-3 साल तक छुपाया और फिर problem बढ़ गई। जितनी जल्दी मिलें, उतना बेहतर — Grade 1-2 में कोई surgery नहीं चाहिए।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में available हैं।\n\nयह article सिर्फ educational purpose के लिए है। किसी भी health problem के लिए qualified doctor से ज़रूर मिलें।\n\nAppointment के लिए call करें: +91 74919 25047 या [WhatsApp करें](https://wa.me/917491925047)। Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Piles Doctor Ranchi",
        type: "text",
        content: "Ranchi के patients piles के बारे में ये सवाल अक्सर पूछते हैं:",
      },
    ],
    faqs: [
      {
        q: "क्या piles में हमेशा operation करना पड़ता है?",
        a: "नहीं — Grade 1 और 2 hemorrhoids में medication, diet change और Rubber Band Ligation (OPD procedure) से ठीक हो जाता है। Surgery सिर्फ severe Grade 3-4 cases में लगती है। Dr. Akhilesh Yadav Ranchi में सबसे पहले non-surgical options try करते हैं।",
      },
      {
        q: "Piles में कौनसा doctor दिखाना चाहिए?",
        a: "Gastroenterologist या Colorectal specialist दिखाना best है। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, Ranchi में hemorrhoids के सब cases देखते हैं — OPD procedure से लेकर surgery तक।",
      },
      {
        q: "Toilet में bright red blood आने पर क्या करें?",
        a: "Piles का common sign है, लेकिन कभी कभी colon polyp या early cancer भी हो सकता है, इसलिए ignore मत करें। 40+ age में especially — तुरंत Dr. Akhilesh Yadav या किसी gastroenterologist से मिलें Ranchi में।",
      },
      {
        q: "Piles में क्या खाना चाहिए?",
        a: "High fiber foods — isabgol (psyllium), green leafy vegetables, fruits with skin, दालें। रोज़ 2-3 litre पानी। Avoid करें: refined flour (मैदा), oily-spicy food, alcohol। Ranchi के local food में सत्तू का पानी और छाछ helpful हैं।",
      },
      {
        q: "Rubber Band Ligation क्या होता है और दर्द होता है क्या?",
        a: "RBL एक OPD procedure है जिसमें hemorrhoid के base पर एक rubber band डाल देते हैं — blood supply cut होती है और वो 7-10 दिन में अपने आप गिर जाता है। Most patients में सिर्फ हल्की discomfort या heaviness होती है। Dr. Akhilesh Yadav ये procedure Orchid Medical Centre, Ranchi में करते हैं।",
      },
      {
        q: "Piles दोबारा हो सकती है surgery के बाद भी?",
        a: "हाँ — अगर diet और lifestyle नहीं बदली तो recurrence हो सकता है। Dr. Akhilesh Yadav surgery के बाद भी detailed diet plan और follow-up का schedule देते हैं Ranchi के patients को।",
      },
    ],
  },

  {
    slug: "ibs-doctor-ranchi",
    titleHi: "IBS (Irritable Bowel Syndrome) Doctor Ranchi — Dr. Akhilesh Yadav",
    titleEn: "IBS Doctor in Ranchi — Expert IBS Diagnosis & Management | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में IBS के लिए specialist doctor कौन हैं? Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre में irritable bowel syndrome का scientific, patient-centric इलाज करते हैं।",
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
        heading: "Ranchi की Patient की कहानी — सालों की तकलीफ",
        type: "text",
        content: "Hazaribagh से आए 28 साल की Priya Devi — 3 साल से पेट में दर्द, बार-बार loose motions, और फिर कुछ दिन बिल्कुल constipation। Doctors ने कई tests किए — सब normal। 'Stress है' बोलके dismiss कर दिया। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने diagnosis की: IBS (Irritable Bowel Syndrome)। 'ये real condition है — आपकी imagination नहीं,' उनका पहला शब्द था। 4 महीने के structured treatment के बाद Priya की life normal हो गई। Ranchi में IBS एक underdiagnosed condition है — लाखों patients सालों तक suffer करते हैं।",
      },
      {
        heading: "IBS क्या है — और क्यों इतना Confusing है",
        type: "text",
        content: "IBS (Irritable Bowel Syndrome) एक functional gut disorder है — मतलब, आपकी intestine (आँत) में कोई structural damage नहीं होता, लेकिन function abnormal होता है। Brain-gut connection disturbed रहता है। ये एक spectrum है: IBS-D (Diarrhea predominant) — अक्सर loose motions। IBS-C (Constipation predominant) — अक्सर कब्ज। IBS-M (Mixed) — दोनों बार-बार आता-जाता है। Ranchi में Dr. Akhilesh Yadav के अनुसार, India में 10-15% adults को IBS है — और बहुत कम को सही diagnosis मिलती है। Tests 'normal' आते हैं, तो लोग सोचते हैं कुछ नहीं है — जो गलत है।",
      },
      {
        heading: "IBS के Symptoms — क्या आप पहचानते हैं?",
        type: "list",
        content: "IBS के ये common symptoms हैं:",
        list: [
          "Recurrent abdominal pain (पेट में दर्द) जो toilet के बाद better हो जाता है",
          "Stool consistency में change — कभी loose, कभी hard",
          "Bloating और gas — पेट फूला हुआ लगता है",
          "Feeling of incomplete evacuation — toilet के बाद भी लगता है पूरी तरह नहीं हुआ",
          "Mucus in stool (आँत का fluid motions में)",
          "Symptoms stress या certain foods से worse होते हैं",
          "बिना किसी obvious cause के बार-बार bathroom जाना",
        ],
      },
      {
        heading: "IBS का Diagnosis — Dr. Akhilesh Yadav का Rome IV Criteria Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi में IBS diagnosis के लिए Rome IV Criteria use करते हैं: recurrent abdominal pain minimum 1 day/week for last 3 months, related to defecation, associated with stool frequency or form change। साथ में, ये rule out करते हैं: Inflammatory Bowel Disease (IBD — Crohn's/Colitis), Celiac Disease (gluten intolerance), Colon Cancer। इसके लिए blood tests (CBC, CRP, Celiac markers), stool tests, और ज़रूरत पड़ने पर Colonoscopy। Red flags — rectal bleeding, weight loss, night symptoms, age 50+ — में पहले investigation ज़रूरी है।",
      },
      {
        heading: "IBS का इलाज — सिर्फ दवा नहीं, Life Change",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi में IBS का multidimensional treatment देते हैं। Diet: Low-FODMAP diet trial (fermentable carbohydrates avoid करना — onion, garlic, wheat, milk, lentils temporarily reduce करना)। Local foods में — plain rice, moong दाल, banana, curd (in moderation) IBS-safe होते हैं। Medication: Anti-spasmodics (पेट दर्द के लिए), probiotics (gut bacteria balance), fiber supplements (IBS-C में), loperamide (IBS-D में)। Stress Management: IBS में gut-brain axis का बड़ा role है — meditation, yoga, और consistent sleep schedule help करते हैं। CBT (Cognitive Behavioral Therapy) भी evidence-based है severe cases में।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — IBS",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'IBS के patients को सबसे पहले ये assurance चाहिए कि ये real condition है और इनकी imagination नहीं। Ranchi में मैं देख रहा हूँ कि patients बिना diagnosis के सालों तक anxiety और दर्द में रहते हैं। एक simple structured plan से 70% patients में significant improvement होता है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में available हैं।\n\nयह article सिर्फ educational purpose के लिए है। अपनी condition के लिए Dr. Akhilesh Yadav या अपने doctor से ज़रूर मिलें।\n\nAppointment के लिए call करें: +91 74919 25047 या [WhatsApp करें](https://wa.me/917491925047)। Orchid Medical Centre, HB Road, Ranchi. Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — IBS Doctor Ranchi",
        type: "text",
        content: "IBS के बारे में Ranchi के patients के common सवाल:",
      },
    ],
    faqs: [
      {
        q: "IBS और IBD में क्या फर्क है?",
        a: "IBS (Irritable Bowel Syndrome) एक functional disorder है — tests normal आते हैं, कोई structural damage नहीं। IBD (Inflammatory Bowel Disease — Crohn's/Ulcerative Colitis) में actual inflammation और damage होती है — tests में abnormality दिखती है। Dr. Akhilesh Yadav Ranchi में दोनों conditions treat करते हैं।",
      },
      {
        q: "IBS में कौनसा खाना avoid करें?",
        a: "Low-FODMAP approach follow करें: avoid करें onion, garlic, wheat (रोटी थोड़ी कम), milk, राजमा/छोले, apple, mango in excess। Ranchi के local safe foods: plain rice, moong दाल, banana, curd (limited), सत्तू (in IBS-C)। Dr. Akhilesh Yadav के पास personalized diet plan मिलेगा।",
      },
      {
        q: "क्या IBS में colonoscopy ज़रूर है?",
        a: "IBS-C/D के typical cases में under 45 age में ज़रूर नहीं। लेकिन red flags हैं तो: rectal bleeding, weight loss, family history of colon cancer, anemia — तो Colonoscopy ज़रूरी है। Dr. Akhilesh Yadav decide करते हैं Orchid Medical Centre, Ranchi में।",
      },
      {
        q: "IBS की वजह से कितने दिन में ठीक हो सकते हैं?",
        a: "IBS एक chronic condition है — 'ठीक' नहीं, 'manage' करना होता है। 4-8 हफ्ते के structured treatment में ज़्यादातर patients को significant relief मिलता है। Lifestyle changes long-term maintain करने से symptoms बहुत कम रहते हैं। Dr. Akhilesh Yadav regular follow-up करते हैं।",
      },
      {
        q: "IBS में stress का कितना role है?",
        a: "बहुत बड़ा role है — IBS एक gut-brain axis disorder है। Stress से symptoms worsen होते हैं। Dr. Akhilesh Yadav medication के साथ stress management techniques भी suggest करते हैं — breathing exercises, yoga, consistent sleep schedule।",
      },
      {
        q: "क्या probiotics IBS में help करते हैं?",
        a: "हाँ — research-backed हैं कुछ specific strains (Lactobacillus, Bifidobacterium)। Plain दही में natural probiotics होते हैं। Over-the-counter probiotic supplements भी effective हो सकते हैं। Dr. Akhilesh Yadav Ranchi में patient-specific probiotic recommendation देते हैं।",
      },
    ],
  },

  {
    slug: "constipation-doctor-ranchi",
    titleHi: "कब्ज (Constipation) के डॉक्टर Ranchi — Dr. Akhilesh Yadav",
    titleEn: "Constipation Doctor in Ranchi — Diagnosis & Treatment | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में कब्ज (constipation) के लिए specialist डॉक्टर: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Chronic constipation के कारण, इलाज और diet guide.",
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
        heading: "जब कब्ज सिर्फ 'आम बात' नहीं रही",
        type: "text",
        content: "Giridih से आए 55-साल के Shyam Lal ji — 6 महीने से सिर्फ हफ्ते में 2-3 बार bathroom जाना, बार बार strain, और toilet में 20-25 minute spend करना। उन्हें लगा यह उम्र का sign है। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने उन्हें detail में assess किया। पता चला उन्हें Slow Transit Constipation था — और उनके stool में occult blood भी था। Timely colonoscopy ने एक colon polyp पकड़ा जो early stage में remove कर दिया गया। कब्ज — chronic constipation — सिर्फ तकलीफ नहीं, कभी कभी कुछ serious का sign भी हो सकता है।",
      },
      {
        heading: "Constipation कब 'Chronic' कहलाता है?",
        type: "text",
        content: "Rome IV Criteria के मुताबिक, Chronic Constipation diagnosis होती है अगर 6+ महीने से कोई भी 2 symptoms हों: हफ्ते में 3 से कम bowel movements। 25% से ज़्यादा times hard/lumpy stools। 25% से ज़्यादा times excessive straining। 25% से ज़्यादा times incomplete evacuation की feeling। Manual maneuvers की ज़रूरत (अपनी उंगली से help करना)। Ranchi में Dr. Akhilesh Yadav के अनुसार, India में 14-22% adults Chronic Constipation suffer करते हैं — और majority सिर्फ self-medication करते हैं।",
      },
      {
        heading: "कब्ज के कारण — कब डॉक्टर ज़रूरी है",
        type: "list",
        content: "कब्ज के common कारण और warning signs:",
        list: [
          "Low fiber diet — maida roti, processed food, कम सब्जी",
          "Insufficient water intake — 2 litre से कम रोज़",
          "Sedentary lifestyle — exercise नहीं करना",
          "Hypothyroidism (thyroid की कमी) — constipation का hormonal cause",
          "Certain medications — iron tablets, calcium, certain pain killers",
          "Diabetes — bowel motility affect होती है",
          "Warning: rectal bleeding, weight loss, age 50+ में नया constipation — तुरंत डॉक्टर",
        ],
      },
      {
        heading: "Dr. Akhilesh Yadav का Constipation Assessment — Ranchi",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में constipation assessment में करते हैं: detailed history (diet, medications, lifestyle), physical examination including rectal exam। Basic tests: thyroid function, blood sugar, CBC। अगर 50+ age, rectal bleeding, weight loss, या family history हो तो Colonoscopy ज़रूरी — colon polyp या cancer rule out करने के लिए। Functional constipation में colonic transit study या anorectal manometry भी कभी कभी लगती है। यह structured approach ensure करता है कि underlying cause miss न हो।",
      },
      {
        heading: "कब्ज का इलाज — Dr. Akhilesh Yadav का Step-by-Step Plan",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के patients को step-by-step plan देते हैं। Step 1 — Diet: Isabgol (psyllium husk) 1 tbsp रोज़ रात को पानी के साथ, high-fiber vegetables (palak, lauki, karela), whole grains, fruits with skin, रोज़ 2.5-3 litre पानी। Ranchi के local helpful foods: sattu का पानी (natural fiber), papaya, guava, chhachh। Step 2 — Lifestyle: रोज़ 30 min walk, fixed bathroom time (morning, after chai), Squatty Potty position (एक stool रखें पाँव के नीचे — physiologically better)। Step 3 — Medication (doctor के guidance में): osmotic laxatives (lactulose, PEG), stool softeners — सिर्फ short-term। Long-term laxative dependence dangerous है। Step 4 — Advanced: Biofeedback therapy (pelvic floor dysfunction में) या rare cases में surgery।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Constipation",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं रोज़ 5-7 chronic constipation patients देखता हूँ। सबसे बड़ी problem यह है कि लोग सालों तक laxatives खाते रहते हैं बिना diagnosis के — और कभी कभी serious condition miss हो जाती है। 3 महीने से ज़्यादा कब्ज है, तो एक बार proper evaluation ज़रूर करवा लें।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। अपनी condition के लिए qualified doctor से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Constipation Doctor Ranchi",
        type: "text",
        content: "कब्ज के बारे में Ranchi के patients के common सवाल:",
      },
    ],
    faqs: [
      {
        q: "रोज़ laxative लेना safe है?",
        a: "नहीं — long-term stimulant laxatives (senna, bisacodyl) से colon dependent हो जाता है और function और worse हो सकता है। Short-term use ठीक है। Dr. Akhilesh Yadav Ranchi में underlying cause treat करते हैं ताकि laxative dependency न बने।",
      },
      {
        q: "कब्ज में सबसे अच्छा घरेलू नुस्खा क्या है?",
        a: "Isabgol (psyllium husk) रात को पानी के साथ सबसे effective evidence-based remedy है। साथ में रोज़ 2.5 litre पानी और walk। Papaya, guava, sattu का पानी भी helpful हैं। लेकिन 3 महीने से ज़्यादा problem हो तो doctor ज़रूर दिखाएं।",
      },
      {
        q: "क्या कब्ज से colon cancer होता है?",
        a: "Constipation अपने आप colon cancer नहीं करता, लेकिन chronic constipation colon cancer का symptom हो सकता है। इसलिए 50+ age में नया onset constipation, rectal bleeding, weight loss — colonoscopy ज़रूर करवा लें Dr. Akhilesh Yadav से Ranchi में।",
      },
      {
        q: "बच्चों में कब्ज का क्या करें?",
        a: "बच्चों में भी fiber और पानी पहली line है। लेकिन persistent constipation में pediatric evaluation ज़रूरी है — Hirschsprung's disease या other structural issues rule out करने के लिए। Dr. Akhilesh Yadav adult cases handle करते हैं — बच्चों के लिए pediatric gastro refer करें।",
      },
      {
        q: "Pregnancy में कब्ज normal है क्या?",
        a: "हाँ — progesterone hormone bowel motility slow करता है pregnancy में। Safe options: isabgol, lactulose, fiber increase, पानी ज़्यादा पीना। Iron tablets भी constipate करते हैं — doctor से iron form change करवा सकते हैं। Dr. Akhilesh Yadav pregnancy-safe options guide करेंगे।",
      },
    ],
  },

  {
    slug: "stomach-ulcer-doctor-ranchi",
    titleHi: "Stomach Ulcer (Peptic Ulcer) डॉक्टर Ranchi — Dr. Akhilesh Yadav",
    titleEn: "Stomach Ulcer Doctor in Ranchi — Peptic Ulcer Treatment | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में peptic ulcer (stomach ulcer) के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. H. Pylori से लेकर endoscopy तक, complete care.",
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
        heading: "Ranchi के Patient की कहानी — Ulcer का दर्द",
        type: "text",
        content: "Dhanbad से आए 35-साल के Manoj Kumar — 2 महीने से खाने के 1-2 घंटे बाद पेट में जलन और दर्द। रात को भी उठते थे। गाँव में neem-hakeem ने 'gas की problem' बोली और antacid दिया — कुछ दिन ठीक, फिर वापस। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने Endoscopy की। Report: Duodenal Ulcer (first part of small intestine में घाव) और H. Pylori positive। 14-day eradication therapy के बाद Manoj की problem बिल्कुल खत्म। Ranchi और Jharkhand में H. Pylori infection बहुत common है — और यह peptic ulcer का main cause है।",
      },
      {
        heading: "Peptic Ulcer क्या है — Stomach vs Duodenal",
        type: "text",
        content: "Peptic Ulcer — stomach (Gastric Ulcer) या duodenum (Duodenal Ulcer) की inner lining में open sore (घाव) होता है। Stomach की mucus lining normally acid से protect करती है — जब यह protective layer damage हो, तो acid tissue को hurt करता है। Gastric Ulcer: खाने के साथ या बाद में दर्द। Duodenal Ulcer: खाने के 2-3 घंटे बाद या रात को दर्द — खाने से temporarily ठीक लगता है। H. Pylori infection और NSAIDs (aspirin, ibuprofen) — यह दो सबसे बड़े causes हैं। Ranchi में Dr. Akhilesh Yadav के clinic में 40-50% ulcer cases में H. Pylori positive आता है।",
      },
      {
        heading: "Peptic Ulcer के Warning Signs",
        type: "list",
        content: "इनमें से कोई भी हो तो तुरंत डॉक्टर से मिलें:",
        list: [
          "खाने के बाद या रात को burning/gnawing pain upper abdomen में",
          "Nausea या vomiting — sometimes blood या coffee-ground जैसे",
          "Black tarry stools (काला पाखाना) — bleeding ulcer का sign",
          "Suddenly severe stomach pain — perforated ulcer emergency है",
          "Weight loss without trying",
          "खाना खाने के बाद भी पेट भर गया लगता है (early satiety)",
        ],
      },
      {
        heading: "Diagnosis — Dr. Akhilesh Yadav का Endoscopy Approach Ranchi",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi में ulcer diagnosis में पहले detailed history लेते हैं: दर्द pattern, NSAID use history, stress level। H. Pylori test: stool antigen test या urea breath test (blood test से ज़्यादा accurate)। Definitive diagnosis: Upper GI Endoscopy (OGD Scopy) — ulcer directly देखना, biopsy लेना (malignancy rule out करने के लिए Gastric Ulcer में), और H. Pylori rapid urease test। Orchid Medical Centre में advanced endoscopy available है। 45+ age में या alarm features में endoscopy ज़रूरी है।",
      },
      {
        heading: "Peptic Ulcer का इलाज — Dr. Akhilesh Yadav का Protocol",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi में ulcer treatment में यह approach follow करते हैं। H. Pylori positive cases: Triple therapy — 2 antibiotics (clarithromycin + amoxicillin) + PPI (Pantoprazole) — 14 days। Eradication rate 85-90%। NSAIDs-induced ulcer: NSAID बंद करो, PPI शुरू करो। PPI (Proton Pump Inhibitor): stomach acid reduce करना ज़रूरी है — 4-8 हफ्ते। Follow-up endoscopy (Gastric Ulcer में 6-8 हफ्ते बाद) — healing confirm करने और malignancy rule out करने के लिए। Diet: avoid करें NSAIDs, alcohol, smoking, oily-spicy food। Ranchi के local safe foods: plain rice, dahi, moong daal soup।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Stomach Ulcer",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं अक्सर देखता हूँ कि patients सालों तक antacid खाते हैं बिना यह जाने कि उन्हें H. Pylori infection है। यह 14-दिन की antibiotic therapy से ठीक होती है — लेकिन पहले diagnosis ज़रूरी है। काला पाखाना या उल्टी में blood — यह emergency है, तुरंत आएं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Diagnosis और treatment के लिए qualified doctor से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Stomach Ulcer Doctor Ranchi",
        type: "text",
        content: "Peptic ulcer के बारे में Ranchi के patients के common सवाल:",
      },
    ],
    faqs: [
      {
        q: "H. Pylori कैसे फैलता है?",
        a: "H. Pylori contaminated पानी या खाने से, या infected व्यक्ति के साथ close contact से फैल सकता है। Ranchi और Jharkhand में piped water quality variable है — इसलिए infection rate ज़्यादा है। Dr. Akhilesh Yadav stool test या urea breath test से H. Pylori diagnose करते हैं।",
      },
      {
        q: "Ulcer में क्या खाना safe है?",
        a: "Safe: dahi, plain rice, moong daal soup, cooked vegetables, banana, oatmeal। Avoid: NSAIDs (ibuprofen, aspirin), alcohol, smoking, very spicy food, coffee। कोई एक 'ulcer diet' नहीं होती — जो trigger करे वह avoid करें। Dr. Akhilesh Yadav से personalized guidance लें।",
      },
      {
        q: "काला पाखाना होने पर क्या करें?",
        a: "काला tarry stool (Melena) bleeding ulcer का serious sign है — upper GI tract से blood आ रहा है। यह emergency है — तुरंत Orchid Medical Centre या nearest emergency room जाएं। Dr. Akhilesh Yadav urgent endoscopy करते हैं ऐसे cases में।",
      },
      {
        q: "Ulcer और acid reflux (GERD) में क्या फर्क है?",
        a: "GERD में acid esophagus में आता है — chest में जलन (heartburn) होती है, खाने के बाद ज़्यादा। Ulcer में stomach या duodenum में घाव होता है — upper abdomen में दर्द, often खाने से related। दोनों conditions अलग हैं और different treatment चाहते हैं। Dr. Akhilesh Yadav endoscopy से clearly differentiate करते हैं।",
      },
      {
        q: "क्या stress से ulcer होता है?",
        a: "Pure stress से ulcer नहीं होता (यह myth है), लेकिन stress H. Pylori infection और NSAID use के साथ ulcer severity बढ़ा सकता है। Physiological stress (ICU patients) से 'Stress Ulcer' होती है — लेकिन यह अलग context है। Dr. Akhilesh Yadav Ranchi में patients को यह confusion clear करते हैं।",
      },
      {
        q: "Gastric ulcer में follow-up endoscopy क्यों ज़रूरी है?",
        a: "Gastric ulcer (stomach ulcer) में rare cases में early gastric cancer ulcer जैसी दिखती है। इसलिए 6-8 हफ्ते के treatment के बाद follow-up endoscopy से confirm करते हैं कि ulcer heal हुआ और malignancy नहीं है। Duodenal ulcer में generally follow-up endoscopy ज़रूर नहीं होती।",
      },
    ],
  },

  {
    slug: "colon-cancer-screening-ranchi",
    titleHi: "Colon Cancer Screening Ranchi — Dr. Akhilesh Yadav | Colonoscopy",
    titleEn: "Colon Cancer Screening in Ranchi — Colonoscopy & Prevention | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में colon cancer screening के लिए colonoscopy: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. 50+ age में screening क्यों ज़रूरी है — पूरी guide.",
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
        heading: "Ranchi के Patient की कहानी — Polyp जो Cancer बनता",
        type: "text",
        content: "Bokaro से आए 58-साल के Ramnath ji — उन्हें कोई symptoms नहीं थे। उनकी बेटी ने ज़िद करके colonoscopy करवाई क्योंकि उनके बड़े भाई को 5 साल पहले colon cancer हुआ था। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने colonoscopy की। मिली: एक 18mm adenomatous polyp। Endoscopy के दौरान ही remove कर दिया — colonoscopic polypectomy। Biopsy में high-grade dysplasia (pre-cancerous) थी। अगर 5 साल और wait करते, cancer हो सकता था। 'Dr. Sahab ने मेरी जान बचाई' — Ramnath ji के शब्द। Colon cancer India में तेरह बड़े cancers में है — और early screening से यह रोकना संभव है।",
      },
      {
        heading: "Colon Cancer Screening क्यों ज़रूरी है",
        type: "text",
        content: "Colon cancer (colorectal cancer) धीरे धीरे develop होता है — पहले colon में polyp (छोटा growth) बनता है, फिर सालों में cancer में बदल सकता है। Colonoscopy screening में यह polyps cancer बनने से पहले देखकर remove कर दिए जाते हैं। AIIMS और Indian Council of Medical Research (ICMR) guideline के मुताबिक: Average risk में 45-50 साल से शुरू करें screening। High risk में (family history, IBD, Lynch syndrome) पहले शुरू करें। Ranchi में Dr. Akhilesh Yadav के अनुसार, Jharkhand में colon cancer cases बढ़ रहे हैं — awareness और screening बहुत ज़रूरी है।",
      },
      {
        heading: "किसे Screening की ज़रूरत है — Ranchi के Patients",
        type: "list",
        content: "आपको colon cancer screening की ज़रूरत है अगर:",
        list: [
          "Age 45+ और average risk — regular colonoscopy हर 10 साल",
          "First-degree relative (parents/sibling) में colon cancer — 40 साल से या 10 साल पहले जितनी उम्र में उन्हें हुआ",
          "Personal history of colon polyps या colon cancer",
          "Inflammatory Bowel Disease (Crohn's या Ulcerative Colitis)",
          "Lynch Syndrome या FAP (familial adenomatous polyposis) genetic condition",
          "Rectal bleeding, unexplained weight loss, change in bowel habits — किसी भी age में",
          "काला (tarry/dark) stool जो explain न हो",
        ],
      },
      {
        heading: "Colonoscopy Experience — Orchid Medical Centre Ranchi में",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi में colonoscopy से पहले patients को पूरी तरह explain करते हैं। Preparation (1 दिन पहले): liquid diet, bowel preparation solution (PEG — polyethylene glycol) पीने से colon clean होती है। यह process थोड़ा uncomfortable लगता है, लेकिन ज़रूरी है। Procedure: sedation (IV medication से नींद आता है — procedure दर्द नहीं होता mostly)। Flexible scope colon में डाला जाता है। Duration: 30-45 minute। अगर polyp मिले तो same time में remove कर सकते हैं (polypectomy)। Recovery: sedation से 1-2 घंटे में उठ सकते हैं। कोई cuts नहीं, कोई टाँके नहीं। Driving avoid करें उस दिन।",
      },
      {
        heading: "Colon Cancer के Warning Signs — Ignore मत करें",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के patients को यह warning signs याद रखने को कहते हैं: Rectal bleeding या stool में blood (bright red या dark)। Stool की width या shape में change — 'pencil thin' stools। Unexplained weight loss। Persistent abdominal discomfort — gas, cramps, pain। Feeling of incomplete bowel emptying। Unexplained iron deficiency anemia। इन symptoms में से कोई भी हो — किसी भी age में — colonoscopy ज़रूरी है। Colon cancer early stage में detect हो तो outcomes significantly better होते हैं। Late stage में treatment complex और prognosis अलग होती है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Cancer Screening",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Colonoscopy से लोग डरते हैं — लेकिन जो patients एक बार करवा लेते हैं, वह कहते हैं इतना बुरा नहीं था। और जो polyp हम निकालते हैं — वह ठीक नहीं करते, cancer रोकता है। Ranchi में मैं चाहता हूँ कि हर 45+ individual एक बार colonoscopy करवा ले।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। अपनी screening के लिए qualified gastroenterologist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
      {
        heading: "अक्सर पूछे जाने वाले सवाल — Colon Cancer Screening Ranchi",
        type: "text",
        content: "Colonoscopy और colon cancer screening के बारे में Ranchi के patients के common सवाल:",
      },
    ],
    faqs: [
      {
        q: "Colonoscopy कितनी बार करवानी चाहिए?",
        a: "Average risk में 45-50 साल से शुरू, हर 10 साल में। अगर polyp मिले तो 3-5 साल में follow-up। High risk (family history, IBD) में Dr. Akhilesh Yadav ज़्यादा frequent schedule recommend करते हैं Orchid Medical Centre, Ranchi में।",
      },
      {
        q: "Colonoscopy दर्दनाक होती है?",
        a: "Sedation के साथ generally नहीं। Most patients को सिर्फ minor bloating या cramping याद रहती है। Preparation (bowel prep) ज़्यादा uncomfortable लगता है कुछ लोगों को। Dr. Akhilesh Yadav Ranchi में procedure से पहले पूरी preparation explain करते हैं।",
      },
      {
        q: "Ranchi में colonoscopy का खर्चा कितना है?",
        a: "Orchid Medical Centre, Ranchi में colonoscopy cost reasonable है और Jharkhand में किसी भी government hospital comparable है। Polypectomy साथ हो तो additional charge। Exact cost के लिए +91 74919 25047 पर call करें या WhatsApp करें।",
      },
      {
        q: "क्या colon cancer के symptoms हमेशा होते हैं?",
        a: "नहीं — early stage colon cancer में symptoms हो भी नहीं सकते। जब symptoms आते हैं (rectal bleeding, weight loss) तो cancer already advanced stage में हो सकता है। इसलिए asymptomatic लोगों में भी 45+ age में screening ज़रूरी है।",
      },
      {
        q: "Colonoscopy से पहले क्या खाना चाहिए और क्या नहीं?",
        a: "1 दिन पहले clear liquid diet — पानी, clear soup, नींबू पानी (pulp के बिना), coconut water। Red या purple colored drinks avoid करें। Bowel prep solution (PEG) रात को पीना होता है — Dr. Akhilesh Yadav detailed written instructions देते हैं।",
      },
      {
        q: "Family में colon cancer history है — कब से screening शुरू करें?",
        a: "अगर एक first-degree relative (parent/sibling) को colon cancer हुआ — 40 साल या उनकी age से 10 साल पहले (जो भी पहले हो)। अगर Lynch syndrome या FAP genetic condition हो — और भी पहले। Dr. Akhilesh Yadav family history के हिसाब से personalized screening schedule बनाते हैं।",
      },
    ],
  },
  // ── BATCH 3: BLOGS 11–15 ─────────────────────────────────────────────────────

  {
    slug: "hemorrhoids-treatment-ranchi",
    titleHi: "Hemorrhoids Treatment Ranchi — बिना Surgery के बवासीर का इलाज",
    titleEn: "Hemorrhoids Treatment in Ranchi — Non-Surgical Options | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में hemorrhoids (बवासीर) का advanced non-surgical treatment: Rubber Band Ligation, sclerotherapy और lifestyle changes. Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre.",
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
        heading: "बवासीर में Surgery का डर — एक गलत धारणा",
        type: "text",
        content: "Ranchi से आए 48-साल के Vijay Sinha — Grade 2 internal hemorrhoids की तकलीफ 8 महीने से। उनका पहला सवाल था: 'Operation तो नहीं होगी ना?' Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre — ने उन्हें समझाया कि Grade 2 में Rubber Band Ligation (RBL) एक simple OPD procedure है — कोई anesthesia नहीं, कोई admission नहीं, 20-30 minute का procedure। 6 हफ्ते में Vijay की problem resolve हो गई। Ranchi में बहुत से patients surgery के डर से doctor नहीं जाते — और problem बढ़ जाती है। आज advanced non-surgical options बहुत effective हैं।",
      },
      {
        heading: "Hemorrhoids Grade और Treatment Mapping",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi में hemorrhoid treatment grade के हिसाब से decide करते हैं। Grade 1 (internal, no prolapse): Lifestyle + diet + stool softeners। Fiber बढ़ाना, पानी पीना, strain avoid करना। Grade 2 (prolapse during straining, reduces spontaneously): Rubber Band Ligation (RBL) — most effective OPD procedure। Grade 3 (manual reduction needed): RBL या Stapler Hemorrhoidopexy (minimally invasive surgery)। Grade 4 (permanent prolapse, cannot be reduced): Hemorrhoidectomy — surgical removal। Overall, 75-80% hemorrhoid patients non-surgical treatment से ठीक हो जाते हैं।",
      },
      {
        heading: "Rubber Band Ligation (RBL) — क्या, कैसे, कितना Effective",
        type: "text",
        content: "RBL Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav करते हैं। Procedure: Anoscope (एक छोटा instrument) से internal hemorrhoid को देखा जाता है। Hemorrhoid के base पर एक tight rubber band apply की जाती है — blood supply cut होती है। 7-10 दिन में hemorrhoid shrink होकर अपने आप गिर जाता है। Patient को सिर्फ हल्की discomfort या heaviness feel होती है एक-दो दिन। No general anesthesia — local या no anesthesia। OPD procedure — admission नहीं चाहिए। Effectiveness: 80-85% patients में significant relief। एक session में 1-2 hemorrhoids treat हो सकते हैं — multiple sessions 4-6 हफ्ते में।",
      },
      {
        heading: "Sclerotherapy और Infrared Coagulation — और भी Options",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi में RBL के अलावा यह भी करते हैं। Sclerotherapy: एक chemical solution inject किया जाता है hemorrhoid में — shrink होता है। Grade 1-2 में effective, bleeding control के लिए भी use होती है। Infrared Coagulation (IRC): infrared energy से hemorrhoid tissue destroy होता है — smaller internal hemorrhoids के लिए। Surgical options (जब ज़रूर हो): Stapler Hemorrhoidopexy — minimally invasive, कम दर्द, fast recovery। Open Hemorrhoidectomy — large/external hemorrhoids में। Dr. Akhilesh Yadav grade और patient preference के हिसाब से best option suggest करते हैं।",
      },
      {
        heading: "Hemorrhoids वापस न आएं — Prevention Plan",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi के patients को यह prevention tips देते हैं:",
        list: [
          "रोज़ 25-30g fiber — isabgol, fruits, vegetables, whole grains",
          "2.5-3 litre पानी daily",
          "Toilet में 5 min से ज़्यादा मत बैठें, strain मत करें",
          "Squat position (stool under feet) — natural defecation posture",
          "Regular 30 min walk — bowel motility improve होती है",
          "NSAIDs avoid करें (aspirin, ibuprofen) — अगर blood thinners पे हो तो doctor से पूछें",
          "Ranchi में sattu का पानी, chhachh, papaya — natural fiber sources",
        ],
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Hemorrhoids",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं देखता हूँ कि Grade 2 के patients 2-3 साल तक wait करते हैं और Grade 4 में आ जाते हैं। RBL एक OPD procedure है — ज़्यादातर लोग 30 minute में वापस घर चले जाते हैं। जितना जल्दी आएं, उतना simple treatment।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। अपनी condition के लिए doctor से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "RBL procedure के बाद कितने दिन rest चाहिए?",
        a: "ज़्यादातर patients same day वापस जाते हैं। 1-2 दिन light pain या discomfort हो सकता है — paracetamol से manage होता है। Heavy lifting या strenuous exercise 2-3 दिन avoid करें। Dr. Akhilesh Yadav Ranchi में procedure के बाद detailed instructions देते हैं।",
      },
      {
        q: "क्या external hemorrhoids भी RBL से treat होते हैं?",
        a: "RBL सिर्फ internal hemorrhoids के लिए है। External hemorrhoids (बाहर की skin पर) में दर्दनाक RBL नहीं की जाती — उनके लिए sclerotherapy, excision, या surgical options consider होती है। Dr. Akhilesh Yadav proctoscopy से type confirm करते हैं Orchid Medical Centre, Ranchi में।",
      },
      {
        q: "Pregnancy में hemorrhoids का क्या करें?",
        a: "Pregnancy में conservative treatment पहली line है — fiber, पानी, sitz bath (warm water में बैठना), topical creams। Invasive procedures generally delivery के बाद करते हैं। ज़्यादातर cases delivery के बाद improve हो जाते हैं। Dr. Akhilesh Yadav safe options guide करेंगे।",
      },
      {
        q: "Hemorrhoids और colon cancer में rectal bleeding अलग कैसे होती है?",
        a: "Hemorrhoid bleeding: bright red, surface पर, toilet के बाद — generally painless internal में। Colon cancer bleeding: dark, stool के साथ mixed, weight loss/change in bowel habit के साथ। लेकिन certainty के लिए — 40+ age में या symptoms alarming हों तो colonoscopy ज़रूर करवा लें Dr. Akhilesh Yadav से Ranchi में।",
      },
    ],
  },

  {
    slug: "pancreatitis-doctor-ranchi",
    titleHi: "Ranchi में Pancreatitis का इलाज — अग्नाशयशोथ Specialist | Dr. Akhilesh Yadav",
    titleEn: "Pancreatitis Doctor in Ranchi — Acute & Chronic Treatment | Dr. Akhilesh Yadav",
    excerptHi: "रांची में pancreatitis (pancreas की सूजन) के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre। Acute और chronic pancreatitis का complete इलाज।",
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
        heading: "रांची के Patient की कहानी — अचानक Severe दर्द",
        type: "text",
        content: "जमशेदपुर से आए 44 साल के Arvind Kumar — उन्होंने रात को heavy दावत खाई और alcohol पिया। आधी रात में upper abdomen में severe दर्द शुरू हुआ — पीठ में भी जा रहा था। उल्टी भी हुई। Emergency में admit किया गया। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने evaluate किया: Acute Pancreatitis (gallstone-induced)। 5 दिन hospital में IV fluids, pain management, और monitoring के बाद discharge। फिर elective laparoscopic cholecystectomy। यह case Ranchi और Jharkhand में एक आम समस्या है — pancreatitis का awareness ज़रूरी है।",
      },
      {
        heading: "Pancreas क्या करता है — और Pancreatitis क्यों होती है",
        type: "text",
        content: "Pancreas एक important organ है जो दो काम करता है: Exocrine function — digestive enzymes (amylase, lipase) बनाता है जो food digest करने में help करते हैं। Endocrine function — insulin और glucagon बनाता है (blood sugar regulate)। Pancreatitis: जब pancreatic enzymes pancreas के अंदर ही activate हो जाते हैं और organ को खुद damage करते हैं। Acute Pancreatitis: sudden onset, severe दर्द — gallstones (60%) और alcohol (20-30%) main causes। Chronic Pancreatitis: progressive damage — recurrent attacks, abdominal pain, malabsorption, diabetes। Ranchi में Dr. Akhilesh Yadav दोनों types treat करते हैं।",
      },
      {
        heading: "Pancreatitis के Symptoms — Emergency vs Chronic",
        type: "list",
        content: "Acute Pancreatitis — emergency symptoms (तुरंत hospital जाएँ):",
        list: [
          "Severe upper abdominal pain — अक्सर पीठ (back) में भी जाता है",
          "Nausea और vomiting",
          "Abdominal tenderness — छूने पर दर्द",
          "Fever",
          "Accelerated heart rate",
          "Chronic Pancreatitis: recurrent दर्द, fatty stools (steatorrhea), weight loss, diabetes",
          "Jaundice (अगर bile duct involved हो)",
        ],
      },
      {
        heading: "Diagnosis — Dr. Akhilesh Yadav का Systematic Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi में pancreatitis diagnosis में करते हैं: Blood tests: Serum amylase और lipase (3x normal से ज़्यादा — acute pancreatitis confirm)। CBC, LFT, RFT, blood sugar। Imaging: CT scan abdomen (severity assess करना, complications देखना)। MRCP (Magnetic Resonance Cholangiopancreatography) — bile duct और pancreatic duct के लिए superior imaging, कोई radiation नहीं। Ultrasound — gallstones detect करने के लिए। EUS (Endoscopic Ultrasound) — detailed pancreatic assessment के लिए। Orchid Medical Centre Ranchi में ERCP भी available है — complicated bile duct stones के लिए।",
      },
      {
        heading: "Pancreatitis का इलाज — Acute से Chronic तक",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के patients को explain करते हैं: Acute Pancreatitis: Main treatment — aggressive IV hydration (fluids), pain management (IV analgesics), bowel rest initially, gradual oral refeeding (low-fat diet से शुरू)। Antibiotics सिर्फ infected necrosis में। Gallstone pancreatitis में cholecystectomy (gallbladder removal) recurrence prevent करता है। ERCP — अगर bile duct में stone फँसा हो। Chronic Pancreatitis: Pain management (analgesics, nerve blocks, EUS-guided celiac plexus block)। Pancreatic enzyme supplementation (malabsorption के लिए)। Diabetes management। Alcohol completely बंद — recurrence रोकने का एक ज़रूरी step। Surgery (rare cases में — Frey's procedure, Whipple)।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Pancreatitis",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Pancreatitis में alcohol बंद करना mandatory है — यह सिर्फ advice नहीं, यह treatment का हिस्सा है। Ranchi में मैं देखता हूँ कि chronic pancreatitis के patients alcohol नहीं छोड़ते और repeated admissions होते हैं। एक severe episode life-threatening हो सकता है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Pancreatitis emergency होती है — hospital ज़रूर जाएँ।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या Pancreatitis से Pancreatic Cancer होता है?",
        a: "Chronic pancreatitis long-term में pancreatic cancer का risk थोड़ा बढ़ाता है, लेकिन यह common नहीं है। Risk factors में smoking भी add होती है। Dr. Akhilesh Yadav Ranchi में chronic pancreatitis patients का regular surveillance करते हैं।",
      },
      {
        q: "Pancreatitis में क्या खाना चाहिए?",
        a: "Acute episode में: पहले NPO (कुछ नहीं), फिर liquid diet, फिर low-fat solid diet। Long-term: very low fat diet (20-30g fat per day), alcohol completely avoid, small frequent meals। Ranchi के local safe foods: plain rice, dal पानी, खिचड़ी, boiled vegetables।",
      },
      {
        q: "ERCP क्या होती है और कब लगती है?",
        a: "ERCP (Endoscopic Retrograde Cholangiopancreatography) एक advanced endoscopic procedure है जिसमें bile duct में scope डाला जाता है — stones निकालते हैं, stent डालते हैं। Gallstone pancreatitis में जब bile duct में stone फँसा हो। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav ERCP करते हैं।",
      },
      {
        q: "Pancreatitis से Diabetes हो सकती है?",
        a: "हाँ — chronic pancreatitis में progressive beta cell damage से Type 3c Diabetes हो सकती है। यह regular Type 2 diabetes से अलग है — management भी different होती है। Dr. Akhilesh Yadav endocrinologist के साथ coordinate करके treat करते हैं।",
      },
      {
        q: "Pancreatitis के बाद Gallbladder निकालना ज़रूरी है?",
        a: "Gallstone-induced pancreatitis में हाँ — same admission या discharge के बाद जल्दी laparoscopic cholecystectomy recommended है recurrence रोकने के लिए। Dr. Akhilesh Yadav Ranchi में surgical team के साथ coordinate करते हैं।",
      },
    ],
  },

  {
    slug: "liver-problem-doctor-ranchi",
    titleHi: "Ranchi में Liver Problem Doctor — लीवर रोग के Specialist | Dr. Akhilesh Yadav",
    titleEn: "Liver Problem Doctor in Ranchi — Hepatology Expert | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में liver की समस्या के specialist: Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre। Fatty liver, hepatitis, cirrhosis, jaundice — complete liver care।",
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
        heading: "जब Liver की बात आती है — Ranchi में सही Doctor कौन",
        type: "text",
        content: "Bokaro से आए 52 साल के Ramesh Prasad जी — routine checkup में SGPT (liver enzyme) 3x normal था। Ultrasound में fatty liver Grade 2। कोई symptoms नहीं थे। Local doctor ने कहा 'wait करो।' 6 महीने बाद SGPT और बढ़ गया। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — ने complete liver workup किया: NASH (Non-Alcoholic SteatoHepatitis) diagnose हुआ। Structured lifestyle program और medication से 8 महीने में liver enzymes normalize हो गए। Ranchi में liver diseases common हैं — early assessment और correct specialist काफी ज़रूरी है।",
      },
      {
        heading: "Liver क्या करता है — क्यों इतना Important है",
        type: "text",
        content: "Liver human body का सबसे बड़ा internal organ है — 500+ functions करता है। Key functions: detoxification (blood filter करना), bile production (fat digestion), protein synthesis (albumin, clotting factors), glucose storage (glycogen), vitamin/mineral storage। जब liver damage होती है — ये सब functions affect होते हैं। Ranchi में Dr. Akhilesh Yadav के अनुसार, common liver conditions हैं: Fatty Liver (NAFLD/NASH), Alcoholic Liver Disease, Hepatitis B/C, Liver Cirrhosis, Jaundice, Liver Abscess। और हर condition का अलग approach चाहिए।",
      },
      {
        heading: "Liver Problems के Symptoms — कई बार Quiet होते हैं",
        type: "list",
        content: "Liver disease के symptoms:",
        list: [
          "Jaundice (skin/eyes yellow होना) — bilirubin processing fail होने पर",
          "Fatigue और कमज़ोरी — unexplained",
          "Upper right abdomen में discomfort या heaviness",
          "Nausea, भूख न लगना",
          "Dark urine (चाय जैसा), pale stools",
          "Ascites (पेट में पानी) — advanced liver disease में",
          "Confusion या disorientation — Hepatic Encephalopathy (serious sign)",
        ],
      },
      {
        heading: "Liver Tests और Diagnosis — Dr. Akhilesh Yadav का Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में liver assessment में करते हैं: Liver Function Tests (LFT): SGPT, SGOT, ALP, GGT, Bilirubin, Albumin, PT-INR। Viral Hepatitis panel: HBsAg, anti-HCV, HBeAg। Imaging: Ultrasound abdomen (first line), CT scan, MRI liver (MRCP)। FibroScan — liver stiffness measure करता है बिना biopsy के — cirrhosis staging के लिए non-invasive tool। Liver Biopsy — अगर non-invasive tests unclear हों। ERCP/EUS — bile duct complications में। Complete workup से correct diagnosis और treatment plan मिलता है।",
      },
      {
        heading: "Liver का इलाज — Condition के हिसाब से",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi में liver treatment tailored approach से करते हैं। Fatty Liver (NAFLD): weight loss (7-10% body weight), exercise, diabetes control — ज़्यादातर cases में main treatment यही है। NASH में specific medications भी consider होती हैं। Alcoholic Liver Disease: alcohol complete abstinence — mandatory। Hepatitis B: antiviral therapy (Tenofovir/Entecavir) — lifelong monitoring। Hepatitis C: modern DAA (Direct-Acting Antivirals) से 8-12 हफ्ते में 95%+ patients में virus clear होता है। Cirrhosis: complications manage करना — ascites (diuretics), varices (endoscopic banding), encephalopathy। Liver Transplant evaluation (advanced cases)। Liver Abscess: antibiotics और drainage।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Liver Health",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Liver की बड़ी खासियत है कि ये बहुत कुछ silently सहता है — जब symptoms आते हैं, कभी-कभी disease advanced होती है। Ranchi में मैं कहता हूँ: routine checkup में liver tests ज़रूर करवाएं, खासकर अगर diabetes, मोटापा, या alcohol history है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi।\n\nयह article सिर्फ educational purpose के लिए है। Liver symptoms होने पर qualified hepatologist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047)। Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
    ],
    faqs: [
      {
        q: "Fatty liver क्या अपने आप ठीक हो सकता है?",
        a: "Grade 1-2 fatty liver में lifestyle changes (weight loss, exercise, diet) से liver significantly improve हो सकता है। लेकिन NASH (inflammatory stage) में active management ज़रूरी है। Dr. Akhilesh Yadav Ranchi में FibroScan से fibrosis degree assess करते हैं और accordingly treat करते हैं।",
      },
      {
        q: "Liver के लिए कौनसे tests ज़रूरी हैं?",
        a: "Basic: LFT (SGPT, SGOT, ALP, bilirubin), HBsAg (Hepatitis B), anti-HCV (Hepatitis C), Ultrasound abdomen। Diabetes या मोटापा है तो ये annual tests होने चाहिए। Dr. Akhilesh Yadav Ranchi में complete liver health assessment करते हैं।",
      },
      {
        q: "Hepatitis B या C में क्या खाना चाहिए?",
        a: "कोई specific 'hepatitis diet' नहीं — healthy balanced diet: fruits, vegetables, whole grains, lean protein। Alcohol बिल्कुल avoid करें। NSAIDs avoid करें। Paracetamol normal dose में generally safe है। Dr. Akhilesh Yadav patient-specific guidance देते हैं।",
      },
      {
        q: "Liver cirrhosis reversible है?",
        a: "Early-stage fibrosis reversible है treatment से (Hepatitis C cure, alcohol abstinence, weight loss)। Advanced cirrhosis (scarring) fully reverse नहीं होता, लेकिन progression रोका जा सकता है और complications manage हो सकते हैं। Liver transplant last resort है। Dr. Akhilesh Yadav Ranchi में FibroScan से stage assess करते हैं।",
      },
      {
        q: "क्या देसी नुस्खे liver के लिए safe हैं?",
        a: "कुछ herbal supplements actually hepatotoxic (liver-damaging) होते हैं — काला जीरा, certain Ayurvedic combinations। 'Natural' का मतलब always safe नहीं। Dr. Akhilesh Yadav Ranchi में herb-induced liver injury (DILI) के cases देखते हैं। कुछ भी लेने से पहले doctor से पूछें।",
      },
    ],
  },

  {
    slug: "digestive-specialist-ranchi",
    titleHi: "रांची में Digestive Specialist — पाचन तंत्र के Expert | Dr. Akhilesh Yadav",
    titleEn: "Digestive Specialist in Ranchi — Complete GI Care | Dr. Akhilesh Yadav",
    excerptHi: "रांची में digestive system के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre। हर प्रकार की पाचन समस्याओं का सम्पूर्ण इलाज।",
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
        heading: "Digestive Specialist क्यों अलग होता है — General Doctor से फर्क",
        type: "text",
        content: "रांची से आई 38 साल की Sunita Kumari — 2 साल से पेट में दर्द, bloating और weight loss। कई doctors ने 'stress का असर' बोला। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने structured evaluation की। Endoscopy और colonoscopy ने Crohn's Disease (Inflammatory Bowel Disease) diagnose किया। सही treatment से 6 महीने में quality of life dramatically improve हुई। एक dedicated gastroenterologist का फायदा यह है कि वो digestive system की हर परेशानी में specialized expertise रखते हैं — esophagus से rectum तक, liver, pancreas, biliary system सब।",
      },
      {
        heading: "Dr. Akhilesh Yadav — रांची के Digestive Specialist का Portfolio",
        type: "text",
        content: "Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre, HB Road, Ranchi — ये conditions treat करते हैं: Upper GI: GERD (acid reflux), peptic ulcer, H. Pylori infection, esophagitis, swallowing difficulties (dysphagia)। Liver & Biliary: Fatty liver (NAFLD/NASH), Hepatitis B/C, liver cirrhosis, jaundice, gallstones, primary biliary cholangitis। Pancreas: acute/chronic pancreatitis, pancreatic cysts। Small Intestine: celiac disease, malabsorption, small intestinal bacterial overgrowth (SIBO)। Large Intestine: IBS, IBD (Crohn's, Ulcerative Colitis), colon polyps, diverticulosis। Anorectal: hemorrhoids, anal fissure, fistula। Procedures: Endoscopy, Colonoscopy, ERCP, EUS — सब Orchid Medical Centre, Ranchi में।",
      },
      {
        heading: "कब एक Digestive Specialist से मिलें?",
        type: "list",
        content: "इनमें से कोई भी हो तो gastroenterologist से मिलें:",
        list: [
          "4+ हफ्ते से पेट में दर्द या discomfort जो ठीक नहीं हो रहा",
          "Rectal bleeding या काला stool",
          "Unexplained weight loss (>5% body weight बिना diet change के)",
          "Persistent nausea/vomiting",
          "Jaundice (आँखें या skin पीली होना)",
          "खाना निगलने में difficulty",
          "Chronic diarrhea या constipation (3+ महीने)",
          "Abnormal liver tests या ultrasound findings",
        ],
      },
      {
        heading: "Diagnostic Procedures — Orchid Medical Centre Ranchi में",
        type: "text",
        content: "Dr. Akhilesh Yadav के पास Orchid Medical Centre Ranchi में advanced diagnostic capabilities हैं। Upper GI Endoscopy (OGD Scopy): esophagus, stomach, duodenum देखना — biopsy, H. Pylori test, bleeding control। Colonoscopy: full colon और terminal ileum — polyp removal, IBD assessment, cancer screening। ERCP (Endoscopic Retrograde Cholangiopancreatography): bile duct stones, stenting। EUS (Endoscopic Ultrasound): pancreas, bile duct, submucous lesions की detailed imaging। FibroScan: liver fibrosis non-invasive assessment। इन procedures का combination Ranchi में सबसे accurate GI diagnosis enable करता है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Digestive Health",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Digestive system एक complex machine है — जब कोई एक हिस्सा ठीक नहीं काम करता, तो सब affect होता है। Ranchi में मैं देख रहा हूँ कि patients symptoms ignore करते हैं या years तक self-medicate करते हैं। एक बार सही evaluation — और ज़्यादातर cases में treatment straightforward होता है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। GI symptoms के लिए qualified specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Gastroenterologist और General Physician में क्या फर्क है?",
        a: "General physician broad care करता है — common conditions, referral। Gastroenterologist सिर्फ digestive system में specialist है — MBBS + MD + DM (3 साल super-specialization)। Dr. Akhilesh Yadav DM Gastroenterology हैं — Jharkhand के top digestive specialists में हैं।",
      },
      {
        q: "क्या Ranchi में सब GI procedures available हैं?",
        a: "हाँ — Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav के पास Endoscopy, Colonoscopy, ERCP, EUS, FibroScan — advanced procedures available हैं। Patients को बड़े शहर जाने की ज़रूरत नहीं होती routine GI care के लिए।",
      },
      {
        q: "First visit में क्या expect करें?",
        a: "Dr. Akhilesh Yadav detailed history लेंगे (symptoms, duration, diet, medications)। Physical exam होगी। Previous reports review। फिर appropriate tests recommend करेंगे — blood, imaging, या endoscopy। सबसे पहले differential diagnosis clear करेंगे। पहले visit में पूरा plan मिलता है।",
      },
      {
        q: "GI problems में diet का कितना role है?",
        a: "बहुत बड़ा — खासकर IBS, IBD, fatty liver, GERD, constipation में diet treatment का important part है। Dr. Akhilesh Yadav Ranchi में condition-specific diet guidance देते हैं — generic 'bland diet' नहीं, evidence-based recommendations।",
      },
    ],
  },

  {
    slug: "hepatologist-ranchi",
    titleHi: "Hepatologist Ranchi — लीवर के Super-Specialist | Dr. Akhilesh Yadav",
    titleEn: "Hepatologist in Ranchi — Liver Disease Expert | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में hepatologist (liver specialist) कौन हैं? Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre। Hepatitis, cirrhosis, fatty liver का advanced care।",
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
        heading: "Ranchi में Hepatologist की ज़रूरत — एक Real Case",
        type: "text",
        content: "Deoghar से आए 45 साल के Suresh Mahto — Hepatitis B positive था काफी सालों से। पहले किसी ने treatment start नहीं किया — बोला 'inactive carrier है।' 3 साल में SGPT 5x normal हो गया, liver biopsy में significant fibrosis मिली। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — ने antiviral therapy (Tenofovir) start की। 1 साल में viral load undetectable, liver enzymes normal। Ranchi और Jharkhand में Hepatitis B prevalence national average से ज़्यादा है — और एक expert hepatologist की role बहुत critical है।",
      },
      {
        heading: "Hepatology क्या है — Gastroenterology से कैसे अलग",
        type: "text",
        content: "Hepatology gastroenterology की sub-specialty है — specifically liver, gallbladder, bile ducts, और pancreas की conditions focus। एक hepatologist liver disease में deeper expertise रखता है। Dr. Akhilesh Yadav — DM Gastroenterology — hepatology में specialized interest रखते हैं और Orchid Medical Centre, Ranchi में ये conditions actively treat करते हैं: Viral Hepatitis (A, B, C, D, E), Non-Alcoholic Fatty Liver Disease (NAFLD) / NASH, Alcoholic Liver Disease (ALD), Autoimmune Hepatitis, Primary Biliary Cholangitis (PBC), Liver Cirrhosis और complications, Hepatocellular Carcinoma (liver cancer) surveillance और early management।",
      },
      {
        heading: "Liver Tests और उनका मतलब — Simplified",
        type: "list",
        content: "Common liver tests और क्या दिखाते हैं:",
        list: [
          "SGPT (ALT): liver cell damage — elevated in hepatitis, NASH, medications",
          "SGOT (AST): liver + muscle damage — ratio matters (AST:ALT >2 alcoholic liver)",
          "ALP / GGT: bile duct-related disease — cholestasis, PBC",
          "Bilirubin (Total/Direct): jaundice का cause बताता है",
          "Albumin: liver protein synthesis — low in chronic liver disease",
          "PT-INR: clotting — liver function का sensitive marker",
          "HBsAg / anti-HCV: Hepatitis B / C infection screening",
        ],
      },
      {
        heading: "FibroScan — Biopsy के बिना Liver की Stage जानें",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में FibroScan (Transient Elastography) use करते हैं — एक non-invasive tool जैसे ultrasound, जो liver stiffness measure करता है और fibrosis का degree बताता है। F0-F1: minimal/no fibrosis — lifestyle changes से manage। F2-F3: significant fibrosis — active treatment और monitoring। F4 (Cirrhosis): advanced scarring — intensive management, complications monitoring, liver transplant evaluation अगर ज़रूरी हो। FibroScan से patients को बार-बार biopsy की ज़रूरत नहीं होती। Ranchi में ये facility Orchid Medical Centre में available है।",
      },
      {
        heading: "Hepatitis C — अब इलाज मुमकिन है (95%+ Cure Rate)",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के Hepatitis C patients को ये good news देते हैं: Modern DAA (Direct-Acting Antivirals) — Sofosbuvir/Velpatasvir combination — 8-12 हफ्ते की treatment से 95%+ patients में Hepatitis C virus completely clear होता है। Sustained Virological Response (SVR) मतलब permanent cure। अब कोई painful injections (interferon) नहीं। और PMGKY (government) scheme में Hepatitis C medicines subsidized हैं India में। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में ये treatment करते हैं और proper monitoring ensure करते हैं।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Liver Disease",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi और Jharkhand में Hepatitis B बहुत common है — और बहुत से लोग जानते ही नहीं। Simple blood test से पता चल जाता है। अगर positive हैं, regular monitoring और सही time पर treatment से liver damage रोका जा सकता है। और Hepatitis C अब curable है — please doctor से मिलें।'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi।\n\nयह article सिर्फ educational purpose के लिए है। Liver conditions के लिए hepatology expert से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047)। Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
    ],
    faqs: [
      {
        q: "Hepatitis B का कोई vaccine है — क्या adult में भी लगवा सकते हैं?",
        a: "हाँ — Hepatitis B vaccine adult में भी effective है। 3 doses (0, 1, 6 महीने)। अगर negative हैं और expose होने का risk है (healthcare worker, family में carrier) — ज़रूर लगवाएं। अगर already positive हैं, vaccine काम नहीं करता — treatment की ज़रूरत होती है।",
      },
      {
        q: "Hepatitis C कैसे फैलता है?",
        a: "Infected blood के contact से: contaminated needles/syringes, unsterilized tattoo/piercing equipment, blood transfusion (1992 से पहले), माँ से बच्चे को। Sexual transmission possible लेकिन less common। Casual contact (खाना, हाथ मिलाना, चुंबन) से नहीं फैलता। Dr. Akhilesh Yadav Ranchi में anti-HCV test recommend करते हैं high-risk लोगों को।",
      },
      {
        q: "Liver cirrhosis में क्या खाना बंद करें?",
        a: "Alcohol completely — एक भी drop नहीं। Salt restrict करें अगर ascites (पेट में पानी) हो। High protein diet avoid अगर encephalopathy history हो। NSAIDs avoid करें। Dr. Akhilesh Yadav Ranchi में cirrhosis stage के हिसाब से detailed diet counseling देते हैं।",
      },
      {
        q: "क्या liver transplant Ranchi में available है?",
        a: "Liver transplant के लिए AIIMS New Delhi, Medanta, Apollo Chennai जैसे centers जाना पड़ता है। लेकिन Dr. Akhilesh Yadav Ranchi में pre-transplant evaluation, listing, और post-transplant follow-up coordinate करते हैं Orchid Medical Centre से।",
      },
      {
        q: "Autoimmune hepatitis क्या है?",
        a: "एक condition जिसमें body खुद अपने liver को attack करती है — immune system malfunction से। Symptoms: jaundice, fatigue, joint pain। Blood test में specific autoantibodies (ANA, ASMA, LKM1) मिलते हैं। Treatment: immunosuppressants (steroids)। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में ये diagnose और treat करते हैं।",
      },
    ],
  },

  // ── BATCH 4: BLOGS 16–20 ─────────────────────────────────────────────────────

  {
    slug: "endoscopy-cost-ranchi",
    titleHi: "Endoscopy Cost Ranchi — OGD Scopy खर्चा | Dr. Akhilesh Yadav",
    titleEn: "Endoscopy Cost in Ranchi — OGD Scopy Price & What to Expect | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में endoscopy (OGD Scopy) का खर्चा कितना है? Dr. Akhilesh Yadav — Orchid Medical Centre — में affordable endoscopy और complete procedure guide।",
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
        heading: "Endoscopy से क्यों डरते हैं — और क्यों नहीं डरना चाहिए",
        type: "text",
        content: "Ranchi से आए 39 साल के Deepak Kumar — doctor ने endoscopy recommend की थी chronic acidity के लिए। उनका पहला सवाल: 'खर्चा कितना होगा? दर्द तो नहीं होगा ना?' Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — ने उन्हें बताया: procedure sedation में होती है (anesthesia जैसे नींद आ जाती है), दर्द नहीं होता, और Ranchi में cost reasonable है। Deepak की endoscopy में Barrett's Esophagus (pre-cancerous condition) early stage में detect हुआ — जो treatment से control हो गया। सही time पर endoscopy life-changing होती है।",
      },
      {
        heading: "Endoscopy (OGD Scopy) क्या होती है?",
        type: "text",
        content: "Upper GI Endoscopy या OGD Scopy (OesophagoGastroDuodenoscopy) — एक thin, flexible camera tube (endoscope) जो मुँह से डाली जाती है और esophagus (food pipe), stomach, और duodenum (first part of small intestine) को examine करती है। क्या देखा जा सकता है: ulcers, inflammation, bleeding, tumors, strictures, H. Pylori। क्या किया जा सकता है: biopsy (tissue sample), H. Pylori test, bleeding control, polyp removal, esophageal dilation। Ranchi में Dr. Akhilesh Yadav Orchid Medical Centre में high-definition endoscopy करते हैं — best imaging clarity के साथ।",
      },
      {
        heading: "Endoscopy कब ज़रूरी है?",
        type: "list",
        content: "इन situations में endoscopy ज़रूरी है:",
        list: [
          "4+ हफ्ते से persistent acidity या GERD जो medications से ठीक नहीं हो रही",
          "Swallowing में difficulty (dysphagia)",
          "उल्टी में blood या dark brown material (coffee grounds)",
          "काला tarry stool (upper GI bleeding sign)",
          "Unexplained weight loss",
          "Upper abdominal pain — H. Pylori या ulcer rule out करने के लिए",
          "Age 45+ में नया onset dyspepsia (indigestion)",
        ],
      },
      {
        heading: "Endoscopy Cost Ranchi — Orchid Medical Centre",
        type: "text",
        content: "Orchid Medical Centre, Ranchi में endoscopy की cost Jharkhand के government और private hospitals के comparable है। Basic OGD Scopy (diagnostic): budget-friendly — sedation included। Biopsy additional charge (अगर tissue sample लेना हो)। H. Pylori Rapid Urease Test: additional। Sedation (IV medication): patient ज़्यादा comfortable रहते हैं — recommended। Insurance: ज़्यादातर health insurance plans में endoscopy covered होती है — अपनी policy check करें। Exact current pricing के लिए: +91 74919 25047 या WhatsApp पे पूछें — transparent billing, कोई hidden charges नहीं।",
      },
      {
        heading: "Endoscopy Preparation और Recovery — Step by Step",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में patients को detailed preparation instructions देते हैं। पहले दिन रात तक: normal dinner ले सकते हैं। Procedure से 6-8 घंटे पहले: कुछ नहीं खाना-पीना (NPO — nil per oral)। कुछ specific medications continue रखें — doctor से confirm करें। Procedure के दिन: Orchid Medical Centre पहुँचो, IV line लगेगी। Sedation दिया जाएगा — आप नींद में होंगे (conscious sedation — पूरी anesthesia नहीं)। Procedure: 15-20 minute। Recovery: 30-60 minute बाद discharge। Driving खुद मत करें उस दिन — किसी के साथ आएं। Report: day end तक मिल जाती है Orchid Medical Centre में।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Endoscopy",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं रोज़ 8-10 endoscopies करता हूँ। ज़्यादातर patients procedure के बाद कहते हैं: ये तो कितना आसान था! डर से ज़्यादा imagination में होता है। और जो conditions हम early में detect करते हैं — ulcer, Barrett's, early cancer — उनका treatment बहुत आसान होता है early stage में।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi।\n\nयह article सिर्फ educational purpose के लिए है। Endoscopy की ज़रूरत के लिए doctor से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047)। Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
    ],
    faqs: [
      {
        q: "Endoscopy कितनी दर्दनाक होती है?",
        a: "Sedation के साथ generally दर्द नहीं होता — mild discomfort या bloating feel हो सकती है। बिना sedation के gag reflex होता है जो uncomfortable है। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में sedation के साथ endoscopy करते हैं for maximum comfort।",
      },
      {
        q: "Endoscopy कितने time में होती है?",
        a: "Diagnostic OGD Scopy: 15-20 minute। अगर therapeutic procedure (biopsy, polyp removal, bleeding control) हो तो 30-45 minute। Total time Orchid Medical Centre में (registration से discharge तक): 2-3 घंटे।",
      },
      {
        q: "क्या endoscopy safe है?",
        a: "हाँ — endoscopy बहुत safe procedure है। Complications rare हैं (<0.1% major complications)। Minor: sore throat, bloating। Sedation reactions बहुत rare। Dr. Akhilesh Yadav DM Gastroenterology हैं — extensive endoscopy training के साथ।",
      },
      {
        q: "Endoscopy report कितने दिन में मिलती है?",
        a: "Orchid Medical Centre, Ranchi में: endoscopy report same day या next day मिलती है। Biopsy report: 5-7 दिन (pathology lab processing time)। Dr. Akhilesh Yadav results explain करते हैं और next steps discuss करते हैं।",
      },
      {
        q: "क्या endoscopy में anesthesia होती है?",
        a: "Full anesthesia नहीं — Conscious Sedation (IV midazolam/propofol) दिया जाता है। आप नींद में होंगे लेकिन breathe normally करते रहेंगे। Anesthesiologist की ज़रूरत नहीं होती routine cases में। Orchid Medical Centre में ये safely manage होता है।",
      },
    ],
  },

  {
    slug: "colonoscopy-cost-ranchi",
    titleHi: "रांची में Colonoscopy का खर्चा — Preparation और डॉक्टर | Dr. Akhilesh Yadav",
    titleEn: "Colonoscopy Cost in Ranchi — Price, Preparation & Expert Care | Dr. Akhilesh Yadav",
    excerptHi: "रांची में colonoscopy का खर्चा कितना है? Dr. Akhilesh Yadav — Orchid Medical Centre — में affordable colonoscopy, complete preparation guide और expert colonoscopist।",
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
        heading: "Colonoscopy का डर — और एक Real Case जो ज़िंदगी बचा गया",
        type: "text",
        content: "धनबाद से आए 60 साल के Ramchandra Prasad जी — उन्हें कोई symptoms नहीं थे, लेकिन बेटी ने 'बाबा, उम्र हो गई, एक बार scope करवा लो' बोला। Orchid Medical Centre Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने colonoscopy की। मिला: 3 polyps (एक 2.5cm large adenoma)। Same sitting में सब remove कर दिए। Biopsy में high-grade dysplasia — अगर 2 साल और रुक जाते, cancer हो सकता था। Colonoscopy में 'दर्द होगा' की वजह से लोगों की बहुत बार procrastination होती है — लेकिन यह procedure sedation में होती है और ज़्यादातर patients के लिए manageable है।",
      },
      {
        heading: "Colonoscopy क्या है — Endoscopy से कैसे अलग",
        type: "text",
        content: "Colonoscopy में एक flexible camera tube (colonoscope) anus से डाली जाती है और पूरे colon (large intestine) को — ileocecal junction (small-large intestine junction) तक — examine किया जाता है। क्या देखा जा सकता है: polyps, colon cancer, IBD (Crohn's/Colitis), diverticulosis, bleeding source। क्या किया जा सकता है: polyp removal (polypectomy), biopsy, bleeding control। Endoscopy vs Colonoscopy: Endoscopy (OGD) — upper GI (esophagus-stomach-duodenum)। Colonoscopy — lower GI (large intestine)। दोनों Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav करते हैं।",
      },
      {
        heading: "Colonoscopy Cost Ranchi — Transparent Pricing",
        type: "text",
        content: "Orchid Medical Centre, Ranchi में colonoscopy की cost Jharkhand state के best value में है। Diagnostic Colonoscopy (बिना polyp removal): standard charge — sedation included। Colonoscopy + Polypectomy (polyp removal): additional charge per polyp depending on size/technique। Biopsy: additional। Sedation (IV): comfort के लिए recommended — package में included। Insurance: ज़्यादातर major health insurance plans में colonoscopy covered होती है (especially cancer screening के context में)। Cashless facility: select insurers के लिए available। Exact pricing के लिए: +91 74919 25047 या WhatsApp। Transparent billing — कोई surprise charge नहीं।",
      },
      {
        heading: "Colonoscopy Preparation — रांची के Patients के लिए Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में colonoscopy preparation के written instructions देते हैं। 2 दिन पहले से: high-fiber foods avoid करें (seeds, nuts, whole grains)। 1 दिन पहले: सिर्फ clear liquid diet — पानी, coconut water, clear soup, नींबू पानी (बिना pulp), black tea/coffee (बिना milk)। Red/purple colored drinks avoid करें (colon lining से blood के साथ confuse हो सकती है)। शाम को: Bowel Preparation Solution (PEG — polyethylene glycol) पीना होता है — 2-4 litre, split dose। पहला half रात को, दूसरा half procedure से 4-6 घंटे पहले। रात में gas और loose motions होंगे — यह normal है, मतलब preparation हो रही है। Procedure के दिन: prescribed time से NPO (कुछ मत पियें)। Iron supplements एक हफ्ते पहले बंद करें।",
      },
      {
        heading: "Colonoscopy Recovery — क्या Expect करें",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में post-colonoscopy care में बताते हैं: Sedation से 1-2 घंटे में recover होते हैं। Bloating/gas feel हो सकता है — normal, थोड़ी देर में ठीक हो जाता है। अगर polypectomy हुई है: 24-48 घंटे bland diet, heavy exercise avoid। Minor rectal bleeding (speck of blood) एक-दो दिन तक: normal अगर polypectomy हुई। Alarming signs (doctor को call करें): significant rectal bleeding, severe abdominal pain, fever। Driving: उस दिन नहीं — किसी के साथ आएं। अगले दिन से generally normal activities।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Colonoscopy",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं colonoscopy के बाद patients से पूछता हूँ — कैसा लगा? 90% लोग कहते हैं: preparation से ज़्यादा डरता था, procedure तो नींद में ही हो गई। Bowel prep uncomfortable होता है, लेकिन वो एक रात की बात है। Colon cancer जो हम रोकते हैं — वो ज़िंदगी भर का फायदा है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Colonoscopy की ज़रूरत के लिए doctor से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Colonoscopy कितने घंटे की होती है?",
        a: "Procedure खुद: 30-45 minute (diagnostic)। Polyp removal हो तो 60-90 minute। Total Orchid Medical Centre में: arrival से discharge तक 3-4 घंटे — preparation, sedation recovery include करके। Dr. Akhilesh Yadav Ranchi में efficient और thorough colonoscopy करते हैं।",
      },
      {
        q: "Bowel prep कितना मुश्किल है?",
        a: "PEG solution पीना और frequent loose motions — uncomfortable होता है, लेकिन manageable। Solution को chilled करें — easier होता है। कुछ brands में lemon flavor available है। Dr. Akhilesh Yadav Ranchi में alternative split-dose schedule भी discuss करते हैं।",
      },
      {
        q: "Colonoscopy में anesthesia होती है क्या?",
        a: "Full general anesthesia नहीं — Conscious Sedation (IV medication) दिया जाता है। आप deeply relaxed या नींद में होंगे। Routine cases में anesthesiologist नहीं चाहिए। Orchid Medical Centre Ranchi में यह safely manage होता है।",
      },
      {
        q: "अगर polyp मिले तो क्या होगा?",
        a: "Same colonoscopy के दौरान remove कर दिया जाता है (polypectomy) — ज़्यादातर cases में। Biopsy pathology lab में जाती है — 5-7 दिन में result। Polyp size और type के हिसाब से next colonoscopy का schedule Dr. Akhilesh Yadav decide करते हैं।",
      },
      {
        q: "क्या Colonoscopy से पहले कोई test होता है?",
        a: "Blood tests: CBC, coagulation profile (PT-INR) — अगर anticoagulants पर हो। Diabetes control check। Blood thinners (warfarin, aspirin, clopidogrel) — Dr. Akhilesh Yadav बताएंगे कब बंद करनी हैं। Hypertension/cardiac medicines: generally continue।",
      },
    ],
  },

  {
    slug: "eus-ranchi",
    titleHi: "रांची में EUS (Endoscopic Ultrasound) — Dr. Akhilesh Yadav | Orchid Medical Centre",
    titleEn: "EUS (Endoscopic Ultrasound) in Ranchi — Advanced GI Diagnosis | Dr. Akhilesh Yadav",
    excerptHi: "रांची में EUS (Endoscopic Ultrasound) — advanced GI diagnostic procedure — Dr. Akhilesh Yadav करते हैं Orchid Medical Centre में। Pancreas, bile duct, submucosal lesions।",
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
        heading: "जब Normal Tests जवाब नहीं देते — EUS का Role",
        type: "text",
        content: "बोकारो से आए 50 साल के Sunil Tiwari — recurrent upper abdominal pain, CT scan normal, MRCP inconclusive। Orchid Medical Centre Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने EUS (Endoscopic Ultrasound) की। Result: small common bile duct stone detect हुआ जो CT scan में miss हो गया था। ERCP से same visit में stone निकाल दिया। यह case EUS की power दिखाता है — जब conventional imaging enough नहीं होती। EUS Ranchi में Orchid Medical Centre में available है।",
      },
      {
        heading: "EUS क्या है — Normal Ultrasound से कैसे अलग",
        type: "text",
        content: "EUS (Endoscopic Ultrasound) में endoscope के tip पर एक ultrasound probe होती है। यह probe GI tract के अंदर से adjacent organs को image करता है — बाहर से skin के through नहीं। इसलिए: Resolution बहुत ज़्यादा होती है — 1mm तक structures clearly दिखते हैं। Pancreas, bile duct, gallbladder, stomach wall layers, mediastinal lymph nodes — सब clearly assess होता है। Normal ultrasound limitation: bowel gas interfere करता है — pancreas और bile duct clear नहीं दिखते। EUS limitation: नहीं। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav EUS करते हैं — Jharkhand के limited centers में यह available है।",
      },
      {
        heading: "EUS कब लगती है?",
        type: "list",
        content: "EUS इन conditions में recommend की जाती है:",
        list: [
          "Bile duct stones — MRCP या CT में नहीं दिख रहे लेकिन suspicion है",
          "Pancreatic masses — cyst, tumor — CT के बाद characterization",
          "Chronic pancreatitis — detailed pancreatic duct assessment",
          "Submucosal GI tumors (GIST, carcinoid) — layer-by-layer imaging",
          "Esophageal/gastric cancer staging — T और N staging",
          "Gallbladder polyps — malignancy risk assessment",
          "EUS-guided biopsy (FNA/FNB) — pancreas या lymph node से tissue sample",
        ],
      },
      {
        heading: "EUS-Guided FNA/FNB — बिना Surgery के Tissue Diagnosis",
        type: "text",
        content: "EUS का एक powerful application है EUS-guided Fine Needle Aspiration (FNA) या Fine Needle Biopsy (FNB)। Pancreatic mass या lymph node में EUS से needle डाली जाती है (ultrasound guidance में) और tissue sample लिया जाता है — biopsy के लिए। यह avoid करता है: separate surgical biopsy, CT-guided biopsy। Accuracy: 85-95% diagnostic yield। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में यह procedure करते हैं — Jharkhand के patients को बड़े शहर नहीं जाना पड़ता इस advanced procedure के लिए।",
      },
      {
        heading: "EUS Preparation और Procedure — रांची में",
        type: "text",
        content: "EUS preparation endoscopy जैसी: NPO 6-8 घंटे। Procedure sedation में होती है — generally comfortable। Upper EUS (pancreas/bile duct/stomach): scope मुँह से — 45-60 minute। Rectal EUS (rectal cancer staging): scope anus से — 20-30 minute। Recovery: 1-2 घंटे बाद discharge। Results discuss: Dr. Akhilesh Yadav same day या next visit में imaging report explain करते हैं। FNA/FNB biopsy report: pathology से 5-7 दिन में। Cost inquiry के लिए: +91 74919 25047 या WhatsApp।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — EUS",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'EUS एक बार में वो information देता है जो multiple tests से भी नहीं मिलती। Pancreatic cyst है जो benign दिखती है — EUS FNA से tissue लेकर confirm करते हैं। Ranchi के patients के लिए यह एक big advantage है कि यह facility locally available है — Patna या Delhi नहीं जाना पड़ता।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Advanced GI procedures के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "EUS और ERCP में क्या फर्क है?",
        a: "EUS diagnostic है — organs देखना, biopsy लेना। ERCP therapeutic है — bile duct में directly work करना (stones निकालना, stent डालना)। अक्सर दोनों साथ या एक के बाद दूसरा किया जाता है। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में दोनों करते हैं।",
      },
      {
        q: "क्या EUS safe है?",
        a: "हाँ — regular endoscopy जितनी safe। Complications rare (<0.5%)। FNA के साथ: pancreatitis का slight risk (<2%), infection (<1%)। Overall risk-benefit ratio बहुत favorable है accurate diagnosis के लिए।",
      },
      {
        q: "EUS में दर्द होता है?",
        a: "Sedation के साथ नहीं। Procedure के दौरान आप comfortably नींद में होंगे। बाद में mild bloating या sore throat हो सकता है — 1-2 दिन में ठीक हो जाता है।",
      },
      {
        q: "Pancreatic cyst के लिए EUS कब ज़रूरी है?",
        a: "अगर CT/MRI में pancreatic cyst मिले — size >1cm, main duct connect, mural nodule, solid component — तो EUS with FNA characterization के लिए recommend है। Dr. Akhilesh Yadav Ranchi में worrisome cysts को surgery के लिए refer और benign ones को monitor करते हैं।",
      },
    ],
  },

  {
    slug: "liver-biopsy-ranchi",
    titleHi: "रांची में Liver Biopsy — Procedure, Cost और कब ज़रूरी है | Dr. Akhilesh Yadav",
    titleEn: "Liver Biopsy in Ranchi — Procedure, Cost & When Needed | Dr. Akhilesh Yadav",
    excerptHi: "रांची में liver biopsy कब ज़रूरी है और कैसे होती है? Dr. Akhilesh Yadav — Orchid Medical Centre — में liver biopsy की पूरी guide और FibroScan alternative।",
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
        heading: "Liver Biopsy — क्यों ज़रूरत होती है?",
        type: "text",
        content: "हज़ारीबाग से आई 41 साल की Meena Devi — elevated liver enzymes 1 साल से, HBsAg negative, alcohol नहीं — cause unclear। FibroScan में F2 fibrosis suggest हुआ। Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology, Orchid Medical Centre Ranchi — ने liver biopsy recommend की cause confirm करने के लिए। Biopsy result: Autoimmune Hepatitis। Correct diagnosis से सही treatment start हुआ — steroids और immunosuppressants। 6 महीने में enzymes normal। Liver biopsy एक invasive procedure है, लेकिन कुछ cases में diagnosis की gold standard है।",
      },
      {
        heading: "Liver Biopsy कब ज़रूर होती है?",
        type: "list",
        content: "Liver biopsy इन situations में recommend होती है:",
        list: [
          "Unknown cause का liver disease — non-invasive tests से clear नहीं हुआ",
          "Autoimmune Hepatitis diagnosis और activity grading",
          "NASH vs simple fatty liver — grade और stage determine करना",
          "Primary Biliary Cholangitis (PBC) या Primary Sclerosing Cholangitis (PSC)",
          "Drug-induced liver injury (DILI) — confirmation",
          "Liver mass — FNA (fine needle aspiration) से diagnosis",
          "अगर FibroScan result inconclusive हो या body habitus (obesity/ascites) limit करे",
        ],
      },
      {
        heading: "FibroScan vs Liver Biopsy — पहले FibroScan Try करें",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में FibroScan को prefer करते हैं जब भी possible। FibroScan: 10 minute का non-invasive test — ultrasound जैसा। Liver stiffness measure करता है — fibrosis estimate। F0-F1 (minimal), F2-F3 (significant), F4 (cirrhosis)। No sedation, no risk। Accuracy: 85-90% fibrosis staging के लिए। Liver Biopsy: invasive, 10-15% discomfort/pain risk, rare complications। लेकिन: tissue directly देखते हैं — exact cause, grade, stage। FibroScan कब use होता है: routine staging of Hepatitis B/C/NAFLD। Biopsy कब ज़रूरी: unclear diagnosis, autoimmune, specific cause confirmation।",
      },
      {
        heading: "Liver Biopsy Procedure — Orchid Medical Centre Ranchi में",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में ultrasound-guided liver biopsy करते हैं — safer और more accurate। Preparation: blood tests (PT-INR, platelet count), blood group। Blood thinners बंद करना (doctor advise करेंगे)। NPO 4-6 घंटे। Procedure: local anesthesia + mild sedation। Ultrasound guidance से needle target location पर डाली जाती है। Tissue sample (needle core) लिया जाता है — 15-20 mm piece। Duration: 20-30 minute। Post-biopsy: 2-4 घंटे observation (blood pressure monitoring, pain check)। Discharge same day ज़्यादातर। Pain: mild to moderate upper right abdomen — analgesics से manage। Biopsy report: pathology से 5-7 दिन में।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Liver Biopsy",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Liver biopsy से patients डरते हैं — लेकिन आज FibroScan से बहुत कम cases में biopsy लगती है। जब biopsy ज़रूर हो — ultrasound guidance से बहुत safe हो गई है। सही diagnosis के लिए correct procedure choose करना ज़रूरी है — FibroScan पहले, biopsy सिर्फ जब ज़रूर।'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Liver procedures के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Liver biopsy में बहुत दर्द होता है?",
        a: "Local anesthesia दिया जाता है — needle insertion पर चुभन या pressure feel होता है। Procedure के बाद 4-6 घंटे तक dull aching pain right side में — paracetamol से manage। Serious pain (<5% cases) में doctor को immediately बताएं। Dr. Akhilesh Yadav Ranchi में anxious patients के लिए sedation भी consider करते हैं।",
      },
      {
        q: "Liver biopsy के complications क्या हैं?",
        a: "Pain (most common, 20-30%)। Bleeding (significant: <1%)। Bile peritonitis (<0.1%)। Organ puncture (<0.1%)। Overall serious complication rate बहुत low है, खासकर ultrasound guidance के साथ। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में post-biopsy 2-4 घंटे monitor करते हैं।",
      },
      {
        q: "FibroScan कब fail होती है?",
        a: "FibroScan की accuracy कम होती है अगर: morbid obesity (BMI >35), ascites (पेट में पानी), narrow intercostal spaces। इन cases में liver biopsy alternative है। Dr. Akhilesh Yadav Ranchi में assess करके decide करते हैं।",
      },
      {
        q: "क्या liver biopsy से cancer फैलता है?",
        a: "यह एक common misconception है। Modern ultrasound-guided biopsy में needle tract seeding (cancer spreading along needle path) extremely rare (<0.01%) है। Risk-benefit ratio के लिए — diagnosis clear करने का फायदा ज़्यादा होता है।",
      },
    ],
  },

  {
    slug: "colon-polyp-removal-ranchi",
    titleHi: "रांची में Colon Polyp Removal — Colonoscopic Polypectomy | Dr. Akhilesh Yadav",
    titleEn: "Colon Polyp Removal in Ranchi — Polypectomy | Dr. Akhilesh Yadav",
    excerptHi: "रांची में colon polyp removal (colonoscopic polypectomy) — Dr. Akhilesh Yadav — Orchid Medical Centre में। Cancer होने से पहले polyp removal कैसे cancer रोकती है — guide।",
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
        heading: "Polyp जो Cancer नहीं बना — एक Success Story",
        type: "text",
        content: "रांची से ही 54 साल के Jagdish Prasad जी — routine colonoscopy cancer screening के लिए आए (उनके बड़े भाई को colon cancer था)। Dr. Akhilesh Yadav — DM Gastroenterology, Orchid Medical Centre — ने 3 polyps find किए: एक 12mm, एक 6mm, एक 4mm। तीनों same session में remove कर दिए — biopsy में 12mm polyp tubular adenoma with low-grade dysplasia (pre-cancerous)। Jagdish जी cancer से बचे — सिर्फ एक colonoscopy की वजह से। Colon polyp removal (polypectomy) cancer prevention का सबसे effective tool है।",
      },
      {
        heading: "Colon Polyp क्या है — और कब खतरा बनता है?",
        type: "text",
        content: "Colon Polyp — large intestine (colon) की lining में एक abnormal growth है। ज़्यादातर polyps benign (harmless) होते हैं, लेकिन कुछ types cancer में बदल सकते हैं। Types: Hyperplastic Polyps — generally benign, cancer risk नहीं। Adenomatous Polyps (Adenomas) — pre-cancerous। Tubular, villous, tubulovillous। Size matters: <1cm: low risk। 1-2cm: moderate। >2cm: high risk। High-grade dysplasia में — cancer very close है। Ranchi में Dr. Akhilesh Yadav के अनुसार, colonoscopy में मिलने वाले 70-80% polyps adenomas होते हैं जिन्हें timely remove करना cancer रोकता है।",
      },
      {
        heading: "Polypectomy कैसे होती है — Orchid Medical Centre Ranchi में",
        type: "text",
        content: "Dr. Akhilesh Yadav colonoscopy के दौरान ही polyp remove करते हैं — same procedure, कोई अलग surgery नहीं। Techniques: Cold Snare Polypectomy: small polyps (<1cm) के लिए — snare (loop) से cut कर देते हैं, no electricity, minimal risk। Hot Snare Polypectomy: larger polyps के लिए — electrocautery use होती है। EMR (Endoscopic Mucosal Resection): flat/sessile large polyps के लिए — saline lift करके remove। ESD (Endoscopic Submucosal Dissection): very large flat polyps, early mucosal cancer — highly skilled procedure। Removed tissue biopsy के लिए lab जाती है। Results 5-7 दिन में।",
      },
      {
        heading: "Polypectomy के बाद — क्या Expect करें और Follow-up",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में post-polypectomy care में बताते हैं: Diet: bland soft diet 24-48 घंटे (खासकर large polyp removal के बाद)। Strenuous activity 1 हफ्ते avoid। Blood thinners: doctor से confirm करें कब start करें। Minor rectal bleeding (1-2 दिन) — normal। Alarming (emergency): significant rectal bleeding (large clots), severe abdominal pain, fever — तुरंत hospital आएं। Follow-up Colonoscopy: Polyp type और size के हिसाब से schedule करते हैं Dr. Akhilesh Yadav। Low-risk adenoma (<1cm, 1-2 polyps): 5-10 साल। High-risk adenoma (large, multiple, villous): 1-3 साल में repeat।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Polyp Removal",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Colon polyp removal सबसे underrated cancer prevention procedure है। कोई दवाई नहीं — सिर्फ एक colonoscopy। Polyp निकालते हैं, cancer prevent होता है। Ranchi में मैं यह message patients तक पहुँचाना चाहता हूँ: 45+ age है, एक बार colonoscopy ज़रूर करवा लें — चाहे कोई symptoms न हों।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Colon cancer screening के लिए gastroenterologist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Polypectomy में दर्द होता है?",
        a: "Sedation के साथ नहीं — आप नींद में होंगे। बाद में mild cramping या discomfort हो सकती है — paracetamol से manage। Large polyp removal के बाद थोड़ी ज़्यादा discomfort हो सकती है। Dr. Akhilesh Yadav Ranchi में post-procedure pain management clearly guide करते हैं।",
      },
      {
        q: "क्या polyp वापस आ सकता है?",
        a: "Completely removed polyp वापस नहीं आता। लेकिन नए polyps colon में develop हो सकते हैं — इसलिए follow-up colonoscopy schedule ज़रूरी है। High-risk adenoma में 1-3 साल में, low-risk में 5-10 साल में Dr. Akhilesh Yadav repeat colonoscopy schedule करते हैं।",
      },
      {
        q: "अगर biopsy में cancer आया तो?",
        a: "Early mucosal cancer (T1a) — colonoscopic removal ही काफी होता है usually। Deeper invasion (T1b, T2+) — surgical resection की ज़रूरत। Dr. Akhilesh Yadav Ranchi में cancer surgery के लिए appropriate surgical oncologist को refer करते हैं और care coordinate करते हैं।",
      },
      {
        q: "Blood thinners पर हूँ — polypectomy safe है?",
        a: "Aspirin: छोटे polyps के लिए continue कर सकते हैं। Warfarin/clopidogrel: 5-7 दिन पहले बंद करनी होती है (cardiac risk assess करके — cardiologist से coordinate)। Anticoagulant bridging कभी-कभी ज़रूर होती है। Dr. Akhilesh Yadav Ranchi में case-by-case decide करते हैं।",
      },
      {
        q: "एक colonoscopy में कितने polyps remove कर सकते हैं?",
        a: "Generally एक session में 3-5 polyps comfortably remove हो जाते हैं। बहुत ज़्यादा और large polyps में staged procedure (2 sessions) safe होती है। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में safety पहले रखते हैं — एक session में over-aggressive polypectomy avoid करते हैं।",
      },
    ],
  },

  // ── BATCH 5: BLOGS 21–25 (Hindi-first) ──────────────────────────────────────

  {
    slug: "ranchi-mein-pet-ke-doctor",
    titleHi: "Ranchi में पेट के Doctor — Dr. Akhilesh Yadav | Gastroenterologist",
    titleEn: "Pet Ke Doctor in Ranchi — Best Stomach Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में पेट के doctor कौन हैं? Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre में stomach, intestine और liver की सभी समस्या का इलाज करते हैं।",
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
        heading: "पेट की Problem — सही Doctor कौन है?",
        type: "text",
        content: "Ranchi के बहुत से लोग confused रहते हैं — 'पेट में दर्द है तो किस doctor के पास जाएं?' General physician? Surgeon? या कोई specialist? जब बात stomach, intestine, liver या pancreas की हो — तो सही specialist है: Gastroenterologist। Orchid Medical Centre, HB Road, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — Jharkhand के experienced super-specialists में हैं। दिन में 20-25 patients आते हैं — Ranchi, Bokaro, Dhanbad, Hazaribagh, Jamshedpur, Deoghar से। एक dedicated पेट के doctor का फायदा: correct diagnosis, सही treatment, unnecessary surgery से बचाव।",
      },
      {
        heading: "Dr. Akhilesh Yadav क्या Treat करते हैं?",
        type: "list",
        content: "Orchid Medical Centre Ranchi में Dr. Akhilesh Yadav इन conditions का इलाज करते हैं:",
        list: [
          "Acidity और GERD (acid reflux, सीने में जलन)",
          "Peptic Ulcer — H. Pylori infection समेत",
          "IBS (Irritable Bowel Syndrome) — बार-बार loose motions या कब्ज",
          "IBD (Crohn's disease, Ulcerative Colitis)",
          "Fatty Liver (NAFLD/NASH), Hepatitis B/C, Liver Cirrhosis",
          "Jaundice (पीला होना — skin और आँखें)",
          "Gallstones और biliary conditions",
          "Piles (बवासीर), constipation, rectal bleeding",
          "Pancreatitis (pancreas की सूजन)",
          "Colon cancer screening और polyp removal",
        ],
      },
      {
        heading: "Orchid Medical Centre Ranchi — सुविधा और Procedures",
        type: "text",
        content: "Orchid Medical Centre, HB Road, Ranchi में Dr. Akhilesh Yadav के पास advanced gastroenterology सुविधाएं हैं: Upper GI Endoscopy (OGD Scopy) — esophagus, stomach, duodenum। Colonoscopy — full colon examination, polyp removal। ERCP — bile duct stones, stenting। EUS (Endoscopic Ultrasound) — pancreas, bile duct advanced imaging। FibroScan — liver fibrosis non-invasive assessment। काफी सारी conditions का diagnosis और treatment एक ही जगह — Ranchi से बाहर जाना नहीं पड़ता। Appointment के लिए: +91 74919 25047। Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
      {
        heading: "कब पेट के Doctor को दिखाना ज़रूरी है",
        type: "list",
        content: "इन symptoms में delay मत करें — gastroenterologist से मिलें:",
        list: [
          "4+ हफ्ते से पेट में दर्द — ठीक नहीं हो रहा",
          "Toilet में blood आना — bright red या काला",
          "बिना वजह का वज़न घटना",
          "पीला होना (jaundice) — skin या आँखें",
          "निगलना मुश्किल लगना (dysphagia)",
          "बार-बार उल्टी या nausea",
          "Liver या pancreas tests में abnormality",
        ],
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi के patients मुझसे कहते हैं कि पहले सोचते थे इतना बड़ा doctor है, मिलेंगे कैसे। लेकिन मैं चाहता हूँ कि हर मर्ज का patient — चाहे Bokaro से आए या Deoghar से — Ranchi में world-class gastro care पाए। Symptoms ignore मत करें, मिलने आएं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi।\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047)। Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
    ],
    faqs: [
      {
        q: "पेट के doctor और surgeon में क्या फर्क है?",
        a: "Gastroenterologist medical treatment करता है — endoscopy, medications, lifestyle management। Surgeon operation करता है। ज़्यादातर GI conditions में पहले gastroenterologist देखते हैं — ज़रूरत पड़ने पर surgical referral। Dr. Akhilesh Yadav Ranchi में coordinate करते हैं जब ज़रूरी हो।",
      },
      {
        q: "क्या बिना appointment के आ सकते हैं?",
        a: "Orchid Medical Centre, Ranchi में appointment preferred है — wait time कम होती है। Emergency cases immediate attend होते हैं। +91 74919 25047 पर call करें या WhatsApp करें appointment के लिए।",
      },
      {
        q: "Ranchi से कितनी दूर है Orchid Medical Centre?",
        a: "Orchid Medical Centre HB Road, Ranchi में है — city center के करीब। Ranchi station से 15-20 minute। Bokaro से ~2 घंटे, Hazaribagh से ~1.5 घंटे, Dhanbad से ~2.5 घंटे। Patients Bihar और Chhattisgarh से भी आते हैं।",
      },
      {
        q: "हिंदी में consultation मिलती है?",
        a: "हाँ — Dr. Akhilesh Yadav fluent हिंदी में consultation देते हैं। Jharkhand के local patients के लिए ये एक बड़ा comfort है — medical terms हिंदी में समझाए जाते हैं।",
      },
    ],
  },

  {
    slug: "ranchi-mein-liver-ka-doctor",
    titleHi: "Ranchi में Liver का Doctor — Dr. Akhilesh Yadav | Hepatologist",
    titleEn: "Liver Doctor in Ranchi — Hepatologist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में liver का doctor कौन है? Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre में fatty liver, hepatitis, jaundice, cirrhosis का expert इलाज।",
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
        heading: "Ranchi में Liver Doctor की ज़रूरत — क्यों?",
        type: "text",
        content: "Jharkhand में liver diseases एक growing problem है। Hepatitis B का prevalence national average से ज़्यादा है — कई लोगों को पता ही नहीं होता। Fatty liver (NAFLD) diabetes और मोटापे के साथ बढ़ रहा है। Alcohol-related liver disease भी common है। Deoghar से लेकर Bokaro तक — Ranchi के Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Jharkhand के एक experienced liver specialist हैं। Liver diseases में dedicated specialist ज़रूर दिखाएं — general physician की expertise यहाँ limited होती है।",
      },
      {
        heading: "Liver की कोई भी Problem — Dr. Akhilesh Yadav से मिलें",
        type: "list",
        content: "Orchid Medical Centre Ranchi में ये liver conditions treat होती हैं:",
        list: [
          "Fatty Liver (NAFLD/NASH) — Grade 1-3, advanced fibrosis तक",
          "Alcoholic Liver Disease (ALD) — early से advanced cirrhosis",
          "Hepatitis B — antiviral therapy, long-term monitoring",
          "Hepatitis C — modern DAA से 8-12 week में virus clear",
          "Hepatitis A/E — acute management",
          "Liver Cirrhosis — ascites, varices, encephalopathy management",
          "Autoimmune Hepatitis — steroid/immunosuppressant therapy",
          "Jaundice (पीला होना) — cause finding और treatment",
          "Liver Abscess — antibiotics और drainage",
          "Liver cancer surveillance — high-risk patients monitoring",
        ],
      },
      {
        heading: "FibroScan — Ranchi में Liver Test बिना Biopsy",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में FibroScan use करते हैं — एक non-invasive liver test जो liver stiffness measure करता है और fibrosis stage बताता है। सिर्फ 10 minute का procedure, कोई needle नहीं, कोई दर्द नहीं। Results: F0-F1 (normal-minimal), F2-F3 (significant fibrosis), F4 (cirrhosis)। Hepatitis B/C patients में annual FibroScan से disease progression monitor होती है। Fatty liver patients में FibroScan से पता चलता है कि weight loss/treatment से liver improve हुआ या नहीं।",
      },
      {
        heading: "Jaundice Emergency — कब Hospital ज़रूर जाएं",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के patients को warn करते हैं — ये jaundice emergency signs हैं: Skin और आँखें bright yellow। Dark brown urine (चाय जैसा), pale/clay-colored stools। Severe abdominal pain, especially right upper side। Confusion या disorientation (Hepatic Encephalopathy)। High fever with jaundice (infection sign)। Swollen abdomen (ascites)। इन symptoms में immediately Orchid Medical Centre या nearest hospital जाएं — delay life-threatening हो सकता है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Liver",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Liver एक silent organ है — बहुत कुछ silently सहता है और late stage में symptoms आते हैं। Ranchi में मैं recommend करता हूँ — अगर diabetes, मोटापा, alcohol history, या family में liver disease है — तो साल में एक बार liver checkup ज़रूर करवाएं। Early detection में treatment बहुत आसान होता है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi।\n\nयह article सिर्फ educational purpose के लिए है। Liver symptoms के लिए hepatologist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047)। Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
    ],
    faqs: [
      {
        q: "Liver के लिए कौनसा blood test करवाएं?",
        a: "LFT (SGPT, SGOT, ALP, GGT, Bilirubin, Albumin, PT-INR), HBsAg (Hepatitis B), anti-HCV (Hepatitis C), Ultrasound abdomen। Diabetes या मोटापा हो तो साल में एक बार। Dr. Akhilesh Yadav Ranchi में complete liver health workup guide करते हैं।",
      },
      {
        q: "Fatty liver में क्या खाना avoid करें?",
        a: "Avoid: alcohol (completely), refined sugar (मिठाई, cold drinks), मैदा (ultra-processed), saturated fats (excessive घी, vanaspati), fried snacks। Helpful: सत्तू, oats, nuts (limited), olive oil, हल्दी, लहसुन। Dr. Akhilesh Yadav Ranchi में detailed diet counseling देते हैं।",
      },
      {
        q: "Hepatitis B positive हूँ — क्या मुझे treatment की ज़रूरत है?",
        a: "सब Hepatitis B carriers को treatment की ज़रूरत नहीं होती। Viral load (HBV DNA), liver enzymes (SGPT), और FibroScan/biopsy से decide होता है। Dr. Akhilesh Yadav Ranchi में complete evaluation करके decide करते हैं — treatment कब start करें।",
      },
      {
        q: "Liver में पानी भरना (ascites) क्या है?",
        a: "Ascites cirrhosis या liver failure का complication है — abdominal cavity में fluid accumulate होता है। पेट फूल जाता है। Diuretics से manage होता है पहले, फिर paracentesis (needle से पानी निकालना) ज़रूरी होती है। Dr. Akhilesh Yadav Ranchi में ascites cases regularly manage करते हैं।",
      },
    ],
  },

  {
    slug: "ranchi-mein-acidity-ka-ilaj",
    titleHi: "Ranchi में Acidity का इलाज — GERD Treatment | Dr. Akhilesh Yadav",
    titleEn: "Acidity Treatment in Ranchi — GERD Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में acidity और GERD का इलाज: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. सिर्फ antacid से नहीं, सही diagnosis और lasting management.",
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
        heading: "रांची में Acidity — आम नहीं है जो आप सोच रहे हैं",
        type: "text",
        content: "रांची में लिट्टी-चोखा, दाल-बाटी, oily खाना और चाय-coffee की बड़ी consumption है — और इसके साथ है acidity epidemic। Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — रोज़ 10-15 acidity के patients देखते हैं। उनका कहना है: '90% patients सिर्फ antacid खाते हैं बिना समझे कि problem क्या है।' Acidity का सही नाम है GERD (Gastroesophageal Reflux Disease) जब यह chronic हो जाए — और इसका इलाज सिर्फ antacid नहीं, systematic approach चाहिए।",
      },
      {
        heading: "Acidity के लक्षण — कब ज़्यादा Serious है?",
        type: "list",
        content: "ये symptoms GERD के हैं — और ये alarm signs हैं जब endoscopy ज़रूरी है:",
        list: [
          "सीने में जलन (heartburn) — खाने के बाद या लेटने पर बढ़ जाए",
          "मुँह में खट्टा आना (acid regurgitation)",
          "खाना निगलने में तकलीफ (dysphagia) — ALARM SIGN",
          "खाना पूरा नहीं खा पाना — early satiety",
          "रात को उठना acidity से",
          "खाँसी जो किसी दवाई से ठीक नहीं — acid-related",
          "Unexplained वज़न घटना — ALARM SIGN, तुरंत doctor",
        ],
      },
      {
        heading: "सही Diagnosis — Antacid से पहले",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में GERD diagnosis में करते हैं: Detailed history: दर्द pattern, trigger foods, medications, weight history। H. Pylori test (stool antigen test): 50-60% Indian GERD patients में H. Pylori positive। Endoscopy (OGD Scopy): ज़रूरी है अगर 4+ हफ्ते की acidity medications से ठीक नहीं हो रही, या alarm symptoms हैं। Endoscopy से देखते हैं: esophagitis grade, H. Pylori status, Barrett's Esophagus (pre-cancerous — long-term acid damage), peptic ulcer। सही diagnosis से — सही treatment।",
      },
      {
        heading: "GERD का इलाज — Dr. Akhilesh Yadav का Plan",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के GERD patients के लिए यह plan देते हैं: H. Pylori positive: 14-day eradication therapy — significant improvement होती है। PPI (Pantoprazole/Omeprazole): acid reduce करना — सिर्फ PPI course, antacid नहीं। 4-8 हफ्ते का course। Lifestyle: रात का खाना सोने से 3 घंटे पहले। Bed head 6-8 inch उठाना। वज़न घटाना अगर overweight। Avoid: tea-coffee ज़्यादा, alcohol, oily-spicy। Ranchi के helpful local foods: सत्तू का पानी (alkaline), छाछ, plain दही। Barrett's Esophagus में: regular surveillance endoscopy schedule। Severe GERD में: anti-reflux surgery (rare cases) का referral।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Acidity",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं लोग देखता हूँ जो 2-3 साल से antacid ले रहे हैं daily। यह सही नहीं — long-term antacid side effects हैं। और कुछ cases में जो हम simple acidity समझते हैं वो actually Barrett's या early cancer निकलता है। 4 हफ्ते से ज़्यादा acidity है — एक बार endoscopy ज़रूर करवाएं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। GERD के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Acidity में कौन सा खाना safe है रांची के context में?",
        a: "Safe: सत्तू का पानी (alkaline nature), plain दही/छाछ (probiotic), banana, oatmeal, boiled vegetables, plain rice। Avoid: लिट्टी-चोखा बहुत ज़्यादा घी के साथ, टमाटर, खट्टे फल, चाय-coffee ज़्यादा, oily fried snacks। Dr. Akhilesh Yadav condition-specific diet guide करते हैं।",
      },
      {
        q: "Antacid और PPI में क्या फर्क है?",
        a: "Antacid (eno, gelusil): तुरंत neutralize करता है acid — short-term relief, minutes में। PPI (omeprazole, pantoprazole): acid production की factory बंद करता है — असर 2-3 दिन में आता है, लेकिन lasting। Chronic GERD में PPI ज़्यादा effective है — लेकिन सिर्फ doctor के guidance में।",
      },
      {
        q: "क्या Pregnancy में acidity का इलाज अलग है?",
        a: "हाँ — pregnancy में antacids (calcium/magnesium based) generally safe। Certain PPIs safe category में हैं। H2 blockers (ranitidine) भी use होते हैं। Dr. Akhilesh Yadav Ranchi में pregnancy-safe options clearly guide करते हैं।",
      },
      {
        q: "Barrett's Esophagus क्या है — क्या यह dangerous है?",
        a: "Barrett's Esophagus: chronic acid damage से normal esophageal cells change हो जाते हैं — pre-cancerous state। Risk: esophageal adenocarcinoma। Regular surveillance endoscopy से early changes detect होते हैं। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में Barrett's patients का regular follow-up करते हैं।",
      },
    ],
  },

  {
    slug: "ranchi-ka-gastroenterologist",
    // Cannibalization: overlaps best-gastroenterologist-ranchi (same commercial intent,
    // same keyword cluster). Noindexed to consolidate ranking to the stronger page (§15).
    noindex: true,
    titleHi: "Ranchi का Gastroenterologist — Dr. Akhilesh Yadav | Best GI Doctor",
    titleEn: "Best Gastroenterologist in Ranchi — Dr. Akhilesh Yadav | Orchid Medical Centre",
    excerptHi: "Ranchi का सबसे trusted gastroenterologist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road। Jharkhand के patients की पहली choice।",
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
        heading: "Ranchi का Gastroenterologist — Qualification क्या है सही Doctor की?",
        type: "text",
        content: "Ranchi में कई 'पेट के doctor' हैं — लेकिन एक DM Gastroenterologist का मतलब क्या है? MBBS (5.5 साल) → MD Internal Medicine (3 साल) → DM Gastroenterology (3 साल super-specialization) — कुल 11.5 साल की medical education। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में practice करते हैं। इस level की qualification ensure करती है कि GI conditions में deepest expertise हो — endoscopy, hepatology, advanced procedures सब में। Jharkhand में DM Gastroenterologists की संख्या बहुत limited है।",
      },
      {
        heading: "Dr. Akhilesh Yadav — Ranchi में क्यों Choose करें",
        type: "list",
        content: "Dr. Akhilesh Yadav choose करने के reasons:",
        list: [
          "DM Gastroenterology — highest GI qualification in India",
          "Orchid Medical Centre में advanced procedures: Endoscopy, Colonoscopy, ERCP, EUS, FibroScan",
          "4,000+ consultations — Ranchi और Jharkhand के patients",
          "हिंदी में consultation — Jharkhand के local patients के लिए comfort",
          "Ranchi में करीब — Bokaro, Hazaribagh, Dhanbad, Jamshedpur, Deoghar से accessible",
          "GERD से liver cirrhosis तक — complete GI care एक जगह",
          "Online appointment available — +91 74919 25047 या WhatsApp",
        ],
      },
      {
        heading: "Orchid Medical Centre — Ranchi का Advanced GI Centre",
        type: "text",
        content: "Orchid Medical Centre, HB Road, Ranchi में Dr. Akhilesh Yadav के पास हैं: High-definition Endoscopy — esophagus, stomach, duodenum visualize। Colonoscopy with polypectomy — colon cancer prevention। ERCP (Endoscopic Retrograde Cholangiopancreatography) — bile duct stones, stenting। EUS (Endoscopic Ultrasound) — pancreas, bile duct advanced imaging। FibroScan — liver fibrosis non-invasive test। Sedation facilities — comfortable procedures। ये all-in-one GI center Jharkhand में rare है — patients को बड़े cities नहीं जाना पड़ता।",
      },
      {
        heading: "Patient Reviews — Ranchi में Dr. Akhilesh Yadav का Trust",
        type: "text",
        content: "Ranchi और Jharkhand के हज़ारों patients ने Dr. Akhilesh Yadav से इलाज लिया है। Google Reviews में: 4.9/5.0 rating। Patients की कहानियाँ: fatty liver Grade 3 जो lifestyle program से Grade 1 हो गई। Hepatitis C जो 12 हफ्ते में cure हुआ। Chronic IBS जो 4 साल बाद सही diagnosis और treatment से ठीक हुआ। Colon polyp जो cancer बनने से पहले निकाला गया। 'हिंदी में समझाते हैं — इतने बड़े doctor होके भी।' 'Ranchi में ही ये facility मिलना बहुत बड़ा relief है।' Appointment के लिए: +91 74919 25047 या WhatsApp।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav का संदेश Ranchi के Patients को",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'मैं चाहता हूँ कि Jharkhand के हर patient को — चाहे Ranchi में हो या Bokaro, Hazaribagh, Deoghar में — सही gastroenterology care मिले। पेट की तकलीफ ignore करना सही नहीं। और Ranchi से बाहर जाने की ज़रूरत नहीं — यहाँ Orchid Medical Centre में सब मिलता है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi।\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047)। Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
    ],
    faqs: [
      {
        q: "DM Gastroenterologist और MD Medicine में क्या फर्क है?",
        a: "MD Medicine general internal medicine specialist है — broad training। DM Gastroenterology 3 साल की additional super-specialization है — सिर्फ GI system focus। Endoscopy, colonoscopy, ERCP, hepatology — सब में DM Gastroenterologist ज़्यादा expert है। Dr. Akhilesh Yadav Ranchi में DM Gastroenterology हैं।",
      },
      {
        q: "क्या Orchid Medical Centre में cashless insurance है?",
        a: "हाँ — select insurance plans के लिए cashless facility available है। Exact insurance eligibility confirm करने के लिए +91 74919 25047 पर call करें। Most major insurance procedures cover करते हैं — endoscopy, colonoscopy included।",
      },
      {
        q: "क्या telemedicine या phone consultation मिलती है?",
        a: "Follow-up consultations phone/WhatsApp पे possible हैं। First consultation और procedures के लिए in-person visit ज़रूरी है Orchid Medical Centre, Ranchi में। +91 74919 25047 पर call करें guidance के लिए।",
      },
      {
        q: "क्या Sunday को OPD मिलती है?",
        a: "Dr. Akhilesh Yadav Monday से Saturday available हैं: 10 AM–2 PM और 5 PM–8 PM। Sunday generally holiday है। Emergency cases के लिए contact करें — +91 74919 25047।",
      },
    ],
  },

  {
    slug: "ranchi-mein-fatty-liver-ka-ilaj",
    titleHi: "Ranchi में Fatty Liver का इलाज — Diet, Exercise & Treatment | Dr. Akhilesh Yadav",
    titleEn: "Fatty Liver Treatment in Ranchi — Diet, Exercise & Medical Care | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में fatty liver (NAFLD/NASH) का इलाज: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Weight loss, diet, exercise और medication का complete guide.",
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
        heading: "Fatty Liver — रांची में Epidemic",
        type: "text",
        content: "रांची के Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — के पास रोज़ 4-5 fatty liver patients आते हैं। कहीं से — 'routine ultrasound में fatty liver आ गया।' ज़्यादातर को कोई symptoms नहीं थे। Jharkhand में fatty liver (NAFLD — Non-Alcoholic Fatty Liver Disease) का prevalence बढ़ रहा है — diabetes, मोटापा, sedentary lifestyle के साथ। सबसे important बात: fatty liver ज़्यादातर stages में lifestyle changes से significantly improve होता है। लेकिन correct guidance ज़रूरी है — सिर्फ 'खाना मत खाओ' नहीं।",
      },
      {
        heading: "Fatty Liver Grade और क्या मतलब है",
        type: "text",
        content: "Ultrasound में fatty liver 3 grades में बताया जाता है: Grade 1 (Mild): liver में 5-33% fat — typically reversible with lifestyle। Grade 2 (Moderate): 33-66% fat — significant lifestyle change ज़रूरी। Grade 3 (Severe/NASH): >66% fat + inflammation (NASH) — medical treatment भी required। FibroScan से fibrosis stage पता चलता है — F0 से F4 (cirrhosis)। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में FibroScan से stage assess करते हैं और treatment accordingly decide करते हैं।",
      },
      {
        heading: "Fatty Liver का इलाज — Dr. Akhilesh Yadav का Protocol",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi के fatty liver patients को यह protocol देते हैं:",
        list: [
          "Weight loss: 7-10% body weight reduce करो — यह liver fat significantly घटाता है",
          "Diet: refined carbs (मैदा, sugar, cold drinks) avoid। Vegetables, fruits (portion control), lean protein, good fats",
          "Exercise: रोज़ 30-45 min walk या aerobic exercise — liver fat पे direct असर",
          "Alcohol: बिल्कुल नहीं — एक drink भी fatty liver worsen करता है",
          "Diabetes और thyroid control: अगर है तो manage करो — liver health पे direct impact",
          "NASH में medications: Vitamin E (non-diabetic NASH), Pioglitazone (diabetic NASH), newer agents",
          "FibroScan monitoring: treatment response check करने के लिए साल में एक बार",
        ],
      },
      {
        heading: "रांची के Fatty Liver Patients के लिए Diet — Local Foods Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के patients के लिए local food context में diet guide करते हैं: Helpful: सत्तू (chana sattu — high protein, fiber, low GI), छाछ और लस्सी (plain, low-fat), मूंग दाल, पालक, लौकी, करेला, हल्दी (anti-inflammatory), आमला (Vitamin C, liver support), papaya, guava। Avoid करें: लिट्टी-चोखा बहुत ज़्यादा घी के साथ (occasional ठीक है, रोज़ नहीं), मिठाई और खीर, dalda/vanaspati, biscuit-cookies (मैदा+sugar), cold drinks। Intermediate: रोटी — 2-3 फुल्का ठीक है, ज़्यादा नहीं। चावल — थोड़ा control। Non-veg — grilled/boiled — fry नहीं।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Fatty Liver",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Fatty liver में सबसे powerful medicine exercise और weight loss है। मैं रोज़ patients को यह कहता हूँ — कोई supplement या दवाई lifestyle से ज़्यादा effective नहीं होगी। 6 महीने में 7-10% weight loss हो जाए — ultrasound में liver improve होगा, enzymes normalize होंगे। Ranchi के patients में यह possible है — मैं बार-बार देख रहा हूँ।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Fatty liver के लिए gastroenterologist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Fatty liver में liver enzymes (SGPT) कितने high हो सकते हैं?",
        a: "NAFLD में SGPT mild-moderately elevated होती है (1.5-3x normal)। NASH में ज़्यादा elevated। लेकिन SGPT normal भी हो सकती है even with significant fatty liver — इसलिए ultrasound और FibroScan दोनों ज़रूरी हैं। Dr. Akhilesh Yadav Ranchi में complete assessment करते हैं।",
      },
      {
        q: "क्या fatty liver में कोई दवाई होती है?",
        a: "NAFLD (बिना inflammation) में main treatment lifestyle है — कोई specific FDA-approved drug अभी नहीं। NASH (inflammation के साथ) में: Vitamin E (non-diabetic), Pioglitazone (diabetic)। Newer drugs (semaglutide, lanifibranor) research में हैं। Dr. Akhilesh Yadav latest evidence-based treatment Ranchi में provide करते हैं।",
      },
      {
        q: "Fatty liver से cirrhosis होने में कितना time लगता है?",
        a: "Simple NAFLD से cirrhosis: typically 10-20 साल। NASH से faster — 5-10 साल में advanced fibrosis। यह individual factors पे depend करता है — diabetes, obesity, genetics। FibroScan से progression monitor होती है। Dr. Akhilesh Yadav Ranchi में high-risk patients का intensive follow-up करते हैं।",
      },
      {
        q: "क्या yoga से fatty liver ठीक होता है?",
        a: "Yoga + aerobic exercise combination helpful है। Surya namaskar, brisk walk, cycling — सब liver fat reduce करते हैं। लेकिन 'yoga से fatty liver ठीक' claim overstatement है — exercise treatment का एक part है, अकेले नहीं। Diet control equally important। Dr. Akhilesh Yadav holistic approach recommend करते हैं।",
      },
      {
        q: "बच्चों में fatty liver होता है?",
        a: "हाँ — childhood obesity के साथ Pediatric NAFLD बढ़ रहा है India में। बच्चों में treatment focus है weight management और diet। Dr. Akhilesh Yadav adult cases treat करते हैं — बच्चों के लिए pediatric gastroenterologist या pediatrician appropriate है।",
      },
    ],
  },

  // ── BATCH 6: BLOGS 26–30 ─────────────────────────────────────────────────────

  {
    slug: "ranchi-mein-piles-ka-ilaj",
    titleHi: "Ranchi में Piles का इलाज — बवासीर Treatment | Dr. Akhilesh Yadav",
    titleEn: "Piles Treatment in Ranchi — Bawaseer Ka Ilaj | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में piles (बवासीर) का इलाज बिना surgery के — Dr. Akhilesh Yadav — Orchid Medical Centre. Rubber Band Ligation, diet tips और complete hemorrhoid guide.",
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
        heading: "बवासीर — शर्माने की नहीं, इलाज की ज़रूरत है",
        type: "text",
        content: "बवासीर (hemorrhoids/piles) एक ऐसी तकलीफ है जिसे रांची के बहुत से patients share नहीं करते — शर्म आती है। लेकिन Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — के पास रोज़ 8-10 piles patients आते हैं। 'यह एक medical condition है — इसका इलाज है,' Dr. Akhilesh Yadav कहते हैं। और अच्छी बात यह है कि ज़्यादातर cases में surgery की ज़रूरत नहीं होती। रांची में बवासीर का कारण भी local factors हैं — oily food, कम fiber, लंबे वक्त तक बैठना।",
      },
      {
        heading: "बवासीर के प्रकार और कोई भी हो सकता है",
        type: "text",
        content: "Internal Hemorrhoids (अंदर): toilet के बाद bright red blood — generally दर्द नहीं। Prolapse (tissue बाहर आ जाता है) Grade 3-4 में। External Hemorrhoids (बाहर): anus के around swelling, दर्द, खुजली। Thrombosed External Hemorrhoid: एक clot बन जाता है — बहुत दर्द, emergency में release करना पड़ता है। रांची में Dr. Akhilesh Yadav proctoscopy से exact grade diagnose करते हैं और उसके हिसाब से treatment plan करते हैं। Grade 1-2: बिना surgery के ठीक। Grade 3-4: minimally invasive या surgery।",
      },
      {
        heading: "बवासीर का इलाज — दवाई से लेकर Procedure तक",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi के बवासीर patients के लिए यह options रखते हैं:",
        list: [
          "Grade 1: high-fiber diet, पानी, stool softeners, topical creams",
          "Grade 2: Rubber Band Ligation (RBL) — OPD में, no anesthesia, 20-30 minute",
          "Grade 2-3: Sclerotherapy — injection treatment, hemorrhoid shrink होता है",
          "Grade 3-4: Stapler Hemorrhoidopexy — minimally invasive surgery",
          "Grade 4/large external: Open Hemorrhoidectomy — surgical removal",
          "Prevention: रोज़ isabgol, 2.5 litre पानी, squat position, 5 min से ज़्यादा strain नहीं",
          "रांची के helpful foods: सत्तू का पानी, छाछ, papaya, guava",
        ],
      },
      {
        heading: "कब Seriously लें — Warning Signs",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के patients को warn करते हैं — ये signs ignore मत करें: Bright red bleeding जो ज़्यादा हो रही हो। काला tarry stool — upper GI bleeding का sign, serious। दर्द ज़्यादा बढ़ जाए suddenly (thrombosed hemorrhoid)। 40+ age में rectal bleeding — colonoscopy ज़रूर। Unexplained weight loss + rectal bleeding — तुरंत specialist से मिलें। बवासीर की diagnosis confirm करना ज़रूरी है — कभी-कभी rectal bleeding colon cancer का sign भी होता है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Piles",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं रोज़ देखता हूँ कि Grade 2 के patients surgery का डर लेकर 2-3 साल wait करते हैं और Grade 4 में आ जाते हैं। Rubber Band Ligation OPD procedure है — 30 minute में हो जाता है, उसी सुबह घर आकर काम कर सकते हैं। शर्माने की वजह से delay मत करें।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "बवासीर में Ayurvedic treatment कारगार है?",
        a: "कुछ Ayurvedic formulations (Arshkalp Vati, Abhayarishta) mild cases में help करते हैं। लेकिन Grade 2-4 में evidence-based procedures (RBL, surgery) ज़्यादा effective हैं। Ayurvedic treatment से delay से problem बढ़ सकती है। Dr. Akhilesh Yadav Ranchi में grade-based best treatment guide करते हैं।",
      },
      {
        q: "क्या piles में operation के बाद दोबारा होता है?",
        a: "Complete hemorrhoidectomy के बाद recurrence rate low (<5-10%) है long-term में। लेकिन अगर diet और lifestyle नहीं बदली तो नए hemorrhoids बन सकते हैं। RBL के बाद same hemorrhoid वापस आने का chance 15-20% है — लेकिन repeat procedure possible है। Dr. Akhilesh Yadav Ranchi में prevention plan देते हैं।",
      },
      {
        q: "क्या Pregnancy में बवासीर का इलाज हो सकता है?",
        a: "Pregnancy में conservative treatment — fiber, पानी, sitz bath, topical creams। Invasive procedures generally delivery के बाद। ज़्यादातर cases delivery के बाद improve हो जाते हैं। Dr. Akhilesh Yadav safe options guide करते हैं।",
      },
      {
        q: "Piles के साथ क्या खाना चाहिए?",
        a: "रोज़ isabgol (psyllium husk) — 1 tbsp रात को warm पानी के साथ। High fiber: सब्जी, दाल, फल के छिलके के साथ। रोज़ 2.5 litre पानी। रांची में: सत्तू का पानी, papaya, guava, छाछ — सब helpful हैं। Avoid: मैदा, oily fried snacks, ज़्यादा मसाला।",
      },
    ],
  },

  {
    slug: "ranchi-mein-jaundice-ka-ilaj",
    titleHi: "Ranchi में Jaundice का इलाज — पीलिया Treatment | Dr. Akhilesh Yadav",
    titleEn: "Jaundice Treatment in Ranchi — Peeliya Ka Ilaj | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में jaundice (पीलिया) का इलाज: Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre. Cause diagnosis और complete liver care.",
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
        heading: "पीलिया — सिर्फ अकेली एक बीमारी नहीं, एक Sign है",
        type: "text",
        content: "रांची के Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — को रोज़ पीलिया के patients आते हैं। सबसे common गलत धारणा: 'पीलिया में सिर्फ गन्ने का रस पीना चाहिए और आराम करना चाहिए।' यह partial सच है। Jaundice (पीलिया) खुद एक बीमारी नहीं — यह liver या bile system की किसी problem का sign है। इसका cause जानना सबसे ज़रूरी है। Hepatitis A या E में rest और diet ठीक है। Bile duct stone में ERCP procedure ज़रूरी हो सकती है। Liver cancer में oncology team coordinate करनी पड़ती है।",
      },
      {
        heading: "पीलिया के प्रकार — Dr. Akhilesh Yadav का Classification",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में jaundice को 3 categories में classify करते हैं: Pre-hepatic (liver से पहले): hemolytic anemia (red blood cells ज़्यादा टूट रहे हैं) — bilirubin production ज़्यादा। Hepatic (liver में): Hepatitis A/B/C/E, alcoholic hepatitis, autoimmune hepatitis, drug-induced liver injury (DILI), liver cirrhosis। Post-hepatic (bile duct blockage): gallstones in bile duct, pancreatic cancer, bile duct stricture — यह surgical/endoscopic emergency हो सकती है। रांची में Dr. Akhilesh Yadav blood tests और imaging से type determine करके treatment plan करते हैं।",
      },
      {
        heading: "पीलिया का इलाज — Cause के हिसाब से",
        type: "list",
        content: "Jaundice treatment cause-specific है:",
        list: [
          "Hepatitis A/E (viral): rest, hydration, high-carb diet, alcohol avoid — generally self-limiting",
          "Hepatitis B acute: supportive care, severe cases में antivirals",
          "Hepatitis C: DAA therapy — 8-12 हफ्ते में virus clear",
          "Alcoholic Hepatitis: alcohol बंद, nutrition support, steroids severe cases में",
          "Bile duct stone: ERCP से stone removal — Orchid Medical Centre Ranchi में available",
          "Drug-induced jaundice: offending drug बंद करो",
          "Liver failure: intensive management, transplant evaluation",
        ],
      },
      {
        heading: "पीलिया में क्या खाएं — सही Diet Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के पीलिया patients के लिए diet guide करते हैं। खाएं: High-carbohydrate foods — rice, खिचड़ी, साबूदाना, potato (boiled)। Fruits — papaya, banana, coconut water। गन्ने का रस — beneficial as high-carb, energy source (hygienic source से)। नींबू पानी (diluted)। छाछ, plain दही (probiotics)। Avoid करें: Alcohol — completely। Heavy घी-oil वाला खाना। Raw/undercooked food (infection का risk)। NSAIDs (paracetamol limited dose safe है)। रांची के patients Hepatitis E के cases में especially hydration important है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — पीलिया",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में पीलिया में गन्ने का रस और नीम हकीम के पास जाना common है। कुछ cases में यह fine है — Hepatitis A/E में natural recovery होती है। लेकिन bile duct blockage या severe hepatitis में delay dangerous हो सकता है। पीलिया हुआ तो पहले doctor से मिलें — cause पता करो, फिर treatment।'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Jaundice के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "पीलिया में hospital admit करना ज़रूरी है?",
        a: "Mild Hepatitis A/E में घर में ठीक हो सकते हैं — rest, diet, hydration। Severe cases में (PT-INR बढ़ा, confusion, खाना नहीं खा पाना): admit ज़रूरी। Bile duct blockage: hospital + ERCP। Dr. Akhilesh Yadav Ranchi में severity assess करके admit/discharge decide करते हैं।",
      },
      {
        q: "पीलिया एक व्यक्ति से दूसरे को फैल सकता है?",
        a: "Depends on cause। Hepatitis A/E: faecal-oral route से फैलता है (contaminated water/food) — infectious। Hepatitis B/C: blood/body fluid से — close contact से protect करें। Bile duct stone या drug-induced: infectious नहीं। Dr. Akhilesh Yadav Ranchi में cause बताते हैं ताकि family precautions लें।",
      },
      {
        q: "पीलिया में आँखें क्यों पीली होती हैं?",
        a: "Bilirubin (waste product जो red blood cells टूटने पर बनता है) blood में accumulate होता है। आँखों का sclera (सफेद हिस्सा) bilirubin absorb करता है — इसलिए पीला होता है। Skin भी affected होती है। Bilirubin >2.5 mg/dL होने पर clinically visible jaundice होती है।",
      },
      {
        q: "क्या नीम पानी या तुलसी से पीलिया ठीक होती है?",
        a: "कोई scientific evidence नहीं है कि यह hepatitis या bile duct jaundice treat करते हैं। Hepatitis A/E में natural recovery होती है — चाहे कुछ भी करो। लेकिन इन home remedies की वजह से critical treatment में delay dangerous हो सकता है। Dr. Akhilesh Yadav Ranchi में evidence-based guidance देते हैं।",
      },
    ],
  },

  {
    slug: "kabj-ka-doctor-ranchi",
    titleHi: "कब्ज का डॉक्टर Ranchi — Chronic Constipation Specialist | Dr. Akhilesh Yadav",
    titleEn: "Kabj Doctor in Ranchi — Chronic Constipation Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में कब्ज (constipation) के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. सालों की कब्ज का सही diagnosis और इलाज.",
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
        heading: "कब्ज़ — सिर्फ Diet Problem नहीं, कभी-कभी Serious Sign",
        type: "text",
        content: "रांची के Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — रोज़ कब्ज़ के patients देखते हैं। एक 55 साल के patient ने 8 महीने से कब्ज़ की शिकायत की — उन्हें thyroid problem थी जो diagnose ही नहीं हुई थी। Thyroid treat होते ही कब्ज़ भी ठीक हो गई। दूसरे patient की कब्ज़ में colonoscopy से early colon polyp मिला। कब्ज़ सिर्फ 'कम पानी' या 'खाना ठीक नहीं' वाली problem नहीं — खासकर 50+ age में या नया onset हो तो specialist से मिलें।",
      },
      {
        heading: "कब्ज़ के कारण — रांची के Patients में Common",
        type: "list",
        content: "रांची और Jharkhand में कब्ज़ के ये common कारण हैं:",
        list: [
          "Low fiber diet: मैदा रोटी, processed snacks, कम सब्जी",
          "Insufficient पानी: 1 litre से कम रोज़ — rural areas में बहुत common",
          "Sedentary lifestyle: desk job, exercise नहीं",
          "Hypothyroidism (thyroid deficiency) — बहुत common, खासकर महिलाओं में",
          "Diabetes — bowel motility slow होती है",
          "Iron tablets — constipation का side effect",
          "Calcium supplements — osteoporosis में common, constipating",
          "IBS-C (Irritable Bowel Syndrome — Constipation type)",
          "50+ में नया कब्ज़ — colon cancer rule out ज़रूर",
        ],
      },
      {
        heading: "कब्ज़ का Diagnosis और कब Colonoscopy",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में कब्ज़ assessment में करते हैं: History: कितने दिन से, diet pattern, medications, stress level। Blood tests: thyroid function (TSH), blood sugar, CBC — underlying cause rule out। Colonoscopy: ज़रूरी है अगर: 50+ age में नया onset कब्ज़। Rectal bleeding के साथ कब्ज़। Weight loss। Family history colon cancer। Iron deficiency anemia। Anorectal examination: pelvic floor dysfunction या rectal prolapse check। यह structured approach ensure करता है कि serious cause miss न हो।",
      },
      {
        heading: "कब्ज़ का इलाज — घरेलू से लेकर Medical तक",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के कब्ज़ patients को step-by-step plan देते हैं। Diet: Isabgol (psyllium husk) रात को warm पानी के साथ — सबसे effective evidence-based approach। High fiber: सब्जी, दाल, fruits के साथ। रोज़ 2.5-3 litre पानी। रांची के local helpful foods: सत्तू का पानी, papaya, guava, इमली का रस (limited)। Lifestyle: रोज़ 30 min walk। Fixed bathroom time (morning routine बनाना)। Squat position (पाँव के नीचे stool)। Medications (doctor के under): Lactulose या PEG (osmotic laxatives — safe for regular use)। Stimulant laxatives (bisacodyl, senna) — सिर्फ short-term। Long-term laxative dependence avoid करें।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — कब्ज़",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'कब्ज़ में एक बात ज़रूरी है: laxatives खाते रहना बिना diagnosis के नहीं। कई patients सालों से daily senna या bisacodyl खा रहे हैं — यह colon का function और बिगाड़ देता है। 3 महीने से ज़्यादा कब्ज़ है — एक बार specialist से मिलें। और 50+ में कब्ज़ — colonoscopy ज़रूर।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Chronic कब्ज़ के लिए doctor से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "रोज़ एक बार toilet नहीं जाना — क्या यह कब्ज़ है?",
        a: "ज़रूरी नहीं — 'normal' bowel frequency 3/day to 3/week तक है। कब्ज़ diagnosis होती है अगर: हफ्ते में 3 से कम, excessive straining, hard stools, incomplete evacuation feeling। Dr. Akhilesh Yadav Ranchi में Rome IV Criteria से कब्ज़ assess करते हैं।",
      },
      {
        q: "Isabgol रोज़ लेना safe है?",
        a: "हाँ — isabgol (psyllium husk) एक natural fiber supplement है, stimulant laxatives के unlike long-term use के लिए safe। Plenty of water के साथ लेना ज़रूरी है — वरना block हो सकता है। पानी से लेते हैं तो बहुत safe और effective है।",
      },
      {
        q: "कब्ज़ में enema देना ठीक है?",
        a: "Occasional enema short-term में ठीक है। Regular enema use से bowel dependence हो सकती है — avoid करें। Chronic कब्ज़ के लिए proper diagnosis और treatment ज़रूरी है — enema symptomatic relief देता है, cause नहीं treat करता। Dr. Akhilesh Yadav Ranchi में long-term safe options guide करते हैं।",
      },
      {
        q: "बच्चे को कब्ज़ है — क्या करें?",
        a: "बच्चों में कब्ज़ में fiber (fruits, vegetables), पानी, physical activity पहले try करें। Persist करे तो pediatric evaluation — Hirschsprung's disease या functional constipation। Dr. Akhilesh Yadav adult GI specialist हैं — बच्चों के लिए pediatrician appropriate है।",
      },
    ],
  },

  {
    slug: "pet-ki-jalan-ka-ilaj-ranchi",
    titleHi: "पेट की जलन का इलाज Ranchi — Heartburn & GERD | Dr. Akhilesh Yadav",
    titleEn: "Heartburn & Pet Ki Jalan Treatment in Ranchi | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में पेट की जलन और सीने की जलन (heartburn/GERD) का इलाज: Dr. Akhilesh Yadav — Orchid Medical Centre. Antacid से आगे — सही diagnosis और lasting relief.",
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
        heading: "पेट की जलन — Antacid से ज़्यादा कुछ चाहिए",
        type: "text",
        content: "रांची में सीने की जलन और पेट की जलन — अक्सर यही सुनने मिलता है कि '2-3 साल से antacid ले रहा हूँ।' Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — रोज़ ऐसे patients देखते हैं जिन्हें सालों से GERD है लेकिन कभी सही diagnosis नहीं हुई। Antacid symptomatic relief देता है — cause नहीं treat करता। GERD (Gastroesophageal Reflux Disease) — stomach का acid ऊपर food pipe में आना — एक chronic condition है जिसे proper management चाहिए। और कुछ cases में — यह Barrett's Esophagus या esophageal cancer की तरफ भी जा सकता है।",
      },
      {
        heading: "पेट की जलन के कारण — रांची के Context में",
        type: "list",
        content: "रांची में GERD/heartburn के common कारण:",
        list: [
          "Oily-spicy food: लिट्टी-चोखा बहुत ज़्यादा घी, समोसा, नमकीन — trigger foods",
          "चाय-coffee: ज़्यादा cups — acid production बढ़ता है",
          "Late night dinner: सोने से पहले ही खाना — acid reflux बढ़ता है",
          "Obesity/मोटापा: pelvic pressure से LES (lower esophageal sphincter) weak होता है",
          "Tight clothing और belt: abdominal pressure बढ़ाते हैं",
          "H. Pylori infection: 50-60% Indian GERD patients में positive",
          "NSAIDs: aspirin/ibuprofen regular use",
          "Pregnancy: hormonal + physical pressure",
        ],
      },
      {
        heading: "Endoscopy — कब ज़रूरी है जलन में",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में endoscopy recommend करते हैं अगर: 4+ हफ्ते की जलन जो medications से ठीक नहीं हो रही। Swallowing में तकलीफ। Unexplained weight loss। उल्टी में blood। 45+ age में नया onset। Anemia (iron deficiency)। Endoscopy से पता चलता है: Erosive Esophagitis (acid से damage), Barrett's Esophagus (pre-cancerous — regular surveillance ज़रूरी), H. Pylori। सही diagnosis से — PPI course, H. Pylori treatment, या Barrett's surveillance plan — जो भी चाहिए।",
      },
      {
        heading: "GERD का इलाज और रांची के लिए Diet Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के GERD patients के लिए: Lifestyle (primary treatment): सोने से 3 घंटे पहले last meal। Bed head 15-20 cm उठाना। वज़न घटाना अगर overweight। Alcohol और smoking quit करें। Diet में avoid: oily-spicy food, चाय-coffee (2 से ज़्यादा cups), citrus fruits (नींबू ज़्यादा), chocolate, tomatoes, mint। रांची के safe options: सत्तू का पानी (alkaline), plain छाछ, banana, oatmeal, boiled दाल-चावल। Medical: PPI proper course (4-8 हफ्ते)। H. Pylori positive — eradication therapy। ज़्यादातर GERD cases lifestyle + PPI से manage होते हैं।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — पेट की जलन",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'पेट की जलन या सीने की जलन में एक चीज़ मैं clearly कह सकता हूँ: अगर 4 हफ्ते से ज़्यादा हो रही है और antacid से पूरा ठीक नहीं हो रहा — एक बार endoscopy ज़रूर करवाएं। Barrett's Esophagus early में detect हो तो treatment आसान है। Late में detect हो तो मुश्किल।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। GERD symptoms के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "सीने की जलन और heart attack में कैसे पहचानें?",
        a: "GERD: burning sensation, acid taste in mouth, खाने के बाद या लेटने पर worse। Heart attack: pressure/squeezing chest pain, left arm/jaw radiation, sweating, shortness of breath। Doubt होने पर — पहले emergency में जाएं। Heart safe करना पहले, GERD बाद में। Dr. Akhilesh Yadav Ranchi में cardiac causes rule out करके GERD confirm करते हैं।",
      },
      {
        q: "क्या रात को antacid लेना safe है रोज़?",
        a: "Short-term में ठीक है। Long-term regular antacid से: magnesium deficiency, kidney issues (calcium antacids), rebound acidity। PPI भी long-term बिना monitoring के safe नहीं। Dr. Akhilesh Yadav Ranchi में proper treatment plan देते हैं ताकि antacid dependence न हो।",
      },
      {
        q: "क्या yoga से पेट की जलन में फायदा होता है?",
        a: "कुछ poses helpful हैं: Vajrasana (after meals), Shavasana। Avoid: inversions (headstand, shoulder stand) — acid reflux worse करते हैं। Forward bends भी active GERD में avoid करें। Brisk walk after meals helpful है।",
      },
      {
        q: "H. Pylori के लिए test कैसे करें?",
        a: "Stool antigen test: most accurate, convenient। Urea Breath Test (UBT): gold standard। Blood antibody test: less accurate (past infection vs active)। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में stool antigen test recommend करते हैं — affordable और accurate।",
      },
    ],
  },

  {
    slug: "ranchi-mein-hepatitis-treatment",
    titleHi: "Ranchi में Hepatitis Treatment — Hepatitis B & C का इलाज | Dr. Akhilesh Yadav",
    titleEn: "Hepatitis Treatment in Ranchi — Hepatitis B & C | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में Hepatitis B और C का advanced इलाज: Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre. Modern DAA से Hepatitis C cure.",
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
        heading: "Hepatitis — रांची में समझना ज़रूरी",
        type: "text",
        content: "Jharkhand में Hepatitis B का prevalence national average से ज़्यादा है — और बहुत से लोग carriers हैं बिना जाने। Hepatitis C भी पूरी तरह से curable हो गई है आज। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Hepatitis B/C का scientific, modern treatment देते हैं। 'Hepatitis B है तो क्या treatment करना चाहिए?' — यह confusion बहुत common है। हर patient का case अलग होता है — viral load, liver damage degree, family status — सब factors matter करते हैं।",
      },
      {
        heading: "Hepatitis B का इलाज — कब और कैसे",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में Hepatitis B management में करते हैं: HBV DNA (viral load) + HBeAg status check। LFT (SGPT/SGOT)। FibroScan — liver fibrosis stage। Treatment indication: High viral load (>2000 IU/mL) + SGPT elevated। Significant fibrosis (F2+)। या special populations (pregnancy, immunosuppression, family planning)। Treatment: Tenofovir disoproxil fumarate (TDF) या Tenofovir alafenamide (TAF) — first-line antivirals। Long-term therapy — HBsAg clear होने तक या lifelong। Annual monitoring: HBV DNA, SGPT, FibroScan, AFP (liver cancer screening)। Hepatitis B के साथ liver cancer risk होता है — regular surveillance ज़रूरी है।",
      },
      {
        heading: "Hepatitis C — अब Curable है (95%+ Success)",
        type: "list",
        content: "Hepatitis C treatment आज India में available है और बहुत effective है:",
        list: [
          "Modern DAA (Direct-Acting Antivirals): Sofosbuvir/Velpatasvir combination",
          "Treatment duration: 8-12 हफ्ते — genotype-dependent",
          "SVR (Sustained Virological Response) = virus permanently clear — 95%+ cases",
          "अब कोई painful interferon injections नहीं",
          "Mild side effects: headache, fatigue — manageable",
          "Government scheme में subsidized pricing available है India में",
          "Post-treatment: SVR 12 हफ्ते बाद confirm, then annual LFT monitoring",
          "Orchid Medical Centre Ranchi में complete DAA therapy available",
        ],
      },
      {
        heading: "Hepatitis Prevention — रांची के Patients के लिए",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के patients को यह prevention guide करते हैं। Hepatitis B: Vaccination — 3 dose schedule। HBsAg positive patient के family members — test करवाएं और vaccine लगवाएं जो negative हैं। Safe sex practices। Sterilized instruments — tattoo, piercing में। Hepatitis A/E: Clean पानी पीना — Ranchi में piped water quality variable है। Cooked food। Hand hygiene। Hepatitis C: Sterile needles — injecting drug use में सब से बड़ा risk। Unsterilized medical/dental equipment — risk होता है India में कुछ settings में। Blood transfusion — modern screening से risk बहुत कम है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Hepatitis",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं रोज़ देखता हूँ कि Hepatitis B carrier patients को किसी ने बताया ही नहीं था कि treatment कब ज़रूरी है — silently cirrhosis develop हो गई। और Hepatitis C के patients को नहीं पता था कि यह अब curable है। एक simple test — और सही treatment — liver का पूरा future change कर सकता है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Hepatitis के लिए hepatologist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Hepatitis B positive हूँ और कोई symptoms नहीं — क्या treatment ज़रूर है?",
        a: "सब HBsAg positive लोगों को तुरंत treatment नहीं चाहिए। Viral load, liver enzymes, FibroScan से decide होता है। 'Inactive carrier' phase में सिर्फ monitoring। Active phase या fibrosis में antiviral start करनी चाहिए। Dr. Akhilesh Yadav Ranchi में complete evaluation के बाद decide करते हैं।",
      },
      {
        q: "Hepatitis B positive के पास रहने वाले family members को क्या करें?",
        a: "सारे family members — HBsAg test और anti-HBs test करवाएं। जो negative हैं उन्हें Hepatitis B vaccine लगवाएं (3 doses)। जो positive हैं — evaluation और follow-up। Dr. Akhilesh Yadav Ranchi में family screening guide करते हैं।",
      },
      {
        q: "Hepatitis C treatment कितने में आता है?",
        a: "India में government Hepatitis C program के अंतर्गत काफी subsidized है। Generic Sofosbuvir/Velpatasvir available है। Exact cost inquiry के लिए Orchid Medical Centre Ranchi में contact करें: +91 74919 25047। Cost accessibility ensure की जाती है।",
      },
      {
        q: "क्या Hepatitis B से liver cancer होता है?",
        a: "हाँ — chronic Hepatitis B (especially without antiviral treatment) में liver cancer (Hepatocellular Carcinoma — HCC) का risk होता है। इसलिए antiviral therapy cancer risk reduce करती है। Dr. Akhilesh Yadav Ranchi में HBsAg positive patients का regular 6-monthly AFP test और ultrasound surveillance करते हैं।",
      },
      {
        q: "Hepatitis A कब ठीक होती है?",
        a: "Hepatitis A generally self-limiting है — 4-8 हफ्ते में ठीक होती है। Treatment: rest, hydration, high-carb low-fat diet। Rarely — acute liver failure में hospitalization। Lifelong immunity develop होती है। Vaccine available है — travel या high-risk लोगों के लिए।",
      },
    ],
  },

  // ── BATCH 7: BLOGS 31–35 ─────────────────────────────────────────────────────

  {
    slug: "crohns-disease-ranchi",
    titleHi: "रांची में Crohn's Disease — IBD Specialist | Dr. Akhilesh Yadav",
    titleEn: "Crohn's Disease Specialist in Ranchi — Diagnosis & Treatment | Dr. Akhilesh Yadav",
    excerptHi: "रांची में Crohn's disease (IBD) के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Advanced diagnosis, biologics और complete IBD care.",
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
        heading: "रांची में Crohn's Disease — एक Underdiagnosed Condition",
        type: "text",
        content: "Bokaro से आए 25 साल की Priya — 3 साल से recurrent abdominal pain, diarrhea, weight loss। कई doctors ने 'IBS' या 'stress' बोला। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने colonoscopy और small bowel imaging की। Diagnosis: Crohn's Disease (ileum involved)। सही treatment से 6 महीने में remission। Crohn's disease India में ज़्यादा से ज़्यादा diagnosed हो रही है — और Ranchi में भी एक dedicated IBD specialist की ज़रूरत है।",
      },
      {
        heading: "Crohn's Disease क्या है?",
        type: "text",
        content: "Crohn's Disease एक Inflammatory Bowel Disease (IBD) है — chronic, immune-mediated condition जिसमें GI tract के किसी भी हिस्से में (मुँह से anus तक) transmural (full thickness) inflammation होती है। Most commonly: terminal ileum (small intestine का end) और colon। IBS से फर्क: IBS functional disorder है — कोई structural damage नहीं। Crohn's में actual inflammation और tissue damage होती है — endoscopy और imaging में दिख जाता है। Ulcerative Colitis से फर्क: UC सिर्फ colon में, mucosal layer। Crohn's anywhere, full thickness।",
      },
      {
        heading: "Crohn's के Symptoms — कैसे पहचानें",
        type: "list",
        content: "Crohn's disease के characteristic symptoms:",
        list: [
          "Recurrent abdominal pain — often right lower abdomen (terminal ileum area)",
          "Chronic diarrhea — 6+ हफ्ते (blood हो भी सकता है, नहीं भी)",
          "Unexplained weight loss और fatigue",
          "Fever — low-grade recurrent",
          "Perianal disease: fistula, fissure, abscess — Crohn's का distinctive feature",
          "Extra-intestinal: joint pain, skin rashes (erythema nodosum), eye inflammation",
          "Growth retardation in children",
        ],
      },
      {
        heading: "Diagnosis — Dr. Akhilesh Yadav का Approach रांची में",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में Crohn's diagnosis में करते हैं: Blood tests: CBC (anemia check), CRP/ESR (inflammation markers), fecal calprotectin (gut inflammation specific marker)। Colonoscopy with ileoscopy: mucosal appearance, biopsy — histology confirm करता है Crohn's। Small bowel imaging: MR Enterography (MRE) — या CT Enterography — small bowel extent assess करना। Capsule Endoscopy: अगर small bowel assessment better चाहिए। Perianal MRI: perianal fistula assessment। Complete workup से disease extent, severity, और complications assess होते हैं।",
      },
      {
        heading: "Crohn's का इलाज — Step-Up Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के Crohn's patients के लिए step-up treatment देते हैं। Mild Crohn's: Mesalamine (5-ASA), budesonide (ileocecal Crohn's के लिए)। Moderate Crohn's: Azathioprine/6-MP (immunomodulators)। Steroid induction, फिर taper। Severe/Fistulizing Crohn's: Biologics — Anti-TNF agents (Infliximab, Adalimumab) या newer agents (Vedolizumab, Ustekinumab)। Surgery: stricture resection, fistula surgery — कुछ cases में ज़रूरी। Nutrition: Exclusive Enteral Nutrition (EEN) — children में mucosal healing के लिए। Diet: specific carbohydrate diet, low-FODMAP — symptom management में helpful।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Crohn's Disease",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Crohn's में सबसे important है: early diagnosis और aggressive treatment जब disease active हो। सिर्फ symptoms manage करना नहीं — mucosal healing और remission achieve करना। Ranchi में मैं देख रहा हूँ कि young patients सालों तक suffer करते हैं बिना सही IBD diagnosis के। Fecal calprotectin एक simple stool test है जो IBD vs IBS differentiate करता है — खास करके अगर 6 हफ्ते से diarrhea है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। IBD के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या Crohn's disease curable है?",
        a: "Crohn's chronic condition है — इसका कोई permanent cure अभी नहीं। लेकिन सही treatment से long-term remission possible है जिसमें patients normal life जी सकते हैं। Modern biologics से outcomes dramatically better हुए हैं। Dr. Akhilesh Yadav Ranchi में goal-based treatment देते हैं — mucosal healing और remission।",
      },
      {
        q: "Crohn's में क्या खाना चाहिए?",
        a: "No universal Crohn's diet। Active flare में: low-fiber, low-residue diet (white rice, white bread, cooked vegetables without skin)। Remission में: balanced nutrition — avoid trigger foods (individual basis)। Fats: limited। Alcohol: avoid। Dr. Akhilesh Yadav Ranchi में patient-specific diet counseling देते हैं।",
      },
      {
        q: "क्या Crohn's में surgery ज़रूर होती है?",
        a: "25-30% Crohn's patients को life में एक बार surgery लगती है — stricture, fistula, abscess, perforation के लिए। Modern biologics ने surgery rate reduce किया है। Dr. Akhilesh Yadav Ranchi में surgical team coordinate करते हैं जब ज़रूरी हो।",
      },
      {
        q: "Fecal calprotectin test क्या है?",
        a: "Stool में inflammatory protein measure करता है — IBD (Crohn's/Colitis) में elevated, IBS में normal। Colonoscopy से पहले एक non-invasive screening test। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में यह test recommend करते हैं chronic diarrhea assessment में।",
      },
    ],
  },

  {
    slug: "colitis-doctor-ranchi",
    titleHi: "रांची में Colitis Doctor — Ulcerative Colitis Specialist | Dr. Akhilesh Yadav",
    titleEn: "Colitis Doctor in Ranchi — Ulcerative Colitis Specialist | Dr. Akhilesh Yadav",
    excerptHi: "रांची में Ulcerative Colitis के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Bleeding diarrhea से remission तक — complete IBD care.",
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
        heading: "रांची में Colitis — Bleeding Diarrhea का सही इलाज",
        type: "text",
        content: "Hazaribagh से आए 32 साल के Santosh — 4 महीने से हर दिन 6-8 बार loose motions, blood के साथ। Weight 6 kg घट गया। Local doctor ने 'infection' बोला और antibiotics दिए — कोई फायदा नहीं। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने colonoscopy की: Ulcerative Colitis (pancolitis)। Structured treatment से 3 महीने में remission। Ulcerative Colitis (UC) India में बढ़ रही है — और Ranchi में भी एक IBD specialist ज़रूरी है।",
      },
      {
        heading: "Ulcerative Colitis क्या है — और IBD का फर्क",
        type: "text",
        content: "Ulcerative Colitis एक Inflammatory Bowel Disease (IBD) है — colon (large intestine) की mucosal lining में chronic inflammation। Rectum से शुरू होती है और proximal direction में extend हो सकती है। Types: Proctitis (सिर्फ rectum), Left-sided Colitis (descending colon), Pancolitis (पूरा colon)। Crohn's vs UC: Crohn's — anywhere GI tract, full thickness, skip lesions। UC — सिर्फ colon, mucosal, continuous। अलग diagnosis अलग treatment demand करता है — इसलिए colonoscopy with biopsy ज़रूरी है।",
      },
      {
        heading: "UC के Symptoms — कब Doctor ज़रूरी",
        type: "list",
        content: "Ulcerative Colitis के symptoms और emergency signs:",
        list: [
          "Frequent diarrhea — often bloody, mucusy",
          "Urgency — toilet की sudden ज़रूरत",
          "Tenesmus — toilet के बाद भी incomplete लगता है",
          "Abdominal cramps — mostly lower left",
          "Rectal bleeding और mucus",
          "Fatigue और anemia",
          "Emergency: >6 bloody stools/day, fever, rapid pulse — Fulminant Colitis, तुरंत admit",
        ],
      },
      {
        heading: "UC का इलाज — Dr. Akhilesh Yadav का Protocol रांची में",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में UC treatment step-wise देते हैं। Mild-Moderate UC: Mesalamine (5-ASA) — oral + rectal (suppository/enema) combination। Most effective mild-moderate में। Moderate-Severe UC: Corticosteroids — induction के लिए। Azathioprine/6-Mercaptopurine — maintenance। Severe UC/Refractory: Biologics — Infliximab, Vedolizumab। Tofacitinib (JAK inhibitor)। Severe/Acute Severe UC: Hospital admission — IV steroids, monitoring, surgery evaluation। Surgery (Colectomy): medical therapy fail होने पर या dysplasia/cancer में — colectomy UC को 'cure' कर सकता है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Colitis",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'UC में patients अक्सर अपनी medication बंद कर देते हैं जब symptoms ठीक हो जाते हैं। यह गलत है — UC में maintenance therapy ज़रूरी है, नहीं तो relapse होता है। और long-term UC में colon cancer screening भी ज़रूरी है। Ranchi में मैं regular follow-up ensure करता हूँ अपने UC patients के साथ।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। IBD के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Ulcerative Colitis और Amoebic Dysentery में क्या फर्क है?",
        a: "दोनों में bloody diarrhea होती है। Amoebic dysentery: infection (Entamoeba histolytica), acute onset, metronidazole से treat होती है। UC: chronic, immune-mediated, अलग treatment। Stool examination और colonoscopy से differentiate होता है। Dr. Akhilesh Yadav Ranchi में पहले infection rule out करते हैं फिर UC diagnose करते हैं।",
      },
      {
        q: "क्या UC में specific diet ज़रूरी है?",
        a: "Active flare में: low-residue diet, raw vegetables, seeds, nuts avoid करें। Remission में: balanced diet। Dairy: कुछ UC patients lactose intolerant होते हैं। Probiotics helpful हो सकते हैं। Dr. Akhilesh Yadav Ranchi में UC patients के लिए individualized diet guidance देते हैं।",
      },
      {
        q: "UC में pregnancy safe है?",
        a: "Remission में pregnancy safe है। Active disease में: risk बढ़ता है complications का। कुछ UC medications (mesalamine) pregnancy safe हैं। Azathioprine, steroids — doctor के guidance में। Dr. Akhilesh Yadav Ranchi में UC patients के लिए pre-pregnancy counseling करते हैं।",
      },
      {
        q: "UC में colon cancer risk कितना है?",
        a: "8+ साल के extensive UC में colon cancer risk बढ़ता है — normal population से ज़्यादा। इसलिए surveillance colonoscopy ज़रूरी है: extensive UC में 8-10 साल के बाद हर 1-2 साल। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में UC patients का cancer surveillance schedule maintain करते हैं।",
      },
    ],
  },

  {
    slug: "digestive-disease-ranchi",
    titleHi: "Digestive Disease Ranchi — पाचन रोग के Specialist | Dr. Akhilesh Yadav",
    titleEn: "Digestive Disease Specialist in Ranchi — Expert GI Care | Dr. Akhilesh Yadav",
    excerptHi: "रांची में digestive diseases के expert: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. GERD से liver cirrhosis तक — सभी पाचन रोग का advanced इलाज।",
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
        heading: "Digestive Diseases — रांची का Growing Burden",
        type: "text",
        content: "Jharkhand में digestive diseases एक major health burden हैं। Fatty liver (NAFLD) — diabetes और obesity के साथ बढ़ रहा है। IBD (Crohn's, Colitis) — urbanization के साथ India में increasing। Liver disease — Hepatitis B/C, alcoholic liver disease, cirrhosis। Colon polyps और colon cancer — 45+ age group में increasing। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — Jharkhand के patients के लिए comprehensive digestive disease care provide करते हैं। एक dedicated GI specialist का फायदा: accurate diagnosis, evidence-based treatment, unnecessary procedures से बचाव।",
      },
      {
        heading: "Common Digestive Diseases — रांची में",
        type: "list",
        content: "Orchid Medical Centre Ranchi में Dr. Akhilesh Yadav ये digestive diseases treat करते हैं:",
        list: [
          "GERD / Acid Reflux — chronic सीने की जलन, Barrett's Esophagus",
          "Peptic Ulcer — H. Pylori-related, NSAID-induced",
          "IBS (Irritable Bowel Syndrome) — functional gut disorder",
          "IBD (Crohn's Disease, Ulcerative Colitis) — immune-mediated",
          "Fatty Liver (NAFLD/NASH) — metabolic liver disease",
          "Hepatitis B/C — viral liver disease",
          "Liver Cirrhosis — with ascites, varices, encephalopathy",
          "Pancreatitis — acute और chronic",
          "Colon polyps और colorectal cancer screening",
          "Celiac Disease — gluten intolerance",
        ],
      },
      {
        heading: "Advanced Procedures — Orchid Medical Centre Ranchi",
        type: "text",
        content: "Dr. Akhilesh Yadav के पास Orchid Medical Centre Ranchi में Jharkhand के limited centers में available advanced procedures हैं: Endoscopy (OGD Scopy) — upper GI। Colonoscopy — colon cancer screening, polyp removal। ERCP — bile duct stones, stenting। EUS (Endoscopic Ultrasound) — pancreas/bile duct advanced imaging। FibroScan — liver fibrosis non-invasive staging। Capsule Endoscopy — small bowel imaging (referral)। यह comprehensive setup ensure करता है कि ज़्यादातर digestive conditions एक ही जगह diagnose और treat हो जाएं — Ranchi में ही।",
      },
      {
        heading: "Digestive Health कैसे Maintain करें — General Tips",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में patients को general digestive health guidance देते हैं: Fiber: रोज़ 25-30g — fruits, vegetables, दालें। पानी: 2.5-3 litre daily। Exercise: 30 min walk daily — gut motility improve होती है। Alcohol: minimum या zero — liver health के लिए। NSAIDs: regular use avoid करें — ulcer और GI bleeding risk। Stress management: gut-brain axis — stress directly digestive health affect करता है। 45+ screening: साल में एक बार LFT, blood sugar, colonoscopy हर 10 साल। Early detection: GI symptoms 4+ हफ्ते — doctor से मिलें, ignore मत करें।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Digestive Health",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Digestive diseases में एक trend देख रहा हूँ Ranchi में — patients symptoms 6-12 महीने बाद doctor के पास आते हैं। जब आते हैं तो condition advanced हो चुकी होती है। GI symptoms early stage में manageable होते हैं — late stage में complex। 4 हफ्ते से ज़्यादा पेट की कोई भी problem — please specialist से मिलें।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Celiac disease क्या है — और रांची में कैसे diagnose होती है?",
        a: "Celiac disease: gluten (wheat, barley, rye) से immune reaction — small intestine damage। Symptoms: diarrhea, bloating, weight loss, anemia। Blood test: anti-tTG antibody। Confirm: small bowel biopsy (endoscopy से)। Gluten-free diet — lifelong treatment। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में diagnose करते हैं।",
      },
      {
        q: "SIBO (Small Intestinal Bacterial Overgrowth) क्या है?",
        a: "Small intestine में normally कम bacteria होते हैं — SIBO में excess bacteria grow करते हैं। Symptoms: bloating, gas, diarrhea। Diagnosis: hydrogen breath test। Treatment: antibiotics (rifaximin)। Dr. Akhilesh Yadav IBS-like symptoms में SIBO rule out करते हैं Ranchi में।",
      },
      {
        q: "क्या digestive problems mental health से connected हैं?",
        a: "हाँ — gut-brain axis bidirectional है। Anxiety/depression IBS worsen करते हैं। IBS patients में anxiety rates ज़्यादा हैं। Stress acute GI flares trigger कर सकता है IBD में। Dr. Akhilesh Yadav Ranchi में mental health aspects भी discuss करते हैं chronic GI disease management में।",
      },
      {
        q: "Blood in stool कब emergency है?",
        a: "Emergency: massive bright red bleeding (large amount), black tarry stool (melena — upper GI bleeding), dizziness/fainting के साथ bleeding। Non-emergency लेकिन ज़रूर doctor दिखाएं: small amounts of blood, on toilet paper, no other symptoms। Dr. Akhilesh Yadav Ranchi में emergency या OPD — severity के हिसाब से guide करते हैं।",
      },
    ],
  },

  {
    slug: "pet-dard-doctor-ranchi",
    titleHi: "पेट दर्द Doctor Ranchi — Abdominal Pain Specialist | Dr. Akhilesh Yadav",
    titleEn: "Abdominal Pain Doctor in Ranchi — Pet Dard Specialist | Dr. Akhilesh Yadav",
    excerptHi: "Ranchi में पेट दर्द (abdominal pain) के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre। Chronic या severe पेट दर्द का सही diagnosis और इलाज।",
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
        heading: "पेट में दर्द — कभी आम, कभी Serious",
        type: "text",
        content: "पेट में दर्द (abdominal pain) — बहुत common complaint है Ranchi और Jharkhand में। कुछ cases में: gas या indigestion से mild discomfort। कुछ cases में: kidney stone emergency। कुछ में: appendicitis — operation ज़रूरी। कुछ में: liver या pancreas की serious problem। Orchid Medical Centre Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — systematic approach से abdominal pain assess करते हैं — location, character, duration, associated symptoms — और सही diagnosis निकालते हैं।",
      },
      {
        heading: "पेट दर्द का Location — क्या बताता है",
        type: "list",
        content: "Abdominal pain location से possible diagnosis:",
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
        heading: "Emergency पेट दर्द — कब तुरंत Hospital जाएं",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के patients को clearly बताते हैं — ये signs emergency हैं: Sudden severe 'worst pain of life' — perforated ulcer, ruptured ectopic, mesenteric ischemia। Rigidity (पेट board जैसा सख्त) — peritonitis। Blood in vomit या stool + severe pain — GI bleeding। Fever + severe right upper pain — cholangitis। Pain after trauma — internal injury। Severe pain with rapid deterioration। इन cases में: immediately nearest emergency room या hospital। Diagnosis बाद में, safety पहले।",
      },
      {
        heading: "Chronic पेट दर्द — Dr. Akhilesh Yadav का Diagnostic Approach",
        type: "text",
        content: "Chronic abdominal pain (3+ महीने) में Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में करते हैं: Detailed history और physical examination। Blood tests: CBC, LFT, RFT, Lipase/Amylase, thyroid, blood sugar। Stool tests: occult blood, calprotectin, H. Pylori antigen। Ultrasound abdomen — पहली line imaging। CT scan या MRI — ज़्यादा detail के लिए ज़रूरत होने पर। Endoscopy या Colonoscopy — suspected GI source में। ये systematic approach ensure करता है कि chronic pain का cause correctly identify हो — unnecessary surgery या medications से बचाव।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — पेट दर्द",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'पेट में दर्द — सिर्फ pain killer मत लो और ignore मत करो। कुछ conditions में pain killer temporarily दर्द छुपा देती है और serious condition miss हो जाती है। Chronic pain में diagnosis पहले — फिर treatment। Ranchi में मैं रोज़ ऐसा देखता हूँ कि correct diagnosis से patient की problem की root cause solve होती है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi।\n\nयह article सिर्फ educational purpose के लिए है। पेट दर्द के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047)। Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
    ],
    faqs: [
      {
        q: "Gallstone pain कैसा होता है?",
        a: "Biliary colic: sudden onset, severe right upper abdominal pain — back या right shoulder तक जाता है। Fatty food के बाद trigger। Nausea/vomiting के साथ। 30 min से 4-6 घंटे तक रह सकता है। Ultrasound से gallstones diagnose होते हैं। Dr. Akhilesh Yadav Ranchi में gallstone management guide करते हैं।",
      },
      {
        q: "Appendicitis pain कैसा होता है?",
        a: "Classically: नाभि के around दर्द शुरू होता है, फिर right lower abdomen में shift। Fever, nausea, vomiting के साथ। Walking से worse। Surgical emergency है — appendectomy। Dr. Akhilesh Yadav emergency में surgical team को refer करते हैं Orchid Medical Centre Ranchi से।",
      },
      {
        q: "Period (menstrual) pain और appendicitis में कैसे differentiate करें?",
        a: "Period pain: cyclic, predictable timing, responds to NSAIDs। Appendicitis: acute onset, fever, right lower abdomen specifically, nausea। Doubt में — doctor से मिलें immediately। Ultrasound या CT scan से differentiate होता है। Dr. Akhilesh Yadav Ranchi में appropriate diagnosis करते हैं।",
      },
      {
        q: "Stress से पेट में दर्द हो सकता है?",
        a: "हाँ — stress visceral hypersensitivity बढ़ाता है। IBS patients में stress के साथ cramping और diarrhea common है। Functional abdominal pain (no organic cause) भी anxiety से related होती है। लेकिन organic causes rule out करना ज़रूरी है — फिर psychosomatic causes address। Dr. Akhilesh Yadav Ranchi में दोनों aspects address करते हैं।",
      },
    ],
  },

  {
    slug: "kala-pakhana-doctor-ranchi",
    titleHi: "काला पाखाना Doctor Ranchi — Black Stool Specialist | Dr. Akhilesh Yadav",
    titleEn: "Black Stool (Kala Paakhana) Doctor in Ranchi — GI Bleeding | Dr. Akhilesh Yadav",
    excerptHi: "काला पाखाना (black/tarry stool) — upper GI bleeding का sign। Ranchi में Dr. Akhilesh Yadav — Orchid Medical Centre — emergency endoscopy और complete GI bleeding management।",
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
        heading: "IMPORTANT: काला पाखाना — Emergency Sign",
        type: "warning",
        content: "⚠️ काला, tarry, sticky, foul-smelling stool (Melena) — upper gastrointestinal (GI) bleeding का sign है। यह emergency है। तुरंत hospital जाएं — Dr. Akhilesh Yadav या nearest emergency room। Delay life-threatening हो सकता है। इस article में symptoms, causes और treatment explain है — लेकिन अगर काला पाखाना हो रहा है ABHI तो पहले medical help लें।\n\nOrchid Medical Centre, HB Road, Ranchi: +91 74919 25047.",
      },
      {
        heading: "काला पाखाना — क्या होता है और क्यों",
        type: "text",
        content: "Melena (काला पाखाना) का मतलब: blood जो upper GI tract (esophagus, stomach, duodenum) में है वह digestion process से गुज़रता है। Blood hemoglobin + bowel bacteria → digested → काला/tarry stool बनता है। काला पाखाना = खून esophagus, stomach, या small intestine के पहले हिस्से से आ रहा है। Bright red rectal bleeding = lower GI (colon/rectum) — कुछ अलग causes। Ranchi में Dr. Akhilesh Yadav emergency में endoscopy से bleeding source locate करते हैं।",
      },
      {
        heading: "काला पाखाना के Causes",
        type: "list",
        content: "Upper GI bleeding के common causes (काला पाखाना):",
        list: [
          "Peptic Ulcer (most common) — duodenal या gastric ulcer से bleeding",
          "Esophageal Varices — liver cirrhosis में dilated veins rupt होती हैं — severe",
          "Mallory-Weiss Tear — severe vomiting के बाद esophageal junction में tear",
          "Erosive Gastritis — NSAIDs, alcohol, stress से stomach lining damage",
          "Esophagitis — severe acid damage या pill-induced",
          "Gastric/Esophageal Cancer — advanced cases में bleeding",
          "Iron supplements — iron tablets से black stool (non-urgent, non-tarry)",
        ],
      },
      {
        heading: "Emergency Management — Dr. Akhilesh Yadav का Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में upper GI bleeding emergency में करते हैं: Stabilization: IV access, blood pressure monitoring, IV fluids, blood transfusion अगर ज़रूरी। IV PPI (pantoprazole infusion) — acid suppress करना, clot protect करना। Risk stratification: Glasgow-Blatchford Score — decide करता है urgent endoscopy vs wait। Urgent Endoscopy (within 24 hours, often sooner): bleeding source locate करना। Endoscopic therapy: injection (epinephrine), thermal (APC), clips — bleeding control। Varices में: Band Ligation या Sclerotherapy। Post-endoscopy: PPI course, address underlying cause (ulcer treatment, cirrhosis management)।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — GI Bleeding",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'काला पाखाना देखकर लोग घबरा जाते हैं — और सही भी है। यह emergency है। लेकिन आज endoscopy से ज़्यादातर GI bleeding endoscopically control हो जाती है — surgery की ज़रूरत बहुत कम cases में। Ranchi में Orchid Medical Centre में urgent endoscopy facility available है। Delay मत करें।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। काला पाखाना में तुरंत medical help लें — emergency है।\n\nEmergency Contact: +91 74919 25047 या nearest hospital emergency room।",
      },
    ],
    faqs: [
      {
        q: "Iron tablet लेने से काला पाखाना होता है — क्या यह normal है?",
        a: "हाँ — iron supplements से stool dark/black हो जाता है। लेकिन यह non-tarry होता है (shiny/sticky नहीं) और foul smell नहीं होती। Doubt होने पर — doctor से confirm करें। Dr. Akhilesh Yadav Ranchi में iron-induced vs melena differentiate करते हैं।",
      },
      {
        q: "काला पाखाना के साथ चक्कर या बेहोशी — क्या करें?",
        a: "यह significant blood loss का sign है — emergency। तुरंत nearest hospital emergency room जाएं या 108 ambulance call करें। Sit/lie down immediately — गिरें नहीं। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में emergencies immediately attend करते हैं।",
      },
      {
        q: "Upper GI bleeding में क्या खाना safe है?",
        a: "Active bleeding में NPO (कुछ नहीं) — endoscopy से पहले। Endoscopy के बाद: soft bland diet से start। Liquids पहले। Solid food gradually। Ulcer में: PPI course के साथ avoid NSAIDs, alcohol। Dr. Akhilesh Yadav Ranchi में post-discharge diet clearly guide करते हैं।",
      },
      {
        q: "क्या endoscopy से bleeding permanently ठीक हो जाती है?",
        a: "Endoscopic treatment bleeding episode control करता है। Underlying cause का treatment ज़रूर: ulcer में H. Pylori treat करो, NSAIDs बंद करो। Cirrhosis में varices — regular banding sessions + liver management। Without treating cause — rebleeding possible। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में long-term plan देते हैं।",
      },
    ],
  },

  // ── BATCH 8: BLOGS 36–40 ─────────────────────────────────────────────────────

  {
    slug: "gas-problem-doctor-ranchi",
    titleHi: "Gas Problem Doctor Ranchi — Bloating & Gas का इलाज | Dr. Akhilesh Yadav",
    titleEn: "Gas Problem Doctor in Ranchi — Bloating & Flatulence Treatment | Dr. Akhilesh Yadav",
    excerptHi: "रांची में gas problem और bloating के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Gas के causes, diet tips और medical treatment।",
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
        heading: "Gas Problem — आम नहीं है अगर Chronic हो",
        type: "text",
        content: "Ranchi के Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — रोज़ 5-6 gas problem के patients देखते हैं। ज़्यादातर लोग सोचते हैं 'थोड़ा gas problem सबको होता है' — और wait करते रहते हैं। लेकिन chronic bloating, excess gas, या abdominal distension कभी-कभी किसी underlying condition का sign होती है: IBS, SIBO (Small Intestinal Bacterial Overgrowth), celiac disease, lactose intolerance, या कभी-कभी colon conditions। Ranchi में सही diagnosis ज़रूरी है।",
      },
      {
        heading: "Gas Problem के कारण — Ranchi के Context में",
        type: "list",
        content: "Gas problem के common और less-known causes:",
        list: [
          "ज़्यादा gas produce करने वाले foods: राजमा, छोले, दाल (fermentable carbs)",
          "Lactose Intolerance: दूध, चाय में दूध — gas, bloating, loose motions",
          "SIBO (Small Intestinal Bacterial Overgrowth): excess bacteria gas produce करते हैं",
          "IBS (Irritable Bowel Syndrome): visceral hypersensitivity — normal gas भी ज़्यादा लगता है",
          "Constipation: gas pass नहीं होती — bloating बढ़ती है",
          "Swallowing air (aerophagia): जल्दी खाना, carbonated drinks",
          "Celiac Disease: gluten से small intestine damage — fermentation increased",
          "Gastroparesis: stomach emptying slow — gas और bloating",
        ],
      },
      {
        heading: "Diagnosis — Gas Problem में कब Doctor ज़रूरी",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में gas problem assessment में करते हैं: Detailed dietary history — कौन सा food trigger है। Lactose intolerance test: hydrogen breath test या trial of lactose elimination। H. Pylori test — gastric symptoms के साथ। SIBO assessment: hydrogen breath test। Stool calprotectin — IBS vs IBD differentiate। Colonoscopy या Endoscopy — अगर warning signs हैं: rectal bleeding, weight loss, age 50+। Alarm symptoms के साथ gas problem: investigate करो। Simple bloating बिना red flags के: diet और lifestyle से पहले manage।",
      },
      {
        heading: "Gas Problem का इलाज — Dr. Akhilesh Yadav का Plan",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के gas patients के लिए: Dietary approach: Low-FODMAP trial (6-8 हफ्ते) — fermentable carbs temporarily reduce। Ranchi में avoid: राजमा, छोले, गोभी, broccoli, apple, mango ज़्यादा। Safe: plain rice, केला, potato (boiled), carrot, cucumber। Lactose intolerance: lactose-free milk या दूध बंद करो trial के लिए। SIBO treatment: Rifaximin (antibiotic) — gut bacteria reset करता है। IBS में gas: antispasmodics + peppermint oil capsules — evidence-based। Probiotics: specific strains gas reduce करते हैं। Lifestyle: धीरे खाना, carbonated drinks avoid, post-meal walk।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Gas Problem",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Gas problem common है — लेकिन chronic, daily bloating जो quality of life affect करे, वह investigate करना चाहिए। Ranchi में मैं frequently IBS और SIBO diagnose करता हूँ जिन्हें gas problem समझा जा रहा था। Correct diagnosis से correct treatment मिलती है। Antiflatulents सिर्फ temporary relief देती हैं — cause treat नहीं होता।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या दही या छाछ से gas होती है?",
        a: "Plain दही (curd) और छाछ generally gas नहीं बनाते — in fact probiotics होते हैं जो gut health improve करते हैं। लेकिन severe lactose intolerance में even fermented dairy भी trigger हो सकती है। Dr. Akhilesh Yadav Ranchi में individual assessment करते हैं।",
      },
      {
        q: "हींग और अजवाइन से gas ठीक होती है — क्या सच है?",
        a: "हाँ — हींग (asafoetida) और अजवाइन (carom seeds) traditional anti-flatulents हैं। कुछ evidence है कि यह mild carminatives हैं। Temporary/mild gas में helpful हो सकते हैं। लेकिन chronic bloating में सिर्फ यही नहीं चलेगा — proper evaluation ज़रूरी है।",
      },
      {
        q: "SIBO क्या है और Ranchi में कैसे diagnose होती है?",
        a: "SIBO में small intestine में excess bacteria gas produce करते हैं — bloating, diarrhea। Diagnosis: hydrogen breath test (lactulose या glucose)। Treatment: Rifaximin (non-absorbable antibiotic)। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में SIBO evaluate करते हैं।",
      },
      {
        q: "Lactose intolerance और milk allergy में क्या फ़र्क है?",
        a: "Lactose intolerance: enzyme deficiency — lactose digest नहीं होती — gas, bloating, diarrhea (no immune reaction)। Milk allergy: immune-mediated — hives, breathing difficulty, anaphylaxis possible। Lactose intolerance common है Indians में। Dr. Akhilesh Yadav Ranchi में differentiate करते हैं।",
      },
    ],
  },

  {
    slug: "ulti-ka-doctor-ranchi",
    titleHi: "उल्टी का Doctor Ranchi — Nausea & Vomiting Specialist | Dr. Akhilesh Yadav",
    titleEn: "Nausea & Vomiting Doctor in Ranchi — GI Specialist | Dr. Akhilesh Yadav",
    excerptHi: "रांची में बार-बार उल्टी और nausea के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Causes, diagnosis और effective treatment।",
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
        heading: "उल्टी — कब Common है, कब Serious",
        type: "text",
        content: "एक बार उल्टी — food poisoning, motion sickness, pregnancy — common है। लेकिन chronic nausea या recurrent vomiting एक underlying GI problem signal कर सकता है। Orchid Medical Centre Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — systematic approach से nausea/vomiting के cause assess करते हैं। Ranchi में patients बार-बार antiemetics (उल्टी की दवा) लेते हैं बिना cause जाने — यह सिर्फ masking है, treating नहीं।",
      },
      {
        heading: "उल्टी के GI Causes — Gastroenterologist का Domain",
        type: "list",
        content: "GI-related nausea/vomiting के common causes:",
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
        heading: "Emergency — कब तुरंत Hospital",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi के patients को warn करते हैं — ये signs emergency हैं: खून की उल्टी (hematemesis) — bright red या coffee grounds। उल्टी में bile (green/yellow) — obstruction या serious disease। Severe dehydration — mouth dry, sunken eyes, no urine। Severe abdominal pain + vomiting — peritonitis, pancreatitis, obstruction। Neurological symptoms + vomiting — brain cause (meningitis, brain tumor)। Vomiting after head injury। इन cases में: तुरंत hospital emergency room।",
      },
      {
        heading: "Diagnosis — Dr. Akhilesh Yadav का Approach Nausea/Vomiting में",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में nausea/vomiting के cause assess करने के लिए करते हैं: History: duration, pattern, what triggers, associated symptoms, medications, pregnancy status। Blood tests: CBC, LFT, RFT, blood sugar, amylase/lipase, thyroid। Urine pregnancy test: reproductive age women में। Imaging: X-ray abdomen (obstruction check), ultrasound। Endoscopy: chronic nausea + alarm symptoms में। Gastric emptying study: gastroparesis suspected में। यह structured approach ensure करता है कि cause miss न हो।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Nausea & Vomiting",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं देखता हूँ कि patients chronic nausea के साथ महीनों तक antiemetics लेते हैं बिना doctor के। कुछ cases में gastroparesis निकलता है, कुछ में H. Pylori, कुछ में anxiety-related। सब का treatment अलग है। Diagnosis पहले — फिर दवा।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Chronic nausea के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Gastroparesis क्या है?",
        a: "Stomach की muscles properly contract नहीं करते — emptying slow हो जाता है। Nausea, vomiting (often hours after eating), bloating, early satiety। Common causes: diabetes, post-viral, medications। Diagnosis: gastric emptying study। Treatment: prokinetics (domperidone, metoclopramide), diet (small frequent meals, low fiber, low fat)। Dr. Akhilesh Yadav Ranchi में diagnose और manage करते हैं।",
      },
      {
        q: "उल्टी में खून आए तो क्या करें?",
        a: "यह emergency है — तुरंत hospital जाएं या ambulance call करें। Upper GI bleeding का sign है (peptic ulcer, esophageal varices, Mallory-Weiss tear)। Orchid Medical Centre Ranchi में Dr. Akhilesh Yadav emergency endoscopy करते हैं।",
      },
      {
        q: "Pregnancy में उल्टी कब serious होती है?",
        a: "Mild morning sickness first trimester में common है — diet और small meals से manage। Hyperemesis Gravidarum (severe vomiting, weight loss, dehydration) में IV fluids और antiemetics ज़रूरी। OB/GYN और gastroenterologist severe cases में coordinate करते हैं।",
      },
      {
        q: "क्या stress से उल्टी हो सकती है?",
        a: "हाँ — severe anxiety या stress में psychogenic vomiting हो सकती है। Gut-brain axis direct link है। Cyclic Vomiting Syndrome भी stress-triggered हो सकता है। Organic causes rule out करने के बाद — anxiety management, biofeedback helpful होते हैं। Dr. Akhilesh Yadav Ranchi में assess करते हैं।",
      },
    ],
  },

  {
    slug: "jharkhand-mein-gastroenterologist",
    titleHi: "Jharkhand में Gastroenterologist — DM GI Doctor | Dr. Akhilesh Yadav Ranchi",
    titleEn: "Gastroenterologist in Jharkhand — Dr. Akhilesh Yadav | Ranchi's Top GI Specialist",
    excerptHi: "Jharkhand में DM Gastroenterologist कौन हैं? Dr. Akhilesh Yadav — Orchid Medical Centre, Ranchi — Jharkhand के patients के लिए advanced GI care. Endoscopy, ERCP, EUS available।",
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
        heading: "Jharkhand में GI Care — Challenge और Solution",
        type: "text",
        content: "Jharkhand एक ऐसा state है जहाँ specialist doctors की संख्या national average से कम है — खास करके super-specialists जैसे DM Gastroenterologists। Deoghar, Giridih, Hazaribagh, Bokaro, Dhanbad, Jamshedpur, Palamu — इन cities से patients पहले Ranchi, फिर अगले step में Patna या Kolkata या Delhi जाते हैं। Orchid Medical Centre, HB Road, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — Jharkhand के patients के लिए advanced GI care provide करते हैं — ताकि ज़्यादातर बार वो अपने state में ही ठीक हो सकें।",
      },
      {
        heading: "Jharkhand के कौन से Districts से Patients आते हैं?",
        type: "list",
        content: "Dr. Akhilesh Yadav के पास Jharkhand के ये districts से patients आते हैं:",
        list: [
          "Ranchi — city और adjoining areas",
          "Bokaro — HEC area, Chas, Sector areas",
          "Hazaribagh — district headquarters और rural",
          "Dhanbad — Jharia, Sindri, coal belt areas",
          "Jamshedpur — TISCO area, Adityapur",
          "Deoghar — यात्री और local patients",
          "Giridih, Ramgarh, Lohardaga, Gumla — district patients",
          "Bihar border districts — Aurangabad, Gaya से भी patients",
          "Chhattisgarh border areas से भी कुछ cases",
        ],
      },
      {
        heading: "Jharkhand के Specific Health Issues — Gastro Context",
        type: "text",
        content: "Dr. Akhilesh Yadav Jharkhand के specific GI health patterns note करते हैं: Hepatitis B prevalence: Jharkhand में national average से ज़्यादा — tattooing practices, unsterilized medical procedures, awareness कम। H. Pylori infection: water quality issues — piped water availability rural में कम है, contamination risk ज़्यादा। Alcohol-related liver disease: coal belt areas में common। Jaundice (Hepatitis A/E): monsoon में outbreaks — contaminated water। Colon cancer: urban population में increasing। Malnutrition-related GI issues: tribal areas में still prevalent।",
      },
      {
        heading: "Orchid Medical Centre — Jharkhand का Advanced GI Centre",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, HB Road, Ranchi को Jharkhand का advanced GI facility बना रहे हैं। Available procedures: Upper GI Endoscopy, Colonoscopy, ERCP (bile duct), EUS (Endoscopic Ultrasound), FibroScan (liver assessment), Liver Biopsy (ultrasound-guided)। Jharkhand से बाहर नहीं जाना पड़ता: routine endoscopy-colonoscopy — Orchid Ranchi में। ERCP — Orchid Ranchi में। EUS — Orchid Ranchi में। Liver cirrhosis management — Orchid Ranchi में। Advanced liver transplant evaluation — coordination से Kolkata/Delhi।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav का Mission — Jharkhand में GI Care",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Jharkhand के patients का एक बड़ा problem यह है कि specialist care के लिए Ranchi से बाहर जाना पड़ता था। मैं चाहता हूँ कि Orchid Medical Centre, Ranchi एक ऐसा center बने जहाँ से सिर्फ critical cases ही refer हों — बाकी सब यहाँ हो सके। Jharkhand के हर patient को world-class GI care मिलनी चाहिए।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Jharkhand में DM Gastroenterologist कितने हैं?",
        a: "Jharkhand में DM (Doctorate of Medicine) Gastroenterologists की संख्या बहुत limited है — statewide double digits में ही हैं। Dr. Akhilesh Yadav Ranchi के prominent DM Gastroenterologists में हैं Orchid Medical Centre में।",
      },
      {
        q: "क्या Jharkhand के patients को ERCP के लिए Ranchi आना पड़ता है?",
        a: "हाँ — ERCP (Endoscopic Retrograde Cholangiopancreatography) एक advanced procedure है जो Jharkhand में limited centers में available है। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav ERCP करते हैं। Bokaro, Dhanbad, Hazaribagh से patients Ranchi आते हैं।",
      },
      {
        q: "Jamshedpur या Bokaro से Ranchi कितने घंटे में पहुँचा जा सकता है?",
        a: "Jamshedpur से Ranchi: NH33 से ~3-3.5 घंटे (130 km)। Bokaro से: ~1.5-2 घंटे (75 km)। Hazaribagh से: ~1.5 घंटे (80 km)। Dhanbad से: ~2.5 घंटे (150 km)। Orchid Medical Centre HB Road Ranchi — city center में accessible location।",
      },
      {
        q: "क्या AIIMS Ranchi या Rajendra Institute में gastro care मिलती है?",
        a: "AIIMS Ranchi में gastroenterology department है — government facility, waiting time ज़्यादा हो सकता है। Rajendra Institute में भी। Private practice में Dr. Akhilesh Yadav Orchid Medical Centre में — faster appointment, personalized care, advanced procedures available। दोनों options का अपना role है।",
      },
    ],
  },

  {
    slug: "bokaro-mein-gastroenterologist",
    titleHi: "Bokaro में Gastroenterologist — Ranchi में Dr. Akhilesh Yadav",
    titleEn: "Gastroenterologist Near Bokaro — Dr. Akhilesh Yadav in Ranchi",
    excerptHi: "Bokaro से Ranchi में gastroenterologist: Dr. Akhilesh Yadav — Orchid Medical Centre. Bokaro के patients के लिए Ranchi में advanced GI care — 1.5 घंटे में।",
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
        heading: "Bokaro के Patients के लिए — Ranchi में सही GI Specialist",
        type: "text",
        content: "Bokaro Steel City — Jharkhand का industrial heart। HEC, SAIL, coal belt workers और उनके परिवार के लिए quality healthcare access एक challenge रहा है specialist care में। Bokaro से Ranchi: approximately 75 km, NH33 से 1.5-2 घंटे। Orchid Medical Centre, HB Road, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — Bokaro के patients के लिए advanced GI care provide करते हैं। Bokaro के General Hospital या local doctors से refer होकर भी patients आते हैं। Endoscopy, ERCP, EUS, colonoscopy — सब available है Ranchi में।",
      },
      {
        heading: "Bokaro के Patients Dr. Akhilesh Yadav को क्यों Choose करें",
        type: "list",
        content: "Bokaro से Ranchi journey justify करने के reasons:",
        list: [
          "DM Gastroenterology — highest GI qualification in India",
          "ERCP available — bile duct stones, pancreatitis cases के लिए",
          "EUS (Endoscopic Ultrasound) — pancreas, bile duct detailed imaging",
          "FibroScan — liver fibrosis non-invasive assessment",
          "One-stop GI center — multiple trips नहीं करनी पड़ती",
          "Hindi consultation — Jharkhand के patients का comfort",
          "Ranchi में reasonable cost vs Kolkata या Delhi",
          "Same day appointment availability — urgent cases में",
        ],
      },
      {
        heading: "Bokaro में Common GI Conditions — और Ranchi में Solution",
        type: "text",
        content: "Bokaro के steel plant workers और उनके families में कुछ GI conditions common हैं: Alcoholic Liver Disease: industrial area में alcohol consumption — liver cirrhosis common। Fatty Liver: sedentary jobs + high calorie diet — NAFLD prevalent। Peptic Ulcer: workplace stress + NSAID use (joint pain के लिए)। Jaundice: Bokaro में भी contaminated water issues — Hepatitis A/E। Colorectal screening: 45+ Bokaro के workers — colon cancer screening neglected। इन सब के लिए, Ranchi में Orchid Medical Centre एक visit में सही diagnosis और treatment plan मिलता है।",
      },
      {
        heading: "Bokaro से Ranchi — Travel Guide",
        type: "text",
        content: "Bokaro से Orchid Medical Centre, HB Road, Ranchi: Route: Bokaro → Ramgarh → Ranchi via NH33 — approximately 75 km। Time: 1.5-2 घंटे by car/cab। Train: Bokaro Steel City → Hatia (Ranchi) — regular trains available। Orchid Medical Centre HB Road Ranchi में Google Maps पर easily find हो जाता है। Appointment के लिए पहले call करें: +91 74919 25047 — same day या next day usually available। Morning appointment preferred — same day वापस Bokaro पहुँच सकते हैं।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav का संदेश Bokaro के Patients को",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Bokaro से बार-बार patients आते हैं — पहले refer से, अब directly। मुझे खुशी है कि Jharkhand के industrial area के patients Ranchi में सही care पा रहे हैं। ERCP जैसे procedures के लिए Kolkata या Delhi नहीं जाना पड़ता अब Bokaro के patients को — Ranchi में ही हो जाता है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Bokaro में कोई DM gastroenterologist है?",
        a: "Bokaro में currently DM Gastroenterologist की availability limited है। Bokaro General Hospital में GI services हैं, लेकिन advanced procedures के लिए Ranchi refer किया जाता है। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में — Bokaro patients के most accessible DM Gastroenterologist।",
      },
      {
        q: "Bokaro से Orchid Medical Centre कैसे पहुँचें?",
        a: "NH33 से Bokaro → Ramgarh → Ranchi — approximately 75 km, 1.5-2 घंटे। Google Maps पर 'Orchid Medical Centre HB Road Ranchi' search करें। Train भी option है — Bokaro Steel City station से Hatia या Ranchi station।",
      },
      {
        q: "क्या Bokaro के patients के लिए ambulance service available है?",
        a: "Emergency cases में 108 Jharkhand ambulance service Bokaro से Ranchi तक available है। Orchid Medical Centre से पहले call करें emergency में — +91 74919 25047 — proper preparation arrival से पहले ensure की जा सकती है।",
      },
      {
        q: "Colonoscopy के लिए Bokaro से Ranchi आना पड़ेगा क्या?",
        a: "हाँ — colonoscopy के लिए Orchid Medical Centre, Ranchi आना पड़ेगा। एक दिन की visit है typically — bowel prep घर पर (previous day), procedure Orchid में, same day या overnight stay। Dr. Akhilesh Yadav Bokaro के patients के लिए convenient scheduling करते हैं।",
      },
    ],
  },

  {
    slug: "jamshedpur-se-ranchi-gastroenterologist",
    titleHi: "Jamshedpur से Ranchi Gastroenterologist — Dr. Akhilesh Yadav | GI Care",
    titleEn: "Gastroenterologist Near Jamshedpur — Dr. Akhilesh Yadav in Ranchi",
    excerptHi: "Jamshedpur से Ranchi में gastroenterologist: Dr. Akhilesh Yadav — Orchid Medical Centre. Jamshedpur के patients के लिए Ranchi में DM level GI care।",
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
        heading: "Jamshedpur से Ranchi — कब Worth It है?",
        type: "text",
        content: "Jamshedpur — Tata Steel city, Adityapur industrial belt — Jharkhand का economic hub। Jamshedpur में कुछ gastroenterologists practice करते हैं, लेकिन advanced procedures (ERCP, EUS, FibroScan, advanced colonoscopy) के लिए Ranchi better equipped है। Jamshedpur से Ranchi: ~135 km, NH33 से 3-3.5 घंटे। Worth it conditions: ERCP need (bile duct stone, stricture)। EUS (pancreatic cysts, tumors)। Complex liver cases (cirrhosis management, FibroScan)। Colonoscopy with polypectomy (cancer screening)। Complicated IBD (Crohn's/Colitis) management।",
      },
      {
        heading: "Jamshedpur Patients में Common GI Issues",
        type: "list",
        content: "Jamshedpur के patients में Dr. Akhilesh Yadav frequently देखते हैं:",
        list: [
          "Gallstone disease — ERCP के लिए Ranchi referral common",
          "Alcoholic Liver Disease — Tata Steel और industrial workforce",
          "Fatty Liver (NAFLD) — sedentary jobs, Jamshedpur food culture",
          "Colorectal cancer screening — 45+ workers seeking quality screening",
          "Chronic Hepatitis B — Jharkhand-wide issue",
          "IBD (Crohn's, Colitis) — complex cases needing advanced evaluation",
          "Colon polyps — follow-up colonoscopy after abnormal findings elsewhere",
        ],
      },
      {
        heading: "Jamshedpur के Patients के लिए Ranchi vs Kolkata",
        type: "text",
        content: "Jamshedpur के patients के लिए traditionally GI treatment के options थे: local Jamshedpur hospitals या Kolkata (250+ km)। Ranchi (135 km) में Orchid Medical Centre के advantages: Kolkata से closer — 3-3.5 घंटे vs 5-6 घंटे। Comparable advanced facilities — ERCP, EUS, FibroScan। Hindi medium consultation — local language comfort। Reasonable pricing — metro city से कम। Dr. Akhilesh Yadav DM Gastroenterology — equivalent expertise। Same state — no state boundary hassles।",
      },
      {
        heading: "Jamshedpur से Ranchi — Practical Guide",
        type: "text",
        content: "Jamshedpur से Orchid Medical Centre, HB Road, Ranchi: Route: Jamshedpur → Gamharia → Chandil → Ramgarh → Ranchi via NH33 — ~135 km। Time: 3-3.5 घंटे by car। Train: Tatanagar Junction से multiple trains Hatia (Ranchi) — Shatabdi या other express available। Morning start करो — Ranchi पहुँचो, consultation करो, possibly same day procedures (endoscopy), वापस Jamshedpur evening। ERCP या larger procedures के लिए: advance appointment + possible 1 day stay Ranchi में। Contact: +91 74919 25047 पहले call करें — appointment confirm करें।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav का संदेश Jamshedpur के Patients को",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Jamshedpur से patients आते हैं — पहले hesitate करते हैं, लेकिन जब आ जाते हैं तो कहते हैं कि Kolkata नहीं जाना पड़ेगा अब। Ranchi में वो सब मिलता है जो चाहिए। Distance एक issue है, लेकिन एक बार आने के बाद ज़्यादातर cases एक visit में resolve हो जाते हैं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Jamshedpur में कोई ERCP facility है?",
        a: "Jamshedpur के कुछ hospitals में basic endoscopy है, लेकिन ERCP (advanced bile duct procedure) के लिए Ranchi या Kolkata refer किया जाता है। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में ERCP करते हैं — Jamshedpur से 3-3.5 घंटे।",
      },
      {
        q: "Tatanagar station से Orchid Medical Centre कैसे पहुँचें?",
        a: "Tatanagar (Jamshedpur) → Hatia Station (Ranchi) → Auto/Cab से Orchid Medical Centre HB Road। Alternatively, taxi/cab booking Jamshedpur से Ranchi direct available है।",
      },
      {
        q: "क्या एक ही दिन में Jamshedpur-Ranchi-Jamshedpur हो सकता है endoscopy के लिए?",
        a: "हाँ — endoscopy (OGD Scopy) के लिए: morning Jamshedpur से निकलो, 10 AM consultation Orchid Medical Centre, endoscopy afternoon, 1-2 घंटे recovery, evening वापस Jamshedpur। Advance appointment ज़रूर लो: +91 74919 25047।",
      },
      {
        q: "Liver cirrhosis के लिए Jamshedpur vs Ranchi vs Kolkata — कहाँ जाएं?",
        a: "Mild-moderate cirrhosis management: Ranchi में Dr. Akhilesh Yadav Orchid Medical Centre — adequate facilities। Advanced cirrhosis with complications needing liver transplant evaluation: Kolkata (Apollo, AMRI) या Delhi (AIIMS, Medanta)। Dr. Akhilesh Yadav assess करके सही referral देते हैं।",
      },
    ],
  },

  // ── BATCH 9: BLOGS 41–45 ─────────────────────────────────────────────────────

  {
    slug: "ranchi-mein-ibd-treatment",
    titleHi: "रांची में IBD Treatment — Crohn's & Colitis का इलाज | Dr. Akhilesh Yadav",
    titleEn: "IBD Treatment in Ranchi — Crohn's & Colitis | Dr. Akhilesh Yadav",
    excerptHi: "रांची में Inflammatory Bowel Disease (IBD) का advanced treatment: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Biologics और complete IBD management।",
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
        heading: "रांची में IBD — Diagnosis से Biologics तक",
        type: "text",
        content: "Inflammatory Bowel Disease (IBD) — Crohn's Disease और Ulcerative Colitis — India में बढ़ रही है और Jharkhand कोई exception नहीं है। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — Jharkhand के IBD patients के लिए comprehensive care देते हैं: diagnosis, induction therapy, maintenance, biologics और surgical coordination। एक dedicated IBD specialist की ज़रूरत यहाँ है क्योंकि IBD complex chronic condition है जिसमें lifelong monitoring और treatment adjustment लगती है।",
      },
      {
        heading: "IBD Diagnosis कैसे होती है रांची में",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में IBD diagnosis में करते हैं: Symptoms: recurrent diarrhea (often bloody), abdominal pain, weight loss, fatigue — 6+ हफ्ते। Blood tests: CBC (anemia), CRP/ESR (inflammation), albumin (nutrition)। Stool: fecal calprotectin (IBD vs IBS distinguish — single most useful non-invasive test), culture (infection rule out), C. diff। Colonoscopy with biopsy: gold standard — mucosal appearance + histology। MR Enterography: Crohn's में small bowel extent assess। Perianal MRI: perianal Crohn's में।",
      },
      {
        heading: "IBD Treatment Approach — Step Up Therapy",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में IBD treatment:",
        list: [
          "Mild UC: Mesalamine oral + rectal — first-line, effective 70-80%",
          "Moderate UC/Crohn's: Corticosteroids (induction) + Azathioprine (maintenance)",
          "Refractory/Severe: Biologics — Infliximab (anti-TNF), Adalimumab, Vedolizumab, Ustekinumab",
          "New: Small molecules — Tofacitinib (JAK inhibitor) for UC",
          "Nutrition: Exclusive Enteral Nutrition (EEN) — Crohn's children में mucosal healing",
          "Surgery referral: when medical therapy fails or complications",
          "Goal: mucosal healing (endoscopic remission) not just symptom control",
        ],
      },
      {
        heading: "Biologics — IBD में Game Changer",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में IBD में biologics prescribe करते हैं जब conventional therapy fail हो। Biologics — anti-TNF agents (Infliximab, Adalimumab), anti-integrins (Vedolizumab), anti-IL12/23 (Ustekinumab) — ये inflammation के specific pathways block करते हैं। India में biosimilars available हैं — original biologics से ज़्यादा affordable। Pre-biologic workup: TB test (IGRA या Mantoux), Hepatitis B status, chest X-ray। Monitoring: regular infusions (Infliximab IV) या subcutaneous injections (Adalimumab)। Dr. Akhilesh Yadav Ranchi के IBD patients को biologic selection, initiation और monitoring में guide करते हैं।",
      },
      {
        heading: "IBD में Long-Term Care — रांची के Patients के लिए",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में IBD long-term care में करते हैं: Regular follow-up: disease activity monitoring, medication adjustment। Surveillance colonoscopy: extensive UC में 8-10 साल के बाद annual — cancer risk। Nutrition assessment: IBD में malabsorption common — vitamin D, B12, iron, folate deficiency। Vaccination: IBD patients (immunosuppressed) में specific vaccines update करना। Mental health: IBD patients में depression/anxiety common — screen और refer। Flare management: rescue therapy plan — steroid taper protocol patients को देता हूँ।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — IBD",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'IBD में मैं patients को एक बात clearly कहता हूँ: medication बंद मत करो जब better लगता है। IBD chronic है — remission में भी maintenance therapy ज़रूरी है। Ranchi में मुझे खुशी है कि अब biologics available हैं reasonable cost पर — Jharkhand के patients को Delhi या Kolkata नहीं जाना पड़ता IBD management के लिए।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। IBD के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Fecal Calprotectin test कहाँ होता है Ranchi में?",
        a: "Fecal calprotectin test major diagnostic labs में available है — SRL, Thyrocare, Metropolis। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में test recommend करते हैं और sample collection guide करते हैं।",
      },
      {
        q: "IBD में TB से कैसे बचें (biologics start करते वक्त)?",
        a: "Biologics (anti-TNF) start करने से पहले latent TB screen करना mandatory है — IGRA blood test या Mantoux। Latent TB positive में: isoniazid prophylaxis 1 महीना पहले start करो, फिर biologic। Dr. Akhilesh Yadav Ranchi में यह protocol follow करते हैं।",
      },
      {
        q: "क्या IBD में pregnancy safe है?",
        a: "Remission में pregnancy safer होती है। Active disease में: miscarriage, premature birth risk बढ़ता है। Mesalamine pregnancy safe। Azathioprine — risk-benefit discussion। Biologics (Infliximab, Adalimumab) — often pregnancy में continue की जाती हैं अगर ज़रूरी हो। Dr. Akhilesh Yadav Ranchi में pre-pregnancy counseling करते हैं।",
      },
      {
        q: "IBD और IBS simultaneously हो सकता है?",
        a: "हाँ — IBD remission में भी IBS-like symptoms हो सकते हैं (IBS-IBD overlap)। Fecal calprotectin + colonoscopy से differentiate होता है active IBD vs IBS। Treatment अलग होती है। Dr. Akhilesh Yadav Ranchi में यह distinction करते हैं।",
      },
    ],
  },

  {
    slug: "swallowing-problem-ranchi",
    titleHi: "Swallowing Problem Ranchi — निगलने में तकलीफ | Dr. Akhilesh Yadav",
    titleEn: "Swallowing Problem (Dysphagia) in Ranchi — Diagnosis & Treatment | Dr. Akhilesh Yadav",
    excerptHi: "रांची में निगलने में तकलीफ (dysphagia) के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Endoscopy से सही diagnosis और treatment।",
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
        heading: "निगलने में तकलीफ — कभी Ignore मत करें",
        type: "text",
        content: "Dhanbad से आए 62 साल के Ramesh ji — 3 महीने से solid food निगलते वक्त रुका-रुका लगता है। Weight 5 kg घट गया। 'बुढ़ापे में होता है' सोच के ignore किया। Orchid Medical Centre, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने urgently endoscopy की। मिला: esophageal stricture (benign) — chronic acid damage से। Endoscopic dilation (stretching) से significant improvement। Swallowing difficulty (dysphagia) एक ALARM symptom है — कभी ignore मत करें। इसमें से कुछ cases early cancer भी निकलता है।",
      },
      {
        heading: "Dysphagia के कारण — GI से Neurological तक",
        type: "list",
        content: "निगलने की तकलीफ के causes:",
        list: [
          "Esophageal Stricture (benign): chronic GERD acid damage से food pipe narrowing",
          "Esophageal Cancer: progressive dysphagia (पहले solids, फिर liquids) + weight loss — ALARM",
          "Achalasia Cardia: food pipe की muscle dysfunction — food pass नहीं होती",
          "Esophageal Rings/Webs: congenital या acquired narrowings",
          "Eosinophilic Esophagitis: immune-mediated — food bolus stuck होता है",
          "Zenker's Diverticulum: pharyngeal pouch में food collect होता है",
          "Neurological: stroke, Parkinson's, MND — swallowing muscle control affected",
        ],
      },
      {
        heading: "Endoscopy — Dysphagia का Primary Investigation",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में dysphagia के लिए urgently endoscopy recommend करते हैं। Endoscopy (OGD Scopy) से: Food pipe का direct visualization। Stricture, mass, inflammation clearly दिखता है। Biopsy — malignancy rule out। Achalasia: barium swallow + manometry से better diagnosed। Barium swallow / esophagogram: structural problems outline देता है — Dr. Akhilesh Yadav refer करते हैं। Esophageal Manometry: motility disorders assess करने के लिए (achalasia, diffuse esophageal spasm)।",
      },
      {
        heading: "Dysphagia का Treatment — Endoscopic से Surgical तक",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में dysphagia treatment में करते हैं: Benign Stricture: Endoscopic Dilation (bougie या balloon) — stricture को stretch करते हैं। Multiple sessions may be needed। Achalasia: Pneumatic Dilation या POEM (Per-Oral Endoscopic Myotomy — advanced procedure)। Surgery: Heller Myotomy। Esophageal Cancer: oncology team referral — staging के हिसाब से chemotherapy/radiation/surgery। Eosinophilic Esophagitis: steroids (swallowed budesonide), proton pump inhibitors, food trigger elimination। GERD-related stricture: PPI + dilation।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Dysphagia",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Dysphagia एक alarm symptom है — 2 हफ्ते से ज़्यादा हो तो endoscopy ज़रूर। Ranchi में मैं देखता हूँ कि patients महीनों तक निगलने की तकलीफ के साथ रहते हैं सोचके कि बुढ़ापा है या खाना solid है। यह गलत है। Early diagnosis में benign conditions easily treat होती हैं, और cancer early stage में मिलता है तो outcomes better होते हैं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Dysphagia के लिए urgently doctor से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Achalasia Cardia क्या है और कैसे treat होती है?",
        a: "Achalasia में esophagus की lower muscle (LES) relax नहीं करती — food stomach में नहीं जाता। Regurgitation, weight loss, chest pain common। Treatment: Pneumatic balloon dilation या POEM (advanced endoscopic procedure) या Heller Myotomy। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में achalasia diagnose करते हैं और appropriate treatment/referral देते हैं।",
      },
      {
        q: "Solid food खाने में रुक-रुक लगता है — क्या करें?",
        a: "यह esophageal stricture, ring, या cancer का sign हो सकता है। Urgently endoscopy करवाएं। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में urgently evaluate करते हैं — एक हफ्ते के अंदर appointment try करते हैं ऐसे symptoms के लिए।",
      },
      {
        q: "क्या गुनगुना पानी पीने से dysphagia ठीक होती है?",
        a: "कुछ motility disorders (like diffuse esophageal spasm) में warm liquids temporarily better लगता है। लेकिन यह cause treat नहीं करता। Endoscopy से cause पता करो — फिर appropriate treatment। घर पर manage करने की कोशिश में delay से serious conditions miss हो सकती हैं।",
      },
      {
        q: "क्या neurological dysphagia में GI doctor help कर सकता है?",
        a: "Neurological dysphagia (stroke, Parkinson's) में primary treatment neurologist और speech therapist handle करते हैं। GI doctor की role: aspiration related complications manage करना, PEG tube placement (जब required) — Dr. Akhilesh Yadav Ranchi में coordinate करते हैं।",
      },
    ],
  },

  {
    slug: "rectal-bleeding-ranchi",
    titleHi: "Rectal Bleeding Ranchi — Toilet में Blood का Doctor | Dr. Akhilesh Yadav",
    titleEn: "Rectal Bleeding in Ranchi — Blood in Stool Specialist | Dr. Akhilesh Yadav",
    excerptHi: "रांची में rectal bleeding (toilet में blood) के specialist: Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre. Causes, diagnosis और treatment guide।",
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
        heading: "Toilet में Blood — कभी भी Ignore मत करें",
        type: "text",
        content: "Ranchi के Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — कहते हैं: 'Toilet में blood देखना — चाहे थोड़ा सा हो — doctor को दिखाओ, ignore मत करो।' बहुत से patients सोचते हैं 'piles है, ठीक हो जाएगा' और months तक wait करते हैं। 40+ age में rectal bleeding में colonoscopy ज़रूरी है — colon polyp या early cancer miss हो सकता है। Piles और colon cancer दोनों में rectal bleeding होती है — differentiate करना एक gastroenterologist का काम है।",
      },
      {
        heading: "Rectal Bleeding के Causes — Simple से Serious",
        type: "list",
        content: "Rectal bleeding (hematochezia) के causes:",
        list: [
          "Hemorrhoids (Piles): most common — bright red blood on toilet paper या bowl",
          "Anal Fissure: tear in anal lining — blood + severe pain on defecation",
          "Diverticular Bleeding: colon diverticula से sudden painless large bleed — 50+ age",
          "Inflammatory Bowel Disease (UC, Crohn's): blood + mucus + diarrhea",
          "Colon Polyps: larger polyps कभी-कभी bleed करते हैं",
          "Colorectal Cancer: blood mixed with stool, change in bowel habit, weight loss",
          "Infectious Colitis: bloody diarrhea + fever (Salmonella, Shigella, E. coli O157)",
          "Upper GI Bleeding (melena): काला stool — not bright red typically",
        ],
      },
      {
        heading: "Rectal Bleeding की Investigation — कब क्या",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में rectal bleeding assessment में करते हैं: History: color (bright red vs maroon vs dark), amount, with stool or separate, associated symptoms। Age: 40+ में always colonoscopy। Proctoscopy/Anoscopy: hemorrhoids, fissure quickly diagnose। Colonoscopy: complete colon visualization — polyps, cancer, IBD, diverticular bleeding। Stool tests: culture (infectious cause), calprotectin (IBD)। Blood tests: CBC (anemia level), coagulation। Urgent colonoscopy: massive rectal bleeding में — after hemodynamic stabilization।",
      },
      {
        heading: "Rectal Bleeding का Treatment — Cause-Specific",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi में rectal bleeding treatment cause के हिसाब से करते हैं: Hemorrhoids: Grade 1-2 — diet + RBL (OPD)। Grade 3-4 — surgical options। Anal Fissure: topical nitrates/calcium channel blockers + stool softeners। Severe/chronic — sphincterotomy। Polyps: colonoscopic polypectomy — same sitting में। IBD: mesalamine, steroids — UC/Crohn's protocol। Infectious Colitis: appropriate antibiotics। Colorectal Cancer: surgical oncology + oncology team referral। Diverticular Bleeding: mostly self-limiting — angiographic embolization या surgery अगर persistent।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Rectal Bleeding",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में मैं बार-बार देखता हूँ — patient की colonoscopy होती है जो आया था 'piles' के लिए — और polyp मिलता है, या early colitis। अगर वो 2-3 महीने और wait करता तो क्या होता? Rectal bleeding = colonoscopy, खास करके 40+। यह rule है, exception नहीं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Rectal bleeding के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या piles में colonoscopy ज़रूर है?",
        a: "40+ age में rectal bleeding में हाँ — colonoscopy ज़रूरी है चाहे piles obvious हो। Piles और colon cancer simultaneously हो सकता है। Under 40 में typical hemorrhoid presentation में proctoscopy से start होती है, colonoscopy अगर red flags हैं। Dr. Akhilesh Yadav Ranchi में case-by-case decide करते हैं।",
      },
      {
        q: "Anal fissure में कितना दर्द होता है?",
        a: "Anal fissure में defecation के वक्त और बाद में severe burning/cutting pain होती है — burning sensation hours तक रह सकता है। Blood: bright red, small amount। Constipation से worse होता है। Dr. Akhilesh Yadav Ranchi में fissure treat करते हैं — topical medications पहले, refractory cases में procedure।",
      },
      {
        q: "Diverticular disease क्या है?",
        a: "Colon में small pouches (diverticula) बनती हैं — low fiber diet, aging, constipation। ज़्यादातर asymptomatic। Diverticulitis: infection/inflammation — left lower pain, fever। Diverticular bleed: painless large bright red bleed — 50+ में। Dr. Akhilesh Yadav Ranchi में colonoscopy से diagnose करते हैं।",
      },
      {
        q: "Blood loss से anemia हो सकती है?",
        a: "हाँ — chronic small rectal bleeding (like hemorrhoids, polyps) से iron deficiency anemia हो सकती है — gradually। Unexplained iron deficiency anemia में colonoscopy ज़रूरी है bleeding source find करने के लिए। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में anemia workup में colonoscopy include करते हैं ज़रूरी होने पर।",
      },
    ],
  },

  {
    slug: "unexplained-weight-loss-ranchi",
    titleHi: "Unexplained Weight Loss Ranchi — बिना वजह वज़न घटना | Dr. Akhilesh Yadav",
    titleEn: "Unexplained Weight Loss in Ranchi — GI Causes & Specialist | Dr. Akhilesh Yadav",
    excerptHi: "रांची में बिना वजह वज़न घटना (unexplained weight loss) के GI specialist: Dr. Akhilesh Yadav — Orchid Medical Centre. Alarm symptom की complete investigation guide।",
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
        heading: "⚠️ बिना वजह वज़न घटना — ALARM Symptom",
        type: "warning",
        content: "अगर 6 महीने में बिना diet change या exercise के 5% से ज़्यादा वज़न घट गया हो — यह medical evaluation का indication है। Ranchi के Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — कहते हैं: 'Unexplained weight loss top alarm symptoms में है। यह GI cancer का sign हो सकता है, या thyroid problem, या malabsorption। कभी भी wait मत करो।'\n\nDr. Akhilesh Yadav या अपने doctor से ज़रूर मिलें अगर unexplained weight loss हो रहा है।",
      },
      {
        heading: "GI Causes of Unexplained Weight Loss",
        type: "list",
        content: "Unexplained weight loss के GI-related causes:",
        list: [
          "Esophageal Cancer: dysphagia + weight loss — ALARM",
          "Gastric Cancer: early satiety + weight loss + upper abdominal pain",
          "Colon/Rectal Cancer: change in bowel habit + blood + weight loss",
          "Pancreatic Cancer: weight loss + jaundice + upper abdominal pain",
          "Celiac Disease: gluten malabsorption — diarrhea + weight loss",
          "IBD (Crohn's, Colitis): active disease में weight loss prominent",
          "SIBO (Small Intestinal Bacterial Overgrowth): malabsorption",
          "Chronic Pancreatitis: exocrine insufficiency — fat malabsorption, weight loss",
        ],
      },
      {
        heading: "Non-GI Causes — Gastroenterologist का Role Rule-Out में",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में unexplained weight loss में GI workup करते हैं लेकिन non-GI causes भी ध्यान में रखते हैं: Diabetes (uncontrolled): glucose loss में weight loss। Hyperthyroidism: metabolism fast — weight loss। Tuberculosis: systemic wasting। Cancer anywhere: paraneoplastic weight loss। Depression: appetite loss। HIV/AIDS: wasting। Renal failure: chronic। अगर GI cause नहीं मिला — appropriate specialist refer करते हैं। Complete workup ensure करता है कि cause miss न हो।",
      },
      {
        heading: "Workup — Dr. Akhilesh Yadav का Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में unexplained weight loss workup में करते हैं: History: rate of loss, diet changes, associated symptoms। Blood tests: CBC, LFT, RFT, TSH, blood sugar, ESR, LDH, CA19-9 (pancreatic marker), CEA (colorectal marker)। Stool: occult blood, fat (steatorrhea), calprotectin। Imaging: chest X-ray, CT scan abdomen+pelvis (most important — masses, lymphadenopathy)। Upper GI Endoscopy: esophageal, gastric, duodenal pathology। Colonoscopy: colorectal cancer, polyps। Additional: PET scan (malignancy staging), bone marrow (hematological causes) if needed।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Weight Loss",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में patients खुश होते हैं जब बिना कोशिश के वज़न घटता है — 'पहले से fit हो गया।' यह एक concerning mindset है। बिना effort के weight loss investigation का indication है। हाँ, thyroid या diabetes भी हो सकता है — लेकिन cancer rule out करना ज़रूरी है पहले। Early detection में outcomes बहुत better होते हैं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Unexplained weight loss के लिए urgently doctor से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "कितना weight loss 'concerning' माना जाता है?",
        a: "6 महीने में 5% या ज़्यादा involuntary weight loss — concerning। 65 kg के व्यक्ति में: 3.25 kg in 6 months without trying। Elderly में lower threshold। Dr. Akhilesh Yadav Ranchi में standard criteria use करते हैं assessment में।",
      },
      {
        q: "Weight loss में पहले कौन सा doctor दिखाएं?",
        a: "GI symptoms (diarrhea, abdominal pain, dysphagia, rectal bleeding) के साथ — directly gastroenterologist। GI symptoms नहीं — general physician या internal medicine specialist। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में comprehensive workup करते हैं GI angle से।",
      },
      {
        q: "CT scan या PET scan — कब choose करें?",
        a: "CT abdomen/pelvis first step — most malignancies detect होती हैं। PET scan: known malignancy में staging या occult malignancy search में जब CT inconclusive। PET scan is expensive — targeted use में ज़्यादा value। Dr. Akhilesh Yadav appropriate imaging recommend करते हैं।",
      },
      {
        q: "Celiac disease में weight loss क्यों होता है?",
        a: "Celiac में gluten से small intestine की villi damage होती है — absorption impaired। Fat, protein, carbs — सब malabsorb होते हैं — weight loss। Anti-tTG antibody test + small bowel biopsy से diagnose। Gluten-free diet से villi heal होती है और weight normalize होता है। Dr. Akhilesh Yadav Ranchi में celiac diagnose करते हैं।",
      },
    ],
  },

  {
    slug: "liver-cirrhosis-ranchi",
    titleHi: "Liver Cirrhosis Ranchi — Cirrhosis का इलाज | Dr. Akhilesh Yadav",
    titleEn: "Liver Cirrhosis Treatment in Ranchi — Expert Hepatology | Dr. Akhilesh Yadav",
    excerptHi: "रांची में liver cirrhosis का इलाज: Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre. Ascites, varices, encephalopathy का complete management।",
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
        heading: "Liver Cirrhosis — रांची में बढ़ता Burden",
        type: "text",
        content: "Jharkhand में liver cirrhosis के cases बढ़ रहे हैं — alcoholic liver disease, Hepatitis B, NASH — तीन major causes। Orchid Medical Centre Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology & Hepatology — cirrhosis के complex cases manage करते हैं। Cirrhosis में liver का normal tissue scar tissue (fibrosis) से replace हो जाता है — function धीरे-धीरे खत्म होता जाता है। लेकिन early diagnosis और सही management से cirrhosis की progression रोकना और complications manage करना possible है।",
      },
      {
        heading: "Cirrhosis के Stages — Child-Pugh और MELD",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में cirrhosis severity score करते हैं: Child-Pugh Score: A (5-6 points, compensated), B (7-9), C (10-15, decompensated)। Parameters: bilirubin, albumin, PT-INR, ascites, encephalopathy। MELD Score (Model for End-stage Liver Disease): bilirubin + creatinine + INR — 3-month mortality predict करता है, transplant listing के लिए use होता है। Compensated Cirrhosis: कोई major symptoms नहीं — strict monitoring, alcohol बंद, cause treat करो। Decompensated: ascites, variceal bleed, encephalopathy — intensive management।",
      },
      {
        heading: "Cirrhosis Complications — Management",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi में cirrhosis complications manage करते हैं:",
        list: [
          "Ascites: Spironolactone/furosemide (diuretics)। Salt restriction (<2g/day)। Large volume paracentesis (पानी निकालना) + albumin infusion",
          "Spontaneous Bacterial Peritonitis (SBP): ascites fluid में infection — urgently IV antibiotics",
          "Esophageal Varices: endoscopic banding (EVL) prophylaxis/treatment। Non-selective beta-blockers (carvedilol/propranolol) — primary prophylaxis",
          "Variceal Bleeding: emergency banding + terlipressin (IV)। TIPS procedure अगर refractory",
          "Hepatic Encephalopathy: lactulose (3-4 soft stools/day), rifaximin, low protein triggers avoid",
          "Hepatorenal Syndrome: terlipressin + albumin। Dialysis bridge। Transplant",
          "Hepatocellular Carcinoma (HCC): 6-monthly AFP + ultrasound surveillance",
        ],
      },
      {
        heading: "Cirrhosis में Diet — Dr. Akhilesh Yadav का Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में cirrhosis diet clearly guide करते हैं: Protein: maintain करें — 1.2-1.5 g/kg/day (muscle preserve करना ज़रूरी है)। Old 'protein restrict करो' advice outdated है — सिर्फ overt encephalopathy में temporary restrict। Salt (Sodium): अगर ascites है — <2g/day (low sodium diet)। ज़्यादा नमक = ज़्यादा पानी। Alcohol: बिल्कुल नहीं — even एक drop। Vitamins: Vitamin D, B12, zinc — deficiencies common, supplement करो। Small frequent meals: hypoglycemia risk कम करता है cirrhosis में। Ranchi के local safe foods: plain rice, moong dal soup, छाछ (low-fat), banana, papaya।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Cirrhosis",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Cirrhosis में मैं patients को तीन चीज़ें clearly कहता हूँ: पहला — alcohol बंद, एक drop भी नहीं। दूसरा — salt कम करो अगर ascites है। तीसरा — regular follow-up — 3 महीने में LFT, 6 महीने में AFP + ultrasound। Ranchi में मैं देख रहा हूँ कि जो patients follow-up करते हैं उनका outcome बहुत better होता है उनके comparison में जो एक बार treatment ले के गायब हो जाते हैं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology & Hepatology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Cirrhosis के लिए hepatologist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या cirrhosis reversible है?",
        a: "Early fibrosis (F2-F3) reversible हो सकता है अगर cause remove करें — Hepatitis C cure (DAA), alcohol abstinence, weight loss (NASH)। Advanced cirrhosis (F4) का scarring fully reverse नहीं होता, लेकिन progression रोक सकते हैं। Dr. Akhilesh Yadav FibroScan से stage assess करते हैं Orchid Medical Centre Ranchi में।",
      },
      {
        q: "पेट में पानी (ascites) बार-बार क्यों आता है?",
        a: "Ascites portal hypertension + low albumin से होता है cirrhosis में। Diuretics से manage होता है — लेकिन cause (cirrhosis) नहीं treat होता। Regular diuretics + salt restriction से recurrence कम होता है। बार-बार paracentesis की ज़रूरत है तो TIPS procedure consider होता है। Dr. Akhilesh Yadav Ranchi में ascites management करते हैं।",
      },
      {
        q: "Esophageal varices क्या हैं और कैसे रोकें?",
        a: "Portal hypertension में esophagus की veins dilated होती हैं — varices। Ruptured varices: massive upper GI bleed — life-threatening। Primary prophylaxis: non-selective beta-blockers (carvedilol) या endoscopic banding। Diagnosis: endoscopy से। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में variceal screening और banding करते हैं।",
      },
      {
        q: "Liver transplant के लिए कहाँ जाएं?",
        a: "Liver transplant के लिए major centers: AIIMS New Delhi, Medanta Gurugram, Apollo Chennai, AMRI Kolkata। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi से pre-transplant evaluation, MELD scoring, और appropriate center referral coordinate करते हैं। Post-transplant follow-up भी Ranchi में possible है।",
      },
    ],
  },

  // ── BATCH 10: BLOGS 46–50 ─────────────────────────────────────────────────────

  {
    slug: "endoscopy-clinic-ranchi",
    titleHi: "Endoscopy Clinic Ranchi — Best OGD Scopy Centre | Dr. Akhilesh Yadav",
    titleEn: "Best Endoscopy Clinic in Ranchi — OGD Scopy Centre | Dr. Akhilesh Yadav",
    excerptHi: "रांची में best endoscopy clinic: Orchid Medical Centre — Dr. Akhilesh Yadav — DM Gastroenterology. HD endoscopy, sedation, same-day results. OGD Scopy Ranchi।",
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
        heading: "रांची में Endoscopy Clinic — सही Centre कैसे Choose करें",
        type: "text",
        content: "Ranchi में endoscopy कई जगहों पर होती है — लेकिन quality, equipment, और doctor की expertise में फर्क होता है। Orchid Medical Centre, HB Road, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — advanced endoscopy facility देते हैं। Importance: endoscopy scope की quality, endoscopist की experience, sedation facility — ये सब मिलकर ensure करते हैं कि procedure accurate, comfortable और safe हो। Jharkhand के patients के लिए Orchid Medical Centre एक trusted choice बन गई है।",
      },
      {
        heading: "Orchid Medical Centre Endoscopy — क्या मिलता है",
        type: "list",
        content: "Orchid Medical Centre Ranchi में endoscopy facility:",
        list: [
          "High-Definition (HD) Video Endoscope — clear visualization",
          "Dedicated endoscopy suite — clean, sterile environment",
          "IV Sedation (conscious sedation) — comfortable, virtually painless",
          "Dr. Akhilesh Yadav — DM Gastroenterology — expert endoscopist",
          "Same-day procedure और results — report same day",
          "Therapeutic endoscopy: biopsy, H. Pylori test, polyp removal, bleeding control",
          "Upper GI + Lower GI (Colonoscopy) — same location",
          "ERCP और EUS — advanced procedures also available",
        ],
      },
      {
        heading: "Endoscopy से क्या Diagnose होता है — Complete Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में endoscopy से ये conditions diagnose और treat करते हैं: Esophagus: GERD, esophagitis, Barrett's Esophagus, stricture, achalasia, esophageal cancer early stage। Stomach: gastritis, peptic ulcer, H. Pylori infection, gastric polyps, gastric cancer। Duodenum: duodenal ulcer, celiac disease (biopsy from duodenum), duodenitis। Therapeutic: bleeding control (injection, thermal, clips), polyp removal (esophageal/gastric), stent placement, esophageal dilation। Advanced: Chromoendoscopy, NBI (Narrow Band Imaging) — subtle lesion detection।",
      },
      {
        heading: "Endoscopy Appointment — Ranchi में कैसे Book करें",
        type: "text",
        content: "Orchid Medical Centre Ranchi में endoscopy appointment के लिए: Call: +91 74919 25047 (Mon–Sat: 10 AM–2 PM, 5 PM–8 PM)। WhatsApp: +91 74919 25047। What to tell: symptoms, duration, previous endoscopy reports (अगर हैं)। Preparation instructions मिलेंगी: NPO timing, medication instructions। Urgent cases: same day या next day typically available। Pre-procedure: blood tests (अगर required — anticoagulants, platelet issues)। Insurance: most health insurance covers endoscopy — cashless facility available for select insurers।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Endoscopy Clinic",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Endoscopy clinic choose करते वक्त सिर्फ cost मत देखो — doctor की qualification और scope quality भी matter करती है। HD endoscope से subtle changes दिखती हैं जो standard scope में miss हो जाती हैं। Ranchi में Orchid Medical Centre में मैं ensure करता हूँ कि हर endoscopy properly done हो — चाहे diagnostic हो या therapeutic।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या endoscopy में scope sterilize होता है?",
        a: "हाँ — modern endoscopes reprocessing (cleaning + high-level disinfection या sterilization) से गुज़रते हैं हर patient के बाद। Orchid Medical Centre Ranchi में standard protocols follow होते हैं। If unsure, पूछने में शर्म नहीं — यह valid question है।",
      },
      {
        q: "क्या endoscopy और colonoscopy same दिन हो सकती हैं?",
        a: "हाँ — एक ही sedation session में upper + lower endoscopy possible है ('bidirectional endoscopy')। Bowel prep colonoscopy के लिए करनी पड़ती है। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में यह combined procedure करते हैं अगर ज़रूरी हो।",
      },
      {
        q: "Endoscopy report कितना detailed होता है Orchid Medical Centre में?",
        a: "Orchid Medical Centre में Dr. Akhilesh Yadav का endoscopy report same-day दिखाया जाता है — patient को clearly explain करते हैं क्या मिला। Written report भी मिलता है। Biopsy results: 5-7 दिन pathology से। Follow-up plan भी discuss होता है।",
      },
      {
        q: "क्या endoscopy के लिए कोई age restriction है?",
        a: "कोई strict age limit नहीं है — infants से elderly तक endoscopy safe है appropriate sedation के साथ। Elderly में sedation dose adjust होता है। Dr. Akhilesh Yadav appropriate sedation protocol use करते हैं Orchid Medical Centre Ranchi में।",
      },
    ],
  },

  {
    slug: "ranchi-mein-ercp-cost",
    titleHi: "रांची में ERCP Cost — Bile Duct Procedure का खर्चा | Dr. Akhilesh Yadav",
    titleEn: "ERCP Cost in Ranchi — Bile Duct Procedure Price | Dr. Akhilesh Yadav",
    excerptHi: "रांची में ERCP (Endoscopic Retrograde Cholangiopancreatography) का खर्चा: Dr. Akhilesh Yadav — Orchid Medical Centre. Bile duct stones, stenting — complete guide और cost।",
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
        heading: "ERCP क्या है — और रांची में क्यों एक बड़ी बात है",
        type: "text",
        content: "Deoghar से आए 58 साल के Ramji Lal ji — gallstone-induced pancreatitis के बाद bile duct में stone फंसा रहा था। Jaundice और pain continue कर रहा था। Previously Patna refer किया गया था — खानदान के लिए मुश्किल था। Orchid Medical Centre Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — ने ERCP करके bile duct stone निकाल दिया। Ranchi में ERCP available होना Jharkhand के patients के लिए एक बड़ी बात है — पहले Kolkata या Patna जाना पड़ता था।",
      },
      {
        heading: "ERCP कब ज़रूरी होती है?",
        type: "list",
        content: "ERCP (Endoscopic Retrograde Cholangiopancreatography) ज़रूरी है जब:",
        list: [
          "Bile duct में stone (choledocholithiasis) — obstructive jaundice, cholangitis",
          "Acute Cholangitis (bile duct infection) — emergency ERCP",
          "Post-cholecystectomy bile leak — stent से seal करना",
          "Biliary stricture — benign या malignant",
          "Pancreatic duct stone या stricture",
          "Pancreatic pseudocyst drainage (EUS-guided)",
          "Pre-operative bile duct stone removal before gallbladder surgery",
          "Sphincterotomy (bile duct opening widening) for stone clearance",
        ],
      },
      {
        heading: "ERCP Cost Ranchi — Orchid Medical Centre",
        type: "text",
        content: "ERCP एक advanced procedure है — cost basic endoscopy से ज़्यादा होती है। Orchid Medical Centre, Ranchi में ERCP cost Jharkhand के competitive pricing में है — Patna या Kolkata से travel + hotel + procedure cost से ज़्यादातर कम आता है। What determines cost: diagnostic ERCP vs therapeutic (stone removal, stenting)। Number of procedures in one session। Anesthesia (ERCP में deeper sedation typically)। Duration और complexity। Insurance: major health insurance plans में ERCP covered होती है — cashless facility available होती है। Exact current pricing के लिए: +91 74919 25047 — transparent pricing, कोई hidden charges नहीं।",
      },
      {
        heading: "ERCP Procedure — क्या Expect करें",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में ERCP के लिए patient preparation करते हैं: Pre-ERCP: blood tests (coagulation, LFT), NPO 6-8 घंटे। Antibiotics अगर cholangitis हो। Sedation: deeper conscious sedation या short general anesthesia — anesthesiologist present। Scope: side-viewing duodenoscope through mouth → duodenum → bile duct cannulation। What done: stone removal (sphincterotomy + basket/balloon), stent placement, brush cytology। Duration: 30-60 minute। Post-ERCP: 4-6 घंटे observation। Possible post-ERCP pancreatitis (3-5% risk) — Dr. Akhilesh Yadav monitor करते हैं।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — ERCP",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'ERCP एक complex procedure है — इसलिए experience matter करता है। मैं चाहता हूँ कि Jharkhand के patients को ERCP के लिए बाहर नहीं जाना पड़े। Orchid Medical Centre Ranchi में मैं regular ERCP करता हूँ — bile duct stones, stenting, post-op bile leaks — सब conditions treat होती हैं यहाँ।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। ERCP के लिए experienced gastroenterologist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "ERCP के बाद कितने दिन hospital में रहना पड़ता है?",
        a: "Uncomplicated ERCP: same day या next day discharge। Cholangitis (infection) या complex cases: 2-3 दिन observation। Post-ERCP pancreatitis में: longer stay required। Dr. Akhilesh Yadav Ranchi में case complexity के हिसाब से hospitalization plan करते हैं।",
      },
      {
        q: "ERCP के बाद क्या खाएं?",
        a: "Procedure के बाद: liquid diet start (नींबू पानी, clear soup)। अगले दिन: bland soft diet (खिचड़ी, plain दाल soup)। 2-3 दिन में: normal low-fat diet। Avoid: oily/fatty food 1-2 हफ्ते। Dr. Akhilesh Yadav discharge पर detailed instructions देते हैं।",
      },
      {
        q: "क्या ERCP से pancreatitis हो सकती है?",
        a: "Post-ERCP pancreatitis (PEP) — 3-5% risk, most cases mild। High-risk patients में indomethacin suppository (pre-procedure) और adequate hydration से risk reduce होता है। Dr. Akhilesh Yadav Ranchi में preventive measures use करते हैं। Post-ERCP abdominal pain बढ़े तो immediately contact करें।",
      },
      {
        q: "क्या ERCP के बाद gallbladder निकालना ज़रूरी है?",
        a: "Gallstone में (bile duct + gallbladder stones): ERCP से bile duct clear, फिर laparoscopic cholecystectomy (gallbladder removal)। दोनों अलग procedures हैं। Dr. Akhilesh Yadav ERCP करते हैं, surgical team gallbladder removal करते हैं — Ranchi में coordinate होता है।",
      },
    ],
  },

  {
    slug: "ranchi-mein-eus-test",
    titleHi: "रांची में EUS Test — Endoscopic Ultrasound क्या है | Dr. Akhilesh Yadav",
    titleEn: "EUS Test in Ranchi — Endoscopic Ultrasound Explained | Dr. Akhilesh Yadav",
    excerptHi: "रांची में EUS (Endoscopic Ultrasound) test: Dr. Akhilesh Yadav — Orchid Medical Centre. Pancreas, bile duct, submucosal tumors की best imaging — कब और क्यों ज़रूरी है।",
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
        heading: "EUS Test क्या है — और Regular Ultrasound से Better क्यों",
        type: "text",
        content: "Ranchi के कई patients CT scan और regular ultrasound के बाद भी unresolved diagnosis लेकर Orchid Medical Centre आते हैं। Dr. Akhilesh Yadav — DM Gastroenterology — EUS से वह details reveal करते हैं जो बाकी tests से miss हो जाते हैं। EUS = endoscope + ultrasound probe का combination। Probe GI tract के अंदर से imaging करता है — bowel gas interference नहीं। Pancreas, bile duct, gallbladder — जो regular ultrasound में clearly नहीं दिखते — EUS में crystal clear होते हैं। Orchid Medical Centre, HB Road, Ranchi में EUS available है — Jharkhand के limited centers में से एक।",
      },
      {
        heading: "EUS किस Condition में Recommend होती है?",
        type: "list",
        content: "EUS इन conditions में ज़रूरी होती है:",
        list: [
          "Pancreatic mass या cyst — CT के बाद characterization, FNA for tissue",
          "Suspected bile duct stones — CT/MRCP inconclusive",
          "Chronic Pancreatitis — pancreatic duct detail assessment",
          "Esophageal cancer staging — T और N staging pre-operatively",
          "Gastric cancer staging — lymph node assessment",
          "Submucosal GI tumors (GIST, carcinoid, lipoma) — layer identification",
          "Gallbladder polyps >1cm — malignancy risk",
          "Mediastinal lymphadenopathy — sampling via EUS-FNA",
        ],
      },
      {
        heading: "EUS-FNA/FNB — Biopsy बिना Surgery के",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में EUS-guided Fine Needle Aspiration (FNA) या Fine Needle Biopsy (FNB) करते हैं। एक needle EUS scope के अंदर होती है — real-time ultrasound guidance में target (pancreatic mass, lymph node) में डाली जाती है। Tissue sample मिलता है — pathology में cancer diagnose या rule out होता है। Advantages: बिना surgery के tissue diagnosis। Accurate — 85-95% diagnostic yield। Avoid CT-guided percutaneous biopsy (which can be harder for pancreas)। Ranchi में EUS-FNA होना — Jharkhand के patients के लिए एक major advantage है।",
      },
      {
        heading: "EUS Experience — Orchid Medical Centre Ranchi में",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में EUS experience describe करते हैं: Preparation: upper EUS के लिए endoscopy जैसे NPO 6-8 घंटे। Sedation: comfortable — IV sedation, conscious level। Scope: echoendoscope mouth से — esophagus, stomach, duodenum में जाकर adjacent structures image करता है। Duration: 30-60 minute (diagnostic EUS)। FNA के साथ: 45-75 minute। Recovery: 1-2 घंटे post-sedation। Report: imaging findings same day discuss करते हैं Dr. Akhilesh Yadav। FNA cytology: 3-5 दिन pathology। EUS cost inquiry: +91 74919 25047।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — EUS",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'EUS मुझे वह चीज़ें दिखाती है जो CT scan miss करता है — एक 8mm bile duct stone, एक 12mm pancreatic cyst की wall lining, एक submucosal tumor की exact layer। Ranchi में patients के लिए EUS का available होना एक breakthrough है। अब Delhi या Kolkata नहीं जाना पड़ता pancreatic cyst biopsy के लिए।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Advanced GI diagnosis के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "EUS और normal ultrasound में specifically क्या फ़र्क है?",
        a: "Normal ultrasound: बाहर से skin के through imaging — bowel gas interfere करता है। Pancreas और bile duct poorly seen। EUS: probe GI tract के अंदर — 2-5mm distance से organs image होते हैं। बहुत superior resolution — 1mm तक structures clearly। Dr. Akhilesh Yadav Ranchi में decide करते हैं कब EUS vs normal ultrasound appropriate है।",
      },
      {
        q: "Pancreatic cyst के लिए EUS ज़रूरी है?",
        a: "हाँ — 1cm से बड़े pancreatic cysts के लिए EUS recommended है characterization के लिए: cyst type (mucinous vs serous), mural nodule presence, main duct connection। FNA से fluid analysis — mucinous vs serous confirm करता है। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में pancreatic cyst assessment करते हैं।",
      },
      {
        q: "EUS में कितना दर्द होता है?",
        a: "Sedation के साथ नहीं। Similar to regular endoscopy experience — आप comfortable या नींद में होंगे। Procedure के बाद: mild bloating या sore throat — 1-2 दिन में ठीक। FNA के साथ: कोई extra pain नहीं होती typically।",
      },
      {
        q: "EUS report समझने में help चाहिए — क्या Dr. Akhilesh Yadav explain करते हैं?",
        a: "हाँ — Dr. Akhilesh Yadav same day procedure के बाद imaging findings explain करते हैं। Biopsy report आने के बाद follow-up appointment में final interpretation और next steps discuss होते हैं। Patient education Dr. Akhilesh Yadav के practice का important part है।",
      },
    ],
  },

  {
    slug: "capsule-endoscopy-ranchi",
    titleHi: "Capsule Endoscopy Ranchi — Small Bowel Imaging | Dr. Akhilesh Yadav",
    titleEn: "Capsule Endoscopy in Ranchi — Small Intestine Imaging | Dr. Akhilesh Yadav",
    excerptHi: "रांची में capsule endoscopy (capsule camera) — small intestine की imaging के लिए Dr. Akhilesh Yadav — Orchid Medical Centre. कब ज़रूरी है और क्या expect करें।",
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
        heading: "Capsule Endoscopy — वह चीज़ जो Normal Scope नहीं देख सकती",
        type: "text",
        content: "Ranchi से आए 34 साल के Ajit Kumar — recurrent anemia, endoscopy normal, colonoscopy normal। Bleeding source नहीं मिला। Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — ने capsule endoscopy recommend की। Result: small bowel Angioectasia (abnormal blood vessels) — obscure GI bleeding का source। यह सिर्फ capsule endoscopy से detect हुआ। Capsule endoscopy — एक camera in a capsule जो patient निगलता है और पूरी small intestine की 50,000+ images लेता है — वह area जहाँ regular scope नहीं पहुँच सकता।",
      },
      {
        heading: "Capsule Endoscopy कब ज़रूरी है?",
        type: "list",
        content: "Capsule endoscopy इन conditions में recommend होती है:",
        list: [
          "Obscure GI Bleeding: endoscopy + colonoscopy normal, लेकिन anemia/bleeding continue",
          "Crohn's Disease: small bowel extent assess करना — MR Enterography के alternative/complement",
          "Celiac Disease: small bowel villous atrophy assess करना",
          "Iron Deficiency Anemia: source undetermined after upper/lower endoscopy",
          "Small Bowel Tumors: suspected polyps, carcinoid, lymphoma",
          "NSAID-induced small bowel damage: assessment",
          "Peutz-Jeghers Syndrome: small bowel polyp surveillance",
        ],
      },
      {
        heading: "Capsule Endoscopy Experience — कैसे होती है",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में capsule endoscopy के लिए patient guide करते हैं: Preparation: एक दिन पहले liquid diet, bowel prep (colonoscopy-lite)। Day of procedure: sensors body पर tape होते हैं (data recorder भी)। Patient एक small camera capsule swallow करता है — size एक बड़ी vitamin capsule जैसी। Capsule naturally GI tract से travel करता है — 8 घंटे recording। Patient normal activities कर सकता है (बैठना, चलना) — heavy exercise avoid। No sedation required। Capsule naturally 24-48 घंटे में stool में pass होती है। Data recorder doctor को — 50,000+ images review होती हैं। Report: 1-2 दिन में।",
      },
      {
        heading: "Capsule Endoscopy — Limitations भी समझें",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में capsule endoscopy के limitations भी explain करते हैं: Cannot do biopsy — सिर्फ imaging। Capsule retention risk: GI stricture में capsule फंस सकता है — पहले patency capsule (dissolvable) test होती है। Battery life: 8-12 घंटे — complete small bowel may not always be visualized। Cost: expensive compared to standard endoscopy। No therapeutic capability। कब avoid करें: known stricture, implanted cardiac devices (certain models), swallowing difficulty, pregnancy। Dr. Akhilesh Yadav appropriately select करते हैं कब capsule endoscopy vs MR Enterography better option है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Capsule Endoscopy",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Capsule endoscopy एक patient-friendly procedure है — कोई sedation नहीं, कोई scope नहीं, बस एक capsule निगलो। Ranchi में मैं इसे select cases में recommend करता हूँ — जब upper और lower endoscopy normal हो और anemia या bleeding source पता नहीं चल रहा हो। Small bowel Crohn's के लिए भी एक valuable tool है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Capsule endoscopy के लिए specialist से consultation ज़रूर करें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Capsule endoscopy Ranchi में available है?",
        a: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में capsule endoscopy arrange करते हैं — availability और scheduling के लिए +91 74919 25047 contact करें। कुछ cases में referral भी suggest करते हैं appropriate center को अगर ज़रूरी हो।",
      },
      {
        q: "क्या capsule body में रह जाती है?",
        a: "Normal GI tract में — नहीं। Capsule 24-48 घंटे में naturally stool में pass हो जाती है। Confirm करने के लिए: patient देखता है (या abdominal X-ray)। GI stricture या obstruction में capsule retain हो सकती है — इसलिए पहले patency capsule test होती है। Dr. Akhilesh Yadav Ranchi में इसका appropriate screening करते हैं।",
      },
      {
        q: "Capsule endoscopy का खर्चा कितना होगा?",
        a: "Capsule endoscopy standard endoscopy से ज़्यादा expensive है — capsule disposable होती है, imported equipment। India में cost ranges हैं। Exact Orchid Medical Centre pricing के लिए +91 74919 25047 contact करें। Insurance coverage: select plans में covered, confirm करें अपनी policy से।",
      },
      {
        q: "Capsule endoscopy MRI से better है?",
        a: "दोनों अलग information देते हैं। Capsule endoscopy: mucosal lesions — villi, small ulcers, angiectasia clearly। MR Enterography: full-thickness bowel wall, stricture, fistula, extraluminal disease — Crohn's staging। दोनों complementary हैं। Dr. Akhilesh Yadav decide करते हैं कौनसा test किस patient के लिए appropriate है।",
      },
    ],
  },

  {
    slug: "ranchi-mein-colonoscopy-preparation",
    titleHi: "रांची में Colonoscopy की Preparation — Complete Guide | Dr. Akhilesh Yadav",
    titleEn: "Colonoscopy Preparation Guide in Ranchi — Step-by-Step | Dr. Akhilesh Yadav",
    excerptHi: "रांची में colonoscopy preparation: Dr. Akhilesh Yadav — Orchid Medical Centre. Step-by-step bowel prep guide — क्या खाएं, क्या avoid करें, medicines और timing।",
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
        heading: "Colonoscopy Preparation — क्यों इतना Important है",
        type: "text",
        content: "Colonoscopy की success 50% preparation पर depend करती है — बाकी 50% endoscopist पर। अगर colon properly clean नहीं हुआ तो: polyps miss हो सकते हैं (even >1cm polyps!), procedure longer होती है, repeat colonoscopy करनी पड़ सकती है। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में कहते हैं: 'मैं preparation को उतना ही important मानता हूँ जितना procedure को।' यह guide Ranchi के patients के लिए है जो Orchid Medical Centre में colonoscopy करवा रहे हैं।",
      },
      {
        heading: "2 दिन पहले से Preparation शुरू — Diet Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में colonoscopy diet instructions clearly देते हैं: 2-3 दिन पहले: high-fiber foods avoid करें — seeds, nuts, whole grains, raw vegetables, fruits with seeds (अंगूर, strawberry)। White rice, white bread, eggs, chicken — ठीक हैं। 1 दिन पहले: Clear liquid diet सिर्फ: Plain पानी। Coconut water (नारियल पानी)। नींबू पानी (नींबू + पानी + sugar — बिना pulp)। Clear soup (broth — vegetables या chicken, strain करें)। Black चाय या coffee (बिना दूध)। Avoid करें: दूध, दही, solid food। Red/purple colored drinks बिलकुल avoid — colon lining से confuse हो सकता है।",
      },
      {
        heading: "Bowel Preparation Solution — PEG Guide",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में PEG (Polyethylene Glycol) solution bowel prep recommend करते हैं। Split-dose schedule (most commonly): Evening before: 2 litre PEG over 2-3 घंटे (5 PM–8 PM)। Morning of procedure: 1-2 litre PEG over 1-2 घंटे (minimum 4 घंटे before procedure time)। How to make it tolerable: Chill the solution — refrigerate। Drink with a straw। Small sips, not large gulps — 240ml हर 15 min। Clear liquid (पानी या coconut water) बाद में पियें। Menthol sugar-free candy — taste reduce करता है। Effects: 1-2 घंटे के बाद loose motions शुरू — normal। रात भर bathroom trips — यह normal है, मतलब colon clean हो रही है।",
      },
      {
        heading: "Medications — क्या लें, क्या बंद करें",
        type: "list",
        content: "Colonoscopy से पहले medications के बारे में Dr. Akhilesh Yadav का guide:",
        list: [
          "Blood pressure medications: सही वक्त पर पानी के घूंट के साथ — continue",
          "Diabetes medications: doctor से confirm — typically insulin dose adjust, oral meds hold",
          "Blood thinners (warfarin, clopidogrel): 5-7 दिन पहले बंद — cardiac risk assess करके",
          "Aspirin: छोटे polyps के लिए continue हो सकता — Dr. Akhilesh Yadav specific instructions देते हैं",
          "Iron supplements: 1 हफ्ते पहले बंद — colon में दाग जैसी appearance आती है",
          "NSAIDs: colonoscopy के दिन hold",
          "Diabetes: morning dose hold on procedure day — last consultation में confirm",
        ],
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Colonoscopy Prep",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Colonoscopy preparation में जो चीज़ patients को सबसे ज़्यादा परेशान करती है वह है PEG solution और रात भर bathroom जाना। मैं patients को clearly कहता हूँ — यह एक रात की तकलीफ है, बदले में आप colon cancer prevention का highest standard पाते हैं। Prep का quality = colonoscopy का quality। Ranchi के patients — preparation seriously लें।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Colonoscopy preparation के लिए Orchid Medical Centre से written instructions ज़रूर लें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "अगर bowel prep के बाद stool clear नहीं हुआ तो क्या करें?",
        a: "अगर 4 घंटे बाद भी unclear/brown stool आ रहा है — Dr. Akhilesh Yadav से contact करें (+91 74919 25047)। Possible additional prep या procedure reschedule। Brown murky stool means colon not clean enough — polyps miss हो सकते हैं।",
      },
      {
        q: "क्या PEG solution पीना ज़रूरी है या कोई alternative है?",
        a: "PEG most effective और commonly used है। Alternatives: low-volume prep (2L PEG + bisacodyl)। Sodium Picosulfate-based (Picolax)। These are prescribed — patient cannot choose on own। Dr. Akhilesh Yadav Ranchi में appropriate prep recommend करते हैं based on patient factors।",
      },
      {
        q: "Diabetes है — colonoscopy prep में extra care क्या?",
        a: "Clear liquid में sugar-containing drinks careful — glucose spike। Coconut water और plain water safer। Oral diabetes medications hold on prep day। Insulin dose — doctor से adjust करवाएं। Blood sugar monitor करते रहें। Dr. Akhilesh Yadav Ranchi में diabetic patients को specific prep instructions देते हैं।",
      },
      {
        q: "Colonoscopy के कितनी देर बाद normal खाना खा सकते हैं?",
        a: "Procedure के बाद: liquid diet से start। 2-4 घंटे: light meal (खिचड़ी, छाछ, toast)। Same day: normal light diet। Polypectomy के बाद: 24-48 घंटे bland diet। Heavy meals और alcohol: 1 दिन wait। Dr. Akhilesh Yadav discharge के वक्त post-procedure diet instructions देते हैं।",
      },
    ],
  },

  // ── BATCH 11: BLOGS 51–55 ─────────────────────────────────────────────────────

  {
    slug: "hazaribagh-se-ranchi-gastroenterologist",
    titleHi: "Hazaribagh से Ranchi में Gastroenterologist — Dr. Akhilesh Yadav",
    titleEn: "Gastroenterologist from Hazaribagh — Ranchi Specialist Dr. Akhilesh Yadav",
    excerptHi: "Hazaribagh से Ranchi gastroenterologist देखने की ज़रूरत है? Dr. Akhilesh Yadav — Orchid Medical Centre, HB Road. Hazaribagh के patients के लिए guide — कैसे आएं, क्या expect करें।",
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
        heading: "Hazaribagh के Patients Ranchi क्यों आते हैं Gastro के लिए",
        type: "text",
        content: "Hazaribagh से Ravi Shankar ji — 52 साल, chronic liver disease — ने कई months local level पर treatment किया लेकिन specialist की ज़रूरत थी। Ranchi सिर्फ 95 km दूर — 2-2.5 घंटे का सफ़र। Orchid Medical Centre, HB Road, Ranchi में Dr. Akhilesh Yadav — DM Gastroenterology — से उनका first consultation हुआ। Dr. Akhilesh Yadav Hazaribagh, Chatra, Ramgarh, Koderma — इन सभी districts के patients को regularly देखते हैं। Advanced GI care के लिए Hazaribagh से nearest DM Gastroenterologist Ranchi में available है।",
      },
      {
        heading: "Hazaribagh से Ranchi कैसे आएं — Practical Guide",
        type: "text",
        content: "Hazaribagh से Ranchi (Orchid Medical Centre, HB Road): Distance: ~95 km। Time: 2-2.5 घंटे (NH 33 via Ramgarh)। Bus: Hazaribagh से Ranchi regular JKTC/private buses — Bus Stand से Ranchi Main Bus Stand। Auto या Ola/Uber: Ranchi Bus Stand से Orchid Medical Centre, HB Road — 15-20 minute। Private vehicle: National Highway 33 — Ramgarh होते हुए — straight road। Train: Limited direct trains from Hazaribagh — bus recommended। Appointment: पहले call करें +91 74919 25047 (Mon–Sat: 10 AM–2 PM, 5 PM–8 PM) — same-day या next-day availability usually मिलती है urgent cases में।",
      },
      {
        heading: "Hazaribagh के Patients के लिए क्या Services Available हैं",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में Hazaribagh patients के लिए:",
        list: [
          "Consultation: liver disease, fatty liver, jaundice, hepatitis B/C",
          "Endoscopy (OGD Scopy): GERD, ulcer, H. Pylori, bleeding — same-day",
          "Colonoscopy: colon cancer screening, IBD, rectal bleeding",
          "ERCP: bile duct stone, stenting — Hazaribagh में नहीं होता",
          "EUS: pancreatic cyst/mass, advanced imaging",
          "IBD management: Crohn's, Ulcerative Colitis",
          "Pancreatitis management: acute और chronic",
          "Ascites और liver cirrhosis management",
          "Same-day procedures + follow-up plan — सिर्फ एक trip में complete",
        ],
      },
      {
        heading: "Hazaribagh से आने से पहले क्या लाएं",
        type: "list",
        content: "Orchid Medical Centre visit के लिए Hazaribagh से लाने वाली चीज़ें:",
        list: [
          "पुरानी reports: ultrasound, blood tests, endoscopy reports (अगर हैं)",
          "Current medications list — all tablets + doses",
          "Symptoms का history — कब से, क्या worse करता है",
          "Insurance card अगर applicable",
          "Appointment confirmation (SMS/WhatsApp)",
          "पानी और light snack — wait होती है कभी-कभी",
        ],
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Hazaribagh Patients",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Hazaribagh और surrounding districts के patients मेरे पास regular आते हैं। मैं उन्हें एक ही visit में maximum value देने की कोशिश करता हूँ — consultation + procedure + follow-up plan। ताकि बार-बार Ranchi न आना पड़े। एक दिन में endoscopy भी हो सकती है अगर NPO rule follow किया हो — call करके confirm ज़रूर करें।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या Hazaribagh से Ranchi एक ही दिन में आना और consultation + endoscopy possible है?",
        a: "हाँ — अगर आप NPO (खाली पेट, minimum 6 घंटे) आते हैं और पहले से appointment ले चुके हैं। Morning appointment book करें (10-11 AM)। Consultation + endoscopy + report same day। Evening को Hazaribagh वापस जा सकते हैं। Call करके confirm करें: +91 74919 25047।",
      },
      {
        q: "क्या Hazaribagh के patients के लिए कोई referral ज़रूरी है?",
        a: "नहीं — Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में direct consultation available है। कोई referral letter की requirement नहीं। Direct appointment लें — +91 74919 25047।",
      },
      {
        q: "Hazaribagh में follow-up कैसे होगा Ranchi visit के बाद?",
        a: "Dr. Akhilesh Yadav digital follow-up facilitate करते हैं — WhatsApp पर reports share, phone consultation for routine follow-ups। Major changes या procedures के लिए Ranchi visit। कुछ cases में 3-6 month में एक visit sufficient होती है।",
      },
      {
        q: "Hazaribagh के पास कोई gastroenterologist नहीं है?",
        a: "Hazaribagh में general physician available हैं। DM Gastroenterologist (advanced GI specialist) के लिए Ranchi nearest option है। Dr. Akhilesh Yadav Ranchi में regularly Hazaribagh district के patients देखते हैं।",
      },
    ],
  },

  {
    slug: "dhanbad-se-ranchi-gastroenterologist",
    titleHi: "Dhanbad से Ranchi Gastroenterologist — Dr. Akhilesh Yadav GI Specialist",
    titleEn: "Gastroenterologist from Dhanbad — Ranchi GI Specialist Dr. Akhilesh Yadav",
    excerptHi: "Dhanbad से Ranchi में gastroenterologist की ज़रूरत? Dr. Akhilesh Yadav — Orchid Medical Centre. DM Gastroenterologist — liver, endoscopy, IBD, ERCP — complete GI care।",
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
        heading: "Dhanbad से Ranchi — क्यों Patients आते हैं GI Care के लिए",
        type: "text",
        content: "Dhanbad — Jharkhand का coal capital — और आस-पास के areas (Sindri, Jharia, Katras) में patients advanced GI care के लिए Ranchi आते हैं। Dhanbad से Ranchi: ~160 km, 3-3.5 घंटे via NH 2/NH 19। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi। Dhanbad district के patients के लिए advanced procedures जो locally available नहीं: ERCP, EUS, capsule endoscopy, biologics for IBD। Dhanbad में liver specialist और advanced GI endoscopy की availability limited है — Ranchi nearest comprehensive GI centre है।",
      },
      {
        heading: "Dhanbad से Ranchi — Travel Options",
        type: "text",
        content: "Dhanbad to Ranchi (Orchid Medical Centre, HB Road): By Bus: Dhanbad Bus Stand से Ranchi direct — multiple daily routes। 3-4 घंटे। By Train: Dhanbad to Ranchi — multiple trains (Jharkhand Express, etc.) — 3.5-4 घंटे। By Car/Taxi: NH 2 via Govindpur/Hazaribagh — 3-3.5 घंटे। Fastest: Private car — early morning departure recommended। Orchid Medical Centre, HB Road: Bus Stand/Railway Station से auto या Ola — 20-25 minute। Appointment: +91 74919 25047 — confirm before leaving। Emergency cases: call ahead for priority।",
      },
      {
        heading: "Dhanbad Patients — Dr. Akhilesh Yadav से क्या मिलेगा",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में Dhanbad patients के लिए advanced GI care:",
        list: [
          "Chronic Liver Disease — hepatitis B/C, cirrhosis, portal hypertension",
          "Fatty Liver (NAFLD/MASLD) — grading, advanced fibrosis assessment",
          "Jaundice workup — infectious vs obstructive vs hepatocellular",
          "Endoscopy (OGD Scopy) — same-day procedure possible",
          "Colonoscopy — bowel cancer screening, IBD, rectal bleeding",
          "ERCP — bile duct stones, Dhanbad में नहीं मिलता",
          "IBD (Crohn's/Colitis) management — biologics, step-up therapy",
          "Pancreatitis — acute/chronic management, EUS",
        ],
      },
      {
        heading: "Dhanbad से Same-Day Visit — कैसे Plan करें",
        type: "text",
        content: "Dr. Akhilesh Yadav के साथ Dhanbad से same-day visit planning: पहले दिन: Call करें +91 74919 25047 — appointment book करें। Endoscopy चाहिए तो NPO का time बताओ (6-8 घंटे खाली पेट)। Travel: रात को या very early morning निकल सकते हैं। Orchid Medical Centre पहुँचें: 10 AM appointment में। Consultation + procedure (अगर pre-arranged): done by early afternoon। Return: Evening तक Dhanbad वापस। एक दिन में complete GI assessment possible है — एक बार की मेहनत।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Dhanbad Patients",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Dhanbad और mining belt के patients को पता है कि serious GI condition में Ranchi आना पड़ेगा। मैं कोशिश करता हूँ कि उनका एक visit productive हो — सारी ज़रूरी चीज़ें एक दिन में हो जाएं। ERCP, colonoscopy, endoscopy — सब plan करता हूँ पहले से उनके convenience के हिसाब से।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Dhanbad में कोई gastroenterologist नहीं मिलता क्या?",
        a: "Dhanbad में कुछ GI doctors available हैं — लेकिन DM Gastroenterology qualified specialist और advanced procedures (ERCP, EUS, biologics, complex IBD) के लिए Ranchi आना पड़ता है। Dr. Akhilesh Yadav Ranchi में Dhanbad patients regularly देखते हैं।",
      },
      {
        q: "Dhanbad से Ranchi एक ही बार में सब हो जाएगा?",
        a: "हाँ — properly plan करो: appointment + NPO for endoscopy if needed + reports साथ लाओ। एक दिन में consultation + endoscopy या colonoscopy complete हो सकता है। ERCP/EUS के लिए कुछ cases में 2 trips ज़रूरी हो सकती हैं depending on case complexity।",
      },
      {
        q: "क्या Dr. Akhilesh Yadav Dhanbad आते हैं या only Ranchi?",
        a: "Dr. Akhilesh Yadav Orchid Medical Centre, HB Road, Ranchi में practice करते हैं। Dhanbad में visiting clinic नहीं है currently। Patients Ranchi आते हैं consultation के लिए।",
      },
    ],
  },

  {
    slug: "deoghar-se-ranchi-gastroenterologist",
    titleHi: "Deoghar से Ranchi Gastroenterologist — Dr. Akhilesh Yadav Liver Specialist",
    titleEn: "Gastroenterologist from Deoghar — Ranchi Liver Specialist Dr. Akhilesh Yadav",
    excerptHi: "Deoghar और Santhal Pargana से Ranchi में gastroenterologist — Dr. Akhilesh Yadav — Orchid Medical Centre. Liver disease, endoscopy, ERCP — complete GI care for Deoghar patients।",
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
        heading: "Deoghar से Patients Ranchi क्यों आते हैं — Gastro के लिए",
        type: "text",
        content: "Deoghar — Jharkhand का religious और cultural hub — से कई patients Orchid Medical Centre, Ranchi आते हैं Dr. Akhilesh Yadav के पास। Deoghar और Santhal Pargana में jaundice, liver disease, hepatitis का burden ज़्यादा है — Ganga basin area में waterborne hepatitis A/E common है। Dr. Akhilesh Yadav कहते हैं: 'Deoghar और Dumka, Godda, Sahibganj से बहुत patients आते हैं — liver disease, jaundice, और ERCP के लिए खासतन।' Deoghar से Ranchi: ~220 km, 4-4.5 घंटे। Typically एक रात Ranchi रुककर procedures complete करना better होता है।",
      },
      {
        heading: "Deoghar से Ranchi Travel — Practical Information",
        type: "text",
        content: "Deoghar to Ranchi (Orchid Medical Centre): Distance: ~220 km। Time: 4-4.5 घंटे by road। Route: NH 2 via Giridih या Jamtara — Ranchi। By Train: Limited direct option — road travel faster typically। By Bus: Deoghar से Ranchi direct — JKTC/private 5-6 घंटे typically। Recommend: Private car/taxi — more comfortable for patients who are unwell। Plan: 1-2 दिन Ranchi में रुकें अगर multiple procedures — endoscopy + consultation। Orchid Medical Centre accommodation options: nearby dharamshalas/budget hotels HB Road area। Appointment: +91 74919 25047 — early call for planning।",
      },
      {
        heading: "Deoghar Patients के लिए Specific Conditions — Dr. Akhilesh Yadav",
        type: "list",
        content: "Deoghar और Santhal Pargana के common GI conditions जो Dr. Akhilesh Yadav treat करते हैं:",
        list: [
          "Hepatitis A/E (waterborne) — acute liver disease, jaundice",
          "Hepatitis B — chronic liver disease, cirrhosis prevention",
          "Obstructive Jaundice — bile duct stone, gallstone — ERCP",
          "Alcoholic Liver Disease — common in tribal areas",
          "Peptic Ulcer — H. Pylori — endoscopy और treatment",
          "Iron Deficiency Anemia — GI cause workup",
          "Kala-azar related liver splenomegaly",
          "Intestinal tuberculosis — misdiagnosed IBD",
        ],
      },
      {
        heading: "Deoghar से Ranchi Visit — कैसे Plan करें",
        type: "text",
        content: "Dr. Akhilesh Yadav के साथ Deoghar से visit planning: Step 1: सबसे पहले call करें +91 74919 25047 — symptoms और previous reports discuss करें। Step 2: Appointment book करें — अगर endoscopy या ERCP ज़रूरी तो 2-दिन trip plan करें। Step 3: सभी पुरानी reports, test results, medicines साथ लाएं। Step 4: 1 दिन पहले Ranchi पहुँचें अगर ERCP/colonoscopy है — bowel prep या fasting ensure करना पड़ता है। Step 5: Procedure के बाद Dr. Akhilesh Yadav results explain करते हैं — follow-up plan देते हैं। Step 6: Routine follow-ups often telephonic या WhatsApp पर — अगले visit की frequency case पर depend करती है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Deoghar Patients",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Deoghar और Santhal Pargana के patients के लिए मैं especially concerned रहता हूँ — यहाँ liver disease का burden काफी है और awareness कम। Hepatitis B का vaccine और timely treatment liver cirrhosis रोकता है। मैं उन्हें encourage करता हूँ कि diagnosis में देर न करें — Ranchi आना ज़रूरी है अगर local में कुछ नहीं हो रहा।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Deoghar में कोई DM Gastroenterologist है?",
        a: "Deoghar में specialist GI care limited है। DM Gastroenterology qualified doctor के लिए nearest comprehensive center Ranchi है। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में available हैं।",
      },
      {
        q: "क्या jaundice में Deoghar से Ranchi ले जाना ठीक है?",
        a: "हाँ — अगर jaundice severe है, obstructive jaundice suspect हो (pale stool, dark urine, itching), या local doctors ने refer किया हो — Ranchi आना चाहिए। Dr. Akhilesh Yadav Ranchi में jaundice workup और ERCP (अगर bile duct stone) करते हैं। Emergency में: immediately Ranchi के लिए निकलो और call करें।",
      },
      {
        q: "Deoghar में waterborne jaundice का काफी problem है — क्या vaccination help करती है?",
        a: "Hepatitis A vaccine (2 doses) और Hepatitis B vaccine (3 doses) — दोनों recommended। Hepatitis A/E का कोई antiviral treatment नहीं — supportive care। Prevention: safe water, hand hygiene। Deoghar में public water quality — purification ज़रूर। Dr. Akhilesh Yadav vaccination counseling करते हैं।",
      },
    ],
  },

  {
    slug: "orchid-medical-centre-gastro-ranchi",
    titleHi: "Orchid Medical Centre Ranchi — Gastroenterology Clinic | Dr. Akhilesh Yadav",
    titleEn: "Orchid Medical Centre Ranchi — Gastroenterology Clinic | Dr. Akhilesh Yadav",
    excerptHi: "Orchid Medical Centre, HB Road, Ranchi — Dr. Akhilesh Yadav — DM Gastroenterology। Facilities, timing, procedures, location guide और appointment information — complete guide।",
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
        heading: "Orchid Medical Centre Ranchi — Gastroenterology का Hub",
        type: "text",
        content: "Orchid Medical Centre, HB Road, Ranchi — यहाँ Dr. Akhilesh Yadav, DM Gastroenterology, अपनी specialized GI practice चलाते हैं। HB Road Ranchi का medical corridor है — accessible from all directions। Orchid Medical Centre established multi-specialty facility है जहाँ Dr. Akhilesh Yadav के पास dedicated gastroenterology consultation और procedure facility है। Jharkhand, Bihar, और Chhattisgarh के patients यहाँ आते हैं — liver disease, endoscopy, ERCP, IBD management के लिए। Full address: Orchid Medical Centre, HB Road, Ranchi, Jharkhand — 834001।",
      },
      {
        heading: "Orchid Medical Centre Timing — Dr. Akhilesh Yadav",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre, Ranchi में consultation timing:",
        list: [
          "Monday to Saturday: 10:00 AM – 2:00 PM (Morning OPD)",
          "Monday to Saturday: 5:00 PM – 8:00 PM (Evening OPD)",
          "Sunday: Closed (emergency consultation: call +91 74919 25047)",
          "Endoscopy: typically morning slot — pre-arranged appointment ज़रूर",
          "ERCP/EUS: pre-booked procedure days — call to schedule",
          "Colonoscopy: morning procedure — bowel prep day before",
        ],
      },
      {
        heading: "Orchid Medical Centre — Gastroenterology Facilities",
        type: "list",
        content: "Dr. Akhilesh Yadav के साथ Orchid Medical Centre में available:",
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
        heading: "Orchid Medical Centre Ranchi — कैसे पहुँचें",
        type: "text",
        content: "Orchid Medical Centre, HB Road, Ranchi पहुँचने के लिए: HB Road Ranchi का central और well-connected road है। Ranchi Main Bus Stand से: Auto/Ola — 15-20 minute। Ranchi Railway Station से: Auto/Ola — 20-25 minute। Birsa Munda Airport से: 30-35 minute। Parking: limited on HB Road — nearby parking spots available। Google Maps: Search 'Orchid Medical Centre HB Road Ranchi' — accurate location। Landmarks: Dr. Akhilesh Yadav के clinic signage visible — HB Road main road पर।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Orchid Medical Centre",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Orchid Medical Centre में मैं dedicated gastroenterology care देता हूँ — सिर्फ पेट और liver के लिए। Patients को यहाँ एक experienced DM Gastroenterologist मिलता है जो उन्हें clearly explain करता है — हिंदी में — क्या हो रहा है और क्या करना है। Jharkhand के patients deserve करते हैं world-class GI care locally।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi।\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047)। Mon–Sat: 10 AM–2 PM और 5 PM–8 PM।",
      },
    ],
    faqs: [
      {
        q: "Orchid Medical Centre में walk-in possible है या appointment ज़रूरी है?",
        a: "Walk-in possible है — लेकिन appointment लेना better है, especially procedures के लिए (endoscopy, ERCP)। Walk-in में wait ज़्यादा हो सकता है। Appointment: +91 74919 25047। WhatsApp भी available है।",
      },
      {
        q: "क्या Orchid Medical Centre में emergency endoscopy होती है?",
        a: "Upper GI bleeding (hematemesis — खून की उल्टी) emergency में: immediately +91 74919 25047 call करें। Dr. Akhilesh Yadav emergency endoscopy coordinate करते हैं Orchid Medical Centre में अगर available हो। Critical cases hospital admission के लिए coordinate होते हैं।",
      },
      {
        q: "क्या Dr. Akhilesh Yadav के अलावा भी gastroenterologist हैं Orchid Medical Centre में?",
        a: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में gastroenterology practice करते हैं। Clinic में other specialists भी हैं different specialties के लिए। Gastroenterology specifically Dr. Akhilesh Yadav का department है।",
      },
      {
        q: "Orchid Medical Centre में cashless insurance कैसे claim करें?",
        a: "Appointment के वक्त insurance card लाएं। Orchid Medical Centre coordination करता है select insurers के साथ। Pre-authorization ज़रूरी होती है planned procedures के लिए। Dr. Akhilesh Yadav clinic staff आपकी help करेगा insurance process में।",
      },
    ],
  },

  {
    slug: "ranchi-mein-liver-test",
    titleHi: "रांची में Liver Test — कौनसा Test, कब करवाएं | Dr. Akhilesh Yadav",
    titleEn: "Liver Tests in Ranchi — Which Test, When & Why | Dr. Akhilesh Yadav",
    excerptHi: "रांची में liver test guide: LFT, viral markers, fibroscan, liver biopsy — कौनसा test कब ज़रूरी है। Dr. Akhilesh Yadav — Orchid Medical Centre — complete liver test guide।",
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
        heading: "Liver Test क्यों ज़रूरी है — और कौनसा पहले करवाएं",
        type: "text",
        content: "Ranchi के एक 45 साल के patient — Mahesh Kumar — 2 साल से थकान और पेट में भारी feeling था। Annual health check में LFT (Liver Function Test) में SGOT/SGPT slightly raised मिली। Local doctor ने कहा 'चिंता मत करो' — पर Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre में मिलने के बाद पता चला कि Grade 2 fatty liver है। Liver tests कई प्रकार के होते हैं — और एक test से पूरा picture नहीं मिलता। Dr. Akhilesh Yadav Ranchi में systematically liver test recommend करते हैं based on clinical picture।",
      },
      {
        heading: "Liver Tests — कौनसा क्या बताता है",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में यह liver tests use करते हैं:",
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
        heading: "Fibroscan — Ranchi में कैसे होता है",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में Fibroscan coordinate करते हैं। Fibroscan — Transient Elastography — liver fibrosis assess करता है बिना biopsy के। A probe skin पर रखा जाता है (right side, intercostal) — ultrasound wave भेजा जाता है — stiffness measure होती है kPa में। Results: F0-F1 (<7.1 kPa): no/minimal fibrosis — normal। F2 (7.1-9.5 kPa): significant fibrosis। F3 (9.5-12.5 kPa): advanced fibrosis। F4 (>12.5 kPa): cirrhosis likely। CAP (Controlled Attenuation Parameter): fatty liver grade (S0-S3)। Fibroscan + LFT + viral markers = complete liver assessment। Dr. Akhilesh Yadav results interpret करते हैं और next steps guide करते हैं।",
      },
      {
        heading: "Liver Test Results — कब Urgent है, कब Wait हो सकता है",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi में liver test results के बाद urgency assess करते हैं: URGENT — immediately मिलें: Bilirubin >5 mg/dL (severe jaundice)। PT/INR >1.5 (coagulation impaired)। Albumin <3 g/dL (liver failing)। Acute hepatitis + altered consciousness। SOON (within 1-2 weeks): SGPT >3x normal। New hepatitis B/C diagnosis। Fatty liver grade 2+ with fibrosis। ROUTINE (1-3 months): Mild SGPT elevation (<2x)। Stable chronic liver disease monitoring। Hepatitis B carrier — annual surveillance। Dr. Akhilesh Yadav specifically guide करते हैं — report लेकर सीधे मिलें।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Liver Tests",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Liver tests एक panel है — एक report से सब नहीं पता चलता। मैं patients को बोलता हूँ: सिर्फ SGPT देखकर परेशान मत हो, और सिर्फ normal LFT देखकर निश्चिंत मत हो। Fibroscan बता सकता है कि fatty liver से fibrosis शुरू हुआ है या नहीं। Early detection — treatment से ज़्यादा effective होती है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Liver reports लेकर Dr. Akhilesh Yadav से मिलें for expert interpretation.\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Normal LFT में भी fatty liver हो सकती है?",
        a: "हाँ — बिलकुल। 20-30% fatty liver patients में SGPT/SGOT normal होती है। Diagnosis के लिए ultrasound better initial test है। Fibroscan — fibrosis assess करता है चाहे LFT normal हो। Dr. Akhilesh Yadav Ranchi में fatty liver के लिए complete assessment करते हैं — सिर्फ LFT नहीं।",
      },
      {
        q: "Fibroscan Ranchi में available है?",
        a: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में fibroscan coordinate करते हैं। Availability और scheduling के लिए +91 74919 25047 contact करें। कुछ cases में referral diagnostic centre भी suggest करते हैं।",
      },
      {
        q: "Liver biopsy कब ज़रूरी होती है?",
        a: "Liver biopsy तब ज़रूरी है जब: fibroscan और LFT से diagnosis unclear हो, autoimmune hepatitis diagnose करना हो, fibrosis stage treatment decision change करे (e.g., antiviral ya not)। Dr. Akhilesh Yadav Ranchi में liver biopsy (endoscopic/percutaneous) करते हैं — select cases में।",
      },
      {
        q: "Hepatitis B positive आया — अभी क्या करें?",
        a: "Immediately Dr. Akhilesh Yadav से मिलें। Assess करवाना पड़ेगा: HBsAg + Hep B DNA viral load + LFT + Fibroscan + HBeAg/anti-HBe status। Treatment decision (antiviral — tenofovir/entecavir) इस complete assessment के बाद। Panic नहीं — hepatitis B treatable/manageable है early detection में।",
      },
    ],
  },

  // ── BATCH 12: BLOGS 56–60 ─────────────────────────────────────────────────────

  {
    slug: "ranchi-mein-stomach-cancer-screening",
    titleHi: "रांची में Stomach Cancer Screening — Gastric Cancer Detection | Dr. Akhilesh Yadav",
    titleEn: "Stomach Cancer Screening in Ranchi — Early Gastric Cancer Detection | Dr. Akhilesh Yadav",
    excerptHi: "रांची में stomach cancer (gastric cancer) screening: Dr. Akhilesh Yadav — Orchid Medical Centre. किसे करवाना चाहिए, कब करवाना चाहिए, और क्या expect करें।",
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
        heading: "Stomach Cancer — Ranchi और Jharkhand में इसका Burden",
        type: "text",
        content: "Gastric cancer (stomach cancer) India में 5th most common cancer है और mortality में ऊपर है — क्योंकि ज़्यादा cases late stage में diagnose होते हैं। Jharkhand में specific risk factors: H. Pylori infection (very common in Jharkhand), smoked और salted food (लिट्टी-चोखा में salt content), कुछ areas में water quality, alcohol, family history। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में कहते हैं: 'Jharkhand में gastric cancer के cases मैं regularly देखता हूँ — और अगर 2-3 साल पहले endoscopy हुई होती तो early stage में मिलता।' Early detection = better outcomes।",
      },
      {
        heading: "किसे Stomach Cancer Screening करवानी चाहिए — Risk Factors",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में इन patients को screening recommend करते हैं:",
        list: [
          "Age 40+ with any GI symptoms — upper abdominal pain, loss of appetite, weight loss",
          "H. Pylori infection history — especially if not treated",
          "Family history of gastric cancer (first-degree relative)",
          "Chronic atrophic gastritis या intestinal metaplasia diagnosis",
          "Previous gastric polyps",
          "Pernicious anemia",
          "Smoking + alcohol combination",
          "Long-term NSAID use with GI symptoms",
          "Post-gastrectomy patients (remaining stomach after surgery)",
        ],
      },
      {
        heading: "Stomach Cancer Screening — Endoscopy क्या दिखाता है",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में upper GI endoscopy से stomach cancer screening करते हैं: Early gastric cancer: flat or slightly raised lesion, subtle color change — HD endoscopy + NBI (Narrow Band Imaging) से detect होता है। Suspicious findings: irregular mucosa, non-healing ulcer, mass। Biopsy: suspicious areas से tissue लिया जाता है — pathology में cancer confirm या rule out। Pre-cancerous conditions: intestinal metaplasia, dysplasia — surveillance schedule plan की जाती है। Dr. Akhilesh Yadav chromoendoscopy और advanced imaging techniques use करते हैं subtle early lesions detect करने के लिए।",
      },
      {
        heading: "Alarm Symptoms — Immediate Endoscopy करवाएं",
        type: "list",
        content: "यह symptoms में Dr. Akhilesh Yadav Ranchi में urgent endoscopy recommend करते हैं:",
        list: [
          "Unexplained weight loss >5% in 3 months",
          "Persistent upper abdominal pain (>4 weeks, not responding to antacids)",
          "Dysphagia — खाना निगलने में तकलीफ",
          "Vomiting blood (hematemesis) या coffee-ground vomiting",
          "Tarry black stools (melena)",
          "New-onset iron deficiency anemia in adults 40+",
          "Loss of appetite with early satiety",
          "Progressive dyspepsia starting after age 40",
        ],
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Stomach Cancer Screening",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Stomach cancer में survival directly stage से linked है। Stage 1 में — 80-90% 5-year survival। Stage 4 में — 5% से कम। Endoscopy एक simple procedure है — अगर कोई alarm symptom है या age 45+ से ऊपर हो और family history हो, तो एक बार ज़रूर करवाओ। Miss मत करो।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Cancer screening के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या stomach cancer endoscopy से पकड़ में आता है?",
        a: "हाँ — upper GI endoscopy best tool है early gastric cancer के लिए। HD endoscopy + NBI से subtle mucosal changes detect होती हैं। Biopsy से confirm होता है। Ranchi में Dr. Akhilesh Yadav Orchid Medical Centre में advanced endoscopy करते हैं — early lesion miss नहीं होनी चाहिए।",
      },
      {
        q: "H. Pylori treatment से stomach cancer का risk कम होता है?",
        a: "हाँ — H. Pylori eradication से gastric cancer risk 30-40% reduce होता है (evidence-based)। इसलिए Dr. Akhilesh Yadav Ranchi में H. Pylori detect और treat करते हैं proactively। Triple/quadruple therapy से H. Pylori eradicate होता है — confirmation test (urea breath test) 4-6 हफ्ते बाद।",
      },
      {
        q: "Stomach cancer का दर्द कैसा होता है?",
        a: "Early stage में: often no pain या mild epigastric discomfort — ulcer जैसा। इसलिए early cancer miss हो जाता है। Advanced stage में: persistent pain, fullness, weight loss, vomiting। दर्द से cancer stage judge नहीं होता — endoscopy से पता चलता है। Alarm symptoms में से कोई भी हो — immediately मिलें।",
      },
    ],
  },

  {
    slug: "ranchi-mein-food-allergy-doctor",
    titleHi: "रांची में Food Allergy Doctor — GI Food Intolerance | Dr. Akhilesh Yadav",
    titleEn: "Food Allergy Doctor in Ranchi — GI Food Intolerance Specialist | Dr. Akhilesh Yadav",
    excerptHi: "रांची में food allergy और food intolerance specialist: Dr. Akhilesh Yadav — Orchid Medical Centre. Celiac disease, lactose intolerance, IBS-food triggers — diagnosis और management।",
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
        heading: "Food Allergy vs Food Intolerance — फ़र्क क्या है और Ranchi में Doctor कौन",
        type: "text",
        content: "Ranchi की 28 साल की Neha — रोटी खाते ही bloating, दस्त, और थकान। Doctor ने 'IBS' बोला और antacid दिया — 2 साल तक better नहीं हुई। Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — ने celiac disease diagnose की (anti-tTG antibody + duodenal biopsy)। Gluten-free diet से 3 महीने में dramatic improvement। Food allergy: immune response — immediate symptoms (hives, throat tightening) — severe cases anaphylaxis। Food intolerance: digestive enzyme deficiency या gut sensitivity — delayed GI symptoms। GI food intolerance (celiac, lactose, fructose malabsorption) — gastroenterologist की field है।",
      },
      {
        heading: "GI Food Intolerances — Dr. Akhilesh Yadav Ranchi में क्या Diagnose करते हैं",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में यह GI food conditions diagnose करते हैं:",
        list: [
          "Celiac Disease: anti-tTG IgA blood test + duodenal biopsy — gluten (wheat/roti/maida) से triggered",
          "Non-Celiac Gluten Sensitivity: celiac markers negative, लेकिन gluten से symptoms",
          "Lactose Intolerance: lactase enzyme deficiency — दूध/दही से gas, bloating, diarrhea",
          "Fructose Malabsorption: excess fructose from fruits, honey, आलू — GI symptoms",
          "FODMAP Intolerance: fermentable carbohydrates — IBS trigger",
          "Food Protein-Induced Enterocolitis (FPIES): infants में — serious food reactions",
          "Eosinophilic Esophagitis/Gastritis: eosinophil-driven GI inflammation",
        ],
      },
      {
        heading: "Celiac Disease Ranchi — Jharkhand में Underdiagnosed",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में कहते हैं: 'Celiac disease Jharkhand में बहुत underdiagnosed है — patients सालों तक IBS, anemia, या general weakness के label में रहते हैं।' Celiac disease: small intestine में villi damage — gluten से। India में prevalence ~1% — लेकिन diagnosis rate काफी कम है। Jharkhand में wheat-based रोटी, मैदा — daily staple। Celiac patients में chronic diarrhea, anemia, weight loss, bloating common। Testing: anti-tTG IgA + total IgA। Confirmation: upper endoscopy + duodenal biopsy (Marsh grading)। Treatment: strict lifetime gluten-free diet — ज्वार, बाजरा, rice, मक्का okay — गेहूं, जौ, rye avoid।",
      },
      {
        heading: "Low-FODMAP Diet — IBS Food Triggers Ranchi Context में",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में IBS patients को low-FODMAP diet explain करते हैं। High-FODMAP (Jharkhand diet में common): Onion (प्याज़), garlic (लहसुन) — HIGH FODMAP। Milk (दूध), yogurt (दही) — lactose। Wheat (रोटी, मैदा) — fructans। Litti (sattu + घी) — check करना पड़ेगा। Mango, watermelon — excess fructose। Beans (दाल) — galactans। Low-FODMAP (Jharkhand में available): Rice, poha, rice flour roti। लौकी, करेला, पालक, गाजर। Banana (ripe), papaya। दही (small amount — lactose lower)। छाछ (low-FODMAP if small serving)। Dr. Akhilesh Yadav Ranchi के patients को local food context में FODMAP guide करते हैं।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Food Allergy/Intolerance",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Food intolerance में self-diagnosis dangerous हो सकता है — बिना testing के gluten-free या dairy-free मत जाओ। Celiac test के लिए gluten खाना ज़रूरी है pre-test — नहीं तो result false negative आएगा। Ranchi में मैं properly test करता हूँ, diagnose करता हूँ, फिर diet plan करता हूँ — सिर्फ guess नहीं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या दही और छाछ celiac disease में खा सकते हैं?",
        a: "हाँ — dairy naturally gluten-free है। Celiac disease में दही, छाछ, दूध okay हैं (lactose intolerance अलग चीज़ है)। ध्यान रखो: flavored yogurt, packaged dairy products में wheat starch या malt — label check करो। Dr. Akhilesh Yadav Ranchi में celiac diet counseling देते हैं।",
      },
      {
        q: "क्या सत्तू (Jharkhand/Bihar staple food) celiac में safe है?",
        a: "Traditional सत्तू: roasted chana (chickpea) — gluten-free। लेकिन market सत्तू में wheat mix होती है often (cost cutting)। Celiac patients: pure chana सत्तू या certified gluten-free product use करें। Dr. Akhilesh Yadav Ranchi में patients को Jharkhand-specific foods के बारे में guide करते हैं।",
      },
      {
        q: "Lactose intolerance और celiac disease दोनों साथ हो सकते हैं?",
        a: "हाँ — secondary lactose intolerance active celiac disease में होती है (damaged villi = less lactase enzyme)। Strict gluten-free diet से villi heal होती है और lactase improve होती है — secondary lactose intolerance resolve हो जाती है typically 6-12 महीने में। Primary lactose intolerance (genetic) अलग condition है।",
      },
    ],
  },

  {
    slug: "ranchi-mein-ascites-treatment",
    titleHi: "रांची में Ascites Treatment — पेट में पानी का इलाज | Dr. Akhilesh Yadav",
    titleEn: "Ascites Treatment in Ranchi — Abdominal Fluid Management | Dr. Akhilesh Yadav",
    excerptHi: "रांची में ascites (पेट में पानी) का treatment: Dr. Akhilesh Yadav — Orchid Medical Centre. Liver cirrhosis से जुड़ी ascites — diuretics, paracentesis, SBP prevention — complete guide।",
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
        heading: "Ascites — पेट में पानी क्यों आता है",
        type: "text",
        content: "Ascites मतलब पेट में abnormal fluid accumulation। Ranchi में commonly liver cirrhosis से होता है — Jharkhand में alcohol-related liver disease और hepatitis B/C dominant cause हैं। कैसे होता है: Liver cirrhosis → portal hypertension (liver का blood pressure बढ़ जाता है) → fluid portal veins से abdomen में leak होता है → ascites। Secondary ascites: cancer (peritoneal), heart failure, kidney disease, tuberculosis। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में ascites patients regularly आते हैं — especially liver disease से।",
      },
      {
        heading: "Ascites — Diagnosis कैसे होती है",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में ascites diagnosis: Clinical: shifting dullness, fluid thrill — exam से detect होती है moderate-large ascites। Ultrasound Abdomen: even small amount detect — 100mL से कम भी। Diagnostic Paracentesis (fluid tap): important step। 50-100mL fluid लिया जाता है analysis के लिए। SAAG (Serum-Ascites Albumin Gradient): ≥1.1 → portal hypertension (cirrhosis, heart failure)। <1.1 → malignancy, TB, pancreatitis। Cell count: SBP (spontaneous bacterial peritonitis) rule out — PMN >250 cells। Protein, LDH, ADA, cytology — as needed। Cause-specific workup: LFT, viral markers, liver imaging।",
      },
      {
        heading: "Ascites Treatment — Dr. Akhilesh Yadav Ranchi का Approach",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में cirrhotic ascites manage करते हैं:",
        list: [
          "Salt restriction: 2g/day sodium — Jharkhand food में — अचार, पापड़, नमकीन avoid",
          "Diuretics: Spironolactone (aldactone) + Furosemide (lasix) — standard combination",
          "Monitoring: daily weight, urine output, electrolytes (potassium especially)",
          "Large Volume Paracentesis (LVP): >5L ascites — albumin infusion साथ ज़रूर",
          "TIPS (Transjugular Intrahepatic Portosystemic Shunt): refractory ascites — specialized procedure",
          "SBP Prevention: norfloxacin prophylaxis in high-risk patients",
          "Liver transplant evaluation: end-stage liver disease — timely referral",
          "Avoid NSAIDs, nephrotoxic drugs — worsens kidney function",
        ],
      },
      {
        heading: "SBP — Ascites की Dangerous Complication",
        type: "text",
        content: "SBP (Spontaneous Bacterial Peritonitis) — ascitic fluid में infection — cirrhosis patients में 10-30% होता है। Dangerous: 20-30% mortality अगर late diagnose हो। Dr. Akhilesh Yadav Ranchi में SBP के बारे में patients को alert करते हैं। Symptoms: fever, abdominal pain, mental confusion (encephalopathy) — या कोई symptom नहीं भी। Diagnosis: paracentesis — PMN >250 cells/mm3। Treatment: IV antibiotics (cefotaxime/ceftriaxone) + albumin infusion। Prevention: norfloxacin (400mg daily) — high-risk patients में। Message: ascites patient में fever या pain होने पर immediately Dr. Akhilesh Yadav से contact करें — SBP emergency है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Ascites",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ascites एक warning sign है कि liver disease advanced हो चुकी है। लेकिन proper management से patients सालों तक quality life जी सकते हैं। Salt restriction, diuretics, और regular monitoring — यह simple steps बहुत important हैं। और कोई भी fever, confusion, या sudden pain — immediately आओ — SBP emergently treat होनी चाहिए।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Ascites के लिए DM Gastroenterologist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Ascites में diet में क्या avoid करें — Jharkhand के context में?",
        a: "Salt restriction <2g/day: avoid करें — अचार (बहुत high salt), पापड़, नमकीन, packaged foods, ketchup। Limit करें: दाल में नमक (less), चटनी में नमक। Okay है: सत्तू का पानी (बिना नमक), छाछ (बिना नमक), plain rice, dal without salt। Dr. Akhilesh Yadav Ranchi में detailed diet counseling देते हैं।",
      },
      {
        q: "Paracentesis कितनी बार करवानी पड़ती है?",
        a: "Depends on ascites re-accumulation rate। Refractory ascites (diuretics नहीं सुनती) में: हर 2-4 हफ्ते। Controlled ascites में: ज़रूरत नहीं — diet + diuretics काफी। Dr. Akhilesh Yadav Ranchi में frequency decide करते हैं ultrasound और clinical assessment के बाद।",
      },
      {
        q: "क्या ascites से liver transplant ज़रूरी है?",
        a: "Ascites होना मतलब transplant नहीं — लेकिन liver disease evaluation ज़रूर है। Refractory ascites (diuretics resistant) में MELD score high होता है — transplant evaluation consider होती है। Dr. Akhilesh Yadav Ranchi में MELD/Child-Pugh score assess करते हैं और timely referral करते हैं अगर ज़रूरी हो।",
      },
    ],
  },

  {
    slug: "ranchi-mein-fatty-liver-diet",
    titleHi: "रांची में Fatty Liver Diet — क्या खाएं क्या ना खाएं | Dr. Akhilesh Yadav",
    titleEn: "Fatty Liver Diet in Ranchi — What to Eat & Avoid | Dr. Akhilesh Yadav",
    excerptHi: "रांची में fatty liver diet guide: Dr. Akhilesh Yadav — Orchid Medical Centre. Jharkhand के local foods में क्या ठीक है, क्या avoid करें — complete diet plan।",
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
        heading: "Fatty Liver Diet — क्यों इतना Important है",
        type: "text",
        content: "Ranchi के Suresh Prasad — 48 साल, Grade 2 fatty liver — ने Dr. Akhilesh Yadav से मिला। Dr. ने उन्हें medicines देने के बजाए पहले diet और lifestyle change की बात की। 6 महीने बाद: SGPT normal, ultrasound Grade 1 fatty liver। Diet alone ने grade reduce कर दिया। Fatty liver (NAFLD/MASLD) में कोई specific approved medicine नहीं है अभी तक — diet और exercise ही primary treatment है। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में कहते हैं: 'Fatty liver में सही खाना आधी battle जीत लेता है।'",
      },
      {
        heading: "Fatty Liver में क्या AVOID करें — Jharkhand Context",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi में fatty liver patients को यह avoid करने की सलाह देते हैं:",
        list: [
          "Maida (refined flour): लिट्टी का आटा ठीक है (sattu/wheat), मैदा (पूरी, समोसा, bread) avoid",
          "Refined sugar: शक्कर, मिठाई — liver में fat convert होती है",
          "Alcohol: बिलकुल avoid — alcoholic fatty liver में major trigger",
          "Deep-fried foods: जलेबी, पकोड़ा, तला हुआ खाना",
          "Packaged/processed: biscuit, chips, नमकीन — transfat + refined carbs",
          "Fructose-rich drinks: soft drinks (Coca-Cola, Pepsi), packaged fruit juices",
          "Full-fat dairy excess: too much cream, paneer in large amounts",
          "White rice in excess: low fiber, high glycemic index — replace with brown rice or millets",
        ],
      },
      {
        heading: "Fatty Liver में क्या खाएं — Jharkhand के Local Foods",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi में यह foods fatty liver patients के लिए recommend करते हैं:",
        list: [
          "सत्तू का पानी (बिना शक्कर/नमक) — high protein, low glycemic — excellent for fatty liver",
          "छाछ (बिना नमक, chilled) — probiotics, low fat",
          "मक्का (maize) रोटी या poha — better than maida",
          "बाजरा/ज्वार रोटी — high fiber, low glycemic — excellent grain choice",
          "Papaya — liver-friendly, low sugar, high fiber",
          "लौकी (bottle gourd), करेला (bitter gourd), पालक — all good for liver",
          "दाल (अरहर, मसूर, मूंग) — high protein, low fat",
          "Fish (रहु, कतला — freshwater) — omega-3, low saturated fat",
          "अजवाइन पानी, हल्दी दूध (limited quantity) — anti-inflammatory",
          "Green tea — catechins, mild liver benefit evidence",
        ],
      },
      {
        heading: "Fatty Liver Diet — Exercise भी ज़रूरी है",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में emphasize करते हैं: 'Diet के साथ exercise नहीं तो results half होंगे।' Recommended: 150-180 min/week moderate exercise — तेज़ चलना (brisk walk) best। 10,000 steps/day target। Strength training 2-3 times/week — muscle mass increases fat burning। Weight loss: 5-10% body weight loss से NAFLD grade improve होती है। 10%+ loss से NASH (inflammation) भी reduce होती है। Even without weight loss — exercise liver fat reduce करती है। Ranchi में morning walk spots: Jubilee Park, Kanke Dam road, XLRI road — सभी accessible हैं।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Fatty Liver Diet",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Jharkhand के patients के पास actually बहुत सारी liver-friendly चीज़ें available हैं — सत्तू का पानी, छाछ, papaya, बाजरा रोटी, fresh fish — मैं उन्हें global Mediterranean diet recommend करने की जगह उनकी local food culture में ही solution ढूंढता हूँ। Sustainable diet वह है जो local, affordable, और tasty हो।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Personalized diet के लिए consultation ज़रूर लें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या लिट्टी-चोखा fatty liver में खा सकते हैं?",
        a: "लिट्टी-चोखा: sattu filling (ठीक है — high protein), लेकिन traditional लिट्टी घी में पकती है — calories ज़्यादा। Baked/roasted लिट्टी (tandoor/tawa) — better option। चोखा (roasted eggplant/tomato + प्याज़ + हरी मिर्च — बिना excess घी) — okay। घी quantity limit करें — 1-2 चम्मच per day total।",
      },
      {
        q: "क्या coconut water (नारियल पानी) fatty liver में ठीक है?",
        a: "हाँ — moderate amount (1 glass/day) okay है। Natural electrolytes, low calorie। Packaged coconut water में sugar add होता है — avoid करें। Fresh नारियल पानी better।",
      },
      {
        q: "Fatty liver में weight loss काफी fast करना चाहिए?",
        a: "नहीं — rapid weight loss (>1.5 kg/week) paradoxically fatty liver worsen कर सकता है — especially if on very low-calorie diet। Safe rate: 0.5-1 kg per week। Dr. Akhilesh Yadav Ranchi में sustainable weight loss plan — crash diet recommend नहीं करते।",
      },
      {
        q: "क्या हल्दी (turmeric) fatty liver में help करती है?",
        a: "Curcumin (हल्दी का active compound) में anti-inflammatory evidence है — small clinical trials में NAFLD में mild benefit। हल्दी दूध या daily cooking में हल्दी — safe addition। Supplement dose अलग है — Dr. से पूछें before taking curcumin supplements।",
      },
    ],
  },

  {
    slug: "ranchi-mein-h-pylori-treatment",
    titleHi: "रांची में H. Pylori Treatment — H Pylori का इलाज | Dr. Akhilesh Yadav",
    titleEn: "H. Pylori Treatment in Ranchi — Helicobacter Pylori Cure | Dr. Akhilesh Yadav",
    excerptHi: "रांची में H. Pylori (Helicobacter Pylori) treatment: Dr. Akhilesh Yadav — Orchid Medical Centre. Triple therapy, quadruple therapy, resistance patterns — complete treatment guide।",
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
        heading: "H. Pylori — Ranchi में कितना Common है",
        type: "text",
        content: "H. Pylori (Helicobacter Pylori) एक bacteria है जो stomach की lining में रहता है — ulcer और gastric cancer का major risk factor। India में prevalence: 50-70% adults। Jharkhand में — safe drinking water access की कमी से H. Pylori transmission ज़्यादा है। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में कहते हैं: 'Ranchi में endoscopy पर जो patients आते हैं, उनमें से 40-50% में H. Pylori positive मिलता है — ulcer के साथ या बिना।' H. Pylori treatable है — लेकिन antibiotic resistance increasing है India में।",
      },
      {
        heading: "H. Pylori कैसे Spread होता है — और किसे ज़्यादा Risk",
        type: "list",
        content: "H. Pylori transmission और risk factors जो Dr. Akhilesh Yadav Ranchi में discuss करते हैं:",
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
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में H. Pylori के लिए evidence-based treatment देते हैं: Standard Triple Therapy (14 days): PPI (omeprazole 20mg BD) + Clarithromycin 500mg BD + Amoxicillin 1g BD। Eradication rate: ~70-80% (clarithromycin resistance बढ़ रही है India में)। Bismuth Quadruple Therapy (14 days): PPI + Bismuth + Metronidazole + Tetracycline। Eradication rate: ~85-90% — preferred in high clarithromycin resistance areas। Sequential Therapy: 5 days amoxicillin + 5 days clarithromycin/metronidazole combination। Salvage Therapy (failed first-line): levofloxacin-based regimen। Dr. Akhilesh Yadav local resistance patterns देखकर appropriate regimen choose करते हैं।",
      },
      {
        heading: "H. Pylori Eradication Confirm करना ज़रूरी है",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में emphasize करते हैं: H. Pylori treatment के बाद eradication confirm करना mandatory है — सिर्फ symptoms ठीक होने से नहीं पता चलता। Urea Breath Test (UBT): Gold standard non-invasive। 4-6 हफ्ते after completing treatment। 2 हफ्ते पहले PPI बंद करना ज़रूर। Stool Antigen Test: alternative — less commonly used in India। Repeat Endoscopy: अगर ulcer था — heal होने का confirm करना ज़रूर (especially gastric ulcer — cancer rule out)। Failed first-line: salvage therapy — Dr. Akhilesh Yadav Ranchi में guide करते हैं। Reinfection: possible — hand hygiene, safe water important।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — H. Pylori Treatment",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'H. Pylori treatment में तीन चीज़ें important हैं: सही regimen, पूरा course (14 दिन — बीच में मत छोड़ो), और eradication confirm करना। Ranchi में मैं often bismuth quadruple therapy use करता हूँ क्योंकि clarithromycin resistance local में काफी है। और patient को बोलता हूँ: antibiotics का पूरा course लो — वरना bacteria वापस आ सकता है और मुश्किल हो जाता है treat करना।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। H. Pylori के लिए gastroenterologist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "H. Pylori test Ranchi में कैसे होता है?",
        a: "Multiple options: Endoscopy + biopsy (RUT — rapid urease test + histology): most common in India — Dr. Akhilesh Yadav Orchid Medical Centre में करते हैं। Urea Breath Test (UBT): available at select labs — eradication confirmation के लिए better। Stool Antigen Test: less commonly used। Blood H. Pylori IgG: past infection बताता है — current active infection के लिए better tests preferred।",
      },
      {
        q: "H. Pylori positive है पर कोई symptoms नहीं — treatment करनी चाहिए?",
        a: "हाँ — अगर H. Pylori positive है, treatment recommended है even without symptoms। Reasons: ulcer prevention, gastric cancer risk reduction, family clustering prevention। Dr. Akhilesh Yadav Ranchi में individual case के basis पर decide करते हैं।",
      },
      {
        q: "H. Pylori treatment के बाद क्या खाएं?",
        a: "During treatment: probiotics (दही, probiotic capsule) साथ लेना antibiotics से antibiotic-associated diarrhea reduce करता है। After treatment: regular balanced diet। Avoid: NSAIDs (ibuprofen, naproxen) — ulcer risk। Alcohol: avoid during treatment। Smoking: quit — healing slow करता है।",
      },
      {
        q: "क्या H. Pylori family में एक से दूसरे को हो सकता है?",
        a: "हाँ — H. Pylori family clusters में मिलता है। अगर एक member positive है: screen other family members (especially जो symptomatic हैं)। Shared utensils, water sources से spread। Hand hygiene, safe drinking water — prevention keys। Dr. Akhilesh Yadav Ranchi में family screening guide करते हैं।",
      },
    ],
  },

  // ── BATCH 13: BLOGS 61–65 (FINAL) ─────────────────────────────────────────────

  {
    slug: "gallstone-doctor-ranchi",
    titleHi: "Gallstone Doctor Ranchi — पित्थे की पथरी का इलाज | Dr. Akhilesh Yadav",
    titleEn: "Gallstone Doctor in Ranchi — Gallbladder Stone Treatment | Dr. Akhilesh Yadav",
    excerptHi: "रांची में gallstone (पित्थे की पथरी) के specialist: Dr. Akhilesh Yadav — Orchid Medical Centre. Gallstone diagnosis, ERCP (bile duct stone), और surgical referral — complete guide।",
    excerptEn: "Gallstone specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Gallbladder & bile duct stone diagnosis, ERCP & surgical referral for Jharkhand patients.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🪨",
    tags: ["gallstone doctor ranchi", "pittha ki pathri ranchi", "gallbladder stone ranchi", "bile duct stone ranchi", "ERCP ranchi", "gastroenterologist ranchi"],
    metaTitle: "Gallstone Doctor Ranchi | Pittha Ki Pathri | Dr. Akhilesh Yadav",
    metaDescription: "Gallstone (pittha ki pathri) specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Gallbladder & bile duct stone diagnosis, ERCP & management.",
    sections: [
      {
        heading: "पित्थे की पथरी — Ranchi में कितना Common है",
        type: "text",
        content: "पित्थे की पथरी (gallstone) India में बहुत common है — women में ज़्यादा (4F rule: Female, Forty, Fat, Fertile)। Jharkhand में भी high prevalence है। Ranchi के कई patients Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — के पास gallstone-related problems लेकर आते हैं: upper right belly pain, jaundice (bile duct stone), और acute pancreatitis (gallstone-induced)। Gallstone दो types में होते हैं: gallbladder stones (ज़्यादा common) और bile duct stones (choledocholithiasis) — दोनों का management अलग होता है।",
      },
      {
        heading: "Gallstone Symptoms — कब Doctor से मिलें",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi में gallstone के यह symptoms में immediately मिलने को कहते हैं:",
        list: [
          "Biliary colic: upper right abdomen में sudden severe pain — fatty meal के बाद ज़्यादा",
          "Pain जो right shoulder तक जाता है (referred pain)",
          "Nausea और vomiting biliary colic के साथ",
          "Jaundice (skin/eyes पीले) + pale stools + dark urine — bile duct stone sign",
          "Fever + jaundice + pain (Charcot's triad) — cholangitis emergency",
          "Acute pancreatitis: severe upper abdominal pain — gallstone trigger",
          "Murphy's sign: right upper quadrant press करने पर pain — cholecystitis",
        ],
      },
      {
        heading: "Gallstone Diagnosis और Role of Gastroenterologist",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में gallstone workup करते हैं: Ultrasound abdomen: gallbladder stones diagnose — 95%+ sensitivity। Size, number, sludge vs stones। Bile duct: dilated या नहीं। LFT: bilirubin, ALP elevated — bile duct obstruction suspect। MRCP (MRI Cholangiopancreatography): bile duct stone का best non-invasive imaging — Dr. Akhilesh Yadav arrange करते हैं Ranchi में। ERCP: bile duct stone confirmed → therapeutic ERCP — Dr. Akhilesh Yadav Orchid Medical Centre में करते हैं। EUS: ERCP से पहले bile duct stone confirm करना — especially small stones। Surgery referral: gallbladder stones के लिए laparoscopic cholecystectomy — surgical team के पास refer।",
      },
      {
        heading: "Bile Duct Stone — ERCP से कैसे निकाला जाता है",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में bile duct stone ERCP से निकालते हैं: ERCP (Endoscopic Retrograde Cholangiopancreatography) — scope mouth से → duodenum → bile duct opening। Sphincterotomy: bile duct का opening ज़्यादा किया जाता है। Stone extraction: basket या balloon catheter से stone निकलता है। Stent placement: incomplete clearance में temporary stent। Success rate: 85-95%। Post-ERCP: gallbladder stones के लिए surgery refer। Dr. Akhilesh Yadav Ranchi में regular ERCP करते हैं — Jharkhand के patients के लिए locally available advanced procedure।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Gallstone",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Gallstone में gastroenterologist का role है bile duct stone manage करना और pancreatitis या cholangitis treat करना — gallbladder surgery surgeon का काम है। दोनों मिलकर patient का best treatment plan बनाते हैं। Ranchi में मैं ERCP करता हूँ — bile duct clear करता हूँ — और फिर surgeon gallbladder निकालते हैं। एक शहर में सब available है — Patna या Kolkata जाने की ज़रूरत नहीं।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या gallstone अपने आप निकल जाता है?",
        a: "Gallbladder stone अपने आप नहीं निकलता — surgical removal (laparoscopic cholecystectomy) ज़रूरी होती है symptomatic stones में। Bile duct stone कभी-कभी pass हो सकता है naturally — लेकिन risk ज़्यादा होता है (cholangitis, pancreatitis)। Treatment ज़रूर करवाएं — ignore मत करें।",
      },
      {
        q: "Fatty diet छोड़ देने से gallstone ठीक हो जाता है?",
        a: "नहीं — fat avoid करने से biliary colic episodes कम होते हैं (stone trigger नहीं होता), लेकिन stone नहीं जाता। Long-term: gallstone वहाँ ही रहेगा। Symptomatic gallstone का definitive treatment surgery है। Dr. Akhilesh Yadav Ranchi में appropriate surgical referral देते हैं।",
      },
      {
        q: "Pregnancy में gallstone — क्या ERCP safe है?",
        a: "Pregnancy में symptomatic bile duct stone/cholangitis emergency में ERCP possible है — radiation minimize करके (या EUS-guided) या MRCP-guided। Risk-benefit discussion ज़रूरी। Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में pregnancy-related GI emergency cases coordinate करते हैं।",
      },
      {
        q: "Gallstone में क्या diet follow करें?",
        a: "Low-fat diet: घी, तेल, cream, fried foods — limit करें। Biliary colic trigger होता है fatty meals से। Fiber ज़्यादा: vegetables, whole grains। Jharkhand में: सत्तू का पानी (बिना घी), छाछ (low fat), लौकी/पालक — okay। लिट्टी: घी कम करें। Post-surgery: normal diet resume होती है 2-4 weeks में।",
      },
    ],
  },

  {
    slug: "ranchi-mein-diarrhea-doctor",
    titleHi: "रांची में Diarrhea Doctor — दस्त का Specialist | Dr. Akhilesh Yadav",
    titleEn: "Diarrhea Doctor in Ranchi — Loose Motion Specialist | Dr. Akhilesh Yadav",
    excerptHi: "रांची में diarrhea (दस्त/loose motion) specialist: Dr. Akhilesh Yadav — Orchid Medical Centre. Acute vs chronic diarrhea — कब alarm है, कब routine — diagnosis और treatment।",
    excerptEn: "Diarrhea specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Acute vs chronic loose motion — when it's an emergency, causes, diagnosis & treatment.",
    category: "symptoms",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🚨",
    tags: ["diarrhea doctor ranchi", "loose motion doctor ranchi", "dast ka doctor ranchi", "chronic diarrhea ranchi", "gastroenterologist ranchi"],
    metaTitle: "Diarrhea Doctor Ranchi | Loose Motion Specialist | Dr. Akhilesh Yadav",
    metaDescription: "Diarrhea (loose motion/dast) specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Acute vs chronic diarrhea causes, red flags & treatment.",
    sections: [
      {
        heading: "दस्त — कब Normal है, कब Doctor के पास जाएं",
        type: "text",
        content: "Ranchi में दस्त (loose motions/diarrhea) एक common complaint है — especially monsoon में जब waterborne infections ज़्यादा होती हैं। दस्त: दिन में 3 या ज़्यादा loose/watery stools। Acute: <2 हफ्ते — mostly viral या bacterial infection — self-limiting। Persistent: 2-4 हफ्ते। Chronic: >4 हफ्ते — serious cause suspect करें। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में कहते हैं: 'Jharkhand में monsoon diarrhea common है — waterborne। लेकिन chronic diarrhea IBS, IBD, celiac, और even cancer हो सकता है — ignore नहीं करना चाहिए।'",
      },
      {
        heading: "Diarrhea — कब Emergency है (Red Flags)",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi में यह red flags में immediately मिलने को कहते हैं:",
        list: [
          "Blood या mucus in stool — bloody diarrhea",
          "Severe dehydration: extreme thirst, no urination, dizziness",
          "High fever (>38.5°C) with diarrhea",
          "Severe abdominal pain with diarrhea",
          "Elderly या children में — dehydration fast होती है",
          "Immunocompromised patients (HIV, cancer, steroids)",
          "Diarrhea after foreign travel या hospital stay",
          "Chronic diarrhea >4 हफ्ते — any cause",
          "Weight loss के साथ diarrhea — alarm symptom",
        ],
      },
      {
        heading: "Chronic Diarrhea — Common Causes जो Dr. Akhilesh Yadav Diagnose करते हैं",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में chronic diarrhea के यह causes systematically rule out करते हैं: IBS-D (Irritable Bowel Syndrome — Diarrhea predominant): most common। Diagnosis of exclusion। IBD (Crohn's/Ulcerative Colitis): blood/mucus, weight loss, night-time diarrhea। Celiac Disease: wheat से triggered, anemia साथ। Microscopic Colitis: elderly women में watery diarrhea, colonoscopy normal लग सकती है — biopsy ज़रूर। Intestinal TB: Jharkhand में TB prevalent — GI involvement। Chronic Infection: Giardia, Cryptosporidium — well water use करने वालों में। Post-infectious IBS: acute gastroenteritis के बाद gut sensitized। Functional Diarrhea: stress-related, no organic cause।",
      },
      {
        heading: "Diarrhea में Diet — ORS और Beyond",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में acute diarrhea में guide करते हैं: ORS (Oral Rehydration Solution): ज़रूर — WHO-recommended। घर पर बनाएं: 1 litre पानी + 6 चम्मच sugar + half चम्मच नमक। दही (yogurt): probiotics — recovery speed करते हैं। BRAT diet: Banana, Rice (white), Applesauce, Toast — bland, easy to digest। सत्तू का पानी (plain, no salt/sugar in excess) — electrolytes + easy digestion। Avoid: dairy (lactose temporarily intolerant after infection), oily food, raw vegetables। Oral rehydration prefer करें — IV drip सिर्फ severe dehydration में। Zinc supplementation (children में especially) — diarrhea duration reduce करता है।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Diarrhea",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Ranchi में दस्त के जो cases मैं देखता हूँ, उनमें एक pattern है — monsoon में acute infections, और साल भर chronic IBS या undiagnosed IBD। दोनों अलग conditions हैं — अलग treatment। ORS से acute diarrhea manage हो जाती है — लेकिन अगर एक महीने से ज़्यादा हो रहा है, तो बिना colonoscopy के diagnosis नहीं होगी। Guessing मत करो — diagnose करो।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "क्या antibiotics हर diarrhea में लेने चाहिए?",
        a: "नहीं — viral diarrhea में antibiotics काम नहीं करते (most acute diarrhea viral होती है)। Antibiotics: bacterial causes में (bloody diarrhea, high fever, travel history, C. diff)। Self-prescription avoid करें — antibiotic resistance बढ़ती है। Dr. Akhilesh Yadav Ranchi में stool test के बाद appropriate antibiotic decide करते हैं।",
      },
      {
        q: "क्या IBS का diarrhea infectious diarrhea से अलग होता है?",
        a: "हाँ: IBS-D — lower abdominal cramps के साथ loose stools, stress/meals से worse, usually blood नहीं, night-time diarrhea unusual। Infectious diarrhea: sudden onset, fever possible, recent contaminated food/water, resolves in days-weeks। Chronic IBS pattern: months-years। Dr. Akhilesh Yadav Ranchi में history से distinguish करते हैं — stool tests और colonoscopy से confirm करते हैं।",
      },
      {
        q: "बच्चों में diarrhea — कब hospital जाएं?",
        a: "तुरंत hospital: 6 घंटे से ज़्यादा कोई पेशाब नहीं, sunken eyes, dry mouth/tongue, lethargy। Under 2 साल: 24 घंटे में better नहीं तो doctor। All ages: blood in stool, high fever, severe pain। ORS पानी जब भी diarrhea start हो — start immediately। Dr. Akhilesh Yadav adult और paediatric GI cases दोनों देखते हैं Ranchi में।",
      },
    ],
  },

  {
    slug: "ranchi-mein-nausea-doctor",
    titleHi: "रांची में Nausea Doctor — उल्टी की Feeling का Specialist | Dr. Akhilesh Yadav",
    titleEn: "Nausea Doctor in Ranchi — Chronic Nausea & Vomiting Specialist | Dr. Akhilesh Yadav",
    excerptHi: "रांची में nausea (उल्टी आने की feeling) specialist: Dr. Akhilesh Yadav — Orchid Medical Centre. Chronic nausea, vomiting causes — GI, neurological, metabolic — diagnosis guide।",
    excerptEn: "Nausea and vomiting specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Chronic nausea causes, GI workup, red flags & treatment for Jharkhand patients.",
    category: "symptoms",
    readTimeMins: 6,
    publishedAt: "August 2026",
    emoji: "🤢",
    tags: ["nausea doctor ranchi", "ulti ka doctor ranchi", "vomiting specialist ranchi", "chronic nausea ranchi", "gastroenterologist ranchi"],
    metaTitle: "Nausea Doctor Ranchi | Ulti Specialist | Dr. Akhilesh Yadav",
    metaDescription: "Nausea and vomiting specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Chronic nausea causes, GI workup & treatment for Jharkhand patients.",
    sections: [
      {
        heading: "Nausea — GI Doctor के पास कब जाएं",
        type: "text",
        content: "Nausea (उल्टी आने की feeling) और vomiting एक common complaint है — लेकिन behind it many causes होते हैं। Ranchi से आए 38 साल के Ramesh — 3 महीने से सुबह सुबह nausea, कभी कभी उल्टी — doctor ने pregnancy test suggest किया (male patient — clearly नहीं था relevant)। Orchid Medical Centre में Dr. Akhilesh Yadav — DM Gastroenterology — ने endoscopy की: gastric outlet partial obstruction — peptic ulcer stricture। GI causes of nausea बहुत varied होते हैं — gastroenterologist proper evaluation करता है। Ranchi में Dr. Akhilesh Yadav systematic approach लेते हैं nausea diagnosis में।",
      },
      {
        heading: "Nausea — GI Causes जो Dr. Akhilesh Yadav Ranchi में Diagnose करते हैं",
        type: "list",
        content: "Nausea के GI causes:",
        list: [
          "GERD (acid reflux): nausea especially morning में या खाने के बाद",
          "Gastroparesis: stomach emptying slow — diabetic में common",
          "H. Pylori gastritis: chronic nausea, bloating, burping",
          "Peptic Ulcer: nausea + epigastric pain",
          "Gastric outlet obstruction: pyloric stenosis (post-ulcer stricture, cancer)",
          "Functional Dyspepsia: no organic cause — very common in Ranchi",
          "Hepatitis / Liver disease: nausea + jaundice + right upper quadrant",
          "Pancreatitis: severe nausea + vomiting + upper abdominal pain",
          "Intestinal obstruction: vomiting + no bowel movement + distension",
          "Cyclical Vomiting Syndrome: episodic severe vomiting — migraine related",
        ],
      },
      {
        heading: "Nausea — Red Flags जो GI Specialist को दिखाएं",
        type: "list",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में यह cases urgent देखते हैं:",
        list: [
          "Blood in vomit (hematemesis) — emergency",
          "Projectile vomiting — gastric outlet obstruction suspect",
          "Nausea + jaundice — liver/bile duct problem",
          "Nausea + weight loss >5% — cancer/serious cause",
          "Severe dehydration with vomiting — IV fluid ज़रूर",
          "Unable to keep any liquid down >24 hrs",
          "Nausea after head injury — neurological cause",
          "New medicines recently started — drug-induced",
        ],
      },
      {
        heading: "Chronic Nausea — Workup क्या होगा",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में chronic nausea workup: History: timing (morning, post-meal, random), relation to food, associated symptoms (pain, bloating, heartburn, weight loss)। Blood tests: LFT, blood sugar (diabetic gastroparesis), thyroid (hypothyroidism = nausea), serum electrolytes। Endoscopy (OGD Scopy): mucosal causes, H. Pylori, outlet obstruction। Ultrasound: liver, gallbladder, pancreas। Gastric emptying study: gastroparesis confirm करना (nuclear medicine scan — specialized centres)। CT abdomen: mass, obstruction, pancreatitis। Treatment: cause-specific — prokinetics (metoclopramide, domperidone) for gastroparesis; H. Pylori treatment if positive; PPI for GERD-related nausea।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Nausea",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Nausea एक symptom है, disease नहीं। मैं हमेशा पूछता हूँ — कब होती है? खाने से पहले या बाद? डर से या stress से? कोई नई दवाई? पहले यह answers clear करें — फिर test। Ranchi में patients अक्सर सिर्फ anti-nausea medicines लेते रहते हैं बिना cause ढूंढे — यह बंद करो, cause ढूंढो।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "सुबह सुबह nausea — क्या यह always pregnancy का sign है?",
        a: "महिलाओं में pregnancy confirm करना ज़रूर है morning nausea में — pregnancy test simple है। लेकिन morning nausea पुरुषों में या post-menopausal महिलाओं में: GERD, H. Pylori, gastroparesis, hypothyroidism, alcohol use, medications, या systemic causes। Dr. Akhilesh Yadav Ranchi में complete evaluation करते हैं।",
      },
      {
        q: "क्या nausea के लिए endoscopy ज़रूर है?",
        a: "Chronic nausea (>4 हफ्ते) में या red flags होने पर — हाँ, endoscopy important है mucosal cause rule out करने के लिए। Acute nausea (days) में usually endoscopy नहीं ज़रूर। Dr. Akhilesh Yadav case के हिसाब से decide करते हैं Ranchi में।",
      },
      {
        q: "Diabetes में nausea क्यों होती है?",
        a: "Diabetic gastroparesis — stomach की muscles damage (autonomic neuropathy) से — slow emptying। Symptoms: nausea, early satiety, bloating, vomiting undigested food hours बाद। HbA1c control improve करना, small frequent meals, prokinetics (metoclopramide) — treatment। Dr. Akhilesh Yadav Ranchi में diabetic GI complications diagnose और manage करते हैं।",
      },
    ],
  },

  {
    slug: "ranchi-mein-abdominal-pain-doctor",
    titleHi: "रांची में Abdominal Pain Doctor — पेट दर्द Specialist | Dr. Akhilesh Yadav",
    titleEn: "Abdominal Pain Doctor in Ranchi — Stomach Pain Specialist | Dr. Akhilesh Yadav",
    excerptHi: "रांची में पेट दर्द (abdominal pain) specialist: Dr. Akhilesh Yadav — Orchid Medical Centre. Acute vs chronic abdominal pain — causes, red flags, diagnosis और treatment।",
    excerptEn: "Abdominal pain specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Acute vs chronic stomach pain, red flags, GI causes, diagnosis & treatment.",
    category: "symptoms",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🫀",
    tags: ["abdominal pain doctor ranchi", "pet dard doctor ranchi", "stomach pain ranchi", "chronic abdominal pain ranchi", "gastroenterologist ranchi"],
    metaTitle: "Abdominal Pain Doctor Ranchi | Pet Dard Specialist | Dr. Akhilesh Yadav",
    metaDescription: "Abdominal pain specialist in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. GI causes, red flags & diagnosis of acute & chronic stomach pain in Jharkhand.",
    sections: [
      {
        heading: "पेट दर्द — एक Symptom, हज़ार Causes",
        type: "text",
        content: "पेट दर्द (abdominal pain) सबसे common GI complaint है — लेकिन causes में बहुत variety है। Upper right: gallbladder, liver। Upper middle (epigastric): stomach, pancreas, heart (referred)। Upper left: spleen, stomach, pancreas tail। Lower right: appendix, right ovary, ileum (Crohn's)। Lower left: colon (diverticulitis, colitis)। Diffuse: IBS, peritonitis, obstruction। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में कहते हैं: 'पेट दर्द की location, character, और timing बता देता है 70% diagnosis — अगर carefully history लिया जाए।' Ranchi में Dr. Akhilesh Yadav systematic GI evaluation करते हैं।",
      },
      {
        heading: "पेट दर्द में Emergency Red Flags — Immediately मिलें",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi में यह symptoms में urgent देखते हैं:",
        list: [
          "Sudden severe 'worst-ever' pain — perforation, aortic aneurysm, mesenteric ischemia",
          "Rigid board-like abdomen — peritonitis",
          "Pain + vomiting blood या black stools",
          "Pain + fever >38.5°C — infection/abscess",
          "Pain + jaundice — bile duct obstruction, cholangitis",
          "Pain + inability to pass gas or stool — obstruction",
          "Pain + altered consciousness",
          "Recurrent severe pain in elderly — ischemia suspect",
          "Pain + unintentional weight loss — malignancy",
        ],
      },
      {
        heading: "Chronic Abdominal Pain — GI Causes और Diagnosis",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में chronic abdominal pain systematically diagnose करते हैं: Functional causes (most common): IBS — abdominal cramps, altered bowel habit, no structural cause। Functional dyspepsia — epigastric pain, bloating। Structural causes: Peptic ulcer — epigastric, worse empty stomach। Crohn's disease — lower right, diarrhea, weight loss। Gastric/colon cancer — progressive, weight loss, alarm symptoms। Chronic pancreatitis — upper abdominal radiating to back, post-meal worse। Workup: Blood (CBC, LFT, CRP, amylase), stool (infection, occult blood), ultrasound, endoscopy, colonoscopy। Advanced: CT scan, MRCP, capsule endoscopy — as indicated by Dr. Akhilesh Yadav।",
      },
      {
        heading: "पेट दर्द में Jharkhand-Specific Considerations",
        type: "text",
        content: "Dr. Akhilesh Yadav Ranchi में Jharkhand-specific conditions note करते हैं जो पेट दर्द cause कर सकती हैं: Intestinal TB: ileocaecal area (lower right pain) — Jharkhand में TB prevalent। Misdiagnosed as Crohn's, appendicitis। Entamoeba histolytica (amoebic colitis): contaminated water — right-sided colitis pain। Giardiasis: upper GI discomfort, bloating, foul-smelling loose stools — well water users। Kala-azar: splenomegaly — left-sided heaviness, fever। Alcohol-related pancreatitis: Jharkhand tribal areas में mahua alcohol — chronic pancreatitis। Celiac disease: lower/diffuse abdominal cramping — wheat staple diet area में underdiagnosed।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Abdominal Pain",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'पेट दर्द को normal मत समझो। Jharkhand में मैंने ऐसा देखा है — लोग सालों तक दर्द को ठंडी मछली या कुछ खाने से जोड़कर ignore करते हैं — और बाद में cancer मिलता है advanced stage में। एक rule: पेट दर्द जो 4 हफ्ते से ज़्यादा है, या जो weight loss या blood के साथ है — endoscopy ज़रूर। Delay से कुछ नहीं मिलता।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "Antacid से पेट दर्द ठीक हो जाता है तो serious तो नहीं है ना?",
        a: "ज़रूर नहीं। Antacid temporarily acid suppress करता है — लेकिन peptic ulcer, early gastric cancer, और even cardiac pain कभी कभी antacid से temporarily better feel होती है। अगर pain regularly antacid से आता-जाता है — pattern बनाया हुआ है — endoscopy ज़रूर करवाओ। Dr. Akhilesh Yadav Ranchi में antacid-responsive pain भी properly evaluate करते हैं।",
      },
      {
        q: "पेट दर्द में ultrasound काफी है या endoscopy भी ज़रूर?",
        a: "Ultrasound: gallbladder, liver, kidney, pancreas — external structures। Endoscopy: stomach, esophagus, duodenum — mucosal surface — ulcer, cancer, H. Pylori। दोनों अलग चीज़ें देखते हैं — एक दूसरे का substitute नहीं। Dr. Akhilesh Yadav Ranchi में history के हिसाब से decide करते हैं दोनों में से कौनसा या दोनों ज़रूर हैं।",
      },
      {
        q: "IBS में पेट दर्द कितना severe हो सकता है?",
        a: "IBS में pain moderate to severe हो सकती है — crampy, lower abdominal, stool के बाद better। IBS में: red flags नहीं (blood, weight loss, fever, night-time awakening)। Dr. Akhilesh Yadav Ranchi में IBS diagnosis exclusion के बाद देते हैं — organic causes पहले rule out होते हैं। IBS management: diet, stress reduction, antispasmodics।",
      },
    ],
  },

  {
    slug: "ranchi-mein-liver-cancer-screening",
    titleHi: "रांची में Liver Cancer Screening — HCC Detection | Dr. Akhilesh Yadav",
    titleEn: "Liver Cancer Screening in Ranchi — HCC Early Detection | Dr. Akhilesh Yadav",
    excerptHi: "रांची में liver cancer (HCC) screening: Dr. Akhilesh Yadav — Orchid Medical Centre. Cirrhosis patients में 6-महीने का surveillance — ultrasound + AFP — early detection guide।",
    excerptEn: "Liver cancer (HCC) screening in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Cirrhosis surveillance with ultrasound & AFP, risk factors & early detection for Jharkhand patients.",
    category: "conditions",
    readTimeMins: 7,
    publishedAt: "August 2026",
    emoji: "🔬",
    tags: ["liver cancer screening ranchi", "HCC screening ranchi", "hepatocellular carcinoma ranchi", "liver cancer doctor ranchi", "gastroenterologist ranchi"],
    metaTitle: "Liver Cancer Screening Ranchi | HCC Detection | Dr. Akhilesh Yadav",
    metaDescription: "Liver cancer (HCC) screening in Ranchi — Dr. Akhilesh Yadav at Orchid Medical Centre. Cirrhosis surveillance program, ultrasound + AFP every 6 months for at-risk patients.",
    sections: [
      {
        heading: "Liver Cancer Screening — क्यों ज़रूर है Jharkhand में",
        type: "text",
        content: "Hepatocellular Carcinoma (HCC) — liver cancer — ज़्यादा cases में cirrhosis background में होता है। Jharkhand में cirrhosis के main causes: Hepatitis B (widespread), Hepatitis C, और alcohol। Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi में कहते हैं: 'मैं regularly देख रहा हूँ कि cirrhosis patients जो surveillance में नहीं हैं, उन्हें HCC advanced stage में diagnose होता है — जब curative treatment impossible हो जाता है।' Screening का मतलब: cirrhosis patients में regular ultrasound + AFP — हर 6 महीने — HCC early stage में पकड़ना। Early HCC में cure possible है — ablation, resection, transplant।",
      },
      {
        heading: "HCC — किसे Screening करवानी चाहिए",
        type: "list",
        content: "Dr. Akhilesh Yadav Ranchi में इन patients को HCC surveillance में रखते हैं:",
        list: [
          "Liver cirrhosis — any cause (Hepatitis B, C, alcohol, NASH) — ALL cirrhosis patients",
          "Chronic Hepatitis B — even without cirrhosis (certain high-risk groups)",
          "HBV + family history of HCC",
          "HBV + African/Asian ethnicity males >40 years",
          "Advanced fibrosis (F3) with Hepatitis B/C",
          "Non-cirrhotic NAFLD with advanced fibrosis — emerging group",
        ],
      },
      {
        heading: "HCC Surveillance Protocol — Dr. Akhilesh Yadav का Approach",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में cirrhosis patients के लिए HCC surveillance: Ultrasound Abdomen: every 6 months। New nodule identify करना। Liver texture assess करना। Ascites, splenomegaly monitor। AFP (Alpha-Fetoprotein): blood test — every 6 months। AFP >20 ng/mL suspicious। >200 ng/mL strongly suspicious for HCC। AFP normal in 30-40% HCC — इसलिए ultrasound भी ज़रूर। Recall policy: Nodule <1cm → repeat ultrasound 3-4 months। Nodule 1-2cm → CT/MRI triphasic for characterization। Nodule >2cm with arterial enhancement + washout → HCC diagnosis — biopsy typically not needed। Dr. Akhilesh Yadav Ranchi में cirrhosis patients को surveillance schedule में remind करते हैं।",
      },
      {
        heading: "Early HCC — Treatment Options जो Ranchi से Accessible हैं",
        type: "text",
        content: "Dr. Akhilesh Yadav Orchid Medical Centre Ranchi में HCC diagnosis के बाद multidisciplinary approach देते हैं: Very Early HCC (single nodule <2cm): Radiofrequency Ablation (RFA) या Microwave Ablation — curative intent। Liver transplant (Milan criteria patients)। Early HCC (single ≤5cm या 3 nodules ≤3cm): Surgical resection (अगर liver function adequate)। TACE (Transarterial Chemoembolization) — bridge to transplant या palliative। Intermediate HCC: TACE, Y90 radioembolization। Advanced HCC: Sorafenib, Lenvatinib, immunotherapy (atezolizumab + bevacizumab)। Dr. Akhilesh Yadav Ranchi में diagnosis करते हैं — treatment के लिए appropriate oncology/surgical referral coordinate करते हैं।",
      },
      {
        heading: "💚 Dr. Akhilesh Yadav की Expert Advice — Liver Cancer Screening",
        type: "tip",
        content: "Dr. Akhilesh Yadav कहते हैं: 'Liver cancer screening में एक simple rule है: अगर आपको cirrhosis है — हर 6 महीने — ultrasound + AFP। बस इतना करो। मैं अपने Ranchi के हर cirrhosis patient को reminder देता हूँ — calendar पे mark करो, follow करो। जो patients यह करते हैं, उनमें हम HCC early stage में पकड़ लेते हैं — treatment possible है। जो नहीं करते — कभी कभी बहुत देर हो जाती है।'\n\nDr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, HB Road, Ranchi.\n\nयह article सिर्फ educational purpose के लिए है। Liver cancer screening के लिए specialist से मिलें।\n\nAppointment: +91 74919 25047 या [WhatsApp](https://wa.me/917491925047). Mon–Sat: 10 AM–2 PM और 5 PM–8 PM.",
      },
    ],
    faqs: [
      {
        q: "अगर AFP normal है तो क्या liver cancer नहीं है?",
        a: "Normal AFP HCC rule out नहीं करता — 30-40% HCC में AFP normal रहता है। इसलिए ultrasound भी ज़रूर है — दोनों मिलकर screening protocol है। AFP alone use करना insufficient है। Dr. Akhilesh Yadav Ranchi में दोनों tests simultaneously करते हैं हर 6 महीने।",
      },
      {
        q: "क्या non-alcoholic fatty liver (NAFLD) में भी liver cancer हो सकता है?",
        a: "हाँ — NAFLD-cirrhosis में HCC risk होता है — lower than Hepatitis B/C लेकिन significant। NAFLD-associated HCC कुछ cases में non-cirrhotic liver में भी होता है। Obesity + diabetes + NAFLD combination में risk ज़्यादा। Dr. Akhilesh Yadav Ranchi में advanced NAFLD fibrosis patients को surveillance में रखते हैं।",
      },
      {
        q: "Hepatitis B treatment से liver cancer का risk कम होता है?",
        a: "हाँ — antiviral therapy (tenofovir, entecavir) से Hepatitis B viral load suppress होती है — cirrhosis progression slow होती है और HCC risk 50-70% reduce होती है (evidence-based data)। इसलिए Hepatitis B का timely treatment बहुत important है। Dr. Akhilesh Yadav Ranchi में eligible Hepatitis B patients को antiviral therapy recommend करते हैं।",
      },
      {
        q: "Liver cancer का कोई early symptom होता है?",
        a: "Early HCC में ज़्यादातर कोई symptom नहीं होता — इसलिए surveillance ज़रूर है cirrhosis patients में। Advanced stage में: right upper quadrant pain, weight loss, jaundice, ascites suddenly worsen। यह सब late signs हैं। इसलिए symptom का wait मत करो — surveillance करो।",
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

/** Slugs that 301-redirect to another blog — never build static pages for these
 *  (redirect fires in next.config.ts before the page is served). */
const REDIRECTED_BLOG_SLUGS = new Set(["stomach-doctor-ranchi"]);

export function getAllBlogSlugs(): string[] {
  // Exclude noindexed and redirected blogs from static build params
  return BLOG_POSTS
    .filter((p) => !p.noindex && !REDIRECTED_BLOG_SLUGS.has(p.slug))
    .map((p) => p.slug);
}

/** For sitemap — slug + ISO publish date (capped at today, never future).
 *  Excludes noindexed blogs (robots: noindex) and 301-redirected slugs — both
 *  should never appear in the sitemap per §15 / §24. */
export function getAllBlogsForSitemap(): { slug: string; isoDate: string }[] {
  const today = new Date();
  return BLOG_POSTS
    .filter((p) => !p.noindex && !REDIRECTED_BLOG_SLUGS.has(p.slug))
    .map((p) => {
      const parsed = parsePublishedDate(p.publishedAt);
      // Section 24: never expose future lastmod — cap at today's date
      const capped = parsed > today ? today : parsed;
      return { slug: p.slug, isoDate: capped.toISOString() };
    });
}
