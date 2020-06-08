import React from 'react';

const withClass = (WrappedComponent, className, value) => {
  return props => {
    return (
      <div className={className}>
        <WrappedComponent value={props}/>
      </div>
    );
  }
};

export default withClass;