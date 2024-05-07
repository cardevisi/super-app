import { Card } from '@super-app/shared';
import { images } from '@super-app/shared/assets';
import SearchBar from '@super-app/shared/components/search-bar/search-bar';
import { router } from 'expo-router';
import { View, Button, StyleSheet } from 'react-native';

import { theme } from '@/theme';

export default function ListChildrens() {
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Pesquisar"
        onPress={(inpuTextValue) => {
          console.log(inpuTextValue);
        }}
      />
      <Card
        age={2}
        identity="R47387483"
        image={images.childImage}
        name="Angela Bower"
        onPress={() => {}}
        payment="paid"
        situation="active"
      />
      <Button
        title="Go to Home"
        onPress={() => {
          router.navigate('(main)/home');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.bg_primary,
  },
});
