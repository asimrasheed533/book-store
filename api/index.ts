import { Hono } from "hono";
import prisma from "./lib/prisma";
import { serve } from "@hono/node-server";

async function main() {
  const app = new Hono();

  const port = Number(process.env.PORT) || 9000;

  app.get("/", (c) => {
    return c.text("Hello Hono!");
  });

  console.log(`Server is running on port ${port}`);

  serve({ fetch: app.fetch, port });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
