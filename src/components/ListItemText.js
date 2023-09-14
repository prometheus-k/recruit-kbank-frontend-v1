import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const ListItemText = ({ listItemTextClassName, children }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className={listItemTextClassName}>
            {children}
        </div>
    );
};


ListItemText.propTypes = {
    listItemTextClassName: PropTypes.string, // 버튼에 추가될 클래스명};
}
ListItemText.defaultProps = {
    listItemTextClassName: 'col-box', // 기본 클래스명 없음
};

export default ListItemText;