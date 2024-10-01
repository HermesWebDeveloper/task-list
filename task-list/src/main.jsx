import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './components'
import './style/Index.css'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-mono'>
      <Header />  
      <Index />
    </div>
  </StrictMode>,
)
