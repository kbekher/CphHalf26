import { ACTIVITY_CHIP_STYLES } from "@/lib/data/activity-styles";
import { cn } from "@/lib/utils";

interface ActivityChipProps {
  type: string;
  label: string;
  detail?: string;
}

export function ActivityChip({ type, label, detail }: ActivityChipProps) {
  return (
    <div className="space-y-0.5">
      <span
        className={cn(
          "inline-block rounded-full px-2 py-0.5 text-center text-[10px] font-medium leading-tight",
          ACTIVITY_CHIP_STYLES[type] ?? ACTIVITY_CHIP_STYLES.supplement,
        )}
      >
        {label}
      </span>
      {detail && (
        <p className="text-[10px] leading-snug text-brand-muted">{detail}</p>
      )}
    </div>
  );
}
