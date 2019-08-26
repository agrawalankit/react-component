/**
 * Sign Up With Firebase
 */
import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import { connect } from 'react-redux';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import { Link } from 'react-router-dom';
// import { Form, FormGroup, Input } from 'reactstrap';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import QueueAnim from 'rc-queue-anim';
// import { Fab } from '@material-ui/core';
import '../assets/css/index.css'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
// components
// import { SessionSlider } from 'Components/Widgets';
import Select from 'react-select';

//import { MultiSelect } from 'dropdown-select';
import 'dropdown-select/dist/css/dropdown-select.css';
// app config
import AppConfig from 'Constants/AppConfig';
import Header from '../components/Header/AO-header';
import Footer from '../components/Footer/AO-footer'
//header


// redux action
// import {
//    signupUserInFirebase,
//    signinUserWithFacebook,
//    signinUserWithGoogle,
//    signinUserWithGithub,
//    signinUserWithTwitter
// } from 'Actions';

class Signup extends Component {

   state = {
      company_name: '',
      display_name:'',
      email: '',
      password: '',
      con_password: '',
      web:'www.website.com',
      ebay:'www.ebay.com',
      selectedOption: [],
      match: true,
      categories: true
   }
   componentDidMount(){
      $(document).ready(function(){
  
          $('input').focus(function(){
            $(this).parent().find(".label-txt").addClass('label-active');
          });
          
          $("input").focusout(function(){
            if ($(this).val() === '') {
              $(this).parent().find(".label-txt").removeClass('label-active');
            };
          });
          
          });
  
  }
  handleChange = (e) =>{
   this.setState({
       [e.target.id]: e.target.value
   })
}

  handleSelect = selectedOption => {
   this.state.selectedOption.push(selectedOption)
   this.setState({ selectedOption});
   this.setState({categories: true})
  }
  Submit = (bid) => {
   bid.preventDefault();
   
   let data ={ 
      company_name:this.state.company_name,
      display_name:this.state.display_name,
      email:this.state.email,
      password:this.state.password,
      con_password:this.state.con_password,
      web:this.state.web,
      ebay:this.state.ebay,
      select: this.state.selectedOption
   }
   if(this.state.selectedOption.length === 0){
      this.setState({categories: false})
   }
   else{
      if(this.state.password !== this.state.con_password){
         this.setState({match: false})
         this.setState({con_password:''})
      }
      else{
         console.log(data);
         
         this.props.history.push('/form')
      }
   }
   
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
         { value: 'shoes', label: 'Shoes' },
         { value: 'jewelry', label: 'Jewelry and watches' },
         { value: 'electronic', label: 'Electronic' },
         { value: 'beauty', label: 'Beauty & personal care' },
         { value: 'toy', label: 'Toys & baby' },
         { value: 'home', label: 'Home' },
         { value: 'supplements', label: 'Supplements' },
         { value: 'other', label: 'Other' },
       ];
      
      // const { name, email, password } = this.state;
      // const { loading } = this.props;
      return (
         <div id="wrapper_container">
            {/* <!-- header --> */}
            <Header/>
            {/* <!-- body section  --> */}
            <section className="body_content position-relative">
               <form onSubmit={this.Submit}>
                  <div className="container">
                     <div className="row  align-items-center bg-white form_bg">
                        <div className="w-100 col-12">
                              <h3 className="clr-blue">Let's create an account</h3>
                        </div>
                        <div className="col-12 col-md-8">
                           <div className="form-row">
                              <label className="clr-blue col-12 font-weight-bold info">*required field</label>
                              <div className="form-group col-md-6 col-lg-4 col-12 col-sm-6">
                                 <label>
                                    <p className="label-txt">Company Name*</p>
                                    <input type="name" className="form-control" id="company_name" name="company_name" onChange = {this.handleChange}  required/>
                                 </label>
                              </div>

                              <div className="form-group col-md-6 col-lg-4 col-12 col-sm-6">
                                 <label>
                                    <p className="label-txt">Display Name*</p>
                                    <input type="name" className="form-control" id="display_name" name="display_name" onChange = {this.handleChange}  required/>
                                 </label>
                              </div>

                              <div className="form-group col-md-6 col-lg-4 col-12">
                                 <label>
                                    <p className="label-txt">Email Address*</p>
                                    <input type="email" className="form-control" id="email" name="email" onChange = {this.handleChange}  required />  
                                 </label>
                              </div>

                              <div className="form-group col-md-6 col-12 col-sm-6">
                                 <label>
                                    <p className="label-txt">Password*</p>
                                    <input type="password" className="form-control" id="password" name="password" onChange = {this.handleChange}  required />
                                 </label>
                              </div>

                              <div className="form-group col-md-6 col-12 col-sm-6">
                                 <label>
                                    <p className="label-txt">Confirm Password*</p>
                                    <input type="password" className="form-control" id="con_password" name="con_password" onChange = {this.handleChange}  required />
                                 </label>
                                 <span style={this.state.match?{display:'none'}:{display:'block',color: '#d31241', fontSize: '10px',}}><FontAwesomeIcon icon={faExclamationCircle} style={{marginRight: '5px'}}/>Those Passwords did'nt match. Try again</span>
                              </div>

                              <div className="form-group col-md-12 col-12 col-lg-6" >
                                 <label className="font-weight-bold clr-blue" id="inputPassword4">Your Website:</label>
                                 <input type="text" className="form-control" id="web" name="web" onChange = {this.handleChange}  value={this.state.web} required />
                              </div>

                              <div className="form-group col-md-12 col-12 col-lg-6" >
                                 <label for="store" className="font-weight-bold clr-blue"><img src={AppConfig.store1} alt="store"/><img src={AppConfig.store2} alt="store"/> Your store</label>
                                 <input type="text" className="form-control" id="ebay" name="ebay" onChange = {this.handleChange}  value={this.state.ebay} required />
                              </div>
                              <div className="form-group col-12 col-md-12 col-lg-12 select signup" >
                                 {/* <Select
                                    value={this.state.selectedOption}
                                    onChange={this.handleSelect}
                                    options={options}
                                    placeholder='Categories'/> */}
                                 <Select
                                    closeMenuOnSelect={false}
                                    onChange={this.handleSelect}
                                    isMulti
                                    options={options}
                                    placeholder='Categories'
                                 />  
                                 <span style={this.state.categories?{display:'none'}:{display:'block',color: '#d31241', fontSize: '10px',}}><FontAwesomeIcon icon={faExclamationCircle} style={{marginRight: '5px'}}/>Please select atleast one Category</span>          
                             </div>
                           </div>
                        </div>
                        <div className="text-center col-12 col-md-4 mt-4 mt-md-0">
                              <img src={AppConfig.image}  className="img-fluid" alt="images"/>
                        </div>
                     </div>
                     <button type="submit" className="btn btn-primary bg_red" >Let's Start</button>
                     <div className="row text-center footer_bootom w-100">
                        <p className="w-100">UX UI Design by <img src={AppConfig.footer} alt="footer"/></p>
                     </div>
                  </div>
               </form>
            </section>

            {/* <!-- footer --> */}
            <Footer/>
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
export default Signup
