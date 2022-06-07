import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

import Screens from './Screens'

const Root = ({ children }: { children: JSX.Element }) => {
  return children
}

export default function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Router>
        <Route component={Root}>{Screens}</Route>
      </Router>
    </ChakraProvider>
  )
}
