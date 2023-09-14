import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const TitleText = ({ titleClassName, wrapClassName, titleText, children }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className={`titleWrap ${wrapClassName}`}>
            <p className={titleClassName} dangerouslySetInnerHTML={{ __html: titleText }} />
            {children}
        </div>
    );
};


TitleText.propTypes = {
    wrapClassName: PropTypes.string,
    titleClassName: PropTypes.string, // 제목의 클래스명
    children: PropTypes.node, // 제목 내용
};

TitleText.defaultProps = {
    wrapClassName: '',
    titleClassName: '', // 기본 클래스명 없음
};

export default TitleText;