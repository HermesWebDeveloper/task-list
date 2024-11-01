import { useState } from "react";
import TaskList from "./TaskList";
import Task from "./Task";
import useLocalStorage from './useLocalStorage';


function NewTask () {

    // const [tarefas, setTarefas] = useState([]);
    const [tarefas, setTarefas] = useLocalStorage('tarefas', []);
    const [novaTarefa, setNovaTarefa] = useState('');

    function handleChangeNovaTarefa(event) {
        setNovaTarefa(event.target.value);
    };

    function adicionarTarefa (event) {
        event.preventDefault();
        if (novaTarefa === '') return; 

        // Declarando o id
        const id = tarefas.length + 1;

        // Adicionando nova tarefa como objeto
            setTarefas([...tarefas, {
                id: id,
                description: novaTarefa,
                status: false,
        }]);

        // Limpando nova tarefa e, consequentemente, o input
        setNovaTarefa('');
    };
    
    function excluirTarefa(id) {
        // Filtra a lista de tarefas para remover a tarefa com o id correspondente
        const novaLista = tarefas.filter(tarefa => tarefa.id !== id);
        setTarefas(novaLista);  
    }

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
            <div className="mx-auto w-[550px]">
                <h2>Lista</h2>
                <div>
                    <ul>
                        {tarefas.map( (tarefa) => (
                            <Task key={tarefa.id} tarefa={tarefa} excluirTarefa={excluirTarefa} tarefas={tarefas} setTarefas={setTarefas} id={tarefa.id}/>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NewTask;