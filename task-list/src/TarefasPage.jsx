import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";


function TarefasPage () {

    return (
        <>
            <div className='font-mono'>
                <Header />  
                <NewTask />
                <TaskList />
            </div>
        </>
    )
}

export default TarefasPage;