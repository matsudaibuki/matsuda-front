import * as React from 'react'
import { Left, Right } from '../molecules'

export class SearchHeader extends React.Component {
  render = () => <Left>{this.props.children}</Left>
}

export class SearchBody extends React.Component {
  render() {
    return (
      <div style={{margin: '20px 0'}}>
        <Left>
          {this.props.children}
        </Left>
      </div>
    )
  }
}

export class SearchFooter extends React.Component {
  render = () => <Right>{this.props.children}</Right>
}

export class SearchField extends React.Component {
  render = () => <div>{this.props.children}</div>
}
