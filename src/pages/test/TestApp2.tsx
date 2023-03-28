import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import testStore from '@/pages/test/TestStore';
import testStore2, { useTestStore2 } from '@/pages/test/TestStore2';
import { useStore } from '@/provider/StoreProvider';

const TestApp2 = () => {
  const { testStore2 } = useTestStore2();
  const { globalStore } = useStore();

  return (
    <div className="header1">
      {import.meta.env.MODE}
      <h1>Count2: {testStore2.count}</h1>
      <button onClick={testStore2.increment}>+</button>
      <button onClick={testStore2.decrement}>-</button>
      <button onClick={testStore2.changeJson}>-</button>
      <button onClick={testStore2.fetcha}>fetcha</button>
      <button onClick={testStore2.fetchb}>fetchb</button>
      <button onClick={testStore2.fetchd}>fetchd</button>
      <button onClick={() => globalStore.setIsLoading(true)}>{`${globalStore.isLoading}`}</button>
      <button onClick={() => globalStore.setIsLoading(false)}>{`${globalStore.isLoading}`}</button>
      <div>
        JSON: <pre>{JSON.stringify(testStore2.json, null, 2)}</pre>
      </div>
    </div>
  );
};

export default observer(TestApp2);
