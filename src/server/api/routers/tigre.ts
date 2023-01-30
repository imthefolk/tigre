import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const tigreRouter = createTRPCRouter({
  matarTigre: publicProcedure.input(z.object({ tigfreasdasd: z.string() })).mutation(({ input }) => {

    console.log(input.tigfreasdasd)
  }),
  hello: publicProcedure
    .input(z.object({ text2: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello jiji ${input.text2}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    // return ctx.prisma.tifindMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
