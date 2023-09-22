import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const TitleText = ({ titleClassName, wrapClassName, titleText, children, translate}) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className={`titleWrap ${wrapClassName} ${translate ? " active" : ""}`}>
            <p className={`${translate ? "scroll-item " : ""} ${titleClassName}`} dangerouslySetInnerHTML={{ __html: titleText }} />
            {children}
        </div>
    );
};


TitleText.propTypes = {
    wrapClassName: PropTypes.string,
    titleClassName: PropTypes.string, // 제목의 클래스명
    children: PropTypes.node, // 제목 내용
    translate: PropTypes.bool, // 제목의 클래스명
};

TitleText.defaultProps = {
    wrapClassName: '',
    titleClassName: '', // 기본 클래스명 없음
    translate: true
};

export default TitleText;