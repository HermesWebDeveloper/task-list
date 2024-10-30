import { useState } from 'react'

function InputText() {

    const [texto, setTexto] = useState('');

    function handleChangeInput (event) {
        setTexto(event.target.value);
    };

    return(
        <>
            <h3 className="text-2xl font-bold">2. Gerenciador de Input de Texto</h3>
            <p className="text-sm">Criar um campo de entrada de texto que mostra o valor em tempo real.</p>
            <input type='text' className='border border-gray-600 rounded-lg my-2 py-1 px-2' value={texto} onChange={handleChangeInput}></input>
            <p>Texto ao vivo: <span>{texto}</span></p>
        </>
    )
};

export default InputText;