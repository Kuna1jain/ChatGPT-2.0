import React from 'react';
export default function Translation({doStuff,setInput}) {
    return(
        <div>
           <p>Enter your Prompt</p> 
            <textarea 
            className="text-area" 
            id="ta" 
            cols="50"
            rows="12" 
            onChange={(e) => setInput(e.target.value)} 
            ></textarea>
            <button className='action-btn' onClick={doStuff}>Proceed</button>
            {/* <button>Reset</button> */}
        </div>
    )
};
