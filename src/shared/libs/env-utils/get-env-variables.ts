export const getEnvVar = (key: string) => {
    if (process.env[`REACT_APP_${key}`] === undefined) {
      throw new Error(`Env variable ${key} is required`);
    }
    return process.env[`REACT_APP_${key}`] || "";
  };