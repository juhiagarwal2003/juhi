
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, description, className }) => {
  return (
    <div 
      className={cn(
        "bg-card hover:bg-card/80 border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md group",
        className
      )}
    >
      <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 text-primary group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default SkillCard;
