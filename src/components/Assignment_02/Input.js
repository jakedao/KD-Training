import React from 'react';
import PropTypes from 'prop-types';


const Input = ({onChangeHandler, value}) => {
  return(
    <div>
      <label for='UserInput'>User Input</label>
      <input type='text' name='UserInput' id='UserInput' onChange={onChangeHandler} value={value} />
    </div>
  )
}

Input.propTypes = {
  onChangeHandler : PropTypes.func.isRequired,
  value : PropTypes.string.isRequired,
}

export default Input;