import React from "react";

export default function OptionSelection({ arrayItems , SelectOption}) {
    return (
        <>
            <h1 className="heading">React AI App</h1>
            <div className="grid-main">
                {arrayItems.map((item) => {
                    return (
                        <div className="grid-child" onClick={()=>SelectOption(item.option)}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}