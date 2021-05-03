import React, { Component } from 'react';

import Icon from '@material-ui/core/Icon';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="title" style={{paddingBottom: 0}}>
                    <h3>Contact us</h3>
                </div>

                <div className="contact-container">
                    <div className="section">
                        <div className="heading">
                            <Icon component={PhoneIcon}></Icon>
                            <p>Phone</p>
                        </div>

                        <p>(255)352-6258</p>
                    </div>
                    <div className="section">
                        <div className="heading">
                            <Icon component={LocationOnIcon}></Icon>
                            <p>Headquarter</p>
                        </div>

                        <p>wonka Rd. #254 <br /> UNITED KINDOM</p>
                    </div>
                    <div className="section">
                        <div className="heading">
                            <Icon component={EmailIcon}></Icon>
                            <p>Email</p>
                        </div>

                        <p>service@wonka.com</p>
                    </div>
                </div>

                <div className="subscribe-title">
                    <h3>Subscribe</h3>
                </div>
                <div className="subscribe-container">
                    <p>Get discount and newest information</p>

                    <div className="subscribe-content">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn send">Send</button>
                    </div>
                </div>

                <ul className="social-media">
                    <li><Icon component={FacebookIcon}></Icon></li>
                    <li><Icon component={InstagramIcon}></Icon></li>
                    <li><Icon component={TwitterIcon}></Icon></li>
                    <li><Icon component={LinkedInIcon}></Icon></li>
                </ul>
            </footer>
        )
    }
}
