/**
 * Sign Up With Firebase
 */
import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

// import Button from '@material-ui/core/Button';
// import { connect } from 'react-redux';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import { Link } from 'react-router-dom';
// import { Form, FormGroup, Input } from 'reactstrap';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import QueueAnim from 'rc-queue-anim';
// import { Fab } from '@material-ui/core';
import Select from 'react-select';
import '../assets/css/index.css'
// components
// import { SessionSlider } from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';
// import { log } from 'util';
import Checkbox from 'react-simple-checkbox';
// redux action
// import {
//    signupUserInFirebase,
//    signinUserWithFacebook,
//    signinUserWithGoogle,
//    signinUserWithGithub,
//    signinUserWithTwitter
// } from 'Actions';

class Contact extends Component {


Delete(index) {
    console.log(index);
    
    const state = this.state;
    state.addWarehouse.splice(index, 1);
    this.setState(state)
    
}


	/**
	 * On User Signup
	 */
   // onUserSignUp() {
   //    const { email, password } = this.state;
   //    if (email !== '' && password !== '') {
   //       this.props.signupUserInFirebase({ email, password }, this.props.history);
   //    }
   // }

   render() {
    
    const options = [
        { value: 'BUYER', label: 'BUYER' },
        { value: 'CEO', label: 'CEO' },
        { value: 'CTO', label: 'CTO' },
        { value: 'MANAGER', label: 'MANAGER' },
        { value: 'SALES', label: 'SALES' },
        { value: 'OTHER', label: 'OTHER' },
      ];
      // const { name, email, password } = this.state;
      // const { loading } = this.props;
      return (
        <div class="row bg-white form_bg">
                        

                    

                            {/* <!-- form_2 --> */}
                            <div class="form_2" >
                                <div class="contat_form">
                                    <form id="regForm1" action="/action_page.php">

                                        {/* <!-- One "tab" for each step in the form: --> */}
                                        <div>
                                            <div class="w-100 col-12 mb-0 col-md-8">
                                                <h3 class="clr-blue">Your winning team</h3>
                                                <p class="clr-blue font-14 font-weight-bold mb-0">Feel freeto add contacts. They will be our support team for questions and inquiries so we can provide the best customer service</p>
                                            </div>
                                            {/* <!--  <div class="accordion_section w-100 d-inline-block">

                                                </div> --> */}
                                            <div class="col-12 col-md-8 float-md-left">
                                                <div class="tab row d-block">
                                                    <div class="d-inline-block w-100">
                                                    {
                                                        this.props.addContact && this.props.addContact.map((key,i) => {
                                                            return(
                                                                <div class="contact_form col-12  w-100 outer active" id="contact_1" key={i}>
                                                                    <div class="inner">

                                                                        <div class="accordion1  d-inline-block w-100">
                                                                            <h3 class="clr-blue">Contact #{i+1}</h3>
                                                                        </div>
                                                                        <div class="row">
                                                                        <div class="form-group col-12 col-sm-6 float-md-left padding_top_10">
                                                                            <label>
                                                                                <p className="label-txt">Name*</p>
                                                                                <input type="name" className="form-control" id="name" aria-describedby="name"/>
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-group col-12 col-sm-6 float-md-left ">
                                                                            <label>
                                                                                <p className="label-txt">Contact Phone*</p>
                                                                                <input type="number" className="form-control" id="number" aria-describedby="number"/>
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-group col-12 col-sm-6 float-md-left">
                                                                            <label>
                                                                                <p className="label-txt">Contact Email*</p>
                                                                                <input type="email" className="form-control" id="email" aria-describedby="email"/>
                                                                            </label>
                                                                        </div>
                                                                        <div class="form-group col-12 col-sm-6 float-md-left">
                                                                            <Select
                                                                            value={this.props.selectedContact[i]}
                                                                            onChange={this.props.handleSelectContact.bind(this,i)}
                                                                            options={options}
                                                                            placeholder='Select Position'/>
                                                                        </div>
                                                                        <div class="form-group w-100 col-12 float-md-left">
                                                                            
                                                                            <textarea class="form-control w-100 font-48 clr1 text-left mb-0 Kontrapunktregular top_border" placeholder="Contact Comment" rows="5" id="comment" name="Contact Comment"></textarea>
                                                                        </div>
                                                                        <div class="custom-control custom-checkbox mb-3  col-12 col-sm-12 float-md-left">
                                                                            <Checkbox checked={this.props.contact[i]} onChange={this.props.isChecked.bind(this, i)} color='#6192c8' size='2' />
                                                                            <label className= 'check-lable'>Send fulfillment emails to this contact</label>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                            {/* <div class="edit">
                                                                <div class="accordion1 d-inline-block w-100">
                                                                    <h3 class="clr-blue">Contact #1</h3>
                                                                    <p class="d-inline-block font-14 mb-0">Israel Israeli</p>
                                                                    <div class="edit_text float-right">
                                                                        <a href="javascript:void(0);" class="clr_red font-14 contact_edit">edit</a>
                                                                        <a href="javascript:void(0);" class="clr_red font-14">delete</a> </div>
                                                                </div>
                                                            </div> */}
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                    
                                                        {/* <!-- accordian  --> */}
                                                        <div class="d-inline-block w-100 col-12" id="accordion">
                                                            <div class="card border-0">
                                                                <div class="card-header" id="headingtwo">
                                                                    <span className="btn btn-link clr_red w-100 text-left" onClick={this.props.Open}><i className="fas"><FontAwesomeIcon icon={faPlus}/></i>Add another contact</span>
                                                                    
                                                                </div>


                                                                {/* <!-- Notifications --> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab row">Contact Info:
                                                </div>
                                            </div>
                                            <div class="text-center col-12 col-md-4 mt-4 mt-md-0 float-md-right">
                                                <img src={AppConfig.image} class="img-fluid" alt="images"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* <!-- legal approvel  --> */}
                            <div class="form_4 legal_approvel" style={{display: "none"}}>
                                <div class=" ">
                                    <div class="w-100 col-12 mb-4">
                                        <h3 class="clr-blue">Our contract</h3>
                                        <p class="font-14 clr-blue font-weight-bold">All terms of our agreement are listed here. READ ALL the details and SIGN in the end</p>
                                    </div>
                                    <div class="col-12 col-md-8 float-md-left">
                                        <div class="info_box">
                                            <div class="scroll">
                                                <p class="font-14 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felissodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit. amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcumauris, malesuada quis ornare accumsan, blandit sed diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetranec, mattis ac neque. mauris, malesuada quis ornare accumsan, blandit sed diam.</p>
                                                <button type="button" class="font-24 btn bg_red c-white ml-0">CONTINUE<i class="fas fa-chevron-down"></i></button>
                                                <h3 class="clr_red">Draw Your Signature:</h3>
                                                <div class="draw_text d-flex align-items-center justify-content-center">
                                                    <div class="draw_pen">
                                                        <img src={AppConfig.draw} alt="draw_pen"/>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="text-center col-12 col-md-4 mt-4 mt-md-0 float-md-right">
                                        <img src={AppConfig.image} class="img-fluid" alt="images"/>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- form 3 --> */}
                            <div class="form_3" style={{display: "none"}}>
                                <div class="w-100 col-12 mb-4 mt-4">
                                    <h3 class="clr-blue">Payment Info</h3>
                                    <div class="row">
                                        <div class="col-8 align-items-center mt-3">
                                            <div class="img_iline">
                                                <img src={AppConfig.information} alt="information"/>

                                            </div>
                                            <p class="clr-blue font-14 font-weight-bold">Our payment schedule is every two weeks on Wednesdays for purchases made two weeks before the scheduled payment date. We pay via ACH. You can access all payment information via the American Outlets seller portal.</p>

                                        </div>
                                        <div class="col-12 col-md-8 margin-top-70">

                                            <form id="regForm2" action="/action_page.php">

                                                {/* <!-- One "tab" for each step in the form: --> */}
                                                <h3 class="clr-blue">Account information</h3>
                                                <div class=" form row">
                                                    <div class="form-3">
                                                        <div class="form-group col-12">
                                                            <input placeholder="Business Name" class="form-control font-48 clr1 text-left mb-0 Kontrapunktregular top_border" name="123w.seller way "/>
                                                        </div>
                                                        <div class="form-group col-12 col-sm-6 float-md-left">
                                                            <input placeholder="Bank Name" class="form-control font-48 clr1 text-left mb-0 Kontrapunktregular top_border" name="Address Line 2*"/>
                                                        </div>
                                                        <div class="form-group col-12 col-sm-6 float-md-left">
                                                            <input placeholder="Account #" class="form-control font-48 clr1 text-left mb-0 Kontrapunktregular top_border" name="Address Line 2*"/>

                                                        </div>

                                                        <div class="form-group col-12 col-sm-6 float-md-left">
                                                            <input placeholder="Routing Number #" class="form-control font-48 clr1 text-left mb-0 Kontrapunktregular top_border" name="City"/>
                                                        </div>
                                                        <div class="form-group col-12 col-sm-6 float-md-left">
                                                            <input placeholder="Bank City. State" class="form-control font-48 clr1 text-left mb-0 Kontrapunktregular top_border" name="Bank"/>
                                                        </div>
                                                        <div class="benifits d-inline-block w-100 col-12 margin-top-70">
                                                            <h3 class="clr-blue"><i class="fas fa-dollar-sign clr-blue"></i>Merchant benefits</h3>
                                                            <ul class="pl-0">
                                                                <li class="font-14"><i class="fas fa-check-circle"></i>One-click integration</li>
                                                                <li class="font-14"><i class="fas fa-check-circle"></i>Localization of product listings</li>
                                                                <li class="font-14"><i class="fas fa-check-circle"></i>Marketing and advertising</li>
                                                                <li class="font-14"><i class="fas fa-check-circle"></i>Global shipping costs, export fees, taxes, customs, etc.</li>
                                                                <li class="font-14"><i class="fas fa-check-circle"></i>24/7 customer support team</li>
                                                                <li class="font-14"><i class="fas fa-check-circle"></i>Returns costs (manufacturer defects excluded)</li>
                                                                <li class="font-14"><i class="fas fa-check-circle"></i>Consolidated fulfillment to American Outlets Florida fulfillment facility</li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                    {/* <!-- wherehosue form --> */}

                                                </div>

                                            </form>

                                        </div>
                                        <div class="text-center col-12 col-md-4 mt-4 mt-md-0">
                                            <img src={AppConfig.image} class="img-fluid" alt="images"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
      );
   }
}

// map state to props
// const mapStateToProps = ({ authUser }) => {
//    const { loading } = authUser;
//    return { loading };
// };

// export default connect(mapStateToProps, {
//    signupUserInFirebase,
//    signinUserWithFacebook,
//    signinUserWithGoogle,
//    signinUserWithGithub,
//    signinUserWithTwitter
// })(Signup);
export default Contact
