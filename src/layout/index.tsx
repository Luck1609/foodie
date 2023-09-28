import { useState } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Cart from '@/views/Cart'

export default function Layout() {
  const [open, setOpen] = useState<boolean>(false)

  const toggleCart = () => setOpen(!open);

  return (
    <>
      <NavBar toggleCart={toggleCart} />

      <Cart open={open} toggleCart={toggleCart} />
      <main className="">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
