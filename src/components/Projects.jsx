const featuredProjects = [
  {
    title: "Floral Collection",
    description:
      "A responsive ecommerce-style website for a hijab collection, designed with a clean product-focused interface and responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/munibah1707-cpu/floralcollection",
    live: "https://floralcollection.netlify.app/",
    type: "Featured Project",
    image: "/projects/floral-collection.png",
  },
  {
    title: "Pulse Dashboard",
    description:
      "A responsive task and team analytics dashboard built with React, featuring data visualization, task management, filtering, and interactive dashboard components.",
    tech: ["React", "Tailwind CSS", "Recharts"],
    github: "https://github.com/munibah1707-cpu/pulse-dashboard",
    live: "https://pulse-dashboard-six-delta.vercel.app/",
    type: "Featured Project",
    image: "/projects/pulse-dashboard.png",
  },
];

const otherProjects = [
  {
    title: "Seat Availability Tracker",
    description:
      "A multi-page venue seat management SPA built with React, featuring real-time seat tracking, live REST API integration, and useReducer-based state management with custom hooks and per-route error boundaries.",
     tech: ["React", "React Router", "Tailwind CSS"],
    github: "https://github.com/munibah1707-cpu/Seat-Availability-Tracker",
    live: "https://seat-availability-tracker-loyf.vercel.app/",
    image: "/projects/seat-availability.png",
  },
  {
    title: "Pokémon Memory Game",
    description:
      "An interactive memory card game built with React, where players test their memory while interacting with dynamic game state.",
    tech: ["React", "Vite", "PokeAPI"],
    github: "https://github.com/munibah1707-cpu/pokemon-memory-game",
    live: "https://pokemon-memory-game-xi.vercel.app/",
    image: "/projects/pokemon-memory-game.png",
  },
  {
    title: "CV Builder",
    description:
      "A React application that allows users to create and organize their CV information through an interactive interface.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/munibah1707-cpu/cv-builder",
    live: "https://cv-builder-eight-iota.vercel.app/",
    image: "/projects/cv-builder.png",
  },
  {
    title: "Weather App",
    description:
      "A weather application that uses an external API to retrieve and display weather information through a responsive interface.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/munibah1707-cpu/weatherdetecto",
    live: "https://weatherdetecto.netlify.app/",
    image: "/projects/weather-app.png",
  },
];

function ProjectLinks({ github, live }) {
  return (
    <div className="project-links">
      <a href={live} target="_blank" rel="noreferrer">
        Live Demo ↗
      </a>

      <a href={github} target="_blank" rel="noreferrer">
        GitHub ↗
      </a>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">Selected Work</p>
          <h2>Projects I've built while learning and growing.</h2>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <article className="featured-project" key={project.title}>
              <div className="project-image-placeholder">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <p className="project-type">{project.type}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <ProjectLinks
                  github={project.github}
                  live={project.live}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="other-projects">
          {otherProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <p className="project-type">Project</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <ProjectLinks
                  github={project.github}
                  live={project.live}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
