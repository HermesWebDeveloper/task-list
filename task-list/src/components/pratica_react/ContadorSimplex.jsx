import { useState } from 'react'

function ContadorSimples() {

    const [ contador, setContador ] = useState(0);

    function contar () {
        setContador(contador+1);
    };

    function descontar() {
        setContador(contador-1);
    };

    return(
        <>
            <h3 className="text-2xl font-bold">1. Contador Simples</h3>
            <p className="text-sm">Criar um componente de contador que aumenta ou diminui o valor.</p>
            <button className='border border-gray-600 py-1 px-2 my-2 rounded-lg mr-1' onClick={contar}>Contar</button>
            <button className='border border-gray-600 py-1 px-2 my-2 rounded-lg ml-1' onClick={descontar}>Descontar</button>
            <p>Contador: <span>{contador}</span></p>
        </>
    )
}

export default ContadorSimples;