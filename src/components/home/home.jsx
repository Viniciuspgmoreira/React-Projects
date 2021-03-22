import React from 'react'
import Main from '../template/main'

function Home(props) {
  return (
    <Main icon="home" title="Início" subtitle={'Projeto do Caítulo de React'}>
      <div className="display-4">Bem Vindo!</div>
      <hr></hr>
      <p className="mb-0">Sistema para cadastro de Usuários</p>
    </Main>
  )
}

export default Home
