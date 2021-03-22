import React from 'react'

function TableRow(props) {
  return props.list.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    )
  })
}

export default TableRow
