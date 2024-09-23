import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantePage from './pages/Restaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestaurantePage />} />
  </Routes>
)

export default Rotas
