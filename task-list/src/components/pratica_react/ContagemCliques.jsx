import { useState } from "react"


function ContagemCliques() {

    const [valores, setValores] = useState([0, 0, 0]);

    function adicionarValor(event) {
        const indice =  Number(event.target.value);

        setValores(() => {
            const novosValores = [...valores];
            novosValores[indice] += 1;
            return novosValores;
        })
    }

    return(
        <>
            <h3 className="text-2xl font-bold">4. Contagem de Cliques por Botão</h3>
            <button className='border border-gray-600 py-1 px-2 my-2 rounded-lg' value={0} onClick={adicionarValor}>Botão 1</button>
            <span className="ml-2">{valores[0]}</span>
            <br></br>
            <button className='border border-gray-600 py-1 px-2 my-2 rounded-lg' value={1} onClick={adicionarValor}>Botão 2</button>
            <span className="ml-2">{valores[1]}</span>
            <br></br>
            <button className='border border-gray-600 py-1 px-2 my-2 rounded-lg' value={2} onClick={adicionarValor}>Botão 3</button>
            <span className="ml-2">{valores[2]}</span>
        </>
    )
}

export default ContagemCliques;