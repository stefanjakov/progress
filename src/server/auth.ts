import "server-only";

import { currentUser } from "@clerk/nextjs/server";

/**
 * This is a single-user app. Only this Google account may access anything —
 * the UI (root layout) and the entire tRPC API both gate on it.
 */
export const ALLOWED_EMAIL = "jakovljevicstefan2004@gmail.com";

/** Primary email of the signed-in user, or null if signed out. */
export async function getCurrentUserEmail(): Promise<string | null> {
  const user = await currentUser();
  if (!user) return null;
  return (
    user.emailAddresses.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? null
  );
}

/** Whether the signed-in user is the one allowed account. */
export async function isAllowedUser(): Promise<boolean> {
  return (await getCurrentUserEmail()) === ALLOWED_EMAIL;
}
