import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import TitleText from '../components/TitleText'
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import List from '../components/List';
import ListItem from '../components/ListItem';
import ListItemText from '../components/ListItemText';
import TextSpan from '../components/TextSpan';
import Button from '../components/Button';
import Box from '../components/Box';
import Select from '../components/Select'
import SearchField from '../components/SearchField';
import { useSearch } from '../components/SearchContext';

const jobGroupOptionsData = [
  { value: '', label: '전체' },
  { value: 'Tech', label: 'Tech' },
  { value: 'UX팀', label: 'UX' },
  { value: 'Risk', label: 'Risk' }
];

const careerOptionsData = [
  { value: '', label: '전체' },
  { value: '경력', label: '경력' },
  { value: '인턴', label: '인턴' },
  { value: '신규', label: '신규' }
];

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

const Recruit = () => {
  const [lists, setLists] = useState(initialListdata);
  const { searchTerm, setSearchTerm, selectedJobGroup, setSelectedJobGroup, selectedCareer, setSelectedCareer } = useSearch();

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const initialSearchTerm = queryParams.get('search') || ''; // URL 쿼리 파라미터에서 검색어 가져오기

  const handleMoreButtonClick = () => {
    // 더보기 버튼 클릭 시 새로운 카드를 추가하는 함수
    // 실제 데이터를 추가하는 로직을 구현해야 합니다.
    const newList = { tag: false, tit: '데이터플랫폼 엔지니어', sub1: 'Risk', sub2: '경력', dday: '지원마감', ddayclassName: 'day end' };
    setLists([...lists, newList]);
  };
  const handleinitButtonClick = () => {
    setSearchTerm(''); // 검색어 업데이트
    setSelectedJobGroup('');
    setSelectedCareer('');
  };

  const handleSearchInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm); // 검색어 업데이트
  };

  const handleJobGroupSelect = (event) => {
    setSelectedJobGroup(event.target.value);
  };

  const handleCareerSelect = (event) => {
    setSelectedCareer(event.target.value);
  };

  // 검색어와 일치하는 카드들 필터링
  const filteredLists = lists.filter((list) =>
    list.tit.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedJobGroup === "" || list.sub1 === selectedJobGroup) &&
    (selectedCareer === "" || list.sub2 === selectedCareer)
  );

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    console.log('Component mounted');
    // 컴포넌트가 언마운트될 때 클린업 함수 설정
    return () => {
      console.log('Component unmounted');

    };
  }, []);
  return (
    <Box boxClassName="content">
      <Box boxClassName="inner">
        <TitleText titleClassName="title1" titleText="케이뱅크와 함께<br />더 나은 금융을 만들어갈<br />동료를 기다립니다." />
      </Box>

      <Box boxClassName="inner">
        <div className="formWrap">
          <div className="form-group">
            <SearchField title="검색" onChange={handleSearchInputChange} value={searchTerm} />
          </div>
          <div className="form-group">
            <Select options={jobGroupOptionsData} onChange={handleJobGroupSelect} value={selectedJobGroup} />
          </div>
          <div className="form-group">
            <Select options={careerOptionsData} onChange={handleCareerSelect} value={selectedCareer} />
          </div>
        </div>
      </Box>

      {filteredLists.length > 0 ? (
        <Box boxClassName="inner">
          <List>
            {filteredLists.map((list, index) => (
              // <ListItem listItemTo={`/RecruitView?keyword=${encodeURIComponent(searchTerm)}`} key={index}>
              <ListItem listItemTo={`/Recruit/RecruitView/${list.jobid}`} key={index}>
                <ListItemText>
                  <Box boxClassName="recruit-tit">
                    {list.tag ? <TextSpan titleClassName="tag">NEW</TextSpan> : null}
                    <TextSpan titleClassName="tit">{list.tit}</TextSpan>
                  </Box>
                  <Box boxClassName="recruit-cate">
                    <TextSpan>{list.sub1}</TextSpan>
                    <TextSpan>{list.sub2}</TextSpan>
                  </Box>
                </ListItemText>
                <ListItemText>
                  <TextSpan titleClassName={list.ddayclassName}>{list.dday}</TextSpan>
                </ListItemText>
              </ListItem>
            ))}
          </List>
          {/* <div className="btnWrap">
            <Button buttonText="더보기" onClick={handleMoreButtonClick} />
          </div> */}
        </Box>
      ) : (
        // filteredLists가 비어있을 때 보여줄 다른 HTML
        <Box boxClassName="inner">
          <div className='applyWrap type2'>
            <p className='tit'>현재 진행중인 공고가 없습니다.</p>
            <div className='btnWrap'>
              <button className='btn-apply' onClick={handleinitButtonClick}>
                <span className='txt'>전제 공고로 돌아가기</span>
              </button>
            </div>
          </div>
        </Box>
      )}
    </Box>

  );
}

export default Recruit;