import { all } from "redux-saga/effects";
import { watchFetchChartData } from "./slices/chartSlice";

export default function* rootSaga() {
  yield all([watchFetchChartData()]);
}
