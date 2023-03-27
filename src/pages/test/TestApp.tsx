import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import testStore from '@/pages/test/TestStore';
import { useStore } from '@/provider/StoreProvider';

const TestApp2 = () => {
  const { count, increment, decrement, fetcha, fetchb } = testStore;
  const { globalStore } = useStore();

  return (
    <div className="header1">
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={fetcha}>fetcha</button>
      <button onClick={fetchb}>fetchb</button>
      <button onClick={() => globalStore.setIsLoading(true)}>{`${globalStore.isLoading}`}</button>
      <button onClick={() => globalStore.setIsLoading(false)}>{`${globalStore.isLoading}`}</button>
    </div>
  );
};

export default observer(TestApp2);
