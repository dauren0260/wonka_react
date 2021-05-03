import React, { Component } from 'react'
import MyApp from '../factory_calendar/factory_calendar'
import InnerBanner from '../../components/inner_banner/inner_banner';
import banner from '../../assets/banner-factory.jpg';
import magicHat from '../../assets/icon/magichat.png'
import { connect } from 'react-redux';
import {
    pageOn,
} from '../../redux/actions';

import Icon from '@material-ui/core/Icon';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

class FactoryTour extends Component {

    state = {
        banner:{
            src: banner,
            pageName: "Factory Tour"
        },
        detailSubway: true,
        detailBus: false,
        detailCar: false,
    }

    componentDidMount(){
        this.props.pageOn("factory")
    }

    render() {

        const {banner,detailSubway,detailBus,detailCar} = this.state

        return (
            <div className="factoryTour">
                <InnerBanner banner={banner}/>
                <div className="title">
                    <h3>Opening Time</h3>
                </div>
                <MyApp/>
                <div className="note">
                    <p>Close</p>
                    <p>Full amount</p>
                    <p>
                        <i style={{backgroundImage:`url(${magicHat})`}}></i>
                        Time: 09:00 - 18:00
                    </p>
                </div>
                <div className="title">
                    <h3>Tickets</h3>
                </div>
                <div className="tickets-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Only Tickets</th>
                                <th>Adult <span>(16 years old or over)</span></th>
                                <th>Child <span>(4-15 years old)</span></th>
                                <th>3 years old or under</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>General <span>(19 people or less)</span></td>
                                <td>$200</td>
                                <td>$120</td>
                                <td>$Free</td>
                            </tr>
                            <tr>
                                <td>Group <span>(20 people or over)</span></td>
                                <td>$150</td>
                                <td>$100</td>
                                <td>Free</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="tickets-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Premium Tour</th>
                                <th>Adult <span>(16 years old or over)</span></th>
                                <th>Child <span>(4-15 years old)</span></th>
                                <th>3 years old or under</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>General <span>(19 people or less)</span></td>
                                <td>$450</td>
                                <td>$300</td>
                                <td>$Free</td>
                            </tr>
                            <tr>
                                <td>Group <span>(20 people or over)</span></td>
                                <td>$400</td>
                                <td>$250</td>
                                <td>Free</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="tickets-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Standard Tour</th>
                                <th>Adult <span>(16 years old or over)</span></th>
                                <th>Child <span>(4-15 years old)</span></th>
                                <th>3 years old or under</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>General <span>(19 people or less)</span></td>
                                <td>$300</td>
                                <td>$180</td>
                                <td>$Free</td>
                            </tr>
                            <tr>
                                <td>Group <span>(20 people or over)</span></td>
                                <td>$300</td>
                                <td>$180</td>
                                <td>Free</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="btn">Buy Tickets</button>
                <div className="admission">
                    <p>
                        <i style={{backgroundImage:`url(${magicHat})`}}></i>
                        Admission Notice
                    </p>
                </div>
                <article className="notice">
                    <p>Prices include tax.</p>
                    <p>Photographs and/or video recordings may be taken exhibition halls as long as no auxiliary equipment such as flash, light capturing equipment, tripods, and selfie sticks are used. For artifacts that visitors may not take photographs and/or video recordings of, prohibition signs will be in place.</p>
                    <p>When taking photographs and/or video recordings, visitors may not impede traffic flow and/or violate the safety and/or viewing rights of other visitors.</p>
                    <p>Any violation of the following rules will result in warnings, stopping of behavior/act, denial of admission, and/or dismissal from the factory.</p>
                    <ul>
                        <li>Dangerous items, food, liquid, bottles, and cans are strictly prohibited inside the exhibition halls.</li>
                        <li>Visitors should not run, play, eat and drink, smoke, lie on seats, sit on the floor, take off their shoes, and littering.</li>
                    </ul>
                </article>
                <div className="title">
                    <h3>Access</h3>
                </div>
                <div className="address">
                    <p>
                        <i style={{backgroundImage:`url(${magicHat})`}}></i>
                        Address: wonka Rd. #254 UNITED KINDOM
                    </p>
                </div>
                <div className="map">
                    <iframe title="google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.751837174162!2d11.530708515835519!3d48.172863956681354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e765c485c70b7%3A0xb2768a24d24a29a4!2sWilly%20Wonka%20And%20The%20Chocolate%20Factory%20Set!5e0!3m2!1szh-TW!2stw!4v1598174231561!5m2!1szh-TW!2stw" width={600} height={350} frameBorder={0} style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="travel-detail">
                    <div className="detail-title" onClick={()=>{this.setState({detailSubway: !detailSubway})}}>
                        <p>By Subway</p>
                        <Icon component={detailSubway ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}></Icon>
                    </div>

                    <div className={detailSubway ? "detail-section open": "detail-section"}>
                        <div className="more-detail">
                            <div className="detail-content">
                                <p>Subway</p>
                                <p>Shin Sappro Station</p>
                            </div>
                            <div className="detail-process">
                                <p>Tozai Line 35 minutes
                                <Icon component={ArrowRightAltIcon}></Icon>
                                </p>
                                <hr />
                            </div>
                            <div className="detail-content">
                                <p>Subway</p>
                                <p>Mosawa Station</p>
                            </div>
                            <div className="detail-process">
                                <p>On foot 7 minutes
                                <Icon component={ArrowRightAltIcon}></Icon>
                                </p>
                                <hr />
                            </div>
                            <div className="detail-content">
                                <p>Wonka Factory </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="travel-detail">
                    <div className="detail-title" onClick={()=>{this.setState({detailBus: !detailBus})}}>
                        <p>By Bus</p>
                        <Icon component={detailBus ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}></Icon>
                    </div>

                    <div className={detailBus ? "detail-section open": "detail-section"}>
                        <div className="more-detail" >
                            <div className="detail-content">
                                <p>Bus Station</p>
                                <p>Shin Sappro Station</p>
                            </div>
                            <div className="detail-process">
                                <p>Otaru Line 35 minutes
                                <Icon component={ArrowRightAltIcon}></Icon>
                                </p>
                                <hr />
                            </div>
                            <div className="detail-content">
                                <p>Bus Stop</p>
                                <p>Mosawa Station</p>
                            </div>
                            <div className="detail-process">
                                <p>On foot 10 minutes
                                    <Icon component={ArrowRightAltIcon}></Icon>
                                </p>
                                <hr />
                            </div>
                            <div className="detail-content">
                                <p>Wonka Factory </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="travel-detail">
                    <div className="detail-title" onClick={()=>{this.setState({detailCar: !detailCar})}}>
                        <p>By Car</p>
                        <Icon component={detailCar ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}></Icon>
                    </div>

                    <div className={detailCar ? "detail-section open": "detail-section"}>
                        <div className="more-detail" >
                            <div className="detail-content">
                                <p>Bus Station</p>
                                <p>Shin Sappro Station</p>
                            </div>
                            <div className="detail-process">
                                <p>Toll road section: Chitose IC to Wonka Rd, 60 minutes</p>
                                <hr />
                                <p>Local road section: Agnes-Pockels-Bogen to Wonka Rd, 100 minutes
                                </p>
                                <Icon component={ArrowRightAltIcon}></Icon>
                            </div>
                            <div className="detail-content">
                                <p>Wonka Factory </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state =>({

    }),
    {
        pageOn
    }
)(FactoryTour)