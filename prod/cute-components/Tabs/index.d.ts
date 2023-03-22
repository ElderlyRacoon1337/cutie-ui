interface TabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  children?: React.ReactNode;
  labels: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  other?: object;
  variant?: 'contained' | 'underlined';
  fullWidth?: boolean;
  rounded?: boolean;
  circle?: boolean;
  color?:
    | 'primary'
    | 'secondary'
    | 'black'
    | 'white'
    | 'neutral'
    | 'error'
    | 'success';
  size?: 'small' | 'medium' | 'large';
}

interface TabProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  other?: object;
}

export const Tabs: React.FC<TabsProps>;
export const Tab: React.FC<TabProps>;
