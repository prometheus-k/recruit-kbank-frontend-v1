import React, { useEffect, useState } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import { useStyleContext } from '../components/StyleContext';
// import './header.css'; // Footer 컴포넌트의 CSS 파일을 import
import Box from '../components/Box';

const Header = () => {
  const [isHeaderOn, setIsHeaderOn] = useState(false);
  const location = useLocation();

  useEffect(() => {

  
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    console.log('Component mounted');
    const handleScroll = () => {
      const bodyOffsetTop = document.body.getBoundingClientRect().top;
      if (window.scrollY > bodyOffsetTop) {
        setIsHeaderOn(true);
      } else {
        setIsHeaderOn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 클린업 함수 설정
    return () => {
      console.log('Component unmounted');
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCropMode, setIsCropMode } = useStyleContext();

  const handleMenuClick = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
    setIsCropMode(prevIsCropMode => !prevIsCropMode);

  };

  const handleMenuItemClick = () => {
    handleMenuClick(); // 메뉴 닫기
  };

  return (
    <header className={isHeaderOn ? 'on' : ''}>
      <Box boxClassName="headerWrap">
        <h1>
          <Link to="/" ><img src="images/logo.png" alt="케이뱅크" onClick={handleMenuClick} /></Link>
        </h1>
        <div className="gnbWrap">
          <Link to="#" className={`m_menu ${isMenuOpen ? 'on' : ''}`} onClick={handleMenuClick}>
            <span>열기</span>
          </Link>
          <nav className={`${isMenuOpen ? 'on' : ''}`}>
            <ul className={`gnb ${location.pathname === '/' ? 'main' : ''}`}>
              <li><NavLink className={({isActive})=>{return isActive ? 'on':'';}} to="/sub1" onClick={handleMenuItemClick} >인재영입</NavLink></li>
              <li><NavLink className={({isActive})=>{return isActive ? 'on':'';}} to="/sub2" onClick={handleMenuItemClick}>사람들 이야기</NavLink></li>
              <li><NavLink className={({isActive})=>{return isActive ? 'on':'';}} to="/sub3" onClick={handleMenuItemClick}>베네핏</NavLink></li>
              <li><NavLink className={({isActive})=>{return isActive ? 'on':'';}} to="/sub4" onClick={handleMenuItemClick}>자주묻는 질문</NavLink></li>
              <li><NavLink className={({isActive})=>{return isActive ? 'on':'';}} to="/sub5" onClick={handleMenuItemClick}>나의 지원현황</NavLink></li>
              <li><NavLink className={({isActive})=>{return isActive ? 'on':'';}} to="https://kbank-recruit.tistory.com" onClick={handleMenuItemClick}>블로그</NavLink></li>
              {/* <li><NavLink className={({isActive})=>{return isActive ? 'on':'';}} to="ImageTest" onClick={handleMenuItemClick}>테스트</NavLink></li> */}
            </ul>
          </nav>
        </div>
      </Box>
    </header>
  );
}

export default Header;