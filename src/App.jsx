import { Component, useState } from 'react'
import './App.css'
import OptionSelection from "./component/OptionSelection";
function App() {
 console.log(import.meta.env.VITE_OPEN_AI_KEY);
 return (<div className='App'>
    <OptionSelection/>
 </div>
 );
}

export default App;
