import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubChapter from "./SubChapter";
import "../style/center.css";

export default class Apprentice extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="exp-contain">
                            <div className="title">
                                <SubChapter judul={"Pengalaman"} />
                            </div>
                            <div className="exp-box">
                                <div className="exp-title">
                                    <h2 id="exp-name">
                                        Praktik Kerja Industri
                                    </h2>
                                    <h3 id="exp-time">
                                        PT. Brilyan Trimatra Utama | April 2021
                                        - September 2021
                                    </h3>
                                </div>
                                <div className="explain">
                                    <h4>
                                        Membuat Frontend Portal web PEPARNAS XVI
                                    </h4>
                                    <h4>Membuat Frontend login page PON XX</h4>
                                    <h4>Membuat halaman web PON XX</h4>
                                </div>
                            </div>
                        </div>
                        <hr id="separator" />
                    </Col>
                </Row>
            </Container>
        );
    }
}
