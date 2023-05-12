'use client'
import { extendTheme } from '@chakra-ui/react'
import { withProse } from '@nikolovlazar/chakra-ui-prose'

export const theme = extendTheme(
  {
    global: {
      
    },
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
  },
  withProse({
    baseStyle: {
      lineHeight: "0.9em",
    },
  }),
)