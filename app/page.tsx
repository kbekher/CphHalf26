"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProgramWeekProvider } from "@/components/program-week-provider";
import { TrainingView } from "@/components/training/training-view";
import { DietView } from "@/components/diet/diet-view";

export default function Home() {
  return (
    <ProgramWeekProvider>
      <main className="mx-auto min-h-dvh max-w-6xl px-4 py-6 pb-10">
        <header className="mb-6 space-y-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-brand-light">
              Cph Half <span className="text-brand-orange">26</span>
            </h1>
            <p className="mt-1 text-sm text-brand-muted">
              15-week training & nutrition
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="rounded-lg border border-brand-border bg-brand-surface/50 px-3 py-2">
              <p className="text-[10px] font-medium uppercase tracking-wide text-brand-muted">
                Race day
              </p>
              <p className="text-sm font-medium text-brand-light">20.09.2026</p>
            </div>
            <div className="rounded-lg border border-brand-border bg-brand-surface/50 px-3 py-2">
              <p className="text-[10px] font-medium uppercase tracking-wide text-brand-muted">
                Target pace
              </p>
              <p className="text-sm font-medium text-brand-orange">4:44 / km</p>
            </div>
            <div className="rounded-lg border border-brand-border bg-brand-surface/50 px-3 py-2">
              <p className="text-[10px] font-medium uppercase tracking-wide text-brand-muted">
                Goal time
              </p>
              <p className="text-sm font-medium text-brand-light">1:40</p>
            </div>
          </div>
        </header>

        <Tabs defaultValue="training" className="w-full">
          <TabsList className="mb-2 w-full max-w-xs">
            <TabsTrigger value="training" className="flex-1">
              Training
            </TabsTrigger>
            <TabsTrigger value="diet" className="flex-1">
              Diet
            </TabsTrigger>
          </TabsList>
          <TabsContent value="training">
            <TrainingView />
          </TabsContent>
          <TabsContent value="diet">
            <DietView />
          </TabsContent>
        </Tabs>
      </main>
    </ProgramWeekProvider>
  );
}
