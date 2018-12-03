
import { SessionReducer, SessionState, SessionSerialize, SessionDeserialize } from './modules/session'
import { EventSearchReducer, EventSearchState, EventSearchSerialize, EventSearchDeserialize } from './modules/event-search'
import { StoreEventsReducer, StoreEventsState, StoreEventsSerialize, StoreEventsDeserialize } from './modules/store_events'

export interface ApplicationState {
  session: SessionState
  eventSearch: EventSearchState
  storeEvents: StoreEventsState
}

export const serializeState = (state: ApplicationState): any => {
  return {
    session: SessionSerialize(state.session),
    eventSearch: EventSearchSerialize(state.eventSearch),
    storeEvents: StoreEventsSerialize(state.storeEvents),
  }
}

export const deserializeState = (state: ApplicationState): ApplicationState => {
  if (!state) return state
  return {
    session: SessionDeserialize(state.session),
    eventSearch: EventSearchDeserialize(state.eventSearch),
    storeEvents: StoreEventsDeserialize(state.storeEvents),
  }
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  session: SessionReducer,
  eventSearch: EventSearchReducer,
  storeEvents: StoreEventsReducer,
})


// ==========================================================================================================


import { Store, Reducer, createStore, combineReducers, applyMiddleware } from 'redux'
import sagaMiddleware from './saga'


const bindMiddleware = (middlewares) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middlewares))
  }
  return applyMiddleware(...middlewares)
}

export default function (state: ApplicationState): Store<ApplicationState> {

  const store: Store<ApplicationState> = createStore(
    reducers,
    state,
    bindMiddleware([sagaMiddleware.get()]),
  )

  sagaMiddleware.start()

  return store
}
