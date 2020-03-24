import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class PortfolioItem extends Component{
    render(){
        return(
                <div class="col-md-4 col-sm-6 portfolio-item">
                            <Link class="portfolio-link" data-toggle="modal" to="/portfolioModal1">
                                <div class="portfolio-hover">
                                <div class="portfolio-hover-content">
                                    <i class="fas fa-plus fa-3x"></i>
                                </div>
                                </div>
                                <img class="img-fluid" src={this.props.image} alt=""/>
                            </Link>
                            <div class="portfolio-caption">
                                <h4>{this.props.title}</h4>
                                <p class="text-muted">{this.props.subtitle}</p>
                            </div>
                </div>
        )
    }
}

export default PortfolioItem;