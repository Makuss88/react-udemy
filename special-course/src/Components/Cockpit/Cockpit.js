import React from 'react';
import styled from 'styled-components';
import './Cockpit.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  width: 200px;
  height: 40px;
  color: white;
  
  &:hover {
    background-color: ${props => props.alt ? 'tomato' : 'lightgreen'};
    color: black;  
  }
`;

const Cockpit = (props) => {

  const classes = [];

  if (props.persons.length <= 2 ){
    classes.push('red')
  }
  if (props.persons.length <= 1 ){
    classes.push('bold')
  }
  if (props.persons.length <= 0 ){
    classes.push('animate')
  }

  return (
    <div>
      <StyledButton 
          // style = {style}
          alt={props.alt}
          onClick={props.click}> Show Persons!
      </StyledButton>
      <p className={classes.join(' ')}>My Family!</p>
    </div>
  )
}

export default Cockpit;