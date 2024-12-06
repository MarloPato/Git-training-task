import MethodsForCalc from "./MethodsForCalc";
import { useState } from "react";

function Calculator () {
    let a
    let b
    let results

    let [firstField, setFirstField] = useState("")
    let [secondField, setSecondField] = useState("")
    let [operator, setOperator] = useState("")
    let [result, setResult] = useState(null)

    function Calculation () {
        let calculation;

        const a = parseFloat(firstField);
        const b = parseFloat(secondField);
        if(operator == "+") {
            calculation = a + b

        } else if(operator == "-") {
            calculation = a - b

        } else if(operator == "*") {
            calculation = a * b

        } else if(operator == "/") {
            calculation = a / b

        }
        setResult(calculation)
            
    }


    return (
        <>
        <input type="number" onChange={(e) => setFirstField(e.target.value)}/>
        <input type="number" onChange={(e) => setSecondField(e.target.value)}/>
        <br />
        <h2>Result: {result}</h2>
        <div onChange={(e) => setOperator(e.target.value)}>
            <label htmlFor="+">Add</label>
            <input type="radio" name="operator" id="+" value="+" />
            <label htmlFor="-">Subtract</label>
            <input type="radio" name="operator" id="-" value="-" />
            <label htmlFor="*">Multiply</label>
            <input type="radio" name="operator" id="*" value="*" />
            <label htmlFor="/">Divide</label>
            <input type="radio" name="operator" id="/" value="/" />
        </div>
        <button onClick={Calculation}>Click to calculate</button>
        </>
    )
}

export default Calculator;