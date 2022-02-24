import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faMapMarkerAlt,
    faAt,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../style/center.css";

export default class SocialMedia extends Component {
    render() {
        return (
            <div className="media-box">
                <div className="contact-box">
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
                        <FontAwesomeIcon id="icon" icon={faAt} />
                        <h5>hidayatw936gmail.com</h5>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="social-row">
                        <FontAwesomeIcon id="icon" icon={faPhoneAlt} />
                        <h5>+62 851-5603-8407</h5>
                    </div>
                    <div className="social-row">
                        <FontAwesomeIcon id="icon" icon={faMapMarkerAlt} />
                        <h5>
                            Gg. masjid jami at-taqwa 54 RT 003/022, Kota Baru,
                            Bekasi Barat
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}
