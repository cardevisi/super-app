import { Text, TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';

import { Card } from './card';
import { images } from '../../assets';
import { TextWithLabel, TextOneLine } from '../text-with-label';
import { UserImage } from '../user-image';
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
    expect(testInstance.findByType(UserImage).props.source).toBeTruthy();
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

  it('should render label for age from user', () => {
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
    expect(testInstance.findAllByType(TextWithLabel)[0].props.label).toBe(
      'idade'
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
    expect(testInstance.findAllByType(TextOneLine)[0].props.children).toEqual([
      2,
      ' anos',
    ]);
  });

  it('should render label for identity from user', () => {
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
    expect(testInstance.findAllByType(TextWithLabel)[1].props.label).toBe(
      'identidade'
    );
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
    expect(testInstance.findAllByType(TextOneLine)[1].props.children).toEqual(
      '30494949'
    );
  });

  it('should render label for situation from user', () => {
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
    expect(testInstance.findAllByType(TextWithLabel)[2].props.label).toBe(
      'situação'
    );
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
    expect(testInstance.findAllByType(TextOneLine)[2].props.children).toEqual([
      'ATIVO',
      '/',
      'PAGO',
    ]);
  });

  it('should render payment from user', () => {
    const component = renderer.create(
      <Card
        image={images.childImage}
        age={2}
        identity="30494949"
        name="Angela Bower"
        onPress={() => {}}
        payment="pending"
        situation="active"
      />
    );
    const testInstance = component.root;
    expect(testInstance.findAllByType(TextOneLine)[2].props.children).toEqual([
      'ATIVO',
      '/',
      'PEND',
    ]);
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
