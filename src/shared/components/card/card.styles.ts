import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 32,
    paddingLeft: 18,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
  },
  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: 20,
  },
});

export default styles;
