import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleProvider } from './components/StyleContext';
import { SearchProvider } from './components/SearchContext';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import './assets/css/Common.css'
import reportWebVitals from './reportWebVitals';
import ScrollTop from './components/ScrollToTop';
import ReactGA from "react-ga4";
import App from './App';

// 구글 애널리틱스 운영서버만 적용
if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
}

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyleProvider>
        <SearchProvider>
          <BrowserRouter>
            <ScrollTop />
            <App />
          </BrowserRouter>
        </SearchProvider>
      </StyleProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
