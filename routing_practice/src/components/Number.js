import React from 'react';


const Number = (props) => {
    return(
        // <h1>The number is: {props.number}</h1>
        <h1>The {isNaN(+props.number) ? "word" : "number"} is: {props.number}</h1>   
        
    )
}

export default Number;