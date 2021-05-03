import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createGlobalStyle } from 'styled-components';

import fontUrl from '../../assets/fonts/ITCKRIST.TTF';
import Carousel from '../carousel/carousel';
import Productdemo from '../main_product/main_product';
import NewArrivals from '../../components/main_newArrivals/main_newArrivals';
import WorkshopsCourse from '../../components/workshops_course/workshops_course'
import MainFactory from '../../components/main_factory/main_factory';


import {
    pageOn
} from '../../redux/actions'

import workshopBg from '../../assets/workshop_bg.jpg';
import courseJpg from '../../assets/workshop/course-pic-1.jpg';
import courseJpg2 from '../../assets/workshop/course-pic-2.jpg';



const GlobalStyles = createGlobalStyle`
body {
    @font-face {
        font-family: kristen;
        src: url(${fontUrl});
    }

    font-family: 'Molengo', 'kristen', sans-serif;
}
`

class Main extends Component {

    state = {
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
        ]
    }

    componentDidMount(){
        this.props.pageOn("")
    }

    render() {
        const {workshops} = this.state;
        return (
            <div className="index">
                <GlobalStyles />
                <Carousel/>
                <div className="title">
                    <h3>Products</h3>
                </div>
                <Productdemo/>
                <div className="title">
                    <h3>New arrivals</h3>
                </div>
                <NewArrivals/>
                <div className="title">
                    <h3>Workshops</h3>
                </div>
                <div className="slogan" style={{backgroundImage:`url(${workshopBg})`}}>
                    <p>Chocolate &nbsp;Workshops &nbsp;for &nbsp;a &nbsp;variety &nbsp;of &nbsp;audiences</p>
                </div>
                <div className="workshop-course">
                    <WorkshopsCourse workshops={workshops}/>
                    <button className="btn">More</button>
                </div>
                <div className="title">
                    <h3>Factory Tour</h3>
                    <p className="caption">We invite you to a wonderful world that is overflowing with love for chocolate.</p>
                </div>
                <MainFactory/>
                <p className="open-time">Opening Time : Tue - Sun | 09:00 - 18:00</p>
                <div className="moreinfo-factory">
                    <button className="btn tickets">Tickets</button>
                    <button className="btn access">Access</button>
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({
        pageOnState: state.pageOnReducer
    }),
    {
        pageOn
    }
)(Main)
