import { useSubmit } from '@remix-run/react'
import { Box, Heading, useBreakpointValue, Button } from '@chakra-ui/react'

export default function SettingsPage() {
  const submit = useSubmit()
  return (
    <Box>
      <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
        Settings
      </Heading>

      <Button colorScheme="blue" onClick={() => submit(null, { action: '/logout', method: 'post' })}>
        Logout
      </Button>
    </Box>
  )
}
