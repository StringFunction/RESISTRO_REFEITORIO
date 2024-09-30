import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProviderApp } from './context/ContextAuth'

createRoot(document.getElementById('root')).render(

    <ProviderApp>
    <App />
    </ProviderApp>


)
