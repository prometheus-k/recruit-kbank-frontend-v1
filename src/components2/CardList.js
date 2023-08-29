import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem'; // FeatureItem 컴포넌트의 경로를 맞게 수정해주세요.

const CardList = ({ features }) => {
  return (
    <div>
      {features.map((feature, index) => (
        <CardItem key={index} title={feature.title} description={feature.description} />
      ))}
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
};

export default CardList;