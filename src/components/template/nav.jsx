import './nav.css'
import React from 'react'
import NavItem from './nav-items'

function Nav(props) {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <NavItem href="/" icon="home" pathName="Início"></NavItem>
        <NavItem href="/users" icon="users " pathName="Usuários"></NavItem>
      </nav>
    </aside>
  )
}
export default Nav
