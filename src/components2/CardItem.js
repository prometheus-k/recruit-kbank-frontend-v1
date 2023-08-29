import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ title, description }) => {
  return (
    <div className="txt-item">
      <dl>
        <dt dangerouslySetInnerHTML={{ __html: title }} />
        <dd dangerouslySetInnerHTML={{ __html: description }} />
      </dl>
    </div>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardItem;
