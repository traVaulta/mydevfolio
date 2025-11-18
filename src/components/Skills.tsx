const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["Angular", "React", "TypeScript", "(S)CSS", "Next.js", "Prime Faces", "PWA", "WebPush", "OSS", "Firebase", "Redux", "NGRX", "NGXS", "Redux-Observables", "Mobx", "Zustand", "Qwik", "SolidJS"]
    },
    {
      category: "Backend",
      skills: ["Java", "OracleDB", "PostgreSQL", "SQL Server", "Spring Boot", "REST APIs", "GraphQL", "MongoDB", "MySQL", "Python", "Node.js", "Hibernate", "Redis", "IBM WAS", "Oracle WLS"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "SVN", "Linux", "Docker", "Podman", "Azure", "Figma", "CI/CD", "Azure DevOps", "Atlassian Suite", "Jest", "Testing Library", "JUnit", "Mockito", "Jacoco", "Jaspersoft", "BPMN"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring projects to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-glass p-8 rounded-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-background rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
