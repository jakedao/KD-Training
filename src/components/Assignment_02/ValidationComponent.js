import React from 'react';
import PropTypes from 'prop-types';


const ValidationComponent = ({textInput}) => {
  
  const checkLength = (text) => { 
    return text.length <5 
      ? <div>Text is too short</div>
      : <div>Text is long enough</div>
  };

  return (
    <div>{checkLength(textInput)}</div>
  );
};

ValidationComponent.propTypes = {
  textInput : PropTypes.string.isRequired,
};

export default ValidationComponent;
