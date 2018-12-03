import * as React from 'react'
import { Layout } from 'antd'

interface MainPageProps {
  title: string
}

export class MainPage extends React.Component<MainPageProps> {
  render() {
    return (
      <Layout>
        <Layout.Header>
          <h2 style={{color: 'white'}}>{this.props.title}</h2>
        </Layout.Header>

        <Layout.Content style={{padding: '30px', paddingBottom: '100px'}}>
          {this.props.children}
        </Layout.Content>

        <Layout.Footer style={{position: 'fixed', bottom: '0', width: '100%', height: '50px', backgroundColor: '#78797A', padding: '15px', textAlign: 'center'}}>
          <h4 style={{color: 'white'}}>Copyright ©Ryohin Keikaku Co., Ltd.</h4>
        </Layout.Footer>
      </Layout>
    )
  }
}
