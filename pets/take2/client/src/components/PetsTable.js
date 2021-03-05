import React from "react";
import Loading from "./Loading";
import ViewButton from "./ViewButton";
import EditButton from "./EditButton";

const PetsTable = (props) => {
    const { pets, setPets } = props;

    if (pets === []) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h3>Name</h3>
                        </td>
                        <td>
                            <h3>Type</h3>
                        </td>
                        <td>
                            <h3>Actions</h3>
                        </td>
                    </tr>
                    {pets.map((pet, idx) => {
                        return (
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><ViewButton action="view" petID={pet._id} />|   
                                    <EditButton action="edit" petID={pet._id} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PetsTable;