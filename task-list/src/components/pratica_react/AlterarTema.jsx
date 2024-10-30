import { useState } from "react";


function AlterarTema() {

    const [tema, setTema] = useState('Claro');

    function alterarTema() {
        
        tema === 'Claro' ? setTema('Escuro') : setTema('Claro');
    };

    return(
        <>
            <h3 className="text-2xl font-bold">3. Alterar tema (Claro/Escuro)</h3>
            <p className="text-sm">Criar um botão para alternar o tema entre "claro" e "escuro".</p>
            <button className='border border-gray-600 py-1 px-2 my-2 rounded-lg' onClick={alterarTema}>Alternar</button>
            <p>Tema: <span>{tema}</span></p>
        </>
    )
};

export default AlterarTema;