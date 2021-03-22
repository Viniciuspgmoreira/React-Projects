import React, { Component } from 'react'
import Main from '../template/main'
import axios from 'axios'
import AddForm from '../form/addForm'
import RenderTable from '../table/table'

const headerProps = {
  title: 'users',
  subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar, Excluir',
  icon: 'users',
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
  user: { name: '', email: '' },
  list: [],
}
export default class UserCrud extends Component {
  constructor(props) {
    super(props)
    this.load = this.load.bind(this)
    this.remove = this.remove.bind(this)
  }

  state = { ...initialState }

  componentWillMount() {
    axios(baseUrl).then((resp) => {
      this.setState({ list: resp.data })
    })
  }

  clear() {
    this.setState({ user: initialState.user })
  }

  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

    axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data)
      this.setState({ user: initialState.user, list })
    })
  }

  saveVerification() {
    console.log(this.state.user.length)
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id)
    if (add) list.unshift(user)
    return list
  }

  updateField(e) {
    const user = { ...this.state.user }
    user[e.target.name] = e.target.value
    this.setState({ user })
  }

  load(user) {
    this.setState({ user })
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
      const list = this.getUpdatedList(user, false)
      this.setState({ list })
    })
  }

  render() {
    return (
      <Main {...headerProps}>
        <AddForm
          valueName={this.state.user.name}
          onChangeName={(e) => this.updateField(e)}
          onChangeEmail={(e) => this.updateField(e)}
          placeholderName="Digite o Nome..."
          valueEmail={this.state.user.email}
          placeholderEmail="Digite o E-mail..."
          onClickSave={(e) => this.save(e)}
          onClickClear={(e) => this.clear(e)}
          saveVerification={(e) => this.save(e)}
        ></AddForm>
        <RenderTable
          column="ID"
          column1="Nome"
          column2="E-mail"
          column3="Ações"
          list={this.state.list}
          load={this.load}
          remove={this.remove}
        ></RenderTable>
      </Main>
    )
  }
}
