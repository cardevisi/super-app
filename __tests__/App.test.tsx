import { render } from '@testing-library/react-native';
import React from 'react';

import App from '../App';

describe('<App />', () => {
  it('should show a text Hello Word', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText('Hello World')).toBeTruthy();
  });
});
