import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add element prop with Home component */}
          <Route path="/about" element={<About />}/>
          {/* Add more routes for other pages/components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
