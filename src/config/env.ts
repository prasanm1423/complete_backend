import dotenv from "dotenv";

dotenv.config();

//helper function
function checkEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`missing env variables for ${key}`);
  }
  return value;
}
export const env = {
  port: Number(process.env.PORT ?? 4000),
  isProd: (process.env.NODE_ENV ?? "development") === "production",
  nodeEnv: process.env.NODE_ENV ?? "development",
  loglevel: process.env.LOG_LEVEL ?? "info",
  databaseUrl: checkEnvVar("DATABASE_URL"),
} as const;
