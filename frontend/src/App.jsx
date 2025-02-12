import { Header } from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './view/Home'
import { Artists } from './view/Artists'
import { Artist } from './view/Artist'
import { Song } from './view/Song'
import { Songs } from './view/Songs'

export function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  )
}
