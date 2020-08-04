import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './assets/config/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
