import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: 'AgriTech Web Platform',
      description: 'Created a platform using three AI models for crop recommendations, yield prediction, and disease detection. Implemented features for crop suggestions and yield estimation to support farmers' decision-making.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Flask/Django', 'Scikit-learn', 'TensorFlow', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80&w=800',
      githubUrl: 'https://github.com',
      category: 'Full Stack',
    },
    {
      title: 'WattBill',
      description: 'Java-based billing system with Paytm integration and automated bill generation. Advanced admin controls for customer and meter management.',
      tags: ['Java', 'Swing', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
      githubUrl: 'https://github.com',
      category: 'Full Stack',
    },
    {
      title: 'VeilCrypt',
      description: 'Developed a secure file hiding and encryption tool using OTP-based email authentication. Implemented MySQL for metadata storage and ensured robust security protocols.',
      tags: ['Java', 'MySQL', 'Email OTP Authentication'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      githubUrl: 'https://github.com',
      category: 'Security',
    },
  ];

  const categories = ['All', 'Full Stack', 'Security'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-container bg-muted/30">
      <ScrollReveal>
        <span className="pill bg-primary/10 text-primary block mx-auto w-fit mb-4">My Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Explore some of my recent projects showcasing my technical skills and problem-solving approach.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={300 + index * 100}>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              githubUrl={project.githubUrl}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
