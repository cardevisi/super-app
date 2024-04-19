import { ImageSourcePropType } from 'react-native';

export interface CardProps {
  image: ImageSourcePropType;
  name: string;
  age: number;
  identity: string;
  situation: 'active' | 'inactive';
  payment: 'paid' | 'pending';
  onPress: () => void;
}
