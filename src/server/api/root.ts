import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { tigreRouter } from "./routers/tigre";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  tigre: tigreRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
