import React from 'react';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const Footer = () => {
  return (
    <footer>
      <div className="footerWrap">
        <span className="corp">ⓒ Kbank Corp.</span>
        <span className="policy"><a href="#">개인정보처리방침</a></span>
      </div>
    </footer>

  );
}

export default Footer;