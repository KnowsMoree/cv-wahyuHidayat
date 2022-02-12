import React, { Component } from 'react'
import '../style/center.css'

export default class SubChapter extends Component {
    render() {
        return (
            <div className="skill-name">
                <h4>{this.props.skill}</h4>
            </div>
        )
    }
}