import React from 'react';
import PropTypes from 'prop-types';


const CharComponent = ({text}) => {

  const charArray = text.split('');

  const renderChar = (arr) => {
    arr.map(c => {
      return <span>{c}</span>
    });
  }

  return(
    <div>{renderChar(charArray)}</div>
  );
};

CharComponent.propTypes = {
  text: PropTypes.string.isRequired,
}

export default CharComponent;