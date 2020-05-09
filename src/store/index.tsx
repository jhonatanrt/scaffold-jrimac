import React from 'react'
import combineReducers from './combineReducers';
import goalsReducer from './goals/reducer'

export const Store = React.createContext({} as any);

const initialState = {
  goal: {}
}

const reducer = combineReducers({
  goal: goalsReducer
})

export 
const StoreProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
    )
}

