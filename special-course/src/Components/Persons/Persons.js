import React from 'react';

import Person from './Person/Person'

const Persons = (props) => {

  return (
    props.persons.map((person, id) => {
      return <Person 
              click={() => props.clicked(id)}
              key={person.id} 
              name={person.name} 
              age={person.age}
              changed={(event) => props.changed(event, person.id)}/> 
   })
  )
}

export default Persons;