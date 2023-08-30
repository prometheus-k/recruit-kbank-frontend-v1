import React, { useRef, useEffect, useState } from 'react';
import Title from '../components2/TitleText'
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import Button from '../components2/Button'
import CardAction from '../components2/CardAction';
import CardMedia from '../components2/CardMedia';
import CardContent from '../components2/CardContent';
import Typography from '../components2/Typography';
import Box from '../components2/Box';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const initialCards = [
  // 초기 카드 목록
  // 각 카드의 내용과 이미지는 실제 데이터에 맞게 수정해야 합니다.
  { title: '1국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/1.png', type: 'type1' },
  { title: '2국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/5.png', type: 'type3' },
  { title: '3국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/4.png', type: 'type2' },
  { title: '4국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/1.png', type: 'type1' },
  { title: '5국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/5.png', type: 'type3' },
  { title: '6국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/4.png', type: 'type2' },
  { title: '7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/1.png', type: 'type1' },
  // ... 더 많은 카드들
];

gsap.registerPlugin(ScrollTrigger);

const Sub2 = () => {
  const scrollItems = useRef([]);
  const [cards, setCards] = useState(initialCards);

  const handleMoreButtonClick = () => {
    // 더보기 버튼 클릭 시 새로운 카드를 추가하는 함수
    // 실제 데이터를 추가하는 로직을 구현해야 합니다.
    const newCard = {
      title: '새로운 카드 제목',
      sub: '새로운 서브 내용',
      imageSrc: 'images/5.png',
      type: 'type2',
    };
    setCards([...cards, newCard]);
  };

  // ScrollTrigger를 사용하여 '.inner' 요소에 'active' 클래스 추가
  gsap.utils.toArray('.scroll-item').forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%', // 원하는 스크롤 위치에 맞게 조정
        onEnter: () => {
          const parent = element.closest('.test');
          if (parent) {
            parent.classList.remove('unactive');
            parent.classList.add('active');
          }
        },
        onLeaveBack: () => {
          const parent = element.closest('.test');
          if (parent) {
            parent.classList.add('unactive');
            parent.classList.remove('active');
          }
        },
      },
    });
  });

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    console.log('Component mounted');

    // 컴포넌트가 언마운트될 때 클린업 함수 설정
    return () => {
      console.log('Component unmounted');
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    };
  }, []);
  return (
    <div className="content">
      <div className="inner">
        <Title titleClassName="title1" titleText="케이뱅크<br />사람들의 이야기" />
      </div>
      <div className="inner">
        <div className="kbank-manWrap">
          <ul className="column-list">
            {cards.map((card, index) => (
              <li className="col-box" key={index}>
                <div class="test" key={index}>
                  <CardAction>
                    <Box boxClassName="scroll-item" ref={(el) => (scrollItems.current[0] = el)}>
                      <CardMedia cardImgClassName={card.type} imageSrc={card.imageSrc}></CardMedia>
                      <CardContent>
                        <Typography titleClassName="tit">{card.title}</Typography>
                        <Typography titleClassName="txt">{card.sub}</Typography>
                      </CardContent>
                    </Box>
                  </CardAction>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="inner">
        <div className="btnWrap">
          <Button buttonText="더보기" onClick={handleMoreButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default Sub2;