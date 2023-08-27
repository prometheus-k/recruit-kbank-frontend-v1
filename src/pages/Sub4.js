import React, { useEffect, useState } from 'react';
import Title from '../components2/Title'
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import
import { Link } from 'react-router-dom';
const Sub4 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
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

    <div>
      <div className="inner">
        <Title titleClassName="title1">자주 묻는 질문</Title>
      </div>
      <section>
        <div className="inner">
          <div className="faqWrap">
            <div className="section-component ui-tab">
              <section>
                <div className="component-tab no-space">
                  <div className="tab-list ui-tab-nav">
                    <ul className="tab-list-col" role="tablist">
                      <li className={`tab-item ${activeTab === 0 ? 'active' : ''}`}>
                        <Link className="tab-link" to="#none" role="button" onClick={() => handleTabClick(0)}>
                          <span className="txt">전형안내</span>
                        </Link>
                      </li>
                      <li className={`tab-item ${activeTab === 1 ? 'active' : ''}`}>
                        <Link className="tab-link" to="#none" role="button" onClick={() => handleTabClick(1)}>
                          <span className="txt">입사지원</span>
                        </Link>
                      </li>
                      <li className={`tab-item ${activeTab === 2 ? 'active' : ''}`}>
                        <Link className="tab-link" to="#none" role="button" onClick={() => handleTabClick(2)}>
                          <span className="txt">2023 인턴채용</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="article-component">
                  <div className="tab-content ui-tab-content" style={{ display: activeTab === 0 ? 'block' : 'none' }}>
                    <ul className="faq-list">
                      <li>
                        <div className="tit">평판 조회는 어떻게 되나요?</div>
                        <div className="txt">2차면접 후 필요한 후보자에 한하여 평판조회 진행됩니다. 평판조회 전 동의서 및 추천인 명단을 작성하시게 되며,<br />지원자 본인이 추천한 인물 및 추천하지 않은 인물에 대해 평판조회를 할 수 있습니다.</div>
                      </li>
                      <li>
                        <div className="tit">채용 프로세스가 궁금해요</div>
                        <div className="txt">경력직 기준 채용 프로세스는 아래와 같습니다. <br />
                          ▶ 지원서 접수 → 서류 전형 → 인성검사 및 코딩테스트 → 면접전형 → 처우협의 및 평판조회 → 최종합격 * Tech직군의 경우, <br />온라인 코딩테스트가 진행되며 실무면접 시 해당 내용에 대한 질의응답이 진행됩니다. <br /><br />
                          * 면접 전형은 1차 실무진 면접과 2차 임원면접으로 진행됩니다. <br />
                          * 뽑고자 하는 초지션의 특징에 따라 세부 전형 절차가 변경될 수 있으니, 꼭 지원을 희망하는 직무의 모집공고를 확인해주세요.<br /><br />
                          ※ 입사 전 싱용정보조회 및 KYE(Know Your Employee) 수행 안내임원면접 합격자 대상으로 신용정보조회와 KYE 를 수행하고 있습니다. <br />신용정보조회를 통해 케이뱅크 대출상품 이용이 어려운 등금인 경우, KYE 수행 결과 자금세탁행위의 위험이 높은 것으로 판단될 경우 <br />이후 전형 진행이 어렵습니다.
                        </div>
                      </li>
                      <li>
                        <div className="tit">전형 결과는 언제 알 수 있을까요?</div>
                        <div className="txt">단계별 젼형 결과는 합격/불합격에 관계없이 안내드리고 있으며 최대 한 달의 기간이 소요될 수 있습니다. <br />
                          결과를 기다리고 계신 모든 분들의 시간을 아끼고자 최선을 다하고 있지만 여러분의 역량을 놓침없이 보고자 신중하게 검토하고 있으니 넓은 마음으로 이해 부탁드립니다.<br /><br />
                          혹시 한 달이 지나도 결과안내를 받지 못하셨나요?<br />
                          케이뱅크 채용 페이지 내의 Q&amp;A 혹은 recruit@kbanknow.com 으로 문의 남겨주시면 빠르게 안내 드리겠습니다.
                        </div>
                      </li>
                      <li>
                        <div className="tit">코딩테스트는 어떤 전형인가요?</div>
                        <div className="txt">개발/빅데이터 등 Tech 직군을 지원하신 경우 온라인 코딩테스트가 진행됩니다. <br />약 3~4일 정도의 응시기간을 드리며, 기간 내 원하시는 때 응시하여 주세요. 시험에서는 지원하신 분야에서 주로 사용되는 언어가 출제되며, 실무진 면접시 작성하긴 코등네 대한 리뷰도 진행됩니다.
                        </div>
                      </li>
                      <li>
                        <div className="tit">보다 상세한 공고 내용이 궁금합니다.</div>
                        <div className="txt">채용공고의 내용이 이해가 되지 않거나, 다른 문의사항이 있으면 케이뱅크 채용 페이지 내의 Q&amp;A 에 남겨주세요. <br />담당자가 확인 후 답변드리고 있습니다. <br /><br />
                          다만 지원자들간의 공정성을 위해서 게시된 공고 이외의 정보는<br /> 공유되기 어려울 수도 있습니다.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content ui-tab-content" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                    <ul className="faq-list">
                      <li>
                        <div className="tit">누구나 지원이 가능한가요?</div>
                        <div className="txt">케이뱅크에서는 채용 전형에서 나이나 성별같은 제한과 차별을 하고 있지 않으며 새로운 기술을 통해 금융의 본질에 집중하고 싶은 분이라면 언제나 환영합니다.</div>
                      </li>
                      <li>
                        <div className="tit">누구나 지원이 가능한가요?</div>
                        <div className="txt">케이뱅크에서는 채용 전형에서 나이나 성별같은 제한과 차별을 하고 있지 않으며 새로운 기술을 통해 금융의 본질에 집중하고 싶은 분이라면 언제나 환영합니다.</div>
                      </li>
                      <li>
                        <div className="tit">누구나 지원이 가능한가요?</div>
                        <div className="txt">케이뱅크에서는 채용 전형에서 나이나 성별같은 제한과 차별을 하고 있지 않으며 새로운 기술을 통해 금융의 본질에 집중하고 싶은 분이라면 언제나 환영합니다.</div>
                      </li>
                      <li>
                        <div className="tit">누구나 지원이 가능한가요?</div>
                        <div className="txt">케이뱅크에서는 채용 전형에서 나이나 성별같은 제한과 차별을 하고 있지 않으며 새로운 기술을 통해 금융의 본질에 집중하고 싶은 분이라면 언제나 환영합니다.</div>
                      </li>
                      <li>
                        <div className="tit">누구나 지원이 가능한가요?</div>
                        <div className="txt">케이뱅크에서는 채용 전형에서 나이나 성별같은 제한과 차별을 하고 있지 않으며 새로운 기술을 통해 금융의 본질에 집중하고 싶은 분이라면 언제나 환영합니다.</div>
                      </li>
                      <li>
                        <div className="tit">누구나 지원이 가능한가요?</div>
                        <div className="txt">케이뱅크에서는 채용 전형에서 나이나 성별같은 제한과 차별을 하고 있지 않으며 새로운 기술을 통해 금융의 본질에 집중하고 싶은 분이라면 언제나 환영합니다.</div>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content ui-tab-content" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                    <ul className="faq-list">
                      <li>
                        <div className="tit">중복지원이 가능한가요?</div>
                        <div className="txt">진행 중인 채용공고 간 중복지원이 가능합니다.<br />단 서류전형 합격 시, 면접전형은 한 개 분야로만 진행이 가능하다는 점 참고해주세요.</div>
                      </li>
                      <li>
                        <div className="tit">중복지원이 가능한가요?</div>
                        <div className="txt">진행 중인 채용공고 간 중복지원이 가능합니다.<br />단 서류전형 합격 시, 면접전형은 한 개 분야로만 진행이 가능하다는 점 참고해주세요.</div>
                      </li>
                      <li>
                        <div className="tit">중복지원이 가능한가요?</div>
                        <div className="txt">진행 중인 채용공고 간 중복지원이 가능합니다.<br />단 서류전형 합격 시, 면접전형은 한 개 분야로만 진행이 가능하다는 점 참고해주세요.</div>
                      </li>
                      <li>
                        <div className="tit">중복지원이 가능한가요?</div>
                        <div className="txt">진행 중인 채용공고 간 중복지원이 가능합니다.<br />단 서류전형 합격 시, 면접전형은 한 개 분야로만 진행이 가능하다는 점 참고해주세요.</div>
                      </li>
                      <li>
                        <div className="tit">중복지원이 가능한가요?</div>
                        <div className="txt">진행 중인 채용공고 간 중복지원이 가능합니다.<br />단 서류전형 합격 시, 면접전형은 한 개 분야로만 진행이 가능하다는 점 참고해주세요.</div>
                      </li>
                      <li>
                        <div className="tit">중복지원이 가능한가요?</div>
                        <div className="txt">진행 중인 채용공고 간 중복지원이 가능합니다.<br />단 서류전형 합격 시, 면접전형은 한 개 분야로만 진행이 가능하다는 점 참고해주세요.</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
}

export default Sub4;