import React from 'react';

import './CharComponent.css'

const CharComponent = (props) => {

  return (
    <div className='Char' onClick={props.clicked}> 
        {props.text}
    </div>
  )
}

export default CharComponent;