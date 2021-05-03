import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Icon from '@material-ui/core/Icon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import angelTear from '../../assets/productPalet/angel-tear.png';
import blueMoon from '../../assets/productPalet/blue-moon.png';
import cupidLuck from '../../assets/productPalet/cupid-luck.png';
import lavaCrater from '../../assets/productPalet/lava-crater.png';
import darkMars from '../../assets/productPalet/dark-mars.png';
import newArrivalBg from './new-arrival-bg.png'

export default class MainNewArrivals extends Component {

    state = {
        demoProduct:[
            {
                key: "angel1",
                name: "Angel Tear",
                src: angelTear,
            },
            {
                key: "Cupid2",
                name: "Cupid Luck",
                src: cupidLuck,
            },
            {
                key: "Dark3",
                name: "Dark Mars",
                src: darkMars,
            },
            {
                key: "Lava4",
                name: "Lava Crater",
                src: lavaCrater,
            },
            {
                key: "Blue5",
                name: "Blue Moon",
                src: blueMoon,
            },
        ]
    }

    changeDemo = ()=>{
        const {demoProduct} = this.state
        let indexNew = 1;

        if(indexNew > 4){
            indexNew = 0;
        }
        this.setState({
            demoProduct:[   demoProduct[indexNew],
                            demoProduct[ (indexNew+1) > 4 ? 0 : (indexNew+1)],
                            demoProduct[ (indexNew+2) > 4 ? 0 : (indexNew+2)],
                            demoProduct[ (indexNew+3) > 4 ? 0 : (indexNew+3)],
                            demoProduct[ (indexNew+4) > 4 ? 0 : (indexNew+4)]
                        ]
        })
        indexNew++;   
    }

    

    render() {
        const newProduct = this.state.demoProduct.map((item)=>{
            return (
                <li className="item new" key={item.key} ref={item.ref}>
                    <Link to="/"><img src={item.src} alt={item.name} /></Link>
                    <p>{item.name}</p>
                </li>
            )
        })
        return (
            <div className="new-arrival-item" style={{backgroundImage:`url(${newArrivalBg})`}}>
                <ul className="container-new">
                    {newProduct}
                </ul>
                <button className="btn next" onClick={this.changeDemo}>Show Next
                    <Icon component={ArrowForwardIcon}></Icon>
                </button>
            </div>
        )
    }
}
