import React, { useEffect } from 'react';
import Title from '../components2/Title'
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const Sub2 = () => {
  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    console.log('Component mounted');

    // 컴포넌트가 언마운트될 때 클린업 함수 설정
    return () => {
      console.log('Component unmounted');
    };
  }, []);
  return (
    <div>
      <Title titleClassName="title1">케이뱅크<br />사람들의 이야기</Title>
      <div className="inner">
        <div className="kbank-manWrap">
          <ul className="column-list">
            <li className="col-box">
              <a href="#" className="kbank-man-item">
                <div className="img-item type1">
                  <img src="images/1.png" alt />
                </div>
                <div className="txt-item">
                  <span className="tit">1국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</span>
                  <span className="txt">준법지원팀 / </span>
                </div>
              </a>
            </li>
            <li className="col-box">
              <a href="#" className="kbank-man-item">
                <div className="img-item type3">
                  <img src="images/5.png" alt />
                </div>
                <div className="txt-item">
                  <span className="tit">2국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</span>
                  <span className="txt">준법지원팀 / </span>
                </div>
              </a>
            </li>
            <li className="col-box">
              <a href="#" className="kbank-man-item">
                <div className="img-item type2">
                  <img src="images/4.png" alt />
                </div>
                <div className="txt-item">
                  <span className="tit">3국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</span>
                  <span className="txt">준법지원팀 / </span>
                </div>
              </a>
            </li>
            <li className="col-box">
              <a href="#" className="kbank-man-item">
                <div className="img-item type2">
                  <img src="images/4.png" alt />
                </div>
                <div className="txt-item">
                  <span className="tit">4국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</span>
                  <span className="txt">준법지원팀 / </span>
                </div>
              </a>
            </li>
            <li className="col-box">
              <a href="#" className="kbank-man-item">
                <div className="img-item type2">
                  <img src="images/4.png" alt />
                </div>
                <div className="txt-item">
                  <span className="tit">5국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</span>
                  <span className="txt">준법지원팀 / </span>
                </div>
              </a>
            </li>
            <li className="col-box">
              <a href="#" className="kbank-man-item">
                <div className="img-item type2">
                  <img src="images/4.png" alt />
                </div>
                <div className="txt-item">
                  <span className="tit">6국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</span>
                  <span className="txt">준법지원팀 / </span>
                </div>
              </a>
            </li>
            <li className="col-box">
              <a href="#" className="kbank-man-item">
                <div className="img-item type3">
                  <img src="images/5.png" alt />
                </div>
                <div className="txt-item">
                  <span className="tit">7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</span>
                  <span className="txt">준법지원팀 / </span>
                </div>
              </a>
            </li>
            <li className="col-box">
              <a href="#" className="kbank-man-item">
                <div className="img-item type1">
                  <img src="images/1.png" alt />
                </div>
                <div className="txt-item">
                  <span className="tit">8국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</span>
                  <span className="txt">준법지원팀 / </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="inner">
        <div className="btnWrap">
          <button className="btn-more">
            <span className="txt">더보기</span>
          </button>
        </div>
      </div>
    </div>


  );
}

export default Sub2;