import SearchBar from '@super-app/shared/components/search-bar/search-bar';
import { Link, Slot } from 'expo-router';
import { View } from 'react-native';

export default function PresenceLayout() {
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
        <Link href="/confirmed">CONFIRMADOS</Link>
        <Link href="/to-confirm">A CONFIRMAR</Link>
      </View>
      <Slot />
    </View>
  );
}
