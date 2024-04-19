import { MagnifyingGlass } from 'phosphor-react-native';
import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './search-bar.style';
import { theme } from '../../../theme';
import { IconButton } from '../icon-button';

export default function SearchBar({
  placeholder,
  onPress,
}: {
  placeholder: string;
  onPress: (value: string) => void;
}) {
  const [inpuTextValue, setInputTextValue] = React.useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(inpuTextValue) => setInputTextValue(inpuTextValue)}
        value={inpuTextValue}
        placeholder={placeholder}
        style={styles.input}
      />
      <IconButton
        onPress={() => onPress(inpuTextValue)}
        backgroundColor={theme.colors.bg_secondary}>
        <MagnifyingGlass weight="bold" color="black" />
      </IconButton>
    </View>
  );
}
