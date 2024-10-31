import { useEffect, useState } from "react";


function Task ({id, tarefa, tarefas, setTarefas, excluirTarefa}) {   

    const [isChecked, setIsChecked] = useState(false);
    
    function handleChangeCheckbox (event) {
        setIsChecked(event.target.checked)
        setTarefas(tarefas.map(tarefa => 
            tarefa.id === id ? { ...tarefa, status: event.target.checked } : tarefa
        ));        
        console.log(isChecked)
    }

    const class1 = 'line-through';

    return (
        <>
            <li>
                <input 
                    type="checkbox" 
                    className="mr-2" 
                    value={isChecked}
                    onChange={handleChangeCheckbox}
                ></input>
                <span className={tarefa.status ? class1 : ''}>{tarefa.description}</span>
                <button
                    onClick={() => excluirTarefa(tarefa.id)}
                    className="text-red-500 hover:text-red-700 font-bold text-xl ml-4"
                    >
                    &times;
                </button>
            </li>
        </>
    )
}

export default Task;