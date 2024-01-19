import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-text">
          <img src="https://i.ibb.co/58Wfjxz/s-homepage-logo.png" alt="logo" />
          <p className="text-black font-16 text-grey">
            The purpose of lorem ipsum is to create a natural looking block of
            text (sentence, paragraph, page, etc.) that doesn't distract from
            the layout.
          </p>
        </div>
        <div className="footer-links">
          <div className="content">
            <h1 className="text-black bold font-16">Links</h1>
            <p className="text-black font-16 text-grey">Home</p>
            <p className="text-black font-16 text-grey">Recipe</p>
            <p className="text-black font-16 text-grey">Blog</p>
          </div>
          <div className="content">
            <h1 className="bold text-black font-16">Links</h1>
            <p className="text-black font-16 text-grey">Share Recipe</p>
            <p className="text-black font-16 text-grey">About Us</p>
            <p className="text-black font-16 text-grey">Contact</p>
          </div>
          <div className="content">
            <h1 className="bold text-black font-16">Legal</h1>
            <p className="text-black font-16 text-grey">Home</p>
            <p className="text-black font-16 text-grey">Privacy & Cookies</p>
            <p className="text-black font-16 text-grey">Cookies</p>
          </div>
        </div>
        <div className="footer-letter">
          <h1 className="text-black font-48">Newsletter</h1>
          <p className="text-black font-16">
            Subscribe to our newsletter to get more free tip{" "}
          </p>
          <input type="text" placeholder="Enter your email address" />

          <button className="btn-primary-medium bg-primary">Subscribe</button>
        </div>
      </div>

      <hr />
      <div className="footer-disclaimer">
        <p>Copyright © 2022. All Rights Reserved.</p>
        <div className="social-links">
          <img
            src="https://i.ibb.co/9yCd0cb/s-homepage-social-media-icon.png"
            alt="logos image"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
