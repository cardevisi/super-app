import { SquareCard } from '@super-app/shared';
import { StyleSheet, View } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <SquareCard title="Crianças" />
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
