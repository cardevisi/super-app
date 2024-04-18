import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg_secondary,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
    width: '100%',
    height: '100%',
    borderRadius: theme.borderRadius.lg,
  },
  title: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default styles;
