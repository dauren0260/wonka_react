import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import FaceIcon from '@material-ui/icons/Face';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
    courseDetail
} from '../../redux/actions'
import { connect } from 'react-redux';


class WorkshopsCourse extends Component {
    deliverPath = (key,name,hour,chef,location,price,month,date,src,quota,path,mapSrc) =>{
        return () =>{
            this.props.courseDetail({key,name,hour,chef,location,price,month,date,src,quota,path,mapSrc})
        }
    }

    render() {
        return (
            this.props.workshops.map((item)=>{
                return (
                    <div className="course-item" key={item.key}>
                        <div className="date">
                            <p>{item.date}</p>
                            <p>{item.month}</p>
                        </div>
                        
                        <Link to={`/courseInfo/${item.path}`}>
                            <img src={item.src} alt="lava cake" onClick={this.deliverPath(item.key,item.name,item.hour,item.chef,item.location,item.price,item.month,item.date,item.src,item.quota,item.path,item.mapSrc)}/>
                            <div className="class-info">
                                <p>{item.name}</p>
                                <p>It’s a pratical, fun workshop in a light and fun atmosphere.</p>
                                <div className="class-detail">
                                    <div className="content">
                                        <Icon component={AccessAlarmIcon}></Icon>
                                        <div className="text">
                                            <span>Hour</span>
                                            <span>{item.hour}</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <Icon component={FaceIcon}></Icon>
                                        <div className="text">
                                            <span>Chef</span>
                                            <span>{item.chef}</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <Icon component={LocationOnIcon}></Icon>
                                        <div className="text">
                                            <span>Location</span>
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <Icon component={AttachMoneyIcon}></Icon>
                                        <div className="text">
                                            <span>Price</span>
                                            <span>${item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        )
    }
}

export default connect(
    state =>({

    }),
    {
        courseDetail
    }
)(WorkshopsCourse)