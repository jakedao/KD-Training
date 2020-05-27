import React, {useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';

const Dog = ({data}) => {

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
    console.log('render list', items)
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

export default React.memo(Dog);