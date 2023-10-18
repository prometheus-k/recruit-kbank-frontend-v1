import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Typography = ({ titleClassName, children }) => {
    useEffect(() => {
        // console.log('Component mounted');

        return () => {
            // console.log('Component unmounted');
        };
    }, []);

    return (
        <div>
            <span className={titleClassName}>{children}</span>
        </div>
    );
};

Typography.propTypes = {
    titleClassName: PropTypes.string, // 제목의 클래스명
    children: PropTypes.node, // 제목 내용
};

Typography.defaultProps = {
    titleClassName: '', // 기본 클래스명 없음
};

export default Typography;