import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import BellaTavola from './pages/BellaTavola'
import DeliciasArabes from './pages/DeliciasArabes'
import CantinhoLusitano from './pages/CantinhoLusitano'
import JardimDaTerra from './pages/JardimDaTerra'
import PlazzaDelForno from './pages/PlazzaDelForno'
import SakuraSushi from './pages/SakuraSushi'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/1" element={<BellaTavola />} />
    <Route path="/4" element={<CantinhoLusitano />} />
    <Route path="/2" element={<DeliciasArabes />} />
    <Route path="/6" element={<JardimDaTerra />} />
    <Route path="/5" element={<PlazzaDelForno />} />
    <Route path="/3" element={<SakuraSushi />} />
  </Routes>
)

export default Rotas
