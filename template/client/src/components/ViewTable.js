import React from "react";
import Loading from "./Loading";
import DeleteButton from "../components/DeleteButton";
import EditButton from "./EditButton";

const ViewTable = (props) => {
    const { author, setAuthor } = props;
    const { view } = props;

    if (author === []) {
        return (
            <Loading />
        )
    }

    return (
        <>
            {/* <img src={author.image} width="100"></img> */}
            <h2>""</h2>
                <h2>About</h2>
                <h4>Position:</h4>
                <h4>Treasures: </h4>
                <h4>Peg Leg:</h4>
                <h4>Eye Patch:</h4>
                <h4>Hook Hand:</h4>
                
        </>
    )
    
        
                


}

export default ViewTable;