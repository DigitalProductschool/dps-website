declare var process: {
  env: {
    FIREBASE_CONFIG: string;
  };
};

const FIREBASE_CONFIG = JSON.parse(process.env.FIREBASE_CONFIG);
export const STORAGE_BUCKET_URL = `${FIREBASE_CONFIG.projectId}.appspot.com`;
export const STAGING_PROJECT_NAME = 'dps-website-staging-0';
export const PRODUCTION_PROJECT_NAME = 'dps-website-244212';
export const isProduction =
  FIREBASE_CONFIG.projectId === PRODUCTION_PROJECT_NAME;
