import dotenv from "dotenv";
import winston from "winston";

dotenv.config({ path: "../../.env" });

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL ?? "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});
