import { all, put, takeEvery, apply } from 'redux-saga/effects'
import { StoreEventsType, searchEnd } from '../../modules/store_events'
import { API } from '../../libs'

function* searchSaga(action: any) {
  try {
    const api = API.create()
    const {data} = yield apply(api, api.getStoreEvents, action)
    yield put(searchEnd(data))
  }
  catch(e) {
    yield put(searchEnd(e))
  }
}

export default function* () {
  yield all([
    takeEvery(StoreEventsType.SEARCH_START, searchSaga)
  ])
}
