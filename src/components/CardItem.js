import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ title, description }) => {
  return (
      <dl>
        <dt dangerouslySetInnerHTML={{ __html: title }} />
        <dd dangerouslySetInnerHTML={{ __html: description }} />
      </dl>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardItem;
