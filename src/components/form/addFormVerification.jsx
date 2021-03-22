import React from 'react'
import { cssTransition, toast } from 'react-toastify'

import {
  notification,
  successNotification,
  deleteNotification,
} from '../toasty/toasty'

function verify(props) {
  if (props.onClickClear === true) {
    return deleteNotification(`${props.valueName} foi deletado`)
  }

  if (props.valueName.length < 4) {
    return notification('O nome deve conter no mínimo 4 carácteres...'), false
  }

  if (props.valueEmail.length < 4) {
    return notification('O email deve conter no mínimo 4 carácteres...'), false
  }

  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      props.valueEmail
    ) === false
  ) {
    return notification('Email não foi preenchido corretamente...'), false
  } else {
    return successNotification('Salvo com Sucesso...'), true
  }
}

export default verify
