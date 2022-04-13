import { createStore, combineReducers } from 'redux'
import { menuToggle } from './reducers'

const reducers = combineReducers({
  menuToggle,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
