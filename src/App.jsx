import { useState } from "react";
import Results from "./components/Result.jsx";

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]:  +newValue
        };
  });
  }
  
  return (
    <div>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">enter duration greater than zero</p>}
      {inputIsValid && <Results userInput={userInput}/>}
    </div>
  )
}

export default App
