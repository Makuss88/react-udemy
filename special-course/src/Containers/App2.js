import React, { useState } from 'react';
import styled from 'styled-components'

import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'


const StyledLI = styled.li`
  background: blue;
  color: white;
  ::marker {
    color: black
  }
`

const App2 = () => {
  const [inputText, setInputText] = useState('');
  const [lengthOfText, setLengthOfText] = useState(0);
  
  const handleChangeText = (event) =>  {  
    const userChangeText = event.target.value
    setInputText(userChangeText);
    setLengthOfText(userChangeText.length);
  }

  const deleteComponent = (index) => {
    const copyCharText = inputText.split('');
    copyCharText.splice(index, 1);
    const updateText = copyCharText.join('')    
    setInputText(updateText)
    setLengthOfText(updateText.length)
  }

  const charText = inputText.split('').map((char, index) => {
    return <CharComponent 
      text={char} 
      key={index}
      clicked={() => deleteComponent(index)}/>
  })

  return (
    <div className="App">
      <ol>
        <StyledLI>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</StyledLI>
        <li>Create a new component (= ValidationComponent) which receives the text length as a prop</li>
        <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
        <li>Create another component (= CharComponent) and style it as an inline box (= display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
        <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
        <li>When you click a CharComponent, it should be removed from the entered text.</li>
      </ol>   
      <input type="text" onChange={(event) => handleChangeText(event)}  value={inputText} />
      <p> napis to {inputText} </p>
      <ValidationComponent length={lengthOfText}/>
      {charText}
    </div>    
  )
}

export default App2;