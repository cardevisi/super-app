import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './square-card.styles';
import { images } from '../../assets';

function SquareCard({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Image source={images.baby} aria-label="baby" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default SquareCard;
