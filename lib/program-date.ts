import { differenceInCalendarWeeks, format, isBefore, startOfDay } from "date-fns";

export const PROGRAM_START = new Date(2026, 5, 8);
export const TOTAL_WEEKS = 15;
export const PROGRAM_START_LABEL = format(PROGRAM_START, "d MMM yyyy");

export type WeekStatus = "past" | "current" | "future" | "pre-start";
export type DayStatus = "past" | "today" | "upcoming" | "muted";

export function getMondayBasedDayIndex(date: Date): number {
  return (date.getDay() + 6) % 7;
}

export function getProgramWeek(date: Date = new Date()): number | null {
  const today = startOfDay(date);
  const start = startOfDay(PROGRAM_START);
  if (isBefore(today, start)) return null;
  const weeksSince = differenceInCalendarWeeks(today, start, {
    weekStartsOn: 1,
  });
  return Math.min(TOTAL_WEEKS, Math.max(1, weeksSince + 1));
}

export function getProgramDayIndex(date: Date = new Date()): number {
  return getMondayBasedDayIndex(date);
}

export function getWeekStatus(
  weekNumber: number,
  currentWeek: number | null,
): WeekStatus {
  if (currentWeek === null) return "pre-start";
  if (weekNumber < currentWeek) return "past";
  if (weekNumber > currentWeek) return "future";
  return "current";
}

export function getDayStatus(
  dayIndex: number,
  selectedWeek: number,
  currentWeek: number | null,
  currentDayIndex: number,
): DayStatus {
  if (currentWeek === null) return "upcoming";
  if (selectedWeek < currentWeek) return "muted";
  if (selectedWeek > currentWeek) return "upcoming";
  if (dayIndex < currentDayIndex) return "past";
  if (dayIndex === currentDayIndex) return "today";
  return "upcoming";
}
