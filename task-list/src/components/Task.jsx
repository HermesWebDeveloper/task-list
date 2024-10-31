import { useEffect, useState } from "react";


function Task (props) {

    return (
        <>
            <p>
                <input type="checkbox" className="mr-2"></input>
                {props.tarefa}
            </p>
        </>
    )
}

export default Task;