import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  // Redirect non-www to www (301 redirect for SEO)
  app.use((req, res, next) => {
    const host = req.get("host");
    if (host && !host.startsWith("localhost") && !host.startsWith("127.0.0.1")) {
      if (host.startsWith("slayenail.com")) {
        return res.redirect(301, `https://www.${host}${req.url}`);
      }
    }
    next();
  });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}
