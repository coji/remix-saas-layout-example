import { Divider, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import { FiBarChart2, FiBookmark, FiCheckSquare, FiHelpCircle, FiHome, FiSettings, FiUsers } from 'react-icons/fi'
import { AppLogo } from './AppLogo'
import { AppNavButton } from './AppNavButton'
import { UserProfile } from './UserProfile'

export const AppSidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue('md', 'sm-dark')}
      maxW={{ base: 'full', sm: 'xs' }}
      py={{ base: '6', sm: '8' }}
      px={{ base: '4', sm: '6' }}
    >
      <Stack justify="space-between" spacing="1" w="full">
        <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
          <AppLogo />
          <Stack spacing="1">
            <AppNavButton label="Home" to="/" icon={FiHome} />
            <AppNavButton label="Dashboard" to="/dashboard" icon={FiBarChart2} />
            <AppNavButton label="Tasks" to="/tasks" icon={FiCheckSquare} />
            <AppNavButton label="Bookmarks" to="/bookmarks" icon={FiBookmark} />
            <AppNavButton label="Users" to="/users" icon={FiUsers} />
          </Stack>
        </Stack>
        <Stack spacing={{ base: '5', sm: '6' }}>
          <Stack spacing="1">
            <AppNavButton label="Help" to="/help" icon={FiHelpCircle} />
            <AppNavButton label="Settings" to="/settings" icon={FiSettings} />
          </Stack>

          <Divider />

          <UserProfile name="Coji Mizoguchi" image="https://avatars.githubusercontent.com/u/9904?v=4" email="coji@techtalk.jp" />
        </Stack>
      </Stack>
    </Flex>
  </Flex>
)
