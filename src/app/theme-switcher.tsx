'use client'

import { Button } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonIcon } from '../../public/theme/MoonIcon'
import { SunIcon } from '../../public/theme/SunIcon'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSwitchChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      className="outline-0 bg-transparent p-2 rounded-full size-full"
      onClick={handleSwitchChange}
      size="sm"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ThemeSwitcher
