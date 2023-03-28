import { Component, useState } from 'react'
import './App.css';
import OptionSelection from "./component/OptionSelection";
import Translation from './component/Translation';
import {arrayItems} from "./AIOptions";
function App() {
   const[option,setOption]=useState({});
   const [input,setInput] = useState({});
//  console.log(import.meta.env.VITE_OPEN_AI_KEY);
//  console.log(arrayItems);
const SelectOption= (option) =>{
   setOption(option);
};
const doStuff=()=>{};
console.log(input); //converts it into an array of values
 return (<div className='App'>
    
   { Object.values(option).length===0?(
   <OptionSelection arrayItems={arrayItems}SelectOption={SelectOption}/>)
    :(<Translation doStuff={doStuff} setInput={setInput}/>)}
 </div>
 );
}

export default App;
