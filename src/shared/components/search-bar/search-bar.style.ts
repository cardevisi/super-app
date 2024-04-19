import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 65,
  },
  input: {
    width: '80%',
    height: 40,
    fontSize: 16,
    fontFamily: theme.fonts.family.regular,
    borderColor: theme.colors.color_b1,
    borderRadius: theme.borderRadius.sm,
    paddingHorizontal: 12,
    borderWidth: 1,
    color: theme.colors.black,
  },
});

export default styles;
