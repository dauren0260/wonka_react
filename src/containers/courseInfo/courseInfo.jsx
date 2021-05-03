import React, { Component } from 'react'
import InnerBanner from '../../components/inner_banner/inner_banner'
import { connect } from 'react-redux'
import {
    pageOn,
    incrementCourse,
    decrementCourse,
    courseDetail
} from '../../redux/actions';
import Icon from '@material-ui/core/Icon';
import FaceIcon from '@material-ui/icons/Face';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import banner from '../../assets/workshop/banner-work.jpg'

class CourseInfo extends Component {

    state = {
        banner:{
            src: banner,
            pageName: "Workshops"
        },
    }

    incrementCount = () =>{
        return this.props.incrementCourse(1)
    }
    decrementCount = () =>{
        return this.props.decrementCourse(1)
    }

    componentDidMount(){
        this.props.pageOn("workshops")
    }

    render() {
        console.log(this.props)
        const {courseCount,courseDetailReducer} = this.props
        return (
            <div className="courseInfo">
                <InnerBanner banner={this.state.banner}/>
                <div className="title">
                    <h3>Course Info</h3>
                </div>
                <div className="course-heading">
                    <p>{courseDetailReducer.name}</p>
                </div>
                <div className="course-container">

                    <div className="course-content">
                        <img src={courseDetailReducer.src} alt="workshop" />
                        <div className="class-detail">
                            <div className="content">
                                <Icon component={CalendarTodayIcon}></Icon>
                                <div className="text">
                                    <span>Date</span>
                                    <span>{courseDetailReducer.month} {courseDetailReducer.date} 2021</span>
                                </div>
                            </div>
                            <div className="content">
                                <Icon component={AccessAlarmIcon}></Icon>
                                <div className="text">
                                    <span>Hour</span>
                                    <span>{courseDetailReducer.hour}</span>
                                </div>
                            </div>
                            <div className="content">
                                <Icon component={FaceIcon}></Icon>
                                <div className="text">
                                    <span>Chef</span>
                                    <span>{courseDetailReducer.chef}</span>
                                </div>
                            </div>
                        </div>

                        <div className="book-info">
                            <div className="course-price">
                                <p>${courseDetailReducer.price} /per person</p>
                            </div>
                            
                            <div className="quantity">
                                <div className="quantity-area">
                                    <button className="quantity-btn minus" onClick={this.decrementCount}><Icon component={RemoveIcon}></Icon></button>
                                    <input type="text" value={courseCount} name="number" readOnly/>
                                    <button className="quantity-btn add" onClick={this.incrementCount}><Icon component={AddIcon}></Icon></button>
                                </div>
                                <button className="btn book">Book Tickets</button>
                            </div>
                        </div>


                        <article className="course-intro">
                            <p>
                                In 1657 a Frenchman opened a shop in London 
                                at which solid chocolate for making the beverage 
                                could be purchased at 10 to 15 shillings per pound.</p>
                            <p>
                                At that price only the wealthy could afford to drink 
                                it, and there appeared in London and other European 
                                capitals fashionable chocolate houses.</p>
                        </article>

                    </div>

                    <div className="course-access">
                        <div className="map">
                            <iframe title="google map" src={courseDetailReducer.mapSrc} width={350} height={250} frameBorder={0} style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                            <div className="course-address">
                                <p>Address</p>
                                <p>Northern Entrance, Unit 330, 2nd Floor <br/>
                                    Chorzine 5 <br/>
                                    {courseDetailReducer.location}</p>
                            </div>
                        </div>

                        <div className="course-quota">
                            <p>Don't miss out! <br/><br/> Only <span id="left">{courseDetailReducer.quota}</span> places left.
                            </p>
                            <hr/>
                            <p>Maximum Participants: 20</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(    
    state => ({
        courseCount : state.courseCountReducer,
        courseDetailReducer: state.courseDetailReducer
    }),
    {
        pageOn,
        incrementCourse,
        decrementCourse,
        courseDetail
    }
)(CourseInfo)
