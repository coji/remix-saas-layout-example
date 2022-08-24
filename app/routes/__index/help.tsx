import { Heading, useBreakpointValue } from '@chakra-ui/react'

export default function HelpPage() {
  return (
    <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
      Help
    </Heading>
  )
}
