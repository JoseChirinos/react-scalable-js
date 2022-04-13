import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from 'components/Atoms/Loading'
import NoMatch from 'components/Atoms/NotMatch'
import Login from 'components/Organisms/Login'

const Home = Loadable({
  loader: () => import('../pages/home'),
  loading: Loading,
})

const Generate = Loadable({
  loader: () => import('../pages/generate'),
  loading: Loading,
})

const Boletines = Loadable({
  loader: () => import('../pages/boletines'),
  loading: Loading,
})

const Notas = Loadable({
  loader: () => import('../pages/notas'),
  loading: Loading,
})

const AuthControl = (props) => {
  const { logged, component: Component } = props
  return <>{logged ? <Component {...props} /> : <Redirect to="/login" />}</>
}

const RouterList = (props) => {
  const { handleSignIn, handleChangeUserForm, userForm, logged } = props
  return (
    <Switch>
      {/* HOME route */}
      <Route
        exact
        path="/"
        component={(props) => (
          <AuthControl logged={logged} component={Home} {...props} />
        )}
      />

      {/* GENERAR route */}
      <Route
        path="/generar"
        component={(props) => (
          <AuthControl logged={logged} component={Generate} {...props} />
        )}
      />

      {/* NOTAS route */}
      <Route
        path="/notas"
        component={(props) => (
          <AuthControl logged={logged} component={Notas} {...props} />
        )}
      />

      {/* BOLETINES route public*/}
      <Route path="/boletines/:estudiante" component={Boletines} />

      {/* LOGIN route public*/}
      <Route exact path="/login">
        {logged ? (
          <Redirect to="/" />
        ) : (
          <Login
            signIn={handleSignIn}
            handleChangeUserForm={handleChangeUserForm}
            userForm={userForm}
          />
        )}
      </Route>

      {/* 404 route*/}
      <Route component={NoMatch} />
    </Switch>
  )
}

export default RouterList
