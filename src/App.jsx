import { Component, useState } from 'react'
import './App.css';
import {Configuration,OpenAIApi} from 'openai'
import OptionSelection from "./component/OptionSelection";
import Translation from './component/Translation';
import { arrayItems } from "./AIOptions";
function App() {
   const configuration =new Configuration({
      apiKey: "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",
   });
   const openai = new OpenAIApi(configuration) ; 
   const [option, setOption] = useState({});
   const [input, setInput] = useState({});
   //  console.log(import.meta.env.VITE_OPEN_AI_KEY);
   //  console.log(arrayItems);
   const SelectOption = (option) => {
      setOption(option);
   };
   const doStuff = async() => {
      let object={...option, prompt:input};
     const response = await openai.createCompletion(object);
     console.log(response);

    };
    
   //converts it into an array of values
   return (<div className='App'>

      {Object.values(option).length === 0 ? (
         <OptionSelection arrayItems={arrayItems} SelectOption={SelectOption} />)
         : (<Translation doStuff={doStuff} setInput={setInput} />)}
   </div>
   );
}

export default App;
