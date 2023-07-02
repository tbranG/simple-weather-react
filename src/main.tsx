import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import EntryPage from './pages/entryPage/entryPage'
import WeatherPage from './pages/weatherPage/weatherPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EntryPage />} />
        <Route path='/weather' element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
