import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Button, Text } from 'react-native';

import { theme } from '@/theme';
export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(auth)/login',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    InterRegular: Inter_400Regular,
    InterMedium: Inter_500Medium,
    InterSemiBold: Inter_600SemiBold,
    InterBold: Inter_700Bold,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.bg_primary,
        },
        headerTintColor: theme.colors.bg_secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
          color: theme.colors.white,
        },
        headerRight: () => <Button onPress={() => 'teste'} title="Menu" />,
      }}>
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />

      <Stack.Screen
        name="(main)/childrens/list"
        options={{ title: 'Crianças' }}
      />
      <Stack.Screen name="(main)/profile/[id]" options={{ title: 'Perfil' }} />
      <Stack.Screen
        name="(main)/profile/edit"
        options={{ title: 'Editar Perfil' }}
      />

      <Stack.Screen
        name="(main)/(presence)"
        options={{ title: 'Confirmar Presença' }}
      />
    </Stack>
  );
}
