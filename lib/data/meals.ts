export interface Meal {
  type: string;
  name: string;
  note: string;
}

export interface DayMeals {
  badge: string;
  meals: Meal[];
}

export const phaseNotes: string[] = [
  "Phase 1 (weeks 1–4): Focus on building a clean, consistent eating pattern. Moderate carbs, prioritise protein and omega-3s. Eat slightly more on run days.",
  "Phase 1 (weeks 1–4): Focus on building a clean, consistent eating pattern. Moderate carbs, prioritise protein and omega-3s. Eat slightly more on run days.",
  "Phase 1 (weeks 1–4): Focus on building a clean, consistent eating pattern. Moderate carbs, prioritise protein and omega-3s. Eat slightly more on run days.",
  "Phase 1 (weeks 1–4): Recovery week — eat slightly less volume but keep protein high to maintain adaptation.",
  "Phase 2 (weeks 5–9): Volume rising. Increase carbohydrates on long run day. Pre-run fuel becomes more important.",
  "Phase 2 (weeks 5–9): Volume rising. Increase carbohydrates on long run day. Pre-run fuel becomes more important.",
  "Phase 2 (weeks 7): Mid-phase recovery. Maintain nutrition quality even though training volume dips.",
  "Phase 2 (weeks 8–9): Biggest build weeks. Long runs demand real fuelling — eat a proper breakfast before and recovery meal within 45 min after.",
  "Phase 2 (weeks 8–9): Peak build volume. Energy needs are highest this week. Don't under-eat.",
  "Phase 3 (weeks 10–13): Introduce faster sessions. Higher protein to support muscle repair. Continue carb loading on long run days.",
  "Phase 3 (weeks 10–13): Race-specific work. Nutrition timing around intervals is crucial — never run intervals on an empty stomach.",
  "Phase 3 (weeks 12): Recovery week. Maintain protein. Slight carb reduction is fine.",
  "Phase 3 (weeks 13): Peak week. Highest calorie demand of the plan. Eat well and sleep well.",
  "Phase 4 (weeks 14–15): Taper begins. Reduce total volume of food slightly with volume. Keep carbs moderate-high. No new foods.",
  "Race week: Carb-load Thu–Sat with familiar foods. Race morning: oats + banana 2–2.5h before start. No new foods, no experimenting.",
];

const mealTemplates = {
  base: {
    runDay: [
      { type: "breakfast", name: "Oat porridge + banana", note: "Rolled oats, almond milk, banana, drizzle of honey. Eat 1.5–2h pre-run if morning run." },
      { type: "snack", name: "Greek yogurt + berries", note: "Full-fat Greek yogurt, mixed berries, small handful of walnuts." },
      { type: "lunch", name: "Quinoa salad + soft-boiled egg", note: "Quinoa, cucumber, cherry tomatoes, avocado, 2 eggs, olive oil + lemon dressing." },
      { type: "snack", name: "Rice cake + almond butter", note: "2 rice cakes, 1 tbsp almond butter, sliced banana." },
      { type: "dinner", name: "Baked salmon + sweet potato", note: "150g salmon fillet, roasted sweet potato wedges, steamed broccoli and courgette." },
      { type: "post-run", name: "Recovery smoothie", note: "Oat milk, banana, 2 tbsp oats, 1 tbsp nut butter, pinch of cinnamon. Within 45 min of run." },
    ],
    restDay: [
      { type: "breakfast", name: "Scrambled eggs on rye bread", note: "3 eggs scrambled, 2 slices rye bread, sliced avocado, fresh tomato." },
      { type: "snack", name: "Apple + handful of nuts", note: "1 apple, small handful of mixed nuts (almonds, walnuts)." },
      { type: "lunch", name: "Lentil and vegetable soup", note: "Red lentils, carrots, celery, cumin, turmeric, vegetable stock. Serve with wholegrain bread." },
      { type: "snack", name: "Hummus + veg sticks", note: "3 tbsp hummus, carrot and celery sticks, cucumber." },
      { type: "dinner", name: "Chicken + roast vegetables", note: "Grilled chicken breast, roasted courgette, peppers, red onion, chickpeas, olive oil, garlic." },
    ],
    longRunDay: [
      { type: "breakfast (2h before)", name: "Oat porridge + banana + honey", note: "Bigger portion today. Add a boiled egg if hungry. Hydrate well." },
      { type: "mid-run (if >75 min)", name: "Date or gel at halfway", note: "1–2 medjool dates or an energy gel around the 7–8km mark." },
      { type: "post-run (within 45 min)", name: "Chocolate milk or recovery meal", note: "200ml chocolate milk + banana works well, OR scrambled eggs + toast if proper meal." },
      { type: "lunch", name: "Salmon + brown rice bowl", note: "150g salmon, brown rice, edamame, cucumber, sesame seeds, soy-ginger dressing." },
      { type: "dinner", name: "Chicken stir-fry + noodles", note: "Chicken breast strips, soba noodles, broccoli, pak choi, garlic, ginger, tamari sauce." },
    ],
  },
  build: {
    runDay: [
      { type: "breakfast", name: "Overnight oats + chia seeds", note: "Rolled oats, chia seeds, oat milk, berries, 1 tbsp almond butter. Prep the night before." },
      { type: "snack", name: "Boiled eggs + crackers", note: "2 boiled eggs, 4 oat crackers, small piece of cheese." },
      { type: "lunch", name: "Tuna + pasta salad", note: "Whole wheat pasta, tinned tuna in olive oil, olives, cherry tomatoes, rocket, lemon juice." },
      { type: "snack", name: "Banana + peanut butter", note: "1 banana, 1 tbsp peanut butter. Good pre-run snack if running in the afternoon." },
      { type: "dinner", name: "Baked trout + roasted veg + quinoa", note: "Trout fillet, roasted sweet potato, beetroot and courgette, quinoa, fresh herbs." },
      { type: "post-run", name: "Protein-rich smoothie", note: "Oat milk, Greek yogurt, banana, berries, tbsp oats. Within 45 min." },
    ],
    restDay: [
      { type: "breakfast", name: "Veggie omelette", note: "3-egg omelette, spinach, mushrooms, feta, wholegrain toast." },
      { type: "snack", name: "Mixed nuts + dried fruit", note: "Small handful of nuts, few dates or raisins." },
      { type: "lunch", name: "Chickpea and spinach curry", note: "Chickpeas, spinach, tinned tomatoes, garlic, ginger, garam masala. Serve with brown rice." },
      { type: "snack", name: "Yogurt + seeds", note: "Greek yogurt, pumpkin seeds, drizzle of honey." },
      { type: "dinner", name: "Grilled chicken with tabbouleh", note: "Chicken breast, bulgur wheat, parsley, mint, tomato, cucumber, lemon, olive oil." },
    ],
    longRunDay: [
      { type: "breakfast (2h before)", name: "Porridge + banana + 2 eggs", note: "Bigger fuel load. Include protein. Hydrate from waking." },
      { type: "mid-run", name: "Energy at 8–9km mark", note: "2 medjool dates, small gel, or banana chunk. Carry water." },
      { type: "post-run (within 45 min)", name: "Rice + salmon or eggs + toast", note: "Proper meal with carbs + protein. Don't skip this." },
      { type: "lunch/dinner combined", name: "Pasta with salmon and greens", note: "Wholemeal pasta, flaked salmon, cherry tomatoes, spinach, olive oil, parmesan or nutritional yeast." },
    ],
  },
  peak: {
    runDay: [
      { type: "breakfast", name: "Porridge + banana + nut butter", note: "Larger portion. 2h before intervals or tempo. Do not run on an empty stomach." },
      { type: "snack", name: "Energy balls", note: "Oats, medjool dates, peanut butter, chia seeds, dark chocolate chips. Prep batch Sunday." },
      { type: "lunch", name: "Brown rice bowl + grilled chicken + veg", note: "Brown rice, chicken, avocado, roasted peppers, sesame dressing." },
      { type: "snack", name: "Banana + yogurt", note: "Banana, 150g Greek yogurt, drizzle of honey." },
      { type: "dinner", name: "Salmon fillet + sweet potato mash + greens", note: "150–180g salmon, sweet potato mash with olive oil, steamed kale or broccoli." },
      { type: "post-run", name: "Recovery meal within 45 min", note: "Scrambled eggs + toast + fruit OR yogurt + granola + banana." },
    ],
    restDay: [
      { type: "breakfast", name: "Veggie frittata", note: "Eggs, courgette, peppers, onion, feta. Good batch-cook option for busy mid-week days." },
      { type: "snack", name: "Apple + nut butter", note: "1 apple, 1 tbsp almond or peanut butter." },
      { type: "lunch", name: "Lentil soup + rye bread", note: "Green lentils, carrots, celery, cumin. Anti-inflammatory and filling." },
      { type: "snack", name: "Rice cake + hummus + tomato", note: "Quick easy snack." },
      { type: "dinner", name: "Grilled chicken + roast veg + bulgur wheat", note: "Chicken, roasted courgette and sweet potato, bulgur wheat, tahini dressing." },
    ],
    longRunDay: [
      { type: "breakfast (2h before)", name: "Big porridge + 2 eggs + banana", note: "Most important pre-run meal of the plan. Large carb + protein load." },
      { type: "on the run", name: "Fuel at 7km and 12km", note: "Gel, dates, or banana. Carry a small bottle with electrolyte drink." },
      { type: "post-run (within 30 min)", name: "Chocolate milk + banana immediately", note: "Then proper meal within 90 min." },
      { type: "lunch/dinner", name: "Big pasta bowl", note: "Wholemeal pasta, tuna or salmon, spinach, cherry tomatoes, olive oil. High carb + protein recovery meal." },
    ],
  },
  taper: {
    runDay: [
      { type: "breakfast", name: "Porridge + banana", note: "Normal run day fuel, slightly smaller portions as volume drops." },
      { type: "snack", name: "Yogurt + berries", note: "Greek yogurt, fresh berries." },
      { type: "lunch", name: "Brown rice + grilled chicken or fish", note: "Keep it clean and familiar." },
      { type: "snack", name: "Banana + almond butter", note: "" },
      { type: "dinner", name: "Salmon + pasta + greens", note: "Familiar pre-race dinner. Practice this exact meal as race-eve dinner too." },
    ],
    restDay: [
      { type: "breakfast", name: "Eggs on toast + fruit", note: "Light, familiar, no surprises." },
      { type: "snack", name: "Mixed nuts + apple", note: "" },
      { type: "lunch", name: "Quinoa salad + soft-boiled eggs", note: "Light but nutrient-dense." },
      { type: "snack", name: "Rice cake + hummus", note: "" },
      { type: "dinner", name: "Chicken + roast veg + sweet potato", note: "" },
    ],
    raceDay: [
      { type: "2.5h before race", name: "Oat porridge + banana + honey", note: "Familiar meal only. No new foods. Medium-sized portion. Drink 500ml water." },
      { type: "30 min before", name: "Half a banana or 1 date", note: "Optional top-up only if hungry." },
      { type: "during race", name: "Gel or date at 10km mark", note: "Carry one gel or 2 dates. Sip water at every aid station." },
      { type: "post-race", name: "Chocolate milk or banana first", note: "Then a proper celebratory meal — you've earned it." },
    ],
  },
};

export const phaseForWeek = [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3];

type BaseTemplateSet = (typeof mealTemplates)["base"];
type TaperTemplateSet = (typeof mealTemplates)["taper"];

function getTemplates(wIdx: number): BaseTemplateSet | TaperTemplateSet {
  const p = phaseForWeek[wIdx] ?? 0;
  return [mealTemplates.base, mealTemplates.build, mealTemplates.peak, mealTemplates.taper][p];
}

/** Taper template has no longRunDay — fall back to run day meals. */
function getLongRunMeals(templates: BaseTemplateSet | TaperTemplateSet): Meal[] {
  if ("longRunDay" in templates) return templates.longRunDay;
  return templates.runDay;
}

export function getMeals(wIdx: number): Record<string, DayMeals> {
  if (wIdx === 14) {
    const templates = mealTemplates.taper;
    return {
      "Monday (easy run)": { badge: "b-run", meals: templates.runDay },
      Tuesday: { badge: "b-rest", meals: templates.restDay },
      Wednesday: { badge: "b-rest", meals: templates.restDay },
      "Thursday (shakeout)": { badge: "b-run", meals: templates.runDay },
      Friday: { badge: "b-rest", meals: templates.restDay },
      "Saturday (carb load)": { badge: "b-rest", meals: templates.runDay },
      "Sunday — RACE DAY": { badge: "b-race", meals: templates.raceDay },
    };
  }
  const templates = getTemplates(wIdx);
  const isTaperWeek = phaseForWeek[wIdx] === 3;
  return {
    "Monday (run)": { badge: "b-run", meals: templates.runDay },
    "Tuesday (strength)": { badge: "b-rest", meals: templates.restDay },
    "Wednesday (rest)": { badge: "b-rest", meals: templates.restDay },
    "Thursday (strength)": { badge: "b-rest", meals: templates.restDay },
    "Friday (run or rest)": { badge: "b-run", meals: templates.runDay },
    "Saturday (tempo/intervals)": { badge: "b-run", meals: templates.runDay },
    [isTaperWeek ? "Sunday (long run — easy)" : "Sunday (long run)"]: {
      badge: isTaperWeek ? "b-run" : "b-long",
      meals: getLongRunMeals(templates),
    },
  };
}

export const MEAL_DAY_KEYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export function getMealDayLabels(wIdx: number): string[] {
  return Object.keys(getMeals(wIdx));
}
