import React, { useState } from 'react';
import CalculatorTitle from './CalculatorTitle';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
    
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.value));
    }

    const clear = () => {
        setResult("");
    }

    const backspace = () => {
        setResult(result.slice(0, -1));
    } 

    const calculate = () => {
        try{
            setResult(eval(result).toString());
        }
        catch(err){
            setResult("Error")
        }
    }
    
    return(
        <div className="container">
            <CalculatorTitle value="Calculator" />
            <div>
                <form>
                    <input type="text" value={result} />
                </form>
                <div className="keypad">
                    <Button label={'Clear'} handleClick={clear} />
                    <Button label={'Delete'} handleClick={backspace} />
                    <Button label={'.'} handleClick={handleClick} />
                    <Button label={'/'} handleClick={handleClick} />
                {/* </div>
                <div> */}
                    <Button label={'7'} handleClick={handleClick} />
                    <Button label={'8'} handleClick={handleClick} />
                    <Button label={'9'} handleClick={handleClick} />
                    <Button label={'*'} handleClick={handleClick} />
                {/* </div>
                <div> */}
                    <Button label={'4'} handleClick={handleClick} />
                    <Button label={'5'} handleClick={handleClick} />
                    <Button label={'6'} handleClick={handleClick} />
                    <Button label={'-'} handleClick={handleClick} />
                {/* </div>
                <div> */}
                    <Button label={'3'} handleClick={handleClick} />
                    <Button label={'2'} handleClick={handleClick} />
                    <Button label={'1'} handleClick={handleClick} />
                    <Button label={'+'} handleClick={handleClick} />
                {/* </div>
                <div> */}
                    <Button label={'0'} handleClick={handleClick} />
                    <Button label={'='} handleClick={calculate} />
                </div>
            </div>
        </div>
    );
    
}

export default Calculator;