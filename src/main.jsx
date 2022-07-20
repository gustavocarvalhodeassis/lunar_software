import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './components/global/style.css'
import Router from './router'
import NavBar from './components/navbar/navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Router />
    {/*<Footer /> */}
  </React.StrictMode>
)
