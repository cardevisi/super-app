import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './custom-text-input.style';
import CustomTextInputProps from './custom-text-input.type';

function CustomTextInput({ label, placeholder }: CustomTextInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
}

export default CustomTextInput;
