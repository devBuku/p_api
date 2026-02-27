import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.status(200).json({ message: `Hello friend`, success: true });
});

export { app };
