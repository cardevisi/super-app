import { SquareButton } from '@super-app/shared';
import { Baby, CalendarCheck, HandCoins } from 'phosphor-react-native';
import { StyleSheet, View } from 'react-native';

import { theme } from '../src/theme';

export default function Page() {
  const iconProps = {
    size: 62,
    color: 'black',
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <SquareButton title="Crianças" onPress={() => {}}>
          <Baby {...iconProps} />
        </SquareButton>
      </View>
      <View style={styles.box}>
        <SquareButton title="Pagamentos" onPress={() => {}}>
          <HandCoins {...iconProps} />
        </SquareButton>
      </View>
      <View style={styles.boxConfirm}>
        <SquareButton title="Confirmar Presença" onPress={() => {}}>
          <CalendarCheck {...iconProps} />
        </SquareButton>
      </View>
    </View>
  );
}

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
