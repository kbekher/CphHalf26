"use client";

import { PHASES } from "@/lib/data/training";
import { cn } from "@/lib/utils";
import { useProgramWeek } from "@/components/program-week-provider";

export function PhaseBar() {
  const { selectedWeek, setSelectedWeek } = useProgramWeek();

  return (
    <div className="grid grid-cols-4 gap-1">
      {PHASES.map((phase) => {
        const isActive = phase.weeks.includes(selectedWeek);
        return (
          <button
            key={phase.cls}
            type="button"
            onClick={() => setSelectedWeek(phase.weeks[0])}
            className={cn(
              "rounded-lg px-1 py-2 text-center text-xs font-medium transition-colors border text-brand-light",
              isActive
                ? "bg-brand-orange/10 border-brand-orange/30 text-brand-orange ring-1 ring-brand-orange/40"
                : "border-brand-border/60 opacity-70 hover:opacity-100",
            )}
          >
            {phase.label.split("—")[0]?.trim()}
          </button>
        );
      })}
    </div>
  );
}
