import React from 'react';
import { useQuery } from 'react-query';

import RecruitList from './RecruitList'
import ErrorBoundary from './ErrorBoundary';


const initialListdata = [
  // 초기 카드 목록
  // 각 카드의 내용과 이미지는 실제 데이터에 맞게 수정해야 합니다.
  { jobid: 1, tag: true, tit: '여신상품 리스크관리 담당자', sub1: 'Tech', sub2: '경력', dday: '오늘마감', ddayclassName: 'day' },
  { jobid: 2, tag: true, tit: 'HR 어시스턴트', sub1: 'Management', sub2: '인턴', dday: '오늘마감', ddayclassName: 'day' },
  { jobid: 3, tag: true, tit: 'UX Researcher', sub1: 'UX팀', sub2: '경력', dday: '오늘마감', ddayclassName: 'day' },
  { jobid: 4, tag: true, tit: '프로덕트 디자이너', sub1: 'UX팀', sub2: '경력', dday: 'D-14', ddayclassName: 'day' },
  { jobid: 5, tag: false, tit: '플랫폼 디자이너', sub1: 'UX팀', sub2: '경력', dday: '상시채용', ddayclassName: 'day' },
  { jobid: 6, tag: false, tit: 'GUI 그래픽 디자이너', sub1: 'UX팀', sub2: '경력', dday: '상시채용', ddayclassName: 'day' },
  { jobid: 7, tag: false, tit: '여신 및 사후 감리 담당자', sub1: 'Risk', sub2: '경력', dday: '상시채용', ddayclassName: 'day' },
  { jobid: 8, tag: false, tit: '수신상품 기획/운영 담당자 채용', sub1: 'Risk', sub2: '경력', dday: '상시채용', ddayclassName: 'day' },
  { jobid: 9, tag: false, tit: '여신 및 사후 감리 담당자', sub1: 'Risk', sub2: '경력', dday: '지원마감', ddayclassName: 'day end' },
  { jobid: 10, tag: false, tit: '데이터플랫폼 엔지니어', sub1: 'Risk', sub2: '경력', dday: '지원마감', ddayclassName: 'day end' },
  // ... 더 많은 카드들
];
async function fetchData() {
  // 실제 API 호출 또는 데이터 요청 로직을 구현
  const response = await fetch('/api/recruit');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
const Recruit = () => {
  // const { data, error, isLoading } = useQuery('recruitData', fetchData);
  // //isLoading 상태를 체크하여 로딩 중 상태를 다룰 수 있습니다.
  // if (isLoading) {
  //   return 'Loading...'; // 로딩 중
  // }
  // // error 상태를 체크하여 에러를 다룰 수 있습니다.
  // if (error) {
  //   return `Error: ${error.message}`;
  // }
  return (
    <>
      <ErrorBoundary>
        <RecruitList listData={initialListdata} />
      </ErrorBoundary>
    </>
  );
}
export default Recruit;