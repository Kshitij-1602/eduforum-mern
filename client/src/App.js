import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Dashboard from './components/dashboard/Dashboard'
import Profile from './components/profile/Profile'
import Login from './components/auth/Login'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <div className="mainGridContainer">
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
            <Footer />
        </div>
      </Fragment>
    </Router>
  </Provider>
)}

export default App;
