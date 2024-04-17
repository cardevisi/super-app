import { SquareButton } from '@super-app/shared';
import { Baby, CalendarCheck, HandCoins } from 'phosphor-react-native';
import { StyleSheet, View } from 'react-native';

export default function Page() {
  const iconProps = {
    size: 62,
    color: 'black',
  };

  return (
    <View style={styles.container}>
      <SquareButton title="Crianças" handleTouchable={() => {}}>
        <Baby {...iconProps} />
      </SquareButton>
      <SquareButton title="Pagamentos" handleTouchable={() => {}}>
        <HandCoins {...iconProps} />
      </SquareButton>
      <SquareButton title="Confirmar Presença" handleTouchable={() => {}}>
        <CalendarCheck {...iconProps} />
      </SquareButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
});
