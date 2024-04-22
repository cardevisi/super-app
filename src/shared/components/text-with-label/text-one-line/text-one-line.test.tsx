import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import { TextOneLine } from './text-one-line';
describe('TextOneLine', () => {
  it('should render text', () => {
    const component = renderer.create(<TextOneLine>TextOnLine</TextOneLine>);

    const testInstance = component.root;

    expect(testInstance.findByType(Text).props.children).toBe('TextOnLine');
  });

  it('should render type component', () => {
    const component = renderer.create(
      <TextOneLine type="default">TextOnLine</TextOneLine>
    );

    const testInstance = component.root;

    expect(testInstance.props.type).toBe('default');
  });
});
