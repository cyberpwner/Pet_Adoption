import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Pet from './components/Pet';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Pet />
  </React.StrictMode>
);
