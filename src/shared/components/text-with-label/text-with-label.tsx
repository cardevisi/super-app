import { Text, View } from 'react-native';

import styles from './text-with-label.styles';
import { TextWithLabelProps } from './text-with-label.types';

const TextWithLabelBase = ({ label, children }: TextWithLabelProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containerText}>{children}</View>
    </View>
  );
};

export const TextWithLabel = TextWithLabelBase;
