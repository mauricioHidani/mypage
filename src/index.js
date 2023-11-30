import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyThemeProvider from './contexts/ThemesContext.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </React.StrictMode>
);
