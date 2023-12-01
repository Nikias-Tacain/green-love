import Footer from './components/Footer'
import './globals.css'
import { CarritoProvider } from './tienda/components/CarritoContext'
import { SearchProvider } from './tienda/components/SearchContext'

export const metadata = {
  title: 'Green Love',
  description: 'Tienda online. Naturaleza pura...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CarritoProvider>
          <SearchProvider>
            {children}
            <Footer />
          </SearchProvider>
        </CarritoProvider>
      </body>
    </html>
  )
}
