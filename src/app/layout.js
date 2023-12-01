import Footer from './components/Footer'
import './globals.css'
import { SearchProvider } from './tienda/components/SearchContext'

export const metadata = {
  title: 'Green Love',
  description: 'Tienda online. Naturaleza pura...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <SearchProvider>
        <body>
          {children}
          <Footer />
        </body>
      </SearchProvider>
    </html>
  )
}
