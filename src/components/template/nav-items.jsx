import React from 'react'
import { Link } from 'react-router-dom'

function NavItem(props) {
  const { href, icon, pathName } = props
  return (
    <Link to={href} id="link">
      <i className={`fa fa-${icon}`}></i>
      <span>{pathName}</span>
    </Link>
  )
}

export default NavItem
