import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileComp from "../components/ProfileComp";
import SubChapter from "../components/SubChapter";
import "../style/center.css";

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row id="profile">
                        <Col sm={12} md={12}>
                            <div
                                className="title"
                                class="pattern-diagonal-lines-lg white-lighter"
                            >
                                <SubChapter judul={"Profil"} />
                            </div>
                        </Col>
                        <Col sm={12} md={5} className="img-cont">
                            <div
                                id="my-img-wall"
                                class="pattern-dots-md gray-light"
                            >
                                <div className="my-img"></div>
                            </div>
                        </Col>
                        <Col
                            sm={12}
                            md={7}
                            className="d-flex align-items-center"
                        >
                            <div id="mid">
                                <ProfileComp />
                            </div>
                        </Col>
                    </Row>
                    <hr id="separator" />
                </Container>
            </div>
        );
    }
}
