import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from '../../app/store';
// import { fetchCount } from './counterAPI';

const sleep = (msec: any): void => {
  const start = new Date() as any;
  while ((new Date() as any) - start < msec);
};

export const fetchDummy = createAsyncThunk(
  'fetch/dummy',
  async (num: number): Promise<number> => {
    await sleep(2000);
    return num;
  }
);

export const fetchJSON = createAsyncThunk(
  'fetch/api',
  async (): Promise<string> => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    const { username } = res.data;
    return username;
  }
);

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
  mode: number;
  username: string;
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
  mode: 0,
  username: '',
};

export const costumCounterSlice = createSlice({
  name: 'customCounter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      switch (state.mode) {
        case 0:
          state.value += 1;
          break;
        case 1:
          state.value += 100;
          break;
        case 2:
          state.value += 10000;
          break;
        default:
          break;
      }
      // state.value += 1;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      switch (state.mode) {
        case 0:
          state.value += 1 * action.payload;
          break;
        case 1:
          state.value += 100 * action.payload;
          break;
        case 2:
          state.value += 10000 * action.payload;
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDummy.fulfilled, (state, action) => {
      state.value = 100 + action.payload;
    });
    builder.addCase(fetchJSON.fulfilled, (state, action) => {
      state.username = action.payload;
    });
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
} = costumCounterSlice.actions;
export const selectCostumCounter = (state: RootState) => state.costumCounter;
export default costumCounterSlice.reducer;
