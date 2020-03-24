import React, {Component} from 'react';
import Header from"../Common/Header";
import {image} from '../assets/img/header-bg.jpg'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Team from './Team'
import Clients from './Clients'
import Contact from './Contact'

class Home extends Component{
    render(){
        return(
            <div>
                <Header
                    title='Welcome To Our Studio!'
                    subTitle="IT'S NICE TO MEET YOU"
                    image={image}
                    link='/services'
                    buttonText='Tell me More'
                    showButton={true}
                />
                <Services/>
                <Portfolio/>
                <About/>
                <Team/>
                <Clients/>
                <Contact/>
                
            </div>
        )
    }
}

export default Home;