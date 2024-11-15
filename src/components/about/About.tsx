import React from "react";
import { IoIosSchool } from "react-icons/io";
import profile from "../../../public/images/about-me.jpeg";
import Image from "next/image";
import "../../styles/about/About.css"


const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about1">
          <div className="image-container">
            {/* Profile Image */}
            <Image
              src={profile}
              alt="profile"
              className="profile-img"
            />
          </div>
          <div className="about-sec">
            <h1 className="heading">
              About <span className="color">me</span>
            </h1>
            <p className="about-desc">
              - I specialize in web development and graphic design, creating
              responsive, user-friendly solutions using technologies like React,
              Next.js, and Tailwind CSS.
              <br />- My skills extend to web development, graphic design, and
              Object-Oriented Programming (OOP) creating optimized and
              user-focused digital solutions.
              <br />- With experience in tools like Appwrite and Google Sheets
              automation, I focus on delivering efficient, visually appealing
              results while staying up-to-date with the latest trends.
            </p>
          </div>
        </div>
        {/* Cards */}
        <div className="card-container">

          <div className="card1">
            <div className="card-bottom1">
              <div className="card-style1">
                <div className="card-icons">
                  <IoIosSchool className="icons"/>
                </div>
                <h2 className="heading1">Superior Academy School</h2>
              </div>
              <div className="paragraph-container1">
                <p className="desc1">
                  2022 Completed matriculation from Superior Academy. Gained a
                  strong foundation in science subjects and developed essential
                  skills for further education.
                </p>
              </div>
            </div>




            <div className="card2">
              <div className="card-bottom2">
                <div className="card-style2">
                  <div className="card-icons2">
                    <IoIosSchool  className="icons2" />
                  </div>
                  <h2 className="heading2">DJ Sindh Govt. Science College</h2>
                </div>
                <div className="paragraph-container2">
                  <p className="desc2">
                    2023 – Present First Year Completion: 2024 Current Status:
                    Currently in the 2nd year of college, focusing on Computer Science
                    (CS) subjects and preparing for future academic and professional
                    opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="card3">
              <div className="card-bottom3">
                <div className="card-style3">
                  <div className="card-icons3">
                    <IoIosSchool  className="icons3" />
                  </div>
                  <h2 className="heading3">Governor IT Course</h2>
                </div>
                <div className="paragraph-container3">
                  <p className="desc3">
                    Pursuing the IT course at Governor House to expand knowledge and
                    skills in technology, programming, and software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
