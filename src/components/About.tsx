import { Code2, Palette, Zap, Hammer } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions with best practices"
    },
    {
      icon: Palette,
      title: "Design Minded",
      description: "Creating intuitive interfaces that users love"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications that scale"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a focus on creating impactful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack developer who loves bringing ideas to life through code.
              With a strong foundation in modern web technologies, I specialize in building
              responsive, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
