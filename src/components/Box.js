import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const Box = ({ boxClassName, children }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className={boxClassName}> 
            {children}           
        </div>
    );
};

Box.propTypes = {
    boxClassName: PropTypes.string,
};

Box.defaultProps = {
    boxClassName: '', // 기본 클래스명 없음
};


export default Box;