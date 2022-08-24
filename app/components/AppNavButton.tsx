import type { As, ButtonProps } from '@chakra-ui/react'
import { Button, HStack, Icon, Text } from '@chakra-ui/react'
import { NavLink } from '@remix-run/react'

interface NavButtonProps extends ButtonProps {
  icon: As
  label: string
  to: string
}

export const AppNavButton = (props: NavButtonProps) => {
  const { icon, label, to, ...buttonProps } = props
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Button variant="ghost" w="full" justifyContent="start" {...buttonProps} aria-current={isActive ? 'page' : undefined}>
          <HStack spacing="3">
            <Icon as={icon} boxSize="6" color="subtle" />
            <Text>{label}</Text>
          </HStack>
        </Button>
      )}
    </NavLink>
  )
}
