import React from 'react';
import './snsSection.css'; // SnsSection 컴포넌트의 CSS 파일을 import

const SnsSection = () => {
  return (
    <div className="inner">
      <div className="snsWrap">
        {/* SNS 섹션 내용 */}
        <p className="txt">케이뱅크의<br className="m" /> 다양한 소식을 확인해보세요.</p>
        <ul>
          <li><a href="#"><img src="images/ic_instargram.png" alt="instargram" /></a></li>
          <li><a href="#"><img src="images/ic_facebook.png" alt="facebook" /></a></li>
          <li><a href="#"><img src="images/ic_youtube.png" alt="youtube" /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default SnsSection;