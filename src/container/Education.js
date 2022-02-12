import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import School from '../components/School'
import SubChapter from '../components/SubChapter'
import '../style/center.css'

export default class Education extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={12}>
                            <div ClassName="title">
                                <SubChapter judul={"pendidikan"} />
                            </div>
                        </Col>
                        <Col sm={12} md={12}>
                            <School />
                        </Col>
                    </Row>
                    <hr id="separator" />
                </Container>
            </div>
        )
    }
}
