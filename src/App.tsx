import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PracticeArea from './pages/PracticeArea';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dreptul-insolventei" element={<PracticeArea area="dreptul-insolventei" />} />
            <Route path="/dreptul-contencios-administrativ-si-fiscal" element={<PracticeArea area="dreptul-contencios-administrativ-si-fiscal" />} />
            <Route path="/drept-comercial" element={<PracticeArea area="drept-comercial" />} />
            <Route path="/drept-contraventional" element={<PracticeArea area="drept-contraventional" />} />
            <Route path="/dreptul-familiei" element={<PracticeArea area="dreptul-familiei" />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
