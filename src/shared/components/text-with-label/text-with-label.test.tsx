import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import { TextWithLabel } from './text-with-label';
describe('TextWithLabel', () => {
  it('should render label', () => {
    const component = renderer.create(
      <TextWithLabel label="label">
        <Text>Text</Text>
      </TextWithLabel>
    );
    const testInstance = component.root;

    expect(testInstance.findAllByType(Text)[0].props.children).toBe('label');
  });

  it('should render text', () => {
    const component = renderer.create(
      <TextWithLabel label="label">
        <Text>Text</Text>
      </TextWithLabel>
    );
    const testInstance = component.root;

    expect(testInstance.findAllByType(Text)[1].props.children).toBe('Text');
  });
});
