import type { As, ButtonProps } from '@chakra-ui/react'
import { Button, HStack, Icon, Text } from '@chakra-ui/react'

interface NavButtonProps extends ButtonProps {
  icon: As
  label: string
}

export const AppNavButton = (props: NavButtonProps) => {
  const { icon, label, ...buttonProps } = props
  return (
    <Button variant="ghost" justifyContent="start" {...buttonProps}>
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  )
}
