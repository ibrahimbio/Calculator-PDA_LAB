import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add 1 and 4 to return 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4'); 
    const add = container.getByTestId('operator-add');
    const subtract = container.getByTestId('operator-subtract');
    const divide = container.getByTestId('operator-divide');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
  
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('5')    
  })

  it('should be able to subract 4 from 7 to return 3', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7'); 
    const subtract = container.getByTestId('operator-subtract');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
  
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equal);

    expect(runningTotal.textContent).toEqual('3')    

  })

  it('should be able to multply 3 by 5 to get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5'); 
    const multiply = container.getByTestId('operator-multiply');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
  
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equal);

    expect(runningTotal.textContent).toEqual('15')    


  })

  it('should be able to divide 21 by 7 to get 3', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button7 = container.getByTestId('number7'); 
    const divide = container.getByTestId('operator-divide');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
  
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equal);

    expect(runningTotal.textContent).toEqual('3')   
  })

  it('should be able to concatenate multiple numbers', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');


    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button4);
    fireEvent.click(equal);
    
    expect(runningTotal.textContent).toEqual('1234')  

  })

  it('should be able to chain multiply operators together ()', () => {

    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const multiply = container.getByTestId('operator-multiply');
    const subtract = container.getByTestId('operator-subtract');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

   
    fireEvent.click(button2);
    fireEvent.click(multiply);
    fireEvent.click(button3);
    fireEvent.click(subtract);
    fireEvent.click(button1);
    fireEvent.click(equal);
    
    expect(runningTotal.textContent).toEqual('5')  


  })

  it('should be able to clear the running total without affecting the calculation', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button7 = container.getByTestId('number7'); 
    const add = container.getByTestId('operator-add');
    const equal = container.getByTestId('operator-equals');
    const clear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
  
    fireEvent.click(button2);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(clear);
    fireEvent.click(add);
    fireEvent.click(button7);
    fireEvent.click(equal);

    expect(runningTotal.textContent).toEqual('9')   
  })



})

