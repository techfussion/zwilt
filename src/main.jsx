import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import ThemeContextProvider from '@/contexts/ThemeContext';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeContextProvider> */}
        <App />
      {/* </ThemeContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
