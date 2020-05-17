import React from 'react';
import PropTypes from 'prop-types';

import { InputWrapper } from './styled'

const InputForm = ({message, onChangeHandller}) => {
  return (
    <InputWrapper>
      <label for={message}>{message}</label>
      <input type='text' name={message} onChange={onChangeHandller}/>
    </InputWrapper>
  );
};

InputForm.defaultProps = {

}

InputForm.propTypes = {
  message: PropTypes.string.isRequired,
  onChangeHandller: PropTypes.func.isRequired,
}

export default InputForm;