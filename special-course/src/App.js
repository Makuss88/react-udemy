import React, {useState} from 'react';

import Person from './Person/Person';

import './App.css';

const App = () => {
  
  const [personList, setPersonList] = useState({
    person: [
      { name: "Adam", age: 25 },
      { name: "Grzes", age: 33 },
      { name: "Drosofila", age: 18},
    ]}
  )
  const [isChilrdenFlag, setIsChildrenFlag] = useState(true);
  const [showPersons, setShowPersons] = useState(false);

  const handleShowPersons = () => {
    setShowPersons(showPersons =>!showPersons)   
  }

  const handleChangePersonDetails = () => {
    setPersonList({person: [
      { name: "Adamek", age: 44 },
      { name: "Grzes", age: 33 },
      { name: "Drosofila Pikna", age: 20},
      ]
    });
    setIsChildrenFlag(isChilrdenFlag => !isChilrdenFlag);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button 
          className='button' 
          onClick={handleShowPersons}> Show Person!
        </button>

        {showPersons ? 
        <div>
          <button className='przycisk' onClick={handleChangePersonDetails}>kliknij mnie!</button>
          <Person name={personList.person[0].name} age={personList.person[0].age} />
          <Person name={personList.person[1].name} age={personList.person[1].age}> 
            {isChilrdenFlag ? 'i lubie zeglowac!' : 'lub kocham narty!'} 
          </Person>
          <Person name={personList.person[2].name} age={personList.person[2].age} />
        </div> : 
        null}

      </header>
    </div>
  );
}

export default App;
