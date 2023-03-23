import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import TestApp from '@/pages/test/TestApp';
import { useTranslation } from 'react-i18next';
import Config from '@/Config';
import Language from '@/utils/Language';
function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Language />
      <h1>{t('타이틀')}</h1>
      <p>{t('보조타이틀')}</p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <p>{Config.getBaseUrl()}</p>
      <p>{Config.getMode()}</p>
      <p>
        {Config.isDev() && 'dev'}
        {Config.isProd() && 'prod'}
      </p>
      <TestApp />
    </div>
  );
}

export default App;
