import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home'; // Importa el componente Home
import LCK from './LCK';
import LPL from './LPL';
import LEC from './LEC';
import LCS from './LCS';
import Worlds from './Worlds';
import MSI from './MSI';
import Signup from './signup';
import Login from './login';

const App = () => {
  return (
    <Router>
      <div>
        <header style={{ marginTop: '20px', marginRight: '10px', textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
          <h1 style={{ margin: '0', padding: '20px' }}><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Leaguevids</Link></h1>
          <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/signup" style={{ color: '#fff' }}>Sign Up</Link></li>
              <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/login" style={{ color: '#fff' }}>Log in</Link></li>
              <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/LCK" style={{ color: '#fff' }}>LCK</Link></li>
              <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/LPL" style={{ color: '#fff' }}>LPL</Link></li>
              <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/LEC" style={{ color: '#fff' }}>LEC</Link></li>
              <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/LCS" style={{ color: '#fff' }}>LCS</Link></li>
              <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/Worlds" style={{ color: '#fff' }}>Worlds</Link></li>
              <li style={{ display: 'inline', marginRight: '10px' }}><Link to="/MSI" style={{ color: '#fff' }}>MSI</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/LCK" element={<LCK />} />
          <Route path="/LPL" element={<LPL />} />
          <Route path="/LEC" element={<LEC />} />
          <Route path="/LCS" element={<LCS />} />
          <Route path="/Worlds" element={<Worlds />} />
          <Route path="/MSI" element={<MSI />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
