import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const PiratesTable = (props) => {
    const { pirates, setPirates } = props;
    


    return (
        <div>
            <table>
                <tbody>
                    {pirates.map((pirate, idx) => {
                        return (
                            <tr key={pirate._id}>
                                <td>{pirate.name}</td>
                                <td><EditButton pirateID={pirate._id} />
                                    <DeleteButton pirate={pirate} setPirates={setPirates} pirateID={pirate._id} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PiratesTable;