
import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: 'AgriTech Web Platform',
      description: 'A comprehensive platform connecting farmers with technology solutions for improved crop management and yield prediction.',
      tags: ['Java', 'Spring Boot', 'React', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&q=80&w=800',
      githubUrl: 'https://github.com',
      category: 'Full Stack',
    },
    {
      title: 'WattBill',
      description: 'Smart energy consumption monitoring system with predictive analytics for reducing electricity costs.',
      tags: ['IoT', 'Cloud', 'Analytics', 'Java'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
      githubUrl: 'https://github.com',
      liveUrl: '#demo',
      category: 'IoT',
    },
    {
      title: 'VeilCrypt',
      description: 'Advanced data encryption solution for securing sensitive information with multi-layer protection.',
      tags: ['Security', 'Cryptography', 'Java', 'API'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      githubUrl: 'https://github.com',
      category: 'Security',
    },
    {
      title: 'Cloud Resource Optimizer',
      description: 'Automated cloud resource management tool that optimizes costs while maintaining performance requirements.',
      tags: ['AWS', 'DevOps', 'Automation', 'Python'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
      githubUrl: 'https://github.com',
      category: 'Cloud',
    },
  ];

  const categories = ['All', 'Full Stack', 'Security', 'IoT', 'Cloud'];
  
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
              liveUrl={project.liveUrl}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
