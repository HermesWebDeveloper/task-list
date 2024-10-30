import AlterarTema from "./AlterarTema";
import ContadorSimples from "./ContadorSimplex";
import ContagemCliques from "./ContagemCliques";
import InputText from "./InputText";
import ListaTarefas from "./ListaTarefas";


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
        </>
    )
}

export default UseState;