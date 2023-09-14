import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const ListItem = ({ listItemTo, children }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log('Component mounted');
        setShow(true);
        return () => {
            setShow(false);
            console.log('Component unmounted');
        };
    }, []);

    return (
        <li className={`list-item ${show ? 'show' : ''}`}>
            <Link to={listItemTo}>
                {children}
            </Link>
        </li>
    );
};


ListItem.propTypes = {
    listItemTo: PropTypes.string, // 버튼에 추가될 클래스명}
    children: PropTypes.node, // Card 컴포넌트 내용(children)을 받을 수 있도록 추가]
};

ListItem.defaultProps = {
    listItemTo: '/', // 기본 클래스명 없음
};

export default ListItem;