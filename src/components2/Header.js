import React from 'react';
// import './header.css'; // Footer 컴포넌트의 CSS 파일을 import

const Header = () => {
  return (
<header>
  <div className="headerWrap">
    <h1>
      <a href="index.html"><img src="images/logo.png" alt="케이뱅크" /></a>
    </h1>
    <div className="gnbWrap">
      <a href="#/" className="m_menu"><span>열기</span></a>
      <nav>
        <ul className="gnb main">
          {/*main 일경우 class 'main'*/}
          <li><a href="sub1.html">인재영입</a></li>
          <li><a href="sub2.html">케이뱅크 이야기</a></li>
          <li><a href="sub3.html">베네핏</a></li>
          <li><a href="sub4.html">자주묻는 질문</a></li>
          <li><a href="#">나의 지원현황</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
  );
}

export default Header;