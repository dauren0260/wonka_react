import React, { Component } from 'react';
import InnerBanner from '../../components/inner_banner/inner_banner';
import paletBanner from './palet-banner.jpg';
import Icon from '@material-ui/core/Icon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { connect } from 'react-redux';
import {
    openType,
    openSort,
    pageOn
} from '../../redux/actions';
import ProductItem from '../product_item/product_item';

import darkMars from '../../assets/productPalet/dark-mars.png';
import pearlBubble from '../../assets/productPalet/pearl-bubble.png';
import poseidon from '../../assets/productPalet/poseidon.png';
import mikan from '../../assets/productPalet/Mikan.png';
import pinkLady from '../../assets/productPalet/pink-lady.png';
import darkGalaxy from '../../assets/productPalet/tanabata.png';
import whiteLover from '../../assets/productPalet/white-lover.png';
import angelTear from '../../assets/productPalet/angel-tear.png';
import machaNuts from '../../assets/productPalet/macha-nuts.png';
import almondNuts from '../../assets/productPalet/almond-nuts.png';
import blueMoon from '../../assets/productPalet/blue-moon.png';
import honeycomb from '../../assets/productPalet/honeycomb.png';
import lavaCrater from '../../assets/productPalet/lava-crater.png';
import redDot from '../../assets/productPalet/red-dot.png';
import cupidLuck from '../../assets/productPalet/cupid-luck.png';
import pinkGrid from '../../assets/productPalet/pink-grid.png';


class Paletchoco extends Component {

    state = {
        banner:{
            src: paletBanner,
            pageName: "Palet Chocolate"
        },
        paletChoco:[
            {
                name:"Dark Mars",
                src: darkMars,
                price: 70,
                path: "darkMars"
            },
            {
                name:"Pearl Bubble",
                src: pearlBubble,
                price: 75,
                path: "pearlBubble"
            },
            {
                name:"Poseidon",
                src: poseidon,
                price: 65,
                path: "poseidon"
            },
            {
                name:"Mikan",
                src: mikan,
                price: 77,
                path: "mikan"
            },
            {
                name:"Pink Lady",
                src: pinkLady,
                price: 70,
                path: "pinkLady"
            },
            {
                name:"Dark Galaxy",
                src: darkGalaxy,
                price: 75,
                path: "darkGalaxy"
            },
            {
                name:"White Lover",
                src: whiteLover,
                price: 70,
                path: "whiteLover"
            },
            {
                name:"Angel Tear",
                src: angelTear,
                price: 68,
                path: "angelTear"
            },
            {
                name:"Macha Nuts",
                src: machaNuts,
                price: 70,
                path: "machaNuts"
            },
            {
                name:"Almond Nuts",
                src: almondNuts,
                price: 65,
                path: "almondNuts"
            },
            {
                name:"Blue Moon",
                src: blueMoon,
                price: 70,
                path: "blueMoon"
            },
            {
                name:"Honeycomb",
                src: honeycomb,
                price: 78,
                path: "honeycomb"
            },
            {
                name:"Lava Crater",
                src: lavaCrater,
                price: 70,
                path: "lavaCrater"
            },
            {
                name:"Red Dot",
                src: redDot,
                price: 70,
                path: "redDot"
            },
            {
                name:"Cupid Luck",
                src: cupidLuck,
                price: 70,
                path: "cupidLuck"
            },
            {
                name:"Pink Grid",
                src: pinkGrid,
                price: 70,
                path: "pinkGrid"
            },
        ],
    }

    openTypeMenu = () => {
        this.props.openType()
    }

    openSortMenu = () => {
        this.props.openSort()
    }

    componentDidMount(){
        this.props.pageOn("product")
    }

    render() {
        const {banner,paletChoco} = this.state;
        const {chocoTypeFilter,chocoSortFilter} = this.props
        console.log(this.props)
        return (
            <div className="productPage">
                <InnerBanner banner={banner}/>
                <div className="title pa">
                    <h3>Palet Chocolate</h3>
                </div>
                <ul className="filter">
                    <li>
                        <span onClick={this.openTypeMenu}>Chocolate Type
                            <Icon component={ chocoTypeFilter ? ExpandLessIcon : ExpandMoreIcon} style={{verticalAlign: 'middle'}}></Icon>
                        </span>
                        <div className={chocoTypeFilter ? "dropdown-option open" : "dropdown-option"}>
                            <label>
                                <input type="checkbox" name="chocoType[]" value="whiteChoco" />White Chocolate
                            </label>
                            <label>
                                <input type="checkbox" name="chocoType[]" value="blackChoco" />Black Chocolate
                            </label>
                            <label>
                                <input type="checkbox" name="chocoType[]" value="veganChoco" />Vegan Chocolate
                            </label>
                        </div>
                    </li>
                    <li>
                        <span onClick={this.openSortMenu}>Sort by
                            <Icon component={ chocoSortFilter ? ExpandLessIcon : ExpandMoreIcon} style={{verticalAlign: 'middle'}}></Icon>
                        </span>
                        <div className={ chocoSortFilter ? "dropdown-option open" :"dropdown-option"}>
                            <label>
                                <input type="radio" name="sortby" defaultChecked/>Newest to Oldest
                            </label>
                            <label>
                                <input type="radio" name="sortby" />Price, low to high
                            </label>
                            <label>
                                <input type="radio" name="sortby" />Price, hight to low
                            </label>
                        </div>
                    </li>
                </ul>
                <div className="goods-container">
                    <ProductItem paletChoco={paletChoco}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        chocoTypeFilter: state.expandChocoType,
        chocoSortFilter: state.expandChocoSort,
        pageOnState: state.pageOnReducer
    }),
    {
        openType,
        openSort,
        pageOn
    }
)(Paletchoco)