import React, { useEffect, useState } from 'react';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import Card from '../components/Card';
import CardList from '../components/CardList';
import Box from '../components/Box';
import Button from '../components/Button';
import Title from '../components/TitleText'
import { useNavigate,useLocation } from 'react-router-dom';

const Sub1view = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || ''; // 이전 페이지에서 전달된 검색어
  console.log(searchQuery);
  const handleGoBack = () => {
    navigate(`/Sub1?search=${encodeURIComponent(searchQuery)}`); // Sub1 페이지로 이동하면서 검색어 전달
  };

  const handleClick = () => {

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

    <Box boxClassName="content">
      <Box boxClassName="inner">
        <Title titleClassName="title1" wrapClassName="recruit" titleText="프로덕트 디자이너">
          <div className="recruit-cate">
            <span>Tech</span>
            <span>경력</span>
          </div>
        </Title>
      </Box>
      <Box boxClassName="inner">
        <div className="boardWrap">
          <div className="recruit-view">
            {/* 등록영역*/}
            <dl>
              <dt className="tit">케이뱅크에 오면 이런 일을 해요</dt>
              <dd className="txt">
                금융이 꼭 필요한 이유는<br />
                우리의 자신을 불러주고 더 나은 가능성을 꿈꾸게 하는 것입니다.<br /><br />
                케이뱅크는 <br />
                고객의 시간을 아껴주고,<br />
                고객의 고민을 덜어주며,<br />
                선별된 투자 기회로 고객의 자산을 키워가는 기쁨을 드립니다.<br /><br />
                금융서비스의 변하지 않는<br />
                가치를 통해 조금씩 나아지는<br />
                생활의 변화를 함께 하겠습니다.<br /><br />
                "합리적이고, 실용적인 은행 Kbank"
              </dd>
              <dt className="tit">주요업무</dt>
              <dd className="txt">
                <ul className="list-dot">
                  <li>UX, 설계, 디자인, Prototype 등을 통해 다양한 상품/서비스를 포함한 케이뱅크를 사용하는 고객의 경험을 만들어 갑니다.</li>
                  <li>고객이 케이뱅크를 이용하면서 느끼는 불편과 의견을 정상적/정량적으로 수집하여 고객이 원하는 상품/서비스가 될 때까지 개선합니다.</li>
                  <li>기획부터 출시까지 최적의 디자인을 상품/서비스에 반여항 수 있도록 프로젝트 전반에 걸쳐 BM 및 엔지니어와 긴밀하게 협엽합니다.</li>
                </ul>
              </dd>
              <dt className="tit">자격요건</dt>
              <dd className="txt">
                <ul className="list-dot">
                  <li>금융서비스 출시 및 운영 경험이 있으신 분</li>
                  <li>복잡한 정보, 기술, 정책들을 이해하고 구조화할 수 있는 분</li>
                  <li>프로젝트 전체를 이해하고 사용자 중심으로 문제를 해결할 수 있는 분</li>
                  <li>논리적인 커뮤니케이션으로 구성원을 설득하고 협업한 경험이 있는 분</li>
                  <li>사용성과 심미성을 동시에 고려하여 완성도 있는 UX설계 및 UI 디자인이 가능한 분</li>
                  <li>정량적/정성적 데이터를 기반으로 고객이 필요한 것을 구체적으로 분석하고 파악하여, 이를 바탕으로 모바일 앱의 상품/서비스를 출시한 경험이 있는 분</li>
                  <li>플랫폼 및 서비스의 IA설계, 화면/시나리오 설계, 프로토 타이핑을 해 보신 분</li>
                </ul>
              </dd>
            </dl>
            {/* //등록영역*/}
          </div>
        </div>
        {/*pc 용*/}
        <div className="pc">
          <div className="btnWrap appli">
            <Button className="btn-appli-submit" spanClassName="txt" buttonText='지원하기' onClick={handleClick}></Button>
            <Button className="btn-appli-edit" spanClassName="txt" buttonText='지원서 수정' onClick={handleClick}></Button>
          </div>
        </div>
        {/*//pc 용*/}
        {/*mobile 용*/}
        <div className="m">
          <div className="btnWrap appli">
            <Button className="btn-appli-submit" spanClassName="txt" buttonText='지원서 작성은 PC를 이용해주세요!' onClick={handleClick}></Button>
            <Button className="btn-appli-edit" spanClassName="txt" buttonText='지원서 수정은 PC를 이용해주세요!' onClick={handleClick}></Button>
          </div>
        </div>
        {/*//mobile 용*/}
        <div className="btnWrap list">
          <Button className="btn-list" spanClassName="txt" buttonText='목록으로 돌아가기' onClick={handleGoBack}></Button>
        </div>
      </Box>
    </Box>
  );
}

export default Sub1view;