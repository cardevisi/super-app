import { Image } from 'react-native';

import styles from './user-image.styles';
import { UserImageProps } from './user-image.types';

const UserImageBase = ({
  source,
  type = 'medium',
  withBorder = false,
}: UserImageProps) => {
  const border = withBorder ? {} : { borderWidth: 0 };
  const allStyles = { ...styles[type], ...styles.container, ...border };

  return <Image source={source} style={allStyles} />;
};

export const UserImage = UserImageBase;
