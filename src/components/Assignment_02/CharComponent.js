import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const CharComponent = ({text, onReset}) => {
  console.log('Check text for every change: ',text);
  const charArray = text.split('');

  return(
    <div onClick={() => onReset()}>
      {charArray && charArray.map(c => {
        return <span>{`[${c}],`}</span>
      })}
    </div>
  );
};

CharComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
}

export default CharComponent;