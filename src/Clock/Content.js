import React from 'react'
import { useState } from "react";

export default function MyComponent() {
  const [error, setError] = useState(true);
  const validateField = (e) => {
    setError(e.target.value.indexOf("@") === -1 ? true : false);
  };
  const handleEmailSubmit = (e) => {
    if (error) {
      alert("please enter correct e-mail");
    } else {
      return null;
    }
  };
  return (
    <div className="App">
      <input type="text" onChange={(e) => validateField(e)}></input>
      <button onClick={() => handleEmailSubmit()}>Submit E-mail</button>
    </div>
  );
}