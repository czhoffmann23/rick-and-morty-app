import { Flex, Heading } from '@chakra-ui/react'

import { useGetCharacter } from '../../Graphql/index'

const Main = () => {
  const { data } = useGetCharacter('1')

  console.log('data', data)

  return (
    <Flex p="20px">
      <Heading>Chakra ui Heading</Heading>
    </Flex>
  )
}

export default Main
