import { useState } from "react";
import "./App.css";

function App() {

  //state
  const [answer, setAnswer] =  useState("");
  const [expression, setExpression] = useState("");

  const et = expression.trim();  //Remove spaces 

  const buttonPress = (symbol: string) => {
    
    const isOperator = (symbol: string) => {
      return /[*/+-]/.test(symbol);  //return true if the symbol is operator
    };

    const calculate = () => {
      //if last char is an operator, do nothing
      if (isOperator(et.charAt(et.length - 1))) return;

      // clean the expression so that two operator in a row uses the last operator
      //5 * - + 5 = 10
      const parts = et.split(" ");
      const newParts = [];


      //go through parts backwards
      for (let i = parts.length - 1; i >= 0; i--) {
        if(["*", "/", "+"].includes(parts[i]) && isOperator(parts[i - 1])){
          newParts.unshift(parts[i]);
          let j = 0;
          let k = i - 1;
          while (isOperator(parts[k])){
            k--;
            j++;
          }
          i -= j;
        } else {
          newParts.unshift(parts[i]);
        }
      }

      const newExpression = newParts.join(" ");
      if(isOperator(newExpression.charAt(0))) {
        setAnswer(eval(answer + newExpression) as string)
      } else {
        setAnswer(eval(newExpression) as string)
      }
      setExpression("");
    };


    if (symbol === "clear"){
      setAnswer("");
      setExpression("0");
    }else if (symbol === "negative"){
      if(answer === "") return;
      setAnswer(answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer);
    }else if (symbol === "percent"){
      if(answer === "") return;
      setAnswer((parseFloat(answer)/100).toString());
    }else if (isOperator(symbol)){
      setExpression(et + " " + symbol + " ");
    }else if (symbol === "="){
      calculate();
    }else if (symbol === "0"){
      if(expression.charAt(0) !== "0"){
        setExpression(expression + symbol);
      }
    }else if (symbol === "."){
      //split by operators and get the last number
      const lastNumber = expression.split(/[-+/*]/g).pop();             //the split(/[-+/*]/) eg 12+34*56  => ["12", "34", "56"]   .pop() removes the last element from an array. it would return "56"
      // if last number already has a decimal, dont add another
      if(lastNumber?.includes(".")) return;
      setExpression(expression + symbol);
    }else{
      if(expression.charAt(0) === "0"){
        setExpression(expression.slice(1)+symbol);
      }else{
        setExpression(expression + symbol);
      }
    }

  };
  
  return (
    <>
      <div className="container">
        <div id="calculator">

          <div id="display" style={{textAlign:"right"}}>
            <div id="answer">{answer}</div>
            <div id="expression">{expression}</div>
          </div>
          
          <button id="clear" className="light-gray" style={{color: "red"}} onClick={() => buttonPress("clear")} >C</button>
          <button id="negative" className="light-gray" onClick={() => buttonPress("negative")} >+/-</button>
          <button id="percent" className="light-gray" onClick={() => buttonPress("percent")} >%</button>
          <button id="divide" className="yellow" onClick={() => buttonPress("/")} >/</button>
          <button id="seven" className="dark-gray" onClick={() => buttonPress("7")} >7</button>
          <button id="eight" className="dark-gray" onClick={() => buttonPress("8")} >8</button>
          <button id="nine" className="dark-gray" onClick={() => buttonPress("9")} >9</button>
          <button id="multiply" className="yellow" onClick={() => buttonPress("*")} >x</button>
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
          <button id="equals" className="yellow" style={{backgroundColor: "green", color: "white"}} onClick={() => buttonPress("=")} >=</button>
          
        </div>
      </div>
    </>
  );
}

export default App;
