import * as React from 'react'
import { Row, Col } from 'antd'

export class Tutorial extends React.Component {
    render() {
        return(
            <Row>
                <Col span={8}>
                    <p>Hello,World</p>
                </Col>
            </Row>
        )
    }
}

export default Tutorial