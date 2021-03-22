import React from 'react'
import verify from '../form/addFormVerification'
import { deleteNotification } from '../toasty/toasty'

function AddForm(props) {
  return (
    <div className="form">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={props.valueName}
              onChange={props.onChangeName}
              placeholder={props.placeholderName}
              required
            ></input>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={props.valueEmail}
              onChange={props.onChangeEmail}
              placeholder={props.placeholderEmail}
              required
            ></input>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button
            className="btn btn-primary"
            onClick={() =>
              verify(props) === true ? props.onClickSave() : null
            }
          >
            Salvar
          </button>
          <button
            className="btn btn-secondary ml-2"
            onClick={props.onClickClear}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddForm
