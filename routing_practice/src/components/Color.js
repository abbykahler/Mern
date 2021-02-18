import React from 'react';

const Color = ({word, color, backgroundColor}) => {
    return (
        <div>
            <h1 style ={{backgroundColor,color: word ? color : ""}}> The word is: {word}</h1>
        </div>
    );
}

export default Color;