import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchField = ({ buttonClassName, inputClassName, placeholder, title, onChange }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className="searchwrap">
            <button className={buttonClassName} type="button">
                <span className="hide-txt">{title}</span>
                <i className="ico-search-input" aria-hidden="true" />
            </button>
            <input className={inputClassName} type="text" placeholder={placeholder} title={title} onChange={onChange} />
        </div>
    );
};

SearchField.propTypes = {
    buttonClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    onChange: PropTypes.func.isRequired, // 이벤트 핸들러 추가

};

SearchField.defaultProps = {
    buttonClassName: 'btn-search-input',
    inputClassName: 'ui-text',
    placeholder: '검색',
    title: '검색'
};

export default SearchField;
