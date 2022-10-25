import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icon">
        <img src="./images/slack-icon.JPG" alt="slack" />
        <img src="./images/github.png" alt="github" />
      </div>
      <div className="footer-text">
        <div className="footer-text-logo">
          <div className="logo-container">
            <img src="./images/zuri-icon.png" alt="zuri-icon" />
            <img className="dot" src="./images/dot.png" alt="dot" />
          </div>
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div className="ingressive">
          <img src="./images/ingressive.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
