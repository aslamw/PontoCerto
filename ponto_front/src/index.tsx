import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Apps} from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>
);
