import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import "../../styles/projects/Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Todo List", 
      imageSrc: "/images/todo.jpg",
      link: "https://nextjs-todo-list-cyan.vercel.app/",
    },
    {
      id: 2,
      name: "CountDown Timer",
      imageSrc: "/images/count.png",
      link: "https://countdown-mu-nine.vercel.app/",
    },
    {
      id: 3,
      name: "Travel Website",
      imageSrc: "/images/world.jpeg",
      link: "https://worldtravelagency.vercel.app/",
    },
    {
      id: 4,
      name: "Figma To Html",
      imageSrc: "/images/figma.jpg",
      link: "https://figma-design-into-html.vercel.app/",
    },
    {
      id: 5,
      name: "Country List",
      imageSrc: "/images/country.jpg",
      link: "https://giaic-countrylist-assignment.vercel.app/",
    },
    {
      id: 6,
      name: "Fitness Website",
      imageSrc: "/images/gym.jpg",
      link: "https://evolve-fit.vercel.app/",
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">
          Port<span className="highlight">folio</span>
        </h1>
        <p className="projects-description">
          Showcasing My Passion for Development: Transforming Ideas into Functional and Creative Web Solutions
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              name={`Project ${project.id} - ${project.name}`}
              image={project.imageSrc}
              alt={`Project ${project.id}`}
              link={project.link}
              key={project.id}
            />
          ))}
        </div>

        <a href="https://github.com/huzaifanaeem1" target="_blank" rel="noopener noreferrer" className="github-button">
        <Image 
        src="/images/github.png" 
        alt="GitHub Logo" 
        width={512} 
        height={512} 
      />
          <span className="github-button-text">
            <span className="github-button-label">GitHub</span>
            <span className="github-button-username">@Huzaifa Naeem</span>
          </span>
        </a>
      </div>
    </section>
  );
}
