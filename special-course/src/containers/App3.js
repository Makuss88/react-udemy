import React, { useState } from 'react';
// import Radium, { StyleRoot } from 'radium';

import Cockpit from '../Components/Cockpit/Cockpit';
import Persons from '../Components/Persons/Persons';

import './App3.css';

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
    setShowPerson(!showPersons);   
  }

  const handleChangePersonDetails = (event, id) => {
    const personIndex = personState.persons.findIndex(p => {
      return p.id === id
    });

    const person = {...personState.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIndex] = person; 
    setPersonState({persons: persons});
  }

  const deletePerson = (personIndex) => {
    const person = [...personState.persons];
    person.splice(personIndex, 1);
    setPersonState({persons: person});
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

  let persons = null;

  if (showPersons) {
    persons = (
      <div>
        <div>
          <Persons 
            persons={personState.persons}
            clicked={deletePerson}
            changed={handleChangePersonDetails}/>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <Cockpit 
          alt={showPersons} 
          click={handleShowPersons}
          persons={personState.persons}/>
        {persons}
      </header>
    </div>
  );
 
}

export default App;
