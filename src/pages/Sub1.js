import React, { useEffect, useState } from 'react';
import Title from '../components2/TitleText'
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import List from '../components2/List';
import ListItems from '../components2/ListItems';
import ListItemText from '../components2/ListItemText';
import TextBox from '../components2/TextBox';
import Button from '../components2/Button';
import Box from '../components2/Box';

const Sub1 = () => {
  const listdata = [
    // 초기 카드 목록
    // 각 카드의 내용과 이미지는 실제 데이터에 맞게 수정해야 합니다.
    { tag: true ,tit:'여신상품 리스크관리 담당자',sub1:'Tech', sub2:'경력',dday:'오늘마감'},
    { tag: true ,tit:'HR 어시스턴트',sub1:'Management', sub2:'인턴',dday:'오늘마감'},
    { tag: true ,tit:'UX Researcher',sub1:'UX팀', sub2:'경력',dday:'오늘마감'},
    { tag: true ,tit:'프로덕트 디자이너',sub1:'UX팀', sub2:'경력',dday:'D-14'},
    { tag: false ,tit:'플랫폼 디자이너',sub1:'UX팀', sub2:'경력',dday:'상시채용'},
    { tag: false ,tit:'GUI 그래픽 디자이너',sub1:'UX팀', sub2:'경력',dday:'상시채용'},
    { tag: false ,tit:'여신 및 사후 감리 담당자',sub1:'Risk', sub2:'경력',dday:'상시채용'},
    { tag: false ,tit:'수신상품 기획/운영 담당자 채용',sub1:'Risk', sub2:'경력',dday:'상시채용'},
    { tag: false ,tit:'여신 및 사후 감리 담당자',sub1:'Risk', sub2:'경력',dday:'지원마감' ,ddayclassName:'day end'},
    { tag: false ,tit:'데이터플랫폼 엔지니어',sub1:'Risk', sub2:'경력',dday:'지원마감' ,ddayclassName:'day end'},
    // ... 더 많은 카드들
  ];

  const handleMoreButtonClick = () => {
  };

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
        <Title titleClassName="title1">케이뱅크와 함께<br />더 나은 금융을 만들어갈<br />동료를 기다립니다.</Title>
      </div>

      <div className="inner">
        <div className="formWrap">
          <div className="form-group">
            <div className="searchwrap">
              <button className="btn-search-input" type="button">
                <span className="hide-txt">검색</span>
                <i className="ico-search-input" aria-hidden="true" />
              </button>
              <input className="ui-text" type="text" placeholder="검색" title="검색" />
            </div>
          </div>
          <div className="form-group">
            <div className="selectWrap">
              <div className="btn-select">
                <select name id>
                  <option value>전체직군 (3)</option>
                  <option value>직군1</option>
                  <option value>직군2</option>
                  <option value>직군3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="selectWrap">
              <div className="btn-select">
                <select name id>
                  <option value>경력</option>
                  <option value>경력1</option>
                  <option value>경력2</option>
                  <option value>경력3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner">
        <List>
          <ListItems listItemHref="/link1">
          {listdata.map((list, index) => (
            <ListItemText>              
              <Box boxclassName="recruit-tit">
                <TextBox titleClassName="tag">NEW</TextBox> 
                <TextBox titleClassName="tit">여신상품 리스크관리 담당자</TextBox> 
              </Box>
              <Box boxclassName="recruit-cate">
                  <TextBox>Tech</TextBox> 
                  <TextBox>경력</TextBox> 
                </Box>                            
            </ListItemText>
            <ListItemText>
              <TextBox titleClassName="day">오늘마감</TextBox> 
            </ListItemText>          
          ))};
          </ListItems>
        </List>
        <Button buttonText="더보기" onClick={handleMoreButtonClick}/>

      </div>
    </div>

  );
}

export default Sub1;