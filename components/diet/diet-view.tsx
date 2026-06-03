"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WeekPicker } from "@/components/week-picker";
import { MealPlan } from "@/components/diet/meal-plan";
import { GroceryList } from "@/components/diet/grocery-list";

export function DietView() {
  return (
    <div className="space-y-4">
      <WeekPicker />
      <Tabs defaultValue="meals" className="w-full">
        <TabsList className="w-full max-w-none">
          <TabsTrigger value="meals" className="flex-1">
            Meal plan
          </TabsTrigger>
          <TabsTrigger value="grocery" className="flex-1">
            Grocery list
          </TabsTrigger>
        </TabsList>
        <TabsContent value="meals">
          <MealPlan />
        </TabsContent>
        <TabsContent value="grocery">
          <GroceryList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
