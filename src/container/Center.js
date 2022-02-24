import React, { Component } from "react";
import "../style/center.css";
import Bounce from "react-reveal/Bounce";
import Header from "./Header";
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Social from "./Social";

export default class center extends Component {
    render() {
        return (
            <div>
                <Bounce top>
                    <Header />
                    <Profile />
                    <Skills />
                    <Experience />
                    <Education />
                    <Social />
                </Bounce>
            </div>
        );
    }
}
