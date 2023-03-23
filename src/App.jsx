import { Component, useState } from 'react'
import './App.css';
import OptionSelection from "./component/OptionSelection";
import {arrayItems} from "./AIOptions";
function App() {
//  console.log(import.meta.env.VITE_OPEN_AI_KEY);
 console.log(arrayItems);
 return (<div className='App'>
    <OptionSelection arrayItems={arrayItems}/>
 </div>
 );
}

export default App;
