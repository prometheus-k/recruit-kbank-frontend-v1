import React, { useEffect, useRef } from 'react';
import Title from '../components/TitleText'
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import Box from '../components/Box';
import CardMedia from '../components/CardMedia';
import Card from '../components/Card';
import CardList from '../components/CardList'; // FeaturesList 컴포넌트의 경로를 맞게 수정해주세요.
import TextField from '../components/TextField';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const cardList1 = [
  {
    title: '유연근무제',
    description: '개인의 라이프스타일에 맞춰<br />유연하게 출퇴근시간을 선택할 수 있어요.',
  },
  {
    title: '임직원 휴양 시설',
    description: '열심히 일한 후 리프레시 할 수 있도록 <br />휴양 시설 이용을 지원해요.',
  },
  {
    title: '경조사 지원',
    description: '기쁜 일은 축하하고,슬픈 일은 위로가 될 수 있도록<br />경조금과 경조휴가를 제공해요.',
  },
  // 다른 특성들도 추가
];
const cardList2 = [
  {
    title: '단체보험',
    description: '보인과 배우자, 자녀까지 든든한 단체보험을 지원해요.',
  },
  {
    title: '건강검진 지원',
    description: '매년 1회 본인과 가족 1명의 종합 건강검진과 <br />검진 휴가를 지원해요.',
  },
  {
    title: '유아휴직',
    description: '법정 육아휴직에 더해 총 2년의 육아휴직을 제공해요.',
  },
  // 다른 특성들도 추가
];
const cardList3 = [
  {
    title: '통신비',
    description: '직원 간 원활한 소통을 위해 통신비를 지원해요.',
  },
  {
    title: '사내동호회 지원',
    description: '동호회를 통해 취미도, 자기개발도<br />동료들과 함께하며 즐거움을 얻어요.',
  },
  {
    title: '케미데이',
    description: '반기별로 동료들과 실컷 웃고, 맘껏 이야기하고,<br />함께 어울리는 시간을 가져요.',
  },
  // 다른 특성들도 추가
];
const cardList4 = [
  {
    title: '복지포인트',
    description: '자유롭게 사용할 수 있는 복지포인트를<br />연간 400만원 지원해요.',
  },
  {
    title: '자기계발휴가',
    description: '역량 개발에 몰입할 수 있도록<br />연간 3일의 휴가를 제공해요.',
  },
  {
    title: '성장지원제도',
    description: '새것을 익히고 성장할 수 있도록 <br />교육 자격증 지원 시스템을 갖추고 있어요',
  },

  // 다른 특성들도 추가
];

const cardLists = [
  {
    title: '일할 땐,<br>일하고 쉴 땐 쉬어요.',
    imageIndex: 10,
    list: cardList1,
  },
  {
    title: '나와 소중한 가족까지<br>생각해요.',
    imageIndex: 10,
    list: cardList2,
  },
  {
    title: '소통하며<br>함께해요.',
    imageIndex: 13,
    list: cardList3,
  },
  {
    title: '개인의 성장을<br>지원해요.',
    imageIndex: 13,
    list: cardList4,
  },
  // ... (다른 cardList들 추가)
];

gsap.registerPlugin(ScrollTrigger);

const Sub3 = () => {
  const scrollItems = useRef([]);
  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    console.log('Component mounted');
    // ScrollTrigger를 사용하여 '.inner' 요소에 'active' 클래스 추가
    gsap.utils.toArray('.scroll-item').forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', // 원하는 스크롤 위치에 맞게 조정
          end: 'bottom 50%',
          onEnter: () => {
            const parent = element.closest('.animation-item');
            if (parent) {
              parent.classList.remove('unactive');
              parent.classList.add('active');
            }
          },
          onLeaveBack: () => {
            // const parent = element.closest('.animation-item');
            // if (parent) {
            //   parent.classList.add('unactive');
            //   parent.classList.remove('active');
            // }
          },
        },
      });
    });
    // 컴포넌트가 언마운트될 때 클린업 함수 설정
    return () => {
      console.log('Component unmounted');
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <Box boxClassName="content">
      <Box boxClassName="inner">
        <Title titleClassName="title1" titleText="케이뱅크의 베넷핏" />
      </Box>
        <Box boxClassName="inner">
          <div className="benefitWrap">
            <ul className="row-list">
              {cardLists.map((cardList, index) => (
                <li key={index}>
                  <div className="animation-item">
                    <div className="scroll-item">
                      {/* <TextField textClassName="tit" text={cardList.title} /> */}
                      <div className='tit' dangerouslySetInnerHTML={{ __html: cardList.title }} />
                      <Card cardClassName="item-box">
                        <CardMedia imageSrc={`images/${cardList.imageIndex}.png`} />
                        <CardList features={cardList.list} ></CardList>
                      </Card>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Box>
    </Box>
  );
}

export default Sub3;