
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', height }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`} style={height ? { height: `${height}px` } : undefined}>
      <div className="text-xl font-bold text-hosting-dark-gray">
        <span className="text-hosting-orange">H</span>OSTING <span className="text-hosting-orange">KZN</span>
      </div>
    </Link>
  );
};

export default Logo;
