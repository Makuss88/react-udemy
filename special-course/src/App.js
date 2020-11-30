import React, { useState } from 'react';

import Person from './Person/Person';

import './App.css';

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
    setShowPerson({showPersons: !showPersons})   
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
  
  return (
    <div className="App">
      <header className="App-header">
        <button 
          className='btn-showName'
          onClick={handleShowPersons}> Show Person!
        </button>
        {persons}
      </header>
    </div>
  );
 
}

export default App;
