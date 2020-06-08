import React, {useEffect, useState, memo, useRef } from 'react';

const UsingRef = () => {

  const refFocus = useRef();

  const [text,setText] = useState('');

  const onChangeHandler = (event) => {
    setText(event.target.value)
  }
  
  useEffect(() => {
    refFocus.current.focus();
  },[]);


  return (
    <div>Something <br/>
      <label for='UserInput'>Input A </label>
      <input type='text' name='UserInput' id='UserInput' onChange={onChangeHandler} value={text} />
      <label for='UserInput'>Input B </label>
      <input ref ={refFocus} type='text' name='UserInput' id='UserInput' onChange={onChangeHandler} value={text} />
    </div>
  );
};

export default UsingRef;