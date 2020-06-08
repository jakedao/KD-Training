import React, {useEffect, useState, memo, useRef } from 'react';

import PropTypes from 'prop-types';
import withClass from '../../hoc/withClass';
import BarkContext from '../../context/bark'

const Dog = ({data}) => {
  console.log(data);
  const [dog, setDog] = useState(data);
  const classes = []
  dog.length <= 2 && classes.push('red');
  dog.length <= 1 && classes.push('bold');

  const handleRemoveItem = name => {
    let result = dog.filter(item=> item.name !== name);
    setDog(result);
  };

  useEffect(() => {
    console.log('[Dog.js] is rendering..')
  });

  const renderList = (items) => {
    console.log(`What is dog class:`, classes)
    return items.map((item,id) => {
      return (
        <div 
          key={id} 
          className="wrapper" 
          onClick={() => {handleRemoveItem(item.name)}} 
        >
          <div className={classes.join(' ')} >{`Your dog's name is ${item.name}`}</div>
          <div>{` Your dog's orginality is ${item.breed}`}</div>
          <div>{`Your dog's age is ${item.age}`}</div>
        </div>
      )});
  }
  return(
    <div>
      {dog.length > 0 && renderList(dog)}
      {/* <BarkContext.Consumer>
        {context => context.bart ? <p>Your dog is barking </p> : <p>Your dog is sleeping</p>}
      </BarkContext.Consumer> */}
    </div>
  )
};

Dog.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  })),
}

export default Dog;