import React, { useEffect } from 'react';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const Title = ({ titleClassName, children }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className="inner">
            <div className="titleWrap">
                <p className={titleClassName}>{children}</p>
            </div>
        </div>
    );
};

export default Title;