import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './pages/Main'
import Sub1 from './pages/Sub1'
import Sub2 from './pages/Sub2'
import Sub3 from './pages/Sub3'
import Sub4 from './pages/Sub4'
import Sub5 from './pages/Sub5'
import Sub1view from './pages/Sub1view'
import Sub2view from './pages/Sub2view'
import ErrorPage from './pages/ErrorPage'; // 추가

import { useStyleContext } from './components/StyleContext';

import RouteChangeTracker from "./utils/RouteChangeTracker";

const App = () => {
  const { isCropMode } = useStyleContext();
  RouteChangeTracker();
  return (
    <div id="wrap" className={isCropMode ? 'crop' : ''}>
      <Link to="/#content" className="skipnav">본문 바로가기</Link>
      <Header />
      <div id="container">
        <Routes>        
          <Route path="/" exact element={<Main />}></Route>
          <Route path="/sub1" exact element={<Sub1 />}></Route>
          <Route path="/sub2" exact element={<Sub2 />}></Route>
          <Route path="/sub3" exact element={<Sub3 />}></Route>
          <Route path="/sub4" exact element={<Sub4 />}></Route>
          <Route path="/sub5" exact element={<Sub5 />}></Route>
          <Route path="/Sub1view" exact element={<Sub1view />}></Route>
          <Route path="/Sub2view" exact element={<Sub2view />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;