import { Outlet } from '@remix-run/react'
import { Box, Button, Container, Flex, Heading, HStack, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { FiDownloadCloud } from 'react-icons/fi'
import { AppNavbar } from '~/components/AppNavbar'
import { AppSidebar } from '~/components/AppSidebar'

export default function App() {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Flex as="section" direction={{ base: 'column', lg: 'row' }} height="100vh" bg="bg-canvas" overflowY="auto">
      {isDesktop ? <AppSidebar /> : <AppNavbar />}
      <Box bg="bg-surface" pt={{ base: '0', lg: '3' }} flex="1">
        <Box bg="bg-canvas" borderTopLeftRadius={{ base: 'none', lg: '2rem' }} height="full">
          <Container py="8" height="full">
            <Stack spacing={{ base: '8', lg: '6' }} height="full">
              <Stack spacing="4" direction={{ base: 'column', lg: 'row' }} justify="space-between" align={{ base: 'start', lg: 'center' }}>
                <Stack spacing="1">
                  <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium">
                    Dashboard
                  </Heading>
                  <Text color="muted">All important metrics at a glance</Text>
                </Stack>
                <HStack spacing="3">
                  <Button variant="secondary" leftIcon={<FiDownloadCloud fontSize="1.25rem" />}>
                    Download
                  </Button>
                  <Button variant="primary">Create</Button>
                </HStack>
              </Stack>
              <Box bg="bg-surface" borderRadius="lg" borderWidth="1px" height="full" p="4">
                <Outlet />
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Flex>
  )
}
