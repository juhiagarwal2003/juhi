
import React from 'react';
import ScrollReveal from './ScrollReveal';
import CertificationCard from './CertificationCard';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Improving Deep Neural Networks',
      issuer: 'Coursera',
      date: 'Sep 2024',
      score: '92.80%',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
      url: '#certificate',
    },
    {
      title: 'Exploratory Data Analysis for Machine Learning',
      issuer: 'Coursera',
      date: 'Sep 2024',
      score: '92.50%',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      url: '#certificate',
    },
    {
      title: 'Introduction to Artificial Intelligence (AI)',
      issuer: 'Coursera',
      date: 'Sep 2024',
      score: '100%',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      url: '#certificate',
    },
    {
      title: 'Fundamentals of Network Communication',
      issuer: 'Coursera',
      date: 'Feb 2024',
      score: '96.66%',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800',
      url: '#certificate',
    },
  ];

  const achievements = [
    'Algorithmic Toolbox (73.04%) - Feb 2024',
    'Introduction to Computers and Operating Systems and Security (87.50%) - Feb 2024',
    'AWS Certified Cloud Practitioner (84%) - Jan 2024',
    'Data Structures (73.95%) - Nov 2023',
  ];

  return (
    <section id="certifications" className="section-container bg-muted/30">
      <ScrollReveal>
        <span className="pill bg-primary/10 text-primary block mx-auto w-fit mb-4">Recognition</span>
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">
          Formal recognitions of my expertise and notable accomplishments throughout my career.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {certifications.map((cert, index) => (
          <ScrollReveal key={index} delay={200 + index * 100}>
            <CertificationCard
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              score={cert.score}
              image={cert.image}
              url={cert.url}
            />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={600}>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
          <div className="bg-card border border-border rounded-2xl p-6">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Certifications;
