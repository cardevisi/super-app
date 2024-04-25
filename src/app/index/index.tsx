import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { SquareButton, Card } from '@super-app/shared';
import { images } from '@super-app/shared/assets';
import { TextInput } from '@super-app/shared/components/custom-text-input';
import SearchBar from '@super-app/shared/components/search-bar/search-bar';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import {
  Baby,
  CalendarCheck,
  HandCoins,
  IconProps,
} from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '../../theme';

export default function Page() {
  const [fontsLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterMedium: Inter_500Medium,
    InterSemiBold: Inter_600SemiBold,
    InterBold: Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const iconProps = {
    size: 62,
    color: 'black',
    weight: 'bold',
  } as IconProps;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <SquareButton
          title="Crianças"
          onPress={() => {
            router.navigate('/children');
          }}>
          <Baby {...iconProps} />
        </SquareButton>
      </View>
      <View style={styles.box}>
        <SquareButton
          title="Pagamentos"
          onPress={() => {
            router.navigate('/payments');
          }}>
          <HandCoins {...iconProps} />
        </SquareButton>
      </View>
      <View style={styles.boxConfirm}>
        <SquareButton title="Confirmar Presença" onPress={() => {}}>
          <CalendarCheck {...iconProps} />
        </SquareButton>
      </View>
      <View style={{ width: '100%' }}>
        <Card
          image={images.childImage}
          name="Angela Bower"
          age={2}
          identity="R6890000"
          onPress={() => {}}
          payment="paid"
          situation="active"
        />
        <View style={{ marginBottom: 16 }}>
          <TextInput label="Email" placeholder="email" />
        </View>
        <View style={{ marginBottom: 16 }}>
          <TextInput label="Password" placeholder="password" />
        </View>
        <SearchBar
          placeholder="Pesquisar"
          onPress={(inpuTextValue) => {
            console.log(inpuTextValue);
          }}
        />
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
