import { Provider } from 'react-redux'
import RouterApp from '@/routes'
import store from '@/redux/store'

function App() {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  )
}

export default App
