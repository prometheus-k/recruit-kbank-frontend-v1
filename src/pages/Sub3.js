import React, { useEffect } from 'react';
import Title from '../components2/TitleText'
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import Box from '../components2/Box';
import CardMedia from '../components2/CardMedia';
import Card from '../components2/Card';
import CardList from '../components2/CardList'; // FeaturesList 컴포넌트의 경로를 맞게 수정해주세요.

const cardList1 = [
  {
    title: '시차출근제',
    description: '개인의 라이츠 스타일에 맞게 유연하게 업무시간으로<br />일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '자기계발 휴가',
    description: '자유롭게 사용할 수 있는 연 3일의 자기계발 휴가제공<br />(단, 하반기 입사자는 미적용)',
  },
  {
    title: '경조 휴가',
    description: '기쁜 일은 축하하고, 슬픈 일은<br />위로가 될 수 있도록 경조휴가 지원',
  },
  // 다른 특성들도 추가
];
const cardList2 = [
  {
    title: '부모님 의료비 지원',
    description: '개인의 라이프 스타일에 맞게 유연하게 업무시간으로<br /> 일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '건강검진 &amp; 검진휴가 지원',
    description: '개인의 라이프 스타일에 맞게 유연하게 업무시간으로<br /> 일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '자녀 교육비 지원',
    description: '개인의 라이프 스타일에 맞게 유연하게 업무시간으로<br /> 일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '육아휴직 2년 제공',
    description: '법정 육아휴직 1년과<br />케이뱅크 자체 휴직 1년을 더한 통 2년의 육아휴직 제공',
  },
  // 다른 특성들도 추가
];
const cardList3 = [
  {
    title: 'Compass Meeting',
    description: '개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '부모님 의료지 지원',
    description: '개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '건강검진 &amp; 검진휴가 지원',
    description: '개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '육아휴직 2년 제공',
    description: '법정 육아휴직 1년과<br />케이뱅크 자체 휴직 1년을 더한 통 2년의 육아휴직 제공',
  },
  // 다른 특성들도 추가
];
const cardList4 = [
  {
    title: 'Compass Meeting',
    description: '개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '부모님 의료지 지원',
    description: '개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '건강검진 &amp; 검진휴가 지원',
    description: '개인의 라이프 스타일에 맞게 유연하게 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.',
  },

  // 다른 특성들도 추가
];

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
    <div className="content">
      <div className="inner">
        <Title titleClassName="title1" titleText="케이뱅크의 베넷핏" />
      </div>
      <section>
        <div className="inner">
          <div className="benefitWrap">
            <ul className="row-list">
              <li>
                <Box boxClassName="tit">일할 땐,<br />일하고 쉴 땐 쉬어요.</Box>
                <Card cardClassName="item-box">
                  <CardMedia imageSrc="images/10.png" />
                  <CardList features={cardList1} ></CardList>
                </Card>
              </li>
              <li>
                <Box boxClassName="tit">나와 소중한 가족까지<br />생각해요.</Box>
                <Card cardClassName="item-box">
                  <CardMedia imageSrc="images/10.png" />
                  <CardList features={cardList2} ></CardList>
                </Card>
              </li>
              <li>
                <Box boxClassName="tit">소통하며<br />함께 성장해요.</Box>
                <Card cardClassName="item-box">
                  <CardMedia imageSrc="images/13.png" />
                  <CardList features={cardList3} ></CardList>
                </Card>
              </li>
              <li>
                <Box boxClassName="tit">개인의 성장을<br />지원해요.</Box>
                <Card cardClassName="item-box">
                  <CardMedia imageSrc="images/13.png" />
                  <CardList features={cardList4} ></CardList>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Sub3;