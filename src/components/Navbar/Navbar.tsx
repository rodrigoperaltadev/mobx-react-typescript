import React, { FC } from 'react'

import './navbar.css'

type NavbarProps = {
  children?: JSX.Element | JSX.Element[]
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  return <nav className="navbar-container">{children}</nav>
}

export default Navbar
