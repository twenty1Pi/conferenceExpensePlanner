import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import RoomSelection from './RoomSelection';
import AddonsSelection from './AddonsSelection';
import MealsSelection from './MealsSelection';
import DetailsModal from './DetailsModal';
import './ProductSelection.css';

const ProductSelection = () => {
const [showModal, setShowModal] = useState(false);
const navigate = useNavigate();

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

return (
  <div className="product-selection">
    <Navbar 
      onShowDetails={() => setShowModal(true)}
      onNavigate={scrollToSection}
      onHome={() => navigate('/')}
    />
    
    <div className="product-content">
      <div className="page-header">
        <h1>Conference Expense Planner</h1>
        <p>Select your rooms, equipment, and catering options</p>
      </div>

      <RoomSelection />
      <AddonsSelection />
      <MealsSelection />
    </div>

    {showModal && <DetailsModal onClose={() => setShowModal(false)} />}
  </div>
);
};

export default ProductSelection;