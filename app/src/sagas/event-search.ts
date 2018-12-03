import { delay } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { EventSearchType, ready, searchEnd } from '../modules/event-search'
// import EventSearchAPI from '../api/client/event-search'
// import API from '../libs/api'

export function* initSaga() {
  yield call(delay, 50)
  try {
    // const {data} = yield call(EventSearchAPI.init)
    // const {data} = yield call(API.getStoreEvents)
    // yield put(ready(data))
  }
  catch(e) {
    yield put(ready(e))
  }
}

function* searchSaga() {
  try {
    // const {data} = yield call(EventSearchAPI.search)
    // const {data} = yield call(API.getStoreEvents)
    // yield put(searchEnd(data))
  }
  catch(e) {
    yield put(searchEnd(e))
  }
}

export default function* () {
  yield all([
    takeEvery(EventSearchType.SEARCH_START, searchSaga)
  ])
}
