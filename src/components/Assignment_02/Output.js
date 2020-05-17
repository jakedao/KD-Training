import React, {useState} from 'react';

import Input from './Input'
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent';

const Output = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    return setText(event.target.value)
  }
  return(
    <div>
      <Input onChangeHandler={handleTextChange} />
      <span>{text}</span>
      <ValidationComponent textInput={text} />
      <CharComponent text={text}/>
    </div>
  );
}

export default  Output;