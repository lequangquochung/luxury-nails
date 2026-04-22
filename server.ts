import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function createServer() {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(express.static("dist/spa"));

  // Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Fallback to index.html for SPA routing
  app.get("*", (req, res) => {
    res.sendFile("dist/spa/index.html", { root: __dirname });
  });

  return app;
}

// Only start if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  const app = createServer();
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
