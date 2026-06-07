export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

export interface DayPlan {
  run?: { type: string; label: string; detail: string } | null;
  yoga?: { type: string; label: string; detail: string } | null;
  rest?: boolean;
  raceDay?: boolean;
}

export interface WeekPlan {
  phase: number;
  label: string;
  change: string | null;
  focus: string;
  days: DayPlan[];
}

export const PHASES = [
  { label: "Phase 1", weeks: [1, 2, 3, 4], cls: "ph1", full: "Base rebuild" },
  { label: "Phase 2", weeks: [5, 6, 7, 8, 9], cls: "ph2", full: "Build + threshold" },
  { label: "Phase 3", weeks: [10, 11, 12, 13], cls: "ph3", full: "Speed + race work" },
  { label: "Phase 4", weeks: [14, 15], cls: "ph4", full: "Taper + race" },
];

export const WEEKS: WeekPlan[] = [
  // ── PHASE 1 ──
  {
    phase: 1,
    label: "Base rebuild — ease in",
    change: null,
    focus:
      "Two easy runs this week. No pressure. Wear the toe bandage. Get the daily yoga habit locked in.",
    days: [
      {
        run: null,
        yoga: { type: "c-pilates", label: "Pilates core", detail: "Glute bridges, dead bugs, planks — 20min" },
      },
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip focus", detail: "Pigeon, lizard, figure-four — 25min" },
      },
      {
        run: null,
        yoga: { type: "c-core", label: "Core flow", detail: "Bird dogs, side planks, roll-downs — 20min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "4–5 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Calves, hips — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip + glute", detail: "Clamshells, bridges, IT band — 20min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "6–8 km easy" },
        yoga: { type: "c-yoga-yin", label: "Yin recovery", detail: "Full body — 30min" },
      },
    ],
  },
  {
    phase: 1,
    label: "Base rebuild",
    change: null,
    focus: "Three runs this week if energy allows. Tempo and long run are always separated by a rest/yoga day.",
    days: [
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip mobility", detail: "Pigeon, hip flexor lunge, IT band — 25min" },
      },
      {
        run: null,
        yoga: { type: "c-core", label: "Core pilates", detail: "Dead bugs, planks, bird dogs — 20min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hamstrings, glutes — 15min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hips + calves — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip + glute", detail: "Deep pigeon, fire hydrants — 25min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "8 km, last 1 km quicker" },
        yoga: { type: "c-yoga-yin", label: "Yin recovery", detail: "Hips, calves, feet — 30min" },
      },
    ],
  },
  {
    phase: 1,
    label: "Base rebuild + first tempo",
    change: "⚡ First tempo this week — Friday. Long run Sunday. Saturday is always a yoga-only buffer between them.",
    focus:
      "Tempo on Friday, yoga-only Saturday, long run Sunday. This separation is maintained every week from now on.",
    days: [
      {
        run: null,
        yoga: { type: "c-pilates", label: "Pilates core", detail: "Stability: bird dogs, side planks — 20min" },
      },
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip focus", detail: "Pigeon, half-moon, glute work — 25min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Calves, quads, hips — 15min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "6 km: 1km WU, 3km@5:10, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "IT band, quads — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin yoga", detail: "Buffer day — deep hip + quad holds — 30min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "9 km easy" },
        yoga: { type: "c-yoga-yin", label: "Yin recovery", detail: "Full body — 30min" },
      },
    ],
  },
  {
    phase: 1,
    label: "Recovery week",
    change: null,
    focus:
      "Lighter week — 2 runs only. Use the extra energy for longer yoga sessions. Adapt, absorb, recover.",
    days: [
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip mobility", detail: "Pigeon, lizard, figure-four — 30min" },
      },
      {
        run: null,
        yoga: { type: "c-core", label: "Core pilates", detail: "Full core: planks, roll-downs, dead bugs — 25min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hips + calves — 15min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip + glute", detail: "Glute activation, hip flexor stretch — 25min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin yoga", detail: "Deep recovery: hip, IT band, calf — 35min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "8 km easy" },
        yoga: { type: "c-yoga-flow", label: "Recovery flow", detail: "Full body — 20min" },
      },
    ],
  },

  // ── PHASE 2 ──
  {
    phase: 2,
    label: "Build — volume climbing",
    change: null,
    focus:
      "Tempo Friday, yoga Saturday buffer, long run Sunday every week from here. Volume rises steadily.",
    days: [
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip focus", detail: "Deep pigeon, lateral hip, IT band — 30min" },
      },
      {
        run: null,
        yoga: { type: "c-pilates", label: "Pilates core", detail: "Single-leg bridges, dead bugs — 25min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "6 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hips + hamstrings — 20min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "7 km: 1km WU, 4km@5:05, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "Quads, IT band — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin buffer", detail: "Hip flexor, quad, piriformis — 35min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "11 km easy-mod" },
        yoga: { type: "c-yoga-yin", label: "Yin recovery", detail: "Calves, feet, full body — 30min" },
      },
    ],
  },
  {
    phase: 2,
    label: "Build + threshold",
    change: null,
    focus: "First 13 km long run. Post long-run yin is important — give it time. Easy run added Wednesday.",
    days: [
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip mobility", detail: "Pigeon, warrior, lizard — 30min" },
      },
      {
        run: null,
        yoga: { type: "c-pilates", label: "Pilates core", detail: "Anti-rotation, bird dogs, single-leg — 25min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "6 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hip flexors, glutes — 20min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "7 km: 1km WU, 4km@5:00, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "IT band, hamstrings — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin buffer", detail: "Deep quad, piriformis, hip — 35min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "13 km, last 3@5:00" },
        yoga: { type: "c-yoga-yin", label: "Yin recovery", detail: "Full body recovery — 35min" },
      },
    ],
  },
  {
    phase: 2,
    label: "Recovery week",
    change: null,
    focus: "Mid-plan check. Lighter week. Use the energy for longer yoga. Check in on how the toe is feeling.",
    days: [
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip focus", detail: "Extended pigeon, figure-four, clamshells — 35min" },
      },
      {
        run: null,
        yoga: { type: "c-pilates", label: "Pilates core", detail: "Full core routine — 25min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hips + calves — 15min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "6 km: 1km WU, 3km@5:00, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "Quads, glutes — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin buffer", detail: "Deep recovery — 35min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "11 km easy" },
        yoga: { type: "c-yoga-flow", label: "Recovery flow", detail: "Full body — 20min" },
      },
    ],
  },
  {
    phase: 2,
    label: "Build — 14 km long",
    change: null,
    focus:
      "14 km long run Sunday. Core stability is critical as mileage rises — do not skip Wednesday pilates.",
    days: [
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip mobility", detail: "Pigeon, IT band, hip flexor lunge — 30min" },
      },
      {
        run: null,
        yoga: {
          type: "c-pilates",
          label: "Pilates core",
          detail: "Single-leg stability, planks, roll-downs — 25min",
        },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "6 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hips + hamstrings — 20min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "8 km: 1km WU, 5km@4:55, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "IT band, calves — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin buffer", detail: "IT band, quad, piriformis — 35min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "14 km, last 4@5:00" },
        yoga: { type: "c-yoga-yin", label: "Yin recovery", detail: "Feet, calves, full body — 35min" },
      },
    ],
  },
  {
    phase: 2,
    label: "Peak build — 16 km",
    change: "📈 Biggest build week. 16 km long run Sunday is your longest yet. Fuel it properly.",
    focus:
      "16 km long run Sunday. This is your peak volume week before speed phase begins. Eat and sleep well.",
    days: [
      {
        run: null,
        yoga: {
          type: "c-hip",
          label: "Hip focus",
          detail: "Deep pigeon, warrior holds, lateral hip — 35min",
        },
      },
      {
        run: null,
        yoga: {
          type: "c-pilates",
          label: "Pilates core",
          detail: "Full stability: planks, dead bugs, bridges — 25min",
        },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "7 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hip flexors, glutes — 20min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "8 km: 1km WU, 5km@4:55, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "Quads, IT band — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin buffer", detail: "Hip flexor, calf, piriformis — 35min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "16 km, last 4@4:44–4:50" },
        yoga: { type: "c-yoga-yin", label: "Deep yin", detail: "Full body + foot stretch — 40min" },
      },
    ],
  },

  // ── PHASE 3 ──
  {
    phase: 3,
    label: "Speed — intervals begin",
    change:
      "⚡ Structure change: intervals Monday, easy run Wednesday, tempo Friday, long run Sunday. Never two quality sessions back-to-back.",
    focus:
      "Intervals Monday — never on empty. Easy Wednesday for recovery. Tempo Friday. Long Sunday. Saturday always yoga buffer.",
    days: [
      {
        run: { type: "c-run-int", label: "Intervals", detail: "5×800m@4:25–4:35 + WU/CD" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hips, calves, IT band — 20min" },
      },
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip focus", detail: "Pigeon, figure-four, hip flexor lunge — 30min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "6 km easy — flush the legs" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Light full body — 15min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "7 km: 1km WU, 4km@4:55, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "Quads, IT band — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin buffer", detail: "Deep hip + IT band — 35min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "14 km, last 3@race pace" },
        yoga: { type: "c-yoga-yin", label: "Yin recovery", detail: "Calves, quads, feet — 30min" },
      },
    ],
  },
  {
    phase: 3,
    label: "Race-specific intensity",
    change: null,
    focus:
      "Hardest week so far. Keep Tue and Sat yoga gentle — body has a lot to absorb. Sleep is training.",
    days: [
      {
        run: { type: "c-run-int", label: "Intervals", detail: "6×800m@4:20–4:30 + WU/CD" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hips, hamstrings — 20min" },
      },
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip mobility", detail: "Gentle pigeon, lateral hip — 25min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "6 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Light flush — 15min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "8 km: 1km WU, 5km@4:50, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "IT band, piriformis — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin buffer", detail: "IT band, piriformis, quad holds — 35min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "15 km, last 5@race pace" },
        yoga: { type: "c-yoga-yin", label: "Deep yin recovery", detail: "Hips, calves, feet — 40min" },
      },
    ],
  },
  {
    phase: 3,
    label: "Peak week — max effort",
    change:
      "🏆 Peak week. This is your hardest week of training. Intervals Mon, easy Wed, tempo Fri, longest long run Sun.",
    focus:
      "After this week the body gets to recover and sharpen. Trust the process — this is where fitness is built.",
    days: [
      {
        run: { type: "c-run-int", label: "Intervals", detail: "6×1km@4:30–4:40 + WU/CD" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hips, calves, quads — 20min" },
      },
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip focus", detail: "Pigeon, lateral hip, figure-four — 30min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "6 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Light flush — 15min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "8 km: 1km WU, 5km@4:45, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "Quads, IT band — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin buffer", detail: "Deep IT band, quad, piriformis — 35min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "16 km, last 6@4:44–4:50" },
        yoga: { type: "c-yoga-yin", label: "Deep yin recovery", detail: "Full body — 45min" },
      },
    ],
  },
  {
    phase: 3,
    label: "Step-down week",
    change:
      "📉 Step-down week (not full taper). Drop volume ~30%, keep some intensity. Body consolidates fitness.",
    focus:
      "Half marathon taper is 10–14 days, not 3 weeks. This week steps down volume while keeping sharpness.",
    days: [
      {
        run: { type: "c-run-int", label: "Intervals", detail: "4×800m@4:25–4:35 — shorter session" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Hips, hamstrings — 20min" },
      },
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip yin", detail: "Extended pigeon, IT band, hip flexor — 35min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Light — 15min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "6 km: 1km WU, 3km@4:50, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "Quads, calves — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin buffer", detail: "Full body recovery — 30min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "11 km easy — enjoy it" },
        yoga: { type: "c-yoga-flow", label: "Recovery flow", detail: "Easy — 20min" },
      },
    ],
  },

  // ── PHASE 4 ──
  {
    phase: 4,
    label: "Taper — freshen up",
    change: "✅ True taper. Volume drops significantly. Keep legs sharp with short tempo. No new stress.",
    focus:
      "Volume halved. Legs should feel restless — that is good. Trust the taper. Focus on sleep and nutrition.",
    days: [
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip mobility", detail: "Familiar pigeon + IT band — 25min" },
      },
      {
        run: null,
        yoga: { type: "c-pilates", label: "Pilates core", detail: "Light activation — 20min" },
      },
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Familiar hips + calves — 15min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-tempo", label: "Tempo", detail: "5 km: 1km WU, 2km@race pace, 2km CD" },
        yoga: { type: "c-yoga-flow", label: "Post-tempo flow", detail: "Short — 10min" },
      },
      {
        run: null,
        yoga: { type: "c-yoga-yin", label: "Yin yoga", detail: "IT band, hip flexor — 25min" },
      },
      {
        run: { type: "c-run-long", label: "Long run", detail: "9 km easy — no pressure" },
        yoga: { type: "c-yoga-flow", label: "Recovery flow", detail: "Light full body — 15min" },
      },
    ],
  },
  {
    phase: 4,
    label: "Race week",
    change: "🏁 Race week. Minimal running. No new movements in yoga. Rest Wednesday. Race Sunday.",
    focus:
      "Keep sessions very short and familiar. Carb-load Thu–Sat. Race morning: oats + banana 2–2.5h before.",
    days: [
      {
        run: { type: "c-run-easy", label: "Easy run", detail: "4 km very easy" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Short familiar flow — 10min" },
      },
      {
        run: null,
        yoga: { type: "c-hip", label: "Hip + toe care", detail: "Gentle pigeon, big toe stretch, foot roll — 20min" },
      },
      { run: null, yoga: null, rest: true },
      {
        run: { type: "c-run-easy", label: "Shakeout", detail: "3 km + 4×30sec strides" },
        yoga: { type: "c-yoga-flow", label: "Post-run flow", detail: "Calves, hips — 10min" },
      },
      {
        run: null,
        yoga: { type: "c-core", label: "Core activation", detail: "Light glutes + core only — 15min" },
      },
      {
        run: null,
        yoga: { type: "c-hip", label: "Pre-race mobility", detail: "Gentle hip + glute activation — 15min" },
      },
      {
        run: { type: "c-run-race", label: "RACE DAY", detail: "Half marathon — 1:40!" },
        yoga: null,
        raceDay: true,
      },
    ],
  },
];

export function getPhaseForWeek(weekIndex: number) {
  return PHASES.find((p) => p.weeks.includes(weekIndex + 1));
}

export function hasMidweekRestBlock(weekIndex: number): boolean {
  return weekIndex < 14;
}

// Alias for backward compatibility
export const weeks = WEEKS;

// Yoga activities by phase (for backward compatibility)
export const yogaByPhase: Record<number, any[]> = {
  1: [],
  2: [],
  3: [],
  4: [],
};
