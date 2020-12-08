import React from 'react';

const Backdrop = (props) => {

  return ( 
    <div> 
      { props.show  ? <div></div> : null }
    </div>
  )
}

export default Backdrop;