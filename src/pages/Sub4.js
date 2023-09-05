import React, { useEffect, useState } from 'react';
import Title from '../components2/TitleText'
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
    <div className="content">
      <div className="inner">
        <Title titleClassName="title1" titleText="자주 묻는 질문" />
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
                          <span className="txt">지원 관련</span>
                        </Link>
                      </li>
                      <li className={`tab-item ${activeTab === 1 ? 'active' : ''}`}>
                        <Link className="tab-link" to="#none" role="button" onClick={() => handleTabClick(1)}>
                          <span className="txt">전형 관련</span>
                        </Link>
                      </li>
                      <li className={`tab-item ${activeTab === 2 ? 'active' : ''}`}>
                        <Link className="tab-link" to="#none" role="button" onClick={() => handleTabClick(2)}>
                          <span className="txt">기타</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="article-component">
                  <div className="tab-content ui-tab-content" style={{ display: activeTab === 0 ? 'block' : 'none' }}>
                    <ul className="faq-list">
                      <li>
                        <div className="tit">누구나 지원이 가능한가요?</div>
                        <div className="txt">케이뱅크에서는 나이나 성별같은 제한과 차별을 하고 있지 않으며, 누구나 지원가능합니다.</div>
                      </li>
                      <li>
                        <div className="tit">입사지원서 제출 후 수정 및 삭제가 가능한가요?</div>
                        <div className="txt">1:1 문의하기를 통해 변경 신청을 해주시면 수정 및 삭제를 도와드리고 있습니다.<br />단 지원서 접수기간이 마감된 이후에는 핸드폰 번호/ 이메일 주소만 수정이 가능합니다.</div>
                      </li>
                      <li>
                        <div className="tit">Recruit 메일로 입사지원서나 포트폴리오를 제출해도 반영이 되나요?</div>
                        <div className="txt">지원자 간 형평성을 위해, 메일로 접수된 입사지원서나 포트폴리오는 전형 결과에 반영해드리지 않습니다.<br />케이뱅크 인재영입 홈페이지 또는 외부 채용사이트(리멤버, 원티드)를 통해서 지원을 부탁드립니다.</div>
                      </li>
                      <li>
                        <div className="tit">불합격 후 재지원 가능 시점은 언제인가요?</div>
                        <div className="txt">재지원 시점에 대한 별도 제한은 없으며, 불이익 또한 없습니다.</div>
                      </li>
                      <li>
                        <div className="tit">여러 직무에 중복지원이 가능한가요?</div>
                        <div className="txt">중복지원 가능하며, 중복지원 시 면접전형은 더 적합한 한 개의 분야로 진행이 됩니다.<br />단, 특정 공고에서는 직무 간 중복지원이 불가할 수 있으니 공고 내용을 참고해주시기 바랍니다.</div>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content ui-tab-content" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                    <ul className="faq-list">
                      <li>
                        <div className="tit">채용 절차는 어떻게 진행되나요?</div>
                        <div className="txt">기본적으로 서류전형 {'>'} 온라인 인성검사 및 코딩테스트(Tech 직군) {'>'} 면접전형 으로 진행됩니다.	<br />단, 직무에 따라 채용 절차가 상이하니 지원하실 직무의 채용공고 확인을 부탁드립니다.</div>
                      </li>
                      <li>
                        <div className="tit">코딩테스트는 어떻게 진행되나요?</div>
                        <div className="txt">코딩테스트는 온라인으로 진행되며, 기간 내 원하시는 때 응시하는 방식입니다.<br />
                        지원하신 분야에서 주로 사용되는 언어로 출제되며, 1차면접 시 작성하신 코드에 대한 리뷰도 진행됩니다.<br />
                        단, 인턴의 경우 진행방식이 상이할 수 있으니 채용공고 확인을 부탁드립니다.
                        </div>
                      </li>
                      <li>
                        <div className="tit">면접은 어떤 방식으로 진행되나요?</div>
                        <div className="txt">케이뱅크는 1차면접, 2차면접 모두 비대면으로 진행하고 있으며 화상면접 Tool은 Teams를 사용합니다.<br />
                        단, 직무에 따라 대면 면접이 진행될 수 있으며 채용담당자가 개별적으로 안내드리고 있습니다.<br />                        
                        </div>
                      </li>
                      <li>
                        <div className="tit">면접 복장 가이드라인이 있을까요?</div>
                        <div className="txt">복장은 자율 복장이니 편안한 복장을 입고 참석해주시면 됩니다.<br />면접위원 분들도 캐주얼 복장으로 참석하실 예정입니다.
                        </div>
                      </li>
                      <li>
                        <div className="tit">각 전형별 결과는 언제 확인할 수 있나요?</div>
                        <div className="txt">전형별 결과 발표까지 약 1~2주 정도 소요되며, 직무에 따라 최대 한달 정도의 기간이 소요될 수 있습니다.<br />
                        혹시 한달이 지났는데, 결과 안내를 받지 못한 경우 1:1 문의하기 또는 채용 메일(recruit@kbanknow.com) 을 통해 문의주시면 빠르게 도움드리겠습니다.
                        </div>
                      </li>
                      <li>
                        <div className="tit">각 전형별 불합격 사유에 대한 피드백을 받을 수 있나요?</div>
                        <div className="txt">불합격 사유에 대해서 별도의 피드백을 드리고 있지는 않습니다.<br />
                        </div>
                      </li>
                      <li>
                        <div className="tit">레퍼런스 체크는 어떻게 진행되나요?</div>
                        <div className="txt">2차면접 합격자 중 필요한 후보자에 한하여 진행하며, 진행 전 지원자의 동의를 받고 진행하고 있습니다.<br />
                        이후 절차는 채용담당자가 개별적으로 안내드리고 있습니다.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content ui-tab-content" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                    <ul className="faq-list">
                      <li>
                        <div className="tit">전형 안내메일을 받지 못했는데 어떻게 해야 하나요?</div>
                        <div className="txt">프로모션함이나 스팸메일함 확인 부탁드리며, 확인되지 않을 경우 1:1 문의하기 또는 채용 메일(recruit@kbanknow.com) 로 연락을 부탁드립니다.</div>
                      </li>
                      <li>
                        <div className="tit">지원서 작성 시 오류가 발생하는 경우 어떻게 해야 하나요?</div>
                        <div className="txt">1:1 문의하기 또는 채용 메일(recruit@kbanknow.com) 로 문의주시면 도움드리도록 하겠습니다.</div>
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