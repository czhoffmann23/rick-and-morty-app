/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {  Route, Switch } from 'react-router-dom'

import Main from './Main'





const Screens = (): JSX.Element => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Main}
      />
    </Switch>
  )
}

export default Screens