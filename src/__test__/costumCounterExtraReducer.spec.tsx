import reducer, {
  increment,
  incrementByAmount,
  CounterState,
  fetchDummy,
} from '../features/costumCounter/costumCounterSlice';

describe('toolkit', () => {
  describe('extraReducer', () => {
    let initialState: CounterState = {
      value: 0,
      status: 'idle',
      mode: 0,
      username: '',
    };

    test('increment mode 0', () => {
      const action = { type: fetchDummy.fulfilled, payload: 1 };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(101);
    });

    test('increment mode 1', () => {
      initialState.mode = 1;
      const action = { type: increment.type };
      const state = reducer(initialState, action);
      expect(state.value).toEqual(100);
    });
  });
});
