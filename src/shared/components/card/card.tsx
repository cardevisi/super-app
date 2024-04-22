import { memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './card.styles';
import { CardProps } from './card.types';
import { TextWithLabel, TextOneLine } from '../text-with-label';
import { UserImage } from '../user-image';

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
        <UserImage source={image} type="medium" />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
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
