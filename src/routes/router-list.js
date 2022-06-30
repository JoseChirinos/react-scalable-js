import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom'

/* Import Component */
import Login from '@/pages/login'

const Home = lazy(() => import('../pages/home'))

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
        element={
          <AuthControl
            logged={logged}
            element={(props) => (
              <Suspense fallback={<div>Loading...</div>}>
                <Home {...props} />
              </Suspense>
            )}
          />
        }
      />

      {/* LOGIN route public */}
      <Route exact path="/login" element={<LoginControl logged={logged} />} />

      {/* 404 route */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RouterList
