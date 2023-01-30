import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text2: z.string() }))
    .query(({ input }) => {


      if (input.text2 === "adrian") {
        return { name: "Adrian", age: 25 }
      }

      return {
        greeting: `Hello jiji qweqweq ${input.text2}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
