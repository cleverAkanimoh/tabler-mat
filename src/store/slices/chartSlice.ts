import { createSlice } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ChartState {
  data: { name: string; value: number }[];
  loading: boolean;
  error: string | null;
}

const initialState: ChartState = {
  data: [],
  loading: false,
  error: null,
};

// Define the slice
const chartSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    fetchChartDataRequest: (state) => {
      state.loading = true;
    },
    fetchChartDataSuccess: (
      state,
      action: PayloadAction<{ name: string; value: number }[]>
    ) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchChartDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchChartDataRequest,
  fetchChartDataSuccess,
  fetchChartDataFailure,
} = chartSlice.actions;

export default chartSlice.reducer;

// Saga function to handle data fetching
function* fetchChartDataSaga(): Generator<any, void, any> {
  try {
    const data = yield call(fetchChartDataFromAPI);
    yield put(fetchChartDataSuccess(data));
  } catch (error) {
    yield put(fetchChartDataFailure("Failed to fetch chart data"));
  }
}

// Watcher saga
export function* watchFetchChartData() {
  yield takeLatest(fetchChartDataRequest.type, fetchChartDataSaga);
}

// Mock function to simulate fetching data from an API
function fetchChartDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        ["Slice", "Percentage"],
        ["Slice 1", 47.4],
        ["Slice 2", 33.1],
        ["Slice 3", 10.5],
        ["Slice 4", 9.0],
      ]);
    }, 4000);
  });
}
