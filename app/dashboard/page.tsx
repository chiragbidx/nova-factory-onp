import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "@/app/dashboard/client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";

// Purpose: Server route entry for /dashboard.
// Keep auth checks and database reads in this file,
// then pass prepared props into `client.tsx`.

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const [user] = await db
    .select({ firstName: users.firstName })
    .from(users)
    .where(eq(users.id, session.userId))
    .limit(1);

  const firstName = user?.firstName || "there";

  return (
    <Client
      greeting="Welcome to Calcify!"
      firstName={firstName}
    />
  );
}