import './Navbar.css';

const Navbar = ({ onShowDetails, onNavigate, onHome }) => {
return (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-brand" onClick={onHome}>
        ConferenceHub Pro
      </div>
      
      <div className="navbar-links">
        <button onClick={() => onNavigate('rooms')} className="nav-link">
          Rooms
        </button>
        <button onClick={() => onNavigate('addons')} className="nav-link">
          Add-ons
        </button>
        <button onClick={() => onNavigate('meals')} className="nav-link">
          Meals
        </button>
      </div>

      <button onClick={onShowDetails} className="show-details-btn">
        Show Details
      </button>
    </div>
  </nav>
);
};

export default Navbar;