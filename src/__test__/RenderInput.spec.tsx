import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import RenderInput from '../RenderInput';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: 'bre' }));
  })
);

const output = (text: string) => {
  console.log(text);
};

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

describe('update input', () => {
  it('update input', () => {
    render(<RenderInput aa="s" output={output} />);
    const inputVaule = screen.getByPlaceholderText('enter');
    userEvent.type(inputVaule, 'test');
    expect(inputVaule.value).toBe('test');
  });
});

describe('console', () => {
  it('not', async () => {
    render(<RenderInput aa="s" output={output} />);
    const button = screen.getAllByTestId('click');
    userEvent.click(button[0]);

    expect(await screen.findByText('bre')).toBeInTheDocument();
    expect(button[0]).toHaveAttribute('disabled');
  });
});
