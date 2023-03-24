import { EncryptStorage } from 'encrypt-storage';

const els = new EncryptStorage(import.meta.env.VITE_APP_SECRET_KEY, {
  storageType: 'localStorage',
});

const LocalStorageUtils = {
  /**
   *
   * @param name {string}
   * @returns {null|any}
   */
  getItem(name: string) {
    let value;
    try {
      value = els.getItem(name);
    } catch (e) {
      value = null;
    }
    return value;
  },
  /**
   *
   * @param name {string}
   * @param value {null|any}
   */
  setItem(name: string, value: any) {
    els.setItem(name, value);
  },
  /**
   *
   * @param name {string}
   */
  removeItem(name: string) {
    els.removeItem(name);
  },
  /**
   *
   */
  clear() {
    els.clear();
  },
};

export default LocalStorageUtils;
