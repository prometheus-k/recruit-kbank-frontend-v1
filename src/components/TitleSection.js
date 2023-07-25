import React from 'react';
import './titleSection.css'; // Footer 컴포넌트의 CSS 파일을 import

const TitleSection = () => {
  return (
    <div className="default_ani">
      {/* 타이틀 섹션 내용 */}
      <div className="inner">
        <div className="titleWrap">
          <p className="title1">돈을 모으고, <br className="m" />빌리고,<br className="pc" />불릴 수 있는<br className="m" /> 금융을 만들어요.</p>
        </div>
      </div>
      <div className="inner w100">
        <div className="imgWRap">
          <img src="images/hero_img-2.png" alt="" className="pc-img" />
          <img src="images/hero_img_mw.png" alt="" className="m-img" />
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
    </div>
  );
}

export default TitleSection;
