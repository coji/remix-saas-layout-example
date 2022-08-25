import { Box, Drawer, DrawerContent, DrawerOverlay, Flex, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { AppLogo } from './AppLogo'
import { AppSidebar } from './AppSidebar'
import { ToggleButton } from './AppToggleButton'
import type { User } from '~/models/user.server'

interface AppNavbarProps {
  user?: User
}
export const AppNavbar = ({ user }: AppNavbarProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <Box width="full" py="4" px={{ base: '4', md: '8' }} bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
      <Flex justify="space-between">
        <AppLogo />
        <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          isFullHeight
          preserveScrollBarGap
          // Only disabled for showcase
          trapFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <AppSidebar user={user} />
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}
