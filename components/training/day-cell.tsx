"use client";

import { useEffect, useState } from "react";
import { ActivityChip } from "@/components/training/activity-chip";
import { useProgramWeek } from "@/components/program-week-provider";
import type { RunActivity, YogaActivity } from "@/lib/data/training";
import { hasMidweekRestBlock } from "@/lib/data/training";
import { getSupplementsForWeek } from "@/lib/supplements";
import { cn } from "@/lib/utils";

interface DayCellProps {
  dayIndex: number;
  dayLabel: string;
  weekIndex: number;
  run?: RunActivity;
  yoga: YogaActivity;
  layout?: "grid" | "stack";
}

export function DayCell({
  dayIndex,
  dayLabel,
  weekIndex,
  run,
  yoga,
  layout = "grid",
}: DayCellProps) {
  const { getDayStatusFor } = useProgramWeek();
  const dayStatus = getDayStatusFor(dayIndex);
  const [supplements, setSupplements] = useState<{
    tue: { label: string; detail: string };
    thu: { label: string; detail: string };
  } | null>(null);

  useEffect(() => {
    if (hasMidweekRestBlock(weekIndex)) {
      setSupplements(getSupplementsForWeek(weekIndex));
    }
  }, [weekIndex]);

  const isMidweek = dayIndex >= 1 && dayIndex <= 3;
  const showRestBlock = hasMidweekRestBlock(weekIndex) && isMidweek && !run;
  const isWednesdayRest = showRestBlock && dayIndex === 2;

  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 rounded-xl border p-2.5 min-h-[88px]",
        layout === "stack" && "min-h-0",
        dayStatus === "past" && "opacity-45 border-brand-border/50",
        dayStatus === "today" && "border-brand-orange ring-1 ring-brand-orange/50",
        dayStatus === "upcoming" && "border-brand-border/80",
        dayStatus === "muted" && "opacity-40 border-brand-border/40",
        showRestBlock && dayIndex === 2 && "bg-brand-surface/60",
        showRestBlock && dayIndex !== 2 && !isWednesdayRest && "bg-brand-surface/30",
      )}
    >
      {layout === "stack" && (
        <div className="flex items-center justify-between border-b border-brand-border/50 pb-1.5 mb-0.5">
          <span className="text-xs font-medium text-brand-light">{dayLabel}</span>
          {dayStatus === "today" && (
            <span className="text-[10px] font-medium text-brand-orange">Today</span>
          )}
        </div>
      )}

      {isWednesdayRest ? (
        <span className="m-auto text-center text-xs text-brand-muted">Rest</span>
      ) : showRestBlock && dayIndex === 1 && supplements ? (
        <ActivityChip
          type="supplement"
          label={supplements.tue.label}
          detail={supplements.tue.detail}
        />
      ) : showRestBlock && dayIndex === 3 && supplements ? (
        <ActivityChip
          type="supplement"
          label={supplements.thu.label}
          detail={supplements.thu.detail}
        />
      ) : (
        <>
          {run && (
            <ActivityChip type={run.type} label={run.label} detail={run.detail} />
          )}
          <ActivityChip type={yoga.type} label={yoga.label} detail={yoga.detail} />
        </>
      )}
    </div>
  );
}
