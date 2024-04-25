import { router } from 'expo-router';
import React from 'react';
import { Button, View } from 'react-native';

import styles from './styles';

function Children() {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Home"
        onPress={() => {
          router.navigate('/');
        }}
      />
      {/* <Text>I am bold</Text>; */}
    </View>
  );
}

export default Children;
