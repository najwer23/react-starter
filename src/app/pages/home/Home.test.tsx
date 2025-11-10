import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Home } from './Home';

describe.skip('Home test', () => {
  test('Should show Hello World!', () => {
    render(<Home />);
    expect(screen.getByText(/Hello World!/i)).toBeDefined();
  });
});
