import { all } from "redux-saga/effects";
import { watchFetchChartData } from "./slices/chartSlice";
import { watchFetchStatsData } from "./slices/statsSlice";

export default function* rootSaga() {
  yield all([watchFetchChartData(), watchFetchStatsData()]);
}
