"use client";

export default function NewCalculationSheetPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">New Calculation Sheet</h1>
      <h2 className="text-muted-foreground mb-6">Start a new calculation by entering formulas and values.</h2>
      <form className="max-w-xl mx-auto bg-card rounded-lg shadow-md p-8 space-y-6">
        <div>
          <label htmlFor="sheet-name" className="block font-medium mb-2">
            Sheet Name
          </label>
          <input
            type="text"
            id="sheet-name"
            name="sheetName"
            className="w-full border rounded-md p-2"
            placeholder="Project Budget Calculator"
            required
          />
        </div>
        <div>
          <label htmlFor="formulas" className="block font-medium mb-2">
            Formulas
          </label>
          <textarea
            id="formulas"
            name="formulas"
            className="w-full border rounded-md p-2"
            rows={4}
            placeholder="a + b = c"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/90 transition"
        >
          Save Calculation Sheet
        </button>
      </form>
    </div>
  );
}