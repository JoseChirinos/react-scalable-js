import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterList from './router-list'
import Loading from 'components/Atoms/Loading'
import Alert from 'components/Atoms/Alert'
import Main from 'components/Templates/Main'

/* Data */
const USER = process.env.REACT_APP_USER
const PASS = process.env.REACT_APP_PASSWORD

const RouterApp = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const [alert, setAlert] = useState({
    visible: false,
    message: 'default',
    theme: 'default',
  })
  const [auth, setAuth] = useState(false)
  const [loadAuth, setLoadAuth] = useState(true)

  const showAlert = (message, theme) => {
    setAlert({
      visible: true,
      message,
      theme,
    })
  }
  const hideAlert = () => {
    setAlert({
      visible: false,
      message: '',
      theme: 'default',
    })
  }

  const signIn = (e) => {
    e.preventDefault()
    hideAlert()
    if (user.username === USER) {
      if (user.password === PASS) {
        setAuth(true)
        setUser({
          ...user,
          password: '',
        })
        saveSession()
      } else {
        showAlert('Contraseña Incorrecta', 'error')
      }
    } else {
      showAlert('Usuario no registrado', 'error')
    }
  }
  const signOut = (e) => {
    e.preventDefault()
    setAuth(false)
    destroySession()
  }

  const saveSession = () => {
    localStorage.setItem('session', JSON.stringify({ session: true }))
  }
  const getSession = () => {
    return JSON.parse(localStorage.getItem('session')) || false
  }
  const destroySession = () => {
    localStorage.removeItem('session')
  }

  useEffect(() => {
    if (getSession()) {
      setAuth(true)
      setLoadAuth(false)
    } else {
      setLoadAuth(false)
    }
  }, [])

  if (loadAuth) {
    return <Loading />
  }

  return (
    <>
      <Router basename={'/donboscoapp'}>
        <Main handleSignOut={signOut} isAuth={auth}>
          {/* Admin Menu */}
          <RouterList
            handleSignIn={signIn}
            handleChangeUserForm={setUser}
            userForm={user}
            logged={auth}
          />
        </Main>
      </Router>
      {alert.visible && (
        <Alert
          max
          message={alert.message}
          theme={alert.theme}
          hideAlert={hideAlert}
        />
      )}
    </>
  )
}
export default RouterApp
