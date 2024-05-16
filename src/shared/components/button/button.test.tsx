import renderer from 'react-test-renderer';

import { Button } from './index';

jest.mock('phosphor-react-native', () => {
  return {
    Plus: jest.fn(() => 'icon'),
  };
});

describe('Button', () => {
  it('should render a button', () => {
    const component = renderer.create(
      <Button label="Label" onPress={() => {}} />
    );
    expect(component.root.props.label).toBe('Label');
  });

  it('should call onPress function', () => {
    const onPress = jest.fn();
    const component = renderer.create(
      <Button label="Label" onPress={onPress} />
    );
    component.root.props.onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
