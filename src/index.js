import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './App';
import reportWebVitals from './reportWebVitals';
import queryClient from './config/cache';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
