"use client";

export default function CalculationSheetsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Calculation Sheets</h1>
      <div className="bg-muted p-8 rounded-lg text-center">
        <p className="mb-3">No calculation sheets found. Click below to create your first sheet.</p>
        <a
          href="/dashboard/calculation-sheets/new"
          className="inline-block px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90"
        >
          Create Calculation Sheet
        </a>
      </div>
    </div>
  );
}