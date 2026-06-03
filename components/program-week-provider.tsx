"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getProgramDayIndex,
  getProgramWeek,
  TOTAL_WEEKS,
  type DayStatus,
  type WeekStatus,
  getWeekStatus,
  getDayStatus,
} from "@/lib/program-date";

interface ProgramWeekContextValue {
  selectedWeek: number;
  setSelectedWeek: (week: number) => void;
  currentWeek: number | null;
  currentDayIndex: number;
  isPreStart: boolean;
  changeWeek: (delta: number) => void;
  getWeekStatusFor: (week: number) => WeekStatus;
  getDayStatusFor: (dayIndex: number) => DayStatus;
}

const ProgramWeekContext = createContext<ProgramWeekContextValue | null>(null);

export function ProgramWeekProvider({ children }: { children: React.ReactNode }) {
  const [selectedWeek, setSelectedWeekState] = useState(1);
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
    const current = getProgramWeek();
    setSelectedWeekState(current ?? 1);
  }, []);

  const currentWeek = today ? getProgramWeek(today) : null;
  const currentDayIndex = today ? getProgramDayIndex(today) : 0;
  const isPreStart = currentWeek === null;

  const setSelectedWeek = useCallback((week: number) => {
    setSelectedWeekState(Math.min(TOTAL_WEEKS, Math.max(1, week)));
  }, []);

  const changeWeek = useCallback((delta: number) => {
    setSelectedWeekState((w) => Math.min(TOTAL_WEEKS, Math.max(1, w + delta)));
  }, []);

  const getWeekStatusFor = useCallback(
    (week: number) => getWeekStatus(week, currentWeek),
    [currentWeek],
  );

  const getDayStatusFor = useCallback(
    (dayIndex: number) =>
      getDayStatus(dayIndex, selectedWeek, currentWeek, currentDayIndex),
    [selectedWeek, currentWeek, currentDayIndex],
  );

  const value = useMemo(
    () => ({
      selectedWeek,
      setSelectedWeek,
      currentWeek,
      currentDayIndex,
      isPreStart,
      changeWeek,
      getWeekStatusFor,
      getDayStatusFor,
    }),
    [
      selectedWeek,
      setSelectedWeek,
      currentWeek,
      currentDayIndex,
      isPreStart,
      changeWeek,
      getWeekStatusFor,
      getDayStatusFor,
    ],
  );

  return (
    <ProgramWeekContext.Provider value={value}>{children}</ProgramWeekContext.Provider>
  );
}

export function useProgramWeek() {
  const ctx = useContext(ProgramWeekContext);
  if (!ctx) throw new Error("useProgramWeek must be used within ProgramWeekProvider");
  return ctx;
}
