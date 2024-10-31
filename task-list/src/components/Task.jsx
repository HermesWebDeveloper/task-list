import { useEffect, useState } from "react";


function Task ({tarefa}) {

    return (
        <>
            <p>
                <input type="checkbox" className="mr-2"></input>
                {tarefa.description}
                <button
                    onClick={() => excluirTarefa(tarefa.id)}
                    className="text-red-500 hover:text-red-700 font-bold text-xl ml-4"
                    >
                    &times;
                </button>
            </p>
        </>
    )
}

export default Task;