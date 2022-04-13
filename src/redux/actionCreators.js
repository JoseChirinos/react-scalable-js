import { SET_MENU_TOGGLE } from './actions'

export const setMenuToggle = (toggle = false) => ({
  type: SET_MENU_TOGGLE,
  toggle,
})
