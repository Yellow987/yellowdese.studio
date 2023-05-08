'use client'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  spacing: {
    "0": "0px",
    "1": "8px",
    "2": "16px",
    "3": "24px",
    "4": "32px",
    "5": "40px",
    "6": "48px",
    "7": "56px",
    "8": "64px",
  },
}

export const theme = extendTheme({ colors })