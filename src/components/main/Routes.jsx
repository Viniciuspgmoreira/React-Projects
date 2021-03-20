import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from '../home/home'
import UserCrud from '../user/userCrud'

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact="/users" component={UserCrud}></Route>
    <Redirect from="*" to="/"></Redirect>
  </Switch>
)
