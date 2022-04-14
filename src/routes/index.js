import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterList from './router-list'

/* Data */
const USER = import.meta.env.VITE_USER
const PASS = import.meta.env.VITE_PASSWORD

const RouterApp = (props) => {
  console.log(USER, PASS)
  return (
    <Fragment>
      <h1>Hello</h1>
    </Fragment>
  )
  // return (
  //   <>
  //     <Router>
  //       <Main>
  //         <RouterList />
  //       </Main>
  //     </Router>
  //   </>
  // )
}
export default RouterApp
