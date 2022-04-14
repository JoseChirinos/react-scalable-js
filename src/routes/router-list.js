import React, { Fragment } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
// import Loading from 'components/Atoms/Loading'
// import NoMatch from 'components/Atoms/NotMatch'
// import Login from 'components/Organisms/Login'

// const Home = Loadable({
//   loader: () => import('../pages/home'),
//   loading: Loading,
// })

// const Generate = Loadable({
//   loader: () => import('../pages/generate'),
//   loading: Loading,
// })

// const Boletines = Loadable({
//   loader: () => import('../pages/boletines'),
//   loading: Loading,
// })

// const Notas = Loadable({
//   loader: () => import('../pages/notas'),
//   loading: Loading,
// })

const Login = () => <div>Login</div>
const Home = () => <div>Home</div>

const AuthControl = (props) => {
  const { logged, component: Component } = props
  return <Fragment>{logged ? <Component {...props} /> : <Redirect to="/login" />}</Fragment>
}

const RouterList = (props) => {
  const logged = false;
  return (
    <Routes>
      {/* HOME route */}
      <Route
        exact
        path="/"
        component={(props) => (
          <AuthControl logged={logged} component={Home} {...props} />
        )}
      />

      {/* NOTAS route */}
      {/* <Route
        path="/notas"
        component={(props) => (
          <AuthControl logged={logged} component={Notas} {...props} />
        )}
      /> */}

      {/* BOLETINES route public*/}
      {/* <Route path="/boletines/:estudiante" component={Boletines} /> */}

      {/* LOGIN route public*/}
      <Route exact path="/login">
        {logged ? (
          <Navigate to="/" replace />
        ) : (
          <Login />
        )}
      </Route>

      {/* 404 route*/}
      <Route component={NoMatch} />
    </Routes>
  )
}

export default RouterList
