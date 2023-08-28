import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const ListItem = ({ listItemhref, children }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <li>
            <Link href={listItemhref}>
                {children}
            </Link>
        </li>
    );
};


ListItem.propTypes = {
    listItemhref: PropTypes.string, // 버튼에 추가될 클래스명};
    children: PropTypes.node, // Card 컴포넌트 내용(children)을 받을 수 있도록 추가]
}
ListItem.defaultProps = {
    listItemhref: '/', // 기본 클래스명 없음
};

export default ListItem;