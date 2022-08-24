import { Heading, useBreakpointValue } from '@chakra-ui/react'

export default function TasksPage() {
  return (
    <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
      Tasks
    </Heading>
  )
}
