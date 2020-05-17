import React, {useState} from 'react';
import {InputForm} from '../../components'

const Form = () => {

  const [text, setText] = useState('');
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <InputForm message='UserName' onChangeHandller={handleTextChange}/>
      <InputForm message='Password' onChangeHandller={handleTextChange} />
      <span>{text}</span>
    </div>
  );
};

export default Form;