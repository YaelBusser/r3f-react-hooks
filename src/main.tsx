import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import {CubeProvider} from "./hooks/context/CubeContext";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CubeProvider>
            <App/>
        </CubeProvider>
    </StrictMode>,
)
