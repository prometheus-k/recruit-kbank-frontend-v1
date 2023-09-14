import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem'; // FeatureItem 컴포넌트의 경로를 맞게 수정해주세요.

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