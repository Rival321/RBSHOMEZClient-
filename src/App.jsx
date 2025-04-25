import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Test from './pages/Test';
import Home from './pages/Home';
import Login from './pages/Login';
import PropertyDetails from './pages/PropertyDetails';
import Testing from './pages/Testing';
import Gallery from './pages/Gallery';


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/properties" element={<PropertyDetails />} />
          <Route path= "/testing" element={<Testing />} />
          <Route path= "/test" element={<Test />} />
          <Route path= "/gallery" element={<Gallery />} />
          {/* Add more routes here as you create more pages */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
