import {Global} from '@emotion/react';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {MainPage} from './containers/MainPage';
import {SelectToolsPage} from './containers/SelectToolsPage';
import {layout, rebase} from './global.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<SelectToolsPage />} path='/' />
        <Route element={<MainPage />} path='/main' />
      </Routes>

      <Global styles={[rebase, layout]} />
    </>
  );
}

export default App;
