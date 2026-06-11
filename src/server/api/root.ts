import { activityRouter } from "~/server/api/routers/activity";
import { analyticsRouter } from "~/server/api/routers/analytics";
import { dailyTodoRouter } from "~/server/api/routers/dailyTodo";
import { dashboardRouter } from "~/server/api/routers/dashboard";
import { goalRouter } from "~/server/api/routers/goal";
import { goodieCategoryRouter } from "~/server/api/routers/goodieCategory";
import { goodieLogRouter } from "~/server/api/routers/goodieLog";
import { noteRouter } from "~/server/api/routers/note";
import { opportunityRouter } from "~/server/api/routers/opportunity";
import { plannerRouter } from "~/server/api/routers/planner";
import { projectRouter } from "~/server/api/routers/project";
import { stageRouter } from "~/server/api/routers/stage";
import { stageTypeRouter } from "~/server/api/routers/stageType";
import { taskRouter } from "~/server/api/routers/task";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  activity: activityRouter,
  analytics: analyticsRouter,
  dailyTodo: dailyTodoRouter,
  dashboard: dashboardRouter,
  goal: goalRouter,
  goodieCategory: goodieCategoryRouter,
  goodieLog: goodieLogRouter,
  note: noteRouter,
  opportunity: opportunityRouter,
  planner: plannerRouter,
  project: projectRouter,
  stage: stageRouter,
  stageType: stageTypeRouter,
  task: taskRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.activity.ping();
 */
export const createCaller = createCallerFactory(appRouter);
