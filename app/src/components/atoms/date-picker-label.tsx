import * as React from 'react'
import { Col, DatePicker } from 'antd'

const { MonthPicer, RangePicker, WeekPicker } = DatePicker

type pickerType = 'date' | 'month' | 'range' | 'week'

interface DatePickerLabelProps {
  type?: pickerType
  id: string
  value?: string
  span: number
  label: string
  disabled?: boolean
  readOnly?: boolean
  labelWidth?: string
  dateWidth?: string
}

export class DatePickerLabel extends React.Component<DatePickerLabelProps, any> {
  render() {
    const {
      type,
      id,
      value,
      span,
      label,
      disabled,
      readOnly
    } = this.props

    const labelWidth = this.props.labelWidth || '30%'
    const dateWidth = this.props.dateWidth || '70%'

    const Picker = type === 'month' ? MonthPicer
                 : type === 'range' ? RangePicker
                 : type === 'week'  ? WeekPicker
                 : DatePicker

    return (
      <Col span={span} style={{padding: '10px'}}>
        <label htmlFor={id} style={{display: 'inline-block', width: labelWidth, textAlign: 'right', paddingRight: '10px'}}>{label}</label>
        <Picker id={id} style={{width: dateWidth}} readOnly={readOnly} disabled={disabled} />
      </Col>
    )
  }
}
