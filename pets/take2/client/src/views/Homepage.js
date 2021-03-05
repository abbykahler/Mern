import React from "react";
import { Link } from "@reach/router";
import PetsTable from "../components/PetsTable";
// import axios from "axios";

const Homepage = (props) => {
    const { pets, setPets } = props;

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/pets")
    //         .then((res) => {})
    //         .catch((err) => { console.log(err); })
    // }, [setPets]);

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