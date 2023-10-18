import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const Image = ({ imgClassName, imageSrc, art }) => {
    useEffect(() => {
        //console.log('Component mounted');

        return () => {
            //console.log('Component unmounted');
        };
    }, []);

    return (
        <img className={imgClassName} src={imageSrc} alt={art} loading="lazy" />
    );
};

Image.propTypes = {
    imgClassName: PropTypes.string, // 버튼에 추가될 클래스명};
    imageSrc: PropTypes.string,
    art: PropTypes.string
}
Image.defaultProps = {
    imgClassName: '', // 기본 클래스명 없음
    imageSrc: 'images/1.png',
    art: ''
};

export default Image;