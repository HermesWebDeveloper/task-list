import AlterarTema from "./AlterarTema";
import ContadorSimples from "./ContadorSimplex";
import ContagemCliques from "./ContagemCliques";
import InputText from "./InputText";
import ListaTarefas from "./ListaTarefas";
import Login from "./Login";


function UseState() {

    return(
        <>
            <h2>Treinando useState:</h2>
            <hr className="border-t-2 border-gray-400"></hr>
            <ContadorSimples />
            <hr className="border-t-2 border-gray-400"></hr>
            <InputText />
            <hr className="border-t-2 border-gray-400"></hr>
            <ListaTarefas />
            <hr className="border-t-2 border-gray-400"></hr>
            <AlterarTema />
            <hr className="border-t-2 border-gray-400"></hr>
            <ContagemCliques />
            <hr className="border-t-2 border-gray-400"></hr>
            <Login />
        </>
    )
}

export default UseState;