import React, { useEffect } from 'react';
import Title from '../components2/Title'
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const Sub3 = () => {
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
      <div className="inner">
        <Title titleClassName="title1">케이뱅크의 베넷핏</Title>
      </div>
      <section>
        <div className="inner">
          <div className="benefitWrap">
            <ul className="row-list">
              <li>
                <div className="tit">일할 땐,<br />일하고 쉴 땐 쉬어요.</div>
                <div className="item-box">
                  <div className="img-item">
                    <img src="images/10.png" alt />
                  </div>
                  <div className="txt-item">
                    <dl>
                      <dt>시차출근제</dt>
                      <dd>개인의 라이츠 스타일에 맞게 유연하게 업무시간으로<br />일과 삶의 밸런스를 조절할 수 있어요.</dd>
                      <dt>자기계발 휴가</dt>
                      <dd>자유롭게 사용할 수 있는 연 3일의 자기계발 휴가제공<br />(단, 하반기 입사자는 미적용)</dd>
                      <dt>경조 휴가</dt>
                      <dd>기쁜 일은 축하하고, 슬픈 일은<br />위로가 될 수 있도록 경조휴가 지원</dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <div className="tit">나와 소중한 가족까지<br />생각해요.</div>
                <div className="item-box">
                  <div className="img-item">
                    <img src="images/10.png" alt />
                  </div>
                  <div className="txt-item">
                    <dl>
                      <dt>부모님 의료비 지원</dt>
                      <dd>개인의 라이프 스타일에 맞게 유연하게 업무시간으로<br /> 일과 삶의 밸런스를 조절할 수 있어요.</dd>
                      <dt>건강검진 &amp; 검진휴가 지원</dt>
                      <dd>개인의 라이프 스타일에 맞게 유연하게 업무시간으로<br /> 일과 삶의 밸런스를 조절할 수 있어요.</dd>
                      <dt>자녀 교육비 지원</dt>
                      <dd>개인의 라이프 스타일에 맞게 유연하게 업무시간으로<br /> 일과 삶의 밸런스를 조절할 수 있어요.</dd>
                      <dt>육아휴직 2년 제공</dt>
                      <dd>법정 육아휴직 1년과<br />케이뱅크 자체 휴직 1년을 더한 통 2년의 육아휴직 제공</dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <div className="tit">소통하며<br />함께 성장해요.</div>
                <div className="item-box">
                  <div className="img-item">
                    <img src="images/13.png" alt />
                  </div>
                  <div className="txt-item">
                    <dl>
                      <dt>Compass Meeting</dt>
                      <dd>개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</dd>
                      <dt>부모님 의료지 지원</dt>
                      <dd>개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</dd>
                      <dt>건강검진 &amp; 검진휴가 지원</dt>
                      <dd>개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li>
                <div className="tit">개인의 성장을<br />지원해요.</div>
                <div className="item-box">
                  <div className="img-item">
                    <img src="images/11.png" alt />
                  </div>
                  <div className="txt-item">
                    <dl>
                      <dt>Compass Meeting</dt>
                      <dd>개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</dd>
                      <dt>부모님 의료지 지원</dt>
                      <dd>개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</dd>
                      <dt>건강검진 &amp; 검진휴가 지원</dt>
                      <dd>개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</dd>
                    </dl>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Sub3;