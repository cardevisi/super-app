import SearchBar from '@super-app/shared/components/search-bar/search-bar';
import { Slot, useNavigation } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/shared';

export default function PresenceLayout() {
  const navigator = useNavigation();
  return (
    <View>
      <SearchBar
        placeholder="Pesquisar"
        onPress={(inpuTextValue) => {
          console.log(inpuTextValue);
        }}
      />
      <View
        style={{ display: 'flex', flexDirection: 'row', gap: 10, padding: 15 }}>
        <Button
          label="CONFIRMADOS"
          variant="outlined"
          icon="check"
          onPress={() => {
            navigator.navigate('confirmed');
          }}
        />
        <Button
          label="A CONFIRMAR"
          variant="primary"
          icon="plus"
          onPress={() => {
            navigator.navigate('to-confirm');
          }}
        />
      </View>
      <Slot />
    </View>
  );
}
