import React, { useEffect } from 'react';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const TextBox = ({ titleClassName, children }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className={titleClassName}>{children}</div>
    );
};

export default TextBox;