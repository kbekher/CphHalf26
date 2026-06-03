"use client";

import type { ComponentType } from "react";
import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useProgramWeek } from "@/components/program-week-provider";
import { groceryByPhase } from "@/lib/data/grocery";
import { phaseForWeek } from "@/lib/data/meals";
import { cn } from "@/lib/utils";
import { Apple, Droplets, Fish, Leaf, Package, Wheat } from "lucide-react";

const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  fish: Fish,
  apple: Apple,
  bread: Wheat,
  leaf: Leaf,
  droplet: Droplets,
  salt: Package,
};

const STORAGE_KEY = "cph-half-grocery";

function itemKey(phase: number, category: string, index: number) {
  return `${phase}_${category}_${index}`;
}

export function GroceryList() {
  const { selectedWeek } = useProgramWeek();
  const weekIndex = selectedWeek - 1;
  const phase = phaseForWeek[weekIndex] ?? 0;
  const grocery = groceryByPhase[phase];
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback((key: string) => {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  if (!grocery) return null;

  return (
    <div className="space-y-4">
      <p className="rounded-lg bg-brand-surface/80 px-3 py-2.5 text-xs leading-relaxed text-brand-muted">
        <strong className="font-medium text-brand-light">{grocery.label}</strong> — grocery
        list covers the full week. Check your pantry before shopping.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {grocery.cats.map((cat) => {
          const Icon = ICON_MAP[cat.icon] ?? Leaf;
          return (
            <Card key={cat.title}>
              <CardContent className="p-3">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-brand-muted">
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {cat.title}
                </div>
                <ul className="space-y-1">
                  {cat.items.map((item, j) => {
                    const key = itemKey(phase, cat.title, j);
                    const isChecked = !!checked[key];
                    return (
                      <li key={key}>
                        <label
                          className={cn(
                            "flex cursor-pointer items-start gap-2 text-xs text-brand-light",
                            isChecked && "text-brand-muted line-through",
                          )}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggle(key)}
                            className="mt-0.5 accent-brand-orange"
                          />
                          {item}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
