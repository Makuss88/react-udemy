import React from 'react';

const ValidationComponent = (props) => {


  return (
    <div>
      <p> a jego długość to {props.length} </p>
      {props.length < 5 ? <p> NAME USER TOO SHORT!!! </p> : null}
    </div>
  )

}

export default ValidationComponent;