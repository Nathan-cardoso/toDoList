import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskPage from './components/pages/TaskPage.jsx'
// Utilizando o React Router para gerenciar rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// tornando o conteúdo do App acessível através de uma rota default
let router = createBrowserRouter([
  { path: '/', 
    element: <App />
  },
  {
    path: '/task',
    element: <TaskPage />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
