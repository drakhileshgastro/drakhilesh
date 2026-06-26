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
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
