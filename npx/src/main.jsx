import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cartilla from './Cartilla.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cartilla> </Cartilla>
  </StrictMode>,
)
