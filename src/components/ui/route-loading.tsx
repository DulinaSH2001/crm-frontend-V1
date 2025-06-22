import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadingSpinner } from './loading-spinner';

export const RouteLoadingIndicator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Short delay to show loading

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
      <div className="h-full bg-blue-600 animate-pulse" style={{ 
        width: '100%',
        animation: 'loading-bar 0.3s ease-in-out'
      }} />
    </div>
  );
};

// Add loading bar animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes loading-bar {
    0% { width: 0%; }
    50% { width: 80%; }
    100% { width: 100%; }
  }
`;
document.head.appendChild(style);
