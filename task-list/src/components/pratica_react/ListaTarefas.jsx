import { useState } from "react";


function ListaTarefas() {
	
    const [listaTarefas, setListaTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState();

    function adicionarTarefa() {
        setListaTarefas([...listaTarefas, novaTarefa]);
    };

    function alterarNovaTarefa(event) {
        setNovaTarefa(event.target.value);
    };

    return(
        <>
            <h3 className="text-2xl font-bold">3. Lista de Tarefas</h3>
            <p className="text-sm">Criar uma lista de tarefas usando o estado.</p>
            <p>Digite uma nova tarefa:</p>
            <input type='text' className='border border-gray-600 rounded-lg my-2 py-1 px-2 mr-1' onChange={alterarNovaTarefa}></input>
            <button className='border border-gray-600 py-1 px-2 my-2 rounded-lg ml-1' onClick={adicionarTarefa}>Adicionar</button>
            <h4>Lista de tarefas:</h4>
            <ol className="list-disc list-inside">
                {
                    listaTarefas.map( (tarefa) => (
                        <li>{tarefa}</li>
                    ))
                }
            </ol>
        </>
    )
};

export default ListaTarefas;