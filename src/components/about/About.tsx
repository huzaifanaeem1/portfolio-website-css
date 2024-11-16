import profile from "../../../public/images/about-me.jpeg";
import "../../styles/about/About.css";

import React from "react";
import { IoIosSchool } from "react-icons/io";
import { FaUniversity, FaSchool } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <div className="profile-image">
            <Image src={profile} alt="profile" className="image-style" />
          </div>
          <div className="about-text">
            <h1 className="about-title">
              About <span className="highlight">me</span>
            </h1>
            <p className="about-description">
              - I specialize in web development and graphic design, creating
              responsive, user-friendly solutions using technologies like React,
              Next.js, and Tailwind CSS.
              <br />
              - My skills extend to web development, graphic design, and
              Object-Oriented Programming (OOP), creating optimized and
              user-focused digital solutions.
              <br />- With experience in tools like Appwrite and Google Sheets
              automation, I focus on delivering efficient, visually appealing
              results while staying up-to-date with the latest trends.
            </p>
          </div>
        </div>

        <div className="cards-container">
          <div className="card1">
            <div className="card-header">
              <div className="icon-container1">
                <IoIosSchool  className="icons1"/>
              </div>
              <h2 className="card-title">Superior Academy School</h2>
            </div>
            <p className="card-text">
              2022 Completed matriculation from Superior Academy. Gained a
              strong foundation in science subjects and developed essential
              skills for further education.
            </p>
          </div>

          <div className="card1 primary-icon">
            <div className="card-header">
              <div className="icon-container2 secondary-icon">
                <FaUniversity className="icons2"/>
              </div>
              <h2 className="card-title">DJ Sindh Govt. Science College</h2>
            </div>
            <p className="card-text">
              2023 – Present
              <br />
              First Year Completion: 2024
              <br />
              Current Status: Currently in the 2nd year of college, focusing on
              Computer Science (CS) subjects and preparing for future academic
              and professional opportunities.
            </p>
          </div>

          <div className="card1">
            <div className="card-header">
              <div className="icon-container3">
                <FaSchool className="icons3" />
              </div>
              <h2 className="card-title">Governor IT Course</h2>
            </div>
            <p className="card-text">
              Pursuing the IT course at Governor House to expand knowledge and
              skills in technology, programming, and software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;