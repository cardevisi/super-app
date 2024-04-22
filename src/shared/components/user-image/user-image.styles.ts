import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.white,
  },
  small: {
    borderRadius: theme.borderRadius.md,
    borderWidth: 6,
    width: 56,
    height: 56,
  },
  medium: {
    borderRadius: theme.borderRadius.lg,
    borderWidth: 6,
    width: 82,
    height: 82,
  },
  large: {
    borderRadius: theme.borderRadius.xlg,
    borderWidth: 8,
    width: 112,
    height: 112,
  },
});

export default styles;
