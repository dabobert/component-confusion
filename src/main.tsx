import React from 'react';

import ReactDOM from 'react-dom/client';

import { Player } from './player';
import { Thing } from './components/thing';





const root = document.getElementById('player')!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Thing />
    <Player />
  </React.StrictMode>,
);
