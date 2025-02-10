import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/LandingPage_React'>
  <StrictMode>
    <App/>
  </StrictMode>
  </BrowserRouter>,
)
