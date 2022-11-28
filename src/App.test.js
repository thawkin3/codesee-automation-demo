import { render, screen } from '@testing-library/react';
import App from './App';

test('renders icon library header', () => {
  render(<App />);
  expect(screen.getByText('Icon Library')).toBeInTheDocument();
});
