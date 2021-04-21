import reducer, {
  increment,
  incrementByAmount,
  CounterState,
} from '../features/costumCounter/costumCounterSlice'

describe('toolkit', () => {
  describe('reducer', () => {
    let initialState: CounterState = {
      value: 0,
      status: 'idle',
      mode: 0,
      username: '',
    };

    test('increment mode 0', () => {
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(1);
    });

    test('increment mode 1', () => {
      initialState.mode = 1;
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(100);
    });
  });

  describe('reducer', () => {
    let initialState: CounterState = {
      value: 0,
      status: 'idle',
      mode: 0,
      username: '',
    };

    test('incrementByAmouont mode 0', () => {
      const action = { type: incrementByAmount.type, payload: 3 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(3);
    });

    test('increment mode 1', () => {
      initialState.mode = 1;
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(100);
    });
  });
});