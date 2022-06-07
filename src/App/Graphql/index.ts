import { useQuery } from 'react-query'

import { graphqlClient } from './Lib'
import { queryGetCharacter } from './Queries'

export const useGetCharacter = (id: string) => {
  return useQuery(['character', id], async () => {
    const client = await graphqlClient()

    const { character } = await client.request(queryGetCharacter, {
      id,
    })

    return character
  })
}
