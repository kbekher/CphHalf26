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
    label: "Phase 1 — Base (weeks 1–4)",
    cats: [
      { icon: "fish", title: "Fish & protein", items: ["Salmon fillets (×2/wk)", "Tinned tuna (×2 tins)", "Chicken breast (300g)", "Greek yogurt (500g)", "Eggs (×12)", "Feta cheese (100g)"] },
      { icon: "apple", title: "Fruit & veg", items: ["Bananas (×6)", "Berries (mixed, fresh or frozen)", "Avocados (×2)", "Sweet potatoes (×3)", "Broccoli", "Courgette", "Spinach (bag)", "Cherry tomatoes", "Carrots", "Cucumber", "Peppers (×2)"] },
      { icon: "bread", title: "Carbs & grains", items: ["Rolled oats (500g)", "Brown rice (500g)", "Quinoa (300g)", "Wholegrain bread or rye bread", "Oat crackers", "Rice cakes", "Whole wheat pasta (500g)"] },
      { icon: "leaf", title: "Pulses & nuts", items: ["Red lentils (400g)", "Chickpeas (tinned ×2)", "Almonds + walnuts (mixed, 200g)", "Almond butter (jar)", "Hummus (250g)"] },
      { icon: "droplet", title: "Dairy & drinks", items: ["Oat milk (1L)", "Chocolate milk (small, for post long run)", "Parmesan or nutritional yeast"] },
      { icon: "salt", title: "Pantry", items: ["Olive oil", "Honey", "Chia seeds", "Pumpkin seeds", "Tamari / soy sauce", "Turmeric", "Cumin", "Ginger (fresh)", "Garlic", "Lemons (×3)"] },
    ],
  },
  {
    label: "Phase 2 — Build (weeks 5–9)",
    cats: [
      { icon: "fish", title: "Fish & protein", items: ["Salmon fillets (×3/wk)", "Trout (×1/wk)", "Tinned tuna (×2 tins)", "Chicken breast (400g)", "Greek yogurt (500g)", "Eggs (×12)", "Edamame (frozen, 200g)"] },
      { icon: "apple", title: "Fruit & veg", items: ["Bananas (×8)", "Berries (mixed)", "Avocados (×3)", "Sweet potatoes (×4)", "Beetroot", "Broccoli", "Pak choi", "Courgette", "Spinach (large bag)", "Cherry tomatoes", "Peppers (×3)", "Red onion"] },
      { icon: "bread", title: "Carbs & grains", items: ["Rolled oats (750g)", "Brown rice (750g)", "Soba noodles (200g)", "Quinoa (300g)", "Wholemeal pasta (500g)", "Bulgur wheat (300g)", "Wholegrain bread", "Medjool dates (for mid-run fuel)"] },
      { icon: "leaf", title: "Pulses & nuts", items: ["Chickpeas (tinned ×2)", "Green lentils (400g)", "Peanut butter (jar)", "Almond butter", "Mixed nuts (200g)", "Sesame seeds"] },
      { icon: "droplet", title: "Dairy & drinks", items: ["Oat milk (1L)", "Chocolate milk (post long run)", "Electrolyte tablets or powder (for long runs)"] },
      { icon: "salt", title: "Pantry", items: ["Olive oil", "Tahini", "Soy-ginger dressing or tamari + fresh ginger", "Garam masala", "Cumin", "Turmeric", "Garlic", "Lemons (×4)", "Honey", "Dark chocolate chips (for energy balls)"] },
    ],
  },
  {
    label: "Phase 3 — Speed (weeks 10–13)",
    cats: [
      { icon: "fish", title: "Fish & protein", items: ["Salmon fillets (×3/wk)", "Tinned tuna (×2 tins)", "Chicken breast (500g)", "Greek yogurt (600g)", "Eggs (×14)", "Sardines (×1 tin — omega-3 boost)"] },
      { icon: "apple", title: "Fruit & veg", items: ["Bananas (×10)", "Berries", "Avocados (×3)", "Sweet potatoes (×5)", "Kale or broccoli", "Courgette", "Spinach", "Cherry tomatoes", "Peppers", "Roasting veg mix"] },
      { icon: "bread", title: "Carbs & grains", items: ["Rolled oats (1kg)", "Brown rice (750g)", "Wholemeal pasta (750g)", "Quinoa (300g)", "Wholegrain bread", "Medjool dates (×12 for mid-run)", "Energy gels (×4, for 16km run)"] },
      { icon: "leaf", title: "Pulses & nuts", items: ["Chickpeas (×2 tins)", "Red lentils (400g)", "Peanut butter", "Almond butter", "Nuts (200g)", "Pumpkin seeds"] },
      { icon: "droplet", title: "Dairy & drinks", items: ["Oat milk (1.5L)", "Chocolate milk (post long runs)", "Electrolyte drink (for 2 long runs)"] },
      { icon: "salt", title: "Pantry", items: ["Olive oil", "Tahini", "Sesame dressing", "Garlic", "Ginger", "Turmeric (anti-inflammatory)", "Honey", "Chia seeds"] },
    ],
  },
  {
    label: "Phase 4 — Taper + race (weeks 14–15)",
    cats: [
      { icon: "fish", title: "Fish & protein", items: ["Salmon fillets (×3)", "Chicken breast (400g)", "Greek yogurt (500g)", "Eggs (×10)"] },
      { icon: "apple", title: "Fruit & veg", items: ["Bananas (×8 — important race-week fuel)", "Berries", "Avocados (×2)", "Sweet potatoes (×3)", "Broccoli/kale", "Spinach", "Tomatoes", "Peppers"] },
      { icon: "bread", title: "Carbs & grains", items: ["Rolled oats (750g)", "Wholemeal pasta (1kg — carb load Fri/Sat)", "Brown rice (500g)", "Quinoa (200g)", "Wholegrain bread", "Rice cakes (race week snack)", "Medjool dates (race day fuel)", "1 race-day gel (tested in training!)"] },
      { icon: "leaf", title: "Pulses & nuts", items: ["Chickpeas (×1 tin)", "Mixed nuts", "Almond or peanut butter", "Hummus"] },
      { icon: "droplet", title: "Dairy & drinks", items: ["Oat milk", "Chocolate milk (post race!)", "Electrolyte drink for race morning", "500ml water for pre-race"] },
      { icon: "salt", title: "Pantry", items: ["Olive oil", "Honey", "Familiar condiments only — NO new sauces or spices race week"] },
    ],
  },
];
