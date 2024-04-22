import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.family.semiBold,
    marginBottom: 8,
  },
  input: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.color_b1,
    color: theme.colors.black,
    fontSize: 16,
    fontFamily: theme.fonts.family.regular,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});

export default styles;
