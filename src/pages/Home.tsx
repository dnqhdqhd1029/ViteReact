import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import globalStore from '@/stores/GlobalStore';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => globalStore.setIsLoading(true)}>{`${globalStore.isLoading}`}</button>
      <button onClick={() => globalStore.setIsLoading(false)}>{`${globalStore.isLoading}`}</button>
      <p>
        <Link to={`/test`}>TestApp</Link>
      </p>
      <p>
        <Link to={`/test2`}>TestApp2</Link>
      </p>
      <p>
        <Link to={`/test/aa`}>TestApp2</Link>
      </p>
      <p>
        <Link to={`/guide`}>guide</Link>
      </p>
    </div>
  );
};

export default observer(Home);
