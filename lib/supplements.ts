export const SUPPLEMENT_POOL = [
  { label: "Hop focus", detail: "Plyometrics & landing mechanics 25min" },
  { label: "Core flow", detail: "Dynamic core sequence 20min" },
  { label: "Hip + glutes", detail: "Activation & stability 25min" },
] as const;

export type SupplementWorkout = (typeof SUPPLEMENT_POOL)[number];

const STORAGE_KEY = "cph-half-supplements";

type StoredSupplements = Record<string, { tue: string; thu: string }>;

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

function pickPair(weekIndex: number): { tue: SupplementWorkout; thu: SupplementWorkout } {
  const rand = seededRandom(weekIndex * 7919 + 42);
  const first = Math.floor(rand() * 3);
  let second = Math.floor(rand() * 3);
  while (second === first) second = Math.floor(rand() * 3);
  return {
    tue: SUPPLEMENT_POOL[first]!,
    thu: SUPPLEMENT_POOL[second]!,
  };
}

function readStorage(): StoredSupplements {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredSupplements) : {};
  } catch {
    return {};
  }
}

function writeStorage(data: StoredSupplements): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getSupplementsForWeek(weekIndex: number): {
  tue: SupplementWorkout;
  thu: SupplementWorkout;
} {
  const key = String(weekIndex);
  const stored = readStorage();
  const existing = stored[key];
  if (existing) {
    const tue = SUPPLEMENT_POOL.find((w) => w.label === existing.tue);
    const thu = SUPPLEMENT_POOL.find((w) => w.label === existing.thu);
    if (tue && thu && tue.label !== thu.label) return { tue, thu };
  }
  const pair = pickPair(weekIndex);
  stored[key] = { tue: pair.tue.label, thu: pair.thu.label };
  writeStorage(stored);
  return pair;
}
