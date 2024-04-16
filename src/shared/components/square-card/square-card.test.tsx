import { render } from '@testing-library/react-native';

import SquareCard from './square-card';

describe('SquareCard', () => {
  it('should render a square card', () => {
    const { getByText, getByLabelText } = render(<SquareCard title="Title" />);
    expect(getByLabelText('baby')).toBeTruthy();
    expect(getByText('Title')).toBeTruthy();
  });
});
