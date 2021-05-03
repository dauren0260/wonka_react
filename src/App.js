import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './containers/header/header'
import Main from './containers/main/main'
import Paletchoco from './containers/product_paletchoco/product_paletchoco'
import ProductDetail from './containers/product_detail/product_detail';
import Workshops from './containers/workshops/workshops';
import CourseInfo from './containers/courseInfo/courseInfo';
import FactoryTour from './containers/factoryTour/factoryTour';
import Footer from './components/footer/footer';
import { connect } from 'react-redux';
import {
    showDetail,
    courseDetail
} from './redux/actions';

class App extends Component {

    render() {
        console.log(this.props)
        return (
        <div>
            <Header />
            <Switch>
                <Route path="/paletchoco" component={Paletchoco} />
                <Route path={`/product/${this.props.productDetail.path}`} component={ProductDetail} />
                <Route path="/workshops" component={Workshops} />
                <Route path={`/courseInfo/${this.props.courseDetailReducer.path}`} component={CourseInfo} />
                <Route path="/factoryTour" component={FactoryTour} />
                <Route component={Main} />
            </Switch>
            <Footer/>
        </div>
        )
    }
}

export default connect(
    state => ({
        productDetail: state.showDetailReducer,
        courseDetailReducer: state.courseDetailReducer
    }),
    {showDetail,courseDetail}
)(App)


