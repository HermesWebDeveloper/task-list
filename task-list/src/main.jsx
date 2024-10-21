import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/Index.css'
import Header from './components/Header'
import NewTask from './components/NewTask'
import TaskList from './components/TaskList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-mono'>
      <Header />  
      <NewTask />
      <TaskList />
    </div>
  </StrictMode>,
)
