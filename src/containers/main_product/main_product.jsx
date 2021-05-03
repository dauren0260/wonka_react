import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {setDemo} from '../../redux/actions'

import paletImg from './imgs/palet-collect.jpg';
import truffleImg from './imgs/truffle-collect.png';
import pralineImg from './imgs/praline-collect.jpg';
import biscuitImg from './imgs/biscuit-collect.jpg';
import barImg from './imgs/bar-collect.jpg';
import specialImg from './imgs/special-collect.jpg';

import pinkPlate from './imgs/pink-plate.png';
import paletDemo from './imgs/palet-demo.png';
import trufflesDemo from './imgs/truffles-demo.png';
import pralineDemo from './imgs/praline-demo.png';
import biscuitDemo from './imgs/biscuit-demo.png';
import barNewDemo from './imgs/bar-new.png';
import namaDemo from './imgs/nama.png';


class mainProduct extends Component {

    changeDemo = (data) => {
        return() =>{
            this.props.setDemo(data)
        }
    }

    render() {
        const {productDemoSrc} = this.props.demoSrc

        return (
            <div className="product-container">
                <div className="choco-list">
                    <div className="choco-collect">
                        <div className="img-container">
                            <Link to="/paletchoco">
                                <img src={paletImg} alt="palet" id="paletCollect" onMouseOver={this.changeDemo(paletDemo)}/>
                            </Link>
                        </div>
                        <p>Palet</p>
                    </div>
                    <div className="choco-collect">
                        <div className="img-container">
                            <Link to="/Truffles">
                                <img src={truffleImg} alt="Truffles" id="truffleCollect" onMouseOver={this.changeDemo(trufflesDemo)}/>
                            </Link>
                        </div>
                        <p>Truffles</p>
                    </div>
                    <div className="choco-collect">
                        <div className="img-container">
                            <Link to="/Pralines">
                                <img src={pralineImg} alt="Praline" id="pralineCollect" onMouseOver={this.changeDemo(pralineDemo)}/>
                            </Link>
                        </div>
                        <p>Praline</p>
                    </div>
                    <div className="choco-collect">
                        <div className="img-container">
                            <Link to="/wonkaBiscuits">
                                <img src={biscuitImg} alt="Wonka Biscuits" id="biscuitCollect" onMouseOver={this.changeDemo(biscuitDemo)}/>
                            </Link>
                        </div>
                        <p>Wonka Biscuits</p>
                    </div>
                    <div className="choco-collect">
                        <div className="img-container">
                            <Link to="/wonkaBar">
                                <img src={barImg} alt="Wonka Bar" id="barCollect" onMouseOver={this.changeDemo(barNewDemo)}/>
                            </Link>
                        </div>
                        <p>Wonka Bar</p>
                    </div>
                    <div className="choco-collect">
                        <div className="img-container">
                            <Link to="/wonkaSpecial">
                                <img src={specialImg} alt="Wonka Special" id="specialCollect" onMouseOver={this.changeDemo(namaDemo)}/>
                            </Link>
                        </div>
                        <p>Wonka Special</p>
                    </div>
                </div>


                <div className="product-demo">
                    <img src={pinkPlate} alt="pink plate" />

                    <div className="plate-inner">
                        <img src={productDemoSrc==='paletImg'?paletDemo:productDemoSrc} alt="product demo" id="demoArea" />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        demoSrc:state
    }),
    {
        setDemo,
    }
)(mainProduct)