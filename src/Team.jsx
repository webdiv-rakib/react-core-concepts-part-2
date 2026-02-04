import { useState } from "react"

export default function Team() {
    // set userState
    const [team, setTeam] = useState(11);

    // add event handler
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () => {
        const removePlayer = team - 1;
        setTeam(removePlayer);
    }
    // styles
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add Players</button>
            <button onClick={handleRemove}>Remove Players</button>
        </div>
    )
}