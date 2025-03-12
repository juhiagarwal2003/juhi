
import React from 'react';
import ScrollReveal from './ScrollReveal';
import TimelineItem from './TimelineItem';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Research Head',
      organization: 'Women in Engineering Chapter, IEEE',
      period: '2023 - 2024',
      description: 'Led research initiatives and promoted women in engineering. Bennett University',
    },
    {
      title: 'Senior Core Team Member',
      organization: 'BC3 (Bennett Cloud Computing Club)',
      period: '2023 - 2024',
      description: 'Led management initiatives to achieve club goals. Bennett University',
    },
    {
      title: 'Management Co-Head',
      organization: 'Product Design Technology Club',
      period: '2023 - 2024',
      description: 'Directed efforts to fulfill club objectives. Bennett University',
    },
    {
      title: 'Project Management Team Member',
      organization: 'Enactus',
      period: '2022 - 2023',
      description: 'Launched \'KI toothbrushes,\' selling 250 in one day, promoting eco-friendly oral health. Bennett University',
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
