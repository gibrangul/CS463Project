import React from 'react';
import { render } from '@testing-library/react';
import AppRouter from './Router/AppRouter';

test('renders learn react link', () => {
  const { getByText } = render(<AppRouter />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
