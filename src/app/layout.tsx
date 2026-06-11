import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { ActivityPing } from "~/app/_components/activity-ping";
import { Nav } from "~/app/_components/nav";
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        <TRPCReactProvider>
          <ActivityPing />
          <div className="flex min-h-screen">
            <Nav />
            <main className="min-w-0 flex-1">{children}</main>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
