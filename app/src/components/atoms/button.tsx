import * as React from 'react'
import { Button as AntButton } from 'antd'

export class Button extends React.Component {
  render(){
    return <AntButton {...this.props}>{this.props.children}</AntButton>
  }
}