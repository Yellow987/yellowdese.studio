import './globals.css'
import { Inter } from 'next/font/google'
import { ChakraThemeProvider } from '../providers/chakraThemeProvider';
import { theme } from '../constants/theme';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YellowDesi',
  description: 'Yellow\'s personal website :3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraThemeProvider theme={theme}>
          {children}
        </ChakraThemeProvider>
      </body>
    </html>
  )
}
