import Footer from './components/Footer'
import './globals.css'

export const metadata = {
  title: 'Green Love',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
