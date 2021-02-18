import React, {useState} from 'react';

const FetchPokemon = (props) => {
    const [state, setState] = useState([]);
    const getPokemon = () => {
        fetch(' https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => {setState(response.results)
            })
    }

    return (
    <div>
        <button type="submit" onClick={getPokemon}>Fetch Pokemon</button>
        {state.map( (poke, index) => {
            return (<li key={index}>{poke.name}</li>)
            })
        }
    </div>
);
}
export default FetchPokemon;