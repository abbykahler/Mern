import React from "react";
import { navigate } from "@reach/router";

const ViewButton = (props) => {
    const { petID } = props;

    const viewClicked = (event) => {
        navigate(`/pets/${petID}`);
    }

    return (
        <>
            {/* <a  onClick={viewClicked}>details</a> */}
            <a href="" onClick={viewClicked}>details</a>
        </>
    )
}

export default ViewButton;