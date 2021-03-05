import React from "react";
import { Link } from "@reach/router";
import react,{useState,useEffect} from "react";
import axios from "axios";

const EditPirate = (props) => {
    const[pirate, setPirate] =useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + pirate.id)
            .then(response => setPirate(response.data))
    }, [])

    return (
        <div>
            <h1>Deep Sea Davy</h1>
            <img src={pirate.image} width="150" />
            <h3>"{pirate.chests}"</h3>
            <h3>About:</h3>
            <h4>Position: {pirate.crew}</h4> 
            <h4>Treasures: {pirate.chests}</h4> 
            <h4>Peg Leg: </h4>
            <h4>Eye Patch: </h4>
            <h4>Hook Hand: </h4> 
        </div>
    )
}

export default EditPirate;