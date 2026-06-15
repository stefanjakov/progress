import { clerkMiddleware } from "@clerk/nextjs/server";

// Single-user app: require a signed-in user on every matched route. The
// owner-only email check is enforced in the root layout (UI) and tRPC (API).
export default clerkMiddleware(async (auth) => {
  await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for Clerk's auto-proxy path
    "/__clerk/:path*",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
