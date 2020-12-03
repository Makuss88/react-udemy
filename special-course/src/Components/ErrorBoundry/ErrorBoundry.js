/* eslint-disable no-undef */
import React, { useState } from 'react';

const ErrorBoundry = (props) => {

  const [hasError, setHasError] = useState(false);
  const [errorMassage, setErrorMassage] = useState('');

  componentDidCatch = (error, info) => {
    setHasError(true);
    setErrorMassage(error)
  }

  if (hasError) {
    return <h1>{errorMassage}</h1>
  } else {
    return props.children
  }
}

export default ErrorBoundry;