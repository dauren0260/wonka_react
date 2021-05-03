import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    showDetail
} from '../../redux/actions';

class ProductItem extends Component {


    deliverPath = (name,src,price,path) =>{
        return () =>{
            this.props.showDetail({  
                name,
                src,
                price,
                path
            })
        }
    }


    render() {
        return (
            this.props.paletChoco.map((item)=>{
                return (
                    <div className="goods-item" key={item.path}>
                        <Link to={`/product/${item.path}`}>
                            <img src={item.src} alt={item.name} onClick={this.deliverPath(item.name,item.src,item.price,item.path)}/>
                        </Link>
                        <p className="name">{item.name}</p>
                        <p>${item.price}</p>
                        <button className="btn add-cart">Add To Cart</button>
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
        showDetail
    }
)(ProductItem)
