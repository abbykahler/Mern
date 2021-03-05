import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios"
import Form from "../components/Form";


const EditPet = (props) => {
    console.log(props)
    let petID = props._id
    console.log("petID: " + petID)
    const [pet, setPet] = useState([])

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${petID}`)
            .then((res) => {
                console.log(res)
                setPet(res.data)
            })
            .catch((err) => { console.log(err); })
    }, [petID]);


    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
            <h2>Edit {pet.name}</h2>
            <Form action="update" petID={petID} />
        </div>
    )
}

export default EditPet;