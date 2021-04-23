import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import CostumCounterAsync from '../features/costumCounter/CostumCounterAsync';
import costumCounterReducer from '../features/costumCounter/costumCounterSlice';
import { configureStore } from '@reduxjs/toolkit';
const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: 'bre' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe('toolkit', () => {
  let store: any;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        costumCounter: costumCounterReducer,
      },
    });
  });

  test('test1', async () => {
    render(
      <Provider store={store}>
        <CostumCounterAsync />
      </Provider>
    );

    expect(screen.queryByRole('heading')).toBeNull();
    await userEvent.click(screen.getByText('FetchJSON'));
    expect(await screen.findByText('bre')).toBeInTheDocument();
    // expect(await screen.getByTestId('name')).toHaveTextContent('bre');
  });
});
