
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  organization,
  period,
  description,
  isLast = false,
  className,
}) => {
  return (
    <div className={cn("relative pl-10", className)}>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-6 bottom-0 w-px bg-border"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
      
      <div className="pb-10">
        <span className="pill bg-primary/10 text-primary mb-2">{period}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{organization}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
