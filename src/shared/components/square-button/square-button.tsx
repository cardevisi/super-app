import { Baby } from 'phosphor-react-native';
import React, { Children } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './square-button.styles';

function SquareButton({
  title,
  onPress,
  children,
}: {
  title: string;
  onPress: () => void;
  children?: React.ReactNode;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>{children}</View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default SquareButton;
