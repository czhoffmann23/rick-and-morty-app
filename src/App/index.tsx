import { QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { queryClient } from '../App/Graphql/Lib'

import Screens from './Screens'

const Root = ({ children }: { children: JSX.Element }) => {
  return children
}

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>
          <Route component={Root}>{Screens}</Route>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
