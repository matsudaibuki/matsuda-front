import * as React from 'react'
import { Col, Input } from 'antd'

interface InputLabelProps {
  id: string
  value?: string
  span: number
  label: string
  disabled?: boolean
  readOnly?: boolean
  labelWidth?: string
  inputWidth?: string
}

export class InputLabel extends React.Component<InputLabelProps, any> {
  render() {
    const {
      id,
      value,
      span,
      label,
      disabled,
      readOnly
    } = this.props

    const labelWidth = this.props.labelWidth || '30%'
    const inputWidth = this.props.inputWidth || '70%'

    return (
      <Col span={span} style={{padding: '10px'}}>
        <label htmlFor={id} style={{display: 'inline-block', width: labelWidth, textAlign: 'right', paddingRight: '10px'}}>{label}</label>
        <Input id={id} value={value} style={{width: inputWidth, backgroundColor: 'transparent'}} readOnly={readOnly} disabled={disabled} />
      </Col>
    )
  }
}
