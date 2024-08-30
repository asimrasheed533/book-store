import { Hono } from "hono";
import categories from "./routes/categories";
import orders from "./routes/orders";
import prisma from "./lib/prisma";
import products from "./routes/products";
import { serve } from "@hono/node-server";
import users from "./routes/users";

async function main() {
  const app = new Hono();

  const port = Number(process.env.PORT) || 9000;

  app.get("/", (c) => c.json({ message: "Welcome to the API" }));

  app.route("/api/users", users);
  app.route("/api/categories", categories);
  app.route("/api/products", products);
  app.route("/api/orders", orders);

  console.log(`Server is running on port ${port}`);

  serve({ fetch: app.fetch, port });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
