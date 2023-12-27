import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './components/experience.jsx'
import General from './components/general.jsx'
import Education from './components/education.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
    <Experience />
    <Education />
  </React.StrictMode>,
)
