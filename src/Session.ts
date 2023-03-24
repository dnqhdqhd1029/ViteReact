import LocalStorageUtils from '@/utils/LocalStorageUtils';
class Session {
  public static setAccessToken(accessToken: string) {
    if (accessToken) {
      LocalStorageUtils.setItem('accessToken', accessToken);
    }
  }

  public static getAccessToken(): string {
    return LocalStorageUtils.getItem('accessToken');
  }

  public static setRefreshToken(refreshToken: string) {
    if (refreshToken) {
      LocalStorageUtils.setItem('refreshToken', refreshToken);
    }
  }

  public static getRefreshToken(): string {
    return LocalStorageUtils.getItem('refreshToken');
  }

  public static clear() {
    LocalStorageUtils.removeItem('accessToken');
    LocalStorageUtils.removeItem('refreshToken');
  }
}

export default Session;
