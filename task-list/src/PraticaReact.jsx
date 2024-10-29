import ContadorSimples from "./components/pratica_react/ContadorSimplex";
import UseState from "./components/pratica_react/UseState";


function PraticaReact() {

    return (
        <>
            <div className="bg-slate-800">
                <div className="mx-40 my-20 bg-gray-200 text-slate-800 px-10 py-5">
                    <UseState />
                    <ContadorSimples />
                </div>
            </div>
        </>
    )
}

export default PraticaReact;