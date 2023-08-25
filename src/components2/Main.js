import React, { useRef,useEffect } from 'react';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import _ from 'lodash';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  //const scrollSpySections = useRef(null);

  useEffect(() => {
    // 컴포넌트가 처음 렌더링될 때 실행되는 코드
    console.log('Component mounted');

    const elements = document.querySelectorAll('section.scroll-spy');
    elements.forEach(element => {
      // 애니메이션 생성
      gsap.to(element, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          toggleActions: "resume pause reset pause",
          markers: true,
          start: 'top center', // 시작 지점 설정
          end: 'bottom center', // 종료 지점 설정
          scrub: true, // 스크롤 시 애니메이션 효과
        },
      });

      gsap.from(element, {
        opacity: 1,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          toggleActions: "resume pause reset pause",
          markers: true,
          start: 'top center', // 시작 지점 설정
          end: 'bottom center', // 종료 지점 설정
          scrub: true, // 스크롤 시 애니메이션 효과
        },
      });
    });
    
    

    // const sections = scrollSpySections.current.querySelectorAll('.scroll-spy');
    // sections.array.forEach(element => {
      
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
    };
  }, []);
  return (
<div>
<section className='scroll-spy'>
  <div className="default_ani">
    <div className="inner">
      <div className="titleWrap">
        <p className="title1">돈을 모으고, <br className="m" />빌리고,<br className="pc" />불릴 수 있는<br className="m" /> 금융을 만들어요.</p>
      </div>
    </div>
    <div className="inner w100">
      <div className="imgWRap">
        <img src="images/hero_img-2.png" alt className="pc-img" />
        <img src="images/hero_img_mw.png" alt className="m-img" /> 
      </div>
    </div>
    <div className="inner m">
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
    </div>
    <div className="inner pc">
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
    </div>
  </div>
  <div className="inner">
    <div className="storyWrap">
      <div className="inner-titleWrap">
        <h2 className="title2">케이뱅크<br className="m" /> 사람들 이야기</h2>
        <a href="#" className="link">사람들의 이야기 자세히 보기 →</a>
      </div>
      <div className="swiper-container swiper-container-horizontal main-story">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href>
              <div className="swiper-story-img"><img src="images/1.png" alt /></div>
              <div className="swiper-story-txt1">국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</div>
              <div className="swiper-story-txt2">준법지원팀 / 이강병</div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href>
              <div className="swiper-story-img"><img src="images/10.png" alt /></div>
              <div className="swiper-story-txt1">국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</div>
              <div className="swiper-story-txt2">준법지원팀 / 이강병</div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href>
              <div className="swiper-story-img"><img src="images/1.png" alt /></div>
              <div className="swiper-story-txt1">국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</div>
              <div className="swiper-story-txt2">준법지원팀 / 이강병</div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href>
              <div className="swiper-story-img"><img src="images/10.png" alt /></div>
              <div className="swiper-story-txt1">국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</div>
              <div className="swiper-story-txt2">준법지원팀 / 이강병</div>
            </a>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
          <span className="swiper-pagination-bullet" />
        </div>
      </div>
    </div>
  </div>
  <div className="inner">
    <div className="workbalanceWrap">
      <div className="inner-titleWrap">
        <h2 className="title2">케이뱅크는<br />일과 삶의 효율을 추구해요</h2>
        <a href="#" className="link">베네핏 자세히 보기 →</a>
      </div>
      <div className="swiper-container swiper-container-horizontal main-workbalance">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href>
              <div className="swiper-workbalance-img"><img src="images/10.png" alt /></div>
              <div className="swiper-workbalance-txt1">유연한 자율 출퇴근</div>
              <div className="swiper-workbalance-txt2">개인의 라이프 스타일에 맞게 유연한 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href>
              <div className="swiper-workbalance-img"><img src="images/11.png" alt /></div>
              <div className="swiper-workbalance-txt1">국내 첫 인터넷은행에서 금융과 IT의 커리어를 빌드업 할 수 있습니다.</div>
              <div className="swiper-workbalance-txt2">준법지원팀 / 이강병</div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href>
              <div className="swiper-workbalance-img"><img src="images/13.png" alt /></div>
              <div className="swiper-workbalance-txt1">유연한 자율 출퇴근</div>
              <div className="swiper-workbalance-txt2">개인의 라이프 스타일에 맞게 유연한 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href>
              <div className="swiper-workbalance-img"><img src="images/11.png" alt /></div>
              <div className="swiper-workbalance-txt1">유연한 자율 출퇴근</div>
              <div className="swiper-workbalance-txt2">개인의 라이프 스타일에 맞게 유연한 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href>
              <div className="swiper-workbalance-img"><img src="images/13.png" alt /></div>
              <div className="swiper-workbalance-txt1">유연한 자율 출퇴근</div>
              <div className="swiper-workbalance-txt2">개인의 라이프 스타일에 맞게 유연한 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href>
              <div className="swiper-workbalance-img"><img src="images/10.png" alt /></div>
              <div className="swiper-workbalance-txt1">유연한 자율 출퇴근</div>
              <div className="swiper-workbalance-txt2">개인의 라이프 스타일에 맞게 유연한 업무시간으로 일과 삶의 밸런스를 조절할 수 있어요.</div>
            </a>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
          <span className="swiper-pagination-bullet" />
        </div>
      </div>
    </div>
  </div>
  <div className="inner">
    <div className="recruit-linkWrap">
      <img src="images/9.png" alt />
      <div className="txtWrap">
        <p className="txt">지금 새로운 금융의 여정에<br className="m" /> 합류해 보세요.</p>
        <a href="#" className="btn">채용공고 바로가기 →</a>
      </div>
    </div>
  </div>
<div className="inner">
  <div className="snsWrap">
    <p className="txt">케이뱅크의<br className="m" /> 다양한 소식을 확인해보세요.</p>
    <ul>
      <li><a href="#"><img src="images/ic_instargram.png" alt="instargram" /></a></li>
      <li><a href="#"><img src="images/ic_facebook.png" alt="facebook" /></a></li>
      <li><a href="#"><img src="images/ic_youtube.png" alt="youtube" /></a></li>
    </ul>
  </div>
</div>
</section>
</div>

  );
}

export default Main;