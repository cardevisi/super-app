import { MagnifyingGlass } from 'phosphor-react-native';
import { TouchableOpacity, View } from 'react-native';
import renderer from 'react-test-renderer';

import IconButton from './icon-button';

jest.mock('phosphor-react-native', () => ({
  MagnifyingGlass: jest.fn(() => <></>),
}));

describe('IconButton', () => {
  it('should render a icon button', () => {
    const component = renderer.create(
      <IconButton onPress={() => {}} backgroundColor="white">
        <MagnifyingGlass />
      </IconButton>
    );
    expect(component.root.findByType(View)).toBeTruthy();
  });

  it('should render a icon', () => {
    const component = renderer.create(
      <IconButton onPress={() => {}} backgroundColor="white">
        <MagnifyingGlass />
      </IconButton>
    );
    expect(component.root.findByType(View)).toBeTruthy();
    expect(component.root.findByType(MagnifyingGlass)).toBeTruthy();
  });

  it('should render a background color', () => {
    const component = renderer.create(
      <IconButton onPress={() => {}} backgroundColor="white">
        <MagnifyingGlass />
      </IconButton>
    );
    expect(component.root.findByType(View).props.style.backgroundColor).toBe(
      'white'
    );
  });

  it('should render a onPress function', () => {
    const handleOnPress = jest.fn();
    const component = renderer.create(
      <IconButton onPress={handleOnPress} backgroundColor="white">
        <MagnifyingGlass />
      </IconButton>
    );
    const touchableOpacity = component.root.findByType(TouchableOpacity);
    touchableOpacity.props.onPress();
    expect(handleOnPress).toHaveBeenCalled();
  });
});
