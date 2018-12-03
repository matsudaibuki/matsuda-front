import * as React from 'react'
import Link from 'next/link'
import { Button } from 'antd'
import { ButtonType } from 'antd/lib/button'

interface ButtonProps {
  type?: ButtonType
  icon?: string
}

interface LinkProps {
  href: string
  prefetch?: boolean
  replace?: boolean
  passHref?: boolean
  scroll?: boolean
}

type LinkButtonProps = ButtonProps & LinkProps

export class LinkButton extends React.Component<LinkButtonProps> {
  render() {
    const lp = {href: this.props.href, prefetch: this.props.prefetch, replace: this.props.replace, passHref: this.props.passHref, scroll: this.props.scroll}
    const bp = {type: this.props.type, icon: this.props.icon}

    return (
      <Link {...lp}>
        <Button {...bp}>{this.props.children}</Button>
      </Link>
    )
  }
}
