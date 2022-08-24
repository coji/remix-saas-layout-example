import { Link, HStack, Button, Icon, Text } from '@chakra-ui/react'
import { FiGithub } from 'react-icons/fi'

export const GithubLink = () => (
  <Button as={Link} variant="ghost" justifyContent="start" href="https://github.com/coji/remix-saas-layout-example" target="_blank">
    <HStack spacing="3">
      <Icon as={FiGithub} boxSize="6" color="subtle" />
      <Text>Github</Text>
    </HStack>
  </Button>
)
