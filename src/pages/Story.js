import React, { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import TitleText from '../components/TitleText'
import CardAction from '../components/CardAction';
import CardMedia from '../components/CardMedia';
import CardContent from '../components/CardContent';
import Typography from '../components/Typography';
import Box from '../components/Box';
import ErrorBoundary from './ErrorBoundary';


gsap.registerPlugin(ScrollTrigger);


const Story = () => {

  const Desktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop;
  }

  const Tablet = () => {
    const isTablet = useMediaQuery({ maxWidth: 768, maxWidth: 991 })
    return isTablet;
  }
  const Mobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile;
  }

  const Default = () => {
    const isDefault = useMediaQuery({ minWidth: 768 })
    return isDefault;
  }

  const initialStoryCards = [
    // 초기 카드 목록
    // 각 카드의 내용과 이미지는 실제 데이터에 맞게 수정해야 합니다.
    { idx: 5, title: '사용자의 마음을 느끼는 방법', sub: 'UX팀 / 김송현님', imageSrc: Mobile() ? 'images/kbankstory/mw/mw_people_stroy_5.webp' : 'images/kbankstory/pc/pc_people_stroy_5.webp', type: 'type1' },
    { idx: 3, title: '케이뱅크 고객의 전 여정을 함께합니다', sub: '수신팀 / 김교은님', imageSrc: Mobile() ? 'images/kbankstory/mw/mw_people_stroy_3.webp' : 'images/kbankstory/pc/pc_people_stroy_3.webp', type: 'type2' },
    { idx: 1, title: '케이뱅크의 가계부를 작성합니다', sub: '회계팀 / 윤소정님', imageSrc: Mobile() ? 'images/kbankstory/mw/mw_people_stroy_1.webp' : 'images/kbankstory/pc/pc_people_stroy_1.webp', type: 'type1' },
    { idx: 7, title: '고객과 만나는 접점을 개발합니다', sub: '채널서비스개발팀 / 이지원님', imageSrc: Mobile() ? 'images/kbankstory/mw/mw_people_stroy_7.webp' : 'images/kbankstory/pc/pc_people_stroy_7.webp', type: 'type3' },
    // { idx: 9, title: '7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: Mobile() ? 'images/kbankstory/mw/mw_people_stroy_9.webp' : 'images/kbankstory/pc/pc_people_stroy_9.webp', type: 'type2' },
    { idx: 2, title: '도전할 수 있는 곳에서 성장 중입니다', sub: '주택금융 Camp / 허동규님', imageSrc: Mobile() ? 'images/kbankstory/mw/mw_people_stroy_2.webp' : 'images/kbankstory/pc/pc_people_stroy_2.webp', type: 'type2' },
    { idx: 4, title: '의미 없는 도전은 없다고 믿습니다', sub: '서비스기획팀 / 이현정님', imageSrc: Mobile() ? 'images/kbankstory/mw/mw_people_stroy_4.webp' : 'images/kbankstory/pc/pc_people_stroy_4.webp', type: 'type2' },
    { idx: 6, title: '보편적인 시각을 갖추기 위해 노력합니다', sub: 'Brand팀 / 최영락님', imageSrc: Mobile() ? 'images/kbankstory/mw/mw_people_stroy_6.webp' : 'images/kbankstory/pc/pc_people_stroy_6.webp', type: 'type2' },
    { idx: 8, title: '팔리는 R&D를 지향합니다', sub: '준법데이터서비스팀 / 김홍종님', imageSrc: Mobile() ? 'images/kbankstory/mw/mw_people_stroy_8.webp' : 'images/kbankstory/pc/pc_people_stroy_8.webp', type: 'type1' },
    // { idx: 10, title: '7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: Mobile() ? 'images/kbankstory/mw/mw_people_stroy_10.webp' : images/kbankstory/pc/pc_people_stroy_10.webp', type: 'type2' },
  ];

  const scrollItems = useRef([]);
  const [cards, setCards] = useState(initialStoryCards);
  const [activeTab, setActiveTab] = useState(1);
  const handleMoreButtonClick = () => {
    setActiveTab(0);
    // 더보기 버튼 클릭 시 새로운 카드를 추가하는 함수
    // 실제 데이터를 추가하는 로직을 구현해야 합니다.
    const newCard = {
      title: '국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.',
      sub: '새로운 서브 내용',
      imageSrc: 'images/5.png',
      type: 'type2',
    };
    setCards([...cards, newCard]);
  };


  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    //console.log('Component mounted');
    // ScrollTrigger를 사용하여 '.inner' 요소에 'active' 클래스 추가
    gsap.utils.toArray('.scroll-item').forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', // 원하는 스크롤 위치에 맞게 조정
          onEnter: () => {
            const parent = element.closest('.kbank-man-item');
            if (parent) {
              parent.classList.remove('unactive');
              parent.classList.add('active');
            }
          },
          onLeaveBack: () => {
            // const parent = element.closest('.kbank-man-item');
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
    <ErrorBoundary>
      <Box boxClassName="content">
        <Box boxClassName="inner">
          <TitleText titleClassName="title1" titleText="케이뱅크<br />사람들의 이야기" />
        </Box>
        <Box boxClassName="inner">
          <div className="kbank-manWrap">
            <ul className="column-list">
              {cards.map((card, index) => (
                <li className="col-box" key={index}>
                  <CardAction linkUrl={`/Story/StoryView/${card.idx}`} cardActionClassName={`kbank-man-item ${activeTab === 0 ? 'active' : ''}`}>
                    <div className="scroll-item">
                      <CardMedia cardImgClassName={card.type} imageSrc={card.imageSrc}></CardMedia>
                      <CardContent>
                        <Typography titleClassName="tit">{card.title}</Typography>
                        <Typography titleClassName="txt">{card.sub}</Typography>
                      </CardContent>
                    </div>
                  </CardAction>
                </li>
              ))}
            </ul>
          </div>
        </Box>
        {/* <Box boxClassName="inner">
        <div className="btnWrap">
          <Button buttonText="더보기" onClick={handleMoreButtonClick} />
        </div>
      </Box> */}
      </Box>
    </ErrorBoundary>
  );
}

export default Story;