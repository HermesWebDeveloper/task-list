import Task from "./Task";


function TaskList (props) {

    return (
        <>
            <div className="mx-auto w-[550px]">
                <h2>Lista</h2>
                <div>
                    <ul>
                        {props.tarefas.map( (tarefa) => (
                            <Task tarefa={tarefa}/>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TaskList;