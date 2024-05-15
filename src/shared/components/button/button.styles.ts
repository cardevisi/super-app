import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

const styles = StyleSheet.create({
  primary: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: theme.colors.black,
    borderWidth: 3,
    backgroundColor: theme.colors.bg_secondary,
    borderRadius: theme.borderRadius.sm,
  },
  outlined: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: theme.colors.borderColor_2,
    borderWidth: 3,
    borderRadius: theme.borderRadius.sm,
  },
  outlinedLabel: {
    color: theme.colors.borderColor_2,
  },
  outlinedIcon: {
    color: theme.colors.borderColor_2,
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    color: theme.colors.white,
    fontSize: 14,
  },
});

export default styles;
