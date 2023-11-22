import React from 'react';
import './testimonial.css';
import { items } from './Data.js';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import { ReactComponent as Circle } from '../../assets/circle-solid.svg';
const inactiveColour = 'hsla(221, 0%, 88%, 0.81)';
const activeColour = 'purple';

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
        <div className="sm:w-[auto] m-auto  max-w-[100%] sm:mt-20 mt-10 w-[350px] overflow-hidden">
                <h1 className="text-xl sm:text-3xl font-medium pt-5 sm:pt-0"> <span className="underline-text">Uncompromising quality </span> with right compliances...</h1>
                <p className="font-normal leading-7 tracking-[1%] text-[15px] text-[#6A6A6A]  sm:text-lg whitespace-pre-wrap  gap-3  mt-2">From Indian & US Pharmacopoeia to Reach & Toy Safety, our vast suppliers network meets highly rigid and extensive regulatory compliances.  </p>
                <div className="grid grid-cols-3 gap-x-3 gap-y-3 sm:grid-cols-5 mt-10 sm:mt-10 mb-5 ">
                    <img src="./Group 48681.svg" alt="first" />
                    <img src="./Group 48682.svg" alt="secind" />
                    <img src="./Group 48683.svg" alt="thirs" />
                    <img src="./Group 48684.svg" alt="fourth" />
                    <img src="./Group 48685.svg" alt="fourth" />
                </div>
            </div>
            
          <div className='sm:w-[auto]   w-[375px] max-w-[100%] sm:mt-20 mt-10 pl-5 sm:pl-0 overflow-hidden'>
            <h1 className='text-xl font-medium sm:text-3xl overflow-hidden'> <span className='underline-text'>Trusted by leaders</span> across industries...</h1>
            <p className='font-normal leading-7 tracking-[1%] text-[15px] text-[#6A6A6A]  sm:text-lg whitespace-pre-wrap  gap-3  mt-4'>Over 80% of our customers find us remarkably great to work with. Service Excellence lies in the emotions we <br /> evoke and the relationships we forge. Every customer, every day!</p>
          </div>
            <div className="carousel-container mt-5  w-auto px-0 max-w-[100%] ">
                <div className="cards">
                    <div className="card leftCard ">
                      <div className='flex'>
                        <img className="avatars" src={items[this.state.leftCard].imgSrc} alt="avatar"></img>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        </div>
                        <div className="">
                            <h3 className="name font-semibold">{items[this.state.leftCard].name} </h3>
                            <p className="position">{items[this.state.leftCard].position}</p>
                            <p className="testimony font-normal text">{items[this.state.leftCard].quote}</p>
                        </div>
                    </div>
                    <div className="card active ml-5 sm:ml-0">
                      <div className='flex'>
                        <img className="avatars" src={items[this.state.activeIndex].imgSrc} alt="avatar"></img>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        </div>
                        <span>
                            <div className="">
                                <h3 className="name  font-semibold">{items[this.state.activeIndex].name}</h3>
                                <p className="position" >{items[this.state.activeIndex].position}</p>
                                <p className="testimony text">{items[this.state.activeIndex].quote}</p>
                            </div>
                            <div className="arrow-container  relative">
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
                        <div className="">
                            <h3 className="name font-semibold">{items[this.state.rightCard].name}</h3>
                            <p className="position">{items[this.state.rightCard].position}</p>
                            <p className="testimony  text">{items[this.state.rightCard].quote}</p>
                        </div>
                    </div>
                </div>
                </div>
        </>
        )
    }
}

export default Carousel;