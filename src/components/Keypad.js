// Code Keypad Component Here
import React from "react";

// Console log on button click
function handleChange(){
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={handleChange}/>
        </div>
    )
}

export default Keypad;