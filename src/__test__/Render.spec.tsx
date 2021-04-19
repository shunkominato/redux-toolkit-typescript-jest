import React from 'react';
import { render, screen } from '@testing-library/react';
import Render from '../Render';

describe('render', () => {
  it('render dom', () => {
    render(<Render />);
    // screen.debug(screen.getByRole('heading'));
    expect(screen.getByRole('heading')).toBeTruthy();
    expect(screen.getAllByRole('button')[0]).toBeTruthy();
    expect(screen.getAllByRole('button')[1]).toBeTruthy();
    expect(screen.getAllByTestId('copyright')).toBeTruthy();
  });
});
