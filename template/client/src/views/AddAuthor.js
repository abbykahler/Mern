import React from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";

const AddAuthor = (props) => {

    return (
        <div>
            <h1>Add Pirate</h1>
            <a href="/"><button>Crew Board</button></a>
            <Form action="create" />
        </div>
    )
}

export default AddAuthor;