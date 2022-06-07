import { gql } from 'graphql-request'

const queryGetCharacter = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
    }
  }
`

export { queryGetCharacter }
