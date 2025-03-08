
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verified?: boolean;
  url?: string;
  className?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  image,
  verified = true,
  url,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          alt={`${title} certification`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {verified && (
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-1">
            <CheckCircle className="w-5 h-5 text-primary" />
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">{title}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-muted-foreground">{issuer}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>
        
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 text-xs text-primary font-medium inline-block hover:underline"
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
