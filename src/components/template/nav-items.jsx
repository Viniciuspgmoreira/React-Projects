import React from 'react'
import { Link } from 'react-router-dom'

function NavItem(props) {
  const { href, icon, pathName } = props
  return (
    <Link to={href} id="link" onClick={() => console.log()}>
      <i className={`fa fa-${icon}`}></i>
      <span>{props.pathName}</span>
    </Link>
  )
}

export default NavItem
