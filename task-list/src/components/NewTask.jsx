

function NewTask () {

    return(
        <>
            <hr className="border w-[550px] mx-auto"></hr>
            <div className="flex justify-center p-2 flex-row">
                <form className="flex flex-col">
                    <label className="my-2">Digite uma nova tarefa:</label>
                    <div>
                        <input type="text" className="border rounded w-96"></input>
                        <button className="border px-4 mx-2">Adicionar</button>
                    </div>
                </form>
            </div>
            <hr className="border w-[550px] my-4 mx-auto"></hr>
        </>
    )
}

export default NewTask;