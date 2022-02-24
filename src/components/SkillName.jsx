import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../style/center.css";
import SubChapter from "./SubChapter";

export default class SkillName extends Component {
    render() {
        return (
            <Container className="skill-hero">
                <Row>
                    <Col sm={6} md={6} className="skill-content">
                        <div className="title">
                            <SubChapter judul={"Keahlian"} />
                        </div>
                        <div className="skill-row">
                            <div className="skill-name">
                                <h4>HTML, CSS</h4>
                                <h4>Javascript</h4>
                                <h4>React JS</h4>
                                <h4>Express JS</h4>
                                <h4>PHP</h4>
                                <h4>CodeIgniter</h4>
                            </div>
                        </div>
                        <hr id="separator" />
                    </Col>
                    <Col sm={6} md={6} className="skill-content ">
                        <div className="title">
                            <SubChapter judul={"Soft Skill"} />
                        </div>
                        <div className="skill-row">
                            <div className="skill-name">
                                <h4>Jujur dan Disiplin</h4>
                                <h4>Dapat bekerja sebagai tim</h4>
                                <h4>Dapat Berkomunikasi dengan baik</h4>
                                <h4>Mudah beradaptasi dengan hal baru</h4>
                                <h4>Mampu mengelola waktu dengan teratur</h4>
                                <h4>Dapat bekerja dibawah tekanan</h4>
                            </div>
                        </div>
                        <hr id="separator" />
                    </Col>
                </Row>
            </Container>
        );
    }
}
