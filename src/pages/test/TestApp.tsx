import '@/styles.scss';
import React from 'react';
import { observer } from 'mobx-react';
import testStore from '@/pages/test/TestStore';

import CommonUtils from '@/utils/CommonUtils';

const TestApp = () => {
  const { count, increment, decrement, fetcha, fetchb } = testStore;

  return (
    <div className="header1">
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={fetcha}>fetcha</button>
      <button onClick={fetchb}>fetchb</button>
    </div>
  );
};

export default observer(TestApp);
