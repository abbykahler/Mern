import React from "react";
import { navigate } from "@reach/router";

const EditButton = (props) => {
    const { pirateID } = props;

    const editClicked = (event) => {
        navigate(`/pirates/edit/${pirateID}`);
    }

    return (
        <>
            <button onClick={editClicked}>View Pirate</button>
        </>
    )
}

export default EditButton;