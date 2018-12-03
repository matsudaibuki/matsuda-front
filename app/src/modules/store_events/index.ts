import { Reducer } from 'redux'
import { ListItem } from '../../libs'

// ---
// Types

export const StoreEventsType = {
  READY:        'store-events/ready',
  CHANGE_DATA:  'store-events/change-data',
  SEARCH_START: 'store-events/search-start',
  SEARCH_END:   'store-events/search-end',
}

export interface StoreEventsState {
  shiftList: Array<ListItem>
  searchConditions: {
    entryShift: string
  }
  searchResults: Array<any>
  isSearching: boolean
}

export const StoreEventsSerialize = state => state

export const StoreEventsDeserialize = (state: StoreEventsState): StoreEventsState => {
  return {
    ...state,
    shiftList: ListItem.getListItems(state.shiftList),
  }
}


// ---
// Initial states

const initialState: StoreEventsState = {
  shiftList: [
    new ListItem('1', 'test1', 'test1'),
    new ListItem('2', 'test2', 'test2'),
    new ListItem('3', 'test3', 'test3'),
  ],
  searchConditions: {
    entryShift: '',
  },
  searchResults: [],
  isSearching: false,
}


// ---
// Action Creators

export const changeData = (target, value) => {
  return { type: StoreEventsType.CHANGE_DATA, target: target, value: value }
}

export const searchStart = (searchConditions) => {
  return { type: StoreEventsType.SEARCH_START, searchConditions: searchConditions }
}

export const searchEnd = (list) => {
  return { type: StoreEventsType.SEARCH_END, list: list }
}


// ---
// Reducer

export const StoreEventsReducer: Reducer<StoreEventsState> = (state = initialState, action) => {
  switch (action.type) {
    case StoreEventsType.READY:
      return {
        ...state,
        shiftList: action.shiftList,
        isSearching: false,
      }
    case StoreEventsType.SEARCH_START:
      return {
        ...state,
        searchResults: [],
        isSearching: true,
      }
    case StoreEventsType.SEARCH_END:
      return {
        ...state,
        searchResults: action.list,
      }
    case StoreEventsType.CHANGE_DATA:
      const sc = Object.assign({}, state.searchConditions)
      sc[action.target] = action.value
      return {
        ...state,
        searchConditions: sc,
      }
    default: return state
  }
}
