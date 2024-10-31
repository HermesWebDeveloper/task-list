import { useState } from "react";
import TaskList from "./TaskList";


function NewTask () {

    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    function handleChangeNovaTarefa(event) {
        setNovaTarefa(event.target.value);
    };

    function adicionarTarefa (event) {
        event.preventDefault();
        if (novaTarefa === '') return; 
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa('');
        console.log('Lista:' + tarefas);
    };

    return(
        <>
            <hr className="border w-[550px] mx-auto"></hr>
            <div className="flex justify-center p-2 flex-row">
                <form className="flex flex-col">
                    <label className="my-2">Digite uma nova tarefa:</label>
                    <div>
                        <input type="text" className="border rounded w-96" value={novaTarefa} onChange={handleChangeNovaTarefa}></input>
                        <button className="border px-4 mx-2" onClick={adicionarTarefa}>Adicionar</button>
                    </div>
                </form>
            </div>
            <hr className="border w-[550px] my-4 mx-auto"></hr>
            <TaskList tarefas={tarefas}/>
        </>
    )
}

export default NewTask;