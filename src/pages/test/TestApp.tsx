import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import globalStore from '@/stores/GlobalStore';
import testStore from '@/pages/test/TestStore';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/wrappers/Header';

const TestApp = () => {
  const navigate = useNavigate();
  const {globalStore} = useStore();

  useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('unmounted');
    };
  }, []);
  return (
    <div className="header1">
      <Header />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
      <button
        onClick={() => {
          testStore.getTest();
        }}
      >
        getTest
      </button>
      <button
        onClick={() => {
          testStore.postTest({
            name: 'test',
            age: 10,
          });
        }}
      >
        postTest
      </button>
      <button
        onClick={() => {
          testStore.putTest({
            name: 'test2',
            age: 20,
            id: 1,
          });
        }}
      >
        putTest
      </button>
      <button
        onClick={() => {
          testStore.deleteTest({
            id: testStore.json[0].id,
          });
        }}
      >
        deleteTest
      </button>
      <button onClick={() => globalStore.setIsLoading(true)}>{`${globalStore.isLoading}`}</button>
      <button onClick={() => globalStore.setIsLoading(false)}>{`${globalStore.isLoading}`}</button>
      <div>
        JSON: <pre>{JSON.stringify(testStore.json, null, 2)}</pre>
      </div>
    </div>
  );
};

export default observer(TestApp);
