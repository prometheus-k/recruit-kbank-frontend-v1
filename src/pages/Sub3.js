import React, { useEffect, useRef } from 'react';
import Title from '../components2/TitleText'
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import Box from '../components2/Box';
import CardMedia from '../components2/CardMedia';
import Card from '../components2/Card';
import CardList from '../components2/CardList'; // FeaturesList 컴포넌트의 경로를 맞게 수정해주세요.
import TextField from '../components2/TextField';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const cardList1 = [
  {
    title: '유연근무제',
    description: '개인의 라이츠 스타일에 맞게 유연하게 업무시간으로<br />일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '자기계발 휴가',
    description: '자유롭게 사용할 수 있는 연 3일의 자기계발 휴가제공<br />(단, 하반기 입사자는 미적용)',
  },
  {
    title: '사내동호회 지원',
    description: '',
  },
  {
    title: '간식데이',
    description: '',
  },
  {
    title: '경조 휴가',
    description: '기쁜 일은 축하하고, 슬픈 일은<br />위로가 될 수 있도록 경조휴가 지원',
  },
  {
    title: '임직원 휴양소',
    description: '',
  },
  {
    title: '오프데이',
    description: '',
  },
  {
    title: '케미데이',
    description: '',
  },
  {
    title: '로봇커피',
    description: '',
  },
  {
    title: '무인편의점',
    description: '',
  },
  {
    title: '안마의자',
    description: '',
  },
  // 다른 특성들도 추가
];
const cardList2 = [
  {
    title: '단체보험',
    description: '',
  },
  {
    title: '건강검진 지원	심리상담 서비스',
    description: '',
  },
  {
    title: '부모님 의료비 지원',
    description: '개인의 라이프 스타일에 맞게 유연하게 업무시간으로<br /> 일과 삶의 밸런스를 조절할 수 있어요.',
  },
  {
    title: '명절 선물',
    description: '',
  },
  {
    title: '육아휴직 2년',
    description: '',
  },
  {
    title: '자녀 초등학교 입학선물',
    description: '',
  },
  {
    title: '자녀 학자금',
    description: '',
  },
  {
    title: '독감주사 지원',
    description: '',
  },
  {
    title: '맞춤형 영양제 지원',
    description: '',
  },
  // 다른 특성들도 추가
];
const cardList3 = [
  {
    title: '복지포인트 지급',
    description: '',
  },
  {
    title: '자기계발휴가',
    description: '',
  },
  {
    title: '통신비 지원',
    description: '',
  },
  {
    title: '자격증 취득비 지원',
    description: '',
  },
  {
    title: '추천채용 리워드',
    description: '',
  },
  {
    title: '외부 교육 및 세미나 지원',
    description: '',
  },
  {
    title: '도서 구입비 지원',
    description: '',
  },
  {
    title: '피어 보너스',
    description: '',
  },
  {
    title: '웰컴키트',
    description: '',
  },
  {
    title: '기술블로그 지원',
    description: '',
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
    title: '개인의 성장을<br>지원해요.',
    imageIndex: 13,
    list: cardList3,
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
      end:'bottom 50%',
      onEnter: () => {
        const parent = element.closest('.animation-item');
        if (parent) {
          parent.classList.remove('unactive');
          parent.classList.add('active');
        }
      },
      onLeaveBack: () => {
        const parent = element.closest('.animation-item');
        if (parent) {
          parent.classList.add('unactive');
          parent.classList.remove('active');
        }
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
    <div className="content">
      <div className="inner">
        <Title titleClassName="title1" titleText="케이뱅크의 베넷핏" />
      </div>
      <section>
        <div className="inner">
          <div className="benefitWrap">
            <ul className="row-list">
            {cardLists.map((cardList, index) => (
              <li key={index}>
              <Box boxClassName="animation-item">
                <Box boxClassName="scroll-item" ref={(el) => (scrollItems.current[0] = el)}>
                  {/* <TextField textClassName="tit" text={cardList.title} /> */}
                  <div className='tit' dangerouslySetInnerHTML={{ __html: cardList.title }}/>
                  <Card cardClassName="item-box">
                    <CardMedia imageSrc={`images/${cardList.imageIndex}.png`} />
                    <CardList features={cardList.list} ></CardList>
                  </Card>
                </Box>
              </Box>
              </li>
              ))}             
            </ul>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Sub3;