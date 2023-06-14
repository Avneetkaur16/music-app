import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Sidebar from "./components/Sidebar";
import SearchPage from "./pages/SearchPage"
import SongPage from "./pages/SongPage";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";

function App() {

  return (
    <>
    <div className="flex">
      
      
      <Sidebar />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/song/:id" element={<SongPage />} />
          <Route path="/album/:albumId" element={<AlbumPage />} />
          <Route path="/artist/:artistId" element={<ArtistPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
