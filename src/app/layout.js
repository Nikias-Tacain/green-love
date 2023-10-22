
import './globals.css'



export const metadata = {
  title: 'Green Love',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
