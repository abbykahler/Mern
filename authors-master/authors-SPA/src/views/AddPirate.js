import React from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";

const AddPirate = (props) => {

    return (
        <div>
            <Link to="/pirates">Home</Link>
            <h4>Add a new pirate:</h4>
            <Form action="create" />
        </div>
    )
}

export default AddPirate;