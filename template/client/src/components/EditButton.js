import React from "react";
import { navigate } from "@reach/router";

const EditButton = (props) => {
    const { authorID } = props;

    const editClicked = (event) => {
        navigate(`/authors/${authorID}`);
    }

    return (
        <>
            <button onClick={editClicked}>View Pirate</button>
        </>
    )
}

export default EditButton;