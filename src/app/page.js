import { CardsDriving } from './components/CardsDriving'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'
import Header from './components/Header'
import ImageEnvios from './components/ImageEnvios'
import { PreviewViewCategory } from './components/PreviewViewCategory'
export default function Home() {
  return (
    <>
      <Header />
      <CardsDriving />
      <PreviewViewCategory />
      <ImageEnvios />
      <FloatingWhatsAppButton />
    </>
  )
}
