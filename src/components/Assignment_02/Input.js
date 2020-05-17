import React from 'react';
import PropTypes from 'prop-types';


const Input = ({onChangeHandler}) => {
  return(
    <div>
      <lable for='UserInput'>User Input</lable>
      <input type='text' name='UserInput' onChange={onChangeHandler}/>
    </div>
  )
}

Input.propTypes = {
  onChangeHandler : PropTypes.func.isRequired,
}

export default Input;