import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Teams from './pages/Teams';
import './index.css';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer />  
    </BrowserRouter>
  );
}

export default App;