/**
 * Diet chart data for /diet/[slug] pages.
 * Each diet guide is a lead magnet — visitors fill name+phone to download the full chart PDF.
 *
 * Lead scoring: diet leads = score 2 (low immediate intent but good list-building)
 * After lead capture → send WhatsApp diet chart image + book appointment CTA.
 */

export interface DietSection {
  heading:   string;
  headingHi: string;
  items:     string[];
  itemsHi:   string[];
}

export interface DietData {
  slug:         string;
  titleHi:      string;
  titleEn:      string;
  metaTitle:    string;
  metaDesc:     string;
  condition:    string;
  conditionHi:  string;
  heroLine:     string;
  heroLineHi:   string;
  intro:        string;
  introHi:      string;
  eat:          DietSection;
  avoid:        DietSection;
  tips:         string[];
  tipsHi:       string[];
  relatedConditionSlug?: string;
}

export const DIET_DATA: DietData[] = [
  {
    slug:       "fatty-liver",
    titleEn:    "Fatty Liver Diet Chart",
    titleHi:    "Fatty Liver Diet Chart Hindi",
    metaTitle:  "Fatty Liver Diet Chart Hindi | Dr. Akhilesh Yadav Ranchi",
    metaDesc:   "Free fatty liver diet chart in Hindi. Learn what to eat and avoid for NAFLD reversal. Download PDF from Dr. Akhilesh Yadav, DM Gastro, Ranchi.",
    condition:  "Fatty Liver",
    conditionHi:"Fatty Liver (Chiknahat)",
    heroLine:   "Reverse fatty liver with the right Indian diet",
    heroLineHi: "Sahi Indian khane se fatty liver thik kiya ja sakta hai",
    intro:      "Fatty liver (NAFLD) is reversible with diet. Avoid sugars, refined carbs, and alcohol. Increase protein, fibre, and antioxidants.",
    introHi:    "Fatty liver (NAFLD) sahi khane se theek ho sakta hai. Cheeni, maida, aur sharaab se durr rahein. Protein, fibre, aur antioxidants badhayein.",
    eat: {
      heading:   "What to Eat",
      headingHi: "Kya Khayein",
      items:     ["Green vegetables (palak, methi, broccoli)", "Fruits (papaya, guava, amla)", "Whole grains (oats, brown rice, multigrain roti)", "Lentils and legumes (dal, rajma, chana)", "Low-fat dairy (curd, buttermilk)", "Fish (rohu, katla) 2–3 times/week", "Olive oil or mustard oil (2 tsp/day)", "Green tea, lemon water, coconut water", "Walnuts, flaxseeds (omega-3 sources)"],
      itemsHi:   ["Hari sabziyaan (palak, methi, broccoli)", "Phal (papita, amrood, amla)", "Saabuut anaaj (oats, brown rice, multigrain roti)", "Dal, rajma, chana", "Low-fat dairy (dahi, chaach)", "Machli (rohu, katla) 2–3 baar/hafte", "Olive oil ya sarson ka tel (2 chammach/din)", "Green tea, nimbu paani, nariyal paani", "Akhrot, alsi ke beej (omega-3 ke liye)"],
    },
    avoid: {
      heading:   "What to Avoid",
      headingHi: "Kya Na Khayein",
      items:     ["Fried foods (samosa, poori, pakora)", "Sugary drinks (cola, packaged juice)", "Refined carbs (maida, white bread, biscuits)", "Alcohol (any amount damages the liver)", "Processed meats (sausage, canned meats)", "Trans fats (vanaspati, dalda)", "Excess salt (pickles, papad)", "Red meat (mutton, beef more than 1×/week)"],
      itemsHi:   ["Tali hui cheezein (samosa, poori, pakora)", "Meethe peene (cola, packaged juice)", "Maida, white bread, biscuits", "Sharaab (koi bhi matra liver ko nuksan pahunchati hai)", "Processed meats (sausage, canned meats)", "Vanaspati, dalda", "Zyada namak (achar, papad)", "Gosht (mutton, beef) hafte mein ek se zyada baar nahi"],
    },
    tips:    ["Walk 30 minutes daily — exercise reduces liver fat directly", "Lose 5–10% body weight over 3 months for significant fatty liver reversal", "Avoid skipping meals — 3 balanced meals + 2 healthy snacks", "Get LFT and liver ultrasound every 6 months to track progress"],
    tipsHi:  ["30 minute rozaana chalein — exercise seedha liver fat kam karta hai", "3 maheenon mein 5–10% wajan ghataane se fatty liver mein bada sudhar hota hai", "Khana nahi chodna chahiye — 3 balanced meals + 2 healthy snacks", "Har 6 maheenon mein LFT aur liver ultrasound karvaayein"],
    relatedConditionSlug: "fatty-liver",
  },
  {
    slug:       "jaundice",
    titleEn:    "Jaundice Diet Chart — What to Eat & Avoid",
    titleHi:    "Piliya mein Kya Khayein — Diet Chart Hindi",
    metaTitle:  "Piliya (Jaundice) Diet Chart Hindi | Dr. Akhilesh Yadav Ranchi",
    metaDesc:   "Free jaundice diet chart in Hindi. What to eat and avoid during piliya. Download PDF from Dr. Akhilesh Yadav, DM Gastro, Ranchi.",
    condition:  "Jaundice",
    conditionHi:"Piliya",
    heroLine:   "Jaundice recovery diet — rest your liver, heal faster",
    heroLineHi: "Piliya mein sahi khana — liver ko aaraam do, jaldi theek ho",
    intro:      "During jaundice, the liver is stressed. Eat light, easily digestible foods. Avoid fatty, fried, or spicy foods that burden the liver.",
    introHi:    "Piliya mein liver kamzor hota hai. Halka, aasaani se pachne wala khana khayein. Chikna, tala, ya masaledar khana bilkul mat khayein.",
    eat: {
      heading:   "What to Eat",
      headingHi: "Kya Khayein",
      items:     ["Rice kanji or rice with light dal", "Boiled vegetables (lauki, tinda, parwal)", "Fruits (sugarcane juice, papaya, banana, mosambi)", "Fresh coconut water (1–2 glasses/day)", "Oats porridge or sabudana khichdi", "Light buttermilk (chaach) without spices", "Boiled potato (without frying)", "Fresh lemon water with honey"],
      itemsHi:   ["Chawal ka kanji ya chawal halki dal ke saath", "Ubli sabziyaan (lauki, tinda, parwal)", "Phal (ganna juice, papita, kela, mosambi)", "Nariyal paani (1–2 glass/din)", "Oats daliya ya sabudana khichdi", "Sade chaach (masala nahi)", "Ubla aloo (tala nahi)", "Taaza nimbu paani shahad ke saath"],
    },
    avoid: {
      heading:   "What to Avoid",
      headingHi: "Kya Na Khayein",
      items:     ["Oily and fried foods completely", "Alcohol (even small amounts)", "Red meat, egg yolk", "Spicy curries and pickles", "Packaged or processed foods", "Raw vegetables (hard to digest)", "Excess protein (avoid until recovery)", "Tea, coffee, carbonated drinks"],
      itemsHi:   ["Chikna aur tala khana bilkul nahi", "Sharaab (thodi bhi nahi)", "Gosht, ande ki zardi", "Masaledar curry aur achar", "Packaged ya processed food", "Kacha sabziyan (pachana mushkil)", "Zyada protein (theek hone tak bachein)", "Chai, coffee, carbonated drinks"],
    },
    tips:    ["Complete bed rest during acute jaundice phase", "Drink at least 2–3 litres of fluids per day", "Avoid all medications without doctor's advice — they load the liver", "Return for LFT test after 2 weeks to check bilirubin levels"],
    tipsHi:  ["Teevra piliya mein poora bed rest zaroori hai", "Din mein 2–3 litre paani ya liquid zaroor piyein", "Bina doctor ki salah ke koi bhi dawai nahi leni chahiye — liver par zyada bojh padta hai", "2 hafte baad LFT test karvaayein bilirubin level dekhne ke liye"],
    relatedConditionSlug: "jaundice",
  },
  {
    slug:       "gerd",
    titleEn:    "GERD / Acidity Diet — What to Eat & Avoid",
    titleHi:    "Acidity aur GERD mein Kya Khayein — Diet Chart Hindi",
    metaTitle:  "Acidity GERD Diet Chart Hindi | Dr. Akhilesh Yadav Ranchi",
    metaDesc:   "Free acidity and GERD diet chart in Hindi. Foods to eat and avoid for acid reflux relief. Download PDF from Dr. Akhilesh, DM Gastro, Ranchi.",
    condition:  "GERD / Acid Reflux",
    conditionHi:"Acidity / GERD",
    heroLine:   "Control acidity naturally with the right diet",
    heroLineHi: "Sahi khane se acidity ko naturally control karein",
    intro:      "GERD happens when stomach acid flows back into the food pipe. Diet plays a key role. Eat small, frequent meals and avoid lying down after eating.",
    introHi:    "GERD mein pet ka tezaab food pipe mein wapas aata hai. Khana isme badi bhumika nibhata hai. Thoda thoda, baar baar khayein aur khane ke baad let mat jaayen.",
    eat: {
      heading:   "Acid-Reducing Foods",
      headingHi: "Acidity Kam Karne Wale Khane",
      items:     ["Banana, melons, papaya (low-acid fruits)", "Oatmeal, whole grain roti, brown rice", "Green vegetables (cucumber, cabbage, peas)", "Lean protein (chicken breast, fish, dal)", "Ginger tea (small amount, no sugar)", "Coconut milk, cold milk (in moderation)", "Aloe vera juice (pure, unsweetened)", "Low-fat curd (without added spices)"],
      itemsHi:   ["Kela, melon, papita (kam tezaab waale phal)", "Oatmeal, multigrain roti, brown rice", "Hari sabziyaan (kheera, patta gobhi, matar)", "Lean protein (chicken breast, machli, dal)", "Adrak ki chai (thodi, bina cheeni)", "Nariyal milk, thanda doodh (thoda)", "Aloe vera juice (bina meetha)", "Sada dahi (masale nahi)"],
    },
    avoid: {
      heading:   "Foods That Trigger Reflux",
      headingHi: "Acidity Badhane Wale Khane",
      items:     ["Citrus fruits (orange, lemon, tomato)", "Spicy curries, chillies, pickles", "Chocolate, mint, peppermint", "Fried foods (samosa, puri, pakora)", "Coffee, tea, carbonated drinks", "Alcohol (relaxes the LES valve)", "Onion and garlic in large amounts", "Eating large meals or eating just before bedtime"],
      itemsHi:   ["Citrus phal (santra, nimbu, tamatar)", "Masaledar curry, mirch, achar", "Chocolate, pudina", "Tali cheezein (samosa, puri, pakora)", "Coffee, chai, carbonated drinks", "Sharaab (LES valve ko dhila karta hai)", "Zyada pyaaz aur lahsun", "Bahut zyada khana ya sone se pehle khana"],
    },
    tips:    ["Eat 4–5 small meals a day instead of 3 large ones", "Don't lie down for at least 2 hours after eating", "Raise the head of your bed by 6–8 inches", "Maintain a healthy weight — abdominal fat pushes acid upward"],
    tipsHi:  ["3 baar zyada khane ki jagah 4–5 baar thoda thoda khayein", "Khane ke baad kam se kam 2 ghante tak let mat jayein", "Bistar ka sira 6–8 inch utha kar rakkhein", "Wajan niyantrit rakhein — pet ki charbi tezaab ko upar dhakkelti hai"],
    relatedConditionSlug: "acid-reflux",
  },
  {
    slug:       "ibs",
    titleEn:    "IBS Diet Plan — Low-FODMAP Indian Foods",
    titleHi:    "IBS Diet Plan Hindi — Low-FODMAP Indian Food",
    metaTitle:  "IBS Diet Chart Hindi | Low FODMAP Indian Diet | Dr. Akhilesh Ranchi",
    metaDesc:   "IBS diet chart in Hindi with low-FODMAP Indian foods. What to eat and avoid for irritable bowel syndrome. Free download from Dr. Akhilesh, Ranchi.",
    condition:  "IBS (Irritable Bowel Syndrome)",
    conditionHi:"IBS (Irritable Bowel Syndrome)",
    heroLine:   "Manage IBS with the right Indian diet — no strict restrictions",
    heroLineHi: "Sahi Indian khane se IBS ko control karein",
    intro:      "IBS is best managed by identifying and avoiding trigger foods. The Low-FODMAP diet reduces fermentable carbs that cause gas and bloating.",
    introHi:    "IBS mein trigger foods pahchaan kar unhe avoid karna sabse zaroori hai. Low-FODMAP diet mein woh carbs kam kiye jaate hain jo gas aur bloating karte hain.",
    eat: {
      heading:   "IBS-Friendly Foods",
      headingHi: "IBS mein Kya Khayein",
      items:     ["Rice, poha, sabudana (safe grains)", "Banana, blueberry, grapes, melon", "Carrots, cucumber, zucchini, bottle gourd", "Eggs, chicken (well-cooked), fish", "Lactose-free milk, firm tofu", "Green tea, peppermint tea", "Small portions of oats (if tolerated)", "Boiled moong dal (avoid rajma, chana)"],
      itemsHi:   ["Chawal, poha, sabudana (safe grains)", "Kela, blueberry, angoor, melon", "Gajar, kheera, lauki, turai", "Ande, chicken (achhe se paka), machli", "Lactose-free doodh, firm tofu", "Green tea, pudina ki chai", "Thode oats (agar tolerated hoon)", "Ubla moong dal (rajma, chana se bachein)"],
    },
    avoid: {
      heading:   "IBS Trigger Foods (High-FODMAP)",
      headingHi: "IBS Trigger Khane (High-FODMAP)",
      items:     ["Onion, garlic, leeks (big triggers)", "Apple, mango, watermelon, pear", "Wheat and products (roti, bread, biscuit)", "Milk and soft cheese (contain lactose)", "Rajma, kabuli chana, dal (legumes)", "Cauliflower, cabbage, mushroom", "Artificial sweeteners (sorbitol, manitol)", "Carbonated drinks and alcohol"],
      itemsHi:   ["Pyaaz, lahsun, leeks (bade trigger)", "Seb, aam, tarbooz, nashpati", "Gehun aur uske products (roti, bread, biscuit)", "Doodh aur soft cheese (lactose)", "Rajma, kabuli chana, dal (legumes)", "Phool gobhi, patta gobhi, mushroom", "Artificial sweeteners (sorbitol, mannitol)", "Carbonated drinks aur sharaab"],
    },
    tips:    ["Keep a food diary for 4 weeks to identify your personal triggers", "Eat slowly, chew well, and don't rush meals", "Stress management (yoga, meditation) directly reduces IBS symptoms", "Probiotics (curd, buttermilk) may help some patients — discuss with Dr. Akhilesh"],
    tipsHi:  ["4 hafte tak food diary rakhein apne personal triggers dekhne ke liye", "Dheere khayein, achhe se chabaayein, jaldi mat karein", "Stress management (yoga, meditation) IBS symptoms seedha kam karta hai", "Probiotics (dahi, chaach) kuch patients ko faayda karte hain — Dr. Akhilesh se puchhein"],
    relatedConditionSlug: "ibs",
  },
  {
    slug:       "liver-cirrhosis",
    titleEn:    "Liver Cirrhosis Diet Chart",
    titleHi:    "Liver Cirrhosis Diet Chart Hindi",
    metaTitle:  "Liver Cirrhosis Diet Chart Hindi | Dr. Akhilesh Yadav Ranchi",
    metaDesc:   "Liver cirrhosis diet chart in Hindi. High-protein, low-salt diet for cirrhosis patients. Free download from Dr. Akhilesh, DM Gastro, Ranchi.",
    condition:  "Liver Cirrhosis",
    conditionHi:"Liver Cirrhosis",
    heroLine:   "Nutrition is medicine — protect your liver with the right diet",
    heroLineHi: "Khana hi dawai hai — sahi diet se apne liver ki raksha karein",
    intro:      "Liver cirrhosis patients need a high-protein, low-sodium diet. Malnutrition is common in cirrhosis and worsens outcomes. Eat 5–6 small meals including a late-night snack.",
    introHi:    "Liver cirrhosis mein high-protein, low-sodium diet zaroori hai. Malnutrition cirrhosis mein aam hai aur results kharab karta hai. 5–6 baar thoda thoda khayein including late-night snack.",
    eat: {
      heading:   "Recommended Foods",
      headingHi: "Konse Khane Khayein",
      items:     ["High-protein: eggs (whites), fish, chicken (boiled)", "Dal (moong, masoor — well cooked)", "Rice, soft roti, porridge (easily digestible)", "Boiled vegetables (avoid raw)", "Fruits (banana, papaya — no citrus)", "Low-fat curd (no added salt)", "Coconut water (natural electrolytes)", "Small portions every 2–3 hours"],
      itemsHi:   ["High-protein: ande ki safedi, machli, chicken (ubla)", "Dal (moong, masoor — achhe se paka)", "Chawal, naram roti, daliya (aasaani se pachane wale)", "Ubli sabziyaan (kacha mat khayein)", "Phal (kela, papita — citrus nahi)", "Low-fat dahi (namak nahi)", "Nariyal paani (natural electrolytes)", "2–3 ghante mein thoda thoda khayein"],
    },
    avoid: {
      heading:   "Strictly Avoid",
      headingHi: "Bilkul Na Khayein",
      items:     ["Alcohol — absolutely forbidden, even small amounts", "Salt — maximum 2g/day (to reduce ascites)", "Red meat (high ammonia load)", "Raw shellfish (risk of serious infection)", "Herbal supplements without doctor approval", "Processed and packaged foods (high sodium)", "Excess fluid if ascites is present"],
      itemsHi:   ["Sharaab — bilkul nahi, thodi bhi nahi", "Namak — max 2g/din (ascites kam karne ke liye)", "Gosht (ammonia zyada hoti hai)", "Kacha shellfish (serious infection ka khatra)", "Doctor ki salah ke bina herbal supplements", "Processed aur packaged khana (zyada sodium)", "Agar ascites hai toh zyada paani bhi nahi"],
    },
    tips:    ["Eat a late-night snack (banana + milk) to prevent muscle breakdown during sleep", "Weigh yourself daily — sudden weight gain (2kg in 2 days) may mean fluid retention (call doctor)", "Never stop medications suddenly — cirrhosis management is long-term", "Track symptoms: confusion, leg swelling, dark urine need immediate medical attention"],
    tipsHi:  ["Raat ko sone se pehle kuch khayein (kela + doodh) neend mein muscle loss rokne ke liye", "Rozaana wajan naapein — 2 din mein 2kg badhna fluid retention ka sign ho sakta hai (doctor se milein)", "Dawai achanak band mat karein — cirrhosis ka ilaj lambe samay ka hai", "Confusion, paon ki sujan, gehra peela peshab turant doctor ko dikhayein"],
    relatedConditionSlug: "liver-cirrhosis",
  },
  {
    slug:       "post-endoscopy",
    titleEn:    "Diet After Endoscopy — What to Eat & Avoid",
    titleHi:    "Endoscopy ke Baad Kya Khayein — Diet Guide Hindi",
    metaTitle:  "Endoscopy ke Baad Diet Hindi | Dr. Akhilesh Yadav Ranchi",
    metaDesc:   "What to eat after endoscopy in Hindi. Post-endoscopy diet guide from Dr. Akhilesh Yadav, DM Gastro, Ranchi. Download free PDF.",
    condition:  "Post-Endoscopy Recovery",
    conditionHi:"Endoscopy ke Baad Recovery",
    heroLine:   "Smooth recovery after endoscopy — eat right, feel right",
    heroLineHi: "Endoscopy ke baad jaldi theek hone ke liye sahi khana khayein",
    intro:      "After an upper GI endoscopy, your throat and stomach may feel mild discomfort. Start with liquids, then soft foods. Normal diet can resume in 24 hours for diagnostic endoscopy.",
    introHi:    "Upper GI endoscopy ke baad gala aur pet mein thoda discomfort ho sakta hai. Pehle liquid, phir soft food lein. Diagnostic endoscopy ke baad 24 ghante mein normal khana shuru kar sakte hain.",
    eat: {
      heading:   "First 24 Hours",
      headingHi: "Pehle 24 Ghante",
      items:     ["Warm water, clear soups, coconut water (start here)", "Curd rice or plain rice with light dal (after 2 hours)", "Banana, soft papaya (soft fruits)", "Plain idli, soft dosa (no spicy chutney)", "Boiled potato, sabudana khichdi", "Low-fat curd (plain, no added spice)", "Warm milk (if no lactose issue)", "Avoid cold or very hot drinks"],
      itemsHi:   ["Garam paani, clear soup, nariyal paani (yahan se shuru karein)", "Dahi chawal ya sade chawal halki dal ke saath (2 ghante baad)", "Kela, naram papita (soft phal)", "Sade idli, soft dosa (masaledar chutney nahi)", "Ubla aloo, sabudana khichdi", "Sada dahi (masala nahi)", "Garam doodh (agar lactose nahi)", "Thanda ya bahut garam peena nahi"],
    },
    avoid: {
      heading:   "Avoid These After Endoscopy",
      headingHi: "Endoscopy ke Baad In Cheezoon se Bachein",
      items:     ["Spicy curries and masala food for 24 hours", "Fried foods (samosa, pakora, poori)", "Alcohol for 24 hours (also reacts with sedation)", "Driving for 12 hours (sedation effect)", "Hard bread, crusty roti, nuts", "Carbonated drinks for 24 hours"],
      itemsHi:   ["24 ghante tak masaledar curry aur masala khana nahi", "Tali cheezein (samosa, pakora, poori)", "24 ghante tak sharaab (sedation ke saath react karta hai)", "12 ghante tak gadi mat chalaayein (sedation ka asar)", "Hard bread, sakhi roti, nuts", "24 ghante tak carbonated drinks"],
    },
    tips:    ["After biopsy during endoscopy: avoid very hot liquids for 48 hours", "Sore throat after endoscopy is normal — warm salt water gargles help", "Resume normal diet next day if no complications noted", "Contact Dr. Akhilesh immediately if you notice vomiting blood or severe pain after endoscopy"],
    tipsHi:  ["Endoscopy ke dauran biopsy ke baad: 48 ghante tak bahut garam liquid nahi", "Endoscopy ke baad gale mein dard normal hai — garam namak ke paani se gargle karein", "Agar koi takleef nahi toh agle din normal khana shuru kar sakte hain", "Agar endoscopy ke baad khoon ki ulti ya bahut dard ho toh Dr. Akhilesh ko turant milein"],
    relatedConditionSlug: "endoscopy",
  },
  {
    slug:       "pancreatitis",
    titleEn:    "Pancreatitis Diet Chart",
    titleHi:    "Pancreatitis Diet Chart Hindi",
    metaTitle:  "Pancreatitis Diet Chart Hindi | Dr. Akhilesh Yadav Ranchi",
    metaDesc:   "Pancreatitis diet chart in Hindi. Low-fat, easy-to-digest foods for pancreatitis recovery. Free download from Dr. Akhilesh, DM Gastro, Ranchi.",
    condition:  "Pancreatitis",
    conditionHi:"Pancreatitis",
    heroLine:   "Give your pancreas a rest — the right diet heals faster",
    heroLineHi: "Pancreas ko aaraam do — sahi khane se jaldi theek hota hai",
    intro:      "In acute pancreatitis, the pancreas is inflamed. Start oral intake only when pain subsides. Begin with clear liquids, then low-fat soft foods. Avoid all fats during recovery.",
    introHi:    "Acute pancreatitis mein pancreas mein sujan hoti hai. Dard kam hone par hi munh se kuch lein. Pehle clear liquids, phir low-fat soft food. Recovery mein fat bilkul nahi.",
    eat: {
      heading:   "Pancreatitis Recovery Foods",
      headingHi: "Pancreatitis mein Kya Khayein",
      items:     ["Clear broth, vegetable soup (no cream)", "Rice kanji, plain boiled rice", "Plain roti (no ghee or oil)", "Boiled potato, sweet potato", "Banana, papaya (soft fruits)", "Low-fat curd, skimmed milk", "Moong dal (well cooked, no tempering)", "Boiled carrot, lauki"],
      itemsHi:   ["Clear broth, sabziyon ka soup (cream nahi)", "Chawal ka kanji, sade ubale chawal", "Sadi roti (ghee ya tel nahi)", "Ubla aloo, shakarkandi", "Kela, papita (naram phal)", "Low-fat dahi, skimmed milk", "Moong dal (achhe se paka, tadka nahi)", "Ubli gajar, lauki"],
    },
    avoid: {
      heading:   "Strictly Avoid in Pancreatitis",
      headingHi: "Pancreatitis mein Bilkul Nahi Khana",
      items:     ["All fried foods and oily foods", "Ghee, butter, cream, oil in cooking", "Red meat, eggs (yolk)", "Alcohol — major trigger for pancreatitis", "Spicy curries and pickles", "Full-fat milk and dairy", "Nuts, seeds, chips"],
      itemsHi:   ["Har tarah ka tala aur chikna khana", "Ghee, butter, cream, cooking oil", "Gosht, ande ki zardi", "Sharaab — pancreatitis ka bada trigger", "Masaledar curry aur achar", "Full-fat doodh aur dairy", "Nuts, seeds, chips"],
    },
    tips:    ["In acute pancreatitis, NPO (nothing by mouth) may be advised for 24–48 hours", "Reintroduce food slowly — 5–6 small meals at low-fat content", "In chronic pancreatitis, fat restriction (40–60g/day) is lifelong", "Alcohol abstinence is the most important lifestyle change in pancreatitis"],
    tipsHi:  ["Acute pancreatitis mein 24–48 ghante tak munh se kuch nahi lena hoga", "Dheere dheere khana shuru karein — 5–6 baar thoda low-fat khana", "Chronic pancreatitis mein fat restriction (40–60g/din) zindagi bhar ke liye hai", "Sharaab chhod dena pancreatitis mein sabse zaroori lifestyle change hai"],
    relatedConditionSlug: "pancreatitis",
  },
  {
    slug:       "gallstone",
    titleEn:    "Gallstone Diet — Foods to Eat & Avoid",
    titleHi:    "Pittashay ki Pathri mein Kya Khayein — Diet Chart Hindi",
    metaTitle:  "Gallstone Diet Chart Hindi | Dr. Akhilesh Yadav Ranchi",
    metaDesc:   "Gallstone (pittashay pathri) diet chart in Hindi. What to eat and avoid. Download free PDF from Dr. Akhilesh Yadav, DM Gastro, Ranchi.",
    condition:  "Gallstones",
    conditionHi:"Pittashay ki Pathri",
    heroLine:   "Diet controls gallstone symptoms — here's what works",
    heroLineHi: "Diet se pittashay ki pathri ke symptoms control hote hain",
    intro:      "Gallstones form when bile becomes concentrated. A low-fat, high-fibre diet reduces symptoms and may slow stone formation. Note: diet cannot dissolve existing stones — only ERCP or surgery can remove them.",
    introHi:    "Pittashay ki pathri tab banti hai jab pitt gada ho jaata hai. Low-fat, high-fibre diet symptoms kam karta hai. Note: khana pathri pighal nahi sakta — sirf ERCP ya surgery se nikal sakti hai.",
    eat: {
      heading:   "Gallbladder-Friendly Foods",
      headingHi: "Gallbladder ke Liye Sahi Khane",
      items:     ["High-fibre: whole grains, oats, brown rice", "Fruits (apple, pear, strawberry — moderate amounts)", "Vegetables (all except cruciferous in large amounts)", "Lean proteins: fish, chicken breast, dal", "Low-fat dairy (skimmed milk, low-fat curd)", "Healthy fats: 1–2 tsp olive oil or mustard oil", "Lemon water, green tea"],
      itemsHi:   ["High-fibre: saabuut anaaj, oats, brown rice", "Phal (seb, nashpati, strawberry — thode mein)", "Sabziyan (sab, phool gobhi kam mein)", "Lean protein: machli, chicken breast, dal", "Low-fat dairy (skimmed milk, low-fat dahi)", "Healthy fats: 1–2 chammach olive ya sarson tel", "Nimbu paani, green tea"],
    },
    avoid: {
      heading:   "Foods That Trigger Gallstone Attacks",
      headingHi: "Pathri Ka Dard Badhane Wale Khane",
      items:     ["Fried foods and oily food (biggest trigger)", "Full-fat dairy (cream, butter, full-fat milk)", "Processed meats (salami, sausage)", "Refined carbs (maida, white bread, biscuits)", "Spicy and heavily masala food", "Alcohol (promotes stone formation)", "Skipping meals (concentrates bile)"],
      itemsHi:   ["Tala hua aur chikna khana (sabse bada trigger)", "Full-fat dairy (cream, butter, full-fat doodh)", "Processed meats (salami, sausage)", "Maida, white bread, biscuits", "Zyada masaledar khana", "Sharaab (pathri banti hai)", "Khana chodna (pitt gada ho jaata hai)"],
    },
    tips:    ["Never skip meals — skipping makes bile concentrate and triggers pain", "Lose weight slowly — crash dieting worsens gallstone risk", "Exercise regularly — helps maintain healthy bile flow", "Consult Dr. Akhilesh if you have gallstone attacks — ERCP can remove CBD stones without surgery"],
    tipsHi:  ["Kabhi bhi khana mat chodein — chodne se pitt gada hota hai aur dard aata hai", "Wajan dheere ghataayein — jaldi wajan ghataane se gallstone ka khatra badhta hai", "Niyamit exercise karein — healthy bile flow mein madad karta hai", "Agar gallstone attacks hain toh Dr. Akhilesh se milein — ERCP bina surgery ke pathri nikal sakti hai"],
    relatedConditionSlug: "gallstone",
  },
  {
    slug:       "ulcerative-colitis",
    titleEn:    "Ulcerative Colitis Diet Plan",
    titleHi:    "Ulcerative Colitis Diet Plan Hindi",
    metaTitle:  "Ulcerative Colitis Diet Chart Hindi | Dr. Akhilesh Ranchi",
    metaDesc:   "Ulcerative colitis diet chart in Hindi. What to eat during flare-ups and remission. Download free PDF from Dr. Akhilesh, DM Gastro, Ranchi.",
    condition:  "Ulcerative Colitis",
    conditionHi:"Ulcerative Colitis",
    heroLine:   "Manage colitis with the right diet during flares and remission",
    heroLineHi: "Sahi diet se colitis ke flares aur remission mein madad milti hai",
    intro:      "UC diet changes between flare-up (avoid fibre, eat soft) and remission (increase fibre, normal diet). Track your personal triggers with a food diary.",
    introHi:    "UC mein diet flare-up mein alag hoti hai (fibre kam, soft khana) aur remission mein alag (fibre zyada, normal khana). Food diary se apne triggers jaanein.",
    eat: {
      heading:   "During Flare-Up (Active Disease)",
      headingHi: "Flare-Up mein (Bimari Active Ho)",
      items:     ["White rice, refined pasta (low-fibre)", "Boiled potato, banana", "Eggs (scrambled or boiled), boiled chicken", "Low-fat curd (probiotics help)", "Clear soups, broth", "Cooked well (no raw vegetables)"],
      itemsHi:   ["White chawal, refined pasta (low-fibre)", "Ubla aloo, kela", "Ande (scrambled ya ubale), ubla chicken", "Low-fat dahi (probiotics faaydemand)", "Clear soups, broth", "Achhe se paka (kacha nahi)"],
    },
    avoid: {
      heading:   "Common UC Triggers",
      headingHi: "UC ke Aam Triggers",
      items:     ["Raw vegetables, whole grains, seeds (during flares)", "Dairy (if lactose intolerant)", "Spicy and oily food", "Alcohol, caffeine", "Beans and legumes (can worsen gas)", "Corn, nuts, dried fruits", "Sorbitol-containing products"],
      itemsHi:   ["Kacha sabzi, saabuut anaaj, beej (flares mein)", "Dairy (agar lactose intolerant hain)", "Masaledar aur chikna khana", "Sharaab, caffeine", "Beans aur legumes (gas zyada hoti hai)", "Makai, nuts, sukhe meve", "Sorbitol wale products"],
    },
    tips:    ["During remission, slowly reintroduce fibre to improve gut health", "Keep a food diary — triggers vary significantly between individuals", "Stress worsens UC flares — yoga and breathing exercises help", "Never adjust or stop your UC medications without consulting Dr. Akhilesh"],
    tipsHi:  ["Remission mein dheere dheere fibre badhayein — gut health sudharta hai", "Food diary rakhein — triggers ek insaan se doosre insaan mein bahut alag hote hain", "Stress UC flares badhata hai — yoga aur breathing exercises mein madad hoti hai", "Dr. Akhilesh ki salah ke bina UC ki dawai band ya kam mat karein"],
    relatedConditionSlug: "ulcerative-colitis",
  },
  {
    slug:       "liver-detox",
    titleEn:    "Liver Health Foods — Fact vs Myth",
    titleHi:    "लिवर स्वास्थ्य — क्या सच है, क्या झूठ?",
    metaTitle:  "लिवर डिटॉक्स: सच और झूठ | Dr. Akhilesh Yadav Ranchi",
    metaDesc:   "क्या लिवर डिटॉक्स जूस सच में काम करते हैं? Dr. Akhilesh Yadav (DM Gastro) बताते हैं — क्या खाएं जो लिवर को असल में फायदा करे, और किन चीजों से बचें।",
    condition:  "Liver Health",
    conditionHi:"लिवर स्वास्थ्य",
    heroLine:   "Your liver detoxes itself — here's what actually helps it stay healthy",
    heroLineHi: "आपका लिवर खुद ही detox करता है — लेकिन ये चीज़ें उसे healthy रखने में मदद करती हैं",
    intro:      "\"Liver detox\" teas and juices are marketing myths. The liver detoxes 24/7 on its own through its own enzyme systems. But certain foods reduce liver inflammation and support liver enzyme recovery — and some popular habits actively harm it.",
    introHi:    "\"Liver detox\" चाय और जूस — ये सब marketing के झूठे दावे हैं। आपका लिवर 24 घंटे, 7 दिन खुद ही अपने enzyme systems से detox करता है। लेकिन कुछ खाने की चीज़ें लिवर की सूजन कम करती हैं और उसे recover करने में मदद करती हैं — और कुछ लोकप्रिय आदतें लिवर को नुकसान पहुंचाती हैं।",
    eat: {
      heading:   "Genuinely Liver-Supporting Foods",
      headingHi: "Jo Cheezein Liver Ko Sachmuch Faayda Karte Hain",
      items:     ["Amla (rich in Vitamin C — reduces inflammation)", "Garlic (contains allicin — liver enzyme support)", "Turmeric (curcumin has mild anti-inflammatory effect)", "Beetroot (betaine — liver detox support)", "Green tea (catechins — reduce liver fat)", "Coffee (2–3 cups/day linked to lower liver cancer risk)", "Lemon water (Vitamin C, mild diuretic)", "Green leafy vegetables (chlorophyll, antioxidants)"],
      itemsHi:   ["Amla (Vitamin C rich — inflammation kam karta hai)", "Lahsun (allicin — liver enzyme support)", "Haldi (curcumin ka mild anti-inflammatory effect hai)", "Chukandar (betaine — liver detox support)", "Green tea (catechins — liver fat kam karta hai)", "Coffee (2–3 cup/din — liver cancer risk kam hota hai)", "Nimbu paani (Vitamin C, mild diuretic)", "Hari patti waali sabziyaan (chlorophyll, antioxidants)"],
    },
    avoid: {
      heading:   "Things That Actually Harm Your Liver",
      headingHi: "Jo Cheezein Aapke Liver Ko Sachchi Nuksan Pahunchaate Hain",
      items:     ["Alcohol — even 2 drinks/week damages liver cells", "Unregulated herbal supplements (many are toxic to liver)", "Excess paracetamol — maximum 4g/day, never with alcohol", "Very high-dose Vitamin supplements without testing", "Crash diets — cause acute fatty liver", "Excess sugar and refined carbs (fructose overloads liver)", "Raw or undercooked shellfish (hepatitis A/E risk)"],
      itemsHi:   ["Sharaab — hafte mein 2 peeg bhi liver cells ko nuksan pahunchate hain", "Bina doctor ke herbal supplements (bahut se liver ke liye toxic hain)", "Zyada paracetamol — max 4g/din, kabhi sharaab ke saath nahi", "Test ke bina bahut zyada vitamin supplements", "Crash diets — acute fatty liver ka khatra", "Zyada cheeni aur refined carbs (fructose liver ko overload karta hai)", "Kacha ya adhpaka shellfish (hepatitis A/E ka khatra)"],
    },
    tips:    ["There is no 'liver detox' product that your liver can't do on its own — save your money", "Water (2–3L/day) is the best liver support — it helps flush metabolic waste", "The best liver detox: no alcohol, no processed food, regular exercise, healthy weight", "Get LFT test done once a year if you have risk factors for liver disease"],
    tipsHi:  ["Koi bhi 'liver detox' product aisa nahi jo aapka liver khud nahi karta — paise bacha lein", "Paani (2–3L/din) sabse achha liver support hai", "Sabse achha liver detox: sharaab nahi, processed food nahi, niyamit exercise, healthy wajan", "Agar liver disease ke risk factors hain toh saal mein ek baar LFT test karvaayein"],
    relatedConditionSlug: "fatty-liver",
  },
];

export function getDietBySlug(slug: string): DietData | null {
  return DIET_DATA.find(d => d.slug === slug) ?? null;
}

export function getAllDietSlugs(): string[] {
  return DIET_DATA.map(d => d.slug);
}
