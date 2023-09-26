// eslint-disable-next-line no-unused-vars
import React from "react"

function CreateButton() {
    return (
    <>
        <h2>Create new task</h2>
        <p>Task name:</p>
        <input type="text" placeholder="Escribe lo que necesitas" className="border-4 rounded-lg"></input>
        <div className="">
            <button className="">Create task</button>
        </div>
    </>
    )
}

export default CreateButton;