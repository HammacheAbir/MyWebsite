import React,{Component} from 'react';
import Field from "../Common/Field"

const Fields = {
    sections : [
        [
            {name:'name',elementName:'input',type:'text',placeholder:'Your name *', validation:'Please enter your name.'},
            {name:'email',elementName:'input',type:'text',placeholder:'Your email *', validation:'Please enter your email address.'},
            {name:'phone',elementName:'input',type:'text',placeholder:'Your phone *', validation:'Please enter your phone number.'}
        ],
        [
            {name:'message',elementName:'textarea',type:'text',placeholder:'Your message *', validation:'Please enter your message.'}
        ]
    ]
}


class Contact extends Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
            email:'',
            phone:'',
            message:''
        }
    }

    render(){
        return(
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="row">
                                {Fields.sections.map((section,index)=>{

                                         return (<div className="col-md-6">
                                                    {
                                                        section.map((item,i)=>{
                                                            return <Field 
                                                                        {...item} 
                                                                        key={i}
                                                                        value={this.state[item.name]}
                                                                        onChange={(e)=>this.setState({[item.name]:e.target.value})} 
                                                                     />

                                                        })
                                                    }                                    
                                                </div>)

                                })}
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Contact;