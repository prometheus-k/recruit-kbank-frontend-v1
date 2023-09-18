import React, { useRef, useState, useEffect, Suspense, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import _ from 'lodash';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import Box from '../components/Box';
import CardAction from '../components/CardAction';
import Loading from '../components/Loading';
import ErrorBoundary from './ErrorBoundary';
import Image from "../components/Image";
import LazyImage from '../components/LazyImage';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Main.css'
import hero_img_mw from '../assets/images/hero_img_mw.png';
import hero_img_pc from '../assets/images/hero_img-2.png';


gsap.registerPlugin(ScrollTrigger);


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


const CardMedia = React.lazy(() => import('../components/CardMedia'));

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "D199D0",
};

const initialStoryCards = [
  // 초기 카드 목록
  // 각 카드의 내용과 이미지는 실제 데이터에 맞게 수정해야 합니다.
  { title: '1국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/kbankstory/mw_main_story_01.jpg', type: 'type1' },
  { title: '2국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/kbankstory/mw_main_story_02.jpg', type: 'type3' },
  { title: '3국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/kbankstory/mw_main_story_03.jpg', type: 'type2' },
  { title: '4국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/kbankstory/mw_main_story_04.jpg', type: 'type1' },
  { title: '7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/kbankstory/mw_main_story_07.jpg', type: 'type1' },
  // { title: '7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/kbankstory/mw_main_story_08.jpg', type: 'type1' },
  // { title: '7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/kbankstory/mw_main_story_09.jpg', type: 'type1' },
  // { title: '7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ', imageSrc: 'images/kbankstory/mw_main_story_10.jpg', type: 'type1' },
];

const Main = () => {
  const scrollItems = useRef([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#D199D0");
  const [bigBanner, setBigBanner] = useState(Mobile() ? hero_img_mw : hero_img_pc);
  const [bigBannerClass, setBigBannerClass] = useState(Mobile() ? "m-img" : "pc-img");
  const [footerImg, setFooterImg] = useState(Mobile() ? 'images/main/mw/mw_main_team_join.jpg' : 'images/main/pc/pc_main_team_join.jpg');

  const initialBenefitCard = [
    {
      title: '유연한 자율 출퇴근',
      sub: '개인의 라이프 스타일에 맞게 유연한 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.',
      imageSrc: Mobile() ? 'images/benefit/mw/mw_benetfit_01.jpg' : 'images/benefit/pc/pc_benetfit_01.jpg'
    },
    {
      title: '유연한 자율 출퇴근',
      sub: '개인의 라이프 스타일에 맞게 유연한 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.',
      imageSrc: Mobile() ? 'images/benefit/mw/mw_benetfit_02.jpg' : 'images/benefit/pc/pc_benetfit_02.jpg'
    },
    {
      title: '유연한 자율 출퇴근',
      sub: '개인의 라이프 스타일에 맞게 유연한 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.',
      imageSrc: Mobile() ? 'images/benefit/mw/mw_benetfit_03.jpg' : 'images/benefit/pc/pc_benetfit_03.jpg'
    },
    {
      title: '유연한 자율 출퇴근',
      sub: '개인의 라이프 스타일에 맞게 유연한 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.',
      imageSrc: Mobile() ? 'images/benefit/mw/mw_benetfit_04.jpg' : 'images/benefit/pc/pc_benetfit_04.jpg'
    },
  ]

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    console.log('Component mounted');

    // ScrollTrigger를 사용하여 '.inner' 요소에 'active' 클래스 추가
    gsap.utils.toArray('.scroll-item').forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%', // 원하는 스크롤 위치에 맞게 조정
          onEnter: () => {
            const parent = element.closest('.inner');
            if (parent) {
              parent.classList.remove('unactive');
              parent.classList.add('active');
            }
          },
          onLeaveBack: () => {
            // const parent = element.closest('.inner');
            // if (parent) {
            //   parent.classList.add('unactive');
            //   parent.classList.remove('active');
            // }
          },
        },
      });

      // gsap.fromTo(
      //   element,
      //   { opacity: 0, y: 40 },
      //   {
      //     opacity: 2,
      //     y: 0,
      //     scrollTrigger: {
      //       trigger: element,         
      //       end: 'bottom 40%',
      //       scrub: true,
      //     },
      //   }
      // );

    });

    // const sections = scrollSpySections.current.querySelectorAll('.inner');
    //   sections.array.forEach(element => {
    // });

    const handleScroll = _.throttle(() => {
      // 스크롤 이벤트를 처리하는 로직을 여기에 작성
      console.log(window.scrollY);
      //스크롤 작동시 특정 위치에서 이벤트를 싱행
    }, 300); // 300ms 간격으로 스크롤 이벤트를 처리

    window.addEventListener('scroll', handleScroll);
    // 컴포넌트가 언마운트될 때 클린업 함수 설정
    return () => {
      console.log('Component unmounted');
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    // <ErrorBoundary>
    <Box boxClassName="content">
      <div className="default_ani">
        <Box boxClassName="inner">
          <div className="titleWrap">
            <p className="title1">돈을 모으고, <br className="m" />빌리고,<br className="pc" />불릴 수 있는<br className="m" /> 금융을 만들어요.</p>
          </div>
        </Box>

        <Box boxClassName="inner w100">
          <div className='imgWRap'>
            <LazyLoadImage
              alt=''
              effect="blur"
              src={bigBanner}
              className={bigBannerClass} />
          </div>
        </Box>
        <Box boxClassName="inner m">
          <div className="textWrap">
            <p className="text1">
              케이뱅크는 구성원들이<br className="m" /> 성장할 다양한 기회와<br />
              새로운 가능성을 끊임없이 제공합니다. <br />
              <span className="pc">
                이를 통해서 모든 구성원들은 치열하게 고민하고 과감하게 도전하며, <br />
                우리가 가진 상상을 현실로 만들어가고 있습니다. <br />
              </span>
              케이뱅크는 무한한 가능성의 공간에서<br className="m" /> 모두가 꿈꾸는<br className="pc" />
              금융권의 미래를<br className="m" /> 함께 만들어갈 여러분의 지원을 기다립니다.
            </p>
          </div>
        </Box>
        <Box boxClassName="inner pc">
          <div className="textWrap">
            <p className="text1">
              케이뱅크는 구성원들이<br className="m" /> 성장할 다양한 기회와<br />
              새로운 가능성을 끊임없이 제공합니다. <br />
              <span className="pc">
                이를 통해서 모든 구성원들은 치열하게 고민하고 과감하게 도전하며, <br />
                우리가 가진 상상을 현실로 만들어가고 있습니다. <br />
              </span>
              케이뱅크는 무한한 가능성의 공간에서<br className="m" /> 모두가 꿈꾸는<br className="pc" />
              금융권의 미래를<br className="m" /> 함께 만들어갈 여러분의 지원을 기다립니다.
            </p>
          </div>
        </Box>
      </div>

      {/* 사람들 이야기 */}
      <Box boxClassName="inner">
        <div className='scroll-item'>
          <div className="storyWrap">
            <div className="inner-titleWrap">
              <h2 className="title2">사람들 이야기</h2>
              <Link to="/sub2" className="link">more</Link>
            </div>
            <Swiper
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              lazyPreloadPrevNext={2}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  slidesPerGroup: 1,
                },
                801: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  slidesPerGroup: 2,
                }
              }}
              className="swiper-container swiper-container-horizontal mySwiper main-story"
            >
              {initialStoryCards.map((card, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <CardAction>
                    {/* <CardMedia cardImgClassName="swiper-story-img" imageSrc={card.imageSrc}></CardMedia> */}
                    <div className="img-item swiper-story-img">
                      <img src={card.imageSrc} alt="" loading="lazy" />
                    </div >
                    <div className='swiper-story-txt1'>{card.title}</div>
                    <div className='swiper-story-txt2'>{card.sub}</div>
                  </CardAction>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Box>

      {/* 케미코드  */}
      <Box boxClassName="inner">
      </Box>

      {/* 베네핏 */}
      <Box boxClassName="inner">
        <div className="scroll-item" >
          <div className="workbalanceWrap">
            <div className="inner-titleWrap">
              <h2 className="title2">일과 삶의 효율을 추구해요</h2>
              <Link to="/sub3" className="link">more</Link>
            </div>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  slidesPerGroup: 1,
                },
                801: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  slidesPerGroup: 2,
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                  slidesPerGroup: 2,
                },
              }}
              className="swiper-container swiper-container-horizontal mySwiper main-workbalance"
            >
              {initialBenefitCard.map((card, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <CardAction>
                    <CardMedia cardImgClassName="swiper-workbalance-img" imageSrc={card.imageSrc}></CardMedia>
                    <div className='swiper-workbalance-txt1'>{card.title}</div>
                    <div className='swiper-workbalance-txt2'>{card.sub}</div>
                  </CardAction>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Box>

      {/* 공고바로가기 */}
      <Box boxClassName="inner">
        <div className="scroll-item">
          <div className="recruit-linkWrap">
            <LazyImage src={footerImg} alt="" />
            <div className="txtWrap">
              <p className="txt">지금 새로운 금융의 여정에<br className="m" /> 합류해 보세요.</p>
              <Link to="/sub1" className="btn">채용공고 바로가기 →</Link>
            </div>
          </div>
        </div>
      </Box>

      <Box boxClassName="inner">
        <div className="snsWrap">
          <p className="txt">케이뱅크의<br className="m" /> 다양한 소식을 확인해보세요.</p>
          <ul>
            <li><Link to="https://www.instagram.com/kbank_official/?hl=ko"><img src="images/ic_instargram.png" alt="instargram" /></Link></li>
            <li><Link to="https://ko-kr.facebook.com/kbanknow"><img src="images/ic_facebook.png" alt="facebook" /></Link></li>
            <li><Link to="https://www.youtube.com/@kbanknow"><img src="images/ic_youtube.png" alt="youtube" /></Link></li>
          </ul>
        </div>
      </Box>

    </Box>
    // </ErrorBoundary>
  );
}

export default Main;