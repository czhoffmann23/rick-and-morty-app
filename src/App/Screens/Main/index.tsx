import { Box, Code, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

import { useGetCharacter } from '../../Graphql/index'

const Main = () => {
  const { data } = useGetCharacter('1')

  return (
    <Flex p="20px" flexDir="column">
      <Heading>Rick and Morty App</Heading>
      <br />
      <Link href="https://rickandmortyapi.com/graphql" isExternal>
        API RICK AND MORTY Endpoint
      </Link>
      <br />
      <Flex alignContent="center">
        <Code w="300px" textAlign="center">
          Query: {'useGetCharacter("1")'}
        </Code>
      </Flex>
      <br />
      <Box w="200px" border="1px solid gray" p="10px">
        <Image src={data?.image} objectFit="cover" />
        <Text>{data?.name}</Text>
        <Text>{data?.species}</Text>
      </Box>
    </Flex>
  )
}

export default Main
