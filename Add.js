/**
 * Sign Up With Firebase
 */
import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'
import Checkbox from 'react-simple-checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

// redux action
// import {
//    signupUserInFirebase,
//    signinUserWithFacebook,
//    signinUserWithGoogle,
//    signinUserWithGithub,
//    signinUserWithTwitter
// } from 'Actions';

class Add extends Component {

 


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
        { value: '0', label: 'State1' },
        { value: '1', label: 'State2' },
        { value: '2', label: 'State3' },
        { value: '3', label: 'State4' },
      ];
      const options_country = [
        { value: '0', label: 'Country1' },
        { value: '1', label: 'Country2' },
        { value: '2', label: 'Country3' },
        { value: '3', label: 'Country4' },
      ]
      // const { name, email, password } = this.state;
      // const { loading } = this.props;
      return (
        <div className="row bg-white form_bg">
                        <div className="w-100 col-12 mb-4">
                            <h3 className="clr-blue">Your address is essential to setting up your profile. But<br/> don't worry, we won't spam you.</h3>
                        </div>
                        <div className="col-12 col-md-8">
                            <form id="regForm3" action="/action_page.php">

                                {/* <!-- One "tab" for each step in the form: --> */}
                                <div className=" form row">
                                    <div className="form-1">
                                        <div className="form-group col-12 padding_top_10">
                                            <label>
                                                <p className="label-txt">Address Line 1*</p>
                                                <input type="text" className="form-control" id="address1" aria-describedby="text" onChange={this.props.handleChangeInput} value={this.props.address1} required/>
                                            </label>
                                        </div>
                                        <div className="form-group col-12 ">
                                            <label>
                                                <p className="label-txt">Address Line 2</p>
                                                <input type="text" className="form-control" id="address2" aria-describedby="text" onChange={this.props.handleChangeInput} value={this.props.address2}/>
                                            </label>
                                        </div>
                                        <div className="form-group col-12 col-sm-6 float-md-left">
                                            <Select
                                            value={this.props.selectedAddress}
                                            onChange={this.props.handleSelectAddress}
                                            options={options}
                                            placeholder='Select State'/>
                                        </div>

                                        <div className="form-group col-12 col-sm-6 float-md-left">
                                            <label>
                                                <p className="label-txt">City*</p>
                                                <input type="text" className="form-control" id="city" aria-describedby="text" onChange={this.props.handleChangeInput} value={this.props.city} />
                                            </label>
                                        </div>
                                        <div className="form-group col-12 d-inline-block">
                                            <label>
                                                <p className="label-txt">ZIPcode*</p>
                                                <input type="number" className="form-control" id="zipcode" aria-describedby="number" onChange={this.props.handleChangeInput} value={this.props.zipcode}/>
                                            </label>
                                        </div>
                                        <div className="form-group col-12 ">
                                            <label>
                                                <p className="label-txt">Tax ID Number*</p>
                                                <input type="number" className="form-control" id="taxid" aria-describedby="number" onChange={this.props.handleChangeInput} value={this.props.taxid}/>
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3  col-12 col-sm-6 float-md-left">
                                            <Checkbox checked={this.props.warehouse} onChange={(e) => this.props.isChecked(e , 'warehouse')} color='#6192c8' size='2' />
                                            <label className= 'check-lable'>Set this address as Warehouse address</label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3  col-12 col-sm-6 float-md-left">
                                            <Checkbox checked={this.props.return} onChange={(e) => this.props.isChecked(e, 'return')} color='#6192c8' size='2' />
                                            <label className= 'check-lable'>Set this address as Return address</label>
                                        </div>
                                    </div>

                                    {/* <!-- wherehosue form --> */}
                                    { 
                                        this.props.addWarehouse && this.props.addWarehouse.map((key,i) =>
                                        {
                                            
                                        return(
                                            <div className="form_2 w-100 " id="Warehouse_1" key={i}>

                                                <div className="w-100 col-12 d-inline-block mb-4 form_2_text" >
                                                    <h3 className="clr-blue d-inline-block w-100">Warehouse #{i+1} </h3>
                                                    <p>Let us know where is your warehouses located </p>
                                                    <span className="clr_red" onClick={this.props.Delete.bind(this, i)}>Delete</span>
                                                </div>
                                                <div className="form-group col-12 col-sm-6 float-md-left">
                                                    <label>
                                                        <p className="label-txt">Warehouse Name</p>
                                                        <input type="text" className="form-control" id="warehouse_name" aria-describedby="text" />
                                                    </label>                                         
                                                </div>

                                                <div className="form-group col-12 col-sm-6 float-md-left">
                                                    <label>
                                                        <p className="label-txt">Warehouse Address</p>
                                                        <input type="text" className="form-control" id="warehouse_address" aria-describedby="text" />
                                                    </label>
                                                </div>
        
                                                <div className="form-group col-12 col-sm-6 float-md-left">
                                                    <label>
                                                        <p className="label-txt">Warehouse City</p>
                                                        <input type="text" className="form-control" id="warehouse_city" aria-describedby="text" />
                                                    </label>
                                                </div>
        
                                                <div className="form-group col-12 col-sm-6 float-md-left">
                                                    <label>
                                                        <p className="label-txt">Warehouse Zipcode</p>
                                                        <input type="text" className="form-control" id="warehouse_zipcode" aria-describedby="text" />
                                                    </label>
                                                </div>

                                                <div className="form-group col-12 col-sm-6 float-md-left">
                                                    <Select
                                                    value={this.props.selectedAddressArray[i]}
                                                    onChange={ this.props.handleSelectAddressArray.bind(this,i)}
                                                    options={options}
                                                    placeholder='Select State'/>
                                                </div>
                                                <div className="form-group col-12 col-sm-6 float-md-left">
                                                    <Select
                                                    value={this.props.selectedCountryArray[i]}
                                                    onChange={ this.props.handleSelectCountryArray.bind(this,i)}
                                                    options={options_country}
                                                    placeholder='Select Country'/>
                                                    
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3 col-12 col-sm-6 float-md-left">
                                                    <Checkbox checked={this.props.return_2[i]} onChange={(e) => this.props.isChecked(e, 'return_2',i)} color='#6192c8' size='2' />
                                                    <label className= 'check-lable'>Set this address as Return address</label>
                                                </div>
    
                                            </div>
                                            )
                                        })
                                    
                                    }
                                    {/* <!-- accordian  --> */}
                                    <div className="d-inline-block w-100 mt-40 col-12" id="accordion2">
                                        <div className="card border-0">
                                            <div className="card-header" id="headingOne">

                                                <span className="btn btn-link clr_red w-100 text-left" onClick={this.props.Open}><i className="fas"><FontAwesomeIcon icon={faPlus}/></i>Add Warehouse Address</span>

                                            </div>
                                            {/* <!-- Notifications --> */}
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body pl-0 pr-0 pb-0">
                                                    <div className="card_inner">
                                                        <h3 className="font-24 clr-blue"><i className="far"><FontAwesomeIcon icon={faBell}/></i> Notifications</h3>
                                                        <RadioGroup
                                                        aria-label="order"
                                                        name="order"
                                                        className='radio-button'
                                                        value={this.props.order}
                                                        onChange={e => this.props.handleChange(e,'order')}
                                                        >
                                                        <FormControlLabel value="For every order" control={<Radio />} label="For every order" />
                                                        <FormControlLabel value="Order summary at the end of the day" control={<Radio />} label="Order summary at the end of the day" />
                                                        
                                                        </RadioGroup>                  
                                                    </div>

                                                    {/* <!-- Fulfillment  --> */}
                                                    <div className="card_inner">
                                                        <h3 className="font-24 clr-blue"><img src={AppConfig.service} alt="24-hour-service"/> 24-hour-service Fulfillment</h3>
                                                        <p>Orders must be fulfilled in 2-3 business days once order is received by seller. A tracking number must be provided via your account on the American Outlets merchant portal.</p>
                                                        <p>How would you like to ship orders:</p>
                                                        <RadioGroup
                                                        aria-label="ship"
                                                        name="ship"
                                                        className='radio-button'
                                                        value={this.props.ship}
                                                        onChange={e=>this.props.handleChange(e, 'ship')}
                                                        >
                                                        <FormControlLabel value="Ship orders individually" control={<Radio />} label="Ship orders individually" />
                                                        <FormControlLabel value="Ship from order summary provided at the end of each day" control={<Radio />} label="Ship from order summary provided at the end of each day" />
                                                        
                                                        </RadioGroup>     
                                                        
                                                    </div>

                                                    {/* <!-- Returns --> */}
                                                    <div className="card_inner">
                                                        <h3 className="font-24 clr-blue"><img src={AppConfig.service03} alt="24-hour-service"/>  24-hour-service Returns</h3>
                                                        <p>We have a return rate of less than 1%. Return time to merchants is within 30 to 45 business days. We manage the returns process for our merchants, from customer to merchant warehouse.</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="text-center col-12 col-md-4 mt-4 mt-md-0">
                            <img src={AppConfig.image} className="img-fluid" alt="images"/>
                        </div>

                        {/* <!-- form_2 --> */}
                        {/* <!-- legal approvel  --> */}
                        {/* <!-- form 3 --> */}
                        

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
export default Add
