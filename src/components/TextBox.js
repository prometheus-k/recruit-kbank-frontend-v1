import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ boxClassName, text }) => {
    useEffect(() => {
        // console.log('Component mounted');

        return () => {
            // console.log('Component unmounted');
        };
    }, []);

    return (
        <div className={boxClassName} dangerouslySetInnerHTML={{ __html: text }} />
    );
};

TextBox.propTypes = {
    boxClassName: PropTypes.string,
    text: PropTypes.string,
};

TextBox.defaultProps = {
    boxClassName: '', // 기본 클래스명 없음
    text: '내용없음'
};


export default TextBox;