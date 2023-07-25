import React from 'react';
import './workbalanceSection.css'; // Footer 컴포넌트의 CSS 파일을 import

const WorkbalanceSection = () => {
  return (
    <div data-role="animation-group">
      {/* 워크밸런스 섹션 내용 */}
      <div data-role="animation-item">
        <div className="scroll-item" data-ani-type="up">
          <div className="inner">
            <div className="workbalanceWrap">
              <div className="inner-titleWrap">
                <h2 className="title2">케이뱅크는<br />일과 삶의 효율을 추구해요</h2>
                <a href="#" className="link">베네핏 자세히 보기 →</a>
              </div>

              <div className="swiper-container main-workbalance">
                <div className="swiper-wrapper">
                  {/* 워크밸런스 아이템들 */}
                  <div className="swiper-slide">
                    <a href="">
                      <div className="swiper-workbalance-img"><img src="images/10.png" alt="" /></div>
                      <div className="swiper-workbalance-txt1">유연한 자율 출퇴근</div>
                      <div className="swiper-workbalance-txt2">개인의 라이프 스타일에 맞게 유연한 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</div>
                    </a>
                  </div>
                  {/* 나머지 워크밸런스 아이템들 */}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkbalanceSection;