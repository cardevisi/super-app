import { Text, TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';

import SquareButton from './square-button';

jest.mock('phosphor-react-native', () => {
  return {
    Baby: jest.fn(() => 'icon'),
  };
});

describe('SquareButton', () => {
  it('should render a square button with title', () => {
    const component = renderer.create(
      <SquareButton title="Title" handleTouchable={() => {}} />
    );
    expect(component.root.findByType(Text).props.children).toBe('Title');
  });

  it('should call handle touchable on press', () => {
    const handleTouchable = jest.fn();
    const component = renderer.create(
      <SquareButton title="Title" handleTouchable={handleTouchable} />
    );
    const touchableOpacity = component.root.findByType(TouchableOpacity);
    touchableOpacity.props.onPress();
    expect(handleTouchable).toHaveBeenCalled();
  });
});
