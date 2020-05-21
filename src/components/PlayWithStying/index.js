import React, {useEffect} from 'react';

const Styling = () => {

  const dogs =  [
    {name:'Đần', breed:'Golden', age: 1},
    {name:'Ngáo', breed:'Huskey', age: 1},
    {name:'Mông to', breed:'Corgi', age: 1},
  ];

  const classes = [];

  if(dogs.length <= 1) {
    classes.push('red').join(' ');
  }
  
  if(dogs.length < 2){
    classes.push('bold').join(' ');
  }
  
  const handleRemoveItem = id => {
    console.log('GOOD BYE YOUR FRIEND')
    return dogs.splice(id, 1);
  };

  const renderList = (items) => {
    console.log('render list', items)
    items.map((item,id) => {
      return (
        <div 
          key={id} 
          className="wrapper" 
          onClick={() => {handleRemoveItem(id)}} 
        >
          <div className={classes}>{`Your dog's name is ${item.name}`}</div>
          <div>{` Your dog's orginality is ${item.breed}`}</div>
          <div>{`Your dog's age is ${item.age}`}</div>
        </div>
      )});
  }

  useEffect(() => {
    renderList(dogs)
  },[classes, dogs])

  return(
    <div>
      {dogs.length > 0 &&
      <div>
        {renderList(dogs)}
      </div>}
    </div>
  )
};

export default Styling;