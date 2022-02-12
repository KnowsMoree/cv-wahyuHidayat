import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDribbble, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../style/center.css'

export default class SocialMedia extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="media">
                                <div className="social-row">
                                    <a href="https://github.com/KnowsMoree/">
                                        <FontAwesomeIcon id="icon" icon={faGithub} />
                                        <h5>Github</h5>
                                    </a>
                                </div>
                                <div className="social-row">
                                    <a href="https://www.instagram.com/yuhidayat_/">
                                        <FontAwesomeIcon id="icon" icon={faInstagram} />
                                        <h5>Instagram</h5>
                                    </a>
                                </div>
                                <div className="social-row">
                                    <a href="https://dribbble.com/xnowsmore">
                                        <FontAwesomeIcon id="icon" icon={faDribbble} />
                                        <h5>Dribbble</h5>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
