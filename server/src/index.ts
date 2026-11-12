import cors from "cors";
import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  console.log("Health check");
  res.json({ status: "ok", message: "Chess API is running" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
