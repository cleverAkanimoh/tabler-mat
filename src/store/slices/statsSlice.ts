import { currencyFreakUrl } from "@/lib/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";

interface StatsState {
  data: { name: string; value: number }[];
  loading: boolean;
  error: string | null;
}

const initialState: StatsState = {
  data: [],
  loading: false,
  error: null,
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    fetchStatsDataRequest: (state) => {
      state.loading = true;
    },
    fetchStatsDataSuccess: (
      state,
      action: PayloadAction<{ name: string; value: number }[]>
    ) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchStatsDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStatsDataFailure,
  fetchStatsDataRequest,
  fetchStatsDataSuccess,
} = statsSlice.actions;

export default statsSlice.reducer;

function* fetchStatsDataSaga(): Generator<any, void, any> {
  try {
    const data = yield call(fetchStatsDataFromAPI);
    yield put(fetchStatsDataSuccess(data));
  } catch (error) {
    yield put(fetchStatsDataFailure("Failed to fetch Stats data"));
  }
}

// Watcher saga
export function* watchFetchStatsData() {
  yield takeLatest(fetchStatsDataRequest.type, fetchStatsDataSaga);
}

function fetchStatsDataFromAPI() {
  const result = fetch(currencyFreakUrl)
    .then((res) => res.json())
    .then((res) => {
      const currencyRates = res.rates;
      return Object.entries(currencyRates)
        .map(([name, value]) => ({
          name,
          value: Math.floor(Number(value)),
        }))
        .slice(0, 6);
    });
  console.log(result);

  return result;
}
