import React from 'react';
import PropTypes from 'prop-types';

const CardList = ({ className, features }) => {
  return (
    <div className={className}>
      <dl>
        {features.map((feature, index) => (
          <React.Fragment>
            <dt dangerouslySetInnerHTML={{ __html: feature.title }} />
            <dd dangerouslySetInnerHTML={{ __html: feature.description }} />
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
};

CardList.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

CardList.defaultProps = {
  className: 'txt-item', // 기본 클래스명 없음
};

export default CardList;