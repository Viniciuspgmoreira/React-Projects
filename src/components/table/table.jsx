import React from 'react'
import TableRow from '../table/tableRow'

function RenderTable(props) {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>{props.column1}</th>
          <th>{props.column2}</th>
          <th>{props.column3}</th>
        </tr>
      </thead>
      <tbody>
        <TableRow list={props.list}></TableRow>
      </tbody>
    </table>
  )
}

export default RenderTable
