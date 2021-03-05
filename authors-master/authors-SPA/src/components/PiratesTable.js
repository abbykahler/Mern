import React from "react";
import Loading from "./Loading";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const PiratesTable = (props) => {
    const { pirates, setPirates } = props;

    if (pirates === []) {
        return (
            <Loading />
        )}
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {/* <th>Pirate</th> */}
                    </tr>
                </thead>
                <tbody>
                    {pirates.map((pirate, idx) => {
                        return (
                            <tr key={pirate._id}>
                                <img src="Img{pirate.image}"></img>
                                <td>{pirate.name}</td>
                                <td>{pirate.pegLeg}</td>
                                <td><EditButton pirateID={pirate._id} />
                                    <DeleteButton pirates={pirates} setPirates={setPirates} pirateID={pirate._id} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default PiratesTable;