import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container max-w-4xl mx-auto">
        <div className="card-glass rounded-2xl p-8 md:p-12 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground hover:opacity-90 glow-primary"
              asChild
            >
              <a href="mailto:matijacvrk@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="https://www.linkedin.com/in/matija-cvrk-1388b3101/" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Matija Čvrk
            </p>
            <p className="text-sm text-muted-foreground italic">Carpe diem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
