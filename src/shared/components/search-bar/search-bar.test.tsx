import { TextInput } from 'react-native';
import renderer, { act } from 'react-test-renderer';

import SearchBar from './search-bar';
import { IconButton } from '../icon-button';

jest.mock('phosphor-react-native', () => ({
  MagnifyingGlass: jest.fn(() => <></>),
}));

describe('SearchBar', () => {
  it('should render a search bar', () => {
    const component = renderer.create(
      <SearchBar placeholder="placeholder" onPress={() => {}} />
    );
    expect(component.root.findByType(TextInput)).toBeTruthy();
    expect(component.root.findByType(IconButton)).toBeTruthy();
  });

  it('should render a placeholder', () => {
    const component = renderer.create(
      <SearchBar placeholder="placeholder test" onPress={() => {}} />
    );
    expect(component.root.findByType(TextInput).props.placeholder).toBe(
      'placeholder test'
    );
  });

  it('should render a onPress function', () => {
    const handleOnPress = jest.fn();
    const component = renderer.create(
      <SearchBar placeholder="placeholder" onPress={handleOnPress} />
    );
    const touchableOpacity = component.root.findByType(IconButton);
    touchableOpacity.props.onPress();
    expect(handleOnPress).toHaveBeenCalled();
  });

  it('should render a onPress function', () => {
    const handleOnPress = jest.fn();
    const component = renderer.create(
      <SearchBar placeholder="placeholder" onPress={handleOnPress} />
    );

    act(() => {
      component.root
        .findByType(TextInput)
        .props.onChangeText('test initial value');
    });
    expect(component.root.findByType(TextInput).props.value).toBe(
      'test initial value'
    );

    act(() => {
      component.root.findByType(TextInput).props.onChangeText('test new value');
    });
    expect(component.root.findByType(TextInput).props.value).toBe(
      'test new value'
    );

    act(() => {
      const touchableOpacity = component.root.findByType(IconButton);
      touchableOpacity.props.onPress();
    });
    expect(handleOnPress).toHaveBeenCalledWith('test new value');
  });
});
