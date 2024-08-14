import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Modal from "./component/Modal"; // Ensure the path is correct
import Agent  from "./pages/agent/agent"; // Import the Agent page component
import ProfilePage from "./pages/Profile/profilepage"; // Corrected path to ProfilePage component

function App() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleGenerateOtp = () => {
    setShowModal(true);
    navigate("/agent"); // Navigate to the agent page
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="container-1">
        <h1 className="company-name">Scale Secure</h1>

        <div className="signup-box">
          <h2>Sign Up</h2>
          <h3>Email</h3>
          <input type="email" placeholder="@abcemail" className="input-box" />

          <button className="otp-button" onClick={handleGenerateOtp}>
            Generate OTP
          </button>

          <div className="line-or">
            <hr className="line" /> <span>or</span> <hr className="line" />
          </div>

          <div className="icon-buttons">
            <button className="icon-button">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft Logo"
                className="logo"
              />
            </button>
            <button className="icon-button">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
                alt="Google Logo"
                className="logo"
              />
            </button>
          </div>

          <p className="signin-text">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>

      <Modal show={showModal} onClose={handleCloseModal}>
        <h2>OTP Generated!</h2>
        <p>Your OTP has been sent to your email address.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/*" element={<Agent />} />
        <Route path="/profile/:id" element={<ProfilePage />} />{" "}
        {/* Route for ProfilePage */}
      </Routes>
    </Router>
  );
}

export default AppWrapper;
