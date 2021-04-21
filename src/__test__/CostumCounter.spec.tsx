import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
// import Redux from "./Redux";
import { configureStore } from '@reduxjs/toolkit';
import costumCounterReducer from '../features/costumCounter/costumCounterSlice';
import CostumCounter from '../features/costumCounter/CostumCounter';
afterEach(() => {
  cleanup();
});

describe('Redux Integration Test', () => {
  let store: any;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        costumCounter: costumCounterReducer,
      },
    });
  });

  test('test1', () => {
    render(
      <Provider store={store}>
        <CostumCounter />
      </Provider>
    );

    userEvent.click(screen.getByTestId('one'));
    userEvent.click(screen.getByTestId('one'));
    userEvent.click(screen.getByTestId('one'));
    userEvent.click(screen.getByTestId('one'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('4');
  });

  test('test1', () => {
    render(
      <Provider store={store}>
        <CostumCounter />
      </Provider>
    );

    userEvent.type(screen.getByTestId('tth'), '50');
    userEvent.click(screen.getByTestId('two'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('50');
  });
});
