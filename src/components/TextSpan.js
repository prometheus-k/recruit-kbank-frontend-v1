import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const TextSpan = ({ titleClassName, children }) => {
    useEffect(() => {
        // console.log('Component mounted');

        return () => {
            // console.log('Component unmounted');
        };
    }, []);

    return (
        <span className={titleClassName}>{children}</span>
    );
};
TextSpan.propTypes = {
    titleClassName: PropTypes.string, // 버튼에 추가될 클래스명
    children: PropTypes.string, // Card 컴포넌트 내용(children)을 받을 수 있도록 추가]
};

TextSpan.defaultProps = {
    titleClassName: '', // 기본 클래스명 없음
    children: '내용없음'
};

export default TextSpan;