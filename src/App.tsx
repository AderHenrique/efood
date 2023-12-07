import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCss } from './styles'

import Footer from './components/Footer'
import Home from './pages/Home'
import VitaTrattoria from './pages/VitaTrattoria'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/trattoria" element={<VitaTrattoria />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
