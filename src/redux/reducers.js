import { SET_USER_AUTH } from './actions'

export const userAuth = (state = { logged: true }, action = {}) => {
  switch (action?.type) {
    case SET_USER_AUTH:
      return action?.user
    default:
      return state
  }
}

export default () => {}
