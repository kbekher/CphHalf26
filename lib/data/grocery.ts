export interface GroceryCategory {
  icon: string;
  title: string;
  items: string[];
}

export interface GroceryPhase {
  label: string;
  cats: GroceryCategory[];
}

export const groceryByPhase: GroceryPhase[] = [
  {
    label: "Phase 1 (weeks 1–4) — base grocery list. Check pantry before buying staples.",
    cats: [
      { icon: "fish", title: "🐟 Fatty fish (rotate weekly)", items: ["Salmon fillets ×2", "Mackerel fillets ×1", "Sardines tinned ×2", "Smoked salmon 80g", "Tinned tuna ×2"] },
      { icon: "fish", title: "🥩 Other protein", items: ["Chicken breast 300g", "Eggs ×14", "Greek yogurt full-fat 1kg", "Cottage cheese 250g", "Tempeh 200g", "Feta 100g"] },
      { icon: "apple", title: "🫐 Superfoods (weekly must)", items: ["Blueberries fresh or frozen 300g", "Strawberries 300g", "Spinach large bag", "Kale 200g", "Avocados ×3", "Dark chocolate 85%+ bar", "Green tea (box)"] },
      { icon: "bread", title: "🍠 Carbs (run days)", items: ["Rolled oats 750g", "Brown rice 500g", "Rye bread 1 loaf", "Sweet potatoes ×3", "Wholemeal pasta 500g", "Quinoa 300g"] },
      { icon: "leaf", title: "🥦 Veg", items: ["Broccoli", "Courgette ×2", "Cherry tomatoes", "Peppers ×2", "Cucumber", "Carrots", "Mushrooms", "Asparagus", "Cauliflower", "Fennel"] },
      { icon: "leaf", title: "🥜 Nuts, seeds, pulses", items: ["Red lentils 400g", "Chickpeas tinned ×2", "Edamame frozen 200g", "Walnuts 100g", "Almond butter jar", "Pumpkin seeds", "Chia seeds", "Hummus 250g"] },
      { icon: "salt", title: "🧴 Pantry", items: ["Olive oil", "Oat milk 1L", "Tamari / soy sauce", "Tahini", "Honey small", "Turmeric", "Cumin", "Garlic", "Ginger fresh", "Lemons ×3", "Cacao powder or nibs"] },
    ],
  },
  {
    label: "Phase 2 (weeks 5–9) — build grocery list. Higher volume = more food needed.",
    cats: [
      { icon: "fish", title: "🐟 Fatty fish (rotate)", items: ["Salmon fillets ×3", "Trout ×1", "Mackerel ×1", "Sardines ×2 tins", "Tinned tuna ×2", "Smoked salmon 80g"] },
      { icon: "fish", title: "🥩 Other protein", items: ["Chicken breast 400g", "Eggs ×16", "Greek yogurt 1kg", "Cottage cheese 300g", "Tofu firm 200g", "Tempeh 200g", "Feta 100g", "Kefir 300ml"] },
      { icon: "apple", title: "🫐 Superfoods (weekly must)", items: ["Blueberries 300g", "Strawberries 300g", "Spinach large bag", "Kale 300g", "Avocados ×4", "Dark chocolate 85%+ ×2 bars", "Green tea (restock if needed)"] },
      { icon: "bread", title: "🍠 Carbs (run + long run days)", items: ["Rolled oats 1kg", "Brown rice 750g", "Wholemeal pasta 750g", "Soba noodles 200g", "Farro 300g", "Sweet potatoes ×4", "Rye bread", "Bulgur wheat 300g", "Medjool dates ×10 (mid-run)"] },
      { icon: "leaf", title: "🥦 Veg", items: ["Broccoli ×2", "Pak choi", "Courgette ×3", "Cherry tomatoes", "Peppers ×4", "Beetroot ×2", "Red onion ×2", "Green beans", "Asparagus", "Fennel"] },
      { icon: "leaf", title: "🥜 Nuts, seeds, pulses", items: ["Chickpeas ×2 tins", "Green lentils 400g", "Edamame 200g", "Walnuts 150g", "Peanut butter jar", "Almond butter", "Chia seeds", "Pumpkin seeds", "Sesame seeds"] },
      { icon: "salt", title: "🧴 Pantry + drinks", items: ["Olive oil", "Oat milk 1.5L", "Chocolate milk small (post long run)", "Electrolyte tablets ×6", "Tamari", "Tahini", "Smoked paprika", "Turmeric", "Garlic", "Ginger", "Lemons ×4", "Cacao powder", "Coconut milk small tin"] },
    ],
  },
  {
    label: "Phase 3 (weeks 10–13) — speed phase. Highest training load = highest nutrition demand.",
    cats: [
      { icon: "fish", title: "🐟 Fatty fish (rotate)", items: ["Salmon ×3 fillets", "Trout ×1", "Mackerel ×1", "Sardines ×3 tins", "Tinned tuna ×3", "Smoked salmon 80g"] },
      { icon: "fish", title: "🥩 Other protein", items: ["Chicken breast 500g", "Eggs ×16", "Greek yogurt 1kg", "Cottage cheese 300g", "Tempeh 200g", "Tofu 200g"] },
      { icon: "apple", title: "🫐 Superfoods (weekly must)", items: ["Blueberries 400g (double — inflammation)", "Strawberries 300g", "Spinach large bag", "Kale large bag", "Avocados ×4", "Dark chocolate 85%+ ×2", "Green tea (restock)"] },
      { icon: "bread", title: "🍠 Carbs (intervals + long run)", items: ["Rolled oats 1kg", "Brown rice 750g", "Wholemeal pasta 750g", "Quinoa 300g", "Sweet potatoes ×5", "Farro 300g", "Rye bread", "Medjool dates ×14", "Energy gels ×4 (16km runs)"] },
      { icon: "leaf", title: "🥦 Veg", items: ["Broccoli ×2", "Kale", "Pak choi", "Courgette ×2", "Cherry tomatoes", "Peppers ×4", "Beetroot", "Green beans", "Asparagus", "Cauliflower"] },
      { icon: "leaf", title: "🥜 Nuts, seeds, pulses", items: ["Chickpeas ×2", "Lentils 400g", "Edamame 200g", "Walnuts 150g", "Almond butter", "Peanut butter", "Chia + pumpkin + sesame seeds"] },
      { icon: "salt", title: "🧴 Pantry + drinks", items: ["Olive oil", "Oat milk 1.5L", "Chocolate milk (post long runs)", "Electrolyte ×8", "Tamari", "Tahini", "Cacao powder", "Turmeric", "Garlic", "Ginger", "Lemons ×5"] },
    ],
  },
  {
    label: "Phase 4 — taper + race week. Familiar foods only. Nothing new from Friday of race week.",
    cats: [
      { icon: "fish", title: "🐟 Fatty fish", items: ["Salmon ×3 fillets", "Smoked salmon 80g", "Tinned tuna ×2", "Sardines ×1"] },
      { icon: "fish", title: "🥩 Other protein", items: ["Chicken breast 400g", "Eggs ×14", "Greek yogurt 1kg", "Cottage cheese 250g"] },
      { icon: "apple", title: "🫐 Superfoods (weekly must)", items: ["Blueberries 300g", "Strawberries 300g", "Spinach bag", "Kale", "Avocados ×3", "Dark chocolate 85%+ ×1", "Green tea"] },
      { icon: "bread", title: "🍠 Carbs (carb load Thu–Sat race week)", items: ["Rolled oats 750g", "Wholemeal pasta 1kg (carb load)", "Brown rice 500g", "Sweet potatoes ×3", "Rye bread", "Bananas ×10 (race week essential)", "Medjool dates ×8 (race day fuel)", "1 tested energy gel"] },
      { icon: "leaf", title: "🥦 Veg (familiar only)", items: ["Broccoli", "Spinach", "Cherry tomatoes", "Peppers", "Courgette", "Simple salad leaves"] },
      { icon: "leaf", title: "🥜 Pulses + nuts", items: ["Chickpeas ×1", "Almond butter", "Mixed nuts", "Hummus 200g"] },
      { icon: "salt", title: "🧴 Drinks + pantry", items: ["Oat milk", "Chocolate milk (post race!)", "Electrolyte ×6", "Olive oil", "Honey", "Familiar sauces ONLY"] },
    ],
  },
];
