import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Select = ({ sekectClassName, options, onChange, value }) => {
    useEffect(() => {
        // console.log('Component mounted');

        return () => {
            // console.log('Component unmounted');
        };
    }, []);

    return (
        <div className="selectWrap">
            <div className={sekectClassName}>
                <select name="" id="" onChange={onChange} value={value}>
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
    onChange: PropTypes.func.isRequired, // Adding onChange prop
    value: PropTypes.string, // value 속성 추가
};

Select.defaultProps = {
    sekectClassName: 'btn-select', // 기본 클래스명 없음
    options: [],
    value: '', // 기본값 설정
};

export default Select;