const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Development",
    skills: [
      "Responsive Design",
      "REST APIs",
      "React Hooks",
      "State Management",
      "DOM Manipulation",
    ],
  },
  {
  title: "Tools",
  skills: [
    "Git",
    "GitHub",
    "Vite",
    "Vercel",
    "Netlify",
  ],
},
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-label">Skills</p>
          <h2>Tools and technologies I work with.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
