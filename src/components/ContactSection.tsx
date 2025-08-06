import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/AulusHZP",
      icon: <FaGithub className="w-8 h-8" />,
      description: "Veja meus projetos e contribuições",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/áulus-batista",
      icon: <FaLinkedin className="w-8 h-8" />,
      description: "Conecte-se comigo profissionalmente",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/aulushzp",
      icon: <FaInstagram className="w-8 h-8" />,
      description: "Acompanhe minha jornada",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto para discutir novas oportunidades, projetos interessantes ou simplesmente trocar ideias sobre tecnologia.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <ContactCard key={link.name} link={link} index={index} />
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            <FaEnvelope className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Entre em Contato
            <FaExternalLinkAlt className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  link: {
    name: string;
    href: string;
    icon: React.ReactNode;
    description: string;
    color: string;
  };
  index: number;
}

const ContactCard = ({ link, index }: ContactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-card hover:border-primary/30">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
      <a 
        href={link.href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-8 relative z-10"
      >
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 ${link.color}`}>
            {link.icon}
          </div>
          
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
            {link.name}
          </h3>
          
          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            {link.description}
          </p>
        </div>
        
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </a>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ContactSection;