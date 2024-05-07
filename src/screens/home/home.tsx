import { SquareButton } from '@super-app/shared';
import { router, useNavigation } from 'expo-router';
import {
  Baby,
  CalendarCheck,
  HandCoins,
  IconProps,
} from 'phosphor-react-native';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './home.styles';
import { HomeProps } from './home.types';

import { theme } from '@/theme';

const Logo = () => (
  <Text style={{ color: theme.colors.tertiary }}>SUPER APP</Text>
);

const HomeBase = (props: HomeProps) => {
  const navigation = useNavigation();

  const iconProps = {
    size: 62,
    color: 'black',
    weight: 'bold',
  } as IconProps;

  const handleNavigate = (route: string) => {
    router.navigate(route);
  };

  useEffect(() => {
    navigation.setOptions({ title: 'Home', headerLeft: () => <Logo /> });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <SquareButton
          title="Crianças"
          onPress={() => handleNavigate('childrens/list')}>
          <Baby {...iconProps} />
        </SquareButton>
      </View>

      <View style={styles.box}>
        <SquareButton
          title="Pagamentos"
          onPress={() => handleNavigate('payments/list')}>
          <HandCoins {...iconProps} />
        </SquareButton>
      </View>
      <View style={styles.boxConfirm}>
        <SquareButton
          title="Confirmar Presença"
          onPress={() => handleNavigate('(presence)/to-confirm')}>
          <CalendarCheck {...iconProps} />
        </SquareButton>
      </View>
    </View>
  );
};

export const HomeScreen = HomeBase;
