import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt, className }) => {
    useEffect(() => {
        // console.log('Component mounted');

        return () => {
            // console.log('Component unmounted');
        };
    }, []);

    return (
        <img src={src} alt={alt} className={className} />
    );
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string // 버튼에 추가될 클래스명};
}
Image.defaultProps = {
    className: '',
    src: 'images/1.png',
    alt: ''
};

export default Image;