class Config {
  public static getBaseUrl(): string {
    return import.meta.env.VITE_APP_BASE_URL;
  }
  public static getMode(): string {
    return import.meta.env.MODE;
  }

  public static isDev(): boolean {
    return import.meta.env.MODE === 'development';
  }

  public static isProd(): boolean {
    return import.meta.env.MODE === 'production';
  }
}

export default Config;
