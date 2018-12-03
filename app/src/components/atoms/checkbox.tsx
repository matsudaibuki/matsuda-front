import * as React from 'react'
import { Checkbox as AntCheckbox } from 'antd'

export class Checkbox extends React.Component {
  render(){
    return <AntCheckbox {...this.props}>{this.props.children}</AntCheckbox>
  }
}