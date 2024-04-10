
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './assets/components/static/Navbar/Navbar';
import Footer from './assets/components/static/Footer/Footer';
import Home from './assets/components/pages/home/Home';
import About from './assets/components/pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/quem-somos" element={<About />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
