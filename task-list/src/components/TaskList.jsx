import Task from "./Task";


function TaskList () {

    const lista_tarefas = [
        ['Tarefa1', 'feito'], 
        ['Tarefa2', 'nfeito'],
    ];

    return (
        <>
            <div className="mx-auto w-[550px]">
                <h2>Lista</h2>
                <div>
                    <ul>
                        {lista_tarefas.map( (tarefa) => (
                            <Task tarefa={tarefa[0]} status={tarefa[1]}/>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TaskList;