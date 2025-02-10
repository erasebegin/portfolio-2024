import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ColorModeSwitcher: React.FC<IconButtonProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      ariaLabel={`Switch to ${text} mode`}
      variant="ghost"
      color={text === 'dark' ? 'blue.800' : 'yellow.100'}
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      zIndex={100}
      {...props}
    />
  )
}
