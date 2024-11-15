import Link from "next/link";
import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import {FaLinkedinIn } from "react-icons/fa";
import "../../styles/footer/Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-content">
          <Link className="footer-logo" href={"/"}>
            <div className="footer-title">
              Huzaifa Naeem
              <span className="footer-highlight"> Portfolio</span>
            </div>
          </Link>
          <p className="footer-copyright">
            © 2024 Huzaifa Naeem<span className="footer-highlight"> Portfolio</span>
          </p>
          <span className="social-links">
            <a
              href="https://www.facebook.com/share/91NKfwYSFLSKCXBX/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
            > 
            <IoLogoFacebook className="icon1" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://x.com/Huzai_fa123?t=DnFYfJoMreRFqN08hnQP6A&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaXTwitter className="icon2" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://www.instagram.com/__.zefa.__?igsh=a2J4a3dvcWF2Njg5"
              target="_blank"
              rel="noopener noreferrer"
            >
            <AiFillInstagram className="icon3" />
            </a>
            <a
              className="social-icon-spacing"
              href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaLinkedinIn  className="icon4" />
            </a>
            </span> 
        </div>
      </footer>
    </div>
  );
};

export default Footer;
