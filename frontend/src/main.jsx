import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PublicRouter from './Components/Router/Public/PublicRouter'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PublicRouter />
  </StrictMode>,
)
