import express from "express";
import { config } from "dotenv";
config();
const app = express();
const port = 5000;
// middledwares
app.use(express.json());
export default app;
//# sourceMappingURL=main.js.map