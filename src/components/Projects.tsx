import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Park forest Marjan",
      subtitle: "Interactive audio visual guide",
      description: "Interactive audio visual guide for Park forest Marjan and map of interest points for all visitors in dual language (english & croatian).",
      tech: ["Angular", "PWA", "Openstreetmaps", "Geolocation", "Javascript", "Typescript", "Audio", "HTML5", "CSS", "Jest", "Angular Testing Library", "NGXS", "Leaflet.js", "Docker+Compose", ".NET Core", "MySQL"],
      github: "",
      demo: "https://audio.marjan-parksuma.hr",
      stage: "Production"
    },
    {
      title: "Končar MES product configurator",
      subtitle: "",
      description: "Product configurator for Končar end users when ordering electric motors or fans through their MES website realised as 2 projects 1 year apart, with then employer LittleCode still providing support and app maintenance",
      tech: ["Angular", "PWA", "Openstreetmaps", "Geolocation", "Javascript", "Typescript", "Audio", "HTML5", "CSS", "Jest", "Angular Testing Library", "NGXS", "Leaflet.js", "Docker+Compose", ".NET Core", "MySQL"],
      github: "",
      demo: "https://koncar.hr/hr/koncar-motori-i-elektricni-sustavi",
      stage: "Production"
    },
    {
      title: "Auto salon offer",
      subtitle: "",
      description: "Sample playground application that demonstrates using LangGraph Agent to generate a document - auto salon offer.",
      tech: ["Java", "Spring Boot", "LangGraph", "Angular", "PrimeNG", "Jaspersoft Reports", "Redis"],
      github: "https://gitlab.com/traVaulta/auto-salon-offer",
      demo: "",
      stage: "Showcase personal"
    },
    {
      title: "Bathroom Design",
      subtitle: "",
      description: "Desktop native implementation of BPM User Tasks (playground sample).",
      tech: ["Java", "Spring Boot", "Camunda", "JavaFX", "BPMN"],
      github: "https://gitlab.com/traVaulta/bathroom-design",
      demo: "",
      stage: "Showcase personal"
    },
    {
      title: "BPM Hiring App",
      subtitle: "",
      description: "Sample playground application that demonstrates using Activiti BPM to manage a hiring process defined using BPMN.",
      tech: ["Java", "Spring Boot", "ActivitBPM", "BPMN", "SQLite", "Docker", "Kubernetes", "Native image"],
      github: "https://bitbucket.org/cvrkmatija/bpm-hiring-app",
      demo: "",
      stage: "Showcase personal"
    },
    {
      title: "Contracting",
      subtitle: "",
      description: "🗒️Sample playground project that showcases dynamic document generation analysis using an LLM.",
      tech: ["Django", "Django Rest Framework", "Python", "Jaspersoft Reports", "LLM", "Cohere"],
      github: "https://gitlab.com/traVaulta/contracting",
      demo: "",
      stage: "Showcase personal"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-glass rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6 space-y-4 h-full flex flex-col">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <h4 className="text-l font-medium group-hover:text-primary transition-colors">
                    {project.subtitle}
                  </h4>
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Stage: <span className="gradient-text">{project.stage}</span>
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-background rounded-md text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground self-end"
                    asChild
                  >
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4"/>
                        Code
                      </a>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gradient-primary hover:opacity-90 self-end"
                    asChild
                  >
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </a>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
