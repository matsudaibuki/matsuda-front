import * as React from 'react'
import { Col, Select } from 'antd'
const Option = Select.Option

import { ListItem } from '../../modules/event-search'


interface SelectLabelProps {
  id: string
  value?: string
  list: Array<ListItem>
  span: number
  label: string
  disabled?: boolean
  onChange?: any
}

export class SelectLabel extends React.Component<SelectLabelProps> {
  render() {
    const {
      id,
      value,
      list,
      span,
      label,
      disabled,
      onChange,
    } = this.props

    return (
      <Col span={span} style={{padding: '10px'}}>
        <label htmlFor={id} style={{display: 'inline-block', width: '30%', textAlign: 'right', paddingRight: '10px'}}>{label}</label>
        <Select id={id} value={value} style={{width: '70%'}} onChange={onChange} disabled={disabled} >
          {list.length > 0 && list.map((event: ListItem, idx) => (
            <Option key={idx} value={event.value}>{event.text}</Option>
          ))}
        </Select>
      </Col>
    )
  }
}
