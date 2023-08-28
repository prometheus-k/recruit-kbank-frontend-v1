import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const List = ({ listClasLIsName, children }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className="boardWrap">
            <ul className={listClasLIsName}>
                {children}
            </ul>
        </div>
    );
};


List.propTypes = {
    listClasLIsName: PropTypes.string, // 버튼에 추가될 클래스명};
    children: PropTypes.node, // Card 컴포넌트 내용(children)을 받을 수 있도록 추가]
};

List.defaultProps = {
    listClasLIsName: 'recruit-list', // 기본 클래스명 없음
};

export default List;