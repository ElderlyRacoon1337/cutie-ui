interface InputProps {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: any;
  value?: any;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  classNameForWrapper?: string;
  styleForWrapper?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'neutral' | 'error' | 'success';
  square?: boolean;
  variant?: 'filled' | 'outlined' | 'underlined' | 'basic';
  message?: string;
  label?: boolean;
  autoFocus?: boolean;
  defaultValue?: any;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
  other?: object;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  button?: React.ReactNode;
}

export const Input: React.FC<InputProps>;
