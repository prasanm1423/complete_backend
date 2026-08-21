import { Request, Response, NextFunction } from "express";
import { logger } from "../lib/logger";
import { AppError } from "../Errors/AppError";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: true,
      message: err.message,
    });
    return;
  }
  logger.error({ err }, "Unhandled Error");
  res.status(500).json({
    success: false,
    message: "Internal Server error",
  });
}
