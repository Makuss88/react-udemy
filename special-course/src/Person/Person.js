const Person = (props) => {

  return (
   <div>
      <h1>
        my name is {props.name}
      </h1>
      <p>
        i mam {props.age} lat {props.children}
      </p>
   </div>  
  )
}

export default Person;