import './globals.css'
import { Inter } from 'next/font/google'
import { ChakraThemeProvider } from '../providers/chakraThemeProvider';
import Footer from './../components/footer';
import Header from './../components/header';

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
        <ChakraThemeProvider>
          <Header />
          {children}
          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />
        </ChakraThemeProvider>
      </body>
    </html>
  )
}
