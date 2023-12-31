import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import TitleText from '../components/TitleText'
import Box from '../components/Box';
import ErrorBoundary from './ErrorBoundary';


const MyApply = () => {
  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    // console.log('Component mounted');

    // 컴포넌트가 언마운트될 때 클린업 함수 설정
    return () => {
      // console.log('Component unmounted');
    };
  }, []);
  return (
    <ErrorBoundary>
      <Box boxClassName="content">
        <Box boxClassName="inner">
          <TitleText titleClassName="title1" titleText="나의 지원현황" />
        </Box>
        <Box boxClassName="inner">
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
        </Box>
      </Box>
    </ErrorBoundary>
  );
}

export default MyApply;