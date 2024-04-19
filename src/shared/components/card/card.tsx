import { memo } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

import styles from './card.styles';
import { CardProps } from './card.types';

const CardBase = ({
  image,
  name,
  age,
  identity,
  situation,
  payment,
  onPress,
}: CardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Image
          source={image}
          style={{ borderRadius: 24, width: 82, height: 82 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={{ fontSize: 14 }}>{age}</Text>
        <Text style={{ fontSize: 14 }}>{identity}</Text>
        <Text style={{ fontSize: 14 }}>{situation}</Text>
        <Text style={{ fontSize: 14 }}>{payment}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Card = memo(CardBase);
