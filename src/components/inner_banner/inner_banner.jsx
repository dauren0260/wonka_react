import React, { Component,Fragment } from 'react';

export default class InnerBanner extends Component {
    render() {
        return (
            <Fragment>
                <div className="banner">
                    <div className="carousel">
                        <img src={this.props.banner.src} alt="banner"/>
                    </div>

                    <div className="banner-title">
                        <h3>{this.props.banner.pageName}</h3>
                    </div>
                </div>
            </Fragment>
        )
    }
}
