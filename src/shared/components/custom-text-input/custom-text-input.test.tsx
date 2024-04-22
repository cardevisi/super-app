import { Text, TextInput } from 'react-native';
import renderer from 'react-test-renderer';

import CustomTextInput from './custom-text-input';

describe('CustomTextInput', () => {
  it('should render a text input', () => {
    const component = renderer.create(<CustomTextInput />);
    expect(component.root.findByType(TextInput)).toBeTruthy();
  });

  it('should render a placeholder', () => {
    const component = renderer.create(
      <CustomTextInput placeholder="placeholder test" />
    );
    expect(component.root.findByType(TextInput).props.placeholder).toBe(
      'placeholder test'
    );
  });

  it('should render a label text', () => {
    const component = renderer.create(
      <CustomTextInput placeholder="placeholder" label="label test" />
    );
    expect(component.root.findByType(Text).props.children).toBe('label test');
  });
});
