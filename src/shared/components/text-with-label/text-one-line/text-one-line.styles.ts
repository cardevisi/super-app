import { StyleSheet } from 'react-native';

import { theme } from '../../../../theme';

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.sm,
    textAlign: 'right',
  },
  default: { color: theme.colors.black },
  success: { color: theme.colors.success },
  warning: { color: theme.colors.warning },
  error: { color: theme.colors.error },
});

export default styles;
