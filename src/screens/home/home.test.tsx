import renderer from 'react-test-renderer';

import { HomeScreen } from '@/screens';
import { SquareButton } from '@/shared/components';

const mockedNavigate = jest.fn();

jest.mock('expo-router', () => ({
  useNavigation: () => ({ navigate: mockedNavigate, setOptions: jest.fn() }),
}));

jest.mock('phosphor-react-native', () => {
  return {
    Baby: jest.fn(() => 'icon'),
    HandCoins: jest.fn(() => 'icon'),
    CalendarCheck: jest.fn(() => 'icon'),
  };
});

describe('Home', () => {
  it('should render the children, payments and confirm attendance buttons.', () => {
    const component = renderer.create(<HomeScreen />);
    const testInstance = component.root;

    expect(testInstance.findAllByType(SquareButton)[0].props.title).toBe(
      'Crianças'
    );
    expect(testInstance.findAllByType(SquareButton)[1].props.title).toBe(
      'Pagamentos'
    );
    expect(testInstance.findAllByType(SquareButton)[2].props.title).toBe(
      'Confirmar Presença'
    );
  });
});
