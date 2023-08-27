import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const CardMedia = ({ cardImgClassName, imageSrc }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className={`img-item ${cardImgClassName}`}>
            <img src={imageSrc} alt="" />
        </div >
    );
};

CardMedia.propTypes = {
    cardImgClassName: PropTypes.string, // 버튼에 추가될 클래스명};
    imageSrc: PropTypes.string
}
CardMedia.defaultProps = {
    cardImgClassName: 'type1', // 기본 클래스명 없음
    imageSrc: 'images/1.png'
};

export default CardMedia;