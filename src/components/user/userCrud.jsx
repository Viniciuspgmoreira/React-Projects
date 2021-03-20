import React, { Component } from 'react'
import Main from '../template/main'
import axios from 'axios'

const headerProps = {
  title: 'users',
  subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar, Excluir',
  icon: 'users',
}

export default class UserCrud extends Component {
  render() {
    return <Main {...headerProps}>Usuário</Main>
  }
}
