import { useState } from "react";



function Login () {

    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();
    const [credenciais, setCredenciais] = useState([]);

    function handleChangeUsuario (event) {
        setUsuario(event.target.value);
    };

    function handleChangeSenha (event) {
        setSenha(event.target.value)
    };

    function logar (event) {
        event.preventDefault();
        setCredenciais([usuario, senha]);
    };

    return(
        <>
            <h3 className="text-2xl font-bold">6. Login Simples</h3>
            <p className="text-sm">Criar um componente de formulário de login que altera o estado com as credenciais inseridas.</p>
            <form className="flex flex-col">
                <div>
                    <label className="mr-2">Usuário:</label>
                    <input className='border border-gray-600 rounded-lg m-1 py-1 px-2' type="text" onChange={handleChangeUsuario}></input>
                </div>
                <div>
                    <label className="mr-2">Senha:</label>
                    <input className='border border-gray-600 rounded-lg m-1 py-1 px-2' type="password" onChange={handleChangeSenha}></input>
                </div>
                <div>
                    <button className='border border-gray-600 py-1 px-2 my-2 rounded-lg' type="submit" onClick={logar}>Logar</button>
                </div>
            </form>
            <div>
                <p>Usuário: <span>{credenciais[0]}</span></p>
                <p>Senha: <span>{credenciais[1]}</span></p>
            </div>
        </>
    )
};

export default Login;