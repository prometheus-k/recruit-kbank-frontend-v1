import React, { useEffect,useState } from 'react';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const Sub1 = () => {  
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
    <div className="titleWrap">
      <p className="title1">케이뱅크와 함께<br />더 나은 금융을 만들어갈<br />동료를 기다립니다.</p>
    </div>
  </div>
  <div className="inner">
    <div className="formWrap">
      <div className="form-group">
        <div className="searchwrap">
          <button className="btn-search-input" type="button">
            <span className="hide-txt">검색</span>
            <i className="ico-search-input" aria-hidden="true" />
          </button>
          <input className="ui-text" type="text" placeholder="검색" title="검색" />
        </div>
      </div>
      <div className="form-group">
        <div className="selectWrap">
          <div className="btn-select">
            <select name id>
              <option value>전체직군 (3)</option>
              <option value>직군1</option>
              <option value>직군2</option>
              <option value>직군3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="selectWrap">
          <div className="btn-select">
            <select name id>
              <option value>경력</option>
              <option value>경력1</option>
              <option value>경력2</option>
              <option value>경력3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="inner">
    <div className="boardWrap">
      <ul className="recruit-list">
        <li>
          <a href="sub1_view.html">
            <div className="col-box">
              <div className="recruit-tit">
                <span className="tag">NEW</span>
                <span className="tit">여신상품 리스크관리 담당자</span>
              </div>
              <div className="recruit-cate">
                <span>Tech</span>
                <span>경력</span>
              </div>
            </div>
            <div className="col-box">
              <span className="day">오늘마감</span>
            </div>
          </a>
        </li>
        <li>
          <a href="sub1_view.html">
            <div className="col-box">
              <div className="recruit-tit">
                <span className="tag">NEW</span>
                <span className="tit">HR 어시스턴트</span>
              </div>
              <div className="recruit-cate">
                <span>Management</span>
                <span>인턴</span>
              </div>
            </div>
            <div className="col-box">
              <span className="day">오늘마감</span>
            </div>
          </a>
        </li>
        <li>
          <a href="sub1_view.html">
            <div className="col-box">
              <div className="recruit-tit">
                <span className="tag">NEW</span>
                <span className="tit">UX Researcher</span>
              </div>
              <div className="recruit-cate">
                <span>UX팀</span>
                <span>경력</span>
              </div>
            </div>
            <div className="col-box">
              <span className="day">D-14</span>
            </div>
          </a>
        </li>
        <li>
          <a href="sub1_view.html">
            <div className="col-box">
              <div className="recruit-tit">
                <span className="tag">NEW</span>
                <span className="tit">프로덕트 디자이너</span>
              </div>
              <div className="recruit-cate">
                <span>UX팀</span>
                <span>경력</span>
              </div>
            </div>
            <div className="col-box">
              <span className="day">D-14</span>
            </div>
          </a>
        </li>
        <li>
          <a href="sub1_view.html">
            <div className="col-box">
              <div className="recruit-tit">
                {/* <span class="tag">NEW</span> */}
                <span className="tit">플랫폼 디자이너</span>
              </div>
              <div className="recruit-cate">
                <span>UX팀</span>
                <span>경력</span>
              </div>
            </div>
            <div className="col-box">
              <span className="day">상시채용</span>
            </div>
          </a>
        </li>
        <li>
          <a href="sub1_view.html">
            <div className="col-box">
              <div className="recruit-tit">
                {/* <span class="tag">NEW</span> */}
                <span className="tit">GUI 그래픽 디자이너</span>
              </div>
              <div className="recruit-cate">
                <span>UX팀</span>
                <span>경력</span>
              </div>
            </div>
            <div className="col-box">
              <span className="day">상시채용</span>
            </div>
          </a>
        </li>
        <li>
          <a href="sub1_view.html">
            <div className="col-box">
              <div className="recruit-tit">
                {/* <span class="tag">NEW</span> */}
                <span className="tit">여신 및 사후 감리 담당자</span>
              </div>
              <div className="recruit-cate">
                <span>Risk</span>
                <span>경력</span>
              </div>
            </div>
            <div className="col-box">
              <span className="day">상시채용</span>
            </div>
          </a>
        </li>
        <li>
          <a href="sub1_view.html">
            <div className="col-box">
              <div className="recruit-tit">
                {/* <span class="tag">NEW</span> */}
                <span className="tit">수신상품 기획/운영 담당자 채용</span>
              </div>
              <div className="recruit-cate">
                <span>Risk</span>
                <span>경력</span>
              </div>
            </div>
            <div className="col-box">
              <span className="day end">지원마감</span>
            </div>
          </a>
        </li>
        <li>
          <a href="sub1_view.html">
            <div className="col-box">
              <div className="recruit-tit">
                {/* <span class="tag">NEW</span> */}
                <span className="tit">여신 및 사후 감리 담당자</span>
              </div>
              <div className="recruit-cate">
                <span>Risk</span>
                <span>경력</span>
              </div>
            </div>
            <div className="col-box">
              <span className="day end">지원마감</span>
            </div>
          </a>
        </li>
        <li>
          <a href="sub1_view.html">
            <div className="col-box">
              <div className="recruit-tit">
                {/* <span class="tag">NEW</span> */}
                <span className="tit">데이터플랫폼 엔지니어</span>
              </div>
              <div className="recruit-cate">
                <span>Risk</span>
                <span>경력</span>
              </div>
            </div>
            <div className="col-box">
              <span className="day end">지원마감</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div className="btnWrap">
      <button className="btn-more">
        <span className="txt">더보기</span>
      </button>
    </div>
  </div>
</div>

  );
}

export default Sub1;