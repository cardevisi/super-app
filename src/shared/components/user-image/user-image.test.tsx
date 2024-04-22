import { Image } from 'react-native';
import renderer from 'react-test-renderer';

import { UserImage } from './user-image';
import { images } from '../../assets';

describe('UserImage', () => {
  it('should render image', () => {
    const component = renderer.create(<UserImage source={images.childImage} />);
    const testInstance = component.root;

    expect(testInstance.findByType(Image).props.source).toBeTruthy();
  });

  it('should render image with type', () => {
    const component = renderer.create(
      <UserImage type="large" source={images.childImage} />
    );
    const testInstance = component.root;

    expect(testInstance.props.type).toBe('large');
  });

  it('should render image with border', () => {
    const component = renderer.create(
      <UserImage type="small" withBorder source={images.childImage} />
    );
    const testInstance = component.root;

    expect(testInstance.props.withBorder).toBe(true);
  });
});
