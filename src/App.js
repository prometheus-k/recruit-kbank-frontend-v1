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
import { useStyleContext } from './components2/StyleContext';

const App = () => {
  const { isCropMode } = useStyleContext();
  return (
    <div id="wrap" className={isCropMode ? 'crop' : ''}>
      <BrowserRouter>
        <Link to="/#content" className="skipnav">본문 바로가기</Link>
        <Header />
        <div id="container" className="content">
          <Routes>
            <Route path="/" exact element={<Main />}></Route>
            <Route path="/sub1" exact element={<Sub1 />}></Route>
            <Route path="/sub2" exact element={<Sub2 />}></Route>
            <Route path="/sub3" exact element={<Sub3 />}></Route>
            <Route path="/sub4" exact element={<Sub4 />}></Route>
            <Route path="/sub5" exact element={<Sub5 />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;