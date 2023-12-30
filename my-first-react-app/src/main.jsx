import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app'><App /></div>
  </React.StrictMode>,
)
