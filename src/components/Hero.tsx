
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const roles = ['Cloud Computing Specialist', 'Java Developer', 'AI Enthusiast', 'Data Security Expert'];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute top-0 inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-70"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydi0yaC0ydjJ6bTIgMHYtNGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      </div>
      
      <div className="section-container z-10 flex flex-col items-center justify-center text-center relative">
        <div className={`transition-all duration-1000 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="pill bg-primary/10 text-primary mb-8">Welcome to my portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span>I'm </span>
            <span className="text-gradient">Juhi Agarwal</span>
          </h1>
          
          <div className="h-12 md:h-16 mb-8 overflow-hidden">
            {roles.map((role, index) => (
              <p 
                key={index} 
                className="text-xl md:text-2xl text-muted-foreground animate-slide-up"
                style={{ animationDelay: `${index * 3}s` }}
              >
                {role}
              </p>
            ))}
          </div>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground">
            Passionate about building innovative solutions with cutting-edge technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#about" 
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-98"
            >
              Learn About Me
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition-all active:scale-98"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 text-foreground/50" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
