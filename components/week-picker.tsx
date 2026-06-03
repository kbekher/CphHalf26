"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TOTAL_WEEKS } from "@/lib/program-date";
import { cn } from "@/lib/utils";
import { useProgramWeek } from "@/components/program-week-provider";

interface WeekPickerProps {
  showNav?: boolean;
}

export function WeekPicker({ showNav = true }: WeekPickerProps) {
  const {
    selectedWeek,
    setSelectedWeek,
    changeWeek,
    getWeekStatusFor,
    currentWeek,
  } = useProgramWeek();

  return (
    <div className="space-y-3">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-1.5 pb-2">
          {Array.from({ length: TOTAL_WEEKS }, (_, i) => {
            const week = i + 1;
            const status = getWeekStatusFor(week);
            const isSelected = selectedWeek === week;
            return (
              <button
                key={week}
                type="button"
                onClick={() => setSelectedWeek(week)}
                className={cn(
                  "shrink-0 rounded-full border px-2.5 py-1 text-xs transition-colors",
                  status === "past" && "opacity-40 border-brand-border text-brand-muted",
                  status === "current" &&
                    !isSelected &&
                    "border-brand-orange/60 text-brand-light",
                  status === "current" &&
                    isSelected &&
                    "border-brand-orange bg-brand-orange/20 text-brand-light font-medium",
                  status === "future" && "border-brand-border text-brand-muted",
                  status === "pre-start" && "border-brand-border text-brand-muted",
                  isSelected &&
                    status !== "current" &&
                    "border-brand-light bg-brand-surface text-brand-light font-medium",
                )}
              >
                W{week}
              </button>
            );
          })}
        </div>
      </ScrollArea>

      {showNav && (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => changeWeek(-1)}
            disabled={selectedWeek <= 1}
            aria-label="Previous week"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <p className="flex-1 text-center text-sm font-medium text-brand-light">
            Week {selectedWeek} of {TOTAL_WEEKS}
            {currentWeek !== null && currentWeek === selectedWeek && (
              <span className="ml-2 text-xs text-brand-orange">· current</span>
            )}
          </p>
          <Button
            variant="outline"
            size="icon"
            onClick={() => changeWeek(1)}
            disabled={selectedWeek >= TOTAL_WEEKS}
            aria-label="Next week"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
