import React from 'react';
import CalculatorTitle from './CalculatorTitle';
import OutputScreen from './OutputScreen';
import Button from './Button';

class Calculator extends React.Component{
    render(){
        return(
            <div>
                <CalculatorTitle value="Calculator" />
                <div>
                    <OutputScreen />
                    <div>
                        <Button label={'Clear'} />
                        <Button label={'Delete'} />
                        <Button label={'.'} />
                        <Button label={'/'} />
                    </div>
                    <div>
                        <Button label={'7'} />
                        <Button label={'8'} />
                        <Button label={'9'} />
                        <Button label={'*'} />
                    </div>
                    <div>
                        <Button label={'4'} />
                        <Button label={'5'} />
                        <Button label={'6'} />
                        <Button label={'-'} />
                    </div>
                    <div>
                        <Button label={'3'} />
                        <Button label={'2'} />
                        <Button label={'1'} />
                        <Button label={'+'} />
                    </div>
                    <div>
                        <Button label={'0'} />
                        <Button label={'='} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;