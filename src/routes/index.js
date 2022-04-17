import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RouterList from '@/routes/router-list'
import { setUserAuth } from '@/redux/actionCreators'

const USER = import.meta.env.VITE_USER // eslint-disable-line
const PASS = import.meta.env.VITE_PASSWORD // eslint-disable-line

const RouterApp = () => {
  console.log(USER, PASS) // eslint-disable-line
  const userAuth = useSelector((state) => state.userAuth)
  const dispatch = useDispatch()

  const handleToggleClose = () => {
    dispatch(setUserAuth({
      logged: !userAuth.logged
    }))
  }

  return (
    <>
      <button type="button" onClick={handleToggleClose}>
        Test Redux
      </button>
      <BrowserRouter>
        <RouterList />
      </BrowserRouter>
    </>
  )
}
export default RouterApp
