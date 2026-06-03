import { LEGEND_ITEMS } from "@/lib/data/activity-styles";
import { ActivityChip } from "@/components/training/activity-chip";

export function ActivityLegend() {
  return (
    <div className="flex flex-wrap gap-1.5 pt-2">
      {LEGEND_ITEMS.map(([type, label]) => (
        <ActivityChip key={type} type={type} label={label} />
      ))}
    </div>
  );
}
