// Color values extracted from source HTML files
export const COLORS = {
  // Phases
  ph1: { bg: "#E1F5EE", text: "#0F6E56" },
  ph2: { bg: "#E6F1FB", text: "#185FA5" },
  ph3: { bg: "#FAEEDA", text: "#854F0B" },
  ph4: { bg: "#FAECE7", text: "#993C1D" },
  // Run activities
  "c-run-easy": { bg: "#EAF3DE", text: "#3B6D11" },
  "c-run-tempo": { bg: "#E6F1FB", text: "#185FA5" },
  "c-run-long": { bg: "#EEEDFE", text: "#534AB7" },
  "c-run-int": { bg: "#FAEEDA", text: "#854F0B" },
  "c-run-race": { bg: "#FAECE7", text: "#993C1D" },
  // Yoga & strength
  "c-yoga-flow": { bg: "#FBEAF0", text: "#993556" },
  "c-yoga-yin": { bg: "#F4C0D1", text: "#72243E" },
  "c-pilates": { bg: "#E1F5EE", text: "#085041" },
  "c-hip": { bg: "#EEEDFE", text: "#534AB7" },
  "c-core": { bg: "#FAC775", text: "#633806" },
  // Meal badges
  "b-run": { bg: "#E6F1FB", text: "#185FA5" },
  "b-rest": { bg: "#F1EFE8", text: "#5F5E5A" },
  "b-long": { bg: "#EEEDFE", text: "#534AB7" },
  "b-int": { bg: "#FAEEDA", text: "#854F0B" },
  "b-race": { bg: "#FAECE7", text: "#993C1D" },
  // Macro tags
  "t-p": { bg: "#E1F5EE", text: "#0F6E56" },
  "t-c": { bg: "#E6F1FB", text: "#185FA5" },
  "t-f": { bg: "#FAEEDA", text: "#854F0B" },
  "t-k": { bg: "#FAECE7", text: "#993C1D" },
};

export function getColorForLabel(labelType: string): { bg: string; text: string } {
  return COLORS[labelType as keyof typeof COLORS] || { bg: "#f5f5f5", text: "#333" };
}

export function getBackgroundColor(labelType: string): string {
  return getColorForLabel(labelType).bg;
}

export function getTextColor(labelType: string): string {
  return getColorForLabel(labelType).text;
}

export const ACTIVITY_CHIP_STYLES: Record<string, string> = {
  "c-run-easy": `bg-opacity-15 text-opacity-100 border border-opacity-30`,
  "c-run-tempo": `bg-opacity-15 text-opacity-100 border border-opacity-30`,
  "c-run-long": `bg-opacity-15 text-opacity-100 border border-opacity-30`,
  "c-run-int": `bg-opacity-15 text-opacity-100 border border-opacity-30`,
  "c-run-race": `font-semibold`,
  "c-yoga-flow": `bg-opacity-15 text-opacity-100 border border-opacity-30`,
  "c-yoga-yin": `bg-opacity-10 text-opacity-100 border border-opacity-20`,
  "c-pilates": `bg-opacity-15 text-opacity-100 border border-opacity-30`,
  "c-hip": `bg-opacity-15 text-opacity-100 border border-opacity-30`,
  "c-core": `bg-opacity-15 text-opacity-100 border border-opacity-30`,
};

export const COLOR_MAP = COLORS;

export const LEGEND_ITEMS: [string, string][] = [
  ["c-run-easy", "Easy run"],
  ["c-run-tempo", "Tempo"],
  ["c-run-long", "Long run"],
  ["c-run-int", "Intervals"],
  ["c-run-race", "Race"],
  ["c-hip", "Hip focus"],
  ["c-core", "Core/pilates"],
  ["c-yoga-flow", "Yoga flow"],
  ["c-yoga-yin", "Yin yoga"],
];

export const MEAL_BADGE_STYLES: Record<string, string> = {
  "b-run": "font-medium",
  "b-rest": "font-medium",
  "b-long": "font-medium",
  "b-int": "font-medium",
  "b-race": "font-semibold",
};
