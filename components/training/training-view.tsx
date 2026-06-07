"use client";

import { PhaseBar } from "@/components/training/phase-bar";
import { DayCell } from "@/components/training/day-cell";
import { ActivityLegend } from "@/components/training/activity-legend";
import { WeekPicker } from "@/components/week-picker";
import { useProgramWeek } from "@/components/program-week-provider";
import { DAYS, weeks, getPhaseForWeek } from "@/lib/data/training";
import { PROGRAM_START_LABEL } from "@/lib/program-date";
import { Badge } from "@/components/ui/badge";

export function TrainingView() {
  const { selectedWeek, isPreStart } = useProgramWeek();
  const weekIndex = selectedWeek - 1;
  const week = weeks[weekIndex];
  const phaseInfo = getPhaseForWeek(weekIndex);

  if (!week) return null;

  return (
    <div className="space-y-4">
      {isPreStart && (
        <p className="rounded-lg bg-brand-surface/80 px-3 py-2 text-xs text-brand-muted">
          Plan starts {PROGRAM_START_LABEL}. Browse weeks below to preview your schedule.
        </p>
      )}

      {week.change && (
        <div className="rounded-lg bg-brand-orange/10 border border-brand-orange/30 px-3 py-2.5 text-xs leading-relaxed text-brand-orange">
          {week.change}
        </div>
      )}

      {week.focus && (
        <div className="rounded-lg bg-brand-surface/80 px-3 py-2.5 text-xs leading-relaxed text-brand-muted">
          <span className="font-medium text-brand-light">Focus: </span>
          {week.focus}
        </div>
      )}

      <PhaseBar />
      <WeekPicker />

      <div className="text-center">
        <Badge variant="outline" className="text-xs">
          {phaseInfo?.label} — {week.label}
        </Badge>
      </div>

      <div className="hidden md:grid md:grid-cols-7 md:gap-1.5">
        {DAYS.map((day) => (
          <div
            key={day}
            className="border-b border-brand-border/50 pb-1 text-center text-xs font-medium text-brand-muted"
          >
            {day}
          </div>
        ))}
        {DAYS.map((day, d) => {
          const dayPlan = week.days[d];
          return (
            <DayCell
              key={day}
              dayIndex={d}
              dayLabel={day}
              weekIndex={weekIndex}
              run={dayPlan?.run || null}
              yoga={dayPlan?.yoga || null}
              isRest={dayPlan?.rest || false}
              isRaceDay={dayPlan?.raceDay || false}
              layout="grid"
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-2 md:hidden">
        {DAYS.map((day, d) => {
          const dayPlan = week.days[d];
          return (
            <DayCell
              key={day}
              dayIndex={d}
              dayLabel={day}
              weekIndex={weekIndex}
              run={dayPlan?.run || null}
              yoga={dayPlan?.yoga || null}
              isRest={dayPlan?.rest || false}
              isRaceDay={dayPlan?.raceDay || false}
              layout="stack"
            />
          );
        })}
      </div>

      <ActivityLegend />
    </div>
  );
}
