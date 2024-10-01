import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './components'
import './style/Index.css'
import Header from './components/Header'
import NewTask from './components/NewTask'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-mono'>
      <Header />  
      <NewTask />
      <Index />
    </div>
  </StrictMode>,
)
