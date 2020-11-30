import React from 'react';

import './Person.css';

const Person = (props) => {

  return (
   <div className='Person'>
      <h1 onClick={props.click}>
        my name is {props.name}
      </h1>
      <p>
        i mam {props.age} lat {props.children}
      </p>
      <input type='text' onChange={props.changed} value={props.name}></input>
   </div>  
  )
}

export default Person;