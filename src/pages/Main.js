import React, { useRef, useState, useEffect, Suspense, CSSProperties } from 'react';

import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import _ from 'lodash';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper/modules';

import Box from '../components/Box';
import CardAction from '../components/CardAction';
import ErrorBoundary from './ErrorBoundary';
import LazyImage from '../components/LazyImage';
import TextBox from '../components/TextBox';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax'

import './Main.css'
import hero_img_mw from '../assets/images/hero_img_mw.webp';
import hero_img_pc from '../assets/images/hero_img-2.webp';
import main_team_join_mw from '../assets/images/main/mw/mw_main_team_join.webp';
import main_team_join_pc from '../assets/images/main/pc/pc_main_team_join.webp';
import ic_facebook from '../assets/images/ic_facebook.webp';
import ic_instargram from '../assets/images/ic_instargram.webp';
import ic_youtube from '../assets/images/ic_youtube.webp';


gsap.registerPlugin(ScrollTrigger);


//const CardMedia = React.lazy(() => import('../components/CardMedia'));

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "D199D0",
};

const Main = () => {
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

  const swiperModulesPc = [
    Navigation,
    Pagination,
    Parallax
  ];

  const swiperModulesMobile = [
    Navigation,
    Parallax
  ];


  const scrollItems = useRef([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("page-color1");
  const [bigBanner, setBigBanner] = useState(Mobile() ? hero_img_mw : hero_img_pc);
  const [bigBannerClass, setBigBannerClass] = useState(Mobile() ? "m-img" : "pc-img");
  const [gsapStart, setGsapStart] = useState(Mobile() ? 'top 80%' : 'top 85%');
  const [footerImg, setFooterImg] = useState(Mobile() ? main_team_join_mw : main_team_join_pc);
  const [activeClass, setActiveClass] = useState();
  const [swiperModules, setSwiperModules] = useState(Mobile() ? [...swiperModulesMobile] : [...swiperModulesPc]);

  const initialStoryCards = [
    // 초기 카드 목록
    // 각 카드의 내용과 이미지는 실제 데이터에 맞게 수정해야 합니다.
    {
      idx: 5, title: '사용자의 마음을 느끼는 방법', sub: 'UX팀 / 김송현님',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_story_05.webp' : 'images/main/pc/pc_main_story_05.webp', type: 'type1'
    },
    {
      idx: 3, title: '케이뱅크 고객의 전 여정을 함께합니다', sub: '수신팀 / 김교은님',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_story_03.webp' : 'images/main/pc/pc_main_story_03.webp', type: 'type2'
    },
    {
      idx: 1, title: '케이뱅크의 가계부를 작성합니다', sub: '회계팀 / 윤소정님',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_story_01.webp' : 'images/main/pc/pc_main_story_01.webp', type: 'type1'
    },
    {
      idx: 7, title: '고객과 만나는 접점을 개발합니다', sub: '채널서비스개발팀 / 이지원님',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_story_07.webp' : 'images/main/pc/pc_main_story_07.webp', type: 'type3'
    },
    // {
    //   idx: 9, title: '7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ',
    //   imageSrc: Mobile() ? 'images/main/mw/mw_main_story_09.webp' : 'images/main/pc/pc_main_story_09.webp', type: 'type2'
    // },
    {
      idx: 2, title: '도전할 수 있는 곳에서 성장 중입니다', sub: '주택금융 Camp / 허동규님',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_story_02.webp' : 'images/main/pc/pc_main_story_02.webp', type: 'type2'
    },
    {
      idx: 4, title: '의미 없는 도전은 없다고 믿습니다', sub: '서비스기획팀 / 이현정님',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_story_04.webp' : 'images/main/pc/pc_main_story_04.webp', type: 'type2'
    },
    {
      idx: 6, title: '보편적인 시각을 갖추기 위해 노력합니다', sub: 'Brand팀 / 최영락님',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_story_06.webp' : 'images/main/pc/pc_main_story_06.webp', type: 'type2'
    },
    {
      idx: 8, title: '팔리는 R&D를 지향합니다', sub: '준법데이터서비스팀 / 김홍종님',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_story_08.webp' : 'images/main/pc/pc_main_story_08.webp', type: 'type1'
    },
    // {
    //   idx: 10, title: '7국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.', sub: '준법지원팀 / ',
    //   imageSrc: Mobile() ? 'images/main/mw/mw_main_story_10.webp' : 'images/main/pc/pc_main_story_10.webp', type: 'type2'
    // },
  ];

  const initialBenefitCard = [
    {
      idx: 0,
      title: '일할 땐 일하고, 쉴 땐 쉬어요.',
      sub: '나의 라이프스타일에 맞게 유연하게 업무시간을 조절하고</br>충분히 휴식할 수 있도록 지원해요.',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_benefit_01.webp' : 'images/main/pc/pc_main_benefit_01.webp'
    },
    {
      idx: 1,
      title: '나의 소중한 가족까지 생각해요.',
      sub: '구성원의 삶이 더 행복해질 수 있도록</br>소중한 사람까지 생각하고 케어해요.',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_benefit_02.webp' : 'images/main/pc/pc_main_benefit_02.webp'
    },
    {
      idx: 2,
      title: '함께하는 시간을 즐기며 소통해요.',
      sub: '혼자보다 함께를 추구하며,</br>서로의 의견을 수평적으로 나눠요.',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_benefit_03.webp' : 'images/main/pc/pc_main_benefit_03.webp'
    },
    {
      idx: 3,
      title: '개인의 성장을 지원해요.',
      sub: '회사와 개인 모두의</br>성취와 성장을 적극적으로 지원해요.',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_benefit_04.webp' : 'images/main/pc/pc_main_benefit_04.webp'
    },
  ]

  const initialWorkCard = [
    {
      title: '공감하는 전문가',
      sub: Mobile() ? '고객이 금융생활에서 어떤 것을 필요로 하는지, 어떤 것을 어려워하는지 들여다봅니다.' : '고객이 금융생활에서 어떤 것을 필요로 하는지, 어떤 것을 어려워하는지 들여다봅니다. 그리고 문제에 대한 공감을 바탕으로 솔루션을 제시합니다.',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_kemicode_01.webp' : 'images/main/pc/pc_main_kemicode_01.webp',
      type: 'slide1'
    },
    {
      title: '케미 좋은 팀플레이어',
      sub: Mobile() ? '최선과 최고를 위해 노력하는 한 팀입니다.' : '최선과 최고를 위해 노력하는 한 팀입니다. 그렇기에 동료들과 한마음으로 한 곳을 향해 달려가는 과정을 즐깁니다.',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_kemicode_02.webp' : 'images/main/pc/pc_main_kemicode_02.webp',
      type: 'slide2'
    },
    {
      title: '끈질긴 문제 해결사',
      sub: Mobile() ? '낯선 것을 두려워하기 보다는 호기심을 갖고 배우고자 끊임없이 질문합니다.' : '낯선 것을 두려워하기 보다는 호기심을 갖고 배우고자 끊임없이 질문합니다. 그리고 질문에 대한 답을 구하기 위해 주저 없이 나아갑니다.',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_kemicode_03.webp' : 'images/main/pc/pc_main_kemicode_03.webp',
      type: 'slide3'
    },
    {
      title: '민첩한 실용주의자',
      sub: Mobile() ? '실용적인 금융 솔루션을 제안함으로써 더 큰 가능성을 만들고자 합니다.' : '실용적인 금융 솔루션을 제안함으로써 더 큰 가능성을 만들고자 합니다. 그래서 말보다는 행동, 계획보다는 실행에 가치를 두고, 빠르게 실행하고 개선합니다.',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_kemicode_04.webp' : 'images/main/pc/pc_main_kemicode_04.webp',
      type: 'slide4'
    },
    {
      title: '자율의 책임자',
      sub: Mobile() ? '우리는 자유와 자율의 차이를 알기에 책임있는 자율을 함께 만들어 갑니다.' : '우리는 자유와 자율의 차이를 알기에 책임있는 자율을 함께 만들어 갑니다. 우리 모두의 자율을 위해 꼭 지켜야 할 Ground Rule을 따르며, 고객에게 불편과 불안을 만드는 것과 타협하지 않습니다.',
      imageSrc: Mobile() ? 'images/main/mw/mw_main_kemicode_05.webp' : 'images/main/pc/pc_main_kemicode_05.webp',
      type: 'slide5'
    },
  ]

  const bigBannerLoad = () => {
    setActiveClass('on');
  }

  const slideCssChange = (swiper) => {
    if (swiper.activeIndex === 0) {
      setColor("page-color1");
    } else if (swiper.activeIndex === 1) {
      setColor("page-color2");
    } else if (swiper.activeIndex === 2) {
      setColor("page-color3");
    } else if (swiper.activeIndex === 3) {
      setColor("page-color4");
    } else if (swiper.activeIndex === 4) {
      setColor("page-color5");
    }
  }

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    // console.log('Component mounted');

    // ScrollTrigger를 사용하여 '.inner' 요소에 'active' 클래스 추가
    gsap.utils.toArray('.scroll-item').forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: gsapStart, // 원하는 스크롤 위치에 맞게 조정
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
      //console.log(window.scrollY);
      //스크롤 작동시 특정 위치에서 이벤트를 싱행
    }, 300); // 300ms 간격으로 스크롤 이벤트를 처리

    window.addEventListener('scroll', handleScroll);
    // 컴포넌트가 언마운트될 때 클린업 함수 설정
    return () => {
      // console.log('Component unmounted');
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <ErrorBoundary>
      <Box boxClassName="content">
        <div className="default_ani">
          <Box boxClassName="inner">
            <div className="titleWrap">
              <p className="title1">돈을 모으고, <br className="m" />빌리고,<br className="pc" />불릴 수 있는<br className="m" /> 금융을 만들어요.</p>
            </div>
          </Box>

          <Box boxClassName="inner w100">
            <div className={`imgWRap ${activeClass}`}>
              <LazyLoadImage
                onLoad={bigBannerLoad}
                alt=''
                effect="blur"
                src={bigBanner}
                wrapperClassName='lazyload'
                className={bigBannerClass} />
            </div>
          </Box>
          <Box boxClassName={Mobile() ? "inner m" : "inner pc"}>
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
                <Link to="/Story" className="link">more</Link>
              </div>
              <Swiper
                preventClicks={true}
                preventClicksPropagation={true}
                lazy="true"
                parallax={true}
                speed={800}
                modules={swiperModules}
                pagination={{ clickable: true }}
                lazyPreloadPrevNext={2}
                slidesPerGroup={1}
                spaceBetween={1.3}
                slidesPerView={1}
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
                }}
                className="swiper-container swiper-container-horizontal mySwiper main-story"
              >
                {initialStoryCards.map((card, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <CardAction linkUrl={`/Story/StoryView/${card.idx}`}>
                      {/* <CardMedia cardImgClassName="swiper-story-img" imageSrc={card.imageSrc}></CardMedia> */}
                      <div data-swiper-parallax="-3%">
                        <div className="img-item swiper-story-img">
                          <img src={card.imageSrc} alt="" loading="lazy" />
                        </div >
                        <TextBox boxClassName={'swiper-story-txt1'} text={card.title} />
                        <TextBox boxClassName={'swiper-story-txt2'} text={card.sub} />
                      </div>
                    </CardAction>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Box>

        {/* 케미코드  */}
        <Box boxClassName="inner">
          <div className="kbank-workWrap">
            <div className="inner-titleWrap">
              <h2 className="title2">일하는 방식</h2>
            </div>
            <Swiper
              lazy="true"
              parallax={true}
              speed={800}
              modules={swiperModules}
              pagination={{
                clickable: true,
              }}
              onSlideChange={slideCssChange}
              lazyPreloadPrevNext={1}
              slidesPerView={1.3}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
                },
                800: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  slidesPerGroup: 1,
                },
                1000: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                  slidesPerGroup: 1,
                },
              }}
              className={`swiper-container swiper-container-horizontal kbank-work ${color}`}
            >
              {initialWorkCard.map((card, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <CardAction>
                    {/* <CardMedia cardImgClassName="swiper-story-img" imageSrc={card.imageSrc}></CardMedia> */}
                    <div data-swiper-parallax="-3%">
                      <div className={`swiper-kbank-work ${card.type}`}>
                        <div className={Mobile() ? "m" : "pc"}>

                          <div className='swiper-kbank-work-txt'>
                            <TextBox boxClassName={'swiper-kbank-work-txt1'} text={card.title} />
                            <TextBox boxClassName={'swiper-kbank-work-txt2'} text={card.sub} />
                          </div>
                          <img src={card.imageSrc} alt="" loading="lazy" />
                        </div >
                      </div>
                    </div>
                  </CardAction>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Box>

        {/* 베네핏 */}
        <Box boxClassName="inner">
          <div className="scroll-item" >
            <div className="workbalanceWrap">
              <div className="inner-titleWrap">
                <h2 className="title2">복지와 혜택</h2>
                <Link to="/Benefit" className="link">more</Link>
              </div>
              <Swiper
                lazy="true"
                parallax={true}
                speed={800}
                pagination={{ clickable: true }}
                modules={swiperModules}
                lazyPreloadPrevNext={3}
                slidesPerView={1}
                spaceBetween={1.3}
                slidesPerGroup={1}
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
                    slidesPerGroup: 3,
                  },
                }}
                className="swiper-container swiper-container-horizontal mySwiper main-workbalance"
              >
                {initialBenefitCard.map((card, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <CardAction linkUrl={`/Benefit?idx=${card.idx}`}>
                      {/* <CardMedia cardImgClassName="swiper-workbalance-img" imageSrc={card.imageSrc}></CardMedia> */}
                      <div data-swiper-parallax="-3%">
                        <div className="img-item swiper-workbalance-img">
                          <img src={card.imageSrc} alt="" loading="lazy" />
                        </div >
                        <TextBox boxClassName={'swiper-workbalance-txt1'} text={card.title} />
                        <TextBox boxClassName={'swiper-workbalance-txt2'} text={card.sub} />
                      </div>
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
              <LazyImage src={footerImg} art="" />
              <div className="txtWrap">
                <p className="txt">지금 새로운 금융의 여정에<br className="m" /> 합류해 보세요.</p>
                <Link to="/Recruit" className="btn">채용공고 바로가기 →</Link>
              </div>
            </div>
          </div>
        </Box>

        <Box boxClassName="inner">
          <div className="snsWrap">
            <p className="txt">케이뱅크의<br className="m" /> 다양한 소식을 확인해보세요.</p>
            <ul>
              <li><Link to="https://www.instagram.com/kbank_official/?hl=ko"><img src={ic_instargram} alt="instargram" /></Link></li>
              <li><Link to="https://ko-kr.facebook.com/kbanknow"><img src={ic_facebook} alt="facebook" /></Link></li>
              <li><Link to="https://www.youtube.com/@kbanknow"><img src={ic_youtube} alt="youtube" /></Link></li>
            </ul>
          </div>
        </Box>

      </Box>
    </ErrorBoundary>
  );
}

export default Main;