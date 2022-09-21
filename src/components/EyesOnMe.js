// Code EyesOnMe Component Here
import React from "react";

// Define callback functions
function handleFocus(){
    console.log('Good!');
}

function handleBlur(){
    console.log('Hey! Eyes on me!');
}

const EyesOnMe = () => {
    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe;