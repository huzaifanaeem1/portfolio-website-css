// Skill.tsx
"use client";
import React from "react";
import { FaFigma, FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import Skillcard from "./SkillCard";
import "../../styles/skills/Skill.css";

export default function Skill() {
  return (
    <div id="Skill" className="skillSection">
      <section className="mainSection">
        <div className="header">
          <h1 className="title">
            Skill<span className="highlight">s</span>
          </h1>
          <p className= "description">
            I specialize in web development and graphic design, focusing on creating responsive and user-friendly digital solutions. I use modern technologies to build visually appealing and functional websites that emphasize a smooth user experience. My passion lies in developing seamless interfaces, whether in front-end development or design. I stay up-to-date with the latest trends to ensure my work remains innovative and effective.
          </p>
        </div>

        <div className="skillsGrid">
        <Skillcard skill="HTML" icon={FaHtml5} />
        <Skillcard skill="CSS" icon={FaCss3Alt} />
          <Skillcard skill="JavaScript" icon={IoLogoJavascript} />
          <Skillcard skill="TypeScript" icon={SiTypescript} />
          <Skillcard skill="React" icon={FaReact} />
          <Skillcard skill="Tailwind" icon={RiTailwindCssFill} />
          <Skillcard skill="Figma" icon={FaFigma} />
        </div>

        <section className="additionalSkillsSection">
          <div className="additionalSkillsContainer">
            <div className="additionalSkillsGrid">
            <Skillcard skill="VS Code" icon={SiVisualstudiocode} />
              <Skillcard skill="GitHub" icon={FaGithub} />
              <Skillcard skill="Vercel" icon={IoLogoVercel} />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
