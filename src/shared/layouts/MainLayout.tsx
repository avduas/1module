import './MainLayout.css'
import { Header } from '../../widgets/LayoutHeader'
import { Footer } from '../../widgets/LayoutFooter'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
