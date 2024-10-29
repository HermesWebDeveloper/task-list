import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TarefasPage from './TarefasPage';
import PraticaReact from './PraticaReact';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/pratica'>
                        <Route index element={<PraticaReact />} />
                    </Route>
                    <Route path='/' element={<TarefasPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;