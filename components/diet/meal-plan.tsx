"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { useProgramWeek } from "@/components/program-week-provider";
import { getMeals, phaseNotes } from "@/lib/data/meals";
import { MEAL_BADGE_STYLES } from "@/lib/data/activity-styles";
import { cn } from "@/lib/utils";

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
      <div className="rounded-lg bg-brand-surface/80 px-3 py-2.5 text-xs leading-relaxed text-brand-muted">
        {phaseNotes[weekIndex]}
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
                  ? "border-brand-orange bg-brand-orange/20 text-brand-light"
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
            <span
              className={cn(
                "inline-block rounded-full px-2 py-0.5 text-[10px] font-medium mb-3",
                MEAL_BADGE_STYLES[activeData.badge],
              )}
            >
              {activeLabel}
            </span>
            <div className="w-full flex flex-col">
              <div className="flex flex-col gap-2 pb-2">
                {(activeData.meals ?? []).map((meal) => (
                  <Card key={`${meal.type}-${meal.name}`} className="w-full md:w-[min(85vw,260px)] shrink-0">
                    <CardContent className="p-3 pt-3">
                      <p className="text-[10px] font-medium uppercase tracking-wide text-brand-muted">
                        {meal.type}
                      </p>
                      <p className="mt-1 text-sm font-medium text-brand-light">{meal.name}</p>
                      {meal.note && (
                        <p className="mt-1 text-[11px] leading-relaxed text-brand-muted">
                          {meal.note}
                        </p>
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
              return (
              <div key={day}>
                <span
                  className={cn(
                    "inline-block rounded-full px-2 py-0.5 text-[10px] font-medium mb-2",
                    MEAL_BADGE_STYLES[badge],
                  )}
                >
                  {day}
                </span>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2">
                  {meals.map((meal) => (
                    <Card key={`${day}-${meal.type}-${meal.name}`}>
                      <CardContent className="p-3">
                        <p className="text-[10px] font-medium uppercase tracking-wide text-brand-muted">
                          {meal.type}
                        </p>
                        <p className="mt-1 text-sm font-medium text-brand-light">{meal.name}</p>
                        {meal.note && (
                          <p className="mt-1 text-[11px] leading-relaxed text-brand-muted">
                            {meal.note}
                          </p>
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
