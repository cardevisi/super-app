import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './icon-button.style';

function IconButton({
  children,
  onPress,
  backgroundColor = 'white',
}: {
  children: React.ReactNode;
  onPress: () => void;
  backgroundColor?: string;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: backgroundColor ? backgroundColor : 'white' },
      ]}>
      <View style={styles.icon}>{children}</View>
    </TouchableOpacity>
  );
}

export default IconButton;
