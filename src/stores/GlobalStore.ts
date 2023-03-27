import { makeObservable, observable, action } from 'mobx';

class GlobalStore {
  isLoading = false;
  preLocation = '';
  currentLocation = '';

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      preLocation: observable,
      currentLocation: observable,
      setIsLoading: action,
    });
  }

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  setPreLocation = (preLocation: string) => {
    this.preLocation = preLocation;
  };

  setCurrentLocation = (currentLocation: string) => {
    this.currentLocation = currentLocation;
  };
}

const globalStore = new GlobalStore();
export default globalStore;
