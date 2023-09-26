import React from 'react';

type ButtonVariant = 'filled' | 'outlined' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  size = 'medium',
  color = 'primary',
  children,
  ...props
}) => {
  const baseStyles =
    'px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';

  const sizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const colorStyles = {
    primary:
      'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    secondary:
      'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
    success: 'text-white bg-green-600 hover:bg-green-700 focus:ring-green-500',
    warning:
      'text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
  };

  const variantStyles = {
    filled: `${baseStyles} ${colorStyles[color]}`,
    outlined: `${baseStyles} border border-indigo-600 ${colorStyles[color]}`,
    text: `${baseStyles} ${colorStyles[color]}`,
  };

  const buttonStyles = `${baseStyles}`;

  return (
    <button
      className={`${buttonStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${colorStyles[color]}`}
      {...props}
    >
      {children}
    </button>
  );
};
