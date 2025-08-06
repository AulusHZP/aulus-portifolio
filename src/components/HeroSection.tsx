import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main name with gradient text */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Áulus Batista
          </span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Desenvolvedor Backend em formação, atuando como QA
        </h2>
        
        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Sou apaixonado por tecnologia, qualidade e performance. Atualmente me especializo em backend e testes automatizados, 
          buscando entregar soluções robustas e confiáveis.
        </p>
        
        {/* Social links */}
        <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <SocialButton 
            href="https://github.com/aulusbatista" 
            icon={<Github className="w-6 h-6" />} 
            label="GitHub"
          />
          <SocialButton 
            href="https://www.linkedin.com/in/aulusbatista" 
            icon={<Linkedin className="w-6 h-6" />} 
            label="LinkedIn"
          />
          <SocialButton 
            href="https://www.instagram.com/aulusbatista" 
            icon={<Instagram className="w-6 h-6" />} 
            label="Instagram"
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialButton = ({ href, icon, label }: SocialButtonProps) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="group relative overflow-hidden border-primary/20 bg-background/10 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-glow"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
          {icon}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
      </a>
    </Button>
  );
};

export default HeroSection;