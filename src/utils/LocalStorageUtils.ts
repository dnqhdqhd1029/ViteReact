import { EncryptStorage } from 'encrypt-storage';

const els = new EncryptStorage(import.meta.env.VITE_APP_SECRET_KEY, {
  storageType: 'localStorage',
});

class LocalStorageUtils {
  /**
   *
   * @param name {string}
   * @returns {null|any}
   */
  public getItem(name: string) {
    let value;
    try {
      value = els.getItem(name);
    } catch (e) {
      value = null;
    }
    return value;
  }
  /**
   *
   * @param name {string}
   * @param value {null|any}
   */
  public setItem(name: string, value: string) {
    els.setItem(name, value);
  }
  /**
   *
   * @param name {string}
   */
  public removeItem(name: string) {
    els.removeItem(name);
  }
  /**
   *
   */
  public clear() {
    els.clear();
  }
}

export default new LocalStorageUtils();
