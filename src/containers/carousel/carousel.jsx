import React, { Component } from 'react';
import Glide from '@glidejs/glide';
import Icon from '@material-ui/core/Icon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { connect } from 'react-redux';


import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';

let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

class Carousel extends Component {


    componentDidMount(){
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);

        new Glide('.glide',{
            type: 'carousel',
            autoplay: 1800,
            startAt: 0,
          }).mount()
    }

    render() {
        

        return (
            <div className="banner">
                <div className="carousel">
                    <div className="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                            <li className="glide__slide"><img src={banner1} alt="banner1"/></li>
                            <li className="glide__slide"><img src={banner2} alt="banner2"/></li>
                            <li className="glide__slide"><img src={banner3} alt="banner3"/></li>
                            </ul>
                        </div>

                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                                <Icon component={ChevronLeftIcon}></Icon>
                            </button>
                            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                                <Icon component={ChevronRightIcon}></Icon>
                            </button>
                        </div>

                        <div className="glide__bullets" data-glide-el="controls[nav]">
                            <button className="glide__bullet" data-glide-dir="=0"></button>
                            <button className="glide__bullet" data-glide-dir="=1"></button>
                            <button className="glide__bullet" data-glide-dir="=2"></button>
                        </div>
                    </div>
                </div>
                <p>The Best Thing Happen to Chocolate Since <span className="txt-rotate" data-period="1500" data-rotate='["Willy", "Wonka", "Willy Wonka."]'></span></p>

            </div>
        )
    }
}

export default connect(
    state => ({state}),
    {
        
    }
)(Carousel)