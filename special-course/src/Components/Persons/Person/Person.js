import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components'

import './Person.css';

const StyledDiv = styled.div`
  background: gray;
  width: 400px;
  margin: 16px auto;
  border: 1px solid black;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 800px) {
    width: 450px;
  }
`

const Person = (props) => {

  const rnd = Math.random();
  if (rnd > 1.7) {
    throw new Error("Something went wrong...")
  }
  return (
  //  <div className='Person' style={style}>
    <StyledDiv>
      <h1 onClick={props.click}>
        my name is {props.name}
      </h1>
      <p>
        i mam {props.age} lat {props.children}
      </p>
      <input type='text' onChange={props.changed} value={props.name}></input>
    </StyledDiv>
  )
}

export default Person;