import { SET_MENU_TOGGLE } from './actions'

export const menuToggle = (state = false, action) => {
  switch (action.type) {
    case SET_MENU_TOGGLE:
      return action.toggle
    default:
      return state
  }
}
