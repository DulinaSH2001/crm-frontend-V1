import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`transition-all duration-500 ease-in-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Fade transition
export const FadeTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Slide transition
export const SlideTransition: React.FC<PageTransitionProps & { direction?: 'left' | 'right' | 'up' | 'down' }> = ({ 
  children, 
  className = '',
  direction = 'right'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0';
    
    switch (direction) {
      case 'left': return '-translate-x-full';
      case 'right': return 'translate-x-full';
      case 'up': return '-translate-y-full';
      case 'down': return 'translate-y-full';
      default: return 'translate-x-full';
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`transition-transform duration-500 ease-out transform ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};
