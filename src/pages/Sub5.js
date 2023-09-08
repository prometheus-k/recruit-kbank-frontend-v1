import React, { useEffect } from 'react';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import Title from '../components2/TitleText'
import { Link } from 'react-router-dom';

const Sub5 = () => {
  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    console.log('Component mounted');

    // 컴포넌트가 언마운트될 때 클린업 함수 설정
    return () => {
      console.log('Component unmounted');
    };
  }, []);
  return (
    <div className="content">
      <div className="inner">
        <Title titleClassName="title1" titleText="나의 지원현황" />
      </div>
      <div className="inner">
        <div className="applyWrap">
          <p className="tit">지원현황은 PC를 이용해주세요</p>
          <div className="btnWrap">
            <button className="btn-apply">
              <span className="txt">
              <Link to="https://kbank.recruiter.co.kr/app/applicant/myPage/login" rel="preconnect" >나의 지원현황 조회</Link>
                </span>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Sub5;