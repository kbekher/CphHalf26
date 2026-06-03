"use client";

import { PHASES } from "@/lib/data/training";
import { cn } from "@/lib/utils";
import { useProgramWeek } from "@/components/program-week-provider";

const PHASE_STYLES: Record<string, string> = {
  ph1: "bg-brand-orange/15 text-brand-orange",
  ph2: "bg-brand-orange/25 text-brand-light",
  ph3: "bg-brand-orange/30 text-brand-light",
  ph4: "bg-brand-orange/10 text-brand-orange",
};

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
              "rounded-lg px-1 py-2 text-center text-[10px] font-medium transition-colors border",
              PHASE_STYLES[phase.cls],
              isActive
                ? "border-brand-orange ring-1 ring-brand-orange/40"
                : "border-brand-border/60 opacity-90 hover:opacity-100",
            )}
          >
            {phase.label.split("—")[0]?.trim()}
          </button>
        );
      })}
    </div>
  );
}
