import React from 'react';
import './testimonial.css';
import { items } from './Data.js';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import { ReactComponent as Circle } from '../../assets/circle-solid.svg';
const inactiveColour = 'hsla(221, 0%, 88%, 0.81)';
const activeColour = 'rgba(141, 46, 209, 1)';

class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            leftCard: 0,
            activeIndex: 0,
            rightCard: 0,
            arrayLength: 0
        };
        this.getLength = this.getLength.bind(this);
        this.activatePreviousSlide = this.activatePreviousSlide.bind(this);
        this.activateNextSlide = this.activateNextSlide.bind(this);
    }
    componentDidMount() { // gets index of active card from imported data and sets state
        let length = this.getLength();
        for (var i = 0; i < length; i++) {
            if (items[i].status === 'active') {
                this.setState({
                    leftCard: i - 1,
                    activeIndex: i,
                    rightCard: i + 1,
                    arrayLength: length
                });
            }
        }
    }
    getLength() { // calculating length of imported array
        let length = 0;
        // eslint-disable-next-line 
        for (var i in items) {
            length++;
        }
        return length;
    }
    activatePreviousSlide() {
        let leftIndex = 0;
        if (this.state.leftCard - 1 === -1) { // checking for out of bounds
            leftIndex = this.state.arrayLength - 1; // set left to last index
        }
        else {
            leftIndex = this.state.leftCard - 1; // moving back by one card
        }
        this.setState({
            rightCard: this.state.activeIndex,
            activeIndex: this.state.leftCard,
            leftCard: leftIndex
        })
    }
    activateNextSlide() {
        let rightIndex = 0;
        if (this.state.rightCard + 1 === this.state.arrayLength) { // checking for out of bounds
            rightIndex = 0; // set rightCard to beginning of array
        }
        else {
            rightIndex = this.state.rightCard + 1; // moving forward by one card
        }
        this.setState({
            leftCard: this.state.activeIndex,
            activeIndex: this.state.rightCard,
            rightCard: rightIndex
        })
    }
    render() {
        var trackerArray = [];
        for (var i = 0; i < this.state.arrayLength; i++) {
            if (i === this.state.activeIndex) {
                trackerArray.push(<div className='circle'> <Circle fill={activeColour} /> </div>);
            }
            else {
                trackerArray.push(<div className='circle'> <Circle fill={inactiveColour} /> </div>);
            }

        }
        return (
        <>
          <div style={{margin:"6% 10% 0% 10%"}}>
            <h1 className='text-xl font-medium sm:text-3xl'>Trusted by leaders across industries...</h1>
            <p className='font-medium  text-sm sm:text-lg whitespace-pre-wrap text-gray-500  gap-3 tracking-normal mt-3'>Over 80% of our customers find us remarkably great to work with. Service Excellence lies in the emotions we <br /> evoke and the relationships we forge. Every customer, every day!</p>
          </div>
            <div className="carousel-container">
                <div className="cards">
                    <div className="card leftCard ">
                      <div className='flex'>
                        <img className="avatars" src={items[this.state.leftCard].imgSrc} alt="avatar"></img>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        </div>
                        <div className="text">
                            <h3 className="name font-semibold">{items[this.state.leftCard].name} </h3>
                            <p className="position">{items[this.state.leftCard].position}</p>
                            <p className="testimony font-normal sm:font-semibold">{items[this.state.leftCard].quote}</p>
                        </div>
                    </div>
                    <div className="card active">
                      <div className='flex'>
                        <img className="avatars" src={items[this.state.activeIndex].imgSrc} alt="avatar"></img>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        </div>
                        <span>
                            <div className="text">
                                <h3 className="name text-lg font-semibold">{items[this.state.activeIndex].name}</h3>
                                <p className="position">{items[this.state.activeIndex].position}</p>
                                <p className="testimony font-normal sm:font-semibold ">{items[this.state.activeIndex].quote}</p>
                            </div>
                            <div className="arrow-container">
                                <ArrowLeft className="arrow arrow-left" fill="hsla(221, 0%, 49%, 0.98)" onClick={this.activatePreviousSlide.bind(this)}></ArrowLeft>
                                <ArrowRight className="arrow arrow-right" fill="hsla(221, 0%, 49%, 0.98)" onClick={this.activateNextSlide.bind(this)}></ArrowRight>
                            </div>
                        </span>
                    </div>
                    <div className="card rightCard">
                      <div className='flex'>
                        <img className="avatars" src={items[this.state.rightCard].imgSrc} alt="avatar"></img>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        </div>
                        <div className="text">
                            <h3 className="name font-semibold">{items[this.state.rightCard].name}</h3>
                            <p className="position">{items[this.state.rightCard].position}</p>
                            <p className="testimony font-normal sm:font-semibold">{items[this.state.rightCard].quote}</p>
                        </div>
                    </div>
                </div>
                </div>
        </>
        )
    }
}

export default Carousel;