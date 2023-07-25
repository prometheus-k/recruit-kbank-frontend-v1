import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainView from './components/MainView'
import './App.css'

const App = () => {
  return (
    <div id="wrap">
      <a href="#content" className="skipnav">본문 바로가기</a>
      <Header />
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MainView />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;