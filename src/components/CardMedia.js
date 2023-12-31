import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const CardMedia = ({ cardImgClassName, imageSrc, art }) => {
    useEffect(() => {
        // console.log('Component mounted');

        return () => {
            // console.log('Component unmounted');
        };
    }, []);

    return (
        <div className={`img-item ${cardImgClassName}`}>
            <img src={imageSrc} alt={art} />
        </div >
    );
};

CardMedia.propTypes = {
    cardImgClassName: PropTypes.string, // 버튼에 추가될 클래스명};
    imageSrc: PropTypes.string,
    art: PropTypes.string
}
CardMedia.defaultProps = {
    cardImgClassName: '', // 기본 클래스명 없음
    imageSrc: 'images/1.png',
    art: ''
};

export default CardMedia;