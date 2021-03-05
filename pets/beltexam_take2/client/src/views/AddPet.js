import React from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";

const AddPet = (props) => {

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
            <p>Know a pet needing a home?</p>
            <Form action="create" />
        </div>
    )
}

export default AddPet;