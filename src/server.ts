import fastify from "fastify";
import { knex } from "./database.js";

const app = fastify();

app.get("/hello", async () => {
  const tables = await knex("sqlite_master").select("*");
  return tables;
});

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});
