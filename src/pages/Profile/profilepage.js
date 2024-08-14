import React, { useState } from "react";
import "./profilepage.css";
import ProfileImage from "../../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCopy,
  faRedo,
  faBox,
  faCalendar,
  faPaperPlane,
  faSearch,
  faForward,
  faGreaterThan,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("recent");
  const [showRecentDropdown, setShowRecentDropdown] = useState(false);
  const [showAgentDropdown, setShowAgentDropdown] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "recent") {
      setShowRecentDropdown(!showRecentDropdown);
      setShowAgentDropdown(false);
    } else if (tab === "agent") {
      setShowAgentDropdown(!showAgentDropdown);
      setShowRecentDropdown(false);
    }
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
            <div className="profile-info">
              <div className="profile-icon">👤</div>
              <div className="profile-text">
                <strong className="bold-text">CO_M_YO</strong>
                <div className="profile-details">
                  <div className="normal-text">Test BOT2do</div>
                  <div className="bold-text">:support</div>
                </div>
              </div>
            </div>
            {/* More profile items */}
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

      <div className="middle-section-row">
        <div className="right-section">
          <div className="top-right">
            <div className="profile-content">
              <div className="action-container">
                <button className="action-button">
                  <FontAwesomeIcon icon={faCopy} className="icon" />
                  copy
                </button>
                <button className="action-button">
                  <FontAwesomeIcon icon={faBox} className="icon" />
                  forward
                </button>
              </div>
            </div>
          </div>

          <div className="horizontal-line-middle" />

          <div className="description">
            <img
              src={ProfileImage}
              alt="Profile Icon"
              className="profile-icon"
            />
            <span className="profile-text">You</span>

            <p>Which Exception do I need to deal with today?</p>
            <text>Agent M</text>
            <div className="normal-text">
              <p>
                It looks like there is no available data in the system to
                provide specific exceptions for today. To ensure you receive the
                most accurate and actionable insights, please make sure your
                operational data is comprehensive and up-to-date on the Bot2do
                Platform.
              </p>
              <p>
                However, I can guide you on the typical exceptions you should
                monitor daily in your supply chain operations:
              </p>
              <ol>
                <li>
                  <strong>Delayed Shipments:</strong> Check for any shipments
                  that are delayed beyond their expected delivery dates.
                </li>
                <li>
                  <strong>Supplier Performance Issues:</strong> Identify
                  suppliers who have missed delivery deadlines or provided
                  substandard quality.
                </li>
                <li>
                  <strong>Inventory Shortages:</strong> Monitor inventory levels
                  to ensure there are no shortages.
                </li>
                <li>Ensure all invoices are accurate and processed on time.</li>
              </ol>
              <p>
                To get a detailed and specific list of exceptions, please ensure
                your data is updated on the Bot2do Platform. If you need further
                assistance, feel free to ask!
              </p>
            </div>
          </div>

          <div className="button-row">
            <button className="action-button">
              <FontAwesomeIcon icon={faThumbsUp} className="icon" />
            </button>
            <button className="action-button">
              <FontAwesomeIcon icon={faThumbsDown} className="icon" />
            </button>
            <button className="action-button">
              <FontAwesomeIcon icon={faCopy} className="icon" />
              copy
            </button>
            <button className="action-button">
              <FontAwesomeIcon icon={faRedo} className="icon" />
              regenerate
            </button>
            <button className="action-button">
              <FontAwesomeIcon icon={faBox} className="icon" />
              forward
            </button>
          </div>

          <div className="bot-message-1">What do I need today?</div>
          <div className="bot-message-1">What do I need today?</div>
          <div className="bot-message-1">What do I need today?</div>

          <div className="search-box-container-1">
            <input
              type="text"
              placeholder="your message here"
              className="search-box"
            />
            <button className="search-button">
              <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="vertical-line" />
      <div className="third-section">
        <div className="search-bar-container">
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Search by PO number or sup"
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faGreaterThan} className="icon" />
          </button>
        </div>
        <div className="text">
          Opened threads and PO information will be displayed here. Type in the
          PC number or supplier name on the above search bar to view results and
          select a PO you want to see information of.
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
