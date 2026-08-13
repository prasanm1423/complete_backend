import { Request, Response, NextFunction } from "express";
import { logger } from "../lib/logger";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
): void {
  logger.error({ err }, "Unhandled Error");
  res.status(500).json({
    success: false,
    message: "Internal Server error",
  });
}
