"use client";

export default function CalculationOverviewPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Calculation Overview</h1>
      <h2 className="text-muted-foreground mb-6">
        View key details and recent activity for your calculation sheets.
      </h2>
      <div className="bg-muted p-8 rounded-lg text-center">
        <p>Select a sheet to see more details.</p>
      </div>
    </div>
  );
}