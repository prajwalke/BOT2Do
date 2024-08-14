import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./ajent.css";
import robotImage from "../../assets/robot.png";

import ProfilePage from "../Profile/profilepage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendar, faPlus, faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
function Agent() {
  const [activeTab, setActiveTab] = useState("recent");
  const [showRecentDropdown, setShowRecentDropdown] = useState(false);
  const [showAgentDropdown, setShowAgentDropdown] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "recent") {
      setShowRecentDropdown(!showRecentDropdown);
      setShowAgentDropdown(false); // Hide Agent dropdown when clicking Recent
    } else if (tab === "agent") {
      setShowAgentDropdown(!showAgentDropdown);
      setShowRecentDropdown(false); // Hide Recent dropdown when clicking Agent
    }
  };

  const handleProfileClick = (profile) => {
    // Navigate to ProfilePage when a profile is clicked
    navigate(`/profile/${profile}`);
    setShowRecentDropdown(false);
  };

  return (
    <div className="container">
      <div className="left-section">
        <div
          className={`tab recent-section ${
            activeTab === "recent" ? "active" : ""
          }`}
          onClick={() => handleTabClick("recent")}
        >
          RECENTS
        </div>
        {activeTab === "recent" && showRecentDropdown && (
          <div className="dropdown-menu">
            <div
              className="profile-info"
              onClick={() => handleProfileClick("profile1")}
            >
              <div className="profile-icon">👤</div>
              <div className="profile-text">
                <strong className="bold-text">Co_M_yo</strong>
                <div className="profile-details">
                  <div className="normal-text">Test BOT2do</div>
                  <div className="bold-text">:support</div>
                </div>
              </div>
            </div>
            <div
              className="profile-info"
              onClick={() => handleProfileClick("profile2")}
            >
              <div className="profile-icon">👤</div>
              <div className="profile-text">
                <strong className="bold-text">Co_M_yo</strong>
                <div className="profile-details">
                  <div className="normal-text">Test BOT2do</div>
                  <div className="bold-text">:support</div>
                </div>
              </div>
            </div>
            <div
              className="profile-info"
              onClick={() => handleProfileClick("profile3")}
            >
              <div className="profile-icon">👤</div>
              <div className="profile-text">
                <strong className="bold-text">Co_M_yo</strong>
                <div className="profile-details">
                  <div className="normal-text">Test BOT2do</div>
                  <div className="bold-text">:support</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={`tab agent-section ${
            activeTab === "agent" ? "active" : ""
          }`}
          onClick={() => handleTabClick("agent")}
        >
          AGENT
        </div>
        {activeTab === "agent" && showAgentDropdown && (
          <div className="dropdown-menu">
            <div className="agent-dropdown-item">
              Priority Action Item{" "}
              <FontAwesomeIcon icon={faCalendar} className="icon" />
            </div>
            <div className="agent-dropdown-item">
              Profile-specific Action Item{" "}
              <FontAwesomeIcon icon={faCalendar} className="icon" />
            </div>

            <div className="agent-dropdown-item">
              Profile-specific Action{" "}
              <FontAwesomeIcon icon={faCalendar} className="icon" />
            </div>

            <div className="agent-dropdown-item">
              Profile-specific Action Item{" "}
              <FontAwesomeIcon icon={faCalendar} className="icon" />
            </div>
            <div className="agent-dropdown-item">
              Profile-specific Action Item{" "}
              <FontAwesomeIcon icon={faCalendar} className="icon" />
            </div>
            <div className="start-newchat">
              {" "}
              <button>
                strat new chat
                <FontAwesomeIcon icon={faPlusCircle} className="icon" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="right-section">
        <div className="top-right">
          <div className="robot-container">
            <img src={robotImage} alt="Robot Icon" className="robot-icon" />
            <div className="robot-text">Agent M</div>
          </div>
          <div className="search-container">
            <input type="text" placeholder="" className="search-bar" />
            <div className="search-icon">
              <FontAwesomeIcon icon={faSearch} className="icon" />
            </div>
          </div>
        </div>
        <div className="text-normal">
          Hi Test Bot2do, here's a summary of the action items I need your help
          with today. Which category would you like to get started with?
        </div>
        <div className="box-container">
          <div className="box red-box">
            <FontAwesomeIcon icon={faArrowRight} className="box-icon" />
            <div className="box-line"></div>
            <div className="box-number">0</div>
            <div className="box-text">Text for Red Box</div>
          </div>
          <div className="box yellow-box">
            <FontAwesomeIcon icon={faArrowRight} className="box-icon" />
            <div className="box-line"></div>
            <div className="box-number">0</div>
            <div className="box-text">Text for Yellow Box</div>
          </div>
          <div className="box green-box">
            <FontAwesomeIcon icon={faArrowRight} className="box-icon" />
            <div className="box-line"></div>
            <div className="box-number">0</div>
            <div className="box-text">Text for Green Box</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agent;
