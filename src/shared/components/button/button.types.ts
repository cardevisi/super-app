export interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'outlined';
  icon?: 'plus' | 'pencil' | 'check';
}
