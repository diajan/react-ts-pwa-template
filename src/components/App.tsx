import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Language from 'components/utils/Language'
import Home from 'pages/Home'

function App() {
  return (
    <div className="App">
      <Language />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
