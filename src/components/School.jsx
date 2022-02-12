import React, { Component } from "react";
import "../style/center.css";

export default class School extends Component {
    render() {
        return (
            <div className="school-name">
                <div className="nama">
                    <h2 className="time">2019 - Sekarang</h2>
                    <h3 className="sklh">SMKN 1 KOTA BEKASI</h3>
                </div>
                <div className="nama">
                    <h2 className="time">2016 - 2019</h2>
                    <h3 className="sklh">SMPN 4 KOTA BEKASI</h3>
                </div>
                <div className="nama">
                    <h2 className="time">2010 - 2016</h2>
                    <h3 className="sklh">SDN KOTA BARU 2</h3>
                </div>
            </div>
        );
    }
}
