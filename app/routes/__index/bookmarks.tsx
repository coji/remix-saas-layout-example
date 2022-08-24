import { Heading, useBreakpointValue } from '@chakra-ui/react'

export default function BookmarksPage() {
  return (
    <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
      Bookmarks
    </Heading>
  )
}
