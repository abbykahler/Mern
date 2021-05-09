import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import DeleteButton from '../components/DeleteButton'

const ViewPet = (props) => {
    const petID = props._id;
    const [pet, setPet] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${petID}`)
            .then((res) => {if (res.data.name !== undefined) {
                setPet(res.data)
                }
            })
            .catch((err) => {console.log(err);})
    })

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to='/'>back to home</Link><br />
            <h2>Details about: {pet.name}</h2>
            <DeleteButton petName={pet.name} petID={pet._id} />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h3>Pet type: </h3>
                        </td>
                        <td>
                            <h3>{pet.type}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Description: </h3>
                        </td>
                        <td>
                            <h3>{pet.description}</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Skills:</h3>
                        </td>
                        <td>
                            <h3>{pet.skill1} <br/>
                                {pet.skill2}<br/>
                                {pet.skill3}</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ViewPet;