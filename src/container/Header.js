import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/center.css";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="row">
                        <Col sm={8} md={10} className="img-cont">
                            <div
                                id="text-wall"
                                class="pattern-diagonal-lines-sm white-lighter"
                            >
                                <div id="text-hero">
                                    <h2>wahyu hidayat</h2>
                                    <small>Siswa</small>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} md={2}>
                            <div id="as">
                                <h4>Rekayasa Perangkat Lunak</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
