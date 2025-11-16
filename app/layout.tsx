import './globals.css'
import { Oswald } from 'next/font/google'
// import ConditionalNavbar from './components/ConditionalNavbar'
import AuthProvider from './components/AuthProvider'

const oswald = Oswald({ subsets: ['latin'], weight: ['400','700'] })

export const metadata = {
  title: 'FLADVart',
  description: 'Creative Agency',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${oswald.className} bg-[#0C0F1D] text-white`} suppressHydrationWarning={true}>
        <AuthProvider>
          {/* <ConditionalNavbar /> */}
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}