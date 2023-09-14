import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const Button = ({ className, buttonText, spanClassName, onClick }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <button className={`${className}`} onClick={onClick}>
            <span className={`${spanClassName}`}>{buttonText}</span>
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string, // 버튼에 추가될 클래스명
    buttonText: PropTypes.string.isRequired, // 버튼 안의 텍스트
    spanClassName: PropTypes.string, // 스팬 요소에 추가될 클래스명
    onClick: PropTypes.func.isRequired, // onClick 이벤트 핸들러 함수
};

Button.defaultProps = {
    className: 'btn-more', // 기본 클래스명 없음
    spanClassName: 'txt', // 기본 스팬 클래스명 없음
};


export default Button;