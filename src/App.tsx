import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioDetail from './components/PortfolioDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Portfolio />
              <Contact />
            </main>
          } />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;