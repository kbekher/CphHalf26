"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { useProgramWeek } from "@/components/program-week-provider";
import { getMeals, antiAgeByWeek, phaseNotes, weekToPhase } from "@/lib/data/meals";
import { COLORS } from "@/lib/data/activity-styles";
import { cn } from "@/lib/utils";

const TAG_LABELS: Record<string, string> = {
  "t-p": "Protein",
  "t-c": "Carbs",
  "t-f": "Fat/Omega",
  "t-k": "Key step",
};

export function MealPlan() {
  const { selectedWeek } = useProgramWeek();
  const weekIndex = selectedWeek - 1;
  const mealsByDay = getMeals(weekIndex);
  const dayLabels = Object.keys(mealsByDay);
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    setActiveDay(0);
  }, [selectedWeek]);

  const activeLabel = dayLabels[activeDay] ?? dayLabels[0];
  const activeData = mealsByDay[activeLabel ?? ""];

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-green-900/30 border border-green-800/50 px-3 py-2.5 text-xs leading-relaxed text-green-100">
        {antiAgeByWeek[weekIndex]}
      </div>

      <div className="rounded-lg bg-brand-surface/80 px-3 py-2.5 text-xs leading-relaxed text-brand-muted">
        {phaseNotes[weekToPhase(weekIndex)]}
      </div>

      <ScrollArea className="w-full whitespace-nowrap md:hidden">
        <div className="flex gap-1.5 pb-2">
          {dayLabels.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveDay(i)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1 text-xs",
                i === activeDay
                  ? "border-brand-orange/30 bg-brand-orange/10 text-brand-orange"
                  : "border-brand-border text-brand-muted",
              )}
            >
              {label.split(" ")[0]}
            </button>
          ))}
        </div>
      </ScrollArea>

      {activeData && (
        <>
          <div className="md:hidden">
            {(() => {
              const colors = COLORS[activeData.badge as keyof typeof COLORS];
              const bgColor = colors?.bg || "#f5f5f5";
              const textColor = colors?.text || "#333";
              return (
                <span
                  className="inline-block rounded-full px-2 py-0.5 text-xs font-medium mb-3 border"
                  style={{
                    backgroundColor: bgColor,
                    color: textColor,
                    borderColor: textColor,
                    borderWidth: "0.5px",
                  }}
                >
                  {activeLabel}
                </span>
              );
            })()}
            <div className="w-full flex flex-col">
              <div className="flex flex-col gap-2 pb-2">
                {(activeData.meals ?? []).map((meal) => (
                  <Card key={`${meal.type}-${meal.name}`} className="w-full md:w-[min(85vw,260px)] shrink-0">
                    <CardContent className="p-3 pt-3">
                      <p className="text-xs font-medium uppercase tracking-wide text-brand-muted">
                        {meal.type}
                      </p>
                      <p className="mt-1 text-sm font-medium text-brand-light">{meal.name}</p>
                      {meal.note && (
                        <p className="mt-1 text-xs leading-relaxed text-brand-muted">
                          {meal.note}
                        </p>
                      )}
                      {meal.tags && meal.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {meal.tags.map((tag) => {
                            const colors = COLORS[tag as keyof typeof COLORS];
                            const bgColor = colors?.bg || "#f5f5f5";
                            const textColor = colors?.text || "#333";
                            return (
                              <span
                                key={tag}
                                className="text-xs font-medium px-1.5 py-0.5 rounded border"
                                style={{
                                  backgroundColor: bgColor,
                                  color: textColor,
                                  borderColor: textColor,
                                  borderWidth: "0.5px",
                                }}
                              >
                                {TAG_LABELS[tag] || tag}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block space-y-6">
            {Object.entries(mealsByDay).map(([day, dayMeals]) => {
              if (!dayMeals?.meals?.length) return null;
              const { badge, meals } = dayMeals;
              const colors = COLORS[badge as keyof typeof COLORS];
              const bgColor = colors?.bg || "#f5f5f5";
              const textColor = colors?.text || "#333";
              return (
                <div key={day}>
                  <span
                    className="inline-block rounded-full px-2 py-0.5 text-xs font-medium mb-2 border"
                    style={{
                      backgroundColor: bgColor,
                      color: textColor,
                      borderColor: textColor,
                      borderWidth: "0.5px",
                    }}
                  >
                    {day}
                  </span>
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
                    {meals.map((meal) => (
                      <Card key={`${day}-${meal.type}-${meal.name}`}>
                        <CardContent className="p-3">
                          <p className="text-xs font-medium uppercase tracking-wide text-brand-muted">
                            {meal.type}
                          </p>
                          <p className="mt-1 text-sm font-medium text-brand-light">{meal.name}</p>
                          {meal.note && (
                            <p className="mt-1 text-xs leading-relaxed text-brand-muted">
                              {meal.note}
                            </p>
                          )}
                          {meal.tags && meal.tags.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {meal.tags.map((tag) => {
                                const colors = COLORS[tag as keyof typeof COLORS];
                                const bgColor = colors?.bg || "#f5f5f5";
                                const textColor = colors?.text || "#333";
                                return (
                                  <span
                                    key={tag}
                                    className="text-xs font-medium px-1.5 py-0.5 rounded border"
                                    style={{
                                      backgroundColor: bgColor,
                                      color: textColor,
                                      borderColor: textColor,
                                      borderWidth: "0.5px",
                                    }}
                                  >
                                    {TAG_LABELS[tag] || tag}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
