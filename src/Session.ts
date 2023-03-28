import LocalStorageUtils from '@/utils/LocalStorageUtils';
class Session {
  public setAccessToken(accessToken: string) {
    if (accessToken) {
      LocalStorageUtils.setItem('accessToken', accessToken);
    }
  }

  public getAccessToken(): string {
    return LocalStorageUtils.getItem('accessToken');
  }

  public setRefreshToken(refreshToken: string) {
    if (refreshToken) {
      LocalStorageUtils.setItem('refreshToken', refreshToken);
    }
  }

  public getRefreshToken(): string {
    return LocalStorageUtils.getItem('refreshToken');
  }

  public clear() {
    LocalStorageUtils.removeItem('accessToken');
    LocalStorageUtils.removeItem('refreshToken');
  }
}

export default new Session();
