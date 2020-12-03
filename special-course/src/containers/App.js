import React, { useState } from 'react';
// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components'

import Person from '../Components/Persons/Person/Person';

import './App.css';


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

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { id:'dasj', name: "Adam", age: 25 },
      { id:'adfa', name: "Grzes", age: 33 },
      { id:'asff', name: "Drosofila", age: 18},
    ]
  });
  const [showPersons, setShowPerson] = useState(false)
  
  const handleShowPersons = () => {
    setShowPerson(!showPersons)   
  }

  const handleChangePersonDetails = (event, id) => {
    const personIndex = personState.persons.findIndex(p => {
      return p.id === id
    });

    const person = {...personState.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIndex] = person; 
    setPersonState({persons: persons})
  }

  const deletePerson = (personIndex) => {
    const person = [...personState.persons];
    person.splice(personIndex, 1);
    setPersonState({persons: person})
  }

  let persons = null;

  if (showPersons) {
    persons = (
      <div>

        <div>{personState.persons.map((person, id) => {
           return <Person 
                    click={() => deletePerson(id)}
                    key={person.id} 
                    name={person.name} 
                    age={person.age}
                    changed={(event) => {handleChangePersonDetails(event, person.id)}}/> 
        })}</div>
      </div>
    );
  }

  // const style = {
  //   backgroundColor: 'green',
  //   width: '200px',
  //   height: '40px',
  //   color: 'white',
  //   ':hover': {
  //     backgroundColor: 'lightgreen',
  //     color: 'black',  
  //   },
  // }

  // if(persons) {
  //   style.backgroundColor = 'red'
  //   style[':hover'] = {
  //     backgroundColor: 'tomato',
  //     color: 'black',  
  //   }
  // }

  const classes = [];

  if (personState.persons.length <= 2 ){
    classes.push('red')
  }
  if (personState.persons.length <= 1 ){
    classes.push('bold')
  }
  if (personState.persons.length <= 0 ){
    classes.push('animate')
  }

  return (
    <div className="App">
      <header>
        <StyledButton 
          // style = {style}
          alt={persons}
          onClick={handleShowPersons}> Show Persons!
        </StyledButton>
        <p className={classes.join(' ')}>My Family!</p>
        {persons}
      </header>
    </div>
  );
 
}

export default App;
