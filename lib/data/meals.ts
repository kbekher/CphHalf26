export interface Meal {
  type?: string;
  name: string;
  note: string;
  tags?: string[];
}

export interface DayMeals {
  badge: string;
  meals: Meal[];
}

export const antiAgeByWeek = [
  "This week: blueberries in breakfast yogurt daily · spinach in omelettes and salads · avocado with eggs · green tea morning · salmon twice · dark chocolate square post-dinner",
  "This week: strawberries + oats every morning · kale in stir-fry and soups · avocado on toast · green tea 2–3× daily · trout + sardines · cacao in smoothie",
  "This week: blueberries + chia bowls · spinach omelette · avocado in rice bowls · green tea before runs · salmon + mackerel · dark chocolate after long run",
  "Recovery week: all 6 superfoods maintained · focus on blueberries for inflammation post-runs · double down on green tea · avocado every day",
  "Build week: strawberries in post-run recovery smoothie · kale in soups and stir-fry · avocado in grain bowls · green tea pre-run · salmon 3× · cacao energy balls",
  "This week: blueberries in overnight oats · wilted spinach with fish dinners · avocado daily · green tea morning + afternoon · trout + tuna · dark chocolate",
  "Recovery week: extra blueberries and strawberries for antioxidant recovery · kale chips as snack · avocado toast · green tea · sardines on rye · cacao nibs on yogurt",
  "This week: mixed berry smoothies · spinach + egg frittatas · avocado + chickpea bowls · green tea · salmon + mackerel · dark chocolate post long run",
  "Peak build: double berry portions this week — higher training load = higher inflammation · kale in everything · avocado generously · green tea · salmon 3× · cacao",
  "Interval week: blueberries in recovery smoothies · spinach with grilled chicken · avocado rice bowls · green tea before intervals · fatty fish 3× · dark chocolate recovery treat",
  "Speed week: strawberry + banana pre-run fuel · kale stir-fry · avocado on toast daily · green tea 2–3× · salmon + trout + sardines · cacao in overnight oats",
  "Step-down week: maintain all superfoods · lighter portions match lighter training · blueberries + yogurt · spinach omelette · avocado · green tea · salmon · chocolate",
  "PEAK week: maximum antioxidant support — berries twice daily · kale daily · avocado at every lunch · green tea morning + midday · salmon 3× + sardines · dark chocolate nightly",
  "Taper: all superfoods maintained · reduce portions with training · blueberries + oats · spinach + eggs · avocado · green tea · salmon · small dark chocolate",
  "Race week: familiar superfoods only · blueberries in morning oats · spinach in pasta · avocado daily · green tea (not race morning) · salmon Tue–Thu · no new foods from Fri",
];

export const phaseNotes = [
  "Phase 1 — Base rebuild. Run days: full fuel. Rest days: halve starchy carbs (rice, oats, pasta), keep protein at 85–90g. Establish the habit of eating protein at every meal. Meals rotate across the week — no two identical dinners.",
  "Phase 2 — Build. Volume rising. Bigger carb portions on long run day. Rest days stay lower carb. Protein sources rotate daily. Green tea 2–3× daily from this phase.",
  "Phase 3 — Speed. Interval days need pre-session carbs — never run fast on empty. Post-interval protein window is critical. Highest protein demand of the plan.",
  "Phase 4 — Taper + race. Reduce food volume with training. Keep protein high. Familiar foods only — nothing new from Friday of race week. Carb-load Thu–Sat.",
];

export const weekToPhase = (weekIndex: number): number => {
  if (weekIndex <= 3) return 0;  // weeks 1–4
  if (weekIndex <= 8) return 1;  // weeks 5–9
  if (weekIndex <= 12) return 2; // weeks 10–13
  return 3;                       // weeks 14–15
};

export interface MealVariant {
  breakfast?: Meal;
  postRun?: Meal;
  lunch?: Meal;
  snack?: Meal;
  snack1?: Meal;
  snack2?: Meal;
  dinner?: Meal;
  pre?: Meal;
  midRun?: Meal;
}

export interface RaceWeekMeal extends Meal {
  type: string;
}

export const mealRotations = {
  // run days (easy + tempo) — 9 variants cycling through 15 weeks
  runDay: [
    // variant 0 (weeks 1,5,9,13)
    {
      breakfast: { name: "Oat porridge + blueberries + boiled eggs", note: "60g oats, oat milk, handful blueberries, drizzle honey. 2 boiled eggs on the side. 1.5–2h pre-run.", tags: ["t-p", "t-c"] },
      postRun: { name: "Greek yogurt + strawberries + granola", note: "200g full-fat Greek yogurt, fresh strawberries, 2 tbsp granola. Within 45 min.", tags: ["t-p", "t-k"] },
      lunch: { name: "Brown rice bowl + grilled chicken + avocado", note: "120g brown rice, 150g grilled chicken, avocado, cucumber, edamame, tamari dressing.", tags: ["t-p", "t-c", "t-f"] },
      snack: { name: "Cottage cheese + walnuts + apple", note: "150g cottage cheese, small handful walnuts, 1 apple. High protein, healthy fat.", tags: ["t-p", "t-f"] },
      dinner: { name: "Baked mackerel + sweet potato + kale", note: "150g mackerel, roasted sweet potato wedges, steamed kale with lemon and olive oil.", tags: ["t-p", "t-c"] },
    },
    // variant 1 (weeks 2,6,10,14)
    {
      breakfast: { name: "Scrambled eggs + spinach + rye toast + berries", note: "3 eggs scrambled with wilted spinach, 1 slice rye toast, side of mixed berries.", tags: ["t-p", "t-c"] },
      postRun: { name: "Protein smoothie with cacao", note: "Oat milk, banana, 1 tbsp cacao powder, Greek yogurt, tbsp almond butter. Within 45 min.", tags: ["t-p", "t-k"] },
      lunch: { name: "Quinoa + tuna + roasted veg", note: "80g quinoa, tinned tuna in olive oil, roasted courgette, peppers, cherry tomatoes, lemon.", tags: ["t-p", "t-c"] },
      snack: { name: "Avocado on rye + pumpkin seeds", note: "1 slice rye, half avocado mashed, pumpkin seeds, pinch of chilli.", tags: ["t-f", "t-p"] },
      dinner: { name: "Chicken stir-fry + soba noodles + pak choi", note: "150g chicken strips, soba noodles, pak choi, garlic, ginger, tamari. Quick and high protein.", tags: ["t-p", "t-c"] },
    },
    // variant 2 (weeks 3,7,11,15)
    {
      breakfast: { name: "Overnight oats + chia + strawberries", note: "60g oats, chia seeds, oat milk, fresh strawberries, tbsp almond butter. Prep night before.", tags: ["t-p", "t-c"] },
      postRun: { name: "Chocolate milk + banana", note: "250ml chocolate milk, 1 banana. Ideal 3:1 carb:protein ratio. Fast and effective.", tags: ["t-p", "t-k"] },
      lunch: { name: "Lentil + sweet potato soup + rye bread", note: "Red lentils, sweet potato, cumin, turmeric, coconut milk. 1 slice rye. Filling and anti-inflammatory.", tags: ["t-p", "t-c"] },
      snack: { name: "Boiled eggs + hummus + veg sticks", note: "2 boiled eggs, 3 tbsp hummus, carrot and cucumber sticks.", tags: ["t-p", "t-f"] },
      dinner: { name: "Trout + bulgur wheat + roasted beetroot", note: "150g trout fillet, 80g bulgur wheat, roasted beetroot, wilted spinach, lemon tahini dressing.", tags: ["t-p", "t-c", "t-f"] },
    },
    // variant 3 (week 4,8,12)
    {
      breakfast: { name: "Blueberry oat pancakes + Greek yogurt", note: "Oat flour pancakes (oats + egg + oat milk), fresh blueberries, Greek yogurt on top. Run day treat.", tags: ["t-p", "t-c"] },
      postRun: { name: "Rice + poached egg + avocado", note: "80g brown rice, 1 poached egg, half avocado, squeeze of lemon. Proper recovery meal.", tags: ["t-p", "t-c", "t-f"] },
      lunch: { name: "Chicken + farro + roasted veg bowl", note: "150g chicken breast, 80g farro, roasted sweet potato, kale, tahini dressing.", tags: ["t-p", "t-c"] },
      snack: { name: "Kefir + banana + dark chocolate", note: "150ml kefir, 1 banana, 2 squares dark chocolate. Probiotics + quick carb + antioxidants.", tags: ["t-p", "t-c", "t-f"] },
      dinner: { name: "Sardines on toast + big green salad", note: "Tinned sardines on wholegrain toast, large salad: spinach, avocado, cucumber, cherry tomatoes, olive oil.", tags: ["t-p", "t-c", "t-f"] },
    },
  ] as MealVariant[],

  // rest days — 4 variants
  restDay: [
    {
      breakfast: { name: "3-egg omelette + feta + spinach", note: "3 eggs, wilted spinach, feta, mushrooms. No toast today — lower carb on rest days.", tags: ["t-p"] },
      snack1: { name: "Greek yogurt + blueberries + chia seeds", note: "200g Greek yogurt, blueberries, 1 tbsp chia seeds. No granola on rest days.", tags: ["t-p", "t-f"] },
      lunch: { name: "Chickpea + spinach + tomato stew", note: "Chickpeas, spinach, tinned tomatoes, garlic, cumin, smoked paprika. Serve without grains.", tags: ["t-p"] },
      snack2: { name: "Avocado + boiled egg + cucumber", note: "Half avocado, 1 boiled egg, cucumber slices, pinch of salt. Simple, filling, high protein.", tags: ["t-p", "t-f"] },
      dinner: { name: "Baked salmon + roasted asparagus + cauliflower", note: "150g salmon, roasted asparagus, cauliflower florets, olive oil, garlic. No grains — protein + veg day.", tags: ["t-p", "t-f"] },
    },
    {
      breakfast: { name: "Kale + strawberry smoothie bowl", note: "Kale, frozen strawberries, banana (half only), oat milk, topped with seeds and walnuts. Lower sugar rest day version.", tags: ["t-p", "t-f"] },
      snack1: { name: "Cottage cheese + walnuts + cacao nibs", note: "150g cottage cheese, walnuts, 1 tsp cacao nibs. Protein + healthy fat + antioxidant.", tags: ["t-p", "t-f"] },
      lunch: { name: "Tofu + kale stir-fry + cauliflower rice", note: "200g firm tofu cubed, kale, peppers, tamari, garlic, ginger. Cauliflower rice instead of grains.", tags: ["t-p"] },
      snack2: { name: "Hummus + veg + hard-boiled egg", note: "3 tbsp hummus, celery and carrot sticks, 1 boiled egg.", tags: ["t-p", "t-f"] },
      dinner: { name: "Chicken thigh + roasted courgette + salad", note: "150g chicken thigh (skin-off), roasted courgette and red onion, big green salad, olive oil.", tags: ["t-p", "t-f"] },
    },
    {
      breakfast: { name: "Smoked salmon + avocado + cucumber", note: "80g smoked salmon, half avocado sliced, cucumber, capers, squeeze of lemon. No bread — rest day.", tags: ["t-p", "t-f"] },
      snack1: { name: "Green tea + dark chocolate + almonds", note: "Cup of green tea, 2 squares dark chocolate, small handful almonds. Anti-aging afternoon snack.", tags: ["t-f"] },
      lunch: { name: "Tempeh + roasted veg bowl (no grains)", note: "150g tempeh cubed, roasted sweet potato (small), broccoli, tahini dressing.", tags: ["t-p", "t-f"] },
      snack2: { name: "Greek yogurt + strawberries", note: "200g Greek yogurt, fresh strawberries, pinch of cinnamon.", tags: ["t-p"] },
      dinner: { name: "Grilled trout + green beans + wilted spinach", note: "150g trout, steamed green beans, wilted spinach with garlic and olive oil. Clean, light rest day dinner.", tags: ["t-p", "t-f"] },
    },
    {
      breakfast: { name: "Veggie frittata slice + berries", note: "Pre-bake frittata: eggs, courgette, peppers, onion, feta. Slice for breakfast with mixed berries.", tags: ["t-p"] },
      snack1: { name: "Avocado + pumpkin seeds + lemon", note: "Half avocado with pumpkin seeds and lemon juice. Simple and nutrient-dense.", tags: ["t-f"] },
      lunch: { name: "Lentil salad + poached egg + kale", note: "Green lentils, cherry tomatoes, kale, capers, mustard dressing, poached egg on top.", tags: ["t-p"] },
      snack2: { name: "Cottage cheese + cacao nibs + walnut", note: "150g cottage cheese, 1 tsp cacao nibs, crushed walnuts.", tags: ["t-p", "t-f"] },
      dinner: { name: "Mackerel + roasted fennel + spinach salad", note: "150g mackerel fillet, roasted fennel, large spinach salad with avocado and lemon.", tags: ["t-p", "t-f"] },
    },
  ] as MealVariant[],

  // long run days
  longDay: [
    {
      pre: { name: "Big porridge + banana + 2 eggs", note: "80g oats, 1 large banana, honey, oat milk. Plus 2 boiled eggs. 2h before. Hydrate from waking.", tags: ["t-c", "t-p"] },
      midRun: { name: "2 medjool dates at halfway", note: "Natural fast sugar, easy on stomach. Carry water or small electrolyte bottle.", tags: ["t-c"] },
      postRun: { name: "Chocolate milk + banana immediately", note: "250ml chocolate milk + 1 banana within 30 min. Then proper meal within 90 min.", tags: ["t-k", "t-p"] },
      lunch: { name: "Wholemeal pasta + tuna + spinach + cherry tomatoes", note: "150g pasta cooked, tinned tuna, spinach, cherry tomatoes, olive oil, parmesan. High carb recovery.", tags: ["t-c", "t-p"] },
      dinner: { name: "Chicken + roast sweet potato + broccoli", note: "150g chicken, roasted sweet potato, broccoli, olive oil. Keep carbs in for overnight recovery.", tags: ["t-p", "t-c"] },
    },
    {
      pre: { name: "Blueberry oat porridge + peanut butter + eggs", note: "80g oats, blueberries, 1 tbsp peanut butter, oat milk. 2 boiled eggs. 2h before.", tags: ["t-c", "t-p"] },
      midRun: { name: "Banana chunk or gel at 8–9 km", note: "Half a banana or energy gel. Sip water at every station.", tags: ["t-c"] },
      postRun: { name: "Rice + poached eggs + avocado", note: "80g brown rice, 2 poached eggs, half avocado, drizzle of olive oil. Within 45 min.", tags: ["t-k", "t-p", "t-f"] },
      lunch: { name: "Brown rice bowl + grilled salmon + edamame", note: "120g brown rice, 130g salmon, edamame, avocado, sesame seeds, soy-ginger dressing.", tags: ["t-c", "t-p", "t-f"] },
      dinner: { name: "Soba noodles + chicken + kale stir-fry", note: "Soba noodles, chicken strips, kale, garlic, ginger, tamari. High carb + protein post long run.", tags: ["t-p", "t-c"] },
    },
  ] as MealVariant[],

  // interval days
  intDay: [
    {
      pre: { name: "Oat porridge + banana + almond butter", note: "60g oats, 1 banana, 1 tbsp almond butter. Do NOT run intervals on empty. 2h before.", tags: ["t-c", "t-p"] },
      postRun: { name: "Protein smoothie — berries + cacao", note: "Oat milk, Greek yogurt, mixed berries, 1 tbsp cacao, tbsp oats. Intervals cause most muscle damage — prioritise protein.", tags: ["t-p", "t-k"] },
      lunch: { name: "Brown rice + grilled chicken + avocado + spinach", note: "100g rice, 150g chicken, avocado, big handful spinach, olive oil. Solid recomp recovery meal.", tags: ["t-p", "t-c", "t-f"] },
      snack: { name: "Cottage cheese + blueberries + walnuts", note: "150g cottage cheese, blueberries, walnuts. Anti-inflammatory post-interval snack.", tags: ["t-p", "t-f"] },
      dinner: { name: "Salmon + quinoa + roasted veg + kale", note: "150g salmon, 80g quinoa, roasted courgette and peppers, wilted kale. Omega-3 for overnight muscle repair.", tags: ["t-p", "t-f", "t-c"] },
    },
    {
      pre: { name: "Strawberry overnight oats + boiled egg", note: "60g oats, strawberries, chia seeds, oat milk — prepped night before. 1 boiled egg alongside.", tags: ["t-c", "t-p"] },
      postRun: { name: "Greek yogurt + banana + dark chocolate", note: "200g Greek yogurt, 1 banana, 1–2 squares dark chocolate. Fast protein + carbs + antioxidant.", tags: ["t-p", "t-k"] },
      lunch: { name: "Farro + trout + roasted beetroot + avocado", note: "80g farro, 130g trout, roasted beetroot, avocado, lemon, olive oil. Nutrient-dense recomp bowl.", tags: ["t-p", "t-c", "t-f"] },
      snack: { name: "Avocado on rye + pumpkin seeds + green tea", note: "1 slice rye, half avocado, pumpkin seeds. Cup of green tea.", tags: ["t-f"] },
      dinner: { name: "Chicken + sweet potato mash + kale", note: "150g chicken breast, sweet potato mash with olive oil, steamed kale. Classic recomp dinner.", tags: ["t-p", "t-c"] },
    },
  ] as MealVariant[],

  raceWeek: [
    { type: "Mon–Wed — normal", name: "Familiar run-day meals", note: "Eat exactly as you have been training with. No new foods.", tags: [] },
    { type: "Thu–Sat — carb load", name: "Add 50–80g extra pasta or rice per meal", note: "Keep protein the same. Reduce raw veg slightly to avoid bloating. Familiar sauces only.", tags: ["t-c"] },
    { type: "Sat evening — race eve", name: "Wholemeal pasta + salmon + simple spinach salad", note: "Olive oil, garlic, no heavy sauce. Early dinner by 7pm. Practice this exact meal.", tags: ["t-c", "t-p"] },
    { type: "Race morning — 2.5h before", name: "Oats + banana + honey + 500ml water", note: "60g oats, 1 banana, drizzle honey. This exact meal. No eggs, no fat-heavy food.", tags: ["t-c", "t-k"] },
    { type: "Post-race", name: "Banana immediately, then celebrate", note: "Banana or gel right after finish line. Then within an hour: protein-rich meal with carbs. You earned it.", tags: ["t-k"] },
  ] as RaceWeekMeal[],
};

export function getMealVariant(wIdx: number, type: "run" | "rest" | "long" | "int"): MealVariant | undefined {
  if (type === "run") return mealRotations.runDay[wIdx % 4];
  if (type === "rest") return mealRotations.restDay[wIdx % 4];
  if (type === "long") return mealRotations.longDay[wIdx % 2];
  if (type === "int") return mealRotations.intDay[wIdx % 2];
  return undefined;
}

export const phaseForWeek = [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3];

/** Get meals organized by day for a given week */
export function getMeals(wIdx: number): Record<string, DayMeals> {
  // Race week (week 14, index 14)
  if (wIdx === 14) {
    return {
      "Race week": {
        badge: "b-race",
        meals: mealRotations.raceWeek as Meal[],
      },
    };
  }

  // All other weeks
  const runVariant = getMealVariant(wIdx, "run");
  const restVariant = getMealVariant(wIdx, "rest");
  const longVariant = getMealVariant(wIdx, "long");
  const intVariant = getMealVariant(wIdx, "int");

  const isSpeedPhase = wIdx >= 9 && wIdx <= 12;

  // Monday: interval days in speed phase, else easy run
  const mondayMeals: Meal[] = [];
  if (isSpeedPhase && intVariant) {
    if (intVariant.pre) mondayMeals.push({ ...intVariant.pre, type: "pre-run (2h before)" });
    if (intVariant.postRun) mondayMeals.push({ ...intVariant.postRun, type: "post-run (within 45 min)" });
    if (intVariant.lunch) mondayMeals.push({ ...intVariant.lunch, type: "lunch" });
    if (intVariant.snack) mondayMeals.push({ ...intVariant.snack, type: "snack" });
    if (intVariant.dinner) mondayMeals.push({ ...intVariant.dinner, type: "dinner" });
  } else if (runVariant) {
    if (runVariant.breakfast) mondayMeals.push({ ...runVariant.breakfast, type: "breakfast" });
    if (runVariant.lunch) mondayMeals.push({ ...runVariant.lunch, type: "lunch" });
    if (runVariant.snack) mondayMeals.push({ ...runVariant.snack, type: "snack" });
    if (runVariant.dinner) mondayMeals.push({ ...runVariant.dinner, type: "dinner" });
  }

  // Rest days (Tue-Thu)
  const restMeals: Meal[] = [];
  if (restVariant) {
    if (restVariant.breakfast) restMeals.push({ ...restVariant.breakfast, type: "breakfast" });
    if (restVariant.snack1) restMeals.push({ ...restVariant.snack1, type: "snack" });
    if (restVariant.lunch) restMeals.push({ ...restVariant.lunch, type: "lunch" });
    if (restVariant.snack2) restMeals.push({ ...restVariant.snack2, type: "snack" });
    if (restVariant.dinner) restMeals.push({ ...restVariant.dinner, type: "dinner" });
  }

  // Friday (tempo day)
  const fridayMeals: Meal[] = [];
  const fridayVariant = getMealVariant(wIdx + 1, "run");
  if (fridayVariant) {
    if (fridayVariant.breakfast) fridayMeals.push({ ...fridayVariant.breakfast, type: "breakfast (pre-run)" });
    if (fridayVariant.postRun) fridayMeals.push({ ...fridayVariant.postRun, type: "post-run (within 45 min)" });
    if (fridayVariant.lunch) fridayMeals.push({ ...fridayVariant.lunch, type: "lunch" });
    if (fridayVariant.snack) fridayMeals.push({ ...fridayVariant.snack, type: "snack" });
    if (fridayVariant.dinner) fridayMeals.push({ ...fridayVariant.dinner, type: "dinner" });
  }

  // Saturday (yoga buffer day)
  const saturdayMeals: Meal[] = [];
  const saturdayVariant = getMealVariant(wIdx + 2, "rest");
  if (saturdayVariant) {
    if (saturdayVariant.breakfast) saturdayMeals.push({ ...saturdayVariant.breakfast, type: "breakfast" });
    if (saturdayVariant.lunch) saturdayMeals.push({ ...saturdayVariant.lunch, type: "lunch" });
    if (saturdayVariant.snack2) saturdayMeals.push({ ...saturdayVariant.snack2, type: "snack" });
    if (saturdayVariant.dinner) saturdayMeals.push({ ...saturdayVariant.dinner, type: "dinner" });
  }

  // Sunday (long run)
  const sundayMeals: Meal[] = [];
  if (longVariant) {
    if (longVariant.pre) sundayMeals.push({ ...longVariant.pre, type: "breakfast (2h before)" });
    if (longVariant.midRun) sundayMeals.push({ ...longVariant.midRun, type: "mid-run fuel" });
    if (longVariant.postRun) sundayMeals.push({ ...longVariant.postRun, type: "post-run (within 30 min)" });
    if (longVariant.lunch) sundayMeals.push({ ...longVariant.lunch, type: "lunch" });
    if (longVariant.dinner) sundayMeals.push({ ...longVariant.dinner, type: "dinner" });
  }

  return {
    "Monday — easy run day": {
      badge: isSpeedPhase ? "b-int" : "b-run",
      meals: mondayMeals,
    },
    "Tue / Wed / Thu — rest days (pick any variant)": { badge: "b-rest", meals: restMeals },
    "Friday — tempo day": { badge: "b-run", meals: fridayMeals },
    "Saturday — yoga buffer day (no run)": { badge: "b-rest", meals: saturdayMeals },
    "Sunday — long run day": { badge: "b-long", meals: sundayMeals },
  };
}
