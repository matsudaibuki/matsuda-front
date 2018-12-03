import * as React from 'react'
import { Table as AntTable } from 'antd'

export class Table extends React.Component {
  render(){
    return <AntTable {...this.props}>{this.props.children}</AntTable>
  }
}