import React from 'react';
import './recruitSection.css'; // Footer 컴포넌트의 CSS 파일을 import

const RecruitSection = () => {
  return (
    <div data-role="animation-group">
      {/* 채용 섹션 내용 */}
      <div data-role="animation-item">
        <div className="scroll-item" data-ani-type="up">
          <div className="inner">
            <div className="recruit-linkWrap">
              <img src="images/9.png" alt="" />
              <div className="txtWrap">
                <p className="txt">지금 새로운 금융의 여정에<br className="m" /> 합류해 보세요.</p>
                <a href="#" className="btn">채용공고 바로가기 →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitSection;