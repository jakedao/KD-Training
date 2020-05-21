import React, {useState, useEffect} from 'react';

import Input from './Input'
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent';

import {Wrapper} from './styled';

const Output = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    return setText(event.target.value)
  }

  const clearText = () => {
    setText('');
  }
  return(
    <Wrapper>
      <Input onChangeHandler={handleTextChange} value={text} />
      <ValidationComponent textInput={text} />
      <CharComponent text={text} onReset={() => clearText()} />
    </Wrapper>
  );
}

export default Output;