"use client";

import { DashboardContent } from "@/components/dashboard/dashboard-content";

// Purpose: Client UI for /dashboard.
// Use this file for interactive/dashboard presentation logic.

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <DashboardContent
      greeting={greeting}
      firstName={firstName}
      welcomeText="Easily create, organize, and share all your calculation sheets from your secure dashboard."
      emptyStateText="You don’t have any calculation sheets yet. Start by creating your first sheet."
      emptyStateCta="Create Calculation Sheet"
      generalCta="New Calculation Sheet"
    />
  );
}