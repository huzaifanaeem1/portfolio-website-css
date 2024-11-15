
import React from "react";
import  "../../styles/hero-section/InfoSection.css";

const InfoSection = () => {
  return (
    <section className="infoSection">
      <div className="container"> 
        <div className="content">
          <h1 className="title-name">
            Huzaifa <span className="highlight"> Naeem</span>
          </h1>
          <h2 className="subtitle">
            Aspiring Web <span className="highlight">Developer</span> 
          </h2>
          <p className="description">
            I am a Web developer and graphic designer skilled in building web
            applications using modern technologies like React, Next.js, and
            Appwrite. I enjoy learning new tools and applying them to create
            dynamic, user-friendly websites. My design expertise complements
            my development work, allowing me to craft visually appealing and
            intuitive interfaces that enhance the overall user experience.
          </p>
          <div className="buttonContainer">
            <a
              href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hireButton">
                Hire me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
