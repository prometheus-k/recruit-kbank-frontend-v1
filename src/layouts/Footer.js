import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 import
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import Box from '../components/Box';

const Footer = () => {
  return (
    <footer>
      <Box boxClassName="footerWrap">
        <span className="corp">ⓒ Kbank Corp.</span>
        <span className="policy"><Link target="_blank" to="https://kbank.recruiter.co.kr/appsite/company/callPage?url=etc/privacyPolicyPopup&type=G&skin=type-02&isBuilder=false&isSettingPage=false">개인정보처리방침</Link></span>
      </Box>
    </footer>

  );
}

export default Footer;