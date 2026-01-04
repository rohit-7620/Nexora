// Advanced Health & Nutrition Knowledge Base
export const nutritionKnowledge = {
  // Generate intelligent responses based on query analysis
  generateResponse: (message) => {
    const messageLower = message.toLowerCase();
    
    // Breakfast queries
    if (messageLower.includes('breakfast') || messageLower.includes('morning')) {
      return generateBreakfastResponse(message);
    }
    
    // Specific food queries
    if (messageLower.includes('panipuri') || messageLower.includes('pani puri') || messageLower.includes('golgappa') || messageLower.includes('puchka')) return getPanipuriInfo(message);
    if (messageLower.includes('samosa')) return getSamosaInfo();
    if (messageLower.includes('vada pav') || messageLower.includes('vadapav')) return getVadaPavInfo();
    if (messageLower.includes('chaat')) return getChaatInfo();
    if (messageLower.includes('maggi') || messageLower.includes('maggie')) return getMaggiInfo(message);
    if (messageLower.includes('noodle') || messageLower.includes('ramen') || messageLower.includes('instant')) return getInstantNoodlesInfo(message);
    if (messageLower.includes('pizza')) return getPizzaInfo();
    if (messageLower.includes('burger')) return getBurgerInfo();
    if (messageLower.includes('rice')) return getRiceInfo();
    if (messageLower.includes('chicken')) return getChickenInfo();
    if (messageLower.includes('banana')) return getBananaInfo();
    if (messageLower.includes('apple')) return getAppleInfo();
    if (messageLower.includes('egg')) return getEggInfo();
    if (messageLower.includes('oatmeal') || messageLower.includes('oats')) return getOatmealInfo();
    if (messageLower.includes('protein')) return getProteinInfo();
    if (messageLower.includes('vitamin')) return getVitaminInfo();
    if (messageLower.includes('water') || messageLower.includes('hydrat')) return getHydrationInfo();
    if (messageLower.includes('sugar')) return getSugarInfo();
    if (messageLower.includes('calorie')) return getCalorieInfo();
    if (messageLower.includes('weight loss') || messageLower.includes('lose weight')) return getWeightLossInfo();
    
    // Meal queries
    if (messageLower.includes('lunch')) return getLunchInfo();
    if (messageLower.includes('dinner')) return getDinnerInfo();
    if (messageLower.includes('snack')) return getSnackInfo();
    
    // Health condition queries
    if (messageLower.includes('diabetes')) return getDiabetesInfo();
    if (messageLower.includes('heart') || messageLower.includes('cardiovascular')) return getHeartHealthInfo();
    if (messageLower.includes('energy') || messageLower.includes('tired') || messageLower.includes('fatigue')) return getEnergyInfo();
    
    // Generic healthy eating
    if (messageLower.includes('healthy') || messageLower.includes('health')) return getHealthyEatingInfo();
    
    // Default intelligent response
    return generateContextualResponse(message);
  }
};

function getMaggiInfo(query) {
  const messageLower = query.toLowerCase();
  
  if (messageLower.includes('ingredient')) {
    return `🍜 **MAGGI Noodles - Complete Ingredient Analysis**

**BASIC NOODLE CAKE INGREDIENTS:**
1. **Refined Wheat Flour (Maida)** - 60-65%
   - Problem: Stripped of fiber and nutrients
   - High glycemic index (spikes blood sugar)
   - Low nutritional value

2. **Palm Oil** - 15-18% (for deep frying)
   - High in saturated fats (7g per serving)
   - Contributes to heart disease risk
   - 190 calories from fat alone

3. **Salt (Sodium Chloride)** - 2-3%
   - 890-1200mg sodium per packet
   - 50% of your daily limit in ONE serving!
   - Causes high blood pressure, water retention

4. **Wheat Gluten** - 2-3%
   - Protein source, but not complete
   - Problematic for celiac/gluten sensitivity

**TASTEMAKER/MASALA PACKET - THE REAL CONCERN:**

**Flavor Enhancers:**
• **MSG (Monosodium Glutamate) E621** - Primary ingredient
  - Enhances taste artificially
  - May cause headaches, nausea in sensitive people
  - Linked to increased appetite and overeating
  - Controversial "Chinese Restaurant Syndrome"

• **Disodium Inosinate (E631)** & **Disodium Guanylate (E627)**
  - Work with MSG to amplify umami flavor
  - Derived from animal or bacterial sources
  - Generally safe but enhance MSG effects

**Sodium Sources:**
• **Salt** - 700-900mg
• **Sodium Carbonate** - Alkaline salt (raises pH)
  Total: 1,100-1,500mg sodium per packet!

**Artificial Colors:**
• **Tartrazine (Yellow 5, E102)** - Sunset yellow dye
  - Linked to hyperactivity in children
  - Can cause allergic reactions, asthma
  - Banned in several European countries

• **Sunset Yellow FCF (Yellow 6, E110)**
  - Potential allergen
  - Associated with behavioral issues

**Preservatives:**
• **TBHQ (Tertiary Butylhydroquinone, E319)**
  - Prevents oil from going rancid
  - Maximum 0.02% allowed by FDA
  - Studies link to tumor formation in animals
  - May cause nausea, vomiting at high doses

**Spices & Additives:**
• **Onion Powder, Garlic Powder** - Natural flavoring
• **Hydrolyzed Vegetable Protein** - Contains free glutamate (like MSG)
• **Sugar/Maltodextrin** - 2-4g added sugar
• **Citric Acid (E330)** - Flavor enhancer, preservative
• **Guar Gum (E412)** - Thickener

**Hidden Ingredients (Varies by Flavor):**
• **Chicken/Beef Extract** (non-veg flavors)
• **Yeast Extract** - Natural MSG source
• **Caramel Color (E150c)** - May contain 4-MEI (potential carcinogen)

**⚠️ COMPLETE HEALTH ANALYSIS:**

**Nutritional Breakdown (Per 100g / ~1 packet 70g):**
• **Calories:** 420 cal (294 cal per packet)
• **Carbs:** 60g (mostly refined)
• **Protein:** 9g (low quality, incomplete)
• **Fat:** 17g (13g saturated - BAD)
• **Fiber:** 2g (very low)
• **Sodium:** 1,200mg (52% daily value!)
• **Sugar:** 3-4g (added)

**HEALTH RISKS - Why Maggi is Harmful:**

1. **EXTREME SODIUM OVERLOAD**
   - 1 packet = 50% daily sodium limit
   - Causes: High BP, stroke, kidney damage, heart disease
   - Water retention, bloating

2. **TRANS FATS & SATURATED FATS**
   - Deep-fried in palm oil
   - 13g saturated fat per serving
   - Clogs arteries, raises LDL cholesterol

3. **MSG & ADDITIVES**
   - Excitotoxin (overstimulates brain cells)
   - Headaches, sweating, numbness
   - May trigger migraines
   - Increases appetite (makes you eat more)

4. **REFINED CARBS**
   - No fiber = rapid blood sugar spike
   - Insulin surge → fat storage
   - Energy crash in 1-2 hours
   - Increases diabetes risk

5. **ARTIFICIAL COLORS & PRESERVATIVES**
   - Tartrazine linked to ADHD in children
   - TBHQ may damage DNA
   - Long-term exposure concerns

6. **NUTRITIONAL VOID**
   - Zero vitamins (enriched ≠ natural)
   - Minimal minerals
   - No antioxidants
   - Empty calories

**SPECIFIC HEALTH IMPACTS:**

**Short-term (After eating):**
• Bloating, water retention
• Thirst (high sodium)
• Energy spike then crash
• Possible MSG headache

**Long-term (Regular consumption):**
• High blood pressure
• Obesity (calorie-dense, low satiety)
• Type 2 diabetes risk
• Heart disease
• Kidney stress
• Liver damage (palm oil)
• Weakened immune system

**VERDICT:**
🚫 **Health Rating: 1/10 - AVOID REGULAR CONSUMPTION**

**IF You Must Eat Maggi:**
1. **Maximum 1-2 times per MONTH** (not per week!)
2. **Use only HALF the masala packet** (cut sodium by 50%)
3. **Add vegetables:** spinach, carrots, peas, broccoli (+nutrients)
4. **Add protein:** boiled egg, tofu, chicken (+satiety)
5. **Boil in extra water, drain and refill** (removes some oil/sodium)
6. **Never eat on empty stomach** (harder on digestion)

**HEALTHIER ALTERNATIVES:**

✅ **Whole Wheat Pasta** (7g fiber, 13g protein per 100g)
✅ **Brown Rice Noodles** (Gluten-free, natural)
✅ **Soba (Buckwheat) Noodles** (Complete protein, minerals)
✅ **Zucchini Noodles (Zoodles)** (3 cal per cup!)
✅ **Chickpea Pasta** (20g protein per serving)
✅ **Fresh Egg Noodles** (Minimal processing)
✅ **Homemade Noodles** (Flour + water + egg = 3 ingredients!)

**BOTTOM LINE:**
Maggi is ENGINEERED for taste, NOT health. It's a chemical cocktail designed to be addictive. The convenience comes at a serious health cost.

**My Recommendation:** Treat it like junk food (chips, candy) - occasional indulgence only, NOT a meal replacement. Your body deserves real food! 🚫🍜`;
  }
  
  // Default Maggi info
  return `🍜 **MAGGI Noodles - Quick Health Overview**

**Rating: 2/10 ❌ (NOT HEALTHY)**

**Why Maggi is Unhealthy:**

**1. EXCESSIVE SODIUM**
   • 1,100-1,500mg per packet = 50-65% daily limit
   • Causes high blood pressure, heart disease
   • Water retention and bloating

**2. UNHEALTHY FATS**
   • Deep-fried in palm oil (trans fats)
   • 17g fat per serving (13g saturated!)
   • Clogs arteries, inflammation

**3. MSG & ARTIFICIAL ADDITIVES**
   • Monosodium glutamate (MSG) - flavor enhancer
   • May cause headaches, nausea
   • Increases appetite artificially
   • Tartrazine (Yellow 5) - linked to ADHD
   • TBHQ preservative - potential carcinogen

**4. REFINED CARBS (Maida)**
   • Zero fiber, rapid blood sugar spike
   • Energy crash in 1-2 hours
   • Increases diabetes risk

**5. NUTRITIONAL VOID**
   • 9g protein (poor quality, incomplete)
   • 2g fiber (very low)
   • No vitamins, minimal minerals
   • 294 calories of mostly junk

**HEALTH IMPACTS:**
⚠️ Regular consumption linked to:
• High blood pressure
• Obesity
• Type 2 diabetes
• Heart disease
• Kidney problems
• Liver stress

**BETTER ALTERNATIVES:**
✅ Whole wheat pasta (more fiber, protein)
✅ Brown rice noodles (natural, gluten-free)
✅ Soba noodles (buckwheat - complete protein)
✅ Fresh egg noodles (minimal additives)
✅ Zucchini noodles (low-calorie)

**IF You Must Eat:**
• Maximum 1-2 times per MONTH
• Use HALF the masala packet
• Add vegetables + protein (egg, tofu)
• Boil, drain, refill water (removes sodium)

**Ask:** "maggi ingredients" for detailed ingredient breakdown!

**BOTTOM LINE:** Maggi = convenience, NOT nutrition. Treat like junk food - rare indulgence only! 🚫`;
}

function getInstantNoodlesInfo(query) {
  const messageLower = query.toLowerCase();
  
  return `🍝 **Instant Noodles - Health Analysis**

**All instant noodles (Maggi, Top Ramen, Yippee, etc.) share similar problems:**

**Common Harmful Ingredients:**
1. **Refined flour (maida)** - No fiber, spikes blood sugar
2. **Palm oil** - Deep fried, high saturated fat
3. **MSG (E621)** - Artificial flavor enhancer
4. **TBHQ (E319)** - Preservative, potential health risks
5. **Artificial colors** - Yellow 5, Yellow 6 (behavioral issues)
6. **Excessive sodium** - 900-1500mg per pack

**Health Rating: 2-3/10 ❌**

**Better Quick Meal Options:**
✅ Whole wheat pasta (8-10 min cook time)
✅ Fresh noodles from store
✅ Instant brown rice
✅ Quinoa (cooks in 15 min)

Want specific analysis? Ask about "Maggi ingredients" or any other instant noodle brand!`;
}

function getPanipuriInfo(query) {
  const messageLower = query.toLowerCase();
  
  if (messageLower.includes('ingredient')) {
    return `🎊 **PANIPURI (Golgappa/Puchka) - Complete Ingredient Analysis**

**PURI (Crispy Shell):**
1. **Semolina (Suji/Rava)** - 60-70%
   - Refined wheat, moderate glycemic index
   - Low in fiber (1-2g per 100g)
   - Provides crispy texture

2. **All-Purpose Flour (Maida)** - 20-30%
   - Refined, stripped of nutrients
   - High glycemic index

3. **Baking Soda/Eno** - 1-2%
   - Makes puris puff up when fried
   - Safe in small amounts

4. **Oil for Deep Frying**
   - Usually cheap refined oil or reused oil ⚠️
   - High in trans fats if reheated multiple times
   - Absorbs 40-50% oil by weight

**PANI (Spicy Water):**
1. **Mint (Pudina)** - Fresh herb
   - Aids digestion
   - Cooling effect
   - Rich in antioxidants

2. **Coriander (Dhania)** - Fresh herb
   - Vitamin K, C
   - Anti-inflammatory

3. **Green Chili** - Spice
   - Capsaicin (metabolism boost)
   - Vitamin C

4. **Tamarind (Imli)** - Souring agent
   - Contains natural sugars
   - Vitamin C, tartaric acid

5. **Black Salt (Kala Namak)** - 500-800mg sodium per serving
   - Digestive properties
   - High sodium content ⚠️

6. **Cumin (Jeera)** - Spice
   - Aids digestion
   - Iron source

7. **Chaat Masala** - Spice blend
   - Contains: Mango powder, black salt, cumin, coriander
   - Adds flavor but also sodium

8. **Sugar/Jaggery** - 1-2 tsp per serving
   - Balances spice
   - Adds 8-12g sugar

**FILLING (Aloo/Chickpea):**
1. **Boiled Potatoes (Aloo)**
   - Carbs: 20g per serving
   - Potassium, Vitamin C
   - Glycemic index: 78 (high)

2. **Boiled Chickpeas (Chana)**
   - Protein: 7-8g per serving
   - Fiber: 6-7g
   - Complex carbs

3. **Moong Dal (Sprouted)** - Sometimes added
   - Protein: 3-4g
   - Easy to digest

4. **Spices** - Chaat masala, red chili powder, cumin

**SWEET CHUTNEY (Meethi Chutney):**
1. **Dates/Tamarind** - Natural base
   - High in natural sugars (15-20g per serving)

2. **Jaggery/Sugar** - Sweetener
   - Adds 10-15g refined sugar

3. **Spices** - Cumin, black salt, chili powder

**⚠️ STREET VENDOR CONCERNS:**

**Hygiene Issues:**
• **Water Quality** - Tap water used (may not be filtered)
  - Risk of bacteria, waterborne diseases
  - E. coli, typhoid, cholera risk

• **Ice Cubes** - Often made from unfiltered water
  - Major contamination source

• **Unwashed Hands** - Vendor hygiene varies
  - Cross-contamination risk

• **Reused Oil** - Oil used 10-20+ times
  - Trans fats accumulate
  - Carcinogenic compounds (acrylamide)
  - Dark, thick oil is a red flag

• **Open Air Exposure** - Dust, pollution, flies
  - Food sits uncovered for hours

**NUTRITIONAL BREAKDOWN (Per 6 Puris):**
• **Calories:** 150-200 (varies by oil absorption)
• **Carbs:** 30-35g (mostly refined)
• **Protein:** 4-6g (if chickpea filling)
• **Fat:** 8-12g (mostly from frying)
• **Fiber:** 2-3g (low)
• **Sodium:** 600-900mg (very high!)
• **Sugar:** 10-15g (from chutneys)

**HEALTH RATING: 4/10 ⚠️**

**Health Concerns:**

1. **HIGH GLYCEMIC LOAD**
   - Refined flour + potatoes = rapid blood sugar spike
   - Not ideal for diabetics

2. **EXCESSIVE SODIUM**
   - 600-900mg per serving
   - Causes water retention, bloating
   - Risk for hypertension

3. **DEEP-FRIED**
   - High in saturated/trans fats
   - Increases cholesterol
   - 150-200 calories mostly from oil

4. **FOOD SAFETY RISKS**
   - Contaminated water = stomach infections
   - Poor hygiene = food poisoning
   - Reused oil = cancer risk

5. **SUGAR OVERLOAD**
   - Sweet chutney adds 10-15g sugar
   - Empty calories

**BENEFITS (Small silver lining):**
✅ Mint & coriander - digestive aids
✅ Tamarind - Vitamin C
✅ Chickpeas - protein & fiber (if used)
✅ Portion controlled (small serving size)

**HEALTHIER ALTERNATIVES:**

✅ **Homemade Panipuri:**
   - Baked puris (not fried) - saves 100+ calories
   - Filtered/boiled water for pani
   - Use moong sprouts instead of potatoes
   - Reduce sweet chutney
   - Fresh herbs, no MSG

✅ **Better Street Food Choices:**
   - Bhel Puri (less oil)
   - Fruit Chaat (no frying)
   - Grilled Corn (no oil)
   - Roasted Chana

**IF You Must Eat Street Panipuri:**
1. **Choose Clean Vendor** - Look for:
   - Filtered water (RO system visible)
   - Clean hands, gloves worn
   - Fresh-looking oil (light colored)
   - Covered food items

2. **Ask for Customization:**
   - "Bhaiya, less meethi chutney"
   - "Extra pudina pani" (mint water)
   - "Chana filling only" (skip potato)

3. **Timing Matters:**
   - Eat freshly made puris (crispy = less oil)
   - Avoid evening rush (vendors rush, hygiene suffers)
   - Monsoon season = higher infection risk (avoid!)

4. **Limit Frequency:**
   - Maximum 1-2 times per month
   - Treat as occasional indulgence, not regular meal

**BOTTOM LINE:**
Panipuri is a tasty street food, but comes with health risks:
• Hygiene concerns (biggest issue)
• High sodium, sugar, oil
• Low nutritional value
• Risk of stomach infections

**Verdict:** Enjoy occasionally from trusted, clean vendors. Better yet, make healthier version at home! 🏠`;
  }
  
  return `🎊 **PANIPURI (Golgappa/Puchka) - Quick Health Analysis**

**Health Rating: 4/10 ⚠️**

**Main Ingredients:**
• **Puri (Shell):** Semolina + maida, deep-fried
• **Pani (Water):** Mint, coriander, tamarind, spices, water
• **Filling:** Potatoes, chickpeas, moong sprouts
• **Chutney:** Tamarind/date chutney (sweet)

**Calories:** 150-200 per serving (6 puris)

**Health Concerns:**

⚠️ **HYGIENE RISKS (BIGGEST ISSUE)**
   - Unfiltered water = stomach infections
   - Reused oil (10-20 times) = trans fats
   - Poor vendor hygiene = food poisoning
   - Open air = dust, flies, pollution

⚠️ **Nutritional Issues:**
   - High sodium: 600-900mg (bloating)
   - Deep-fried: 8-12g fat
   - Refined carbs: Blood sugar spike
   - High sugar: 10-15g from chutneys

**Benefits:**
✅ Mint & coriander - aid digestion
✅ Tamarind - Vitamin C
✅ Small portion size
✅ Chickpeas - protein (if used)

**Safer Option:** Make at home with:
• Baked puris (not fried)
• Filtered/boiled water
• Moong sprouts instead of potato
• Less sweet chutney

**Frequency:** Maximum 1-2 times per month from clean, trusted vendors only!

**Ask:** "panipuri ingredients" for detailed breakdown!`;
}

function getSamosaInfo() {
  return `🥟 **SAMOSA - Health & Ingredient Analysis**

**Health Rating: 3/10 ❌**

**Main Ingredients:**

**Outer Layer (Pastry):**
• All-purpose flour (maida) - refined, no fiber
• Oil/ghee - makes it flaky
• Salt, water, carom seeds

**Filling:**
• Potatoes (high carb, GI 78)
• Peas (fiber, protein)
• Onions, ginger, garlic
• Spices: cumin, coriander, garam masala, chili

**Deep-fried in oil** - absorbs 30-40% oil by weight

**Nutritional Info (Per piece):**
• Calories: 250-300
• Carbs: 25-30g (refined)
• Protein: 4-6g
• Fat: 15-18g (mostly saturated)
• Fiber: 2-3g
• Sodium: 400-500mg

**Health Concerns:**
❌ Deep-fried = high saturated fat
❌ Refined flour = blood sugar spike
❌ High calories, low nutrients
❌ Street vendors reuse oil (trans fats)

**Better Alternative:**
✅ Baked samosa (saves 150 calories!)
✅ Air-fried version
✅ Whole wheat covering
✅ Add more vegetables to filling

**Limit to:** Once per month max!`;
}

function getVadaPavInfo() {
  return `🍔 **VADA PAV - Mumbai Street Food Analysis**

**Health Rating: 3/10 ❌**

**Components:**

**Vada (Potato Fritter):**
• Mashed potatoes (high GI)
• Besan (chickpea flour) coating
• Deep-fried in oil
• Spices: turmeric, mustard, chili

**Pav (Bread):**
• White bread (maida - refined)
• Butter (optional but common)

**Chutneys:**
• Green chutney (coriander, mint)
• Sweet tamarind chutney
• Dry garlic chutney (high sodium)

**Calories:** 250-350 per piece

**Health Issues:**
❌ Double carb bomb (potato + white bread)
❌ Deep-fried = 10-15g saturated fat
❌ Refined carbs = rapid blood sugar spike
❌ High sodium: 500-700mg
❌ Low protein (only 5-6g)
❌ Minimal vegetables

**Better Version:**
✅ Baked vada instead of fried
✅ Whole wheat pav
✅ Skip butter
✅ Load up on green chutney (vegetables!)
✅ Add vegetable filling

**Verdict:** Tasty but unhealthy. Occasional treat only!`;
}

function getChaatInfo() {
  return `🍲 **CHAAT - Indian Street Food Analysis**

**Common Chaat Types & Health Ratings:**

**1. BHEL PURI** - Rating: 5/10
   • Puffed rice (low cal)
   • Vegetables (onion, tomato)
   • Sev (fried, high fat)
   • Chutneys (sugar + sodium)
   • Calories: 150-200
   • Healthier option among chaats!

**2. SEV PURI** - Rating: 4/10
   • Fried puris (high fat)
   • Potato, onion, tomato
   • Heavy sev topping
   • Calories: 200-250

**3. DAHI PURI** - Rating: 4/10
   • Fried puris
   • Yogurt (good - probiotics!)
   • Potato filling
   • Sweet chutney
   • Calories: 180-220

**4. PAPDI CHAAT** - Rating: 3/10
   • Fried papdi (crackers)
   • Yogurt, chickpeas
   • Lots of chutneys
   • Calories: 250-300

**Common Issues:**
⚠️ High sodium (600-900mg)
⚠️ Fried components
⚠️ Sugar from chutneys
⚠️ Hygiene concerns (street vendors)

**Healthier Chaat:**
✅ Fruit chaat (no frying!)
✅ Sprout chaat (high protein)
✅ Moong dal chaat (fiber + protein)

**Tips:** Ask for less sev, skip sweet chutney, choose baked over fried!`;
}

function getPizzaInfo() {
  return `🍕 **PIZZA - Complete Health Analysis**

**Health Rating: 4-7/10** (varies by type)

**Basic Ingredients:**
• Refined flour (maida) crust
• Tomato sauce (natural)
• Cheese (mozzarella - high fat)
• Toppings (vegetables/meat)
• Oil on crust

**Calories (Per slice):**
• Thin crust veggie: 180-220
• Regular cheese: 250-300
• Meat lovers: 300-350
• Stuffed crust: 350-400

**Nutritional Breakdown (1 slice regular):**
• Carbs: 30-35g
• Protein: 10-12g
• Fat: 10-15g (6-8g saturated)
• Sodium: 500-700mg
• Fiber: 2-3g

**Health Concerns:**
❌ High in saturated fat (cheese)
❌ Refined flour crust (blood sugar spike)
❌ High sodium (600-800mg per slice)
❌ Often loaded with processed meats

**Healthier Pizza Options:**
✅ Thin crust (saves 50-100 cal)
✅ Whole wheat crust (+3g fiber)
✅ Light cheese (saves 100+ cal)
✅ Veggie toppings (nutrients!)
✅ No processed meats

**BEST:** Homemade with whole wheat crust, fresh veggies, less cheese!

**Limit:** 1-2 times per month if eating out`;
}

function getBurgerInfo() {
  return `🍔 **BURGER - Health & Nutrition Analysis**

**Health Rating: 3-6/10** (varies widely)

**Components:**

**Bun:**
• Refined flour (maida) - 150 calories
• Often with added sugar
• Low fiber (1-2g)

**Patty:**
• Beef/chicken: 200-300 calories
• Veggie: 100-150 calories
• Protein: 15-25g

**Cheese:** 100 calories, 8g fat

**Sauces:** Mayo, ketchup - 50-100 calories

**Veggies:** Lettuce, tomato, onion (minimal)

**Total Calories:**
• Simple veg burger: 350-400
• Chicken burger: 450-550
• Double cheese burger: 600-800
• Fast food meal with fries+drink: 1200-1500!

**Health Issues:**
❌ High in saturated fat (15-20g)
❌ Excessive sodium (800-1500mg)
❌ Refined carbs (bun)
❌ Low vegetables (1 leaf lettuce?)
❌ Processed meat (if fast food)

**Healthier Burger:**
✅ Whole wheat bun
✅ Grilled chicken/veggie patty
✅ Skip cheese or use 1 slice
✅ Load veggies (lettuce, tomato, onion, cucumber)
✅ Mustard instead of mayo
✅ No fries, choose salad side

**Homemade >> Fast food** (control ingredients!)`;
}

function getRiceInfo() {
  return `🍚 **RICE - Complete Nutrition Guide**

**TYPES OF RICE:**

**1. WHITE RICE** - Rating: 5/10
   • Calories: 205 per cup cooked
   • Carbs: 45g
   • Protein: 4g
   • Fiber: 0.6g (very low!)
   • Glycemic Index: 73 (high)
   • Digests quickly, blood sugar spike

**2. BROWN RICE** - Rating: 8/10 ✅
   • Calories: 218 per cup
   • Carbs: 46g
   • Protein: 5g
   • Fiber: 3.5g (6x more than white!)
   • GI: 68 (medium)
   • Retains bran & germ (nutrients)
   • Magnesium, phosphorus, B vitamins

**3. BASMATI RICE** - Rating: 6/10
   • Lower GI than regular white rice (58)
   • Aromatic, long grain
   • Still refined if white basmati

**4. RED RICE** - Rating: 8/10 ✅
   • Rich in antioxidants (anthocyanins)
   • Higher fiber than white rice
   • Iron, zinc content

**5. BLACK RICE** - Rating: 9/10 ✅✅
   • Highest antioxidants
   • 8g fiber per cup
   • Protein: 9g per cup
   • Called "forbidden rice"

**Health Tips:**
• Brown/red/black >> White rice
• Portion: ½ - 1 cup cooked max
• Pair with protein + vegetables
• Cook and cool (increases resistant starch)

**For Diabetes:** Choose brown/black rice, small portions`;
}

function getChickenInfo() {
  return `🍗 **CHICKEN - Complete Nutrition Analysis**

**Health Rating: 8/10 ✅ (lean, grilled)**

**CHICKEN BREAST (100g, Skinless, Grilled):**
• Calories: 165
• Protein: 31g (high-quality, complete)
• Fat: 3.6g (very lean!)
• Saturated Fat: 1g
• Cholesterol: 85mg
• Carbs: 0g
• Iron, B vitamins (B3, B6, B12)

**CHICKEN THIGH (100g, Skinless):**
• Calories: 209
• Protein: 26g
• Fat: 11g (higher than breast)
• More flavor, juicier

**WITH SKIN (100g):**
• Calories: 239
• Fat: 14g (double!)
• Saturated Fat: 4g

**Health Benefits:**
✅ Excellent protein source (muscle building)
✅ Low in saturated fat (skinless)
✅ Rich in B vitamins (energy metabolism)
✅ Selenium (immune support)
✅ Phosphorus (bone health)

**Cooking Methods (Healthiest to Least):**
1. **Grilled/Baked** - No added oil (165 cal)
2. **Boiled/Steamed** - Retains nutrients
3. **Stir-fried** - Minimal oil (+50 cal)
4. **Fried** - High fat (+150-200 cal)
5. **Deep-fried (KFC style)** - Very unhealthy (+300 cal)

**Portion Size:** 100-150g (palm size)

**Daily Limit:** 200-300g for active individuals

**⚠️ Concerns:**
• Antibiotic use in commercial chicken
• Processed chicken (nuggets, sausages) - unhealthy
• Fried chicken - high calories, trans fats

**Best Choice:** Organic, free-range, grilled/baked chicken breast!`;
}

function generateBreakfastResponse(query) {
  const isQuestion = query.toLowerCase().includes('what') || query.toLowerCase().includes('should');
  
  if (isQuestion) {
    return `🌅 **Ideal Morning Breakfast Recommendations**

**Best Breakfast Options for Sustained Energy:**

**1. Protein-Rich Breakfast (Recommended)**
   • 2-3 eggs (scrambled, boiled, or omelet) - 12-18g protein
   • Whole wheat toast (2 slices) - Complex carbs
   • Avocado (½) - Healthy fats
   • Cherry tomatoes - Vitamins & antioxidants
   
   **Benefits:** Keeps you full for 4-5 hours, stable blood sugar, sustained energy
   **Calories:** ~400-500

**2. Oatmeal Power Bowl**
   • 1 cup cooked oatmeal - Fiber (4g)
   • 1 banana - Potassium (422mg)
   • 2 tbsp almonds - Healthy fats
   • 1 tbsp honey - Natural sweetness
   • Cinnamon - Blood sugar regulation
   
   **Benefits:** Heart health, reduces cholesterol, slow-release energy
   **Calories:** ~350-400

**3. Greek Yogurt Parfait**
   • 1 cup Greek yogurt (plain) - 17g protein
   • Mixed berries (½ cup) - Antioxidants
   • Granola (¼ cup) - Fiber
   • Chia seeds (1 tbsp) - Omega-3
   
   **Benefits:** Gut health (probiotics), muscle support, weight management
   **Calories:** ~300-350

**4. Smoothie Bowl**
   • 1 banana + ½ cup berries
   • 1 scoop protein powder (20g)
   • 1 cup almond milk
   • Toppings: nuts, seeds, coconut
   
   **Benefits:** Quick, portable, nutrient-dense
   **Calories:** ~350-400

**⏰ TIMING TIPS:**
• Eat within 1 hour of waking up
• Never skip breakfast - slows metabolism
• Hydrate first: 16oz water before eating

**❌ AVOID:**
• Sugary cereals (blood sugar spike)
• White bread/pastries (refined carbs)
• Fruit juice alone (no fiber, sugar crash)
• Heavy fried foods (sluggish feeling)

**💡 PRO TIP:** Include all three macros: Protein (30%), Carbs (40%), Healthy Fats (30%) for optimal energy!`;
  }
  
  return getBreakfastInfo();
}

function getBreakfastInfo() {
  return `🍳 **Healthy Breakfast Essentials**

A good breakfast should include protein, complex carbs, and healthy fats for sustained energy throughout the morning.

**Top Breakfast Foods:**
• Eggs - Complete protein, B vitamins
• Oatmeal - Fiber, heart health
• Greek yogurt - Probiotics, calcium
• Whole wheat toast - Complex carbs
• Berries - Antioxidants, vitamins
• Nuts/seeds - Healthy fats, minerals

**Ideal macros:** 20-30g protein, 40-50g carbs, 10-15g healthy fats`;
}

function getBananaInfo() {
  return `🍌 **Banana - Complete Nutritional Profile**

**Per Medium Banana (118g):**
• Calories: 105
• Carbohydrates: 27g
  - Sugar: 14g (natural)
  - Fiber: 3g
• Protein: 1.3g
• Fat: 0.4g
• Potassium: 422mg (12% DV) ⭐
• Vitamin B6: 0.4mg (20% DV)
• Vitamin C: 10mg (11% DV)
• Magnesium: 32mg (8% DV)

**🏆 Health Benefits:**

1. **Heart Health**
   - High potassium regulates blood pressure
   - Reduces risk of stroke by 24%

2. **Digestive Health**
   - Resistant starch feeds good gut bacteria
   - Natural prebiotic effect

3. **Energy Boost**
   - Natural sugars + fiber = sustained energy
   - Perfect pre-workout snack

4. **Mood Enhancement**
   - Vitamin B6 helps produce serotonin
   - Natural stress reducer

5. **Exercise Recovery**
   - Replenishes glycogen stores
   - Prevents muscle cramps

**⏰ Best Time to Eat:**
• Morning: Kickstart metabolism
• Pre-workout: 30-60 min before (quick energy)
• Post-workout: Muscle recovery

**🎯 Ripeness Guide:**
• Green: Lower sugar, more resistant starch (better for blood sugar)
• Yellow: Perfect balance
• Spotted: Sweeter, easier to digest, more antioxidants

**❌ Caution:**
• High glycemic index (51) - diabetics should pair with protein/fat
• Can cause constipation if unripe

**Rating:** 8.5/10 - Excellent nutritious fruit!`;
}

function getAppleInfo() {
  return `🍎 **Apple - "Nature's Toothbrush"**

**Per Medium Apple (182g):**
• Calories: 95
• Carbs: 25g (Fiber: 4.4g - 17% DV)
• Sugar: 19g (natural, with fiber)
• Vitamin C: 14% DV
• Potassium: 195mg (6% DV)
• Quercetin: Powerful antioxidant

**Health Benefits:**
✅ Lowers cholesterol (pectin fiber)
✅ Supports gut health (prebiotic)
✅ May reduce diabetes risk (polyphenols)
✅ Weight loss friendly (filling, low calorie)
✅ Brain health (quercetin protects neurons)

**Best Varieties:**
• Granny Smith: Lowest sugar, highest fiber
• Honeycrisp: Sweet, crunchy
• Fuji: Antioxidant-rich

**💡 TIP:** Always eat with skin - 50% of fiber & most antioxidants are in the peel!

**Rating:** 9/10 - One of the healthiest fruits!`;
}

function getEggInfo() {
  return `🥚 **Eggs - Complete Protein Powerhouse**

**Per Large Egg (50g):**
• Calories: 72
• Protein: 6.3g (complete - all 9 amino acids)
• Fat: 5g (3.5g unsaturated, 1.5g saturated)
• Cholesterol: 186mg (dietary cholesterol doesn't significantly raise blood cholesterol in most people)
• Vitamin D: 6% DV
• Vitamin B12: 9% DV
• Selenium: 22% DV
• Choline: 147mg (27% DV) - critical for brain health

**🏆 Benefits:**
1. **Muscle Building** - High-quality protein (biological value: 100)
2. **Eye Health** - Lutein & zeaxanthin prevent macular degeneration
3. **Brain Function** - Choline supports memory & cognition
4. **Weight Management** - High satiety, keeps you full
5. **Nutrient Dense** - 13 essential vitamins & minerals

**Cooking Methods (Healthiest to Least):**
1. Boiled/Poached - Preserves all nutrients
2. Scrambled - Good with minimal oil
3. Fried - Use olive oil, not butter
4. Avoid: Deep-fried

**Myth Buster:** 
❌ "Eggs raise cholesterol" - FALSE for most people
✅ Studies show 1-3 eggs daily is safe for healthy individuals

**Daily Limit:** 1-3 eggs for most adults (unless advised otherwise)

**Rating:** 10/10 - Perfect food!`;
}

function getOatmealInfo() {
  return `🌾 **Oatmeal - Heart Health Champion**

**Per 1 Cup Cooked (234g):**
• Calories: 166
• Carbs: 28g (Fiber: 4g)
• Protein: 6g
• Fat: 3.6g
• Beta-glucan: 1-2g (soluble fiber)
• Iron: 13% DV
• Magnesium: 15% DV

**Proven Health Benefits:**

1. **Lowers Cholesterol** (FDA-approved claim)
   - Beta-glucan reduces LDL by 5-10%
   - Reduces heart disease risk

2. **Blood Sugar Control**
   - Low glycemic index (55)
   - Slows glucose absorption

3. **Weight Management**
   - High satiety - keeps you full 4-6 hours
   - Reduces appetite hormones

4. **Gut Health**
   - Prebiotic fiber feeds beneficial bacteria
   - Improves digestion

**Best Types:**
1. Steel-cut oats - Least processed, most fiber
2. Rolled oats - Good balance
3. ❌ Instant oats - Higher glycemic, added sugar

**🍯 Healthy Toppings:**
✓ Berries, banana, nuts, chia seeds, cinnamon
✗ Brown sugar, honey (minimize)

**Rating:** 9/10 - Breakfast superfood!`;
}

function getProteinInfo() {
  return `💪 **Protein - Essential Macronutrient Guide**

**Daily Protein Needs:**
• **Sedentary Adults:** 0.8g per kg (0.36g per lb)
  Example: 150 lb person = 54g/day
  
• **Active Individuals:** 1.2-1.6g per kg
  Example: 150 lb person = 82-109g/day
  
• **Athletes/Bodybuilders:** 1.6-2.2g per kg
  Example: 150 lb person = 109-150g/day

• **Weight Loss:** 1.6-2.4g per kg (high protein preserves muscle)

**🏆 Best Protein Sources:**

**Animal Sources (Complete Protein):**
1. Chicken breast - 31g per 100g, lean
2. Salmon - 25g per 100g + omega-3
3. Eggs - 6g per egg, perfect amino acid profile
4. Greek yogurt - 17g per cup + probiotics
5. Lean beef - 26g per 100g + iron, B12

**Plant Sources:**
1. Lentils - 18g per cup + fiber
2. Quinoa - 8g per cup (complete protein)
3. Tofu - 20g per cup
4. Chickpeas - 15g per cup
5. Edamame - 17g per cup

**Functions of Protein:**
✅ Builds & repairs muscle tissue
✅ Produces enzymes & hormones
✅ Supports immune function
✅ Keeps you satiated (reduces hunger)
✅ Preserves muscle during weight loss
✅ Boosts metabolism (thermic effect)

**Protein Timing:**
• **Spread throughout day** - 20-40g per meal
• **Post-workout** - 20-30g within 2 hours
• **Before bed** - 20-30g (casein) for overnight recovery

**💡 Quality Matters:**
Complete proteins (all 9 essential amino acids) > Incomplete proteins

**Signs of Deficiency:**
⚠️ Muscle loss, weak immunity, slow wound healing, fatigue, hair loss

**Can You Have Too Much?**
• Generally safe up to 2g per kg
• Excess may strain kidneys in those with kidney disease
• Spread intake - body can only use ~30-40g per meal

**Rating:** Protein is ESSENTIAL - prioritize it!`;
}

function getVitaminInfo() {
  return `💊 **Complete Vitamin Guide**

**Fat-Soluble Vitamins (A, D, E, K):**

**Vitamin A:**
• Function: Vision, immunity, skin health
• Sources: Carrots, sweet potatoes, spinach
• Daily need: 900 mcg (men), 700 mcg (women)
• Deficiency: Night blindness, dry eyes

**Vitamin D:**
• Function: Bone health, immunity, mood
• Sources: Sunlight (20 min/day), fatty fish, fortified milk
• Daily need: 600-800 IU (15-20 mcg)
• Deficiency: Bone weakness, depression, fatigue

**Vitamin E:**
• Function: Antioxidant, skin health
• Sources: Nuts, seeds, vegetable oils
• Daily need: 15 mg
• Deficiency: Nerve damage (rare)

**Vitamin K:**
• Function: Blood clotting, bone strength
• Sources: Leafy greens (kale, spinach)
• Daily need: 120 mcg (men), 90 mcg (women)
• Deficiency: Easy bruising, bleeding

**Water-Soluble Vitamins (B Complex, C):**

**B1 (Thiamine):** Energy metabolism - whole grains, pork
**B2 (Riboflavin):** Energy, skin - dairy, eggs
**B3 (Niacin):** DNA repair - chicken, tuna
**B6:** Mood, brain - chickpeas, salmon
**B12:** Red blood cells, nerves - meat, fish, dairy
**Folate (B9):** Cell growth - leafy greens, beans
**Biotin (B7):** Hair, skin, nails - eggs, nuts

**Vitamin C:**
• Function: Immunity, collagen, antioxidant
• Sources: Citrus, berries, bell peppers
• Daily need: 90 mg (men), 75 mg (women)
• Deficiency: Scurvy, weak immunity, slow healing

**💡 Best Approach:**
✓ Eat colorful, diverse diet
✓ Don't rely on supplements alone
✓ Get blood tested if suspecting deficiency

**Rating:** Vitamins are essential - get them from food first!`;
}

function getHydrationInfo() {
  return `💧 **Hydration - The Forgotten Nutrient**

**Daily Water Needs:**
• **Men:** 3.7 liters (15.5 cups, ~125 oz)
• **Women:** 2.7 liters (11.5 cups, ~91 oz)
• **Athletes:** Add 2-3 cups per hour of exercise
• **Hot Climate:** Add 2-4 cups

**Rule of Thumb:** Half your body weight (lbs) in ounces
Example: 150 lbs = 75 oz water/day

**🚰 Signs of Dehydration:**
⚠️ Dark yellow urine (should be pale yellow)
⚠️ Headaches, dizziness
⚠️ Fatigue, brain fog
⚠️ Dry mouth, lips, skin
⚠️ Constipation
⚠️ Muscle cramps

**Benefits of Proper Hydration:**
✅ Regulates body temperature
✅ Lubricates joints
✅ Transports nutrients
✅ Removes waste (kidneys)
✅ Improves skin health & elasticity
✅ Boosts energy & focus (brain is 73% water!)
✅ Aids weight loss (increases metabolism 24-30%)
✅ Prevents kidney stones

**🥤 Hydrating Foods (count toward daily intake):**
• Watermelon - 92% water
• Cucumber - 95% water
• Oranges - 87% water
• Strawberries - 91% water
• Lettuce - 96% water

**⏰ When to Drink:**
1. **Morning:** 16 oz upon waking (rehydrate from sleep)
2. **Before meals:** 8 oz (30 min before - aids digestion)
3. **During exercise:** 7-10 oz every 10-20 min
4. **Evening:** Sip, don't chug (avoid sleep disruption)

**💡 Pro Tips:**
• Add lemon/cucumber for flavor
• Herbal teas count
• Coffee/tea count (mild diuretic effect is minimal)
• Monitor urine color - best indicator

**❌ Limit:**
• Sugary drinks (dehydrating)
• Excessive alcohol (major dehydrator)

**Can You Overhydrate?**
Rare, but possible (hyponatremia) - only concern for endurance athletes drinking excessively

**Rating:** Water is LIFE - drink up!`;
}

function getSugarInfo() {
  return `🍬 **Sugar - The Sweet Truth**

**WHO Daily Limits:**
• **Adults:** Max 25g (6 teaspoons) added sugar
• **Children (7-10):** Max 24g (6 tsp)
• **Children (4-6):** Max 19g (5 tsp)
• **Ideal:** <10% of total calories

**Types of Sugar:**
1. **Glucose** - Quickest energy, used by all cells
2. **Fructose** - Fruit sugar, processed by liver
3. **Sucrose** - Table sugar (glucose + fructose)
4. **Lactose** - Milk sugar
5. **High Fructose Corn Syrup (HFCS)** - Highly processed, linked to obesity

**Natural vs Added:**
✅ **Natural (in fruits):** Comes with fiber, vitamins - OKAY in moderation
❌ **Added Sugar:** Empty calories - LIMIT strictly

**Health Risks of Excess Sugar:**
1. **Weight Gain & Obesity**
   - Liquid calories don't trigger satiety
   - 1 soda = 39g sugar = 150 empty calories

2. **Type 2 Diabetes**
   - Spikes blood sugar repeatedly
   - Leads to insulin resistance

3. **Heart Disease**
   - Increases triglycerides
   - Raises blood pressure
   - Inflammation

4. **Tooth Decay**
   - Feeds bacteria in mouth
   - Erodes enamel

5. **Accelerated Aging**
   - Damages collagen via glycation
   - Causes skin wrinkles

6. **Fatty Liver Disease**
   - Fructose processed in liver
   - Can cause non-alcoholic fatty liver

**🕵️ Hidden Sugar Sources:**
• Yogurt (flavored) - 20-30g
• Granola bars - 12-18g
• Pasta sauce - 6-12g per serving
• Bread - 3-5g per slice
• BBQ sauce - 16g per 2 tbsp
• Protein bars - 15-25g

**Reading Labels:**
• Check "Added Sugars" specifically
• 4g sugar = 1 teaspoon
• Look for: sucrose, dextrose, maltose, syrup, nectar, juice concentrate

**🌿 Better Alternatives:**
1. **Stevia** - Zero calorie, natural
2. **Monk Fruit** - Zero calorie, natural
3. **Dates** - Whole food, fiber included
4. **Fresh Fruit** - Nutrients + fiber
5. **Cinnamon** - Natural sweetness

**How to Reduce:**
• Quit gradually (10% less per week)
• Replace soda with sparkling water + fruit
• Choose unsweetened versions
• Cook at home (control sugar)
• Read every label

**Blood Sugar Crashes:**
High sugar → Insulin spike → Crash (1-2 hrs) → Fatigue, irritability, hunger

**Rating:** Sugar = pleasure, not nutrition. Minimize it!`;
}

function getCalorieInfo() {
  return `📊 **Calorie Guide - Energy Balance**

**Daily Calorie Needs (Average):**

**Women:**
• Sedentary (little/no exercise): 1,800-2,000
• Moderately active (exercise 3-5x/week): 2,000-2,200
• Very active (intense daily exercise): 2,400+

**Men:**
• Sedentary: 2,200-2,400
• Moderately active: 2,400-2,800
• Very active: 3,000+

*Varies by age, weight, height, metabolism*

**Calculate YOUR needs (Mifflin-St Jeor):**

**Men:** (10 × weight kg) + (6.25 × height cm) − (5 × age) + 5
**Women:** (10 × weight kg) + (6.25 × height cm) − (5 × age) − 161

Then multiply by activity factor:
• 1.2 = sedentary
• 1.375 = light activity
• 1.55 = moderate
• 1.725 = very active
• 1.9 = extra active

**Macronutrient Breakdown:**
• **Carbs:** 45-65% (4 cal/gram)
• **Protein:** 10-35% (4 cal/gram)
• **Fats:** 20-35% (9 cal/gram)

**For Weight Loss:**
• Create 500 cal deficit = 1 lb loss/week
• Create 1,000 cal deficit = 2 lb loss/week
• **Minimum:** 1,200 cal/day (women), 1,500 (men)
• Going too low = muscle loss, metabolic slowdown

**For Muscle Gain:**
• Create 300-500 cal surplus
• High protein (1.6-2.2g per kg)
• Strength training required

**💡 Quality > Quantity:**
**200 calories of almonds ≠ 200 calories of candy**

Almonds:
• Protein, healthy fats, fiber
• Sustained energy, satiety
• Vitamins, minerals

Candy:
• Pure sugar
• Blood sugar spike & crash
• Zero nutrients (empty calories)

**Calorie Density Examples:**
• Vegetables: 20-50 cal/100g
• Fruits: 40-70 cal/100g
• Grains: 340-370 cal/100g
• Nuts: 550-650 cal/100g
• Oils/butter: 900 cal/100g

**Tracking Tips:**
• Use MyFitnessPal or Cronometer
• Weigh food for accuracy
• Track everything (oils, sauces too!)
• Focus on nutrient density, not just numbers

**Rating:** Calories matter, but WHAT you eat matters more!`;
}

function getWeightLossInfo() {
  return `⚖️ **Evidence-Based Weight Loss Guide**

**Safe & Sustainable Rate:**
• **Ideal:** 1-2 lbs per week
• **Aggressive:** 2-3 lbs/week (short term only)
• **Danger:** >3 lbs/week (muscle loss, metabolic damage)

**The Science: 1 lb fat = 3,500 calories**
• 500 cal deficit/day = 1 lb/week
• 1,000 cal deficit/day = 2 lbs/week

**🎯 5 Pillars of Weight Loss:**

**1. CALORIE DEFICIT (Most Important - 70%)**
• Calculate maintenance calories
• Subtract 500-750 calories
• Track everything religiously
• Never go below 1,200 (women) or 1,500 (men)

**2. HIGH PROTEIN INTAKE**
• **Goal:** 1.6-2.4g per kg body weight
• **Why:** Preserves muscle, increases satiety, boosts metabolism
• **Sources:** Chicken, fish, eggs, Greek yogurt, lentils
• **Thermic effect:** Burns 20-30% of calories consumed

**3. STRENGTH TRAINING**
• **Frequency:** 3-4x per week
• **Why:** Preserves/builds muscle during deficit
• **Muscle = metabolism** (burns calories 24/7)
• **Focus:** Compound movements (squats, deadlifts, bench)

**4. CARDIO (Optional but helpful)**
• **Frequency:** 3-5x per week
• **Type:** Walking, running, cycling, swimming
• **Duration:** 30-60 min moderate intensity
• **Burns:** 200-500 extra calories per session

**5. SLEEP & STRESS MANAGEMENT**
• **Sleep:** 7-9 hours per night
• **Why:** Poor sleep increases ghrelin (hunger hormone)
• **Cortisol:** High stress = fat storage (especially belly)
• **Solution:** Meditation, yoga, walks

**🍽️ Nutrition Strategies:**

**A. Intermittent Fasting (IF):**
• 16:8 (fast 16 hours, eat in 8-hour window)
• Helps control calories naturally
• May boost fat burning

**B. High Volume, Low Calorie:**
• Fill up on vegetables (high fiber, low cal)
• Eat fruit before meals (reduces appetite)
• Drink water before meals (fills stomach)

**C. Protein at Every Meal:**
• Breakfast: Eggs, Greek yogurt
• Lunch: Chicken, fish
• Dinner: Lean beef, tofu
• Snacks: Protein shake, nuts

**D. Minimize Liquid Calories:**
❌ Soda, juice, lattes, alcohol
✅ Water, black coffee, unsweetened tea

**E. Track Everything:**
• Use MyFitnessPal or Lose It!
• Weigh food for accuracy
• Include cooking oils, sauces
• Be honest!

**🚫 Avoid These Mistakes:**

1. **Too Aggressive Deficit**
   - Leads to muscle loss
   - Slows metabolism
   - Unsustainable

2. **Cutting Out Entire Food Groups**
   - Carbs aren't evil
   - Fat doesn't make you fat
   - Balance is key

3. **No Strength Training**
   - You'll lose muscle + fat
   - Skinny-fat look
   - Slower metabolism

4. **Relying on Scale Only**
   - Track measurements (waist, hips)
   - Take progress photos
   - Monitor how clothes fit

5. **All-or-Nothing Mentality**
   - One bad meal ≠ failure
   - 80/20 rule (80% clean, 20% flexible)
   - Consistency > perfection

**📏 How to Track Progress:**
• Weigh yourself weekly (same time, same conditions)
• Measure waist, hips, arms every 2 weeks
• Take photos monthly (front, side, back)
• Track energy levels and mood

**💡 Mindset Tips:**
• Focus on habits, not outcomes
• Celebrate non-scale victories
• Find sustainable approach (no quick fixes)
• It's a marathon, not a sprint

**Plateaus Are Normal:**
• Body adapts every 4-6 weeks
• Refeed day (eat at maintenance) can help
• Change up workout routine
• Be patient - whoosh effect is real

**Rating:** Weight loss = science + consistency + patience!`;
}

function getLunchInfo() {
  return `🥗 **Healthy Lunch Ideas**

A balanced lunch should keep you energized and focused for the afternoon without causing sluggishness.

**Top Lunch Options:**

1. **Grilled Chicken Salad** - Lean protein, veggies, olive oil
2. **Quinoa Bowl** - Complete protein, vegetables, tahini
3. **Turkey Sandwich** - Whole wheat bread, lean meat, veggies
4. **Salmon & Sweet Potato** - Omega-3, complex carbs
5. **Veggie Stir-fry with Tofu** - Plant protein, fiber

**Formula:** Lean protein + Complex carbs + Healthy fats + Vegetables

**Avoid:** Heavy meals, fried foods, excessive carbs (causes afternoon crash)`;
}

function getDinnerInfo() {
  return `🍽️ **Healthy Dinner Guidelines**

Dinner should be lighter than lunch, focusing on protein and vegetables.

**Best Dinner Options:**

1. **Baked Fish + Roasted Vegetables** (400 cal)
2. **Chicken Breast + Broccoli + Brown Rice** (450 cal)
3. **Lean Beef + Sweet Potato + Salad** (500 cal)
4. **Vegetarian Curry + Quinoa** (400 cal)
5. **Egg Omelet + Mixed Vegetables** (300 cal)

**Timing:** Eat 2-3 hours before bed for optimal digestion

**Portion Control:** Protein (palm size), Carbs (fist size), Vegetables (2 fists)`;
}

function getSnackInfo() {
  return `🍿 **Healthy Snack Ideas (100-200 calories)**

**Protein Snacks:**
• Greek yogurt (plain) - 100 cal, 17g protein
• Hard-boiled eggs (2) - 140 cal, 12g protein
• Cottage cheese (½ cup) - 80 cal, 14g protein
• Turkey roll-ups - 120 cal, 18g protein

**Fruit & Nut Combos:**
• Apple + almond butter (1 tbsp) - 180 cal
• Banana + peanut butter - 200 cal
• Mixed nuts (¼ cup) - 170 cal
• Trail mix (small handful) - 150 cal

**Veggie Options:**
• Hummus + carrots/celery - 120 cal
• Cucumber slices + tzatziki - 80 cal
• Cherry tomatoes + mozzarella - 100 cal

**Timing:** Snack between meals if 4+ hours apart, or pre/post workout`;
}

function getDiabetesInfo() {
  return `🩺 **Diabetes Prevention & Management Through Diet**

**Type 2 Diabetes Prevention:**

**Key Strategies:**
1. **Low Glycemic Index Foods** (slow blood sugar rise)
   ✅ Whole grains, legumes, vegetables
   ❌ White bread, sugary drinks, processed foods

2. **Increase Fiber Intake** (25-30g/day)
   • Slows glucose absorption
   • Improves insulin sensitivity
   • Sources: Oats, beans, broccoli, apples

3. **Limit Added Sugars** (<25g/day)
   • Avoid soda, candy, pastries
   • Check labels for hidden sugars

4. **Healthy Fats** (anti-inflammatory)
   • Olive oil, avocados, nuts, fatty fish
   • Reduce saturated fats

**Best Foods for Diabetes:**
• Leafy greens (spinach, kale) - 0 impact on blood sugar
• Fatty fish (salmon, mackerel) - Omega-3 reduces inflammation
• Eggs - No carbs, complete protein
• Cinnamon - Improves insulin sensitivity
• Chia seeds - High fiber, low carb

**Foods to Avoid:**
❌ White rice, white bread
❌ Sugary cereals, pastries
❌ Fruit juice (even 100% juice)
❌ Processed meats
❌ Trans fats

**Rating:** Diet is 80% of diabetes management!`;
}

function getHeartHealthInfo() {
  return `❤️ **Heart-Healthy Nutrition**

**Top Foods for Cardiovascular Health:**

1. **Fatty Fish** (Salmon, Mackerel, Sardines)
   • Omega-3 fatty acids reduce inflammation
   • Eat 2-3 times per week

2. **Leafy Greens** (Spinach, Kale)
   • Vitamin K protects arteries
   • Nitrates lower blood pressure

3. **Berries** (Blueberries, Strawberries)
   • Antioxidants reduce oxidative stress
   • Lower LDL cholesterol

4. **Nuts** (Almonds, Walnuts)
   • Healthy fats, fiber, plant sterols
   • Handful daily (1 oz)

5. **Olive Oil** (Extra Virgin)
   • Monounsaturated fats
   • Reduces inflammation

6. **Oats** (Steel-cut or Rolled)
   • Beta-glucan lowers cholesterol 5-10%
   • FDA heart-health claim

**Avoid for Heart Health:**
❌ Trans fats (partially hydrogenated oils)
❌ Excess sodium (>2,300mg/day)
❌ Processed meats (bacon, sausage)
❌ Sugary drinks
❌ Refined carbs

**Rating:** Your heart loves these foods!`;
}

function getEnergyInfo() {
  return `⚡ **Boost Your Energy Naturally**

**Foods for Sustained Energy:**

1. **Complex Carbs** (slow-release glucose)
   • Oatmeal, quinoa, sweet potatoes
   • Provides 4-6 hours of energy

2. **Protein** (prevents blood sugar crashes)
   • Eggs, Greek yogurt, chicken
   • Stabilizes energy levels

3. **Healthy Fats** (long-lasting fuel)
   • Avocados, nuts, olive oil
   • Slow digestion, steady energy

4. **Iron-Rich Foods** (prevents fatigue)
   • Spinach, red meat, lentils
   • Oxygen transport to cells

5. **B Vitamins** (energy metabolism)
   • Whole grains, eggs, leafy greens
   • Converts food to energy

**Energy-Boosting Combos:**
• Banana + almond butter (quick + sustained)
• Greek yogurt + berries + granola (protein + carbs)
• Smoothie: spinach + banana + protein powder
• Whole wheat toast + eggs + avocado

**Energy Killers:**
❌ High-sugar foods (spike then crash)
❌ Heavy, fried foods (sluggish digestion)
❌ Dehydration (even 2% reduces energy)
❌ Skipping meals (blood sugar drops)

**Timing:**
• Eat every 3-4 hours
• Never skip breakfast
• Small meals > large meals (easier digestion)

**Rating:** Eat right = feel energized all day!`;
}

function getHealthyEatingInfo() {
  return `✅ **Foundational Healthy Eating Principles**

**The Plate Method:**
• **½ Plate:** Non-starchy vegetables (broccoli, leafy greens, peppers)
• **¼ Plate:** Lean protein (chicken, fish, tofu, beans)
• **¼ Plate:** Complex carbs (brown rice, quinoa, sweet potato)
• **Side:** Healthy fat (olive oil, avocado, nuts)

**10 Rules of Healthy Eating:**

1. **Eat Whole Foods** - Minimize processing
2. **Rainbow Plate** - Variety of colors = diverse nutrients
3. **Protein with Every Meal** - Satiety + muscle preservation
4. **Healthy Fats Daily** - Brain, hormones, nutrient absorption
5. **Fiber Goal: 25-35g** - Gut health, fullness
6. **Hydrate First** - Often thirst feels like hunger
7. **Limit Added Sugar** - <25g per day
8. **Cook at Home** - Control ingredients
9. **Mindful Eating** - Slow down, chew thoroughly
10. **80/20 Rule** - 80% nutritious, 20% flexible

**Grocery Shopping Guide:**
• **Perimeter of store** - Fresh produce, proteins, dairy
• **Avoid center aisles** - Processed foods
• **Read labels** - <5 ingredients, recognize all words

**Meal Prep Tips:**
• Sunday prep for the week
• Batch cook proteins
• Pre-cut vegetables
• Portion into containers

**Rating:** Consistency beats perfection - build sustainable habits!`;
}

function generateContextualResponse(message) {
  return `💬 **Your Question: "${message}"**

I can help you with detailed information about health and nutrition! However, I need a bit more context to give you the most accurate answer.

**I specialize in:**
• 🥗 Nutritional content of foods
• 💊 Vitamins, minerals, and supplements
• 🏋️ Fitness and sports nutrition
• ⚖️ Weight management strategies
• 🩺 Diet for health conditions
• 🍳 Meal planning and healthy recipes
• 📊 Calorie and macro calculations

**Try asking me:**
• "What should I eat for breakfast?"
• "How much protein do I need daily?"
• "Is banana healthy?"
• "Best foods for weight loss?"
• "How to boost energy naturally?"
• "Diabetes-friendly foods?"

**Or be specific:**
• "Nutritional value of [food]"
• "Benefits of [nutrient]"
• "How to [health goal]"

Ask away - I'll provide detailed, evidence-based answers!`;
}

export default nutritionKnowledge;
