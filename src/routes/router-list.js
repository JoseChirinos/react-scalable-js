import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'

const Login = () => <div>Login</div>
const Home = () => <div>Home</div>
const NoMatch = () => <div>404</div>

const AuthControl = (props) => {
  const { logged, element: Component } = props
  return <>{logged ? <Component /> : <Navigate to="/login" replace />}</>
}

AuthControl.propTypes = {
  logged: PropTypes.bool.isRequired,
  element: PropTypes.elementType.isRequired,
}

const LoginControl = (props) => {
  const { logged } = props
  return <>{logged ? <Navigate to="/" replace /> : <Login />}</>
}

LoginControl.propTypes = {
  logged: PropTypes.bool.isRequired,
}

const RouterList = () => {
  const { logged } = useSelector((state) => state.userAuth)
  return (
    <Routes>
      {/* HOME route */}
      <Route
        exact
        path="/"
        element={<AuthControl logged={logged} element={Home} />}
      />

      {/* NOTAS route */}
      {/* <Route
        path="/notas"
        component={(props) => (
          <AuthControl logged={logged} component={Notas} {...props} />
        )}
      /> */}

      {/* BOLETINES route public */}
      {/* <Route path="/boletines/:estudiante" component={Boletines} /> */}

      {/* LOGIN route public */}
      <Route exact path="/login" element={<LoginControl logged={logged} />} />

      {/* 404 route */}
      <Route component={NoMatch} />
    </Routes>
  )
}

export default RouterList
