class Config {
  public static getBaseUrl(): string {
    return import.meta.env.VITE_APP_BASE_URL;
  }
  public static getMode(): string {
    return import.meta.env.MODE;
  }

  public static isMock(): boolean {
    return import.meta.env.MODE === 'mock';
  }

  public static isDev(): boolean {
    return import.meta.env.MODE === 'development';
  }

  public static isProd(): boolean {
    return import.meta.env.MODE === 'production';
  }

  public static getXApiKey(): string {
    return import.meta.env.VITE_APP_X_API_KEY;
  }
}

export default Config;
