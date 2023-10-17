import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useStyleContext } from './components/StyleContext';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './pages/Main'
import Recruit from './pages/Recruit'
import Story from './pages/Story'
import Benefit from './pages/Benefit'
import Faq from './pages/Faq'
import MyApply from './pages/MyApply'
import RecruitView from './pages/RecruitView'
import StoryView from './pages/StoryView'
import ErrorPage from './pages/ErrorPage'; // 추가
import ImageTest from './pages/ImageTest'; // 추가
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
          <Route path="/Recruit" exact element={<Recruit />}></Route>
          <Route path="/Recruit/RecruitView/:jobid" exact element={<RecruitView />}></Route>
          <Route path="/Story" element={<Story />}></Route>
          <Route path="/Story/StoryView/:idx" element={<StoryView />}></Route>
          <Route path="/Benefit" exact element={<Benefit />}></Route>
          <Route path="/Faq" exact element={<Faq />}></Route>
          <Route path="/MyApply" exact element={<MyApply />}></Route>
          <Route path="/ImageTest" exact element={<ImageTest />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;