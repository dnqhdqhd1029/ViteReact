import React, { createContext, useContext } from 'react';
import globalStore from '@/stores/GlobalStore';

const StoreContext = createContext({
  globalStore,
});

export const useStore = () => useContext(StoreContext);

type Props = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  return <StoreContext.Provider value={{ globalStore }}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
