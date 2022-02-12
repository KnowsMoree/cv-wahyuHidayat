import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import '../style/center.css'
import SocialMedia from '../components/SocialMedia';
import SubChapter from '../components/SubChapter'

export default class Social extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={12}>
                            <div className="title">
                                <SubChapter judul={"Sosial Media"} />
                            </div>
                        </Col>
                        <Col sm={12} md={12}>
                            <SocialMedia />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
