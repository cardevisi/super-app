import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bg_secondary,
    borderColor: theme.colors.black,
    borderRadius: theme.borderRadius.icons,
    borderWidth: 4,
  },
  icon: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});

export default styles;
