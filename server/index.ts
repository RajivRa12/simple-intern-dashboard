import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { getInternDashboard, getInternProfile } from "./routes/intern";
import { getLeaderboard } from "./routes/leaderboard";
import { login, signup } from "./routes/auth";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Legacy API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app.get("/api/demo", handleDemo);

  // Intern Portal API routes
  app.get("/api/dashboard", getInternDashboard);
  app.get("/api/intern/:id", getInternProfile);
  app.get("/api/leaderboard", getLeaderboard);
  app.post("/api/auth/login", login);
  app.post("/api/auth/signup", signup);

  return app;
}
