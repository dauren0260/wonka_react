import React, { Component } from 'react'
import { connect } from 'react-redux'
import InnerBanner from '../../components/inner_banner/inner_banner'
import {
    pageOn,
} from '../../redux/actions';

import WorkshopsCourse from '../../components/workshops_course/workshops_course'

import feature1 from '../../assets/workshop/feature-1.jpg';
import feature2 from '../../assets/workshop/feature-2.jpg';
import feature3 from '../../assets/workshop/feature-3.jpg';
import courseJpg from '../../assets/workshop/course-pic-1.jpg';
import courseJpg2 from '../../assets/workshop/course-pic-2.jpg';
import courseJpg3 from '../../assets/workshop/course-pic-3.jpg';

import banner from '../../assets/workshop/banner-work.jpg'

class Workshops extends Component {

    state = {
        banner:{
            src: banner,
            pageName: "Workshops"
        },
        workshops:[
            {
                key: "course1",
                name:"Chocolate Addicted Workshop",
                hour: "13:00 - 16:00",
                chef: "Gizzy",
                location: "Utopia",
                price: "280",
                month: "June",
                date:"23",
                src: courseJpg,
                quota: 5,
                path: "course1",
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4807.588023881461!2d-1.1493653252387648!3d52.95212938627611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0aded7035590e1b!2sChocolate%20Utopia!5e0!3m2!1szh-TW!2stw!4v1619131230185!5m2!1szh-TW!2stw',
            },
            {
                key: "course2",
                name:"The Art of Bean to Bar Workshop",
                hour: "14:00 - 17:00",
                chef: "Ronan",
                location: "Hotel Chocolat",
                price: "250",
                month: "July",
                date:"15",
                src: courseJpg2,
                quota: 8,
                path: "course2",
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9615.1023091703!2d-1.1504472053079688!3d52.95246107328884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3d52a5bfcd1%3A0x6b37eb5d5b3dc8ee!2sHotel%20Chocolat!5e0!3m2!1szh-TW!2stw!4v1619131172300!5m2!1szh-TW!2stw',
            },
            {
                key: "course3",
                name:"Back to School Workshop",
                hour: "14:00 - 17:00",
                chef: "Christina",
                location: "Luisa's Vegan",
                price: "300",
                month: "July",
                date:"28",
                src: courseJpg3,
                quota: 3,
                path: "course3",
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.473429477302!2d-1.1463886235722969!3d52.95218871682773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x483b50669e71ab70!2sLuisa&#39;s%20Vegan%20Chocolates!5e0!3m2!1szh-TW!2stw!4v1619131333217!5m2!1szh-TW!2stw',
            },
        ]
    }

    componentDidMount(){
        this.props.pageOn("workshops")
    }

    render() {
        const {banner, workshops} = this.state
        return (
            <div className="workshops">
                <InnerBanner banner={banner}/>
                <div className="title">
                    <h3>Our Features</h3>
                </div>
                <div className="features">
                    <div className="container-features">
                        <img src={feature1} alt="features" />
                        <p>Years of Pratical Experience</p>
                    </div>
                    <div className="container-features">
                        <img src={feature2} alt="features" />
                        <p>Easy Way to Learn for Beginners</p>
                    </div>
                    <div className="container-features">
                        <img src={feature3} alt="features" />
                        <p>Award Wining Chocolatier</p>
                    </div>
                </div>
                <div className="workshop-course">
                    <WorkshopsCourse workshops={workshops}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({

    }),
    {
        pageOn
    }
)(Workshops)