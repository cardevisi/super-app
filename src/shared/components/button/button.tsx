import { Plus, PencilSimpleLine, Check } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './button.styles';
import { ButtonProps } from './button.types';

function Button({ onPress, label, variant, icon }: ButtonProps) {
  const getIconColor = (variant: ButtonProps['variant']) => {
    if (variant === 'primary') {
      return styles.icon;
    } else if (variant === 'outlined') {
      return styles.outlinedIcon;
    }
  };

  const getLabelColor = (variant: ButtonProps['variant']) => {
    if (variant === 'primary') {
      return styles.label;
    } else if (variant === 'outlined') {
      return styles.outlinedLabel;
    }
  };

  const getIcon = (icon: ButtonProps['icon']) => {
    if (icon === 'plus') {
      return <Plus weight="bold" style={getIconColor(variant)} />;
    } else if (icon === 'pencil') {
      return <PencilSimpleLine weight="bold" style={getIconColor(variant)} />;
    } else if (icon === 'check') {
      return <Check weight="bold" style={getIconColor(variant)} />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={variant ? styles[variant] : {}}>
        {getIcon(icon)}
        <Text style={getLabelColor(variant)}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
