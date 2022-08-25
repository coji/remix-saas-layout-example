import type { LoaderArgs } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { requireUser } from '~/session.server'
import { useUser } from '~/utils'
import { Box, Container, Flex, useBreakpointValue } from '@chakra-ui/react'
import { AppNavbar } from '~/components/AppNavbar'
import { AppSidebar } from '~/components/AppSidebar'

export const loader = async ({ request }: LoaderArgs) => {
  await requireUser(request)
  return {}
}

export default function App() {
  const user = useUser()

  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Flex as="section" direction={{ base: 'column', lg: 'row' }} height="100vh" bg="bg-canvas" overflowY="auto">
      {isDesktop ? <AppSidebar user={user} /> : <AppNavbar user={user} />}

      <Box bg="bg-surface" pt={{ base: '0', lg: '3' }} flex="1">
        <Box bg="bg-canvas" borderTopLeftRadius={{ base: 'none', lg: '2rem' }} height="full">
          <Container py="8" height="full">
            <Outlet></Outlet>
          </Container>
        </Box>
      </Box>
    </Flex>
  )
}
