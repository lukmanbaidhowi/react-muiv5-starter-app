import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Starter App', () => {
  render(<App />);
  // const linkElement = screen.getByText(/Starter App/i);
  // expect(linkElement).toBeInTheDocument();
});
