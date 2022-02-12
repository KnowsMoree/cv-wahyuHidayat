import React, { Component } from 'react'
import '../style/center.css'

export default class SubChapter extends Component {
    render() {
        return (
            <div>
                <h1 className="heading">{this.props.judul}</h1>
            </div>
        )
    }
}
