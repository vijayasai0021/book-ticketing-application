import './App.css';
import { Routes, Route } from "react-router-dom";
 
// react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import pages
import Homepage from './pages/Home.page';
import Moviepage from './pages/Movie.page.jsx';
import Playspage from './pages/Plays.page.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/movie/:id" element={<Moviepage />} />
      <Route path="/plays" element={<Playspage />} />
    </Routes>
  );
}

export default App;
