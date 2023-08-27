import React, { useEffect } from 'react';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

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
    <div></div>

  );
}

export default Sub5;