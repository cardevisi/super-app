import { router } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Register() {
  return (
    <View>
      <Text>Register</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          router.navigate('(main)/home');
        }}
      />
    </View>
  );
}
