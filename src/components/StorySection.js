import React from 'react';
import './storySection.css'; // Footer 컴포넌트의 CSS 파일을 import

const StorySection = () => {
  return (
    <div data-role="animation-group">
      {/* 스토리 섹션 내용 */}
      <div data-role="animation-item">
        <div className="scroll-item" data-ani-type="up">
          <div className="inner">
            <div className="storyWrap">
              <div className="inner-titleWrap">
                <h2 className="title2">케이뱅크<br className="m" /> 사람들 이야기</h2>
                <a href="#" className="link">사람들의 이야기 자세히 보기 →</a>
              </div>

              <div className="swiper-container main-story">
                <div className="swiper-wrapper">
                  {/* 스토리 아이템들 */}
                  <div className="swiper-slide">
                    <a href="">
                      <div className="swiper-story-img"><img src="images/1.png" alt="" /></div>
                      <div className="swiper-story-txt1">국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</div>
                      <div className="swiper-story-txt2">준법지원팀 / 이강병</div>
                    </a>
                  </div>
                  {/* 나머지 스토리 아이템들 */}
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

export default StorySection;