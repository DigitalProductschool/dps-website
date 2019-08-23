declare var process: {
  env: {
    FIREBASE_CONFIG: {
      projectId: string;
    };
  };
};

export const STORAGE_BUCKET_URL = `${process.env.FIREBASE_CONFIG.projectId}.appspot.com`;
