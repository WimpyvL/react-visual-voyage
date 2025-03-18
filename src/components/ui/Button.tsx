
import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hosting-orange disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-hosting-orange text-white hover:bg-opacity-90 shadow-sm",
    secondary: "bg-gray-100 text-hosting-dark-gray hover:bg-gray-200",
    outline: "border border-hosting-orange text-hosting-orange hover:bg-hosting-orange hover:text-white",
    ghost: "text-hosting-orange hover:bg-hosting-orange/10",
  };
  
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };
  
  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );
  
  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
