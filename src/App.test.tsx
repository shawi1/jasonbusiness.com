import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const h1 = screen.getByText("Meet Jason");
  expect(h1).toBeInTheDocument();
});
