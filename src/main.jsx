import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './components/global/bodies.css'
import './components/global/buttons.css'
import './components/global/card.css'
import './components/global/input.css'
import './components/global/integrate.css'
import './components/global/systemImages.css'
import './components/global/systemReports.css'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
