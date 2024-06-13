import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  '/profile',
])

export default clerkMiddleware((auth, req) => {
  if (!auth().userId && protectedRoutes(req)) {

    console.log(`user ${auth().userId}`)

    return auth().redirectToSignIn();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};