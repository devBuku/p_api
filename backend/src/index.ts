import express from "express";
import { ENV } from "./config/env";

const app = express();

app.get("/", function (req, res) {
  res.json({
    message:
      "Welcome to PERN STORE API - Powered by PostgreSQL, Drizzle ORM and Clerk Auth",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

app.listen(ENV.PORT, function () {
  console.log("Server is up and running on PORT: ", ENV.PORT);
});
