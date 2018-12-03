import * as React from 'react'
import Link from 'next/link'
import { LinkProps } from 'next-server/link'

export class LinkAnchor extends React.Component<LinkProps> {
  render() {
    return (
      <Link {...this.props}>
        <a>{this.props.children}</a>
      </Link>
    )
  }
}
