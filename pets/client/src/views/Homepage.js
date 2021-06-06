import React from "react";
import { Link } from "@reach/router";
import PetsTable from "../components/PetsTable";


const Homepage = (props) => {
    const { pets, setPets } = props;

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to="/pets/new">add a pet to the shelter</Link>
            <p>These pets are looking for a good home</p>
            <PetsTable pets={pets} setPets={setPets} />
        </div>
    )
};
export default Homepage;