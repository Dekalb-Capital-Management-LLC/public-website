import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Teams from './pages/Teams';
import ScrollToTop from './components/common/ScrollToTop';
import './index.css';
import Footer from './components/layout/Footer';
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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