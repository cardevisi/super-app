import { ImageSourcePropType } from 'react-native';

export interface UserImageProps {
  source: ImageSourcePropType;
  type?: 'small' | 'medium' | 'large';
  withBorder?: boolean;
}
