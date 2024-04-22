import { TextProps } from 'react-native';

type TextChildren = React.ReactElement<TextProps>;

export interface TextWithLabelProps {
  label: string;
  children: TextChildren | TextChildren[];
}
