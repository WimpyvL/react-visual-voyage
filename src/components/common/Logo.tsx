
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <div className="text-xl font-bold text-hosting-dark-gray">
        <span className="text-hosting-orange">H</span>OSTING <span className="text-hosting-orange">KZN</span>
      </div>
    </Link>
  );
};

export default Logo;
