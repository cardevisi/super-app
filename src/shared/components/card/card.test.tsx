import { Image, Text, TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';

import { Card } from './card';
import { images } from '../../assets';
describe('Card', () => {
  it('should render image from user', () => {
    const component = renderer.create(
      <Card
        image={images.childImage}
        age={2}
        identity="30494949"
        name="Angela Bower"
        onPress={() => {}}
        payment="paid"
        situation="active"
      />
    );
    const testInstance = component.root;
    expect(testInstance.findByType(Image).props.source).toBeTruthy();
  });

  it('should render name from user', () => {
    const component = renderer.create(
      <Card
        image={images.childImage}
        age={2}
        identity="30494949"
        name="Angela Bower"
        onPress={() => {}}
        payment="paid"
        situation="active"
      />
    );
    const testInstance = component.root;
    expect(testInstance.findAllByType(Text)[0].props.children).toBe(
      'Angela Bower'
    );
  });

  it('should render age from user', () => {
    const component = renderer.create(
      <Card
        image={images.childImage}
        age={2}
        identity="30494949"
        name="Angela Bower"
        onPress={() => {}}
        payment="paid"
        situation="active"
      />
    );
    const testInstance = component.root;
    expect(testInstance.findAllByType(Text)[1].props.children).toBe(2);
  });

  it('should render identity from user', () => {
    const component = renderer.create(
      <Card
        image={images.childImage}
        age={2}
        identity="30494949"
        name="Angela Bower"
        onPress={() => {}}
        payment="paid"
        situation="active"
      />
    );
    const testInstance = component.root;
    expect(testInstance.findAllByType(Text)[2].props.children).toBe('30494949');
  });

  it('should render situation from user', () => {
    const component = renderer.create(
      <Card
        image={images.childImage}
        age={2}
        identity="30494949"
        name="Angela Bower"
        onPress={() => {}}
        payment="paid"
        situation="active"
      />
    );
    const testInstance = component.root;
    expect(testInstance.findAllByType(Text)[3].props.children).toBe('active');
  });

  it('should render payment from user', () => {
    const component = renderer.create(
      <Card
        image={images.childImage}
        age={2}
        identity="30494949"
        name="Angela Bower"
        onPress={() => {}}
        payment="paid"
        situation="active"
      />
    );
    const testInstance = component.root;
    expect(testInstance.findAllByType(Text)[4].props.children).toBe('paid');
  });

  it('should call handle touchable on press', () => {
    const handleTouchable = jest.fn();
    const component = renderer.create(
      <Card
        image={images.childImage}
        age={2}
        identity="30494949"
        name="Angela Bower"
        onPress={handleTouchable}
        payment="paid"
        situation="active"
      />
    );
    const touchableOpacity = component.root.findByType(TouchableOpacity);
    touchableOpacity.props.onPress();
    expect(handleTouchable).toHaveBeenCalled();
  });
});
