import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProfileComp from '../components/ProfileComp';
import SubChapter from '../components/SubChapter';
import '../style/center.css'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row id="profile">
                        <Col sm={12} md={5}>
                            <div className="title" class="pattern-diagonal-lines-lg white-lighter">
                                <SubChapter judul={"Profil"}/>
                            </div>
                            <div id="my-img-wall" class="pattern-dots-md gray-light">
                                <div className="my-img"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={7}>
                            <div id="mid">
                                <ProfileComp />
                            </div>
                        </Col>
                    </Row>
                    <hr id="separator" />
                </Container>
            </div>
        )
    }
}
