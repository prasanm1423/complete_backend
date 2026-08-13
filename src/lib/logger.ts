import pino from "pino";
import { env } from "../config/env";

export const logger = pino({
  level: env.loglevel,
  transport: env.isProd
    ? undefined
    : {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
        },
      },
});
