import React, { Component } from 'react'
import { Container, Col, ProgressBar, Row } from "react-bootstrap";
import SubChapter from '../components/SubChapter';
import SkillName from '../components/SkillName';

export default class Skills extends Component {
    render() {
        return (
            <div>
                <Container className="skill-hero">
                    <Row>
                        <Col sm={12} md={12}>
                            <div className="title">
                                <SubChapter judul={"Keahlian"} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} className="skill-content">
                            <div className="skill-indicator">
                                <div className="skill-box">
                                    <div className="lang-name">
                                        <SkillName skill={"HTML & CSS"}/>
                                    </div>
                                    <div className="skill-bar">
                                        <ProgressBar animated now={63} />
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="lang-name">
                                        <SkillName skill={"PHP"}/>
                                    </div>
                                    <div className="skill-bar">
                                        <ProgressBar animated now={40} />
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="lang-name">
                                        <SkillName skill={"ReactJS"}/>
                                    </div>
                                    <div className="skill-bar">
                                        <ProgressBar animated now={10} />
                                    </div>
                                </div>
                                <div className="skill-box">
                                    <div className="lang-name">
                                        <SkillName skill={"MySql"}/>
                                    </div>
                                    <div className="skill-bar">
                                        <ProgressBar animated now={35} />
                                    </div>
                                </div>
                            </div>
                            <hr id="separator" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
