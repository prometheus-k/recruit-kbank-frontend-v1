import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 import

const CardAction = ({ linkUrl, cardActionClassName, children, onClick }) => {
    useEffect(() => {
        // console.log('Component mounted');

        return () => {
            // console.log('Component unmounted');
        };
    }, []);

    return (
        <Link to={linkUrl} className={cardActionClassName} onClick={onClick}>
            {children}
        </Link>
    );
};


CardAction.propTypes = {
    linkUrl: PropTypes.string,
    cardActionClassName: PropTypes.string, // 버튼에 추가될 클래스명};
    children: PropTypes.node, // Card 컴포넌트 내용(children)을 받을 수 있도록 추가]
    onClick: PropTypes.func, // onClick 이벤트 핸들러 함수
}
CardAction.defaultProps = {
    linkUrl: '/',
    cardActionClassName: 'kbank-man-item', // 기본 클래스명 없음
};

export default CardAction;