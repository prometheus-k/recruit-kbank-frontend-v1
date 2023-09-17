import React, { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import Box from '../components/Box';
import CardAction from '../components/CardAction';
import Loading from '../components/Loading';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Main.css'

const Image = React.lazy(() => import('../components/Image'));
const CardMedia = React.lazy(() => import('../components/CardMedia'));


gsap.registerPlugin(ScrollTrigger);

const Sub2view = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#D199D0");

    useEffect(() => {
        // 컴포넌트가 처음 렌더링될 때 실행되는 코드
        console.log('Component mounted');
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
                <div className="kbank-manWrap-view">
                    <Image src={"images/9.png"} alt="" className={"manWrap-view01"} />
                    <div className="boardWrap">
                        <div className="recruit-view">
                            {/* 등록영역*/}
                            <dl>
                                <dt className="tit">케이뱅크에 어떻게 합류하게 되셨나요?</dt>
                                <dd className="txt">
                                    금융이 꼭 필요한 이유는 우리의 자신을 불러주고 더 나은 가능성을 꿈꾸게 하는 것입니다.<br />
                                    케이뱅크는 고객의 시간을 아껴주고, 고객의 고민을 덜어주며, 선별된 투자 기회로 고객의 자산을 키워가는 기쁨을 드립니다.<br />
                                    금융서비스의 변하지 않는 가치를 통해 조금씩 나아지는 생활의 변화를 함께 하겠습니다.<br />
                                    "합리적이고, 실용적인 은행 Kbank"
                                </dd>
                                <dt className="tit">인턴으로 입사하자마자 신생 팀에 배치가 되었는데요,<br />적응하시기 어려우시지 않았나요?</dt>
                                <dd className="txt">
                                    금융이 꼭 필요한 이유는 우리의 자신을 불러주고 더 나은 가능성을 꿈꾸게 하는 것입니다.<br />
                                    케이뱅크는 고객의 시간을 아껴주고, 고객의 고민을 덜어주며, 선별된 투자 기회로 고객의 자산을 키워가는 기쁨을 드립니다.<br />
                                    금융서비스의 변하지 않는 가치를 통해 조금씩 나아지는 생활의 변화를 함께 하겠습니다.<br />
                                    "합리적이고, 실용적인 은행 Kbank"
                                </dd>
                                <dt className="tit">이야기를 들으니 팀 분위기가 굉장히 좋을 것 같다는 생각이 드는데요,<br />팀 분위기는 어떤가요?</dt>
                                <dd className="txt">
                                    금융이 꼭 필요한 이유는 우리의 자신을 불러주고 더 나은 가능성을 꿈꾸게 하는 것입니다. 케이뱅크는 고객의 시간을 아껴주고, 고객의 고민을 덜어주며, 선별된 투자 기회로 고객의 자산을 키워가는 기쁨을 드립니다.<br />
                                    금융서비스의 변하지 않는 가치를 통해 조금씩 나아지는 생활의 변화를 함께 하겠습니다.<br />
                                    "합리적이고, 실용적인 은행 Kbank"
                                </dd>
                                <dd className="txt img">
                                    <Image imageSrc={"images/1.png"} alt="" />
                                </dd>
                                <dt className="tit">그럼 업무하시면서 위기의 순간도 있으셨나요?</dt>
                                <dd className="txt">
                                    금융이 꼭 필요한 이유는 우리의 자신을 불러주고 더 나은 가능성을 꿈꾸게 하는 것입니다. 케이뱅크는 고객의 시간을 아껴주고, 고객의 고민을 덜어주며, 선별된 투자 기회로 고객의 자산을 키워가는 기쁨을 드립니다.<br />
                                    금융서비스의 변하지 않는 가치를 통해 조금씩 나아지는 생활의 변화를 함께 하겠습니다.<br />
                                    "합리적이고, 실용적인 은행 Kbank"
                                </dd>
                            </dl>
                            {/* //등록영역*/}
                        </div>
                    </div>
                </div>
            </Box>
            <Box boxClassName="inner">
                <div className="recruit-linkWrap type2">
                    <div className="txtWrap">
                        <p className="txt">지금 새로운 금융의 여정에<br className="m" /> 합류해 보세요.</p>
                        <Link to="#" className="btn">지원하러 가기 →</Link>
                    </div>
                </div>
            </Box>
            <Box boxClassName="inner">
                <div className="workbalanceWrap type2">
                    <div className="inner-titleWrap">
                        <h2 className="title2">다른 이야기</h2>
                    </div>
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
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
                        className="swiper-container swiper-container-horizontal main-workbalance swiper-wrapper"
                    >
                        <SwiperSlide className="swiper-slide">
                            <CardAction>
                                <Suspense fallback={<Loading color={color} loading={loading} />}>
                                    <CardMedia cardImgClassName="swiper-story-img" imageSrc="images/1.png"></CardMedia>
                                </Suspense>
                                <div className='swiper-story-txt1'>내 코드가 고객에게 닿기를</div>
                                <div className='swiper-story-txt2'>준법지원팀 / 이강병</div>
                            </CardAction>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <CardAction>
                                <Suspense fallback={<Loading color={color} loading={loading} />}>
                                    <CardMedia cardImgClassName="swiper-story-img" imageSrc="images/1.png"></CardMedia>
                                </Suspense>
                                <div className='swiper-story-txt1'>'나'라는 브랜드를 만들어가다.</div>
                                <div className='swiper-story-txt2'>준법지원팀 / 이강병</div>
                            </CardAction>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <CardAction>
                                <Suspense fallback={<Loading color={color} loading={loading} />}>
                                    <CardMedia cardImgClassName="swiper-story-img" imageSrc="images/1.png"></CardMedia>
                                </Suspense>
                                <div className='swiper-story-txt1'>국내 첫 인터넷은행의 커리어</div>
                                <div className='swiper-story-txt2'>준법지원팀 / 이강병</div>
                            </CardAction>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <CardAction>
                                <Suspense fallback={<Loading color={color} loading={loading} />}>
                                    <CardMedia cardImgClassName="swiper-workbalance-img" imageSrc="images/1.png"></CardMedia>
                                </Suspense>
                                <div className='swiper-workbalance-txt1'>국내 첫 인터넷은행의 커리어</div>
                                <div className='swiper-workbalance-txt2'>준법지원팀 / 이강병</div>
                            </CardAction>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </Box>
        </Box>
    );
}

export default Sub2view;