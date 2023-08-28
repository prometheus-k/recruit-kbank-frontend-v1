import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import './footer.css'; // Footer 컴포넌트의 CSS 파일을 import

const Select = ({ sekectClassName, options, onChange }) => {
    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div className="selectWrap">
            <div className={sekectClassName}>
                <select name="" id="" onChange={onChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
Select.propTypes = {
    sekectClassName: PropTypes.string, // 버튼에 추가될 클래스명
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ),
    onChange: PropTypes.func.isRequired // Adding onChange prop
};

Select.defaultProps = {
    sekectClassName: 'btn-select', // 기본 클래스명 없음
    options: []
};

export default Select;