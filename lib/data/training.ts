export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

export type ActivityType = string;

export interface RunActivity {
  day: number;
  type: ActivityType;
  label: string;
  detail: string;
}

export interface YogaActivity {
  type: ActivityType;
  label: string;
  detail: string;
}

export interface WeekPlan {
  phase: number;
  label: string;
  runs: RunActivity[];
}

export const PHASES: {
  label: string;
  weeks: number[];
  cls: string;
}[] = [
  { label: "Phase 1 — Base", weeks: [1, 2, 3, 4], cls: "ph1" },
  { label: "Phase 2 — Build", weeks: [5, 6, 7, 8, 9], cls: "ph2" },
  { label: "Phase 3 — Speed", weeks: [10, 11, 12, 13], cls: "ph3" },
  { label: "Phase 4 — Taper", weeks: [14, 15], cls: "ph4" },
];

export const yogaByPhase: Record<number, YogaActivity[]> = {
  1: [
    { type: "c-pilates", label: "Pilates core", detail: "Core + glutes 20min" },
    { type: "c-yoga-flow", label: "Yoga flow", detail: "Hip flexors, hamstrings 25min" },
    { type: "c-pilates", label: "Pilates core", detail: "Dead bugs, bird dogs 20min" },
    { type: "c-yoga-yin", label: "Yin yoga", detail: "Deep hip + IT band holds 30min" },
    { type: "c-yoga-flow", label: "Yoga flow", detail: "Full body 20min" },
    { type: "c-yoga-rest", label: "Gentle stretch", detail: "Post-run cool-down 15min" },
    { type: "c-yoga-yin", label: "Yin yoga", detail: "Recovery: 45min full session" },
  ],
  2: [
    { type: "c-pilates", label: "Pilates strength", detail: "Core + lateral hip 25min" },
    { type: "c-yoga-flow", label: "Yoga flow", detail: "Hamstrings, calves 25min" },
    { type: "c-pilates", label: "Pilates core", detail: "Planks, glute bridges 20min" },
    { type: "c-yoga-yin", label: "Yin yoga", detail: "Quad + hip flexor holds 30min" },
    { type: "c-yoga-flow", label: "Yoga flow", detail: "Full body + toe work 20min" },
    { type: "c-yoga-rest", label: "Post-run stretch", detail: "Calf, hamstring, glute 15min" },
    { type: "c-yoga-yin", label: "Yin yoga", detail: "Deep recovery 45min" },
  ],
  3: [
    { type: "c-pilates", label: "Pilates core", detail: "Anti-rotation + stability 25min" },
    { type: "c-yoga-flow", label: "Yoga flow", detail: "Hip + hamstring 25min" },
    { type: "c-pilates", label: "Pilates strength", detail: "Glutes + single-leg 25min" },
    { type: "c-yoga-yin", label: "Yin yoga", detail: "IT band + piriformis holds 30min" },
    { type: "c-yoga-flow", label: "Yoga flow", detail: "Full body mobility 20min" },
    { type: "c-yoga-rest", label: "Post-run stretch", detail: "Calves, quads, glutes 15min" },
    { type: "c-yoga-yin", label: "Yin yoga", detail: "Deep recovery + feet 45min" },
  ],
  4: [
    { type: "c-yoga-flow", label: "Yoga flow", detail: "Gentle full body 20min" },
    { type: "c-yoga-rest", label: "Gentle stretch", detail: "Easy movement 15min" },
    { type: "c-yoga-yin", label: "Yin yoga", detail: "Light hip holds 20min" },
    { type: "c-yoga-rest", label: "Gentle stretch", detail: "Legs + feet 15min" },
    { type: "c-yoga-flow", label: "Yoga flow", detail: "Short easy flow 15min" },
    { type: "c-yoga-rest", label: "Post-run stretch", detail: "Quick cool-down 10min" },
    { type: "c-yoga-rest", label: "Rest + toe care", detail: "Foot massage + stretch" },
  ],
};

export const weeks: WeekPlan[] = [
  {
    phase: 1,
    label: "Base rebuild",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "4–5 km easy" },
      { day: 5, type: "c-run-easy", label: "Easy run", detail: "6–8 km easy" },
    ],
  },
  {
    phase: 1,
    label: "Base rebuild",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
      { day: 4, type: "c-run-easy", label: "Easy run", detail: "5–6 km easy" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "8 km, last 1km quicker" },
    ],
  },
  {
    phase: 1,
    label: "Base rebuild",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "6 km: 3km@5:10" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "9 km easy" },
    ],
  },
  {
    phase: 1,
    label: "Recovery week",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
      { day: 6, type: "c-run-easy", label: "Easy run", detail: "8–10 km easy" },
    ],
  },
  {
    phase: 2,
    label: "Build + threshold",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "6 km easy" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "7 km: 4km@5:05" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "11 km easy-mod" },
    ],
  },
  {
    phase: 2,
    label: "Build + threshold",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "6 km easy" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "7 km: 4km@5:00" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "13 km, last 3@5:00" },
    ],
  },
  {
    phase: 2,
    label: "Recovery week",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "6 km: 3km@5:00" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "11 km easy" },
    ],
  },
  {
    phase: 2,
    label: "Build + threshold",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "6 km easy" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "8 km: 5km@4:55" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "14 km, last 4@5:00" },
    ],
  },
  {
    phase: 2,
    label: "Build + threshold",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "7 km easy" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "8 km: 5km@4:55" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "16 km, last 4@4:44–4:50" },
    ],
  },
  {
    phase: 3,
    label: "Speed + race work",
    runs: [
      { day: 0, type: "c-run-int", label: "Intervals", detail: "5×800m@4:25–4:35" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "7 km: 4km@4:55" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "14 km, last 3@race pace" },
    ],
  },
  {
    phase: 3,
    label: "Speed + race work",
    runs: [
      { day: 0, type: "c-run-int", label: "Intervals", detail: "6×800m@4:20–4:30" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "8 km: 5km@4:50" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "15 km, last 5@race pace" },
    ],
  },
  {
    phase: 3,
    label: "Recovery week",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "6 km easy" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "6 km: 3km@4:50" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "11 km easy" },
    ],
  },
  {
    phase: 3,
    label: "Peak week",
    runs: [
      { day: 0, type: "c-run-int", label: "Intervals", detail: "6×1km@4:30–4:40" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "8 km: 5km@4:45" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "16 km, last 6@4:44–4:50" },
    ],
  },
  {
    phase: 4,
    label: "Taper",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "5 km easy" },
      { day: 5, type: "c-run-tempo", label: "Tempo", detail: "6 km: 3km@race pace" },
      { day: 6, type: "c-run-long", label: "Long run", detail: "9 km easy" },
    ],
  },
  {
    phase: 4,
    label: "Race week",
    runs: [
      { day: 0, type: "c-run-easy", label: "Easy run", detail: "4 km very easy" },
      { day: 3, type: "c-run-easy", label: "Shakeout", detail: "3–4 km + strides" },
      { day: 6, type: "c-run-race", label: "RACE DAY", detail: "Half marathon — target 1:40!" },
    ],
  },
];

export function getPhaseForWeek(weekIndex: number) {
  return PHASES.find((p) => p.weeks.includes(weekIndex + 1));
}

export function hasMidweekRestBlock(weekIndex: number): boolean {
  return weekIndex < 14;
}
