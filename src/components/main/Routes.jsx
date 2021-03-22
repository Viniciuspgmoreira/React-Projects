import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../home/home'
import UserCrud from '../user/userCrud'

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/users" component={UserCrud}></Route>
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  )
}

export default Routes
