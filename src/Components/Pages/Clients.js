import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import img1 from '../assets/img/logos/creative-market.jpg'
import img2 from '../assets/img/logos/designmodo.jpg'
import img3 from '../assets/img/logos/envato.jpg'
import img4 from '../assets/img/logos/themeforest.jpg'
import SingleClient from "./SingleClient";

const clients=[
    {image:img1},
    {image:img2},
    {image:img3},
    {image:img4}
];
class Client extends Component{
    render(){
        return(
            <section className="py-5">
                <div className="container">
                <div className="row">
                   {clients.map((item,index)=>{
                       return <SingleClient {...item} key={index}/>
                   })}

                </div>
                </div>
            </section>
        )

    }

}

export default Client ;