import { memo } from 'react';
import { Text } from 'react-native';

import styles from './text-one-line.styles';
import { TextOneLineProps } from './text-one-line.types';

const TextOneLineBase = ({ type = 'default', children }: TextOneLineProps) => {
  const allStyles = { ...styles[type], ...styles.text };

  return (
    <Text style={allStyles} numberOfLines={1} ellipsizeMode="tail">
      {children}
    </Text>
  );
};

export const TextOneLine = memo(TextOneLineBase);
