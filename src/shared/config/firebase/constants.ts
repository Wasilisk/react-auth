import { getEnvVar } from "shared/libs/env-utils/get-env-variables";

export const FIREBASE_KEY = getEnvVar("FIREBASE_KEY");
export const FIREBASE_DOMAIN = getEnvVar("FIREBASE_DOMAIN");
export const FIREBASE_PROJECT_ID = getEnvVar("FIREBASE_PROJECT_ID");
export const FIREBASE_STORAGE_BUCKET = getEnvVar("FIREBASE_STORAGE_BUCKET");
export const FIREBASE_SENDER_ID = getEnvVar("FIREBASE_SENDER_ID");
export const FIREBASE_APP_ID = getEnvVar("FIREBASE_APP_ID");
export const FIREBASE_MEASUREMENT_ID = getEnvVar("FIREBASE_MEASUREMENT_ID");

