
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProviders from './Components/ThemeProviders.jsx'

createRoot(document.getElementById('root')).render(
     <ThemeProviders>
     <App />
     </ThemeProviders>

 
)
