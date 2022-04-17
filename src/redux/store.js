import { createStore, combineReducers } from 'redux'
import { userAuth } from './reducers'

const reducers = combineReducers({
  userAuth,
})

const store = createStore(
  reducers,
  /* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
