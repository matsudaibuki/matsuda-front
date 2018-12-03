import * as React from 'react'
import { Row as AntRow } from 'antd'

const getRow = (props, justify) => {
  return (
    <AntRow type='flex' justify={justify}>
      {props.children}
    </AntRow>
  )
}

export const Row    = (props) => getRow(props, 'start')
export const Left   = (props) => getRow(props, 'start')
export const Center = (props) => getRow(props, 'center')
export const Right  = (props) => getRow(props, 'end')
