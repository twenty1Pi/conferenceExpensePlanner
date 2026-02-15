import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductSelection from './components/ProductSelection';
import './App.css';

function App() {
return (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductSelection />} />
    </Routes>
  </Router>
);
}

export default App;