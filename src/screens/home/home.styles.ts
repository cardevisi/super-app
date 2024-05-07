import { StyleSheet } from 'react-native';

import { theme } from '@/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.bg_primary,
  },
  box: {
    gap: 16,
    width: 140,
    height: 140,
  },
  boxConfirm: {
    gap: 16,
    width: 140,
    height: 148,
  },
});

export default styles;
