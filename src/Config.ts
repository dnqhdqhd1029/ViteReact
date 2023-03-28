class Config {
  public getBaseUrl(): string {
    return import.meta.env.VITE_APP_BASE_URL;
  }
  public getMode(): string {
    return import.meta.env.MODE;
  }

  public isMock(): boolean {
    return import.meta.env.MODE === 'mock';
  }

  public isDev(): boolean {
    return import.meta.env.MODE === 'development';
  }

  public isProd(): boolean {
    return import.meta.env.MODE === 'production';
  }

  public getXApiKey(): string {
    return import.meta.env.VITE_APP_X_API_KEY;
  }
}

export default new Config();
