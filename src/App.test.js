import { render, screen } from '@testing-library/react';
import App from './App';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

