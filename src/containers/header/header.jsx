import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import {
    getWidth,
    menuClose,
    collapsed,
    pageOn
} from '../../redux/actions'

import {connect} from 'react-redux';

import logoPng from '../../assets/header/logo.png';
import Icon from '@material-ui/core/Icon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


class Header extends Component {

    mobileMenu = () =>{
        this.props.menuClose();
    }

    expandSubmenu = () =>{
        this.props.collapsed();
    }

    resizeMobileMenu = () => {
        this.props.getWidth()
        let {getWidth} = this.props;
        console.log(getWidth)
        if(getWidth >= 1200){
            this.props.menuClose(true)
            this.props.collapsed(true);
        }
    }

    componentDidMount(){
        window.addEventListener("resize", this.resizeMobileMenu);
        this.props.getWidth()

        this.props.history.listen(location => {
            
            if (this.props.location.pathname !== location.pathname) {
                this.props.menuClose(true)
            }
        })
    }

    render() {
        const {headerWidth,headerMenuClose,headerCollapsed,headerPageOn} = this.props
        console.log(this.props)
        return (
            <header className="header">
                <nav>
                    <div className="logo">
                        <h1>Wonka Chocolate</h1>
                        <Link to="/"><img src={logoPng} alt="Wonka logo" /></Link>
                    </div>

                    <div className={ headerMenuClose ? "menu" : "menu open"} id="menu">
                        <ul className="function_menu">
                            <li><Link to="/#">Log in / Sign up</Link></li>
                            <li><Link to="/#">Cart(0)</Link></li>
                            <li>
                                <input type="text" />
                                <button type="submit"></button>
                            </li>
                        </ul>

                        <ul className="main_menu">
                            <li>
                                <span className={headerPageOn==="product"? "product pageOn" : "product"} onClick={(headerWidth>1200)? null : this.expandSubmenu}>Products<Icon component={headerCollapsed?ExpandMoreIcon:ExpandLessIcon} style={{fontSize: '1.125rem'}}></Icon></span>
                                <div className="subMenu product" id="subProduct">
                                    <div className="wrap type">
                                        <ul className={ headerCollapsed ? "list" : "list open"} id="chocoList">
                                            <li><Link to="/paletchoco">Palet Chocolate</Link></li>
                                            <li><Link to="/Truffles">Truffles</Link></li>
                                            <li><Link to="/Pralines">Pralines</Link></li>
                                            <li><Link to="/wonkaBiscuits">Wonka Biscuits</Link></li>
                                            <li><Link to="/wonkaBar">Wonka Bar</Link></li>
                                            <li><Link to="/wonkaSpecial">Wonka Special</Link></li>
                                        </ul>
                                    </div>   
                                </div>
                            </li>
                            <li><Link to="/workshops" className={headerPageOn==="workshops"? "workshops pageOn" : "workshops"}>Workshops</Link></li>
                            <li><Link to="/factorytour" className={headerPageOn==="factory"? "factory pageOn" : "factory"}>Factory Tour</Link></li>
                            <li><Link to="/account" className={headerPageOn==="account"? "account pageOn" : "account"}>Account</Link></li>
                        </ul>
                    </div>

                    <button type="button" className={headerMenuClose? "hamburger-icon" : "hamburger-icon on"} id="hamburgerIcon" onClick={this.mobileMenu}>
                        <span className="hr top"></span>
                        <span className="hr middle"></span>
                        <span className="hr bottom"></span>
                    </button>
                </nav>
            </header>
        )
    }
}


export default connect(
    state => ({
        // getWidth,isMenuClose,isCollapsed
        headerWidth: state.getWidth,
        headerMenuClose: state.isMenuClose,
        headerCollapsed: state.isCollapsed,
        headerPageOn: state.pageOnReducer
    }),
    {
        getWidth,
        menuClose,
        collapsed,
        pageOn
    }
)(withRouter(Header))