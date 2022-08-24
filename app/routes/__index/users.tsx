import { Heading, useBreakpointValue } from '@chakra-ui/react'

export default function UsersPage() {
  return (
    <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
      Users
    </Heading>
  )
}
