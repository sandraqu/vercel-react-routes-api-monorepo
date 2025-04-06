// server/server.mjs
import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World from mjs Server" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
