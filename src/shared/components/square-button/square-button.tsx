import { Baby } from 'phosphor-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './square-button.styles';

function SquareButton({
  title,
  handleTouchable,
}: {
  title: string;
  handleTouchable: () => void;
}) {
  return (
    <TouchableOpacity onPress={handleTouchable} style={styles.container}>
      <Baby size={62} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default SquareButton;
