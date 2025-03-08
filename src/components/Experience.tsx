
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TimelineItem from './TimelineItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Chairperson',
      organization: 'Women in Engineering Chapter, IEEE',
      period: '2022 - Present',
      description: 'Led initiatives to promote gender diversity in technology, organized workshops and mentorship programs for women in STEM fields.',
    },
    {
      title: 'Tech Lead',
      organization: 'BC3 (Bennett Cloud Computing Club)',
      period: '2021 - 2022',
      description: 'Managed a team of developers working on cloud-based projects, conducted training sessions on AWS and DevOps practices.',
    },
    {
      title: 'Project Manager',
      organization: 'Product Design Club',
      period: '2020 - 2021',
      description: 'Coordinated cross-functional teams in designing and implementing innovative tech solutions, enhancing project management skills.',
    },
    {
      title: 'Technical Coordinator',
      organization: 'Enactus',
      period: '2020',
      description: 'Provided technical support for social entrepreneurship projects, implemented technology solutions for community development initiatives.',
    },
  ];

  return (
    <section id="experience" className="section-container">
      <ScrollReveal>
        <span className="pill bg-primary/10 text-primary block mx-auto w-fit mb-4">My Journey</span>
        <h2 className="section-title">Experience & Leadership</h2>
        <p className="section-subtitle">
          A timeline of my professional journey and leadership roles that have shaped my career.
        </p>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ScrollReveal key={index} delay={200 + index * 100}>
            <TimelineItem
              title={exp.title}
              organization={exp.organization}
              period={exp.period}
              description={exp.description}
              isLast={index === experiences.length - 1}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
