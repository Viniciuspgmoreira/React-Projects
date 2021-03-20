import './main.css'
import React from 'react'
import Header from './header'

function Main(props) {
  return (
    <React.Fragment>
      <Header {...props}></Header>
      <main className="content container-fluid">
        <div className="p-3 mt-3">{props.children}</div>
      </main>
    </React.Fragment>
  )
}

export default Main
