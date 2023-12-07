import { useState } from "react";
import "./App.css";

function App() {

  const buttonPress = (symbol: string) => {
    console.log(symbol);
  };
  
  return (
    <>
      <div className="container">
        <h1>Calculator App</h1>
        <div id="calculator">

          <div id="display">
            <div id="answer"></div>
            <div id="expression"></div>
          </div>
          
          <button id="clear" className="light-gray" onClick={() => buttonPress("clear")} >C</button>
          <button id="negative" className="light-gray" onClick={() => buttonPress("negative")} >+/-</button>
          <button id="percentage" className="light-gray" onClick={() => buttonPress("percentage")} >%</button>
          <button id="divide" className="yellow" onClick={() => buttonPress("/")} >/</button>
          <button id="seven" className="dark-gray" onClick={() => buttonPress("7")} >7</button>
          <button id="eight" className="dark-gray" onClick={() => buttonPress("8")} >8</button>
          <button id="nine" className="dark-gray" onClick={() => buttonPress("9")} >9</button>
          <button id="multiply" className="yellow" onClick={() => buttonPress("*")} >*</button>
          <button id="four" className="dark-gray" onClick={() => buttonPress("4")} >4</button>
          <button id="five" className="dark-gray" onClick={() => buttonPress("5")} >5</button>
          <button id="six" className="dark-gray" onClick={() => buttonPress("6")} >6</button>
          <button id="subtract" className="yellow" onClick={() => buttonPress("-")} >-</button>
          <button id="one" className="dark-gray" onClick={() => buttonPress("1")} >1</button>
          <button id="two" className="dark-gray" onClick={() => buttonPress("2")} >2</button>
          <button id="three" className="dark-gray" onClick={() => buttonPress("3")} >3</button>
          <button id="add" className="yellow" onClick={() => buttonPress("+")} >+</button>
          <button id="zero" className="dark-gray" onClick={() => buttonPress("0")} >0</button>
          <button id="decimal" className="dark-gray" onClick={() => buttonPress(".")} >.</button>
          <button id="equals" className="yellow" onClick={() => buttonPress("=")} >=</button>
          
        </div>
      </div>
    </>
  );
}

export default App;
