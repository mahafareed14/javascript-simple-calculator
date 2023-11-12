import './App.css'
import { Keypad } from './components/Keypad'
import { Display } from './components/Display'
import { useState } from 'react'
import { operators } from './assets/type'


function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');

  // limiting the number of total digits to 24
  const handlelength = () => {
    if(input.length == 24) {
      setOutput("DIGIT LIMIT EXCEEDED")
      return false;
    }
    return true;
  }
  
  // handle AC button 
   const handleACButton = () => {
    setInput('');
    setOutput('0')
   }
 
  // handling too many zeros 

  const handleZero = () => {
    if(input.length == 1 && input == '0') return;
    else setInput(state => state + '0')
  }
  
  //handle dot operator
  const handleDotOperator = () => {
    const lastChar: string = input.charAt(input.length -1 )
    if(!input.length) {
      setInput('0.');
    } else if(operators.includes(lastChar)) {
      setInput(state => state + '0.');
    } else {
      const lastnumber = input.split(/[-+/*]/g).pop();
      if(lastnumber?.includes('.')) return;
      setInput(state => state + '.')
    }
  } 

  // calculating the result.. 
  const handleResult = () =>  {
    let total: string = input; 
    const lastChar: string = input.charAt(input.length -1 )
    if(operators.includes(lastChar)) {
      total = input.slice(0, input.length -1)
      setInput(total);
    }
    const result : string = eval(total).toString();
    setOutput(result);
    setInput(result);
  }

  const calculateOutput = (key: string) => {
    switch(key) {
    case '.':
      handleDotOperator();
      break;
    case '0': 
        handleZero();
        break;
    case '=': 
        handleResult();
        break;
    default: 
    setInput(state => state + key);
    }
  }

  const processInput = (key: string) => {
    if(key == 'AC') {
      handleACButton();
    } else {
      if(handlelength()) {
        calculateOutput(key);
      }
    }
  }

  return (
    <div className = "container">
      <div className = "calculator">
        <Display input={input} output={output}/>
        <Keypad setInput={processInput}/>
      </div>
    </div>
  )
}

export default App
