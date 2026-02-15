import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
const navigate = useNavigate();

return (
  <div className="landing-page">
    <div className="landing-overlay">
      <div className="landing-content">
        <h1 className="company-name">ConferenceHub Pro</h1>
        <p className="company-description">
          Welcome to ConferenceHub Pro, your premier partner in creating 
          unforgettable conference experiences. We specialize in providing 
          world-class convention center facilities, state-of-the-art audio-visual 
          equipment, and exceptional catering services. With over 15 years of 
          experience in the industry, we've helped organize thousands of successful 
          conferences, seminars, and corporate events. Our flexible pricing and 
          customizable packages ensure that whether you're planning an intimate 
          workshop or a large-scale international conference, we have the perfect 
          solution for you. Let us handle the logistics while you focus on creating 
          meaningful connections and delivering impactful content.
        </p>
        <button 
          className="get-started-btn"
          onClick={() => navigate('/products')}
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
);
};

export default LandingPage;