import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SyncLoader from "react-spinners/SyncLoader";
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const Loading = ({ color, size, loading, override }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className="sweet-loading">
            <SyncLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={11}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier="1"
            />
        </div>
    );
};

Loading.propTypes = {
    color: PropTypes.string,
    loading: PropTypes.bool,
    override : PropTypes.object,
};

Loading.defaultProps = {
    color: '', // 기본 클래스명 없음
    loading: false
};


export default Loading;