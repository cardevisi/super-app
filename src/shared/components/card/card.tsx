import { memo } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

import styles from './card.styles';
import { CardProps } from './card.types';
import { TextWithLabel, TextOneLine } from '../text-with-label';

const PAYMENT = { paid: 'PAGO', pending: 'PEND' };
const SITUATION = { active: 'ATIVO', inactive: 'INATIVO' };

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
        <TextWithLabel label="idade">
          <TextOneLine>{age} anos</TextOneLine>
        </TextWithLabel>
        <TextWithLabel label="identidade">
          <TextOneLine>{identity}</TextOneLine>
        </TextWithLabel>
        <TextWithLabel label="situação">
          <TextOneLine type="success">
            {SITUATION[situation]}/{PAYMENT[payment]}
          </TextOneLine>
        </TextWithLabel>
      </View>
    </TouchableOpacity>
  );
};

export const Card = memo(CardBase);
