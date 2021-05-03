import React, { Component } from 'react';

import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import {
    increment,
    decrement,
    pageOn,
    showDetail
} from '../../redux/actions'


import bannerBg from '../../assets/product/banner-single.jpg';
import { connect } from 'react-redux';


class ProductDetail extends Component {

    state = {
        detailCollapsed : true,
    }

    expandDetail = () =>{
        const{detailCollapsed} = this.state;
        return this.setState({detailCollapsed: !detailCollapsed})
    }

    incrementCount = () =>{
        return this.props.increment(1)
    }
    decrementCount = () =>{
        return this.props.decrement(1)
    }

    componentDidMount(){
       this.props.pageOn("product")
    }

    render() {
        const {detailCollapsed} = this.state;
        console.log(this.props);
        const productDetail = this.props.productDetail
        return (
            <div className="productDetail">
                <div className="banner-sole" style={{backgroundImage: `url(${bannerBg})`}}>
                    <div className="per-product">
                        <img src={productDetail.src} alt={productDetail.name} />
                    </div>

                    <div className="per-info">
                        <p>{productDetail.name}</p>
                        <p>Seasonal "cold and delicious" Palais chocolate. Milk chocolate, orange and dark flavored chocolate.</p>
                        <div className="detail">
                            <div className="price">${productDetail.price}</div>
                            <div className="quantity">
                                <button className="quantity-btn minus" onClick={this.decrementCount}><Icon component={RemoveIcon}></Icon></button>
                                <input type="text" value={this.props.countNumber} name="number" readOnly/>
                                <button className="quantity-btn add" onClick={this.incrementCount}><Icon component={AddIcon}></Icon></button>
                            </div>
                            <button className="btn add-cart">Add To Cart</button>
                        </div>

                        <div className="downDetail" onClick={this.expandDetail}>
                            <div className="sub-detail">
                                <div className="detail-title">
                                    <p>Nutritional Info</p>
                                    <div className={ detailCollapsed ? "more-detail":"more-detail open"} id="nutritionDetail">
                                        <div className="detail-content">
                                            <p>Calories</p>
                                            <p>180 kcal</p>
                                        </div>
                                        <div className="detail-content">
                                            <p>Total Fat</p>
                                            <p>14 g</p>
                                        </div>
                                        <div className="detail-content">
                                            <p>Cholesterol</p>
                                            <p>5 mg</p>
                                        </div>
                                        <div className="detail-content">
                                            <p>Sodium</p>
                                            <p>50 mg</p>
                                        </div>
                                        <div className="detail-content">
                                            <p>Total Carbohydrate</p>
                                            <p>13 g</p>
                                        </div>
                                        <div className="detail-content">
                                            <p>Sugars</p>
                                            <p>8 g</p>
                                        </div>
                                        <div className="detail-content">
                                            <p>Protein</p>
                                            <p>2 g</p>
                                        </div>
                                    </div>
                                </div>              
                            </div>

                            <div className="sub-detail">
                                <div className="detail-title">
                                    <p>Ingredient</p>
                                    <div className={ detailCollapsed ? "more-detail":"more-detail open"} id="ingredientDetail">
                                        <div className="detail-content">
                                            <p>Organic cacao beans</p>
                                        </div>
                                        <div className="detail-content">
                                            <p>Organic raw cane sugar</p>
                                        </div>
                                        <div className="detail-content">
                                            <p>Organic cocoa butter</p>
                                        </div>
                                        <div className="detail-content">
                                            <p>Organic butterfat</p>
                                        </div>
                                        <div className="detail-content">
                                            <p>Sea salt </p>
                                        </div>
                                    </div>
                
                                </div>              
                            </div>
                            <Icon component={detailCollapsed ? KeyboardArrowDownIcon : KeyboardArrowUpIcon}></Icon>
                        </div>
            
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        countNumber: state.countReducer,
        pageOnState: state.pageOnReducer,
        productDetail: state.showDetailReducer
    }),
    {
        increment,
        decrement,
        pageOn,
        showDetail
    }
)(ProductDetail)