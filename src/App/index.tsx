import { BrowserRouter as Router, Route } from 'react-router-dom'

import Screens from './Screens'

const Root = ({ children }: { children: JSX.Element }) => {
  return children
}

export default function App(): JSX.Element {
  return (
    <Router>
        <Route component={Root}>{Screens}</Route>
    </Router>
  )
}