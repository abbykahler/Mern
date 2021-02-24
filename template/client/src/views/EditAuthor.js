import React from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";

const EditAuthor = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Form action="update" authorID={props._id} />
        </div>
    )
}

export default EditAuthor;