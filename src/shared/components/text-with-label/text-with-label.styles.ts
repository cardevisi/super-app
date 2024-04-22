import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
    // borderColor: 'green',
    // borderWidth: 1,
  },
  label: {
    fontFamily: theme.fonts.family.medium,
    fontSize: 14,
    textTransform: 'uppercase',
    flex: 3,
  },
  containerText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 4,
    gap: 3,
    // borderColor: 'red',
    // borderWidth: 1,
  },
});

export default styles;
