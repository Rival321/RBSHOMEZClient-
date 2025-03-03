import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/properties" element={<PropertyDetails />} />
          {/* Add more routes here as you create more pages */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
