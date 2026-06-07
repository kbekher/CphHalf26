import { COLORS } from "@/lib/data/activity-styles";
import { cn } from "@/lib/utils";

interface ActivityChipProps {
  type: string;
  label: string;
  detail?: string;
}

export function ActivityChip({ type, label, detail }: ActivityChipProps) {
  const colors = COLORS[type as keyof typeof COLORS];
  const bgColor = colors?.bg || "#f5f5f5";
  const textColor = colors?.text || "#333";

  return (
    <div className="space-y-1">
      <span
        className="inline-block rounded-full px-2 py-0.5 text-center text-xs font-medium leading-tight border"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          borderColor: textColor,
          borderWidth: "0.5px",
        }}
      >
        {label}
      </span>
      {detail && (
        <p className="text-xs leading-snug text-brand-muted">{detail}</p>
      )}
    </div>
  );
}
