import "~/styles/globals.css";

import { ClerkProvider, SignOutButton } from "@clerk/nextjs";
import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { ActivityPing } from "~/app/_components/activity-ping";
import { Nav } from "~/app/_components/nav";
import { getCurrentUserEmail, isAllowedUser } from "~/server/auth";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "progress",
  description: "Track progress across every area of life.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Middleware guarantees someone is signed in; here we ensure it's the owner.
  const allowed = await isAllowedUser();

  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable}`}>
        <body className="bg-neutral-50 text-neutral-900 antialiased">
          {allowed ? (
            <TRPCReactProvider>
              <ActivityPing />
              <div className="flex min-h-screen flex-col md:flex-row">
                <Nav />
                <main className="min-w-0 flex-1">{children}</main>
              </div>
            </TRPCReactProvider>
          ) : (
            <AccessDenied />
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}

async function AccessDenied() {
  const email = await getCurrentUserEmail();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-xl font-semibold text-neutral-900">Access denied</h1>
      <p className="max-w-sm text-sm text-neutral-500">
        {email
          ? `${email} isn't authorized to use this app.`
          : "You aren't authorized to use this app."}{" "}
        Sign in with the owner account to continue.
      </p>
      <SignOutButton>
        <button className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700">
          Sign out
        </button>
      </SignOutButton>
    </div>
  );
}
