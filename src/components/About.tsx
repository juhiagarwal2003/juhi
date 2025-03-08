
import React from 'react';
import ScrollReveal from './ScrollReveal';
import SkillCard from './SkillCard';
import { Code, Cloud, Database, Shield, Brain } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: 'Java Development',
      description: 'Proficient in building robust applications using Java, Spring Boot, and related technologies.',
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Experienced with AWS and cloud infrastructure design, deployment, and management.',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Knowledge of database design, data processing, and analytics using SQL and Python.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Implementation of security protocols and best practices for protecting sensitive information.',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Exploring and implementing machine learning models and AI solutions for complex problems.',
    },
  ];

  const education = [
    {
      institution: 'Bennett University',
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      period: '2020 - 2024',
    },
    {
      institution: 'Boston Public School',
      degree: 'High School',
      field: 'Science and Mathematics',
      period: '2018 - 2020',
    },
    {
      institution: "St. Paul's Church College",
      degree: 'Secondary Education',
      field: 'Science and Computer Applications',
      period: '2016 - 2018',
    },
  ];

  return (
    <section id="about" className="section-container">
      <ScrollReveal>
        <span className="pill bg-primary/10 text-primary block mx-auto w-fit mb-4">About Me</span>
        <h2 className="section-title">Who I Am</h2>
        <p className="section-subtitle">
          I'm a technology enthusiast with a passion for creating innovative solutions
          across cloud computing, Java development, AI, and data security.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <ScrollReveal delay={200}>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Background</h3>
            <p className="text-muted-foreground">
              I'm Juhi Agarwal, a dedicated technologist with expertise spanning several domains including cloud architecture,
              application development, and data security. I strive to create elegant solutions to complex problems using
              cutting-edge technologies.
            </p>
            <p className="text-muted-foreground">
              With a strong foundation in computer science and a passion for continuous learning,
              I enjoy exploring new technologies and applying them to solve real-world challenges.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4">Education</h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4 py-1">
                    <h5 className="font-medium">{edu.institution}</h5>
                    <p className="text-sm text-muted-foreground">{edu.degree} • {edu.field}</p>
                    <p className="text-xs text-muted-foreground">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl opacity-50"></div>
            <div className="relative bg-card border border-border overflow-hidden rounded-xl p-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1288&h=1500"
                alt="Professional portrait placeholder" 
                className="w-full h-auto rounded-lg object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={600}>
        <h3 className="text-2xl font-bold text-center mb-12">My Technical Skills</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default About;
