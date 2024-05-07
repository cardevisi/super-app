import { TextInput } from '@super-app/shared/components/custom-text-input';
import { router } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';

import { theme } from '@/theme';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.white }}>Login</Text>
      <View style={{ width: '100%' }}>
        <View style={{ marginBottom: 16 }}>
          <TextInput label="Email" placeholder="email" />
        </View>
        <View style={{ marginBottom: 16 }}>
          <TextInput label="Password" placeholder="password" />
        </View>
      </View>
      <Button
        title="Go to Home"
        onPress={() => {
          router.navigate('(main)/home');
        }}
      />
      <Button
        title="Register"
        onPress={() => {
          router.navigate('/register');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.bg_primary,
  },
});
