import * as React from 'react'

export class SearchResult extends React.Component {
  render() {
    return (
      <div style={{margin: '30px'}}>
        <h3 style={{marginBottom: '20px'}}>検索結果</h3>
        {this.props.children}
      </div>
    )
  }
}
