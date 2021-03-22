import React from 'react'

function TableRow(props, callback) {
  return props.list.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-warning" onClick={() => props.load(user)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={() => props.remove(user)}
          >
            <i className="fa fa-pencil"></i>
          </button>
        </td>
      </tr>
    )
  })
}

export default TableRow
