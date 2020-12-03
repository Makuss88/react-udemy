import React from 'react';
import styled from 'styled-components'

const TextStyled = styled.div`
  margin-left: 4px;
  color: red;
`
const DivStyled = styled.div`
  display:flex;
`

const ValidationComponent = (props) => {

  const length = ' ' + props.length;
  const text = "a jego długość to ";

  return (
    <div>
      <DivStyled>
        <div>{text}</div> 
        <TextStyled> {length}</TextStyled>
      </DivStyled>
      {props.length < 5 ? <p> NAME USER TOO SHORT!!! </p> : null}
    </div>
  )

}

export default ValidationComponent;