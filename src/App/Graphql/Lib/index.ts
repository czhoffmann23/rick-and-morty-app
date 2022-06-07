import { QueryClient } from 'react-query'
import { GraphQLClient } from 'graphql-request'

export const graphqlClient = async () => {
  const endpoint = 'https://rickandmortyapi.com/graphql'

  return new GraphQLClient(endpoint)
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
})
