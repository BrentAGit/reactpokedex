import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {SearchInputContextProvider} from "./Context/SearchInputContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchInputContextProvider>
      <App />
    </SearchInputContextProvider>
  </React.StrictMode>
);